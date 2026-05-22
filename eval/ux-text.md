# UX-/Text-/Responsive-Gutachten — „In den Himmel"

Stand: 2026-05-22. Geprüft: `index.html`, `styles.css`, `script.js`, `data.js`, `data_details.js`, `dd_*.js` (155 Objekte, DE/EN).
Methodik: querschnittliche Lektüre aller 155 `fact`-Paare in `data.js`, der Struktur-Arrays (SECTIONS/ATMOSPHERE_LAYERS/TELEPORT_TARGETS/MILESTONES/I18N), der `desc`-Absätze und `groups` in `data_details.js` + `dd_*.js`, sowie Code-Lektüre von `script.js` und CSS-Breakpoints. **Keine Datei verändert.**

Gesamteindruck: Hohe Text- und Übersetzungsqualität, durchdachte Barrierefreiheit (Fokusfalle, ARIA, reduced-motion), saubere Zahlenformat-Trennung DE/EN. Die Hauptschwächen liegen in (1) typografischer Inkonsistenz der Anführungszeichen in englischen Texten, (2) Touch-/Onboarding-Lücken und (3) Orientierung auf langen leeren Deep-Space-Strecken.

---

## Befund-Übersicht nach Schweregrad

| Schweregrad | Anzahl |
|---|---|
| KRITISCH | 0 |
| HOCH | 4 |
| MITTEL | 7 |
| NIEDRIG | 6 |

---

