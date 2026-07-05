# Umsetzungsplan: UX/Grafik-Overhaul "In den Himmel"

Stand: 2026-07-05 · Destilliert aus `audit-code.md`, `audit-ux.md`, `audit-visual.md`, `audit-perf.md`
Ziel: Referenzklasse neal.fun/deep-sea und besser. Die Seite ist ein oeffentliches Showcase.

## Unverhandelbare Regeln (gelten fuer jeden Batch)

1. **Vanilla JS/CSS, kein Framework, kein Build-Step.** Alles muss weiter unter `file://` laufen.
2. **Wissenschaftliche Daten unantastbar.** `data.js`, `sizes.js`, `dd_*.js`, `data_details.js` werden inhaltlich nicht angefasst. Einzige legitime Eingriffe: rein visuelle Konstanten (z. B. mehr `SKY_COLORS`-Stuetzpunkte) und Ladereihenfolge. Jede Zahl braucht Quellenpruefung.
3. **DE/EN-Paritaet.** Jeder neue Text existiert in beiden Sprachen und haengt am `setLang()`-Mechanismus. `<title>`/Meta ziehen mit.
4. **`prefers-reduced-motion`-Pfad fuer jede neue Animation.** Infrastruktur existiert (`prefersReduced()` in script.js, CSS-Media-Query in styles.css). Dauer-rAF-Loops zusaetzlich bei `document.hidden` pausieren.
5. **Rote Linien aus dem Code-Audit:** `content-visibility: auto` + `contain-intrinsic-size` auf `.sky-item` erhalten; `backdrop-filter` nie auf grosse/viele Flaechen; script.js §1 (SEGMENTS/altToY, Z. 12-51) nicht anfassen; bestehende `getElementById`-IDs in index.html sind API und bleiben.
6. **Bewahren, was schon Referenzklasse ist:** Murmel-Vergleichsboxen, freigestellte Tierfotos, Skalen-Konzept + Altimeter-Logik, Objekt-Navigation (Pfeiltasten), Quellen-Badges, funktionierender Sprachumschalter, Lazy-Loading, CLS 0.00.

Jeder Batch ist in sich abgeschlossen und unabhaengig deploybar. Nach jedem Batch: Live-Check auf Desktop 1440x900 + Mobile 390x844, Sprachwechsel-Test, reduced-motion-Test, Console muss fehlerfrei bleiben.

---

## Batch 1 — Die Reise bekommt Momente: Start, Kaerman-Payoff, Finale, Typo-Identitaet

