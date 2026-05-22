# Performance-/Technik-Gutachten — „In den Himmel"

Code-Review von `index.html`, `script.js`, `styles.css`, `data.js`.
Stand: 2026-05-22. Es wurden **keine** Projektdateien verändert.

Kennzahlen: 155 `.sky-item`, 560 Sterne im Canvas, Szenenhöhe ≈ `TOTAL_HEIGHT`
(linearer Teil ~95.000 px + Weltraum-Teil; PX_PER_DECADE=5000 über ~21,7 Dekaden
≈ **108.700 px** Weltraum, gesamt ~**121.500 px**). 72 von 155 Bildern fehlen
(alle `.png`-Tier/Technik/Mission-Bilder; nur die ~83 `.jpg`-Weltraumbilder existieren).

Befunde nach Schweregrad. Aufwand (A) / Nutzen (N) je gering/mittel/hoch.

---

## KRITISCH

### K1 — `groundPxToAlt` 560×/Frame im Stern-Loop (überflüssig, da scroll-invariant)
**Wo:** `drawBg()`, Zeile 298–309.
```js
for (const s of STARS) {
  const screenY = s.ydom - st;
  if (screenY < -2 || screenY > vh + 2) continue;
  const altHere = groundPxToAlt(TOTAL_HEIGHT - s.ydom);  // <-- pro Frame, pro Stern
  const a = starAlpha(altHere) * s.base;
  ...
}
```
`altHere` hängt **nur** von `s.ydom` ab, nicht von `scrollY`. Damit ist auch
`starAlpha(altHere) * s.base` eine Konstante pro Stern. Aktuell wird sie für jeden
**sichtbaren** Stern in **jedem** Scroll-Frame neu berechnet — und `groundPxToAlt`
enthält eine Schleife über `SEG` plus `Math.pow`/`Math.log10`. Bei flüssigem Scrollen
(≈60 fps) sind das je nach Sichtfenster zehntausende `pow/log10`-Aufrufe pro Sekunde.

**Fix:** Alpha einmalig in `buildStars()` vorberechnen und speichern:
```js
// in buildStars(), pro Stern:
const altHere = groundPxToAlt(TOTAL_HEIGHT - ydom);
const alpha = starAlpha(altHere) * base;     // s.alpha
STARS.push({ x, ydom, r, alpha });
// in drawBg(): a = s.alpha; statt Neuberechnung
```
Zusätzlich Sterne mit `alpha <= 0.01` gar nicht erst ins Array aufnehmen
(Sterne unterhalb ~30 km sind ohnehin unsichtbar → spart Iterationen).
**A: gering · N: hoch.**

### K2 — Sterne nicht räumlich vorsortiert → ganzes Array (560) pro Frame durchlaufen
**Wo:** `drawBg()`, Zeile 298.
Selbst wenn nur ~10–40 Sterne im Viewport liegen, wird das gesamte 560-Element-Array
jeden Frame durchiteriert (mit `continue` für off-screen). Verstärkt K1.

**Fix:** STARS nach `ydom` sortieren und pro Frame nur das sichtbare Fenster zeichnen
(Binärsuche auf `st` / `st+vh`, oder Index seit letztem Frame inkrementell mitführen,
da Scrollen monoton-lokal ist). Alternativ Sterne in Buckets je Bildschirmhöhe ablegen.
Mit K1 kombiniert reduziert sich der Stern-Teil von „560 × log/pow" auf
„~30 × Array-Read + arc". **A: mittel · N: hoch.**

---

## HOCH

### H1 — Linear-Gradient wird jeden Frame neu erzeugt
**Wo:** `drawBg()`, Zeile 291–294. `ctx.createLinearGradient` + zwei `colorAt()`
(je eine Schleife über `SKY_COLORS`) pro Frame. Gradient-Objekte sind in Canvas
relativ teuer und müssen vom Browser neu kompiliert werden.

