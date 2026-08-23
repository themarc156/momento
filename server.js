// ============================================================================
// FühlIch / Momento – Backend-Server
// ============================================================================
// Was macht diese Datei?
// Sie startet einen kleinen Webserver (mit dem Framework "Express"), der:
//   1) Das Frontend (index.html, style.css, script.js) direkt mit ausliefert
//      -> "All-in-One Deployment": Frontend + Backend laufen auf demselben
//      Host, dadurch brauchst du KEIN separates Hosting für das Frontend und
//      KEIN CORS mehr für den Normalfall (Browser blockiert nur Anfragen an
//      ANDERE Adressen, nicht an die eigene).
//   2) Echte Community-Statistiken speichert (statt der bisherigen Fake-Werte
//      im Frontend) – wer hat wie abgestimmt.
//   3) Die Fremdeinschätzung ("Wie siehst du mich?") serverseitig abwickelt,
//      damit der echte Wert des Erstellers NICHT mehr für jeden lesbar in der
//      URL steht, sondern erst nach der Antwort des Empfängers aufgelöst wird.
//   4) Schreibende Endpunkte gegen Spam/Überlastung absichert
//      ("Rate-Limiting").
//
// Begriffe, die gleich vorkommen:
// - "Express"       -> ein Baukasten für Webserver in Node.js. Man definiert
//                       "Routen" (z.B. "wenn jemand POST /api/vote aufruft,
//                       tu dies") statt alles von Hand über Sockets zu bauen.
// - "Middleware"     -> Code, der VOR der eigentlichen Route läuft, z.B. um
//                       eingehende JSON-Daten lesbar zu machen, statische
//                       Dateien auszuliefern oder Anfragen zu begrenzen.
// - "express.static" -> Middleware, die einen Ordner (bei uns: "public")
//                       automatisch als Webseite ausliefert. Ruft jemand "/"
//                       auf, wird automatisch "public/index.html" gesendet.
// - "CORS"           -> Browser blockieren standardmäßig Anfragen von einer
//                       Webseite an eine ANDERE Adresse. Da Frontend und
//                       Backend jetzt vom selben Host kommen, ist CORS nur
//                       noch als Absicherung/Fallback nötig (z.B. lokale
//                       Entwicklung mit "Live Server" auf einem anderen Port).
// - "Rate-Limiting"  -> Begrenzung, wie oft eine IP-Adresse in einem
//                       Zeitfenster eine Route aufrufen darf. Schützt vor
//                       Spam-Bots und davor, dass SQLite mit tausenden
//                       Schreibzugriffen pro Sekunde überlastet wird.
// - "SQLite"         -> eine Datenbank, die komplett in einer einzigen Datei
//                       auf der Festplatte liegt. Kein separater Datenbank-
//                       Server nötig, ideal zum Starten.
// - "deviceId"       -> eine zufällige ID, die der Browser sich selbst gibt
//                       (kein Login/Passwort), um Anfragen wiederzuerkennen.
// ============================================================================

const express = require('express');
const cors = require('cors');
const crypto = require('crypto');
const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');
const rateLimit = require('express-rate-limit');

// ----------------------------------------------------------------------------
// 1) DATENBANK EINRICHTEN
// ----------------------------------------------------------------------------
// DB_PATH kommt aus einer Umgebungsvariable, damit du auf Railway/Render einen
// dauerhaften Speicherort (ein "Volume") angeben kannst, der Deployments
// übersteht. Lokal auf deinem Rechner reicht der Standard-Pfad im Ordner.
const DB_PATH = process.env.DB_PATH || path.join(__dirname, 'data.db');

// Falls der Ordner für die DB-Datei noch nicht existiert, legen wir ihn an
// (wichtig, wenn DB_PATH z.B. auf "/data/data.db" zeigt).
const dbDir = path.dirname(DB_PATH);
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

const db = new Database(DB_PATH);
// WAL = "Write-Ahead Logging". Macht die Datenbank robuster/schneller bei
// gleichzeitigen Zugriffen. Für uns: einfach anschalten und nicht mehr
// dran denken.
db.pragma('journal_mode = WAL');

