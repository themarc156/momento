// ============================================================================
// Tailwind-Konfiguration für Momento
// ============================================================================
// Was ist das? Bisher hast du Tailwind über ein <script>-Tag von einem CDN
// geladen (cdn.tailwindcss.com). Das erzeugt bei JEDEM Seitenaufruf im
// Browser live das komplette CSS neu – bequem zum Entwickeln, aber für den
// echten Betrieb unnötig langsam (Nutzer laden ein riesiges JS-Paket, das
// dann erst im Browser CSS generiert) und Tailwind selbst warnt davor, das
// CDN-Skript in Produktion zu verwenden.
//
// Die Lösung: Tailwind EINMAL (bei dir am Rechner, nicht beim Nutzer im
// Browser) über einen npm-Befehl in eine fertige, kleine style.css-Datei
// "kompilieren" ("Build"). Diese Datei ist danach eine ganz normale
// CSS-Datei, so wie deine bisherige style.css auch – der Nutzer lädt sie
// einfach, ganz ohne dass im Browser irgendetwas neu berechnet wird.
//
// "content": Hier sagst du Tailwind, in WELCHEN Dateien es nach benutzten
// Klassen suchen soll (z.B. "bg-retro-accent"). Nur Klassen, die hier auch
// wirklich gefunden werden, landen im fertigen CSS – dadurch bleibt die
// Datei winzig statt (wie beim CDN) alle denkbaren Tailwind-Klassen zu
// enthalten.
module.exports = {
  content: [
    './public/**/*.html',
    './public/**/*.js'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // 1:1 übernommen aus dem bisherigen <script>tailwind.config = {...}</script>
      // in index.html. Die Farben selbst stehen weiterhin als CSS-Variablen
      // in style.css (--bg-color, --accent-color, ...) -> Theme-Umschalten
      // (data-theme="90s") funktioniert dadurch unverändert weiter.
      colors: {
        retro: {
          bg: 'var(--bg-color)',
          card: 'var(--card-bg)',
          border: 'var(--border-color)',
          accent: 'var(--accent-color)',
          secondary: 'var(--secondary-color)',
          text: 'var(--text-main)',
          muted: 'var(--text-muted)',
          subtle: 'var(--box-subtle)'
        }
      }
    }
  },
  plugins: []
};
