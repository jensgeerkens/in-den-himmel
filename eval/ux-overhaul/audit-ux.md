# UX-Audit: In den Himmel (Live-Seite)

**Datum:** 2026-07-05
**Geprüft:** https://in-den-himmel.pages.dev/ als Erstbesucher
**Viewports:** Desktop 1440x900, Mobile 390x844 (Chromium via Playwright)
**Screenshots:** `eval/ux-overhaul/shots-audit/01-…17-*.png` (Referenzen unten pro Befund)
**Referenzklasse:** neal.fun/deep-sea und besser

---

## Gesamteindruck

Das Fundament ist stark: 155 Objekte auf korrekter Höhe, Höhenmesser mit Ebenen-Anzeige, Meilenstein-Linien, Murmel-Vergleich im Modal, saubere Zweisprachigkeit, keine Console-Errors, funktionierende Pfeiltasten-Navigation. Die Informationsarchitektur ist auf Deep-Sea-Niveau.

Was fehlt, ist das Erlebnis-Niveau: Der Einstieg ist leer, rund die Hälfte der Scroll-Strecke ist inhaltsloses Schwarz, 29 % der Objekte sind Emoji-Platzhalter, und die Reise endet ohne Finale. Aktuell fühlt sich die Seite wie ein sehr guter Datensatz mit UI an, nicht wie eine Reise. Die folgenden Punkte sind nach Impact priorisiert.

**Einordnung heute: solide 6/10. Mit P0-Fixes: 8+. Referenzklasse erreicht die Seite erst, wenn Einstieg, tote Zonen und Bildsprache gelöst sind.**

---

## P0 — Erlebnis-kritisch

### 1. Toter Einstieg: Nach „Abheben" passiert nichts Sichtbares
**Befund** (Shots 01, 02, 11, 12):
- Landing ist ein nackter Farbverlauf mit Text. Kein Boden-Motiv, keine Silhouette, kein Vorgeschmack auf die Reise.
- Klick auf „Abheben ↑" blendet nur das Overlay aus. Der Viewport bleibt bei 0–11 m stehen: leere Wiese, leerer Himmel, `MEERESHÖHE · 0 M`. Kein einziges Objekt sichtbar.
- Das erste Objekt (Haussperling, 50 m) liegt ~1.100 px über dem Start-Viewport, also mehr als einen ganzen Screen entfernt. Der Nutzer muss blind losscrollen und wird nicht belohnt.
- Der Hint „↑ Scrolle nach oben, um aufzusteigen" ist der einzige Anhaltspunkt; die (ungewohnte!) inverse Scroll-Richtung wird sonst nirgends verankert.