**Fix:** Farben quantisieren und Gradient cachen. Da `altTop`/`altBottom`
monoton mit `scrollY` laufen, genügt es, den Gradienten nur neu zu bauen, wenn sich
die gerundeten Stützfarben ändern (z. B. `scrollY` auf 4–8 px quantisieren). Beispiel:
```js
const key = (st >> 2);                 // alle 4px
if (key !== lastGradKey) { cachedGrad = ctx.createLinearGradient(...); ...; lastGradKey = key; }
ctx.fillStyle = cachedGrad;
```
**A: gering · N: mittel-hoch.**

### H2 — `drawBg` füllt jeden Frame das gesamte Canvas neu (kein partielles Redraw)
**Wo:** `drawBg()`, Zeile 295 `ctx.fillRect(0,0,vw,vh)`. Vollflächiger Fill +
Neuzeichnen aller Sterne bei jedem Scroll-Tick. Auf schwacher GPU/4K spürbar.

**Fix (eskalierend):**
- Kurzfristig: K1+K2+H1 senken die Kosten bereits massiv.
- Mittel: Sterne in ein **Offscreen-Canvas** im DOM-Koordinatenraum (bandweise,
  z. B. pro Bildschirmhöhe) vorrendern und per `drawImage` mit Scroll-Offset
  blitten — statt 560 `arc()`-Pfaden pro Frame.
- Der Gradient ändert sich pro Scroll zwangsläufig, daher bleibt 1× `fillRect` nötig;
  das ist akzeptabel, sobald Sterne/Gradient gecacht sind.
**A: mittel · N: mittel.**

### H3 — 72 fehlende Bilder lösen 404-Requests beim Scrollen aus
**Wo:** `buildScene()`, Zeile 153–154. `loading="lazy"` → Request wird ausgelöst,
sobald das Item in Nähe des Viewports kommt; bei fehlender Datei greift der inline
`onerror`-Fallback (Bild ausblenden, Emoji-Platzhalter zeigen). Unter `http(s)://`
ist das je 1 echter 404-Roundtrip pro Item beim ersten Sichtbarwerden (72 Stück über
die gesamte Scroll-Strecke), plus Konsolen-Fehlerflut. Unter `file://` „nur"
File-not-found (billiger), aber dieselbe Konsolen-Flut + `onerror`-Reflow je Item.
Beim Sprachwechsel (`setLang`) wird die Szene neu gebaut → Effekt wiederholt sich.

**Fix:** Datengetrieben entscheiden, ob überhaupt ein `<img>` erzeugt wird. Im
Datensatz ein Flag (z. B. `hasImg:true`) für vorhandene Bilder setzen oder zur
Build-Zeit prüfen; nur dann `<img>` rendern, sonst direkt den Platzhalter ausgeben.
Spart 72 Requests/404, vermeidet das `display:none`-Reflow und die Konsolenfehler.
**A: mittel (Datenpflege) · N: hoch (Netzwerk/Konsole/Reflow).**

### H4 — `setLang` baut 5 Layer komplett neu auf + erzwingt Reflow durch `scrollTo`
**Wo:** `setLang()`, Zeile 544–561. Bei jedem DE/EN-Wechsel laufen
`buildScene` (155 Items, `innerHTML`-Parsing!), `buildAtmosphere`, `buildMilestones`,
`buildSections`, `buildTeleport`, gefolgt von `class`-Toggle und synchronem
`window.scrollTo`. Das ist ein voller Re-Layout der ~121.500 px hohen Szene.

**Fix:** Statt Neuaufbau nur die sprachabhängigen Textknoten aktualisieren
(Referenzen beim ersten Build merken, dann `.textContent` setzen). Da sich Positionen
beim Sprachwechsel **nicht** ändern, ist ein kompletter Rebuild unnötig.
Alternativ minimal: `aria-label`/Caption gezielt patchen.
**A: mittel · N: mittel.** (Nur relevant, wenn häufig umgeschaltet wird.)

---

## MITTEL