## KRITISCH
Keine. Insbesondere: Die Risikostellen aus Punkt 2 (siehe eigener Abschnitt unten) sind allesamt entschärft — keine problematische Wort-Bild-Kombination gefunden. Der frühere Vorfall („dunkelster Planet" + Kinderfoto) ist behoben: `tres2b` referenziert `images/tres2b.jpg` (`exists:false` → Emoji-Fallback ⚫), kein Personenfoto mehr.

---

## HOCH

### H1 — Englische Texte verwenden durchgängig deutsche Anführungszeichen („…“) statt englischer ("…"/'…')
Pervasiv in **`dd_stellar.js`** (~29 englische `desc`-Absätze) und punktuell anderswo. Beispiele:
- `dd_stellar.js:15` — „live“ in EN-Absatz (Sonne)
- `dd_stellar.js:70` — „Breakthrough Starshot“ (Alpha Centauri)
- `dd_stellar.js:96` — „runaway star“ (Barnard)
- `dd_stellar.js:124/125/126` — „failed stars“ / „surfaces“ / „weather map“ (Luhman 16)
- `dd_stellar.js:263/264` — „Lucy“ / „gemstone“ / „rings“ (BPM 37093)
- `dd_stellar.js:290` — „rival of Ares“ / „rival of Mars“ (Antares)
- `dd_stellar.js:317/318` — „only“ / „Great Dimming“ / „soon“ (Beteigeuze)
- `dd_stellar.js:371` — „tick“ / „LGM-1“ / „Little Green Men“ (Erster Pulsar)
- `dd_stellar.js:426` — „Garnet Star“ (Mu Cephei)
- `dd_stellar.js:453` — „Great Eruption“ / „Homunculus Nebula“ (Eta Carinae)
- `dd_stellar.js:483/538/565` — „millisecond pulsars“ / „hypervelocity stars“ / „starquake“
- `dd_stellar.js:593/594` — „morning star“ / „Sunrise Arc“ (Earendel)
- `dd_stellar.js:626` — „wobble“ (Proxima b)
- `dd_stellar.js:687/718/749` — „diamond planet“ / „hot Jupiter“ / „free-floating“/„vagabond“
- `dd_stellar.js:774` — „Star Wars“ / „circumbinary“ (Kepler-16b)
- `dd_stellar.js:806/897` — „weather“ / „ticking“

**Empfehlung:** In allen `en:`-Strings deutsche „…“ → englische „"…"“ (oder durchgängig 'single', wie es `data.js` und `dd_deep.js:370` bereits korrekt machen). Sprachabhängig setzen, nicht global ersetzen — die deutschen Absätze sind korrekt. Betrifft ausschließlich `en:`-Felder; am stärksten `dd_stellar.js`.

### H2 — Falsche Anführungszeichen in zweisprachiger `value`-Zeile
`dd_stellar.js:815` — `en: "deep blue, „glass rain“ at 7,000 km/h"` nutzt im englischen Wert deutsche Quotes. (DE-Wert „Glasregen“ ist korrekt.) Einzelfall, aber im Modal sichtbar.

### H3 — Touch-Onboarding: kein Hinweis, dass Antippen Details öffnet
Auf Touch-Geräten (`supportsHover === false`, `script.js:504`) gibt es **kein Hover-Popup**; das Tippen öffnet direkt das Modal. Das ist gut umgesetzt, aber **nirgends kommuniziert**. Das Start-Overlay (`index.html:71–78`) erklärt nur das Scrollen, nicht die Tippbarkeit der Objekte. Auf Desktop signalisiert das Hover-Popup die Interaktivität — auf Mobile fehlt dieses Signal komplett.
**Empfehlung:** Im Start-Overlay oder als einmaliger Tooltip einen Hinweis ergänzen (z. B. „Tippe ein Objekt für Details" / „Tap any object for details"), idealerweise nur bei `(hover: none)`.

### H4 — Scroll-Richtung kann verwirren: „nach oben scrollen, um aufzusteigen"
Der Kern-Interaktionsmechanismus (`scrollHint`, Init scrollt an `document.body.scrollHeight`, also ganz nach unten) bedeutet: Man startet unten und scrollt **nach oben**, was der intuitiven „runterscrollen = weiter"-Erwartung widerspricht (neal.fun/deep-sea geht bewusst nach unten). Der Hinweis „↑ Scrolle nach oben, um aufzusteigen" adressiert das, verschwindet aber nach dem **ersten** Scroll-Event (`script.js:603–607`) — auch wenn der Nutzer versehentlich nach unten gescrollt hat und am Boden „klebt" (kein weiterer Raum nach unten).
**Empfehlung:** Hinweis nicht nach erstem Scroll, sondern erst nach erkennbarer Aufwärtsbewegung ausblenden; ggf. Pfeil-/Bob-Animation beibehalten, bis eine Mindesthöhe erreicht ist.

---

## MITTEL

### M1 — Höhenmesser ist `aria-hidden="true"` — Screenreader bekommen die zentrale Live-Info nie
`index.html:31` setzt `#altimeter aria-hidden="true"`. Der Höhenmesser ist das wichtigste Orientierungselement (aktuelle Höhe + Akt-Name). Screenreader-Nutzer werden so komplett von der Kerninformation ausgeschlossen.
**Empfehlung:** `aria-hidden` entfernen und Wert per `aria-live="polite"` (gedrosselt) ausgeben, oder zumindest eine textuelle Alternative bereitstellen.

### M2 — Sehr lange leere Deep-Space-Strecken ohne Zwischenorientierung (Pacing)
Log-Skala mit `PX_PER_DECADE = 5000`. Zwischen ikonischen Markern (z. B. 1 Mrd. → 13 Mrd. Lichtjahre) entstehen tausende Pixel ohne Objekt oder Marker. STATUS.md nennt das bewusst („Vastness gewollt"), aber für Orientierung/Geduld ist es riskant: Der Nutzer weiß nicht, ob noch etwas kommt. Der Höhenmesser läuft zwar mit, doch im Sternfeld (560 Sterne) fehlt jeder Fortschrittsanker.
**Empfehlung:** Dezente Zwischenmarken (z. B. „1 Mrd. Lichtjahre", „10 Mrd. Lichtjahre") oder ein Lichtlaufzeit-Hinweis am Rand, der mitscrollt. Optional ein „Weiter →"-Affordance.

### M3 — Teleport-Menü: Liste lang, kein aktueller-Standort-Marker, schließt nicht bei Klick außerhalb
`#teleport-menu` ist ein `<details>`. Es gibt 12 Ziele, aber keine Markierung des aktuell sichtbaren Akts und kein Auto-Schließen bei Klick daneben (nur beim Auswählen via `removeAttribute("open")`, `script.js:532`). Auf Mobile überlagert das offene Menü ggf. Inhalte.
**Empfehlung:** Aktiven Akt hervorheben; `blur`/Outside-Click-Handler zum Schließen; auf Mobile Höhe begrenzen + scrollbar.

### M4 — Modal-Quelle öffnet externen Tab — unter `file://`/offline Sackgasse ohne Rückmeldung
`openModal` rendert `<a href=… target="_blank">` (`script.js:413–414`). Ist gut (rel=noopener), aber bei Offline-Nutzung (Doppelklick auf `index.html`) wirkt der tote Wikipedia-Link wie eine Sackgasse. Minor, aber erwähnenswert.

### M5 — Inkonsistente Bindestrich-/Schreibweise bei Eigennamen-Zusätzen
- `data.js`: teils En-Dash mit Beschreibung im Namen (z. B. „TrES-2b – der dunkelste Planet", „M87* – das erste fotografierte Schwarze Loch", „Earendel – der fernste Stern"), teils Klammer-Zusatz („Pluto (Zwergplanet)", „Mu Cephei (Granatstern)"). Zwei Konventionen für denselben Zweck (Name + Kurzbeschreibung).
**Empfehlung:** Eine Konvention wählen (empfohlen: Klammer-Zusatz für Beinamen, En-Dash nur für Superlativ-Auszeichnung) — kosmetisch, aber sichtbar im Höhenmesser/Modal-Titel.

### M6 — `formatAlt`: EN nutzt „billion" für 1e9 km **und** für 1e9 Lichtjahre — bei km irreführend nah an DE „Mrd."
`script.js:67/74`: km≥1e9 → „billion km", ly≥1e9 → „billion light-years". Korrekt (kurze Skala), aber DE „Mrd." vs. EN „billion" ist die einzige Stelle, wo die Skalenkonvention auseinanderläuft. Konsistent umgesetzt, daher nur Hinweis: bei Lokalisierungs-Reviews beachten, dass „billion" hier 10⁹ meint.

### M7 — Kurz-`fact` von Laika/Belka verschweigt das Schicksal — Modal korrigiert es, Hover-Popup nicht
`data.js:514` (Laika-`fact`) erwähnt den Tod nicht; das Modal (`dd_space.js:667–678`) behandelt ihn taktvoll und korrekt. Das **Hover-Popup** zeigt nur den `fact` (`script.js:466–468`), also die geschönte Kurzfassung. Inhaltlich vertretbar (kindgerecht), aber die Info-Tiefe springt zwischen Popup und Modal.
**Empfehlung:** Bewusst so lassen ODER im Kurz-`fact` einen neutralen Halbsatz ergänzen. Keine Dringlichkeit.

---

## NIEDRIG

### N1 — `<html lang="de">` wird bei Sprachwechsel zwar via JS gesetzt (`applyStaticI18n`), aber Modal-Texte ohne `lang`-Attribut
Bei EN bleibt der DOM-`lang` korrekt; jedoch tragen einzelne fremdsprachige Eigennamen kein eigenes `lang`. Marginal für Screenreader-Aussprache.

### N2 — Emoji als primäre Bildquelle für alle Tier-/Technik-Objekte (74 von 155 Bilder fehlen lokal)
Laut `_image_map.json` haben alle `cat:bird/insect/aircraft/manned/unmanned`-Objekte `exists:false` → Emoji-Platzhalter. Funktioniert (Fallback sauber), aber visuell uneinheitlich gegenüber den echten NASA-Fotos im Kosmos-Teil. Bekannt (STATUS-Backlog 3).

### N3 — `alt`-Text der Bilder = nur der Name; Emoji-Platzhalter hat kein `aria-label`
`script.js:153` `alt="${name}"` ist ok; der Emoji-`div.placeholder` (`script.js:155`) ist rein dekorativ ohne Label — bei Bild-Fehler fehlt Screenreadern jede Info außer der figcaption. Die figcaption deckt es ab, daher niedrig.

### N4 — Responsive: Lane-Abstände auf Mobile eng (`side-left:28% / side-right:72%`, Item-Breite 140px)
`styles.css:484–488`: Bei 140px-Items und Lanes bei 28%/72% (Mitte 50%, 16%/84% via `LANE_X`) können bei sehr schmalen Screens (<360px) Items mit langen Namen (z. B. „Mexikanische Bulldoggfledermaus", „JADES-GS-z14-0 – die fernste Galaxie") horizontal überlappen oder den Viewport-Rand berühren. `LANE_X = [50,30,70,16,84]` (`script.js:117`) wird im CSS-Breakpoint **nicht** angepasst — nur `side-left/right` (das sind die figcaption-Klassen, nicht die JS-Lanes). Prüfen, ob die 16%/84%-Lanes auf Mobile zu weit außen sitzen.
**Empfehlung:** Auf Mobile `LANE_X` enger fassen (z. B. `[50,32,68,20,80]`) und/oder lange Namen umbrechen lassen (aktuell `white-space` nicht beschränkt, aber feste Item-Breite → Umbruch ok).

### N5 — Modal auf kleinen Screens: `max-height: calc(100vh - 48px)` + viel Inhalt → langer Scroll, Schließen-Button scrollt mit weg?
`styles.css:374–394`: `.modal-close` ist `position:absolute; top:12px` **relativ zur scrollenden `.modal-card`**, scrollt also beim Lesen langer `desc`+`groups` aus dem Sichtbereich. Auf Mobile mit viel Text muss man hochscrollen, um zu schließen (ESC/Outside-Tap funktioniert aber).
**Empfehlung:** Close-Button `position: sticky` oder fix am Karten-Header.

### N6 — Scroll-Hinweis und Höhenmesser können sich auf Mobile mit dem Modal/Controls überlagern
`#controls` (oben links), `#altimeter` (oben rechts, Mobile 116px), `#scroll-hint` (unten Mitte). Bei sehr kleinen Höhen (Landscape-Phone) wird der Platz oben knapp; `#teleport-menu` (offen) + `#altimeter` könnten kollidieren. Nicht verifiziert am Gerät, nur aus CSS abgeleitet.

---

## RISIKOSTELLEN aus Prüfpunkt 2 (sensible Formulierungen) — separat hervorgehoben

**Ergebnis: Keine akut problematische Wort-Bild- oder Wort-Text-Kombination gefunden.** Alle kosmischen Bilder zeigen das jeweilige Objekt selbst (NASA/ESO/Hubble/JWST, siehe `_image_map.json`) — keine Personen-/Kinderfotos neben wertenden Adjektiven. Dennoch zur bewussten Beobachtung gelistet (alle derzeit UNBEDENKLICH, da Bild = Objekt):

1. **`tres2b` „TrES-2b – der dunkelste Planet" / „the darkest planet"** (`data.js:790–795`) — der Anlass des früheren Vorfalls. JETZT ENTSCHÄRFT: `images/tres2b.jpg` `exists:false` → Emoji ⚫. **Empfehlung:** Falls je ein echtes Bild ergänzt wird, ausschließlich eine Künstler-Darstellung des Planeten verwenden, niemals ein generisches „dunkles"/Personen-Motiv. Wert weiterhin überwachen.

2. **`magnetar` / Sterne mit „dunkel/schwarz"-Vokabular** (`darkmatter` „Dunkle Materie", `darkenergy`, `bootesvoid` „die große Leere", `holm15a`) — rein physikalische Begriffe, Bilder zeigen Karten/Strukturen. Unbedenklich, nur als Kategorie notiert, weil „dunkel" + Bild der sensible Mustertyp war.

3. **`laika` „Laika (Sputnik 2)"** (`data.js:511`, `dd_space.js:667`) — Tier-Tod. Taktvoll behandelt: Kurz-`fact` neutral, Modal erklärt das Schicksal würdevoll („Ihr Opfer…", Denkmal). UNBEDENKLICH, sensibel gelöst (siehe M7 zur Info-Tiefe).

4. **`pulsarplanets` „Friedhofsplaneten / graveyard worlds", „born of their star's death"** (`dd_stellar.js:893/898`) — drastische, aber rein astronomische Metaphorik, kein Personenbezug. UNBEDENKLICH.

5. **`everest` „death zone / Todeszone"** (`dd_tech1.js:68`) — etablierter Fachbegriff (Bergsteigen). UNBEDENKLICH.

6. **`firstpulsar` „Little Green Men"** (`data.js:849`, `dd_stellar.js:371`) — historischer, dokumentierter Spitzname; kein ethnischer/kultureller Bezug. UNBEDENKLICH.

7. **Eigennamen-Herkunft korrekt & respektvoll attribuiert:** „Laniakea" (hawaiianisch „unermesslicher Himmel", `dd_deep.js:209`), „Arrokoth" (Powhatan „Himmel"), „ʻOumuamua" (hawaiianisch, korrekt mit ʻokina geschrieben, `data.js:636`). Positiv hervorzuheben — keine Aneignung/Verzerrung.