// Tabellen anlegen, falls sie noch nicht existieren (passiert nur beim
// allerersten Start bzw. auf einer frischen Datenbank-Datei).
db.exec(`
  CREATE TABLE IF NOT EXISTS votes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    topic_id TEXT NOT NULL,
    version_id TEXT NOT NULL,
    device_id TEXT NOT NULL,
    option_value TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    UNIQUE(topic_id, version_id, device_id)
  );

  CREATE TABLE IF NOT EXISTS estimate_requests (
    id TEXT PRIMARY KEY,
    topic_id TEXT NOT NULL,
    version_id TEXT NOT NULL,
    creator_name TEXT NOT NULL,
    creator_val TEXT NOT NULL,
    creator_device_id TEXT NOT NULL,
    guesser_val TEXT,
    guesser_device_id TEXT,
    status TEXT NOT NULL DEFAULT 'pending',
    seen_by_creator INTEGER NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    resolved_at TEXT
  );

  CREATE INDEX IF NOT EXISTS idx_votes_topic_version
    ON votes (topic_id, version_id);

  CREATE INDEX IF NOT EXISTS idx_estimate_creator
    ON estimate_requests (creator_device_id, status, seen_by_creator);

  -- Speichert selbsterstellte Themen ("Custom Topics") als kompletten
  -- JSON-Block (payload_json). Warum JSON statt einzelner Spalten pro Feld?
  -- Ein Topic hat verschachtelte Daten (mehrere "versions", jede mit eigenen
  -- Optionen) – das 1:1 in SQL-Tabellen abzubilden wäre für unseren
  -- Anwendungsfall unnötig komplex. Da wir nie NACH einzelnen Feldern
  -- innerhalb eines Topics suchen (immer nur "gib mir Topic X komplett"),
  -- ist ein JSON-Blob hier die pragmatischere, wartbarere Lösung.
  CREATE TABLE IF NOT EXISTS custom_topics (
    id TEXT PRIMARY KEY,
    payload_json TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
  );

  -- "Gedanken"/Kommentare zu einem Thema. Bewusst pro TOPIC (nicht pro
  -- einzelner Version) gespeichert, weil das Frontend Kommentare schon
  -- immer so gruppiert hat (topic.memories, unabhängig von der gerade
  -- aktiven Version).
  CREATE TABLE IF NOT EXISTS comments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    topic_id TEXT NOT NULL,
    user_name TEXT NOT NULL,
    text TEXT NOT NULL,
    device_id TEXT,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE INDEX IF NOT EXISTS idx_comments_topic
    ON comments (topic_id, created_at);

  -- Ordnet einer deviceId den zuletzt bekannten, selbstgewählten Nickname
  -- zu. WICHTIG: Das ist bewusst NUR der App-interne Spitzname (derselbe,
  -- der auch bei Kommentaren/Fremdeinschätzungen angezeigt wird) - KEINE
  -- echten Kontaktdaten wie Klarname, Telefonnummer oder Social-Media-
  -- Handle. Wird aktualisiert, sobald jemand abstimmt oder eine
  -- Vibe-Anfrage sendet (siehe upsertUser weiter unten).
  CREATE TABLE IF NOT EXISTS users (
    device_id TEXT PRIMARY KEY,
    nickname TEXT NOT NULL,
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
  );

  -- Echtes Matching per Double-Opt-In: A fragt bei B an ("Vibe anfragen"),
  -- B muss aktiv zustimmen ("Annehmen"), bevor irgendetwas als "gematcht"
  -- gilt. status durchläuft: pending -> accepted ODER declined.
  -- seen_by_to / seen_by_from steuern getrennt, ob EMPFÄNGER die Anfrage
  -- schon im Postfach gesehen hat bzw. ob ABSENDER das Ergebnis (angenommen/
  -- abgelehnt) schon gesehen hat - dieselbe Idee wie schon bei
  -- estimate_requests.seen_by_creator.
  CREATE TABLE IF NOT EXISTS vibe_requests (
    id TEXT PRIMARY KEY,
    topic_id TEXT NOT NULL,
    version_id TEXT NOT NULL,
    option_value TEXT NOT NULL,
    from_device_id TEXT NOT NULL,
    from_nickname TEXT NOT NULL,
    to_device_id TEXT NOT NULL,
    to_nickname TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'pending',
    seen_by_to INTEGER NOT NULL DEFAULT 0,
    seen_by_from INTEGER NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    resolved_at TEXT
  );

  CREATE INDEX IF NOT EXISTS idx_vibe_requests_to
    ON vibe_requests (to_device_id, status);

  CREATE INDEX IF NOT EXISTS idx_vibe_requests_from
    ON vibe_requests (from_device_id, seen_by_from);
`);

// ----------------------------------------------------------------------------
// 2) HILFSFUNKTIONEN (Datenbank-Abfragen, die mehrfach gebraucht werden)
// ----------------------------------------------------------------------------

// Speichert/aktualisiert die Zuordnung deviceId -> Nickname. Wird bei jeder
// Stimmabgabe und jeder Vibe-Anfrage aufgerufen, damit für möglichst viele
// aktive Nutzer ein aktueller Nickname bekannt ist, wenn sie später als
// Match-Partner für jemand anderen auftauchen. "INSERT ... ON CONFLICT
// DO UPDATE" = anlegen, falls neu, sonst überschreiben (der Nickname kann
// sich ja ändern, siehe Share-Modal).
function upsertUser(deviceId, nickname) {
  if (!deviceId || !nickname) return;
  db.prepare(`
    INSERT INTO users (device_id, nickname, updated_at)
    VALUES (?, ?, datetime('now'))
    ON CONFLICT(device_id) DO UPDATE SET
      nickname = excluded.nickname,
      updated_at = datetime('now')
  `).run(String(deviceId), String(nickname).slice(0, 20));
}

// Zählt für eine Karte (topicId + versionId), wie oft jede Antwortoption
// gewählt wurde. Funktioniert für "choice"-Karten (Trilemma) 1:1.
function getOptionCounts(topicId, versionId) {
  const rows = db.prepare(`
    SELECT option_value AS value, COUNT(*) AS count
    FROM votes
    WHERE topic_id = ? AND version_id = ?
    GROUP BY option_value
  `).all(topicId, versionId);

  const total = rows.reduce((sum, row) => sum + row.count, 0);
  return { total, counts: rows };
}

// Berechnet für "versus"-Karten (Skala 0-100) den Durchschnittswert aller
// Stimmen. option_value ist bei diesem Kartentyp eine Zahl als Text.
function getVersusAverage(topicId, versionId) {
  const row = db.prepare(`
    SELECT AVG(CAST(option_value AS REAL)) AS average, COUNT(*) AS total
    FROM votes
    WHERE topic_id = ? AND version_id = ?
  `).get(topicId, versionId);

  return {
    average: row.average === null ? null : Math.round(row.average),
    total: row.total
  };
}

