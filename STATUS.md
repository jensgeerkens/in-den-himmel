# Projekt-Status & Handoff — "In den Himmel"

> Übergabe-Dokument. Stand: 2026-05-21. Nach `/clear` hier weiterlesen.

## Was es ist
Interaktive Scroll-Seite (Gegenstück zu neal.fun/deep-sea): vom Boden hoch durch
Atmosphäre → Raumfahrt → Sonnensystem → **kosmischer Kern** bis zum Rand des
beobachtbaren Universums (46,5 Mrd. Lichtjahre). Vanilla HTML/CSS/JS, **per Doppelklick
auf `index.html` lauffähig** (kein Build, keine ES-Module/`fetch` — läuft unter `file://`).
Zweisprachig DE/EN.

## Stand (fertig & verifiziert)
- **155 Objekte** in `data.js` (Tiere, Flugzeuge, Raumfahrt inkl. UdSSR/Laika, Planeten,
  ~95 kosmische Objekte: nahe Sterne, bizarre Exoplaneten, Nebel, Pulsare, Riesensterne,
  Schwarze Löcher, Galaxien, Haufen/Superhaufen, Frontier/Mysterien, CMB).
- **8 erzählerische Akte** (`SECTIONS`) mit großen Bannern (`buildSections()`); Akt-Name
  im Höhenmesser; **Teleport** zwischen Akten; **Jahreszahlen** an ikonischen Objekten.
- **74/84 echte NASA/Hubble/JWST/ESO-Bilder** geholt (`images/*.jpg`); Emoji-Fallback sonst.
- Log-Skala bis 46,5 Mrd Lj, kollisionsfreie Spaltenverteilung, Detail-Modal, 0 JS-Fehler.

## Dateien
- `index.html` — Gerüst (Layer: bg-canvas, atmosphere/section/cloud/milestone/objects, ground).
- `data.js` — **Inhalt**: `LY`/`AU`-Konstanten, `SKY_DATA[]`, `ATMOSPHERE_LAYERS`,
  `SKY_COLORS`, `SPACE_YEARS`, `SECTIONS`, `TELEPORT_TARGETS`.
- `script.js` — Skala (`altToY`/`groundPxToAlt`, LOG bis `5e23` km, `PX_PER_DECADE=5000`),
  `buildScene()` (Spalten-Algorithmus `LANE_X`), `buildSections/Atmosphere/Milestones/Clouds`,
  `drawBg()` (Gradient+Sterne), `formatAlt()` (km→Mio→Mrd→Lichtjahre), Höhenmesser, Modal,
  Teleport, Sprache. Init: scrollt an den Boden, Overlay, dann `ready`.
- `styles.css` — Layout, Kategorie-Akzente, Akt-Banner, Badges, responsive, reduced-motion.
- `tools/fetch_space_images.py` — NASA Image Library Fetcher (Fallback-Suche). Neue Objekte:
  `nasa:"Suchbegriff"` in `data.js` setzen → `python tools/fetch_space_images.py`.
- `tools/prep_images.py` — rembg-Freistellung für Tier-Fotos (untere Ebene, noch Emoji).
- `CREDITS.md` / `CREDITS_SPACE.md` — Bildnachweise.

## Testen
Lokal: `python -m http.server 8000` im Projektordner → `http://127.0.0.1:8000/`.
(Playwright blockt `file://`, daher Server zum Browser-Test.)
Schnellcheck im Browser-Console: `document.querySelectorAll('.sky-item').length` → 155.

## Backups
- Git: `git log --oneline` (zuletzt `1af5c3d`). Wiederherstellen: `git checkout <hash>`.
- ZIP: `C:\Users\geeje\in-den-himmel_backup_2026-05-21.zip`.

## Optimierungs-Backlog (nächste Phase)
1. **Performance**: 155 DOM-Items + 74 Bilder. `content-visibility:auto` ist gesetzt; mit
   chrome-devtools-MCP Scroll-Performance/LCP profilen. Ggf. `width`/`height` an `<img>`
   gegen Layout-Shift, `fetchpriority`, evtl. WebP statt JPEG.
2. **Fehlende Bilder (10)**: arrokoth, luhman16, tauceti, fiftyonepeg, rogueplanet, uyscuti,
   mucephei, us708, laniakea, earendel — via ESA/ESO-Direktlinks oder bessere Suchbegriffe.
3. **Tier-/Flugzeug-Fotos** (untere Ebene) ergänzen: Wikimedia + `prep_images.py` (rembg).
4. **Mobile/Responsive** & Touch testen (Banner-Größe, Lane-Abstände, Höhenmesser).
5. **Barrierefreiheit**: Modal-Fokusfalle/Keyboard, `alt`-Texte, `prefers-reduced-motion`.
6. **Deep-Space-Hintergrund**: dezente Galaxien-Sprites/durchgehendes Sternfeld jenseits 120 km.
7. **Lichtlaufzeit-Story** im Höhenmesser/Modal („dieses Licht ist X Jahre alt“).
8. **`.gitattributes`** (`* text=auto eol=lf`) gegen die LF/CRLF-Warnungen.
9. **Faktencheck-Durchlauf** (Evaluations-Agent) über die ~95 kosmischen Einträge.
10. **Empty-Stretch-Pacing**: lange leere Log-Strecken (1→13 Mrd Lj) ggf. mit Zwischenmarken.
