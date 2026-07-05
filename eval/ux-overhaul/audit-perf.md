# Performance- & Accessibility-Audit — in-den-himmel.pages.dev

Datum: 2026-07-05 · Werkzeug: Lighthouse + Performance-Traces via chrome-devtools-MCP (live gegen https://in-den-himmel.pages.dev/)

## Scores (Lighthouse, Mobile)

| Kategorie | Score |
|---|---|
| Accessibility | **96** (2 Fails: color-contrast, label-content-name-mismatch) |
| Best Practices | **100** |
| SEO | **92** (1 Fail: robots.txt ungültig) |
| Performance (Trace, unthrottled) | LCP **425 ms** (TTFB 117 + Render-Delay 308), CLS **0.00** |

Console: **keine Fehler, keine Warnungen** (beim Laden und beim kompletten Durchscrollen). Keine kaputten Bilder (0 broken imgs nach Voll-Scroll).

## Was bereits sehr gut ist

- **Lazy-Loading funktioniert vorbildlich:** Beim Start (Boden) wird genau 1 Bild geladen (`spatz.png`), beim Durchscrollen nach oben kamen nur ~60 der 110 `<img>` dazu, alle mit `loading="lazy" decoding="async"`. Kein Bild-Wasserfall beim Start.
- **CLS = 0.00** in beiden Traces (Load + Scroll), obwohl keine width/height-Attribute gesetzt sind (Dimensionen kommen aus CSS, Platzhalter reserviert).
- **Fokus-Sichtbarkeit:** `:focus-visible` mit `outline: 2px solid var(--accent)` konsistent auf sky-items, Lang-Toggle, Teleport, Object-Nav, Modal-Close (styles.css:161, 326, 363, 393, 461). Fokus auf sky-item zeigt zusätzlich das Info-Popup (`focusin`-Handler, script.js:750). Verifiziert: Outline wird gerendert.
- **prefers-reduced-motion** wird respektiert: `scroll-behavior: auto`, Scroll-Hint-/Popup-Animationen aus (styles.css:631-636), Parallax wird in JS abgeschaltet (script.js:343), Teleport/Objekt-Nav springen mit `behavior:"auto"`.
- Best Practices 100, HTTPS/h2, saubere 304-Revalidierung.

## Befunde (priorisiert)

### P1 — Scroll-Jank durch Forced Reflows im Frame-Loop (Performance, größter Hebel)

Trace beim Durchscrollen mit **4x CPU-Throttling** (Mittelklasse-Handy-Näherung):

- Durchschnittliche Frame-Zeit **35,3 ms (~28 fps)**, **65 von 228 Frames > 50 ms**, schlechtester Frame 81 ms.
- Insight "Forced reflow": **549 ms Reflow-Zeit** in `onFrame` (script.js:351-356) + **282 ms** in `currentScrollAlt` (script.js:791) während ~4 s Scrollen.
- Ursache: Zwei konkurrierende rAF-Callbacks pro Scroll-Event. `onFrame` schreibt Layout (`altBarFill.style.width`, Cloud-`transform`, Canvas), der Nav-Button-Tick (script.js:832-836) liest danach `window.scrollY`/Layout über `currentScrollAlt` → klassisches Read-after-Write-Thrashing. Zusätzlich `parseFloat(el.dataset.factor)` pro Cloud pro Frame.
- Auch beim Init: 121 ms Forced Reflow in `init` (script.js:869 ff., unthrottled — auf Mobile eher ~500 ms), weil nach `buildScene()` etc. sofort `scrollTo`/`drawBg` Layout erzwingt.

**Fix-Empfehlung:**
1. **Einen einzigen rAF-Loop**: `scrollY` genau einmal pro Frame lesen, als Parameter an `drawBg`, `updateAltimeter`, `updateParallax`, `updateNavButtons` durchreichen (updateNavButtons in onFrame integrieren statt eigener Listener).
2. `altBarFill.style.width` → `transform: scaleX(pct)` (komponiert, kein Layout).
3. Cloud-Faktoren einmalig beim Build in ein Array cachen statt `dataset`-Parse pro Frame.
4. `updateNavButtons` throttlen (es ändert sich selten): nur ausführen, wenn sich das Ziel-Objekt ändert.
Erwartung: stabil 60 fps auch auf 4x-CPU; das ist der Unterschied zwischen "gut" und "neal.fun-flüssig".

### P2 — Kontrast-Fail: `.atmo-label` (A11y, WCAG 1.4.3)

- Lighthouse: `#6f727e` auf `#060c20` = **4.05:1** bei 12,48 px normal — benötigt 4.5:1. Betrifft alle Atmosphären-Band-Labels (Troposphäre, Stratosphäre, …).
- Quelle: styles.css:80 ff. (Farbe kommt aus der Regel für `.atmo-label`).
- **Fix:** Farbe auf mind. `#7d8190` (≈4.6:1) oder besser `#8b90a0` anheben, oder font-size ≥ 18.66px/bold. Der dezent-verwaschene Look bleibt mit `#858a9a` erhalten.

### P3 — `label-content-name-mismatch`: aria-label enthält sichtbaren Text nicht (A11y, WCAG 2.5.3)

- Betroffen: sky-items mit Jahres-Badge (`SPACE_YEARS`), z. B. universum, cmb, jadesz14, earendel, ton618, herculescorona. Sichtbarer Name = `Name + Jahr` (script.js:161: `<span class="name">${it.name[lang]}${yr}</span>`), aria-label = nur `Name – Höhe` (script.js:147).
- Konsequenz: Sprachsteuerungs-Nutzer können "klicke JADES-GS-z14-0 2024" nicht matchen; Lighthouse-Fail.
- **Fix:** Jahr in das aria-label aufnehmen (`${it.name[lang]}${yr ? " " + SPACE_YEARS[it.id] : ""} – ${formatAlt(...)}`) oder das Jahr als `aria-hidden="true"` markieren (es steckt bereits in der Höhen-/Detailinfo).

### P4 — robots.txt fehlt, Fallback liefert HTML mit Status 200 (SEO)

- `/robots.txt` liefert die komplette index.html mit 200 (Cloudflare-Pages-SPA-Fallback) → Lighthouse "robots.txt is not valid" (jede Zeile "Syntax not understood"). Gleiches Muster gilt für jede beliebige URL: kein echtes 404.
- **Fix:** `robots.txt` ins Projekt legen (`User-agent: *\nAllow: /\nSitemap: https://in-den-himmel.pages.dev/sitemap.xml`), dazu Mini-`sitemap.xml`. Optional `llms.txt` mit H1 + Links (Lighthouse-Agentic-Audit bemängelt fehlende H1/Links — nice-to-have für die "KI-Showcase"-Story).

### P5 — Initial-Payload: ~390 KB Detail-Daten synchron, Bilder ohne modernes Format (Performance)

- 11 Skripte laden synchron im `<head>`/Body: script.js + data.js (92 KB) + **dd_*.js zusammen ~390 KB** (dd_deep.js allein 109 KB). Die dd_*-Inhalte werden erst beim Öffnen eines Detail-Modals gebraucht. RenderBlocking-Insight: 43 ms LCP-Savings unthrottled, auf Slow-4G deutlich mehr.
- Bilder: 111 deployte Dateien, ~7 MB gesamt, größte `sloanwall.png` 500 KB, `barnard.jpg` 400 KB, mehrere Insekten-PNGs 150-300 KB. Kein WebP/AVIF, kein `srcset` (Mobile lädt Desktop-Größen). `images/raw/` (63 MB) wird mit deployt, sofern nicht via .gitignore/Upload ausgeschlossen — prüfen.
- **Fix:** (a) dd_*.js mit `defer` laden oder erst on-demand (dynamic `import()`/Script-Injection beim ersten Modal-Öffnen). (b) PNGs/JPGs nach WebP konvertieren (erwartbar −60 bis −70 %), `srcset` mit 1x/2x. (c) `images/raw` vom Deploy ausschließen.

### P6 — Kleinere Punkte

- **DOM-Größe:** 1120 Elemente, `#objects-layer` mit 155 Kindern; größtes Layout-Update 105 ms (256 Nodes). Bei P1-Fix unkritisch; alternativ Off-Screen-Items mit `content-visibility: auto` entlasten.
- **Tastatur-Navigation:** 173 Tab-Stops über 146.000 px Seite. ArrowUp/Down-Sprünge existieren (super), aber ein Hinweis dafür ist für Tastatur-Nutzer nicht offensichtlich → Shortcut-Hinweis in Start-Overlay/`title` ergänzen.
- **width/height-Attribute** an `<img>` fehlen (110/110). CLS ist heute 0 dank CSS-Platzhaltern, aber explizite Attribute machen das robust gegen CSS-Änderungen.
- **Cache-Header:** Assets antworten 304 (Revalidierung bei jedem Besuch). Mit Versions-Query (`?v=5`) vorhanden — auf Cloudflare Pages via `_headers` `Cache-Control: max-age=31536000, immutable` für `/images/*` setzen.

## Messdaten-Anhang

- Lighthouse-Reports: Scratchpad `lh-mobile/report.html|json` (Session-temporär).
- Load-Trace (unthrottled): LCP 425 ms, TTFB 117 ms, Render-Delay 308 ms, CLS 0.00.
- Scroll-Trace (4x CPU): avg 35,3 ms/Frame, 65/228 Frames >50 ms, max 81 ms; Forced Reflow 549 ms gesamt.
- Netzwerk beim Durchscrollen (Boden→Universum, ~13 s): 60 Bild-Requests, 0 Fehler, 0 broken images.