// Baut ein kombiniertes Stats-Objekt, das das Frontend direkt verwenden kann
// (egal ob choice- oder versus-Karte).
function buildStatsResponse(topicId, versionId) {
  const counts = getOptionCounts(topicId, versionId);
  const versus = getVersusAverage(topicId, versionId);
  return {
    total: counts.total,
    counts: counts.counts,       // z.B. [{ value: "Pizza", count: 12 }, ...]
    average: versus.average,     // z.B. 63 (nur relevant für versus-Karten)
  };
}

// ----------------------------------------------------------------------------
// 3) EXPRESS-APP + MIDDLEWARE
// ----------------------------------------------------------------------------
const app = express();

// Railway/Render laufen selbst hinter einem Reverse-Proxy. Das sagt Express,
// dass es der "X-Forwarded-For"-Kopfzeile vertrauen soll, um die ECHTE
// IP-Adresse des Nutzers zu ermitteln (statt der IP des Proxys). Wichtig,
// damit das Rate-Limiting unten korrekt pro Nutzer statt pro Proxy zählt.
app.set('trust proxy', 1);

// Erlaubt dem Server, JSON-Daten im Request-Body zu lesen
// (req.body.xyz funktioniert erst dadurch).
app.use(express.json());

// CORS: Da Frontend und Backend jetzt vom selben Host laufen (All-in-One
// Deployment), brauchst du das im Normalfall nicht mehr. Bleibt als
// Absicherung für lokale Entwicklung (z.B. wenn du das Frontend mal separat
// mit einem "Live Server" auf einem anderen Port testest) und für den Fall,
// dass du später doch wieder getrennt hostest.
const allowedOrigin = process.env.FRONTEND_ORIGIN || '*';
app.use(cors({ origin: allowedOrigin }));