**Warum zuerst:** Die drei groessten Erlebnis-Luecken aus UX-Audit P0 (#1 toter Einstieg, #4 kein Finale) und Visual-Audit ("kein einziger inszenierter Moment"). Erster und letzter Eindruck entscheiden, ob geteilt wird. Dazu der Canvas-DPR-Fix als Grundvoraussetzung jedes weiteren Himmels-Upgrades und der Void-Bugfix.

**Ziele:**

1. **Bodenszene** (`index.html` `#ground` + `styles.css` + Inline-SVG): Landschafts-Silhouette statt Gruen-Verlauf — Wiese, Baumreihe, Haeuser, ein Mensch als Massstabsanker. Rein additiv, `pointer-events: none`.
2. **Hero-Overlay neu** (`index.html` + `styles.css`): Motiv statt nackter Verlauf (Silhouette + Titel), Subtitle-Kontrast fixen, Gedankenstrich-Einschub im Intro-Text umformulieren (DE + EN).
3. **"Abheben" = erlebter Aufstieg** (`script.js`, Intro-Handler): sanfter Auto-Scroll (~1,5 s Easing) bis zum Haussperling (50 m), damit die inverse Scroll-Richtung durch Erleben gelernt wird. Bei `prefersReduced()`: direkter Sprung ohne Animation. Optional ein Bodenobjekt (z. B. Schmetterling, existiert in data.js) direkt im Start-Viewport sichtbar machen (nur Position/Lane, keine Datenaenderung).
4. **Kaerman-Payoff bei 100 km** (`buildSections()`/neuer Layer in `script.js` + `styles.css`): Erdkruemmung als flacher SVG-Bogen mit blauer Atmosphaeren-Linie + Airglow, im Szenen-Layer an 100 km verankert. Section-Banner dort als grosser Typo-Moment statt Pille. Kein backdrop-filter.
5. **Finale am Universumsrand** (`script.js` Builder + `styles.css`): CMB-Textur als Hintergrund der obersten Dekade, grosse zweisprachige Schluss-Card ("46,5 Mrd. Lichtjahre — weiter sehen wir nicht, weil das Licht nicht aelter ist als 13,8 Mrd. Jahre", Formulierung ohne Gedankenstrich-Einschub pruefen), Stats + "Zurueck zum Boden"-Button (smooth scroll, reduced-motion: auto). Mobile-Label-Kollisionen am Ende beheben (UX #4/Shot 15).
6. **Canvas-DPR-Fix** (`script.js` `resize()`, Z. 254-257): Canvas auf `min(devicePixelRatio, 2)` skalieren. Sterne + Gradient scharf auf Hi-DPI. Grundvoraussetzung fuer Batch 2.
7. **Void-Bugfix** (`script.js` `buildClouds()`): Cloud-Y auf `[0, GROUND_PX]` clampen, Dokumenthoehe == Szenenhoehe. Man darf nicht mehr unter den Boden scrollen (Visual-Audit 2.7.1).
8. **Typografie-System** (`styles.css` + self-hosted Font-Dateien, kein CDN): charaktervolle Display-Schrift (z. B. Space Grotesk, WOFF2 lokal) fuer Titel/Hero/Banner/Meilensteine/Finale; `font-variant-numeric: tabular-nums` fuer Altimeter und alle Hoehenwerte; klare Type-Scale. Altimeter als gestaltetes Instrument statt Admin-Box.

**Definition of Done:** Start-Viewport zeigt eine Szene, nicht Leere; Abheben fuehrt sichtbar zum ersten Objekt; bei 100 km und am Universumsrand gibt es je einen Screenshot-wuerdigen Moment; Canvas scharf auf Hi-DPI; kein Scroll unter den Boden; alle neuen Texte DE/EN; reduced-motion ueberall respektiert.

---

## Batch 2 — Bildsprache vereinheitlichen + tote Zonen beleben + Bild-Pipeline

**Warum:** UX-Audit P0 #2 (~50 % der Strecke leeres Schwarz) und #3 (45/155 Emojis, ausgerechnet die Hoehepunkte). Visual-Audit: inkonsistente Objektsprache zerstoert die Illusion. Dazu die Bild-Pipeline aus dem Code-Audit (groesster messbarer Gewinn, null Risiko) — sie gehoert hierher, weil ohnehin alle Bilder angefasst werden.

**Ziele:**

1. **Emoji-Platzhalter ersetzen, Top-Prioritaet zuerst** (`images/` + `img`-Feld-Zuweisung, KEINE Zahlen anfassen): ISS, Mond, Sonne, Saturn, Voyager, Mir, Hubble, JWST, Gagarin, Astronauten als freigestellte NASA/ESA-Fotos (Public Domain, Credit pflegen); Planeten alternativ als CSS/SVG-Kugeln mit radialem Licht, korrekten Farben und Saturn-Ring. Duplikate/Fehler erledigen sich mit (ISS==Mir-Emoji, lila Luna-2-Mond). Kreis-Chip-Rahmen entfernen, Kategorie-Farbe nur noch als feiner Akzent im Label.
2. **Rechteck-Fotos maskieren** (`styles.css`): Baumgartner, MiG-25, Halley, Orionnebel, Everest, CMB-Thumbnail weich freistellen via `mask-image: radial-gradient(...)` oder echte Cutouts. Kein hartes Rechteck mehr vor dem Himmel.
3. **Wolken ersetzen** (`buildClouds()` + `images/clouds/`, Ordner existiert leer): weiche PNG/SVG-Wolken in 2 Tiefenebenen statt Emoji; Parallax-Faktoren einmalig beim Build cachen (Vorgriff auf Batch 4-Fix).
4. **Tote Zonen: Ambient-Layer im Canvas** (`buildStars()`/`drawBg()` in script.js §4): hoehenabhaengige Sterndichte/-groesse, Milchstrassen-Band ab interstellarem Raum, schwache Nebel-Farbfelder in den Deep-Space-Dekaden, Zodiakallicht nahe der Sonne, Noise/Dithering gegen Banding. Optional dezentes Twinkle als Dauer-rAF — NUR mit drei Gates: `prefersReduced()` aus, `document.hidden` pausiert, laeuft nur wenn Sterne sichtbar (Scrollposition > ~30 km).
5. **Zwischen-Facts in langen Luecken** (`data.js` NEUE rein-additive Konstante `GAP_FACTS` o. ae. + Builder in script.js): beilaeufige zweisprachige Textzeilen in den 16 Luecken > 2 Screens ("Licht braucht bis hierher 5,5 Stunden", "Hier ist der Luftdruck nur noch 1 % des Bodenwerts"). Jede Zahl mit Quellenpruefung. Dazu Meilenstein-Linien deutlich vermehren (aktuell 6) und dezente Hoehen-Ticks am Rand.
6. **Parallax-Ebenen** (`updateParallax()` + Canvas): 2-3 Sternschichten mit unterschiedlichem Faktor + die 2 Wolkenlagen aus Ziel 3. Reduced-motion: statisch (Pfad existiert, script.js Z. 343).
7. **Bild-Pipeline** (einmalige Konvertierung + `script.js` Z. 154 Template): alle ~110 Anzeige-Bilder auf max. 320 px Breite als WebP (Erwartung −60 bis −90 % Transfer, aktuell bis 511 KB/Bild); `width`/`height`-Attribute an alle `<img>`; `images/raw/` (63 MB) vom Deploy ausschliessen; `_headers` mit `Cache-Control: max-age=31536000, immutable` fuer `/images/*`.

**Definition of Done:** Kein Objekt rendert mehr als Emoji-Chip (Emoji nur unsichtbarer `onerror`-Fallback); keine harten Foto-Rechtecke; keine Zone > 2 Screens ohne visuelles Signal (Sterne/Band/Fact/Meilenstein); Bild-Transfer eines Voll-Durchscrolls unter ~1,5 MB; `content-visibility` auf `.sky-item` intakt; Credits fuer alle neuen Bilder gepflegt.

---

## Batch 3 — Objekt-Loop, Modal, Orientierung, Shareability

**Warum:** Der Kern-Loop der Seite ist Objekt-fuer-Objekt-Erkundung — dem fehlen Flow (kein Vor/Zurueck im Modal, Fokus-Bug, Scroll-Lock-Loch) und Auffindbarkeit (keine Deep-Links, keine OG-Tags, kein Favicon: geteilte Links rendern als leere Karte). UX-Audit P0 #5, P1 #6-#8.

**Ziele:**

1. **Modal-Scroll-Lock + inert** (`script.js` `openModal()`/`closeModal()`): `body { overflow: hidden }` bei offenem Modal (Scrollposition erhalten); Szene + fixe Controls (`#controls`, `#altimeter`, `#object-nav`) via `inert` deaktivieren. Fokusfalle bleibt.
2. **Fokus-Restore-Bug fixen** (`script.js`): Nach Escape muss der Fokus zum ausloesenden `.sky-item` zurueck, nicht zum versteckten "Abheben"-Button (UX #8, getesteter A11y-Bug).
3. **Modal-Upgrade** (`script.js` §6 + `styles.css`): `it.img` als Bild-Hero oben (volle Kartenbreite, weicher Verlauf ins Panel, Emoji nur Fallback); Vor/Zurueck-Navigation (Buttons + Pfeiltasten links/rechts, Reihenfolge = Hoehe, Szene scrollt im Hintergrund mit); Murmel-Box als gestaltetes Herzstueck; Kurzfakt (Hover-Text) als erste Zeile ins Modal (damit Touch-Nutzer ihn sieht); Close-Button ≥ 44 px; Custom-Scrollbar; leeres `<p>` entfernen. Offenes Modal bei Sprachwechsel neu rendern.
4. **Deep-Linking + Share** (`script.js` `init()`/`openModal()`/`setLang()`): `#objekt-id` in der URL (beim Laden hinscrollen + Modal oeffnen, `history.replaceState` beim Oeffnen), `?lang=en` + localStorage-Persistenz der Sprachwahl. Share-Button im Modal und in der Finale-Card (Batch 1) verlinkt die aktuelle Position.
5. **OG/Meta/Favicon** (`index.html` + Assets): Open-Graph- + Twitter-Tags, `og:image` (Finale- oder Mond-Szene als statisches Bild), Favicon (SVG + PNG); `<title>` und `meta description` bei `setLang()` mitziehen (EN-title existiert bisher nicht).
6. **Orientierung** (`index.html` + `styles.css` + `script.js`): vertikale Journey-Bar am Rand (Zonen farbig, Punkt = Position, klickbar; ersetzt/ergaenzt die 120-px-Progressbar); Einheiten frueher umschalten (ab 10.000 m → km, fixt "99.996 m" und den Mobile-Zeilenumbruch); Jump-Menue mit Hoehenangabe pro Ziel ("Mond · 384.400 km"), Eintrag "Frontier" ins Deutsche, Eintraege ≥ 44 px hoch. Journey-Bar bei reduced-motion ohne Puls-Animationen.
7. **Overlap-/z-index-Fixes** (`styles.css` + `script.js`): feste z-Ordnung Menues > Tooltips > Banner > Objekte; Section-Banner-Positionen gegen Objektpositionen pruefen (Banner ueber Kaerman-Linie); Hover-Popup nie ueber Nachbar-Labels/Jump-Menue; Popup auf den Kurzfakt reduzieren (Name+Hoehe stehen schon im Label). `#hover-popup` als `role="tooltip"` + dynamisches `aria-describedby` statt permanentem `aria-hidden="true"`.
8. **Delight: Teleport-Warp + Sprung-Puls** (`script.js`): 300-500 ms Fade/Sternen-Streak beim Jump, Highlight-Puls am Zielobjekt nach Pfeiltasten-Sprung (sonst unsichtbar bei 31-px-Spruengen). Beides bei `prefersReduced()` aus (Instant-Jump wie heute). Tastatur-Shortcuts (↑/↓) im Start-Overlay kurz erklaeren, DE/EN.

**Definition of Done:** Modal-Loop komplett per Tastatur bedienbar ohne Fokus-Verlust; Seite hinterm Modal scrollt nicht; `https://…/#iss` oeffnet die ISS; geteilter Link zeigt eine echte Preview-Karte; keine sichtbare Ueberlappung von UI-Ebenen; alle neuen UI-Texte DE/EN.

---

## Batch 4 — Performance, A11y, Mobile-Feinschliff

**Warum:** Perf-Audit P1: 28 fps bei 4x-CPU-Throttling durch Forced Reflows — der Unterschied zwischen "gut" und "neal.fun-fluessig". Dazu die verbliebenen A11y-Fails (Lighthouse 96 → 100) und Mobile-Schulden. Bewusst zuletzt: Die Fixes sind messbar, aber unabhaengig von den Erlebnis-Batches, und die neuen Layer aus Batch 1-3 sollen in die Messung einfliessen.

**Ziele:**

1. **Ein einziger rAF-Loop** (`script.js`: `onFrame`, Nav-Button-Tick Z. 832-836, `currentScrollAlt` Z. 791): `scrollY` genau einmal pro Frame lesen und als Parameter an `drawBg`/`updateAltimeter`/`updateParallax`/`updateNavButtons` durchreichen; `updateNavButtons` nur bei Zielobjekt-Wechsel arbeiten lassen; die drei Scroll-Listener konsolidieren. Ziel: Forced-Reflow-Zeit im Scroll-Trace ~0.
2. **Layout-freie Writes** (`script.js`/`styles.css`): `altBarFill.style.width` → `transform: scaleX()`; Cloud-/Parallax-Faktoren aus gecachtem Array statt `dataset`-Parse pro Frame (falls nicht schon in Batch 2 erledigt); Init-Reflow (121 ms in `init`) durch Batching der Reads nach den Builds reduzieren.
3. **Detail-Daten lazy laden** (`index.html` + `script.js` `init()`): dd_*.js + data_details.js (~390 KB) nach `init()` dynamisch injizieren; Code ist dank `typeof`-Guards schon dafuer gebaut. Fallback: Modal zeigt Basis-Infos, falls Details noch laden. Versions-Suffix `?v=` konsistent auf ALLE Skripte (Stale-Cache-Mix data.js/script.js beheben).
4. **A11y-Fails schliessen** (`styles.css` Z. 80 ff., `script.js` Z. 147/161): `.atmo-label`-Kontrast auf ≥ 4.5:1 (z. B. `#858a9a`); `aria-label` der sky-items mit Jahres-Badge um das Jahr ergaenzen (WCAG 2.5.3, Sprachsteuerung). Ziel: Lighthouse Accessibility 100.
5. **robots.txt + sitemap.xml** (neue Dateien im Root): valide robots.txt mit Sitemap-Verweis, Mini-sitemap; optional `llms.txt` fuer die KI-Showcase-Story. Fixt Lighthouse SEO 92 → ~100.
6. **Mobile-Feinschliff** (`styles.css` + `script.js` Builder): `overflow-x: clip` auf den Weltcontainer (5-px-Wackeln); unter 480 px auf 2-3 Lanes reduzieren + `ITEM_H` vergroessern (Label-Kollisionen Streifengans/Bartgeier); alle Tap-Targets ≥ 44 px (Teleport-Eintraege 31 px — falls nicht schon in Batch 3 erledigt).
7. **Abschluss-Messung** (Dokumentation in `eval/ux-overhaul/`): Lighthouse Mobile + Scroll-Trace 4x-CPU vorher/nachher; Zielwerte: Accessibility 100, SEO ≥ 98, avg Frame < 16 ms bei 4x-CPU, Voll-Scroll-Transfer < 1,5 MB, Console weiterhin 0 Fehler.

**Definition of Done:** Stabil ~60 fps bei 4x-CPU-Throttling; Lighthouse A11y 100; keine horizontale Scrollbarkeit auf Mobile; Initial-Payload ohne dd_*-Daten; Messwerte dokumentiert.

---

## Batch-Uebersicht

| # | Batch | Kern-Impact | Haupt-Dateien |
|---|-------|-------------|---------------|
| 1 | Momente: Start, Kaerman, Finale, Typo, DPR | Erster/letzter Eindruck, Screenshot-Momente | index.html, styles.css, script.js (§3/§4), Font-Assets |
| 2 | Bildsprache + tote Zonen + Bild-Pipeline | Illusion haelt die ganze Strecke, −70-90 % Bild-Transfer | images/, script.js (§3/§4), styles.css, data.js (nur additiv) |
| 3 | Objekt-Loop, Modal, Orientierung, Share | Kern-Loop flowt, Links teilbar, Preview-Karten | script.js (§6), index.html (Meta), styles.css |
| 4 | Performance, A11y, Mobile | 60 fps, Lighthouse 100/100, Mobile sauber | script.js (Frame-Pfad), styles.css, robots.txt, _headers |
