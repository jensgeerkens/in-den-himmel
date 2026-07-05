# Visual-Design-Audit — "In den Himmel"

Stand: 2026-07-05 · Live-Check auf https://in-den-himmel.pages.dev/ (Chromium headless, 1440x900 + 390x844)
Screenshots: `eval/ux-overhaul/shots-visual/` (01 Hero, 02 Boden, 02b Void-Bug, 03 Vogelzone 7,3 km, 04 Stratosphäre 39 km, 05 Kármán 100 km, 06 ISS 408 km, 07 Mond, 08 Neptun, 09 Deep Space 1.342 Lj, 10 Universumsrand, 11/12 Modals, 13 Mobile)

Referenzklasse: neal.fun/deep-sea. Maßstab dort: ein durchgehender Licht-/Farbraum, jedes Objekt eine freigestellte Illustration, große Typo-Momente an Meilensteinen, das Ende ist eine Belohnung.

---

## 1. Gesamturteil

Das inhaltliche Fundament ist exzellent (155 Objekte, echte Höhen, Murmel-Vergleiche, DE/EN sauber). Visuell liegt die Seite aber deutlich unter Referenzklasse: Sie sieht aus wie ein **funktionaler Prototyp mit UI-Widgets vor einem Farbverlauf**, nicht wie eine inszenierte Reise. Die drei größten Lücken:

1. **Kein einziger inszenierter visueller Moment.** Start = Text auf Verlauf, Kármán-Linie = Emoji-Rakete + Text-Banner, Mond = Mond-Emoji im Goldkreis, Universumsrand = Galaxie-Emoji im Lilakreis. Die Reise hat keine Belohnungen.
2. **Inkonsistente Objektsprache.** Drei Stile nebeneinander: freigestellte Tierfotos (gut), rohe Rechteck-Fotos mit Hintergrund (Baumgartner, MiG-25, Halley, Nebel), Emoji-in-Kreis-Chips (ISS, Mond, Astronauten, Planeten teils). Ausgerechnet die ikonischen Höhepunkte sind Emojis.
3. **Keine Tiefe, kein Licht.** Null Parallax, Sterne als kaum sichtbare 1px-Punkte, Wolken sind skalierte ☁️-Emojis, keine Lichtquelle, kein Glow, keine Erdkrümmung. Der Canvas-Hintergrund ist ein reiner Farbverlauf.

Bewertung (0-10, Referenz deep-sea ≈ 9):

| Achse | Note | Kurzbefund |
|---|---|---|
| Visuelles Storytelling / Dramaturgie | 4,0 | Farbbogen Blau→Schwarz vorhanden, aber ohne Ereignisse, ohne Finale |
| Typografie / Hierarchie | 3,5 | Nur Segoe UI/System, keine Display-Schrift, keine Identität |
| Objekt-Präsentation | 4,5 | Tier-Cutouts gut; Emojis + rohe Rechtecke zerstören die Illusion |
| Licht / Tiefe / Parallax | 2,5 | Statischer Verlauf, keine Ebenen, kein Licht |
| Modal-Ästhetik | 6,0 | Struktur + Murmel-Box stark, Optik generisch, kein Bild-Hero |
| Hero / Start-Moment | 3,0 | Titel auf Verlauf, kein Motiv, keine Bewegung, schwacher Subtitle-Kontrast |

---

## 2. Befunde im Detail

### 2.1 Hero / Start (Shot 01)
- Fetter Segoe-UI-Titel auf zweifarbigem Blauverlauf, Pill-Button "Abheben ↑". Kein Bild, keine Silhouette, keine Animation, kein Vorgeschmack auf die Reise.
- Subtitle dunkelblau auf mittelblau: kontrastarm.
- Nach Klick auf "Abheben" steht man in **leerem Hellblau**: das erste Objekt (Spatz, 50 m) liegt 2.000 px über dem Boden, der Boden selbst ist eine leere grüne Verlaufsfläche mit Hairline und dem Label "MEERESHÖHE · 0 M" (Shot 02). Kein Maßstabsanker (Mensch, Baum, Haus, Skyline), keine Startszene.