// Ganz simples Logging, damit du im Railway-Log siehst, was passiert.
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.path}`);
  next();
});

// Statische Dateien (index.html, style.css, script.js) aus dem Ordner
// "public" ausliefern. Ruft jemand "https://deine-app.de/" auf, sendet
// Express automatisch "public/index.html" -> Frontend und Backend laufen
// jetzt auf ein- und derselben Adresse.
//
// WICHTIG für die Sicherheit: express.static zeigt NUR auf den Ordner
// "public". server.js, package.json und die Datenbank-Datei (data.db)
// liegen eine Ebene höher (__dirname) und sind dadurch über den Browser
// NICHT erreichbar – auch nicht, wenn jemand den Dateinamen errät.
// (Würde man stattdessen express.static(__dirname) verwenden, wären genau
// diese Dateien plötzlich öffentlich abrufbar. Deshalb bewusst NICHT so.)
app.use(express.static(path.join(__dirname, 'public'), {
  dotfiles: 'ignore',  // Dateien, die mit "." beginnen (z.B. ".env"), nie ausliefern
  index: 'index.html', // Bei "/" genau diese Datei senden
  extensions: false    // KEIN automatisches Raten von ".html" bei Anfragen
                        // ohne Endung – verhindert unabsichtliches Freigeben
                        // von Dateien, die du später versehentlich in
                        // "public" ablegst.
}));

// ----------------------------------------------------------------------------
// 4) RATE-LIMITING
// ----------------------------------------------------------------------------
// Begrenzt, wie oft eine einzelne IP-Adresse innerhalb eines Zeitfensters
// schreibende Anfragen stellen darf. Absichtlich großzügig eingestellt
// (30 Anfragen/Minute), damit z.B. mehrere Personen im selben WLAN (Schule,
// Büro, Wohnverbund) sich nicht gegenseitig blockieren – das eigentliche
// "keine Doppel-Stimme"-Problem lösen ohnehin schon deviceId + die
// UNIQUE-Constraint in der Datenbank (siehe Tabelle "votes" oben).
const writeLimiter = rateLimit({
  windowMs: 60 * 1000,   // 1 Minute Zeitfenster
  max: 30,                // max. 30 schreibende Anfragen pro IP in diesem Fenster
  standardHeaders: true,  // moderne "RateLimit-*"-Header in der Antwort
  legacyHeaders: false,   // alte "X-RateLimit-*"-Header abschalten (unnötig)
  message: { error: 'Zu viele Anfragen. Bitte kurz warten und erneut versuchen.' }
});

// ----------------------------------------------------------------------------
// 5) ROUTEN: VOTES / COMMUNITY-STATISTIK
// ----------------------------------------------------------------------------

// Health-Check: nützlich, damit Railway/Render prüfen kann, ob der Server lebt.
app.get('/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// Eine Stimme abgeben (oder die eigene Stimme für diese Karte ändern).
// Body: { topicId, versionId, option, deviceId }
app.post('/api/vote', writeLimiter, (req, res) => {
  const { topicId, versionId, option, deviceId, nickname } = req.body || {};

  if (!topicId || !versionId || option === undefined || option === null || !deviceId) {
    return res.status(400).json({
      error: 'topicId, versionId, option und deviceId sind erforderlich.'
    });
  }

  // "UPSERT": Falls dieses Gerät für diese Karte schon abgestimmt hat, wird
  // die alte Stimme überschrieben statt eine zweite Zeile anzulegen.
  db.prepare(`
    INSERT INTO votes (topic_id, version_id, device_id, option_value)
    VALUES (?, ?, ?, ?)
    ON CONFLICT(topic_id, version_id, device_id)
    DO UPDATE SET option_value = excluded.option_value, created_at = datetime('now')
  `).run(String(topicId), String(versionId), String(deviceId), String(option));

  // nickname ist optional (ältere Frontend-Versionen schicken es evtl. noch
  // nicht mit) - pflegt NUR die device_id->Nickname-Zuordnung fürs
  // Momento-Match-Feature, ändert nichts an der Stimme selbst.
  if (nickname) upsertUser(deviceId, nickname);

  res.json({
    ok: true,
    stats: buildStatsResponse(topicId, versionId)
  });
});

// Aktuelle Statistik für eine Karte abrufen (z.B. beim Laden der Karte,
// bevor überhaupt abgestimmt wurde – oder um Werte zu aktualisieren).
// Nur Lesezugriff -> kein Rate-Limiting nötig.
app.get('/api/stats/:topicId/:versionId', (req, res) => {
  const { topicId, versionId } = req.params;
  res.json(buildStatsResponse(topicId, versionId));
});

// ----------------------------------------------------------------------------
// 6) ROUTEN: FREMDEINSCHÄTZUNG ("WIE SIEHST DU MICH?")
// ----------------------------------------------------------------------------

// Ersteller legt eine neue Fremdeinschätzungs-Anfrage an.
// Body: { topicId, versionId, creatorName, creatorVal, creatorDeviceId }
// Antwort: { shareId } -> diese ID kommt in den Share-Link, NICHT der Wert.
app.post('/api/estimate', writeLimiter, (req, res) => {
  const { topicId, versionId, creatorName, creatorVal, creatorDeviceId } = req.body || {};

  if (!topicId || !versionId || !creatorName || creatorVal === undefined || creatorVal === null || !creatorDeviceId) {
    return res.status(400).json({
      error: 'topicId, versionId, creatorName, creatorVal und creatorDeviceId sind erforderlich.'
    });
  }

  const shareId = crypto.randomUUID();

  db.prepare(`
    INSERT INTO estimate_requests
      (id, topic_id, version_id, creator_name, creator_val, creator_device_id)
    VALUES (?, ?, ?, ?, ?, ?)
  `).run(
    shareId,
    String(topicId),
    String(versionId),
    String(creatorName).slice(0, 40), // Sicherheitsnetz gegen sehr lange Namen
    String(creatorVal),
    String(creatorDeviceId)
  );

  res.json({ ok: true, shareId });
});

// Empfänger öffnet den Link -> holt sich die Meta-Infos zur Anfrage.
// WICHTIG: creator_val wird hier bewusst NICHT mitgeschickt, damit der
// Empfänger den echten Wert nicht vorab sehen kann. Nur Lesezugriff -> kein
// Rate-Limiting nötig.
app.get('/api/estimate/:shareId', (req, res) => {
  const row = db.prepare(`
    SELECT id, topic_id, version_id, creator_name, status
    FROM estimate_requests
    WHERE id = ?
  `).get(req.params.shareId);

  if (!row) {
    return res.status(404).json({ error: 'Diese Fremdeinschätzungs-Anfrage existiert nicht (mehr).' });
  }

  res.json({
    shareId: row.id,
    topicId: row.topic_id,
    versionId: row.version_id,
    creatorName: row.creator_name,
    status: row.status // 'pending' oder 'resolved'
  });
});

// Empfänger gibt seine Einschätzung ab -> ab hier wird aufgelöst.
// Body: { guesserVal, guesserDeviceId }
app.post('/api/estimate/:shareId/respond', writeLimiter, (req, res) => {
  const { guesserVal, guesserDeviceId } = req.body || {};
  const shareId = req.params.shareId;

  if (guesserVal === undefined || guesserVal === null || !guesserDeviceId) {
    return res.status(400).json({ error: 'guesserVal und guesserDeviceId sind erforderlich.' });
  }

  const row = db.prepare(`SELECT * FROM estimate_requests WHERE id = ?`).get(shareId);

  if (!row) {
    return res.status(404).json({ error: 'Diese Fremdeinschätzungs-Anfrage existiert nicht (mehr).' });
  }

  // Falls schon beantwortet: einfach das gespeicherte Ergebnis zurückgeben,
  // statt einen Fehler zu werfen (z.B. bei doppeltem Klick/Reload).
  if (row.status === 'resolved') {
    return res.json({
      creatorName: row.creator_name,
      creatorVal: row.creator_val,
      guesserVal: row.guesser_val,
      alreadyResolved: true
    });
  }

  db.prepare(`
    UPDATE estimate_requests
    SET guesser_val = ?, guesser_device_id = ?, status = 'resolved', resolved_at = datetime('now')
    WHERE id = ?
  `).run(String(guesserVal), String(guesserDeviceId), shareId);

  res.json({
    creatorName: row.creator_name,
    creatorVal: row.creator_val,
    guesserVal: String(guesserVal),
    alreadyResolved: false
  });
});

// "Postfach" des Erstellers: neue, noch ungesehene Auflösungen abrufen.
// Das ist die einfache Vorstufe zu echten Push-Benachrichtigungen – die
// App fragt hier in Abständen nach ("Polling"), statt dass der Server
// aktiv etwas an das Handy schickt. Nur Lesezugriff -> kein Rate-Limiting.
app.get('/api/estimate/inbox/:deviceId', (req, res) => {
  const rows = db.prepare(`
    SELECT id, topic_id, version_id, creator_val, guesser_val, resolved_at
    FROM estimate_requests
    WHERE creator_device_id = ? AND status = 'resolved' AND seen_by_creator = 0
    ORDER BY resolved_at DESC
  `).all(req.params.deviceId);

  res.json({ results: rows });
});

// Markiert eine oder mehrere Auflösungen als "gesehen", damit sie nicht
// beim nächsten Poll erneut auftauchen.
// Body: { shareIds: ["id1", "id2", ...] }
app.post('/api/estimate/inbox/:deviceId/ack', writeLimiter, (req, res) => {
  const { shareIds } = req.body || {};

  if (!Array.isArray(shareIds) || shareIds.length === 0) {
    return res.status(400).json({ error: 'shareIds (nicht-leeres Array) ist erforderlich.' });
  }

  const markAsSeen = db.prepare(`
    UPDATE estimate_requests
    SET seen_by_creator = 1
    WHERE id = ? AND creator_device_id = ?
  `);

  // "Transaction" = alle Updates zusammen ausführen, damit entweder alles
  // oder nichts davon gespeichert wird (kein halbfertiger Zustand).
  const runAll = db.transaction((ids) => {
    for (const id of ids) {
      markAsSeen.run(id, req.params.deviceId);
    }
  });
  runAll(shareIds);

  res.json({ ok: true });
});

// ----------------------------------------------------------------------------
// 6b) ROUTEN: CUSTOM TOPICS (selbsterstellte Karten teilbar machen)
// ----------------------------------------------------------------------------
// Problem, das diese Routen lösen: Legt ein Nutzer ein eigenes Thema an
// (z.B. "topic-1755..."), landet es bisher NUR im localStorage seines
// eigenen Browsers. Schickt er den Share-Link an einen Freund, kennt dessen
// Browser dieses Thema nicht -> die Karte kann nicht angezeigt werden.
// Lösung: Beim Erstellen/Ändern wird das Thema zusätzlich hier gespeichert;
// beim Öffnen eines Links lädt das Frontend fehlende Themen von hier nach.

// Ein einfaches Sicherheitsnetz: verhindert, dass jemand über diesen
// Endpunkt riesige JSON-Pakete hochlädt und so den Server/die DB belastet.
const MAX_TOPIC_PAYLOAD_CHARS = 20000;

// Nutzer legt ein neues Thema an ODER ändert ein bestehenes eigenes Thema
// (z.B. neue Version hinzugefügt) -> das komplette Topic-Objekt wird hier
// hochgeladen und ersetzt den bisherigen Stand ("Upsert": einfügen ODER
// aktualisieren, je nachdem ob die id schon existiert).
// Body: { id, title, category, memories, versions, ... } (das komplette
// Topic-Objekt, so wie es auch in masterTopics im Frontend liegt)
app.post('/api/topics', writeLimiter, (req, res) => {
  const topic = req.body;

  if (!topic || typeof topic !== 'object' || !topic.id || !topic.title || !Array.isArray(topic.versions)) {
    return res.status(400).json({
      error: 'Ungültiges Topic-Objekt: id, title und versions (Array) sind erforderlich.'
    });
  }

  const payloadJson = JSON.stringify(topic);
  if (payloadJson.length > MAX_TOPIC_PAYLOAD_CHARS) {
    return res.status(413).json({ error: 'Thema ist zu groß, um gespeichert zu werden.' });
  }

  db.prepare(`
    INSERT INTO custom_topics (id, payload_json, updated_at)
    VALUES (?, ?, datetime('now'))
    ON CONFLICT(id) DO UPDATE SET
      payload_json = excluded.payload_json,
      updated_at = datetime('now')
  `).run(String(topic.id), payloadJson);

  res.json({ ok: true, id: topic.id });
});

// Ein einzelnes Thema per ID abrufen (wird vom Frontend genutzt, wenn ein
// Deep-Link auf eine Topic-ID zeigt, die lokal noch nicht bekannt ist).
// Nur Lesezugriff -> kein Rate-Limiting nötig.
app.get('/api/topics/:id', (req, res) => {
  const row = db.prepare(`
    SELECT payload_json FROM custom_topics WHERE id = ?
  `).get(req.params.id);

  if (!row) {
    return res.status(404).json({ error: 'Dieses Thema existiert nicht (mehr) auf dem Server.' });
  }

  // payload_json enthält bereits ein vollständiges, valides JSON-Objekt
  // (wir haben es selbst so gespeichert) -> einfach direkt zurückgeben.
  res.type('application/json').send(row.payload_json);
});

// ----------------------------------------------------------------------------
// 6c) ROUTEN: KOMMENTARE ("GEDANKEN")
// ----------------------------------------------------------------------------
// Löst das Problem, dass Kommentare bisher NUR im Browser-Speicher des
// jeweiligen Nutzers existierten (topic.memories im Frontend-State) -> beim
// Neuladen der Seite oder bei einem anderen Nutzer waren sie unsichtbar.
//
// WICHTIG (siehe auch Punkt 1, XSS): Die hier gespeicherten Texte kommen
// von SQLite unverändert zurück und werden im Frontend erst beim Anzeigen
// über escapeHtml() abgesichert. Server-seitig kümmern wir uns NICHT ums
// Escaping (das wäre der falsche Ort dafür – wir würden sonst den
// Rohtext in der Datenbank verfälschen), sondern nur um sinnvolle
// LÄNGENGRENZEN, damit niemand die Datenbank mit riesigen Texten flutet.
const MAX_COMMENT_LENGTH = 280;   // Ähnlich wie ein Tweet – reicht für "Senf dazu"
const MAX_COMMENT_USERNAME_LENGTH = 20; // Passend zum maxlength="20" im Frontend

// Alle Kommentare zu einem Thema abrufen, neueste zuerst (wie bisher im
// Frontend: topic.memories.unshift(...) hat neue Kommentare oben eingefügt).
// Nur Lesezugriff -> kein Rate-Limiting nötig.
app.get('/api/comments/:topicId', (req, res) => {
  const rows = db.prepare(`
    SELECT id, user_name AS user, text, created_at
    FROM comments
    WHERE topic_id = ?
    ORDER BY created_at DESC, id DESC
    LIMIT 100
  `).all(req.params.topicId);

  res.json({ comments: rows });
});

// Neuen Kommentar zu einem Thema anlegen.
// Body: { topicId, userName, text, deviceId }
app.post('/api/comments', writeLimiter, (req, res) => {
  const { topicId, userName, text, deviceId } = req.body || {};

  if (!topicId || !text || !String(text).trim()) {
    return res.status(400).json({ error: 'topicId und text sind erforderlich.' });
  }

  const cleanText = String(text).trim().slice(0, MAX_COMMENT_LENGTH);
  const cleanUserName = String(userName || 'Anonymus').trim().slice(0, MAX_COMMENT_USERNAME_LENGTH) || 'Anonymus';

  const result = db.prepare(`
    INSERT INTO comments (topic_id, user_name, text, device_id)
    VALUES (?, ?, ?, ?)
  `).run(String(topicId), cleanUserName, cleanText, deviceId ? String(deviceId) : null);

  res.json({
    ok: true,
    comment: {
      id: result.lastInsertRowid,
      user: cleanUserName,
      text: cleanText,
      created_at: new Date().toISOString()
    }
  });
});

// ----------------------------------------------------------------------------
// 6d) ROUTEN: MOMENTO-MATCH (echtes Matching per Double-Opt-In)
// ----------------------------------------------------------------------------
// Ersetzt das bisher rein simulierte Match im Frontend (Math.random()) durch
// echtes Abgleichen der Stimmen in der Datenbank. WICHTIG (siehe auch die
// Erklärung im Chat): Nach einem Match wird NUR der App-interne Nickname der
// Gegenseite sichtbar - dieselbe pseudonyme Information, die ohnehin schon
// bei Kommentaren/Fremdeinschätzungen zu sehen ist. Es werden KEINE echten
// Kontaktdaten (Klarname, Telefonnummer, Social-Media-Handle) gesammelt oder
// ausgetauscht.

// Schritt A: Nach einem echten Match-Partner suchen, der/die für dieselbe
// Karte dieselbe Option gewählt hat wie man selbst. Nur Lesezugriff -> kein
// Rate-Limiting nötig.
app.get('/api/momento/match/:topicId/:versionId', (req, res) => {
  const { topicId, versionId } = req.params;
  const deviceId = req.query.deviceId;

  if (!deviceId) {
    return res.status(400).json({ error: 'deviceId ist als Query-Parameter erforderlich.' });
  }

  const ownVote = db.prepare(`
    SELECT option_value FROM votes WHERE topic_id = ? AND version_id = ? AND device_id = ?
  `).get(topicId, versionId, deviceId);

  if (!ownVote) {
    return res.status(400).json({ error: 'Du musst zuerst selbst abstimmen, bevor ein Match gesucht werden kann.' });
  }

  // Zufälligen anderen Nutzer mit DERSELBEN Antwort auf DIESELBE Karte
  // finden. "ORDER BY RANDOM()" ist bei der (kleinen) Datenmenge einer
  // Karten-Community völlig ausreichend performant.
  const match = db.prepare(`
    SELECT device_id, option_value FROM votes
    WHERE topic_id = ? AND version_id = ? AND option_value = ? AND device_id != ?
    ORDER BY RANDOM() LIMIT 1
  `).get(topicId, versionId, ownVote.option_value, deviceId);

  if (!match) {
    // Kein Fake-Match mehr als Fallback - ehrliche Antwort, das Frontend
    // zeigt dafür einen passenden Hinweistext statt eines erfundenen Namens.
    return res.json({ matched: false });
  }

  const matchUser = db.prepare(`SELECT nickname FROM users WHERE device_id = ?`).get(match.device_id);

  res.json({
    matched: true,
    matchDeviceId: match.device_id,
    matchNickname: matchUser ? matchUser.nickname : 'Jemand',
    optionValue: match.option_value
  });
});

// Schritt B: Vibe-Anfrage an den gefundenen Match-Partner senden.
// Body: { topicId, versionId, fromDeviceId, fromNickname, toDeviceId }
app.post('/api/momento/vibe-request', writeLimiter, (req, res) => {
  const { topicId, versionId, fromDeviceId, fromNickname, toDeviceId } = req.body || {};

  if (!topicId || !versionId || !fromDeviceId || !fromNickname || !toDeviceId) {
    return res.status(400).json({
      error: 'topicId, versionId, fromDeviceId, fromNickname und toDeviceId sind erforderlich.'
    });
  }
  if (fromDeviceId === toDeviceId) {
    return res.status(400).json({ error: 'Du kannst dir nicht selbst eine Vibe-Anfrage schicken.' });
  }

  // Sicherheitscheck (nicht nur Bequemlichkeit): Wir vertrauen dem Client
  // nicht blind, dass die beiden wirklich gematcht haben - wir prüfen selbst
  // nach, dass BEIDE Geräte für diese Karte dieselbe Option gewählt haben.
  // Verhindert, dass jemand beliebige deviceIds anschreiben kann.
  const fromVote = db.prepare(`SELECT option_value FROM votes WHERE topic_id = ? AND version_id = ? AND device_id = ?`).get(topicId, versionId, fromDeviceId);
  const toVote = db.prepare(`SELECT option_value FROM votes WHERE topic_id = ? AND version_id = ? AND device_id = ?`).get(topicId, versionId, toDeviceId);

  if (!fromVote || !toVote || fromVote.option_value !== toVote.option_value) {
    return res.status(400).json({ error: 'Für diese Karte liegt kein passendes Match zwischen diesen beiden Geräten vor.' });
  }

  upsertUser(fromDeviceId, fromNickname);

  // Spam-Schutz: Gibt es zwischen diesen beiden Geräten für diese Karte
  // schon eine offene oder bereits angenommene Anfrage (in egal welcher
  // Richtung), wird KEINE neue Zeile angelegt, sondern die bestehende
  // zurückgegeben.
  const existing = db.prepare(`
    SELECT * FROM vibe_requests
    WHERE topic_id = ? AND version_id = ?
      AND status IN ('pending', 'accepted')
      AND ((from_device_id = ? AND to_device_id = ?) OR (from_device_id = ? AND to_device_id = ?))
  `).get(topicId, versionId, fromDeviceId, toDeviceId, toDeviceId, fromDeviceId);

  if (existing) {
    return res.json({ ok: true, requestId: existing.id, status: existing.status, alreadyExisted: true });
  }

  const toUser = db.prepare(`SELECT nickname FROM users WHERE device_id = ?`).get(toDeviceId);
  const toNickname = toUser ? toUser.nickname : 'Jemand';
  const requestId = crypto.randomUUID();

  db.prepare(`
    INSERT INTO vibe_requests
      (id, topic_id, version_id, option_value, from_device_id, from_nickname, to_device_id, to_nickname)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `).run(requestId, String(topicId), String(versionId), String(fromVote.option_value), String(fromDeviceId), String(fromNickname).slice(0, 20), String(toDeviceId), toNickname);

  res.json({ ok: true, requestId, status: 'pending', alreadyExisted: false });
});

// Schritt C: Postfach-Integration. Liefert zwei Listen:
// - "incoming": offene Anfragen AN dieses Gerät (müssen mit Annehmen/
//   Ablehnen beantwortet werden - das ist die eigentliche "Aktion" im
//   Postfach, es gibt daher kein separates "gelesen"-Markieren dafür).
// - "resolved": Anfragen, die DIESES Gerät als Absender verschickt hat und
//   die inzwischen beantwortet wurden, aber noch nicht "gesehen" sind
//   (analog zum bestehenden Fremdeinschätzungs-Postfach).
// Nur Lesezugriff -> kein Rate-Limiting nötig.
app.get('/api/momento/inbox/:deviceId', (req, res) => {
  const { deviceId } = req.params;

  const incoming = db.prepare(`
    SELECT id, topic_id, version_id, option_value, from_nickname, created_at
    FROM vibe_requests
    WHERE to_device_id = ? AND status = 'pending'
    ORDER BY created_at DESC
  `).all(deviceId);

  const resolved = db.prepare(`
    SELECT id, topic_id, version_id, to_nickname, status, resolved_at
    FROM vibe_requests
    WHERE from_device_id = ? AND status IN ('accepted', 'declined') AND seen_by_from = 0
    ORDER BY resolved_at DESC
  `).all(deviceId);

  res.json({ incoming, resolved });
});

// Schritt C: Empfänger nimmt an oder lehnt ab.
// Body: { deviceId, action } - action: 'accept' | 'decline'
app.post('/api/momento/vibe-request/:id/respond', writeLimiter, (req, res) => {
  const { deviceId, action } = req.body || {};
  const { id } = req.params;

  if (!deviceId || (action !== 'accept' && action !== 'decline')) {
    return res.status(400).json({ error: 'deviceId und action ("accept" oder "decline") sind erforderlich.' });
  }

  const request = db.prepare(`SELECT * FROM vibe_requests WHERE id = ?`).get(id);
  if (!request) {
    return res.status(404).json({ error: 'Diese Vibe-Anfrage existiert nicht (mehr).' });
  }
  if (request.to_device_id !== deviceId) {
    return res.status(403).json({ error: 'Nur der/die Empfänger:in kann auf diese Anfrage antworten.' });
  }
  if (request.status !== 'pending') {
    return res.json({ ok: true, status: request.status, fromNickname: request.from_nickname, alreadyResolved: true });
  }

  const newStatus = action === 'accept' ? 'accepted' : 'declined';
  db.prepare(`
    UPDATE vibe_requests SET status = ?, resolved_at = datetime('now') WHERE id = ?
  `).run(newStatus, id);

  res.json({ ok: true, status: newStatus, fromNickname: request.from_nickname, alreadyResolved: false });
});

// Markiert Ergebnis-Benachrichtigungen (angenommen/abgelehnt) als gesehen -
// nur der ursprüngliche ABSENDER darf seine eigenen Anfragen quittieren.
// Body: { deviceId, requestIds: [...] }
app.post('/api/momento/vibe-request/ack', writeLimiter, (req, res) => {
  const { deviceId, requestIds } = req.body || {};

  if (!deviceId || !Array.isArray(requestIds) || requestIds.length === 0) {
    return res.status(400).json({ error: 'deviceId und requestIds (nicht-leeres Array) sind erforderlich.' });
  }

  const markSeen = db.prepare(`
    UPDATE vibe_requests SET seen_by_from = 1 WHERE id = ? AND from_device_id = ?
  `);
  const runAll = db.transaction((ids) => {
    for (const reqId of ids) markSeen.run(reqId, deviceId);
  });
  runAll(requestIds);

  res.json({ ok: true });
});

// ----------------------------------------------------------------------------
// 7) FEHLERBEHANDLUNG
// ----------------------------------------------------------------------------

// Für alle Routen, die es nicht gibt (z.B. Tippfehler in der API-URL oder
// eine fehlende statische Datei).
app.use((req, res) => {
  res.status(404).json({ error: 'Route nicht gefunden.' });
});

// Fängt unerwartete Fehler ab, damit der Server nicht abstürzt, sondern eine
// saubere Fehlermeldung zurückgibt.
app.use((err, req, res, next) => {
  console.error('Unerwarteter Serverfehler:', err);
  res.status(500).json({ error: 'Interner Serverfehler.' });
});

// ----------------------------------------------------------------------------
// 8) SERVER STARTEN
// ----------------------------------------------------------------------------
// Railway/Render setzen PORT automatisch selbst als Umgebungsvariable.
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`✅ Server läuft auf Port ${PORT}`);
  console.log(`📦 Datenbank-Datei: ${DB_PATH}`);
  console.log(`🌐 Frontend wird ausgeliefert aus: ${path.join(__dirname, 'public')}`);
});

// ----------------------------------------------------------------------------
// 9) GRACEFUL SHUTDOWN (sauberes Herunterfahren)
// ----------------------------------------------------------------------------
// Was ist das Problem, das das hier löst?
// SQLite läuft bei uns im "WAL-Modus" (siehe ganz oben, db.pragma(...)).
// Dabei werden neue Schreibzugriffe zunächst in eine separate "-wal"-Datei
// geschrieben und erst später in die eigentliche Datenbank-Datei übertragen
// ("Checkpoint"). Wird der Node-Prozess mitten in diesem Vorgang HART
// beendet (z.B. weil Railway/Render/Docker beim Neu-Deployen oder Skalieren
// einfach den Prozess killt), kann das im ungünstigsten Fall zu einer
// beschädigten oder inkonsistenten Datenbank führen.
//
// Die Lösung: Container-Plattformen killen einen Prozess normalerweise
// nicht sofort hart, sondern schicken zuerst ein "SIGTERM"-Signal ("Bitte
// jetzt sauber beenden") und geben ein paar Sekunden Zeit, bevor sie mit
// "SIGKILL" hart nachhelfen. Wir fangen dieses Signal ab, schließen zuerst
// den HTTP-Server (damit keine neuen Anfragen mehr angenommen werden),
// dann die Datenbank sauber mit db.close() (das erzwingt einen finalen
// Checkpoint, der die WAL-Datei ordentlich in data.db einträgt) und beenden
// den Prozess erst danach kontrolliert.
//
// "SIGINT" ist dasselbe Prinzip, kommt aber z.B. wenn DU lokal in deinem
// Terminal mit Strg+C den Server stoppst.
function gracefulShutdown(signal) {
  console.log(`\n🛑 ${signal} empfangen – fahre Server sauber herunter...`);

  server.close(() => {
    console.log('🔌 HTTP-Server geschlossen (keine neuen Anfragen mehr).');
    try {
      db.close();
      console.log('💾 Datenbank sauber geschlossen (WAL-Checkpoint durchgeführt).');
    } catch (err) {
      console.error('⚠️  Fehler beim Schließen der Datenbank:', err);
    }
    process.exit(0);
  });

  // Sicherheitsnetz: Falls server.close() aus irgendeinem Grund hängen bleibt
  // (z.B. eine Anfrage, die nie fertig wird), erzwingen wir nach 10 Sekunden
  // trotzdem den Abbruch, statt den Container endlos hängen zu lassen.
  setTimeout(() => {
    console.warn('⏱️  Shutdown hat zu lange gedauert – erzwinge Beendigung.');
    process.exit(1);
  }, 10000).unref();
}

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

// ----------------------------------------------------------------------------
// 10) DAUERHAFTE SPEICHERUNG: DB_PATH & VOLUME KONFIGURIEREN
// ----------------------------------------------------------------------------
// WICHTIG: Ohne die folgende Konfiguration verlierst du bei jedem Deployment
// (Railway/Render) ALLE Daten (Votes, Fremdeinschätzungen, Custom Topics)!
//
// Der Grund: Railway/Render starten dein Backend bei jedem Deploy in einem
// FRISCHEN Container. Alles, was während der Laufzeit auf die normale
// Festplatte des Containers geschrieben wurde (inkl. data.db), ist nach dem
// nächsten Deploy wieder weg – so wie ein Blatt Papier, das beim Neustart
// des Containers einfach durch ein leeres ersetzt wird.
//
// Die Lösung ist ein "Volume": ein Stück Festplattenspeicher, das UNABHÄNGIG
// vom Container existiert und über Neustarts/Deployments hinweg erhalten
// bleibt – wie ein externer USB-Stick, den der Container einhängt.
//
// SO RICHTEST DU ES EIN:
//
// Railway:
//   1. Im Projekt-Dashboard: "+ New" -> "Volume" auswählen.
//   2. Einen Mount-Pfad festlegen, z.B. "/data".
//   3. Als Umgebungsvariable setzen: DB_PATH=/data/data.db
//      (Railway -> dein Service -> "Variables" -> neue Variable hinzufügen)
//
// Render:
//   1. Im Service-Dashboard: "Disks" -> "Add Disk".
//   2. Mount-Pfad festlegen, z.B. "/data".
//   3. Als Environment-Variable setzen: DB_PATH=/data/data.db
//
// Docker (eigener Host):
//   docker run -v momento-data:/data -e DB_PATH=/data/data.db ...
//
// Lokal auf deinem Rechner (Entwicklung):
//   Nichts zu tun! Ohne gesetzte DB_PATH-Variable nutzt der Server
//   automatisch "./data.db" direkt im Projektordner (siehe DB_PATH ganz
//   oben in dieser Datei) – das reicht zum Testen völlig aus.
//
// ZUM SELBST-CHECKEN: Schau dir nach dem Deployment einfach das Server-Log
// an – die Zeile "📦 Datenbank-Datei: ..." (siehe oben bei app.listen)
// zeigt dir genau, welchen Pfad der Server gerade tatsächlich benutzt.
// ----------------------------------------------------------------------------