**Keine** wertenden Adjektive neben menschlichen Eigennamen (Gagarin, Tereschkowa, Baumgartner, Eustace, Singhania, Fedotow, North, Herschel, Schmidt, Wolszczan/Frail) gefunden — durchgehend sachlich-würdigend.

---

## Wichtigste UX-Verbesserungen (priorisiert)

1. **(H3)** Touch-Hinweis „Objekt antippen für Details" ergänzen — sonst ist auf Mobile unklar, dass die Objekte interaktiv sind.
2. **(H4)** Scroll-Hinweis nicht beim ersten beliebigen Scroll ausblenden, sondern erst nach echter Aufwärtsbewegung; Richtungslogik klarer machen.
3. **(M1)** Höhenmesser für Screenreader zugänglich machen (`aria-hidden` weg, `aria-live`).
4. **(M2)** Dezente Zwischenmarken/Lichtlaufzeit-Anker auf den langen leeren Deep-Space-Strecken gegen „ist da noch was?".
5. **(M3)** Teleport: aktiven Akt markieren + Outside-Click-Schließen + Mobile-Höhe begrenzen.
6. **(N5)** Modal-Schließen-Button sticky machen (Mobile, lange Inhalte).

## Wichtigste Text-Verbesserung

- **(H1/H2)** Anführungszeichen in allen englischen Strings (vor allem `dd_stellar.js`, ~30 Stellen) von deutsch „…“ auf englisch korrigieren. Größter und sichtbarster Text-Qualitätsmangel; betrifft sonst durchweg sehr gute Übersetzungen.
