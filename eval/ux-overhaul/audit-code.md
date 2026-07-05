# Code-Audit: "In den Himmel" — UX/Grafik-Overhaul

Statischer Audit (ohne Browser), Stand 2026-07-05.
Gelesen: `index.html`, `styles.css`, `script.js`, `data.js` (Struktur + Konstanten), `sizes.js`, `dd_compare.js`, Dateigrößen aller Assets.

Referenzrahmen: Die Seite soll das Niveau von neal.fun/deep-sea erreichen oder übertreffen. Wissenschaftliche Korrektheit und Zweisprachigkeit sind unantastbar.

---

## 0. Architektur-Kurzbild

- Kein Framework, kein Build-Step. Klassische Scripts (global scope), laufen auch unter `file://`.
- Szene: ein `#scene`-Container mit berechneter Gesamthöhe **~146.700 px** (linear-Segment ~38.160 px + log-Segment ~108.500 px, 5.000 px pro Dekade bis 5e23 km).
- Layer-Struktur in `index.html`: `atmosphere-layer`, `section-layer`, `cloud-layer`, `milestone-layer`, `objects-layer`, `#ground` — plus fixed `<canvas id="bg">` (z-index −2) für Gradient + 560 Sterne.
- 155 Objekte werden **einmalig komplett ins DOM** gebaut (`buildScene()`), Positionierung absolut via `top`/`left`, 5 Spuren gegen Überlappung.
- JS-Payload gesamt: **~505 KB unkomprimiert** (data.js 92 KB + 6 Detail-Dateien ~385 KB + script.js 41 KB), alles synchron im `<body>`-Fuß.

---

## 1. Rendering- / Performance-Risiken

### 1.1 DOM: 155 Objekte immer im DOM — aber gut abgefedert (GRÜN)
- Alle Objekte sind permanent im DOM, **aber** `.sky-item` hat `content-visibility: auto` + `contain-intrinsic-size` (styles.css Z. 154–155, mobil Z. 621). Off-screen-Items werden vom Browser nicht gerendert. Das ist die richtige Lösung; kein Virtual-Scrolling nötig.
- Kein `content-visibility` auf `.atmo-band`, `.milestone`, `.section-banner`, `.cloud` — bei ~25 Elementen unkritisch.
- Achtung bei Upgrades: **jedes** `.sky-item` trägt `backdrop-filter: blur(2px)` auf der figcaption (Z. 197). Aktuell durch content-visibility gedeckelt (nur ~5–10 sichtbar), aber weitere flächige backdrop-filter-Layer (z. B. großflächige Atmosphären-Bänder mit blur) wären ein echtes Compositing-Risiko. Regel: backdrop-filter nur auf kleinen, fixen UI-Elementen.

### 1.2 Bilder: lazy-loading vorhanden, Optimierung fehlt (GELB/ROT)
- `loading="lazy"` + `decoding="async"` sind gesetzt (script.js Z. 154), CSS reserviert feste Höhe 150 px gegen CLS (styles.css Z. 171). Gut.
- **Kein `width`/`height`-Attribut** an den `<img>` (nur CSS-Höhe) — funktioniert, aber fragil, falls CSS-Regel je angepasst wird.
- **Kein modernes Format, kein srcset**: Einzelbilder bis 300–511 KB (z. B. `sloanwall.png` 511 KB, `barnard.jpg` 407 KB, `distelfalter.png` 300 KB). Bei 110 referenzierten Bildern summiert sich ein voller Durchscroll auf mehrere MB. WebP/AVIF-Konvertierung + Resize auf max. Anzeigegröße (160 px Breite, 2x = 320 px) würde ~70–90 % sparen — ohne jede Code-Änderung außer Dateinamen.
- **`images/raw/` = 63 MB von 70 MB** des images-Ordners. Wird von der Seite nie geladen, liegt aber im Projekt und wird (falls nicht ausgeschlossen) mit auf Cloudflare Pages deployt. Aus dem Deploy ausschließen oder verschieben.

### 1.3 Canvas: sauber rAF-gedrosselt, aber ohne DPR-Skalierung (GELB)
- `drawBg()` läuft nur bei Scroll über einen `ticking`-Guard + `requestAnimationFrame` (script.js Z. 350–357). Kein Dauer-Loop → keine Idle-CPU-Last. Vorbildlich.
- Stern-Alpha ist vorberechnet (Z. 281–283), Off-screen-Sterne werden geskippt (Z. 310). 560 Arcs pro Frame sind billig.
- **Canvas wird nicht auf `devicePixelRatio` skaliert** (`resize()` Z. 254–257 nutzt nur `innerWidth/Height`). Auf jedem Hi-DPI-Display (praktisch alle Smartphones, viele Laptops) sind Gradient und Sterne **unscharf/verpixelt**. Für ein Grafik-Showcase der wichtigste Canvas-Fix; Kosten: 4×-Pixelfläche, ggf. auf `min(dpr, 2)` deckeln.
- Es gibt **keine Animations-Infrastruktur** (kein kontinuierlicher Loop): Sterne funkeln nicht, nichts driftet. Für Twinkle/Shooting Stars braucht es einen Dauer-rAF-Loop — der muss (a) bei `prefers-reduced-motion` aus bleiben, (b) bei `document.hidden` pausieren, (c) idealerweise nur laufen, wenn Sterne sichtbar sind (Scrollposition > ~30 km).

