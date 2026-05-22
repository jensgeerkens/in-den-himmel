# Faktencheck — "In den Himmel"

Gutachten zur faktischen Korrektheit und DE/EN-Konsistenz der Inhalte
(data.js + data_details.js + dd_*.js). Reines Gutachten — **keine Daten verändert.**

- Stand der Prüfung: 2026-05-22
- Geprüfte Objekte: **155 / 155** (alle SKY_DATA-IDs haben einen SKY_DETAILS-Eintrag, keine Waisen)
- Methode: programmatische Konsistenzprüfung (Node-Skripte in `eval/`) + WebSearch-Stichproben der riskantesten Rekord-/Entfernungs-/Entdeckungsclaims.

## Gesamteindruck

Die Datenqualität ist **sehr hoch**. Automatische Prüfungen ergaben:

- **DE/EN-Absatzparität:** 100 % — kein Objekt mit abweichender Absatzzahl, kein fehlendes `desc`.
- **DE/EN-Zahlenparität:** praktisch perfekt — 0 Mismatches in `fact`, 0 in `desc`, 0 echte Mismatches in `groups` (1 Treffer war ein False-Positive: Datum `27.12.2004` = `27 Dec 2004`, korrekt lokalisiert).
- **Jahres-Konsistenz fact↔detail:** 0 Diskrepanzen.
- **Entfernungs-Konsistenz altitude_m ↔ Text:** kosmische Distanzen passen durchweg sehr gut zu `altitude_m` (Lj/AE/comoving korrekt). Nur **eine** echte grobe Abweichung (us708, s. KRITISCH/HOCH).

