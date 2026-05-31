# Projekt-Status & Handoff — "In den Himmel"

> Übergabe-Dokument. Stand: 2026-05-31. Nach `/clear` hier weiterlesen.

## QUICK-START NÄCHSTE SESSION
1. `cd C:\Users\geeje\in-den-himmel` und `python -m http.server 8000`
2. Browser: `http://127.0.0.1:8000/` (Strg+F5 wenn Cache zickt)
3. Showcase-Klicks zum schnellen Reinkommen:
   - **`ton618`** — Murmel-Skala (Berlin→Hamburg) + 4-stufige SVG-Treppe
   - **`milkyway`** — Murmel-Skala (überfordert) + SVG-Treppe Erde→Sonnensystem→Stern→Milchstraße
   - **`spatz`** — Murmel-Skala zeigt: Spatz wäre kleiner als ein Atom
4. Aktueller HEAD: `f5f2976` (Größenvergleichs-Komponente). Tag-Marker
   `pre-size-compare-v1` zeigt auf `ba8fbde` als Sicherheitsnetz.
5. ZIP-Backup: `C:\Users\geeje\in-den-himmel_backup_2026-05-24_size-compare.zip` (68 MB).

## UPDATE 2026-05-31 — Größenvergleichs-Komponente (committed f5f2976)
Universelle "Wenn-die-Erde-eine-Murmel-wäre"-Box im Modal + SVG-Treppe für Mega-Objekte.

- **`sizes.js`** (NEU): `SIZES_M[id] = {size_m, ref, note}` für **151 von 155** Objekten
  aus 11 Kategorien. Bewusst ohne size_m: `darkmatter`, `darkenergy` (Konzepte),
  `karman` (Linie ohne Ausdehnung).
- **`script.js` → `buildScaleSection`**: Berechnet `size_m * 7,85e-10` (Erde=1cm)
  und übersetzt via 22-Bin-Wörterbuch (Nanometer→Sandkorn→Bakterie→Hochhaus→
  Berlin→Hamburg→…). Distanz nur, wenn skaliert < 5e7 m sinnvoll bleibt;
  sonst `"echte Distanz sprengt die Murmel-Skala vollständig"`-Hinweis.
- **`dd_compare.js`** (NEU) + **`buildCompareSection`**: SVG-Treppe für 10 Mega-
  Objekte (sgrA, m87, holm15a, **ton618**, uyscuti, stephenson218, milkyway,
  andromeda, laniakea, universum). Pro Stufenpaar zwei Kreise (sqrt-skaliert),
  Ratio + Pfeil in der Mitte, Highlight-Stufe in orangem Akzent.
- **`styles.css`**: `.scale-card` (blau) + `.compare-card` (lila) als klar
  abgegrenzte Boxen oben im Modal, mit box-shadow für Tiefe.
- **Cache-Bust**: `styles.css?v=5`, `script.js?v=5`, **`dd_compare.js` muss VOR
  `script.js` geladen werden** (steht in index.html nach den anderen dd_*.js).

## UPDATE 2026-05-31 — Cache-Bust + Modal-Scroll robust (ba8fbde)
- Bug: alte styles.css gecached → Höhenmesser fast ausserhalb, UI schrumpft.
  Fix: `styles.css?v=3` (jetzt `?v=5`).
- `.modal-card`: `overscroll-behavior: contain` (Wheel scrollt nicht mehr durch
  zur Hauptseite), `dvh` statt `vh` (mobile Address-Bar), iOS-Touch-Trägheit.

## UPDATE 2026-05-31 — Höhenmesser + Objekt-Navigation (8ba117c)
- `--ui-bg` opaker (0.78), `--ui-border` heller-blau, `#altimeter` mit box-shadow
  → sichtbar gegen schwarzen Weltraum UND blauen Himmel.
- **Neue Pfeil-Buttons** `#next-object` (↑) / `#prev-object` (↓) unten rechts.
  `jumpObject(±1)`: nächst-höheres/tieferes Item in SKY_DATA (Viewport-Mitte).
- Tasten **ArrowUp**/**ArrowDown** als Shortcut (modal-aware, input-aware).
- Buttons disabled an den Enden (Boden / Universumsrand), rAF-debounced
  Live-Update via Scroll-Event.

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
- Git: `git log --oneline` (zuletzt `f5f2976`, Größenvergleich). Tag `pre-size-compare-v1`
  zeigt auf `ba8fbde` als letzter Stand vor dem Größenvergleichs-Block.
- ZIP (heute): `C:\Users\geeje\in-den-himmel_backup_2026-05-24_size-compare.zip` (68 MB).
- ZIP (alt):   `C:\Users\geeje\in-den-himmel_backup_2026-05-21.zip`.

## Offene Punkte für nächste Session
**Erledigt seit 2026-05-22:**
- ✓ Tier-/Flugzeug-Fotos untere Ebene (29 Bilder, doppelschnepfe + eustace
  bewusst Emoji)
- ✓ Höhenmesser-Sichtbarkeit + Objekt-Navigation (↑/↓-Buttons, Pfeil-Tasten)
- ✓ Modal-Scroll robust (overscroll, dvh, iOS-Touch)
- ✓ Größenvergleichs-Komponente (Murmel-Skala für 151/155, SVG-Treppe für 10
  Mega-Objekte)

**Noch offen / Kandidaten:**
- **Mobile/Touch-Test** (Backlog #4): Banner-Größe, Lane-Abstände, Höhenmesser,
  Modal-Scroll, Pfeil-Buttons auf Touchscreen. Per Playwright + mobile Viewport.
- **Wikimedia-Bild-Audit** (Backlog #9): die 10 Wikimedia-Bilder aus Phase 4
  noch nicht visuell durch das Audit-Harness gelaufen.
- **Größenvergleichs-Polish**:
  - Wörterbuch in `script.js` ggf. um lokale-deutsche Anker erweitern (z. B.
    "Berlin nach Frankfurt", "Größe Saarland") wenn UX-Bedarf da ist.
  - Mehr Mega-Objekte für `SKY_COMPARE` (aktuell 10) — Kandidaten: betelgeuse,
    antares, virgocluster, comacluster, sloanwall, herculescorona, quasar3c273.
  - Phase C aus dem UX-Konzept (interaktiver Vergleichs-Spielplatz mit
    Objekt A / Objekt B Auswahl) — wäre eigenes Feature.
- **Faktencheck-Durchlauf** (Backlog #9 alt) über die ~95 kosmischen Einträge.
- **Bilder noch fehlend**: arrokoth, luhman16, tauceti, fiftyonepeg, rogueplanet,
  uyscuti, mucephei, us708, laniakea, earendel — via gleicher Multi-Agenten-
  Pipeline wie für die Tiere/Aircraft (Pattern in `eval/img-harness/`
  ausreichend dokumentiert).
- **Performance-Re-Trace** mit chrome-devtools-MCP: nach +29 PNG-Tier-Bildern
  prüfen, ob LCP/CLS noch im grünen Bereich sind.

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