### M1 — `innerHTML` für 155 Items im Build (Parser-Overhead, XSS-Vektor latent)
**Wo:** `buildScene()`, Zeile 152–160. 155× HTML-String-Parsing. Funktional ok
(DocumentFragment wird genutzt), aber `innerHTML` ist langsamer als gezieltes
`createElement` und die Daten werden ungeescaped interpoliert. Aktuell sind die Daten
projektintern/vertrauenswürdig, daher kein akuter Sicherheitsbefund — bei künftiger
externer Datenquelle aber ein Risiko (`it.name`, `it.fact` enthalten Freitext).

**Fix:** Optional auf `createElement`/`textContent` umstellen (wie im Modal bereits
sauber gelöst). **A: mittel · N: gering** (Build läuft nur 1–2×).

### M2 — `positionPopup` liest `getBoundingClientRect` + `offsetWidth/Height` bei jedem mouseover
**Wo:** `showPopup`/`positionPopup`, Zeile 475–484. Reihenfolge: erst
`replaceChildren` + `hidden=false` (Style-Write/Layout-Invalidation), dann
`getBoundingClientRect` (Layout-Read) und `offsetWidth/offsetHeight` (weitere
Reads). Das ist ein klassisches, aber **kleines** Layout-Thrashing: ein erzwungener
Sync-Reflow pro Hover. Da nur bei `mouseover` (nicht pro Frame), unkritisch.

**Fix:** Falls spürbar, Popup-Maße einmalig nach erstem Anzeigen cachen oder
Position in einem `requestAnimationFrame` nach dem Layout setzen. **A: gering · N: gering.**

### M3 — Mehrere unabhängige Scroll-Listener
**Wo:** `requestFrame` (Zeile 588), `hidePopup` (Zeile 517), Hint-`once`
(Zeile 604). Alle sind `{ passive: true }` (gut). `requestFrame` throttelt korrekt
via `ticking`-Flag → max. 1 rAF/Frame. `hidePopup` läuft bei jedem Scroll-Event
(setzt nur `hidden`/`null`, billig). Der Hint-Listener entfernt sich selbst nach
dem ersten Event (gut). Insgesamt sauber.

**Optimierung (optional):** `hidePopup` in `onFrame` ziehen statt eigenem Listener,
oder nur ausführen, wenn ein Popup sichtbar ist (`if (!hoverPopup.hidden) hidePopup()`).
**A: gering · N: gering.**

### M4 — `scroll-behavior: smooth` global aktiv (`html.ready`)
**Wo:** `styles.css` Z. 16 + `setLang`/Teleport. Smooth-Scroll über eine 121.500-px-
Szene bedeutet, dass auch Teleport-Sprünge über zig-tausend px „smooth" animiert
werden — das erzeugt eine lange Folge von Scroll-Frames (jeweils `onFrame` → `drawBg`).
Für lange Sprünge bremst das. Bei `prefers-reduced-motion` wird im Teleport bereits
korrekt auf `auto` umgeschaltet.

**Fix:** Für sehr weite Teleport-Distanzen `behavior:"auto"` erzwingen (Schwelle auf
Distanz), Smooth nur für kurze Wege. **A: gering · N: gering-mittel.**

---

## NIEDRIG

### N1 — Canvas ignoriert `devicePixelRatio`
**Wo:** `resize()`, Zeile 250–253. `canvas.width = innerWidth` (CSS-Pixel). Auf
HiDPI/Retina wird das Canvas hochskaliert → unscharfe Sterne/Gradient. Performance-
seitig sogar günstig (weniger Pixel), aber Qualitätsmangel. Bewusste Abwägung;
falls Schärfe gewünscht: `width = innerWidth * dpr` + `ctx.scale(dpr,dpr)` (erhöht
dann allerdings die Fill-Kosten → mit K1/H1 vorher entschärfen). **A: gering · N: gering.**

### N2 — `resize`-Listener ohne Debounce
**Wo:** Zeile 589. `resize()` + `requestFrame()` direkt im Event. Resize feuert
bei Fenster-Drag rapide; `requestFrame` throttelt zwar das Zeichnen, `canvas.width=`
löst aber jedes Mal ein Canvas-Clear/Realloc aus. **Fix:** Debounce (~100 ms).
**A: gering · N: gering.**