### 1.4 Scroll-Handler (GRÜN)
Drei separate `scroll`-Listener, alle `{ passive: true }` und rAF-gedrosselt bzw. trivial:
1. `requestFrame` → drawBg + Altimeter + Parallax (Z. 889),
2. `hidePopup` (Z. 755),
3. Nav-Button-Update mit eigenem rAF-Guard (Z. 832–836).
Kein Layout-Thrashing im Frame-Pfad (nur `window.scrollY` lesen, Styles schreiben). Konsolidierung in einen Handler wäre kosmetisch.

### 1.5 Skript-Ladeverhalten (GELB)
- ~385 KB Detail-Daten (`dd_*.js`, `data_details.js`) werden synchron vor `script.js` geladen, obwohl sie **nur beim Modal-Öffnen** gebraucht werden (script.js prüft überall defensiv `typeof SKY_DETAILS !== "undefined"` etc. — Lazy-Load wäre also ohne Umbau möglich: `defer`-Nachladen oder dynamisches `<script>`-Injizieren nach `init()`).
- Kein `defer` an den Script-Tags (am Body-Ende funktional gleichwertig, aber Parser-blockierend in Kette). Kein Preload fürs erste sichtbare Bild.
- Cache-Busting per `?v=5` manuell — bei Cloudflare Pages ok, aber fehleranfällig (data.js & Co. haben **kein** Versions-Suffix; nach Daten-Updates droht Stale-Cache-Mix aus alter Data + neuem Script).

### 1.6 Sprachwechsel = kompletter Szenen-Rebuild (GRÜN mit Randnotiz)
`setLang()` (Z. 842–862) baut alle Layer neu, erhält die Scrollposition über Boden-px, schaltet smooth-scroll kurz aus. Sauber. Randnotizen:
- 155 `<img>` werden neu erzeugt (Cache-Hits, aber kurzes Neu-Decodieren möglich).
- **Offenes Modal wird beim Sprachwechsel nicht neu gerendert** (bleibt in alter Sprache). Edge-Case, aber sichtbar.
- `<title>` und `meta description` bleiben immer Deutsch — für ein zweisprachiges Showcase inkonsistent.

---

## 2. UX-Schulden im Code

