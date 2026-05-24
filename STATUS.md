# Projekt-Status & Handoff — "In den Himmel"

> Übergabe-Dokument. Stand: 2026-05-24. Nach `/clear` hier weiterlesen.

## UPDATE 2026-05-24 — Untere Ebene bebildert (29 neue Bilder)
Pipeline `eval/img-harness/` erweitert um `worklist_lower.json`,
`candidates_lower_fauna.json`, `candidates_lower_tech.json`, `picks_lower.json`.
2 Researcher-Agenten (Fauna 17 / Tech 14) → Kritiker → Download (`tools/fetch_lower_images.py`)
→ Verarbeitung (`tools/prep_lower_images.py`: rembg für Fauna→PNG, Skalierung für Tech→JPG,
640px max) → Injection in data.js (`tools/inject_lower_img_fields.py`).

**Ergebnis:** 29 neue `img:` (16 Fauna + 13 Tech). 110/155 Objekte tragen jetzt ein Bild
(vorher 81). Quellen in **CREDITS_GROUND.md**. Visual-Check via Playwright (spatz, helikopter,
sr71) bestanden. **Emoji-Fallback** bleibt für `doppelschnepfe` (kein passendes Commons-Bild)
und `eustace` (kein PD/CC-Material) — bewusst dokumentiert.

## UPDATE 2026-05-22 — Bild-Audit-Remediation (committed 0f93fa4)
7-Agenten-Audit (`eval/`) fand ein unpassendes blind geholtes Bild → 14 Fehlgriffe entfernt,
`fetch_space_images.py` gehärtet, Fakten/A11y/Perf/Code korrigiert. **Danach Ersatzbilder
über Multi-Agenten-Pipeline** (`eval/img-harness/`: Researcher → Kritiker → visuelle
Endkontrolle jeder Datei) beschafft:
- **10 verifizierte Ersatzbilder** drin (tres2b, psyche, halley, sloanwall[invertiert],
  jadesz14, barnard, sirius, hyades, antares, greatattractor) — Quellen NASA/ESA-Hubble/ESO/
  Wikimedia, PD/CC, in `CREDITS_SPACE.md`. (psyche/halley waren noch falsch — jetzt korrekt.)
- **rigel, gw150914, herculescorona** bewusst Emoji-Fallback (kein gutes Thumbnail-Bild).
- **404-Churn weg:** `script.js` rendert `<img>` nur bei vorhandenem `it.img`; `data.js`
  img-Refs auf nie existierende Dateien entfernt (~70 Tier-/Flugzeug-Platzhalter + die 3).
  155 Objekte intakt, 81 img-Refs zeigen alle auf existierende Dateien, 0 defekte Bilder.
- Pipeline reproduzierbar über `eval/img-harness/worklist.json` + `candidates.json`.
- **Offen:** Tier-/Flugzeug-Fotos (untere Ebene, weiter Emoji) bei Bedarf via gleicher Pipeline
  + `prep_images.py`. favicon.ico fehlt (harmlos). Wikimedia-Commons-Bilder (Backlog #9) noch
  nicht visuell gegengeprüft.

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

## Optimierung — Fortschritt (alle 5 Phasen FERTIG & verifiziert, Stand 2026-05-21)
- **Phase 1 — Datenmodell + Hover/Detail-UI:**
  - Neue Datei `data_details.js`: `SKY_DETAILS[id] = {desc:{de,en:[Absätze]}, groups:[{title,rows:[{label,value}]}]}`,
    optional/additiv, in `index.html` vor `script.js`. Enthält die 2 Stil-Referenzen `spatz` + `quasar3c273`.
  - `script.js`: Event-Delegation auf `#objects-layer` (`setupInteraction()`) statt 155 Listener; `openModal`/`renderModalBody`
    rendert kategorisierte Sektionen + Fallback auf `fact`; Fokusfalle (`trapFocus`), Fokus-Return, `scene[aria-hidden]`;
    Items `tabindex/role/aria-label`; Enter/Space öffnet. Hover-Popup (`#hover-popup`), Touch-Fallback via `(hover: hover)`.
  - `styles.css`: `.sky-item:focus-visible`, `.modal-body/.modal-para/.modal-group/.modal-rows`, scrollbare `.modal-card`, `#hover-popup`.
- **Phase 2 — Content für alle 155 Objekte:** je `desc` (2–3 zweisprachige Absätze) + `groups` (kategorisierte Key-Facts).
  6 Batch-Dateien (alle `Object.assign(SKY_DETAILS, …)`, in index.html eingehängt): `dd_life.js` (16 Tiere),
  `dd_tech1.js` (23 Bauwerke/Luftfahrt), `dd_space.js` (27 Raumfahrt), `dd_solar.js` (11 Planeten),
  `dd_stellar.js` (32 Sterne/Exoplaneten), `dd_deep.js` (44 tiefer Kosmos). Web-faktengeprüft. **155/155 abgedeckt, 0 Strukturfehler.**
- **Phase 3 — Performance/Layout:** `.sky-item img` feste Höhe (150px/110px) gegen Layout-Shift; `html:not(.ready) #scene{visibility:hidden}`.
  Trace: **LCP 254 ms, CLS 0,00** (vorher 0,49), 0 JS-Fehler.
- **Phase 4 — Bilder:** `sgra→sgrA` Case-Fix; alle 10 fehlenden kosm. Bilder von Wikimedia Commons (CC), in `CREDITS_SPACE.md`.
- **Phase 5 — Politur:** Sternenfeld 220→560 mit dezenten Farbtönen (`STAR_TINTS`); Lichtlaufzeit-Story steckt in den `groups`
  ("Blick in die Vergangenheit"). Empty-Stretch-Marker bewusst weggelassen (Vastness gewollt, Section-Banner markieren Übergänge).
- Plan: `C:\Users\geeje\.claude\plans\weiter-mit-optimierung-von-misty-kazoo.md`

## Optimierungs-Backlog (Ausgangsliste)
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