### 2.2 Atmosphären-Dramaturgie (Shots 02-10)
- Der Farbbogen (hellblau → dunkelblau → schwarz) existiert und ist wissenschaftlich plausibel platziert. Er trägt aber allein die ganze Last: keine Wolkendecken, kein Sonnenstand, keine Dämmerungszone als Ereignis, kein Airglow an der Kármán-Linie.
- **Fehlende Erdkrümmung bei 100 km**: der berühmteste visuelle Payoff dieser Reise (blaue Atmosphärenlinie über der gekrümmten Erde) fehlt komplett. Stattdessen Emoji-Rakete und Text-Banner "DAS SONNENSYSTEM".
- Weltraum = Vollschwarz mit extrem spärlichen, winzigen Sternpunkten (Shots 06-09 wirken leer statt erhaben). Keine Milchstraße, keine Sternendichte-Dramaturgie, keine Nebel-Farbstimmungen in den Deep-Space-Dekaden.
- **Finale enttäuscht** (Shot 10): Universumsrand = Emoji im Lilakreis, CMB als kleines Rechteck-Thumbnail, dünne Milestone-Linie, Mini-Label "WELTRAUM". 146.000 px Scrollen enden ohne Höhepunkt, ohne Schlusswort, ohne Rückweg-Angebot.
- Zwischen Objekt-Clustern liegen lange ereignislose Strecken (bei 5.000 m ist der Viewport komplett leer, nur ein Foto ragt unten hinein). Leere kann Wirkung haben (Maßstab!), braucht aber Begleitsignale: Höhen-Ticks, Atmosphären-Fakten, Textur.

### 2.3 Typografie / Hierarchie
- `--font: "Segoe UI", system-ui, …` für alles: Titel, Labels, Banner, Modal. Keine Display-Schrift, keine typografische Erkennbarkeit; auf macOS/Android sieht die Seite anders aus als auf Windows.
- Höhenwerte sind das wichtigste Datenelement der Seite, laufen aber im selben UI-Font ohne tabular figures. Der Höhenmesser (rechtes Widget) ist funktional gut, wirkt aber wie ein Admin-Panel.
- Section-Banner ("DAS SONNENSYSTEM") sind letterspaced Caps in Weiß-auf-Pille: generisch, konkurrieren optisch mit den Objekt-Labels statt Akt-Wechsel zu zelebrieren.
- Hierarchie-Duplikation: Hover-Popup wiederholt exakt Name + Höhe + Fact, die schon als Label unter dem Objekt stehen, und verdeckt dabei Nachbar-Labels (Shot 08: Neptun-Popup über Halley-Label; Shot 09: Popup über Gaia-BH1-Label).

### 2.4 Objekt-Präsentation
- **Stil A (gut):** freigestellte Tierfotos (Bartgeier, Streifengans, Singschwan). Das ist Referenzklasse-Niveau und sollte die Norm sein.
- **Stil B (bricht Illusion):** unfreigestellte Rechteck-Fotos mit Museums-/Himmelshintergrund: Baumgartner-Kapsel, MiG-25, Halleyscher Komet, Orionnebel, CMB. Wirken wie eingeklebte Thumbnails.
- **Stil C (Prototyp-Look):** Emoji im umrandeten Kreis: ISS 🛰️, Mir 🛰️ (identisches Emoji direkt darunter!), Mond 🌕, Luna 2 als **lila** Mond-Emoji neben dem gelben Mond, Astronauten-Emojis, X-15 🚀, Eustace 🪂, Neptun als flacher CSS-Ball, Universumsrand 🌌. Ausgerechnet ISS, Mond und Finale, die Herzstücke, sind Emojis.
- Kategorie-Farbringe (gold/grün/lila) sind ein brauchbares System, aber der Kreis-Chip-Look macht Objekte zu UI-Icons statt zu Himmelskörpern.

### 2.5 Licht / Tiefe / Parallax
- Kein Parallax: alles scrollt 1:1. Canvas zeichnet nur Verlauf + statische Sternpunkte; große einfarbige Flächen zeigen sichtbares Banding-Risiko.
- Wolken: ☁️/🌥️-Emojis in verschiedenen Größen. Billigster Punkt der ganzen Seite, sofort als Platzhalter erkennbar.
- Keine Vignette, kein Glow um Objekte (nur ein weißlicher Box-Shadow um Labels), keine Lichtrichtung. Der Übergang Tag→Nacht passiert nur im Hintergrund-Farbwert, nicht im Licht der Objekte.