### N3 — `will-change: transform` dauerhaft auf 5 Wolken
**Wo:** `styles.css` Z. 124. Hält 5 Kompositor-Layer permanent. Bei nur 5 Elementen
vernachlässigbar; korrekt bei `prefers-reduced-motion` zurückgesetzt. **A: gering · N: gering.**

### N4 — `colorAt`: großer Stützstellen-Sprung 1e6 → 5e26 m
**Wo:** `data.js` `SKY_COLORS` Z. 1233–1234. Zwischen 1.000 km und „Universumsrand"
nur eine lineare Interpolation über 20+ Größenordnungen → der Hintergrund ist im
gesamten Weltraum praktisch konstant schwarz (gewollt?). Kein Performance-, eher ein
Optik-Hinweis. **A: gering · N: gering.**

### N5 — `formatAlt`/`toLocaleString` mehrfach pro Build
**Wo:** `buildScene` ruft `formatAlt` 2× je Item (caption + aria-label) → 310
`Intl.NumberFormat`-Formatierungen pro Build. `toLocaleString` ist relativ teuer.
Bei 1–2 Builds tolerierbar; bei häufigem `setLang` (siehe H4) summiert es sich.
**Fix:** Mit H4 (kein Rebuild) entfällt das Problem; sonst `Intl.NumberFormat`-
Instanz cachen statt `toLocaleString` pro Aufruf. **A: gering · N: gering.**

---

## Positiv / korrekt umgesetzt
- `content-visibility:auto` + `contain-intrinsic-size` an `.sky-item` korrekt gesetzt
  (inkl. Responsive-Override) → Render-Kosten der 155 Items werden gut beschnitten.
- Event-Delegation auf `objLayer` (ein Listener für click/keydown/hover/focus) statt
  155× → **kein Memory-Leak**, kein Mehrfach-Binding. `setLang` ersetzt nur die
  Kinder, die Delegations-Listener bleiben bestehen.
- rAF-Throttling via `ticking`-Flag ist korrekt (kein rAF-Stacking).
- Alle Scroll-Listener `passive`. Hint-Listener entfernt sich selbst.
- `scrollRestoration='manual'` + Start-Overlay decken den Init-Sprung sauber ab.
- Bild-`<img>` mit fester `height:150px` reserviert Platz → kein Layout-Shift beim
  Lazy-Load. `decoding="async"` gesetzt.
- **file://-Robustheit: einwandfrei.** Keine `fetch`/ES-Module; alle Daten als globale
  `const` über klassische `<script>`-Tags. Lade-Reihenfolge korrekt: `data.js` →
  `data_details.js` → `dd_*.js` → `script.js` (script.js liest `SKY_DATA`,
  `SKY_DETAILS`, `SPACE_YEARS` etc. erst zur `init()`-Zeit, alle vorher definiert).
- `sceneEl.style.height` ~121.500 px ist für moderne Browser unkritisch (max.
  Scrollhöhe liegt weit darunter); Layout wird einmalig berechnet.

---

## Die 5 wirkungsvollsten Optimierungen (priorisiert)
1. **K1** — Stern-Alpha einmalig in `buildStars()` vorberechnen statt 560×
   `groundPxToAlt` pro Frame. (A: gering / N: hoch)
2. **K2** — Sterne nach `ydom` sortieren und pro Frame nur das sichtbare Fenster
   zeichnen statt das ganze 560er-Array. (A: mittel / N: hoch)
3. **H1** — Linear-Gradient cachen / `scrollY` quantisieren statt jeden Frame neu
   bauen. (A: gering / N: mittel-hoch)
4. **H3** — `<img>` nur für tatsächlich vorhandene Bilder erzeugen (Daten-Flag) →
   72 404-Requests, Konsolen-Flut und `onerror`-Reflows entfallen. (A: mittel / N: hoch)
5. **H4** — `setLang` ohne kompletten Szenen-Rebuild: nur Texte/aria-labels patchen
   statt 155 Items + 4 Layer neu zu bauen und Reflow zu erzwingen. (A: mittel / N: mittel)