Verifizierte und korrekt befundene Rekord-/Hartwerte (Stichprobe): kelt9b (heißester Exoplanet, 4.300 °C ✓), tres2b (dunkelster, <1 % ✓), m87 (6,5 Mrd. M☉, 2019 ✓), ton618 (66 Mrd. M☉, „eines der größten" ✓ korrekt gehedged), stephenson218 (2.150 R☉, größter Kandidat ✓), gaiabh1 (nächstes SL, 1.560 Lj, 2022 ✓), eris (massereicher als Pluto, 2005, 2.326 km ✓), omegacentauri (größter Kugelhaufen, ~10 Mio. Sterne ✓), parker (Dez. 2024, 6,1 Mio. km, ~690.000 km/h, schnellstes Objekt ✓), voyager1 (172,6 AE / 25,8 Mrd. km, 2026 ✓), universum/cmb (46,5 Mrd. Lj Radius, 93 Mrd. Lj Durchmesser ✓), jadesz14 (z≈14,3, ~290 Mio. J., 13,5 Mrd. Lj Lichtlaufzeit ✓), earendel (z≈6,2, ~900 Mio. J. ✓).

---

## Befunde nach Schweregrad

### KRITISCH

Keine klar falschen/irreführenden Aussagen, die in die Top-Kategorie fallen. Der einzige harte Entfernungsfehler (us708) ist unten als HOCH eingestuft, weil er die Kernaussage (Hypergeschwindigkeitsstern verlässt Galaxie) nicht entwertet.

### HOCH

**1. `us708` — Entfernung um Faktor ~2,5 zu klein**
- Problem: Durchgängig (fact, `desc` 3×, group „Entfernung", „Lichtlaufzeit") wird **≈ 25.000 Lichtjahre** angegeben.
- Korrekt: US 708 liegt im galaktischen Halo bei **≈ 62.000 Lichtjahren** (Wikipedia/Sci.News: 61.970 Lj). Geschwindigkeit 1.200 km/s ist korrekt.
- Empfehlung: Entfernung und Lichtlaufzeit auf **≈ 62.000 Lichtjahre / ≈ 62.000 Jahre** korrigieren. Optional `altitude_m` (akt. 2,5e4 Lj) entsprechend anpassen, damit die Position auf der Scrollachse stimmt.
- Quelle: https://en.wikipedia.org/wiki/US_708 , https://www.sci.news/astronomy/science-us708-hypervelocity-star-supernova-galactic-speed-record-02571.html

**2. `uyscuti` — Radius (1.700 R☉) und Größen-Superlativ veraltet**
- Problem: fact „Einer der größten bekannten Sterne" + group „Radius ≈ 1.700 Sonnenradien (Schätzung)" + „Entfernung ≈ 5.900 Lj (unsicher)".
- Korrekt: Seit Gaia DR2 wurde UY Scuti **deutlich nach unten revidiert** — heute oft nur **≈ 755 R☉** (geringere Distanz). UY Scuti gilt nicht mehr als Top-Kandidat für den größten Stern (das ist jetzt Stephenson 2-18 mit ~2.150 R☉, im Datensatz korrekt).
- Bewertung: Durch „Schätzung"/„unsicher"/„einer der größten" ist es teils gehedged, aber 1.700 R☉ ist die alte, überholte Zahl.
- Empfehlung: Radius mit Spannweite/Revisionshinweis versehen (z. B. „historisch ~1.700 R☉, neuere Messungen deutlich niedriger") oder auf den oft zitierten Wert ~1.700 R☉ mit klarem „ältere Schätzung" kennzeichnen. Mindestens nicht als sicher größter Stern darstellen.
- Quelle: https://en.wikipedia.org/wiki/UY_Scuti (Gaia-DR2-Revision), https://www.star-facts.com/stephenson-2-18/

### MITTEL

**3. `andromeda` — „das fernste Objekt mit bloßem Auge" widerspricht eigenem `triangulum`-Eintrag**
- Problem: fact: „das fernste Objekt, das man mit bloßem Auge sehen kann." Gleichzeitig beschreibt der Datensatz **triangulum** (2,73 Mio. Lj, also weiter weg) als „unter perfekt dunklem Himmel gerade noch mit bloßem Auge zu erahnen."
- Korrekt: Unter exzellenten Bedingungen ist M33 (Triangulum) das **fernste** mit bloßem Auge sichtbare permanente Objekt; Andromeda ist nur das **hellste/leicht** sichtbare ferne Objekt. Interner Widerspruch.
- Empfehlung: Andromeda-fact entschärfen zu „eines der fernsten / das fernste leicht mit bloßem Auge sichtbare Objekt".
- Quelle: https://en.wikipedia.org/wiki/Triangulum_Galaxy , https://www.guinnessworldrecords.com/world-records/most-remote-object-visible-by-the-naked-eye

**4. `herculescorona` — „die größte bekannte Struktur" ohne Vorbehalt**
- Problem: fact + desc behaupten apodiktisch „die größte bekannte Struktur des Universums".
- Korrekt: Die Hercules–Corona-Borealis-Großmauer ist **putativ/umstritten** (Filament aus Gammablitz-Häufung, statistisch angezweifelt). Die ~10 Mrd. Lj Ausdehnung stimmt, der Superlativ ist aber nicht gesichert.
- Empfehlung: „eine der größten bekannten / mutmaßlich größten (umstrittenen) Strukturen" formulieren.
- Quelle: https://en.wikipedia.org/wiki/Hercules%E2%80%93Corona_Borealis_Great_Wall

**5. `earendel` — als „Einzelstern" deklariert, neuere JWST-Analyse deutet auf Sternhaufen**
- Problem: fact „der fernste je beobachtete Einzelstern". `desc` hedged bereits gut mit „(oder ein sehr kleines Sternsystem)".
- Korrekt: JWST-Nachbeobachtungen legen nahe, dass Earendel **eher ein kompakter Sternhaufen** sein könnte; der „fernster Einzelstern"-Status ist nicht gesichert. z≈6,2 und ~900 Mio. J. sind korrekt.
- Empfehlung: fact ebenfalls hedgen („fernster Kandidat für einen Einzelstern" / „möglicherweise ein kompakter Haufen"). Niedriger Aufwand, da `desc` schon korrekt formuliert.
- Quelle: https://en.wikipedia.org/wiki/WHL0137-LS

### NIEDRIG

**6. Deutsche Anführungszeichen („ … ") im englischen Text — systematisch, 23 Objekte**
- Problem: In 23 Detail-Objekten (alle in dd_stellar.js) stehen im EN-`desc`/-Werten deutsche Tief-Anführungszeichen U+201E „ statt englischer Quotes (“ ” oder ').
- Betroffene IDs: `sonne, proxima, alphacentauri, barnard, luhman16, bpm37093, antares, betelgeuse, firstpulsar, mucephei, etacarinae, fastestpulsar, us708, magnetar, earendel, proximab, cancri55e, fiftyonepeg, rogueplanet, kepler16b, hd189733b, kelt9b, pulsarplanets`
- Empfehlung: in den EN-Strings „…" → "…" (oder “…”) ersetzen. Rein typografisch, kein Faktenproblem.

**7. `sgrA` vs `galaxis` — Sgr-A*-Masse uneinheitlich gerundet**
- `galaxis`.fact: „4 Mio. Sonnenmassen"; `sgrA`: „4,3 Mio. Sonnenmassen". Beide beziehen sich auf dasselbe Schwarze Loch; akzeptierter Wert ~4,15 Mio. Beide im Rahmen, aber inkonsistent gerundet.
- Empfehlung: vereinheitlichen (z. B. beide „~4 Mio." oder beide „~4,3 Mio.").

**8. `holm15a` / `us708` — fact-Superlativ stärker als desc**
- holm15a.fact: „Das massereichste Schwarze Loch im näheren Universum"; desc korrekt „eines der massereichsten". (Phoenix A wird teils höher geschätzt.)
- us708.fact: „Der schnellste bekannte Stern"; desc „einer der schnellsten".
- Empfehlung: fact an das (korrektere) desc-Hedging angleichen.

**9. `eris` — `altitude_m` (96 AE) vs. mittlere Entfernung (~68 AE)**
- Die Achsenposition nutzt offenbar nahe Aphel (96,4 AE), während die Steckbrief-Zeile die mittlere Entfernung (~68 AE) nennt. Sachlich beides korrekt; nur erklärungsbedürftig, falls Nutzer die Zahlen vergleichen. Kein Fehler, nur Hinweis.

---

## Konsistenz-Tabelle: auffälligste Entfernungs-Abweichungen

| id | altitude_m | entspricht | im Text genannt | Bewertung |
|----|-----------|-----------|-----------------|-----------|
| **us708** | 2,5e4 Lj | 25.000 Lj | 25.000 Lj (Text) — real **~62.000 Lj** | **HOCH: Text & alt beide falsch (~2,5× zu klein)** |
| eris | 96 AE | 96 AE (≈ Aphel) | mittl. Entf. ~68 AE | OK (Aphel vs. Mittel), erklärungsbedürftig |
| laniakea | 2,5e8 Lj | 250 Mio. Lj (Radius) | Durchmesser ~500 Mio. Lj | OK (alt = Radius, Text = Durchmesser) |
| uyscuti | 5,9e3 Lj | 5.900 Lj | „~5.900 Lj (unsicher)" — neuere Distanz geringer | konsistent intern, aber Wert veraltet (s. HOCH #2) |
| milkyway | 5,0e4 Lj | 50.000 Lj (≈ unsere Position im Halo-Maßstab) | Durchmesser ~100.000 Lj | OK (alt ≠ Durchmesser; Designentscheidung) |
| ton618 | 1,82e10 Lj | 18 Mrd. Lj (comoving) | Lichtlaufzeit ~10,8 Mrd. Lj | OK (comoving vs. light-travel sauber getrennt) |
| jadesz14 | 3,36e10 Lj | 33,6 Mrd. Lj (comoving) | Lichtlaufzeit ~13,5 Mrd. Lj | OK |
| universum/cmb | 4,56–4,65e10 Lj | 45,6–46,5 Mrd. Lj | 46,5 Mrd. Lj Radius / 93 Mrd. Lj Durchm. | OK |

Hinweis: Die übrigen vom Skript geflaggten „Abweichungen" (arrokoth 36 km, psyche 220 km, parker 6,1 Mio. km) sind **False Positives** — dort matchte die Objekt-**Größe/Annäherung**, nicht eine Entfernung. Inhaltlich korrekt.

---

## Fazit / Priorisierung

Korrektur-Reihenfolge nach Wirkung:
1. **us708-Entfernung** (HOCH, klar falsch) → 62.000 Lj.
2. **uyscuti-Radius/Superlativ** (HOCH, veraltet) → Revisionshinweis.
3. **andromeda / herculescorona / earendel-Superlative** (MITTEL) → hedgen, einer (andromeda) ist sogar ein interner Widerspruch.
4. **EN-Anführungszeichen** (NIEDRIG, kosmetisch, 23 IDs) → „ ersetzen.
5. **sgrA/galaxis-Masse + holm15a/us708-fact-Superlative** (NIEDRIG) → vereinheitlichen.

Ansonsten: Der Datensatz ist faktisch sehr solide, die DE/EN-Lokalisierung (Komma/Punkt, Absatzparität, Zahlenparität) ist mustergültig.