### 2.6 Modal (Shots 11, 12)
- Inhaltlich stark: klare Absätze, "Wenn die Erde so groß wäre wie eine Murmel"-Box (Alleinstellungsmerkmal!), Eckdaten-Tabellen.
- Optisch generisch: blaugraues Gradient-Panel, Standard-Radius, System-Font, kleines Emoji oben links als einziges "Bild", selbst wenn ein NASA-Bild (`it.img`) existiert. Die Murmel-Box ist optisch eine gewöhnliche Info-Box, obwohl sie das inhaltliche Juwel ist.

### 2.7 Konkrete Bugs (beim Audit gefunden)
1. **Void unter dem Boden:** Emoji-Wolken werden bis zu ~14.300 px UNTER die Szene positioniert (Cloud-Bottoms bis 160.976 px bei Szenenhöhe 146.655 px). Folge: Dokument ist ~14.000 px höher als die Szene, man kann unter den Boden in leeres Hellblau scrollen (Shot 02b), Altimeter bleibt bei 0 m. Fix: Cloud-Y auf [0, GROUND_PX] clampen.
2. **Mobile-Kollisionen (390 px):** Objekte und Labels überlappen sich (Streifengans/Bartgeier, Shot 13); die 5 Lanes (16/30/50/70/84 %) sind für schmale Viewports zu eng.
3. **Hover-Popup verdeckt Nachbar-Labels** (siehe 2.3).
4. **Doppelte/falsche Emojis:** ISS und Mir identisch; Luna 2 als lila Mond direkt neben gelbem Mond-Emoji.

---

## 3. Visuelle Vision: "Ein einziger Aufstieg durch echtes Licht"

Die Seite soll sich anfühlen wie eine kontinuierliche Ballon-/Raketenfahrt vom Sommermorgen bis ans Ende der Nacht. Nicht Widgets vor Verlauf, sondern **Licht als Erzähler**:

- **Unten:** warmes Tageslicht, Landschafts-Silhouette am Boden (Wiese, Baumreihe, ein Mensch als Maßstab), weiche gestaffelte Wolkenlagen, die beim Scrollen leicht parallaktisch auseinanderdriften.
- **Mitte:** die Luft wird dünn und das Licht hart; ab der Stratosphäre krümmt sich der Horizont, an der Kármán-Linie liegt die dünne blaue Atmosphärenlinie über der dunklen Erde: der erste große Payoff.
- **Oben:** physikalische Dunkelheit, die lebt: Sternendichte und -größe wachsen mit der Höhe, ab dem interstellaren Raum zieht ein Milchstraßen-Band schräg durchs Bild, in den Deep-Space-Dekaden schimmern schwache Nebel-Farbfelder (Canvas). Objekte werden zu leuchtenden, freigestellten Fotos mit weichem Glow.
- **Finale:** der Universumsrand ist eine Zäsur: die CMB-Karte füllt als Himmelstextur den Viewport, großer Schlusstext ("Weiter kann niemand sehen."), darunter ein Angebot: "Zurück zum Boden" (springt animiert nach unten). Die Reise endet mit einer Belohnung, nicht mit einem Emoji.
- **Typo-Identität:** eine charaktervolle Display-Schrift für Titel, Akt-Banner und Meilensteine (self-hosted, z. B. Space Grotesk o. ä.), tabellarische Ziffern für alle Höhenwerte, ruhiger System-/Inter-Text für Beschreibungen. Der Höhenmesser wird zum Instrument (Mono-Ziffern, feine Skala), nicht zum Admin-Widget.
- **Eine Objektsprache:** alles freigestellt (Foto-Cutout oder gezeichnete/SVG-Körper), kein Kreis-Chip, Kategorie nur noch als feiner Farbakzent im Label. Emojis existieren nur als unsichtbarer Fallback.

Alles CSS/Canvas/Vanilla-JS-tauglich, kein Framework nötig. Wissenschaftliche Korrektheit und DE/EN bleiben unangetastet: alle Maßnahmen sind rein visuell.

---

## 4. Priorisierte Maßnahmen

