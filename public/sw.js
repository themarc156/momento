// ============================================================================
// Momento – Service Worker
// ============================================================================
// Was ist ein Service Worker? Ein kleines Skript, das der Browser im
// Hintergrund laufen lässt (auch wenn die Seite nicht offen ist). Er kann
// Netzwerk-Anfragen "abfangen" und z.B. mit gespeicherten (gecachten)
// Antworten beantworten, statt jedes Mal neu zum Server zu fragen. Das
// ist die technische Voraussetzung dafür, dass eine Web-App wie eine
// "echte" App installiert werden kann und (eingeschränkt) auch offline
// oder bei wackeligem Netz nutzbar bleibt.
//
// GANZ WICHTIGE REGEL für unsere App: Alles unter "/api/..." (Votes,
// Fremdeinschätzungen, Custom Topics, Postfach) darf NIEMALS aus dem Cache
// beantwortet werden! Das wären sonst veraltete Community-Statistiken oder
// – schlimmer – ein alter, bereits überholter Stand einer Fremdeinschätzung.
// Nur die STATISCHEN Dateien (HTML/CSS/JS/Icons = "die App an sich") werden
// gecacht, niemals die sich ständig ändernden Daten.
// ============================================================================

// Name + Version des Caches. Erhöhe CACHE_VERSION (z.B. auf "v2"), wenn du
// größere Änderungen an den unten gelisteten Dateien vornimmst, damit
// Nutzer garantiert die neue Version bekommen statt einer alten aus dem
// Cache. Kleinere Änderungen bemerkt der Service Worker meist automatisch
// (der Browser vergleicht die Datei-Bytes), ein Versionssprung ist aber der
// zuverlässigste Weg, das zu erzwingen.
const CACHE_VERSION = 'v1';
const CACHE_NAME = `momento-cache-${CACHE_VERSION}`;

// "App Shell": die Grundgerüst-Dateien, ohne die die App gar nicht starten
// kann. Werden beim ersten Besuch heruntergeladen und dann lokal
// gespeichert, damit die App auch bei schlechtem Netz sofort startet.
const APP_SHELL = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
];

// ----------------------------------------------------------------------------
// INSTALL: läuft einmalig, wenn der Service Worker neu registriert/aktualisiert
// wird. Wir laden hier die App-Shell-Dateien in den Cache.
// ----------------------------------------------------------------------------
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  // Sorgt dafür, dass ein neuer Service Worker nicht erst auf das Schließen
  // aller offenen Tabs wartet, sondern sich sofort "bereit" meldet.
  self.skipWaiting();
});

// ----------------------------------------------------------------------------
// ACTIVATE: läuft, nachdem der neue Service Worker übernommen hat. Wir
// räumen hier alte Cache-Versionen auf, damit nicht unbegrenzt Speicher auf
// dem Gerät des Nutzers wächst.
// ----------------------------------------------------------------------------
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((name) => name.startsWith('momento-cache-') && name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      )
    )
  );
  self.clients.claim();
});

// ----------------------------------------------------------------------------
// FETCH: läuft bei JEDER Netzwerk-Anfrage der Seite (Bilder, Skripte, API-
// Aufrufe, ...). Hier entscheiden wir pro Anfrage, ob der Cache oder das
// echte Netzwerk zuständig ist.
// ----------------------------------------------------------------------------
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Nur eigene GET-Anfragen behandeln. POST/PUT/DELETE (z.B. Votes
  // abschicken) und Anfragen an fremde Domains (CDN-Skripte etc.) fasst der
  // Service Worker gar nicht erst an -> laufen ganz normal übers Netzwerk.
  if (event.request.method !== 'GET' || url.origin !== self.location.origin) {
    return;
  }

  // REGEL: Alles unter /api/ IMMER frisch vom Server holen, NIE aus dem
  // Cache beantworten (siehe Erklärung ganz oben in der Datei).
  if (url.pathname.startsWith('/api/')) {
    return; // Kein event.respondWith() -> der Browser macht die normale Netzwerk-Anfrage.
  }

  // Für alles andere (HTML/CSS/JS/Icons): "Cache-First mit Netzwerk-Fallback".
  // Heißt: Ist die Datei schon lokal gespeichert, wird sie SOFORT daraus
  // angezeigt (schnell, funktioniert auch offline). Ist sie noch nicht im
  // Cache, wird sie ganz normal übers Netz geladen und danach für's nächste
  // Mal im Cache abgelegt.
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;

      return fetch(event.request).then((networkResponse) => {
        // Nur erfolgreiche Antworten cachen (kein 404/500 dauerhaft speichern).
        if (networkResponse && networkResponse.ok) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
        }
        return networkResponse;
      }).catch(() => {
        // Weder Cache noch Netzwerk verfügbar (z.B. komplett offline und
        // Datei war noch nie geladen) -> Fehler einfach durchreichen, statt
        // die App abstürzen zu lassen.
        return cachedResponse;
      });
    })
  );
});
