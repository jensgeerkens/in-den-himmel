# Evaluation — Gesamtsynthese "In den Himmel"

Orchestrierte Begutachtung durch 7 Themen-Agenten (Stand 2026-05-22). Einzelberichte:
`bild-audit-1.md`, `bild-audit-2.md`, `faktencheck.md`, `a11y.md`, `performance.md`,
`code-quality.md`, `ux-text.md`.

> **Anlass:** Ein automatisch geholtes Bild zeigte Kinder bei einer Veranstaltung unter
> dem Label „TrES-2b – dunkelster Planet" — eine inakzeptable, rassistische Bildwirkung.
> Auslöser war das Skript `fetch_space_images.py`, das blind den ersten Suchtreffer übernahm.

## Schweregrad-Überblick (über alle Berichte)
- **KRITISCH:** Bild-Fehlgriffe (14 Bilder), Caption-Kontrast (1,5:1), Parallax ohne reduced-motion.
- **HOCH:** Bild-Beschaffungs-Skript (Wurzel), us708-Entfernung, uyscuti-Radius, Tastatur-Navigation,
  Stern-Rendering im rAF-Loop, fehlende Bilder/404, Touch-Onboarding, EN-Anführungszeichen.
- **MITTEL/NIEDRIG:** Superlativ-Hedging, XSS-Muster, Höhenmesser-A11y, Modal-Close auf Mobile, u.a.

## Umgesetzt (in diesem Durchgang)

### Bilder — KRITISCH (Sicherheit/Reputation)
- **14 falsche/unpassende Bilder entfernt** (→ Emoji-Fallback): `tres2b` (Kinder/Veranstaltung),
  `psyche` (Pressekonferenz), `halley` (Astronaut), `sloanwall` + `jadesz14` (Personen im Labor),
  `proximab`, `barnard` (Mars-Krater), `sirius` (Eta-Carinae), `hyades`, `antares`, `rigel`,
  `greatattractor` (Great Lakes), `gw150914` (Erdaufnahme), `herculescorona` (Sonnenkorona).
- **Skript gehärtet** (`tools/fetch_space_images.py`): Relevanz- + Negativwort-Filter (lehnt
  „Documentary/Crater/Lakes/…" und treffer ohne distinktives Token ab), gefährliche lose
  Fallback-Suchen entfernt, CREDITS additiv, Warn-Hinweis. Lieber kein Bild als ein falsches.

### Faktencheck
- `us708`: Entfernung 25.000 → **62.000 Lj** (data.js alt + fact, dd_stellar desc/groups).
- `uyscuti`: Radius als **755–1.700 R☉ (Gaia-Revision)** statt veralteter 1.700; Superlativ entschärft.
- `andromeda`: „fernstes mit bloßem Auge" → „am leichtesten sichtbar" (Widerspruch zu M33 aufgelöst).
- `herculescorona`: „die größte" → „eine der größten — umstrittenen" Strukturen.
- `earendel`: „fernster Einzelstern" → „fernster Kandidat (evtl. Sternhaufen)".
- `holm15a`: „das massereichste" → „eines der massereichsten"; Sgr A*-Masse vereinheitlicht (~4,3 Mio.).
- **EN-Anführungszeichen** in 23 Objekten (dd_stellar.js): deutsche „…" → englische "…" (36 Stellen).

### Barrierefreiheit
- **Caption-Plakette** (`rgba(8,14,30,.62)`) → lesbarer Kontrast unabhängig vom Himmel (war 1,5:1).
- **Parallax** respektiert `prefers-reduced-motion`.
- **Teleport** als echte `<button>` (tastaturbedienbar) + Fokus-Stil.
- **Höhenmesser** nicht mehr `aria-hidden` (nur der Balken), mit Label → für Screenreader wahrnehmbar.
- **Sprachschalter** mit `aria-pressed`; Fokus-Stile (`:focus-visible`) für Controls.

### Performance
- **Stern-Alpha vorberechnet** (statt pro Frame `groundPxToAlt`+`starAlpha` über 560 Sterne) → rAF-Loop entlastet.

### Code/UX
- **modal-meta** baut den Quellen-Link sicher per DOM-API (kein `innerHTML` mit interpolierter URL).
- **Touch-Onboarding**: Hinweis „Objekt antippen/anklicken für Details" im Start-Overlay.
- **Modal-Close** sticky (bleibt bei langen Inhalten sichtbar), runder Button mit Fokus-Stil.

## Offen / empfohlen (nächster Durchgang)
- **Korrekte Ersatzbilder** für die 14 entfernten + thematisch unsichere (`sgrA`/`m87` echtes
  EHT-Ringbild, `milkyway`-Panorama, `sedna`/`oortcloud`, `orionnebula` ikonisch …) — über den
  geprüften Workflow (`images/raw/` + `prep_images.py`) oder kuratierte Wikimedia/ESO-URLs,
  **jedes vor Veröffentlichung visuell kontrollieren**.
- **A11y:** 155 Items als Tab-Stops (Tab-Reihenfolge entgegen Leserichtung) — Skip-Konzept;
  Höhenmesser optional als gedrosselte `aria-live`-Region.
- **Performance (HOCH/MITTEL):** Gradient cachen, `setLang` nur Texte patchen statt Szene neu bauen,
  fehlende `<img>` gar nicht rendern (Daten-Flag) gegen 404-Churn.
- **UX:** Empty-Stretch-Zwischenmarken, Teleport „aktiver Akt" + Outside-Click-Schließen, Scroll-Hint
  erst nach echter Aufwärtsbewegung ausblenden.
- Inline-`onerror` (CSP), tote CSS-Klassen `.side-left/.side-right`.

## Positiv bestätigt
- Datenintegrität exzellent: keine doppelten ids, alle 155 mit `name.de/en` + `fact.de/en` +
  zweisprachigem `SKY_DETAILS`; alle `data-i18n`/`note`-Keys konsistent; Skalenfunktionen NaN-sicher.
- DE/EN-Absatz- und Zahlenparität mustergültig; file://-Robustheit einwandfrei.
- LCP 254 ms, CLS 0,00; Event-Delegation/rAF-Throttle/passive-Listener sauber.
