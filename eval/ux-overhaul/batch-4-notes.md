# Batch 4 — Performance, A11y, Mobile-Feinschliff (Umsetzungsnotizen)

Stand: 2026-07-05 · Branch `ux-overhaul` · Cache-Bust `?v=10`

Dieses Dokument hält fest, WAS geändert wurde und WIE die Abschluss-Messung
gegen die Live-Deployment reproduziert wird. Die „Vorher"-Zahlen stammen aus
`audit-perf.md` (live gemessen). Die „Nachher"-Zahlen müssen nach dem Deploy
auf `in-den-himmel.pages.dev` erneut mit Lighthouse-Mobile + einem 4x-CPU-
Scroll-Trace erhoben werden (kein Browser-Automat in der Bau-Umgebung).

## 1) Ein einziger Frame-Pfad (Forced-Reflow-Fix)

- Neu: `renderFrame(now)` liest `window.scrollY` **genau einmal** pro Frame und
  reicht `st` an `drawBg(now, st)`, `updateAltimeter(st)`, `updateParallax(st)`,
  `updateJourneyDot(st)`, `updateNavButtons(st)` durch. Kein Read-after-Write mehr.
- Der Twinkle-Dauer-Loop (`contLoop`) nutzt jetzt denselben `renderFrame` →
  keine zwei konkurrierenden rAF-Callbacks mehr.
- `currentScrollAlt()` benutzt das gecachte `vh` statt `window.innerHeight`
  (das war laut Trace 282 ms Reflow). Neuer Helfer `scrollAlt(st)`.
- `updateNavButtons` ist jetzt O(1): Vergleich gegen `MIN_ALT`/`MAX_ALT` statt
  zweimal `.some()` über 155 Items, und schreibt `disabled` nur bei echtem
  Wechsel. Kein eigener Scroll-Listener mehr (läuft im `renderFrame`).
- Drei Scroll-Listener konsolidiert zu einem `onScroll` (Frame anfordern +
  Popup ausblenden + Scroll-Hinweis-Einmalausblendung).

Baseline (audit-perf.md, 4x CPU): avg 35,3 ms/Frame (~28 fps), 65/228 Frames
> 50 ms, Forced Reflow 549 ms (`onFrame`) + 282 ms (`currentScrollAlt`).
Ziel: avg < 16 ms, Forced-Reflow-Zeit ~0.

## 2) Layout-freie Writes

- `altBarFill`: `style.width` (Reflow) → `transform: scaleX()` (Compositing).
  CSS: `width:100%; transform:scaleX(0); transform-origin:left center`.
- Cloud-/Parallax-Faktoren liegen bereits seit Batch 2 im gecachten `cloudEls`-
  Array (kein `dataset`-Parse pro Frame).

## 3) Detail-Daten lazy laden

- `dd_*.js` + `data_details.js` (~390 KB) sind aus `index.html` entfernt und
  werden in `loadDetailData()` **nach dem ersten Frame** dynamisch injiziert
  (`script.async=false` erhält die Reihenfolge: `data_details.js` definiert
  `SKY_DETAILS`, die `dd_*.js` machen `Object.assign`). Deep-Link lädt sie sofort.
- `typeof`-Guards in `renderModalBody`/`buildCompareSection`/`buildScaleSection`
  fangen das Zeitfenster ab (Modal zeigt bis dahin Basis-Infos).
- `?v=10` konsistent auf ALLE Skripte + styles.css + Favicons + og-image
  (behebt den Stale-Cache-Mix data.js/script.js).

Initial-Payload sinkt um ~390 KB JS (dd_deep.js allein 109 KB).

## 4) A11y

- `.atmo-label`-Farbe `rgba(255,255,255,0.42)` → `#8b90a0` (≈6:1 auf #060c20,
  vorher 4.05:1 → Fail). Erfüllt WCAG 1.4.3.
- `aria-label` der sky-items enthält jetzt das Jahres-Badge
  (`${name}${yrRaw} – ${alt}`), passend zum sichtbaren Text (WCAG 2.5.3,
  behebt `label-content-name-mismatch`).

Baseline Lighthouse A11y 96 (2 Fails) → Ziel 100.

## 5) SEO

- `robots.txt` (mit Sitemap-Verweis), `sitemap.xml` (mit hreflang de/en/x-default),
  `llms.txt` (H1 + Links, DE/EN) im Root. Behebt den ungültigen robots.txt-Fail.

Baseline Lighthouse SEO 92 → Ziel ≥ 98.

## 6) Mobile

- `overflow-x: clip` auf `body` (statt `hidden`) und auf `#scene` → kein
  5-px-Wackeln durch Parallax-Wolken, kein horizontaler Scroll-Container.
- `buildScene()`: unter 480 px nur 3 Spuren (`[50,26,74]`) statt 5, und
  `ITEM_H` 215 → 264 px gegen Label-Kollisionen (Streifengans/Bartgeier).
- Tap-Targets: Teleport-Einträge, Objekt-Nav, Modal-Buttons bereits ≥ 44 px
  (Batch 3); Journey-Zonen füllen die Bar-Höhe.

## 7) Abschluss-Messung (nach Deploy auszuführen)

Reproduktion der Werte gegen die Live-URL:

1. Lighthouse Mobile (Chrome DevTools, „Mobile", Simulated Throttling) auf
   `https://in-den-himmel.pages.dev/` → Accessibility / SEO / Best Practices / Perf.
2. Performance-Trace: DevTools → Performance → CPU 4x → vom Boden bis zum
   Universumsrand durchscrollen → avg Frame-Zeit + „Forced reflow"-Insight prüfen.
3. Netzwerk-Panel: Voll-Durchscroll-Transfer (Ziel < 1,5 MB) + Initial-JS
   (dd_*-Dateien dürfen erst nach dem Load erscheinen).
4. Console über Load + Voll-Scroll: 0 Fehler/Warnungen.

Zielwerte: A11y 100, SEO ≥ 98, avg Frame < 16 ms @ 4x CPU, Voll-Scroll < 1,5 MB,
0 Console-Fehler.
