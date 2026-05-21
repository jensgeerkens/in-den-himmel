# Plan: "In den Himmel" → Der kosmische Kern (große Erweiterung)

## Context

Die Seite (`C:\Users\geeje\in-den-himmel\`, Vanilla HTML/CSS/JS, per Doppelklick lauffähig, zweisprachig DE/EN) steht bereits funktionsfähig: Man scrollt vom Boden hoch durch Tiere → Flugzeuge → Raumfahrt (bemannt/unbemannt, inkl. UdSSR-Pioniere & Laika) → Planeten/Sonne → Voyager → kosmische Marken bis zum Rand des beobachtbaren Universums. Aktuell 71 Objekte, log-Skala bis 46,5 Mrd. Lichtjahre, Höhenmesser, Spaltenverteilung gegen Überlappung, Detail-Modal, Teleport, Jahreszahlen ab dem Weltraum.

**Neue Vision des Nutzers:** Der **kosmische Teil wird der Kern** der Seite — ein schier endloser, maximal informativer Scroll durch die faszinierendsten und namhaftesten Objekte des Alls. Man soll „gefühlt ewig" scrollen und dabei Staunenswertes lernen.

**Bestätigte Entscheidungen:**
- **Echte NASA/ESA/ESO-Bilder** für kosmische Objekte (gemeinfrei; auf dunklem Hintergrund ohne Freistellen — anders als die Tier-Fotos).
- **Echte logarithmische Skala + Story** (echtes Gefühl der Weite; Sektions-Banner, Lichtlaufzeit-Story in den Fakten, Teleport für Navigation).

**Recherche abgeschlossen** (10 Agenten, Faktencheck inklusive): ~150 kuratierbare kosmische Objekte mit Distanzen, Typen, faszinierenden Fakten, NASA-Bild-Suchbegriffen und Quellen liegen vor. Bestandswerte bestätigt (1 Lj = 9,4607e12 km; Voyager/Parker/Polaris/Artemis korrekt).

## Foundation (unverändert wiederverwenden)
- `script.js`: Skala `altToGroundPx/altToY/groundPxToAlt` (LOG bis 5e23 km), `buildScene()` mit Spalten-Algorithmus (kollisionsfrei), `formatAlt()` mit km→Mio→Mrd→**Lichtjahr**-Stufen, `drawBg()` Canvas-Gradient+Sterne, `buildAtmosphere/buildMilestones/buildClouds`, Teleport, Sprache, Modal.
- `data.js`: `SKY_DATA[]`, `ATMOSPHERE_LAYERS`, `SKY_COLORS`, `SPACE_YEARS`, `TELEPORT_TARGETS`.
- Distanz-Mathematik: `altitude_m` ist Meter. Umrechnung neuer Objekte: **Lichtjahre → m: `ly * 9.4607e15`**; **AE → m: `AU * 1.496e11`**; bei z>1-Objekten **comoving-Distanz** verwenden (passt unter den Universums-Rand 46,5 Mrd Lj).

---

## 1. Datenmodell-Erweiterung (`data.js`)

Bestehendes Schema behalten, neue `cat`-Werte + Felder ergänzen:
- Neue Kategorien: `planet`, `star` (Sonne, nahe & Riesensterne, Sternleichen), `exoplanet`, `nebula`, `cluster` (offen/Kugel), `blackhole`, `galaxy`, `cosmic` (Haufen/Superhaufen/Struktur/Mysterien/CMB/Rand).
- Optionales Feld `nasa` = Suchbegriff für die Bild-Pipeline (statt fester Bild-URL).
- Optionales Feld `note:"unsicher"` für von der Recherche ⚠-markierte Werte (eigenes Badge).
- Bei sehr fernen Objekten Lichtlaufzeit-Story direkt in `fact` (z. B. „dieses Licht ist 2,5 Mio. Jahre alt").

## 2. Inhalt: kuratierte Objektliste (~150 neue Objekte, nach Distanz)

Aus der Recherche kuratieren (Dubletten/Fehler aussortieren, z. B. der falsch etikettierte „Aldebaran-Hyperriese"). Verteilung über die kosmischen Akte:

- **Sonnensystem-Kleinkörper & Rand** (AE): Asteroidengürtel, Ceres, Vesta, Psyche · Halley, Hale-Bopp, NEOWISE, 67P · 'Oumuamua, 2I/Borisov · Eris, Haumea, Makemake, Quaoar, Arrokoth, Sedna · Termination Shock, Heliopause · Pioneer 10/11 · Oortsche Wolke (~1 Lj).
- **Interstellare Nachbarschaft** (4–150 Lj): Alpha/Proxima Centauri, Barnard, Sirius (+ Sirius B), Luhman 16, Wolf 359, Tau Ceti, Epsilon Eridani, Vega, Altair, Fomalhaut, Arcturus · Exoplaneten: Proxima b, TRAPPIST-1 (e/f/g), 51 Pegasi b, 55 Cnc e (Diamant/Lava), HD 189733b (Glasregen), KELT-9b (heißester), TrES-2b (schwärzester), Kepler-16b (Tatooine), WASP-12b, super-puffs, Rogue Planets, BPM 37093 „Lucy" (Diamant-Weißzwerg).
- **Die Milchstraße** (150–100.000 Lj): Hyaden, Plejaden, Omega Centauri · Orionnebel, Adlernebel/Säulen der Schöpfung, Carina, Lagune, Trifid · Krebsnebel & -pulsar, Vela, Helix, Ring, Katzenauge, Hantelnebel · erster Pulsar (LGM-1), schnellster Pulsar, PSR B1257+12, Magnetare (SGR 1806-20) · Eta Carinae, P Cygni, Mu Cephei, Beteigeuze, Antares, Rigel, UY Scuti, Stephenson 2-18, R136a1 · Hypergeschwindigkeitsstern US 708 · Cygnus X-1, Gaia BH1 · Sagittarius A* (+ Stern S2) · Fermi-Blasen · Milchstraßen-Durchmesser.
- **Lokale Gruppe & Galaxien** (160 kly–40 Mly): Große/Kleine Magellansche Wolke + Tarantelnebel · Andromeda, Dreiecksgalaxie, Lokale Gruppe · Whirlpool, Sombrero, Zigarrengalaxie, Centaurus A (+ M87*).
- **Haufen, Superhaufen, Struktur** (50 Mly–1,4 Gly): Virgo, Fornax, Coma · Großer Attraktor, Dipol-Repeller, Laniakea · Boötes-Void, KBC-Void · Holm 15A, Quasar 3C 273, OJ 287, Blazar Mrk 421 · Gravitationswellen GW150914 & GW170817 (Kilonova/Gold) · Sloan/BOSS Great Wall.
- **Frontier & Mysterien** (1,4 Gly → 46,5 Gly): Dunkle Materie, Dunkle Energie, Fast Radio Bursts, Wow!-Signal, TON 618, SDSS J0100+2802, Hercules–Corona-Borealis-Mauer, Earendel (fernster Stern), JADES-GS-z14-0 (fernste Galaxie), CMB („Babyfoto"), Rand des beobachtbaren Universums.

Jeder Eintrag bilingual mit geprüftem Fakt + Quelle; ⚠-Werte markiert.

## 3. Kosmische „Akte", Sektions-Banner & Navigation

- Neues `SECTIONS[]` (from/to alt + Titel DE/EN): *Atmosphäre · Sonnensystem · Interstellare Nachbarschaft · Die Milchstraße · Lokale Gruppe & Galaxien · Galaxienhaufen & Superhaufen · Großräumige Struktur · Die Grenze des Sichtbaren*. Gerendert als große, mittige, durchscheinende Banner an den Übergängen (neue `buildSections()` analog `buildMilestones()`).
- Höhenmesser zeigt zusätzlich den aktuellen **Akt-Namen** (statt nur Atmosphärenschicht, sobald im Weltraum).
- **Teleport-Menü** auf die Akte erweitern (Sonnensystem, Nahe Sterne, Milchstraße, Galaxien, Superhaufen, Frontier, Rand) — Pflicht für einen „endlosen" Scroll.
- Optional: ausgewählte Entdeckungs-/Beobachtungsjahre via `SPACE_YEARS` auch für ikonische kosmische Objekte (erster Pulsar 1967, M87*-Foto 2019, GW150914 2016, JADES 2024).

## 4. Echte NASA/ESA-Bilder (neues Tool `tools/fetch_space_images.py`)

- Nutzt die **NASA Image and Video Library API** (`https://images-api.nasa.gov/search?q=<term>&media_type=image`): pro Objekt mit `nasa`-Suchbegriff das erste Treffer-Asset laden, auf ~480px skalieren (Pillow), als `images/<id>.jpg` speichern, Attribution in `CREDITS.md` schreiben.
- Kosmische Bilder werden **nicht freigestellt** (auf dunklem Hintergrund ideal). `rembg` bleibt nur für Tiere.
- `<img>` mit `loading="lazy"`; Emoji-Fallback (bestehendes `onerror`) greift, wenn kein Bild gefunden wird.
- Lauf der Build-Phase ausführen, Stichproben im Browser prüfen.

## 5. Skala, Pacing & Performance

- Skala-Obergrenze bleibt `LOG_MAX_KM=5e23` (Rand 46,5 Mrd Lj). `PX_PER_DECADE` ~5000–6000 → Gesamthöhe ~150–180k px (bewusst „endlos"; Navigation via Teleport/Akte). Dichte Cluster werden vom bestehenden Spalten-Algorithmus überlappungsfrei verteilt (ggf. `LANE_X` auf 6–7 Spuren erweitern).
- Performance: `content-visibility:auto` (vorhanden) + `loading="lazy"` halten ~220 Objekte + Bilder flüssig. Stern-/Tiefenraum-Hintergrund ggf. um schwache Galaxien-Sprites ergänzen (Polish).

## 6. Build-Pipeline & Team (Tools/Agenten)

- **Daten-Assembler-Agent** (general-purpose): wandelt die kuratierte Recherche in exakte `SKY_DATA`-Objekte um (Distanz→Meter, bilinguale Felder, cat/emoji/note), in nach Distanz sortierten Blöcken — ich prüfe & füge ein.
- **Bild-Tool** `fetch_space_images.py` (NASA-API) + bestehendes `prep_images.py` (rembg, Tiere).
- **Evaluations-Agent**: QA der finalen `data.js` (Einheiten-/Umrechnungsfehler, Dubletten, Sortierung, Namens-/Sprachfehler) → Nachbesserung.
- Bestehende Verifikation über Playwright/MCP.

## 7. Dateien
- `C:\Users\geeje\in-den-himmel\data.js` — Hauptarbeit: ~150 Objekte, neue cats, `SECTIONS`, Teleport/Years erweitern.
- `C:\Users\geeje\in-den-himmel\script.js` — `buildSections()`, Akt-Name im Höhenmesser, ggf. `LANE_X` erweitern, neue cat-Emojis.
- `C:\Users\geeje\in-den-himmel\styles.css` — Akzente für neue cats, Sektions-Banner, `note-unsicher`-Badge.
- `C:\Users\geeje\in-den-himmel\tools\fetch_space_images.py` — neu.
- `C:\Users\geeje\in-den-himmel\CREDITS.md` — Bild-/Quellennachweise ergänzen.

## 8. Phasen
1. **Daten** — kuratierte Objektliste als `SKY_DATA`-Einträge (Assembler-Agent), in Akte gegliedert; neue cats/emojis; ⚠-Notes.
2. **Sektionen & Navigation** — `SECTIONS` + `buildSections()`, Höhenmesser-Akt-Name, Teleport-Akte, CSS-Banner/Akzente.
3. **Bilder** — `fetch_space_images.py` schreiben & für den kosmischen Satz ausführen; `CREDITS.md`; Browser-Stichprobe.
4. **QA & Polish** — Evaluations-Agent über `data.js`; Performance-Check (viele Bilder); optional Galaxien-Hintergrund; mobile/reduced-motion.

## 9. Verifikation (End-to-End)
- `index.html` per Doppelklick öffnen (läuft ohne Server); Browser-Check via Playwright auf lokalem Server.
- Objektanzahl ~220; Höhenmesser monoton; Stützpunkte: Pluto, Heliopause, Proxima (~4,2 Lj), Sirius (8,6 Lj), Orionnebel (1.344 Lj), Sgr A* (27.000 Lj), Andromeda (2,5 Mio Lj), Virgo (54 Mio Lj), TON 618, JADES (z14), Rand (46,5 Mrd Lj) ganz oben.
- Sektions-Banner erscheinen an den Akt-Grenzen; Teleport springt korrekt; Sprache DE↔EN tauscht alle Labels.
- Echte NASA-Bilder laden lazy auf dunklem Hintergrund; Emoji-Fallback bei fehlenden Bildern; 0 Spalten-Überlappungen; keine JS-Fehler in der Konsole.