### P1 — die Reise bekommt Momente (größter Hebel)
1. **Kármán-Payoff bauen:** Erdkrümmung als flacher SVG-/Canvas-Bogen mit Atmosphären-Glow (blaue Linie, Airglow-Grün), fixiert an 100 km im Szenen-Layer. Section-Banner dort neu inszenieren (große Display-Typo, kein Pill).
2. **Finale inszenieren:** CMB-Bild als viewport-füllender Hintergrund der obersten Dekade, großer zweisprachiger Schlusstext, "Zurück zum Boden"-Button (smooth scroll). 
3. **Objektsprache vereinheitlichen (Top-25 zuerst):** ISS, Mond, Mir, Hubble, JWST, Voyager, Gagarin & Co. als freigestellte Fotos (NASA, PD); Planeten als CSS/SVG-Kugeln mit radialem Licht, korrekten Farben und Saturn-Ring; Rechteck-Fotos (Baumgartner, MiG, Halley, Nebel) freistellen oder weich maskieren (CSS `mask-image: radial-gradient`). Kreis-Chip-Rahmen entfernen.
4. **Boden + Start:** Landschafts-Silhouette (SVG: Horizont, Bäume, ein Mensch) am Boden; Hero-Overlay mit Motiv (aufsteigender Ballon/Vogelschwarm-Silhouette) und einer kurzen Aufstiegs-Animation nach "Abheben" (die ersten ~300 m anscrollen, `prefers-reduced-motion` respektieren).
5. **Bugfix Void:** Cloud-Positionen auf [0, GROUND_PX] clampen; Dokumenthöhe == Szenenhöhe.

### P2 — Licht, Tiefe, Typografie
6. **Canvas-Atmosphäre:** Sonnen-Glow (radialer Gradient, wandert mit Höhe nach unten aus dem Bild), Noise/Dithering gegen Banding, höhenabhängige Sternendichte/-größe/-funkeln, Milchstraßen-Band ab interstellarem Raum, schwache Nebelfarben in Deep-Space-Dekaden.
7. **Parallax-Ebenen:** 2-3 Sternschichten im Canvas + 2 Wolkenlagen im DOM mit unterschiedlichem Scrollfaktor (rAF + `translateY`, reduced-motion-Fallback statisch). 
8. **Wolken ersetzen:** CSS-Wolken (überlagerte, geblurte Ellipsen) oder freigestellte PNG-Wolken in 2 Tiefenebenen; ☁️-Emojis raus.
9. **Typografie-System:** self-hosted Display-Font für Titel/Banner/Meilensteine, `font-variant-numeric: tabular-nums` (bzw. Mono-Font) für Höhenmesser und alle Höhenangaben, klare Type-Scale (Hero / Banner / Label / Fact).
10. **Modal-Upgrade:** `it.img` als Bild-Hero oben im Modal (voller Kartenbreite, weicher Verlauf ins Panel), Murmel-Box als gestaltetes Herzstück (eigene Farbwelt, kleines Murmel-Icon), Kategorie-Farbakzent an der Kante.

### P3 — Feinschliff
11. **Leere Strecken beleben:** dezente Höhen-Ticks am Rand (alle 1.000 m / jede Dekade), eingestreute Atmosphären-Fakten als stille Typo-Momente ("Hier ist der Luftdruck nur noch 1 % des Bodenwerts").
12. **Mobile-Lanes:** unter 480 px auf 2-3 Lanes reduzieren, ITEM_H vergrößern, Label-Kollisionen testen.
13. **Hover-Popup entschlacken:** nur den Fact zeigen (Name/Höhe stehen schon im Label) und nie über Nachbar-Labels legen (z-index/Versatz), oder Popup streichen und Fact aufklappbar ins Label legen.
14. **Emoji-Duplikate/-Fehler:** ISS vs. Mir differenzieren, Luna-2-Lila-Mond ersetzen (erledigt sich mit Maßnahme 3).
15. **Section-Banner als Akt-Momente:** volle Breite, Display-Typo, feine Linie, ggf. kurzer Untertitel; nicht mehr als schwebende Pille.

---

## 5. Was bereits Referenzklasse ist (nicht anfassen)

- Murmel-Vergleichsboxen im Modal (inhaltliches Alleinstellungsmerkmal).
- Freigestellte Tierfotos in der Vogelzone.
- Skalen-Konzept (linear unten, logarithmisch oben) + Altimeter-Logik + Objekt-Navigation (↑/↓) + Teleport.
- Faktentexte: präzise, zweisprachig, mit Quellen-Badges (Einzelrekord/Extremwert/Laborwert).