**Empfehlung:**
- „Abheben" sollte einen sanften Auto-Scroll bis zum Haussperling auslösen (~1,5 s Easing). Damit lernt der Nutzer die Scroll-Richtung durch Erleben statt durch Text.
- Bodenszene bauen: Gras-/Baum-/Häuser-Silhouetten, ein paar Blumen, die Wiese als echtes Bild statt Verlauf. Das ist der erste Eindruck des Showcases.
- Haussperling (oder ein zweites Bodenobjekt, z. B. „Schmetterling · 2 m") direkt in den Start-Viewport legen, damit sofort etwas Klickbares da ist.

### 2. Tote Zonen: ~50 % der Strecke sind leeres Schwarz
**Befund** (Shot 09, DOM-Vermessung):
- 16 Lücken von mehr als 2 Screens ohne ein einziges Objekt, insgesamt ~74.000 px von ~146.000 px Gesamtstrecke.
- Größte Lücken: Voyager 1 → Oortsche Wolke **13,1 Screens**, James-Webb → Parker Solar Probe **11 Screens**, Eustace-Sprung → Kármán-Linie **7,8 Screens**, Kleine Magellansche Wolke → Andromeda **6,1 Screens**, Rauchschwalbe → Burj Khalifa **5,6 Screens**.
- In diesen Zonen: fast schwarzes Bild mit 2–3 winzigen Sternpunkten pro Screen (Shot 09). Kein Parallax-Gefühl, kein Fortschritts-Feedback außer dem Höhenmesser.

**Empfehlung (Kombination, wissenschaftlich unbedenklich):**
- **Ambient-Layer:** Sterndichte, -größe und Farbstimmung pro Zone variieren (Zodiakallicht nahe der Sonne, Milchstraßen-Band in der Galaxis-Zone, Nebelschleier). Mehrere Parallax-Ebenen erzeugen Geschwindigkeitsgefühl.
- **Zwischen-Facts:** In langen Lücken beiläufige Textzeilen einblenden („Licht braucht bis hierher 5,5 Stunden", „Voyager 1 funkt mit 23 Watt"). Deep-Sea macht genau das mit Tiefen-Fakten.
- **Distanz-Ticker/Meilenstein-Linien** deutlich vermehren (aktuell nur 6 auf der ganzen Strecke).
- Optional: log-Skala in extremen Leerzonen leicht stauchen (Strecke pro Dekade reduzieren), solange die Höhen korrekt beschriftet bleiben.

### 3. Bildsprache: 45 von 155 Objekten sind Emojis, Modale zeigen nie Fotos
**Befund** (Shots 04, 08, 13, 16, 17):
- 45/155 sichtbare Objekte (29 %) rendern als OS-Emoji im Kreis (🪐 Saturn, 🌕 Mond, 🛰️ Voyager, ☀️ Sonne, 🐦 Doppelschnepfe …). Gerade die ikonischen Höhepunkte der Reise (Mond, Sonne, Saturn, Voyager) sind Emojis, während Nebenobjekte echte NASA-Fotos haben.
- Das Detail-Modal zeigt **immer** das Emoji, selbst wenn ein Foto existiert (Everest: Foto in der Szene, 🏔️ im Modal — Shot 05).
- Wolken-Sprite sieht aus wie ein weißes abgerundetes App-Icon (Shots 03, 12).
- Kármán-Linie und „Rand des Universums" teilen sich dasselbe generische Sternchen-Platzhalterbild (Shots 16, 17).
- Everest-Foto ist ein hartes Rechteck ohne Freistellung/Maskierung vor dem Himmel (Shot 04).

**Empfehlung:**
- Emoji-Platzhalter systematisch ersetzen: NASA/ESA-Fotos (public domain) für alle Planeten, Sonden, Mond, Sonne; für Vögel Freisteller wie beim Haussperling.
- Modal-Header: großes Objektbild statt Emoji, Emoji nur als letzter Fallback.
- Wolken durch weiche SVG-/PNG-Wolken ersetzen, Foto-Rechtecke maskieren (radialer Alpha-Verlauf).

### 4. Kein Finale, kein Anfang der Geschichte — die Reise hat keinen Bogen
**Befund** (Shots 15, 16):
- Am Rand des beobachtbaren Universums endet die Seite abrupt: generisches Platzhalter-Icon, schwarzer Leerraum, Schluss. Kein „Du hast es geschafft", keine Zusammenfassung (46,5 Mrd. Lichtjahre!), kein Rückweg-Button, kein Share-Moment.
- Auf Mobile kollidieren am Ende zusätzlich Labels und Objekte (CMB überlappt „Rand des Universums", Texte abgeschnitten, Shot 15).

**Empfehlung:**
- Finale-Card am Ende: „Ende der Reise: 46,5 Mrd. Lichtjahre. Weiter sehen wir nicht — nicht weil das Universum dort endet, sondern weil das Licht nicht älter ist als 13,8 Mrd. Jahre." + Stats (Objekte gesehen, Strecke) + „Zurück zum Boden"-Button + Share-Link.
- Das ist der Screenshot-Moment der Seite; er entscheidet, ob geteilt wird.

### 5. Shareability technisch kaputt
**Befund (DOM-Prüfung):**
- **Keine** Open-Graph-/Twitter-Meta-Tags, **kein Favicon**. Ein geteilter Link rendert als leere Karte, der Tab hat das Standard-Icon.
- `<title>` bleibt in der EN-Version deutsch.
- Keine Deep-Links: weder Position noch Objekt noch Sprache landen in der URL (kein `#mond`, kein `?lang=en`). „Schau dir DAS an"-Momente sind nicht verlinkbar.

**Empfehlung:** OG/Twitter-Meta + Favicon + og:image (Finale- oder Mond-Szene); Objekt-Anker in die URL (`#voyager-1`), beim Laden dorthin scrollen; `title` mit übersetzen.

---

## P1 — Deutliche Qualitätsbremsen

### 6. Orientierung: gute Anlage, zu schwach ausgeprägt
**Befund** (Shots 04, 08, 17):
- Höhenmesser + Ebenen-Label + Mini-Progressbar oben rechts sind genau richtig. Aber: Die Progressbar ist ~120 px schmal, unbeschriftet und kommuniziert nicht „wie weit noch".
- Formatierung springt spät um: „99.996 m" statt „100 km" (Shot 17); auf Mobile bricht „384.448 km" zweizeilig (Shot 08).
- Nur 6 Meilenstein-Linien auf 155 Objekten. Zwischen Mond und Sonne (5,7 Screens) gibt es keinerlei Zwischenmarke.
- „Springe zu"-Menü: reine Textliste ohne Höhenangaben und ohne Icons; Eintrag „Frontier" ist in der DE-UI Englisch (Shot 07).

**Empfehlung:** Vertikale Journey-Bar am Rand (Zonen farbig, Punkt = aktuelle Position, klickbar) statt/zusätzlich zur Mini-Progressbar; Einheiten früher umschalten (ab 10.000 m → km); Jump-Menü mit Höhe pro Ziel („Mond · 384.400 km") und DE-Labels.

### 7. Überlappungs-/z-index-Fehler
**Befund:**
- Section-Banner „DAS SONNENSYSTEM" liegt quer über dem Kármán-Linie-Objekt (Shot 17).
- Die Hover-/Fokus-Karte eines Objekts legt sich ÜBER das geöffnete „Springe zu"-Menü (Shot 14).
- Mobile-Finale: Objekt-Labels überlappen sich gegenseitig und werden abgeschnitten (Shot 15).
- Objekte mit fast gleicher Höhe (Hummel 9.000 m / Kranich 10.000 m) stapeln Karten übereinander (Shot 04, Hover-Karte verdeckt Nachbarobjekt).

**Empfehlung:** z-Ordnung fixieren (Menüs > Tooltips > Banner > Objekte); Kollisionsvermeidung für Labels in dichten Clustern (horizontales Ausweichen existiert schon, vertikales Nachjustieren fehlt); Banner-Positionen gegen Objektpositionen prüfen.

### 8. Modal: Fokus-Bug, keine Weiter-Navigation, Detailpflege
**Befund** (Shots 05, 13):
- Nach `Escape` springt der Fokus auf den **versteckten** „Abheben"-Button des Intro-Overlays statt zurück zum auslösenden Objekt (echter A11y-Bug, getestet).
- Kein „nächstes/voriges Objekt" im Modal — man muss schließen, scrollen, neu öffnen. Für eine Objekt-für-Objekt-Erkundung (Kern-Loop der Seite!) fehlt der Flow.
- Close-Button 36x36 px (Empfehlung ≥44 px), OS-Scrollbalken sichtbar im dunklen Design, ein leeres `<p>`-Element unter der Überschrift.

**Empfehlung:** Fokus-Restore auf das Ursprungselement; ←/→ bzw. Buttons im Modal für Vor/Zurück (Reihenfolge = Höhe); Custom-Scrollbar; Close-Button vergrößern.

### 9. Mobile-Feinschliff
**Befund:**
- 5 px horizontaler Overflow (Wolke + 2 Objekte ragen aus dem Viewport) — die Seite lässt sich seitlich wackeln.
- Teleport-Menüeinträge nur 31 px hoch (<44 px Tap-Target).
- Hover-Texte (Kurzfakten der Objekte) existieren auf Touch nicht — die netten Einzeiler („Spatzen fliegen meist nur wenige Meter…") sieht ein Mobile-Nutzer nie, im Modal stehen andere Texte.

**Empfehlung:** `overflow-x: clip` auf Weltcontainer + Objekt-Randabstände; Tap-Targets vergrößern; Kurzfakt als erste Zeile ins Modal übernehmen.

### 10. Design-Identität: Systemfont + Standard-UI
**Befund:** Segoe-UI-Systemstack, generische Pills/Buttons, Standard-Dark-Cards. Nichts an der Typografie oder den UI-Elementen ist unverwechselbar — für ein öffentliches „So gut baut KI Webseiten"-Showcase ein Wettbewerbsnachteil gegenüber neal.fun (eigene Illustrations-Sprache).
**Zusatz:** Der Intro-Text nutzt einen Gedankenstrich-Einschub („Vom Boden bis ins Weltall — fliegende Tiere…") — laut Projekt-Schreibregeln in Außentexten vermeiden.

**Empfehlung:** Eine charaktervolle Display-Schrift für Titel/Höhenmesser (selbst gehostet), konsistente Icon-/Illustrationssprache, UI-Elemente (Altimeter!) als gestaltetes Instrument statt graue Box. Intro-Text umformulieren.

---

## P2 — Poliment

11. **Sprachumschalter:** funktioniert vorbildlich (Inhalte, Zahlenformate, `lang`-Attribut, aria-pressed). Nur `<title>`, OG-Texte und der Jump-Eintrag „Frontier" hängen. Sprachwahl nicht persistiert (localStorage) und nicht in URL.
12. **Tastatur:** ↑/↓ springen korrekt von Objekt zu Objekt (getestet), Enter/Space öffnen das Modal, Fokus-Ring vorhanden. Aber: Das Feature wird nirgends erklärt (nur `title`-Attribut der FABs), und beim Sprung fehlt ein Highlight-Puls am Zielobjekt — bei log-Skala-Mini-Sprüngen (31 px zwischen Artemis II und Apollo 13) merkt man sonst nicht, dass etwas passiert ist.
13. **Jump-Teleport ohne Übergang:** „Springe zu → Mond" versetzt instant. Ein 300–500-ms-Warp (schneller Sternen-Streak / Fade) würde den Kontextwechsel verankern und wäre ein Delight-Moment.
14. **Hover-Karte dupliziert** Name+Höhe, die direkt darunter schon als Label stehen — nur der Kurzfakt ist neu. Karte auf den Fakt reduzieren.
15. **Momente der Freude, die schon funktionieren** (bewahren!): Murmel-Vergleich im Modal (bester Einzel-Baustein der Seite), Mond-Cluster mit Jahren (Shot 08), Meilenstein-Linien, Farbdramaturgie Tag→Weltraum, „unsicher"/„Einzelrekord"-Badges als wissenschaftliche Ehrlichkeit.

---

## Priorisierte Maßnahmenliste (Reihenfolge = Empfehlung)

| # | Maßnahme | Aufwand | Impact |
|---|----------|---------|--------|
| 1 | Einstieg: Bodenszene + Auto-Aufstieg nach „Abheben" + erstes Objekt im Start-Viewport | M | Sehr hoch |
| 2 | Tote Zonen: Ambient-Sterne/Parallax + Zwischen-Facts + mehr Meilensteine | M–L | Sehr hoch |
| 3 | Emoji-Platzhalter durch Fotos/Illustrationen ersetzen (45 Objekte, Modal-Header, Wolken) | L | Sehr hoch |
| 4 | Finale-Moment am Universumsrand + Share-CTA | S–M | Hoch |
| 5 | OG-Meta, Favicon, og:image, Objekt-Deep-Links, EN-title | S | Hoch |
| 6 | Overlap-Fixes: Banner/Kármán, Tooltip/Menü, Mobile-Finale, Label-Kollisionen | S | Hoch |
| 7 | Modal: Fokus-Restore, Vor/Zurück-Navigation, Close ≥44 px, Scrollbars | S–M | Mittel |
| 8 | Journey-Bar (vertikaler Fortschritt) + Jump-Menü mit Höhenangaben | M | Mittel |
| 9 | Mobile: overflow-x, Tap-Targets, Kurzfakt ins Modal | S | Mittel |
| 10 | Typografie/Brand: Display-Font, gestalteter Altimeter, Warp-Übergang beim Jump | M | Mittel |

**Aufwand:** S < 0,5 Tag · M = 0,5–2 Tage · L > 2 Tage

---

## Screenshot-Index

| Datei | Inhalt |
|---|---|
| 01-desktop-landing.png | Intro-Overlay, leerer Verlauf |
| 02-desktop-after-abheben.png | Toter Startscreen nach „Abheben" |
| 03-desktop-first-objects.png | Haussperling + Wolken-Platzhalter |
| 04-desktop-everest-zone.png | Everest-Rechteck, Emoji-Vogel, Karten-Overlap |
| 05-desktop-modal-everest.png | Modal mit Emoji statt Foto, Scrollbars |
| 06-desktop-after-escape.png | Zustand nach Escape |
| 07-desktop-jump-menu.png | „Springe zu"-Liste (ohne Höhen, „Frontier") |
| 08-desktop-moon-zone.png | Mond-Cluster, Emoji-Objekte |
| 09-desktop-deadzone.png | Tote Zone (11 Screens Schwarz) |
| 10/11-mobile-landing/start.png | Mobile Intro + toter Start |
| 12-mobile-sparrow.png | Wolken-„App-Icon", Spatz |
| 13-mobile-modal.png | Mobile-Modal (gut lesbar, Emoji-Header) |
| 14-mobile-jumpmenu.png | Tooltip überlappt Menü (z-index) |
| 15-mobile-top-universe.png | Finale mit Label-Kollisionen |
| 16-desktop-top-universe.png | Abruptes Ende, Platzhalter-Icon |
| 17-desktop-karman.png | Banner überlappt Kármán-Linie, „99.996 m" |

## Messwerte (Referenz)

- Scrollhöhe gesamt: ~146.000 px (~162 Screens Desktop)
- Objekte: 155, davon 110 mit Bild, 45 Emoji-Platzhalter
- Lücken >2 Screens: 16, Summe ~74.000 px (~50 % der Strecke)
- Größte Lücke: 13,1 Screens (Voyager 1 → Oortsche Wolke)
- Erstes Objekt: 50 m (Haussperling), ~1.100 px über Start-Viewport
- Console-Errors: 0 · OG-Tags: 0 · Favicon: fehlt
- Close-Button Modal: 36 px · Teleport-Einträge: 31 px · Mobile overflow-x: +5 px