### 2.1 Modal: gute Basis, ein echtes Loch (GELB)
Vorhanden und korrekt: Fokusfalle (Tab-Zyklus, Z. 669–677), Escape, Fokus-Rückgabe, `aria-modal`, `aria-labelledby`, `overscroll-behavior: contain` auf der Card, sticky Close-Button, `aria-hidden` auf der Szene.
**Fehlt: Scroll-Lock auf dem Body.** `overscroll-behavior: contain` greift nur, wenn die **Card selbst** scrollbar ist und das Wheel-Event über ihr liegt. Wheel/Touch über dem **Backdrop** (`#detail-modal` ist nicht scrollbar) chained zur Seite → die Szene scrollt hinterm Modal weiter, der Nutzer verliert nach dem Schließen seine Position bzw. Altimeter/Canvas laufen sichtbar hinter dem Dialog. Fix: `body { overflow: hidden }` bei `openModal()`, zurücksetzen in `closeModal()` (Scrollposition bleibt bei `overflow:hidden` am `body` i. d. R. erhalten; sonst position:fixed-Technik).
Klein: Die Fokusfalle greift nur, wenn `document.activeElement` bereits in der Card ist; die fixen Controls (#controls, #altimeter, #object-nav) bekommen kein `aria-hidden`/`inert`, solange das Modal offen ist. `inert` auf Szene + Controls wäre der moderne, robustere Weg.

### 2.2 prefers-reduced-motion: vorbildlich abgedeckt (GRÜN)
- CSS: smooth-scroll aus, bob-Animation aus, Popup-Fade aus (styles.css Z. 631–636).
- JS: Parallax übersprungen (Z. 343), Teleport/Objekt-Sprung mit `behavior:"auto"` (Z. 773, 810).
- Bei künftigen Canvas-Animationen (Twinkle etc.) denselben Check einbauen — die Infrastruktur (`prefersReduced()`, Z. 780) existiert schon.

### 2.3 Touch / Mobile (GELB)
- Hover-Popup ist per `(hover: hover)`-Media-Query korrekt deaktiviert, Tap öffnet direkt das Modal (Z. 742). Gut.
- **Keine Touch-Gesten darüber hinaus**: kein Swipe, keine Beschleunigung. Bei ~146.700 px Seitenhöhe heißt das auf dem Handy: sehr, sehr viele Flicks. Teleport-Menü und Pfeil-Buttons existieren, sind aber klein und oben/unten rechts versteckt. Für Deep-Sea-Niveau fehlt ein "Fast-Travel"-Gefühl (z. B. gedrückt halten der Pfeil-Buttons = kontinuierlicher Aufstieg, oder eine seitliche Mini-Map/Höhenleiste zum Ziehen).
- Tap-Targets: Pfeil-Buttons 48 px (42 px mobil) — ok. Teleport-Listeneinträge ~30 px hoch — grenzwertig unter WCAG-Empfehlung.

### 2.4 Kein URL-State / Deep-Linking (GELB, große Chance)
Es gibt keinerlei Repräsentation der Position oder eines Objekts in der URL (kein Hash, keine Params). Man kann weder "schau dir die ISS an" verlinken noch die Sprache teilen. Für ein öffentliches Showcase ist teilbarer State (z. B. `#iss` scrollt hin + öffnet Modal; `?lang=en`) ein billiges, wirkungsvolles Feature — Eingriff nur in script.js (init + openModal + setLang), risikoarm.

### 2.5 Kleinere A11y-/UX-Punkte
- `#hover-popup` trägt permanent `aria-hidden="true"`, auch wenn es sichtbar ist (index.html Z. 61). Da es auch bei **Tastaturfokus** gezeigt wird (focusin, Z. 750), bekommen Screenreader-Nutzer den Fakt-Teaser nie. Inhaltlich redundant zum Modal, aber inkonsistent; besser: `role="tooltip"` + `aria-describedby` dynamisch.
- ArrowUp/ArrowDown sind global auf Objekt-Sprung gemappt (Z. 823–829) und `preventDefault`en natives Zeilen-Scrollen. Vertretbar (PageUp/Down/Space bleiben nativ), sollte aber im UI irgendwo erklärt werden — aktuell steht der Hinweis nur im `title`-Attribut der Buttons.
- Der einmalige Scroll-Hint-Listener (Z. 905–908) feuert schon beim programmatischen `scrollTo` des Starts nicht — ok —, aber der Hint verschwindet auch bei Teleport-Klick nie explizit; er hängt nur am ersten Scroll-Event (das Teleport auslöst). Konsistent genug.
- Sterne werden bei `resize()` nicht neu verteilt — `s.x` ist relativ (0–1), also ok; nur `ydom` ist absolut im Szenenraum, ebenfalls ok. Kein Bug.

---

## 3. Ansatzpunkte für visuelle Upgrades + Risiko je Datei

### 3.1 Wo Upgrades andocken (konkrete Stellen)

| Upgrade | Andockstelle | Aufwand/Risiko |
|---|---|---|
| **Sternenhimmel-Layer** (Twinkle, Dichte-Bänder, Milchstraßen-Schleier, gelegentliche Sternschnuppe) | `buildStars()`/`drawBg()` in script.js §4; DPR-Fix in `resize()` | Mittel. Isoliert; braucht Dauer-rAF mit reduced-motion/`document.hidden`-Gates |
| **Atmosphären-Bänder** (Farbverläufe je Schicht, Airglow-Linie ~90 km, Aurora 100–300 km) | `buildAtmosphere()` + `.atmo-band`-CSS; Daten aus `ATMOSPHERE_LAYERS` (data.js Z. 1144) | Niedrig. Reine CSS-Gradients/Pseudo-Elemente, `pointer-events:none` schon gesetzt. Kein backdrop-filter verwenden |
| **Parallax-Ebenen** | `updateParallax()` (Z. 342–348) + `buildClouds()`; aktuell nur 5 Emoji-Wolken mit Faktor 0.10–0.20 | Niedrig-Mittel. `images/clouds/` existiert bereits (leer!) — echte PNG/SVG-Wolken waren offenbar geplant. Mehr Ebenen = mehr Transforms pro Frame, bei <20 Elementen unkritisch. Reduced-motion-Pfad existiert |
| **Boden/Horizont-Illustration** (Silhouetten, Stadt, Bäume) | `#ground` (index.html Z. 27, styles.css Z. 51–61) — aktuell nur ein Grün-Gradient | Niedrig. Rein additiv, ein Inline-SVG genügt |
| **Sky-Gradient verfeinern** (Sonnen-Glow, Dämmerungstöne, Nachtübergang) | `SKY_COLORS` (data.js Z. 1181–1190) + `colorAt()`/`drawBg()` | Niedrig für Stützfarben; Mittel für Zusatz-Glows (Radialgradient pro Frame ist ok) |
| **Sektions-Banner inszenieren** (Fade/Scale beim Eintritt) | `buildSections()` + IntersectionObserver, CSS-Transitions | Niedrig. reduced-motion beachten |
| **Objekt-Einflug** (Items faden/schweben beim Erscheinen) | CSS `@keyframes` auf `.sky-item` + IntersectionObserver, oder reine CSS-`animation` mit `content-visibility`-Interaktion testen | Mittel. Wechselwirkung mit content-visibility prüfen; keine Layout-Animationen, nur transform/opacity |
| **Deep-Linking + Share** | `init()`, `openModal()`, `setLang()` | Niedrig |

### 3.2 Risikoprofil je Datei

- **data.js, sizes.js, dd_*.js, data_details.js — NICHT ANFASSEN (inhaltlich).** Das ist die wissenschaftliche Substanz + Zweisprachigkeit. Einzige legitime Eingriffe: neue rein-visuelle Konstanten (z. B. mehr `SKY_COLORS`-Stützpunkte) und Ladereihenfolge (Lazy-Load der dd_*-Dateien). Jede Zahlenänderung braucht Quellenprüfung.
- **script.js §1 (SEGMENTS/altToY/groundPxToAlt, Z. 12–51) — HOCHRISIKO.** Die Höhen-Skala ist das Fundament; Altimeter, Teleport, Sterne, Banner, alles hängt daran. Nur ändern, wenn die Skala selbst Designziel ist, dann alle Abhängigen mittesten.
- **script.js §4 (Canvas) — MITTEL, gut isoliert.** Eigener Abschnitt, keine Rückwirkung auf Layout. Hauptgefahr: Dauer-rAF ohne Gates (Akku), DPR ohne Deckel (Fill-Rate).
- **script.js §3 (Builder) — NIEDRIG-MITTEL.** Additive Layer sind sicher; Vorsicht nur bei `buildScene()` (Lane-Logik, innerHTML-Template mit `onerror`-Inline-Handler — beim Umbau XSS-Disziplin wahren: `it.name`/`credit` kommen aus eigener Datenbasis, aber das Muster `innerHTML` + Interpolation ist fragil).
- **script.js §6/6b (Modal/Popup) — MITTEL.** A11y-Verhalten (Fokusfalle, Rückgabe) darf bei Restyling nicht brechen.
- **styles.css — NIEDRIG.** Beste Spielwiese. Zwei rote Linien: `content-visibility`/`contain-intrinsic-size` auf `.sky-item` erhalten, und backdrop-filter nicht auf große/viele Flächen ausweiten.
- **index.html — NIEDRIG.** Neue Layer-Divs sind sicher; bestehende IDs sind API für script.js (`getElementById` überall) und müssen bleiben.

---

## 4. Priorisierte Empfehlungsliste

1. **Bild-Pipeline** (größter messbarer Gewinn, null Risiko): `images/raw/` (63 MB) aus dem Deploy nehmen; alle 110 Anzeige-Bilder auf ≤320 px WebP/AVIF konvertieren (Erwartung: −70–90 % Transfer); `width`/`height`-Attribute ergänzen.
2. **Canvas-DPR-Fix** (script.js `resize()`): Sterne/Gradient auf Hi-DPI scharf — Grundvoraussetzung für jedes visuelle Upgrade des Himmels.
3. **Modal-Scroll-Lock + `inert`**: Body-Scroll hinterm Modal sperren, fixe Controls inert setzen. Kleiner Fix, spürbare Qualität.
4. **Detail-Daten lazy laden** (~385 KB): dd_*-Skripte nach `init()` dynamisch nachladen; Code ist dank `typeof`-Guards schon dafür gebaut. Dazu `<title>`/Meta bei Sprachwechsel mitziehen und offenes Modal re-rendern.
5. **Visuelle Layer in Reihenfolge des Risiko/Nutzen-Verhältnisses**: (a) Atmosphären-Band-Gradients + Airglow/Aurora (CSS, niedrig), (b) echte Wolken-Assets + mehr Parallax-Ebenen (`images/clouds/` wartet schon), (c) Canvas-Twinkle/Sternschnuppen mit reduced-motion/visibility-Gates, (d) Boden-Silhouette, (e) Deep-Linking (`#objektid`, `?lang=`) als Share-Feature.
