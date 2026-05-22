# Code-Qualität & Sicherheit — „In den Himmel"

Gutachten vom 2026-05-22. Geprüft: `index.html`, `script.js`, `styles.css`, `data.js`,
`data_details.js`, `dd_*.js`, `tools/fetch_space_images.py`, `tools/prep_images.py`.
Betriebskontext: rein lokale Daten, Auslieferung unter `file://`, kein Server, kein User-Input.

## Befund-Übersicht

| Schweregrad | Anzahl |
|-------------|--------|
| Hoch        | 1 |
| Mittel      | 4 |
| Niedrig     | 6 |
| Info / OK   | 5 |

Gesamt: 11 Befunde (1 hoch, 4 mittel, 6 niedrig) plus 5 positive/neutrale Feststellungen.

---

## HOCH

### H1 — `fetch_space_images.py` nimmt blind das erste lose Suchergebnis (Wurzel des Bildproblems)

**Datei:** `tools/fetch_space_images.py`, Funktionen `_query` (Z. 52–60) und `first_image_url` (Z. 63–84).

Das Tool fragt die NASA-API mit einem freien Stichwort an und übernimmt **kompromisslos
`links[0]["href"]`** — also das erste Element des ersten Treffers, ohne jede Prüfung von
Titel, Center oder Relevanz:

```python
for it in data.get("collection", {}).get("items", []):
    links = it.get("links", [])
    if links and links[0].get("href"):
        meta = (it.get("data") or [{}])[0]
        return links[0]["href"], meta.get("title", ""), meta.get("center", "NASA")
```

`first_image_url` macht das Problem schlimmer: Schlägt der Originalbegriff fehl, werden
**immer kürzere/unschärfere Fallback-Queries** probiert (Sonderzeichen weg → erste zwei
Wörter → nur erstes großgeschriebenes Wort). Je weniger ein Objekt in der NASA-Bibliothek
vertreten ist, desto generischer wird die Suche — und desto wahrscheinlicher landet ein
völlig fremdes Bild im Treffer. Belegte Folgen (laut `STATUS.md`): Kinderfoto unter
„TrES-2b", Mars-Krater statt Barnards Stern. Das ist kein Einzelfehler, sondern die
**systematische Konsequenz** von „erstes Ergebnis ohne Verifikation + immer losere Suche".

**Zweiter Fehler in derselben Datei:** `CREDITS.write_text(...)` (Z. 135) **überschreibt
`CREDITS_SPACE.md` bei jedem Lauf komplett**. Mit `--limit N` oder bei Skips (vorhandene
Bilder) enthält `lines` nur die in diesem Lauf neu geholten Einträge → alle früheren
Nachweise gehen verloren. Da die Datei rechtlicher Attributionsnachweis ist, ist das auch
ein Lizenz-/Compliance-Risiko.

**Empfehlung — sichere Bildbeschaffung künftig:**

1. **Keine automatische Übernahme mehr.** Das Skript darf nur noch **Kandidaten vorschlagen**,
   nicht endgültig speichern. Pro Objekt die Top-5 Treffer mit Titel, Center, NASA-ID, Datum
   und Vorschau-URL in eine Review-Datei (`images/_candidates.json`) schreiben.
2. **Verifikationsschritt (manuelle Bestätigung).** Eine kleine HTML-Galerie oder
   `images/raw/`-Workflow, in dem ein Mensch das richtige Bild bestätigt, bevor es nach
   `images/<id>.jpg` übernommen wird. Das ist ohnehin der von `prep_images.py` vorgesehene
   Pfad (manueller Download nach `images/raw/<id>.*`) — diesen als verbindlichen Standardweg
   etablieren und `fetch_space_images.py` zum reinen Recherche-Helfer degradieren.
3. **Strengere Treffer-Prüfung,** falls Auto-Fetch erhalten bleibt:
   - Titel-Matching: alle/mehrere Stichwort-Token müssen im `title` des Treffers vorkommen
     (case-insensitive), sonst verwerfen.
   - **Keine immer-loseren Fallbacks.** Lieber „kein Treffer" melden als ein fremdes Bild
     liefern. Die `short`/Proper-Noun-Fallbacks (Z. 70–76) ersatzlos streichen.
   - `q`-Parameter durch gezieltere Felder ersetzen: NASA-API erlaubt `keywords=`,
     `title=`, `nasa_id=`. Wo bekannt, **per `nasa_id` exakt referenzieren** statt Volltext.
   - Pro Objekt eine kuratierte, feste `nasa_id` oder direkte `source_url` im Datensatz
     hinterlegen (neues Feld, z. B. `img_src:"..."`), statt Suchbegriff.
4. **CREDITS additiv pflegen:** Bestehende `CREDITS_SPACE.md` einlesen, Einträge per `id`
   in ein Dict mergen, dann vollständig zurückschreiben — so überlebt jeder Eintrag auch
   `--limit`-Läufe. Niemals destruktiv überschreiben.
5. **Quelle erweitern:** Für Exoplaneten/Sterne ohne echtes Foto (TrES-2b, Barnards Stern,
   55 Cancri e …) existiert oft **kein** authentisches Bild, nur Illustrationen. Diese
   Objekte explizit als „künstlerische Darstellung" kennzeichnen oder bewusst beim
   Emoji-Fallback belassen, statt ein falsches „Foto" zu erzwingen.

---

## MITTEL

### M1 — `innerHTML` mit ungeescapten Daten (XSS-Muster, hier lokal entschärft)

**Dateien/Stellen:**
- `script.js` `buildScene` (Z. 152–160): `it.img`, `it.name[lang]`, `it.emoji`,
  `SPACE_YEARS[it.id]`, Badge-Text — alle direkt in `el.innerHTML` interpoliert.
- `script.js` `openModal` (Z. 413–414): **`it.source` als `href`** und `it.credit` in
  `.modal-meta` via `innerHTML`.
- `buildAtmosphere`/`buildMilestones`/`buildSections` (Z. 174, 194, 208): Namen via
  `innerHTML`.

**Bewertung:** Realistisch **kein akut ausnutzbarer XSS**, weil alle Werte aus den eigenen,
versionierten `data.js`/`dd_*.js` stammen und kein Nutzer-Input verarbeitet wird. Geprüft:
kein Datensatz enthält `<`, `>` oder Anführungszeichen in `source`/`credit`/`name`. Eine
**`href`-Injection** über `it.source` ist damit derzeit nicht möglich.

**Aber das Muster ist fragil:**
- Würde je ein `source` mit `"` versehen (z. B. `https://x/?a="b`), bräche das
  `href="${it.source}"`-Attribut auf und erlaubte Attribut-Injection. Ein `javascript:`-URL
  in `source` würde als klickbarer Link gerendert (kein `http(s)`-Whitelist).
- Bereits heute enthält `belka_strelka` den Namen **„Belka & Strelka"** — das `&` wird über
  `innerHTML` interpretiert (hier harmlos, weil kein gültiges Entity folgt, zeigt aber, dass
  Sonderzeichen ungefiltert durchlaufen).

**Fix (defensive Härtung, billig):**
- `.modal-meta` ohne `innerHTML` aufbauen: Link als `document.createElement("a")` erzeugen,
  `a.href = it.source; a.textContent = srcLabel;` — DOM-API escaped automatisch.
- Optional eine Protokoll-Whitelist: nur `http:`/`https:` als `href` zulassen, sonst Link
  weglassen.
- In `buildScene` die Caption analog über DOM-Knoten/`textContent` statt Template-String
  bauen (Name, Jahr, Badge, Alt). `it.img` und `it.emoji` als `img.src` bzw.
  `el.textContent` setzen.

### M2 — `fetch_space_images.py` überschreibt CREDITS_SPACE.md (Datenverlust)

Siehe H1, Punkt „Zweiter Fehler". Eigener Mittel-Befund, weil er auch ohne falsche Bilder
greift: Jeder `--limit`- oder Skip-Lauf verkürzt die Attributionsdatei. Fix: additives
Merge per `id` (siehe H1, Empfehlung 4).

### M3 — Doppelte Scroll-Listener / Popup-Lifecycle

**Datei:** `script.js`.
- `setupInteraction` registriert `window.addEventListener("scroll", hidePopup, {passive:true})`
  (Z. 517).
- `init` registriert zusätzlich `window.addEventListener("scroll", requestFrame, {passive})`
  (Z. 588) und einen einmaligen `once`-Scroll-Handler für den Hinweis (Z. 604).

Das sind drei separate Scroll-Listener. Funktional korrekt, aber für eine Seite, die explizit
in der „Optimierungs"-Phase ist: Sie könnten in **einen** Scroll-Handler zusammengefasst
werden (ein Listener, der `requestFrame()` und bei Bedarf `hidePopup()` aufruft), das spart
Event-Dispatch-Overhead beim Scrollen über die 146.000 px hohe Szene.

### M4 — Objekte oberhalb von `LOG_MAX_KM` (5e23 km) würden negativ positioniert

**Datei:** `script.js` `altToGroundPx` (Z. 31–38). Für `alt_m`, dessen km-Wert `LOG_MAX_KM`
übersteigt, liefert die Logarithmus-Formel `startPx > TOTAL_HEIGHT`, d. h. `altToY` wird
negativ → das Item läge oberhalb der Szene und wäre nicht erreichbar.

**Bewertung:** Aktuell **kein Datensatz betroffen** (größtes Objekt CMB ≈ 4,3e23 km < 5e23).
Die Konstante hat aber nur ~14 % Puffer. **Fix/Härtung:** In `altToGroundPx` das Ergebnis auf
`TOTAL_HEIGHT` clampen (`Math.min(...)`), damit ein künftig zu hoch eingetragenes Objekt
sichtbar am oberen Rand landet statt zu verschwinden. Analog ist die Konstante
`MILESTONES`-„Rand des Universums" (`4.399e26 m` = 4,399e23 km) bewusst knapp unter dem
Limit gewählt — beim Erhöhen von Daten unbedingt `LOG_MAX_KM` mitziehen.

---

## NIEDRIG

### N1 — 72 referenzierte Bilddateien fehlen auf der Platte

Geprüft (Node, Abgleich `data.js` ↔ `images/`): **72 von 155** `img`-Pfade existieren nicht:
- **71 `.png`** (alle terrestrischen/Tier-/Technik-/Sonnensystem-Objekte:
  `spatz`, `schwalbe`, …, `andromeda`, `universum`).
- **1 `.jpg`**: `tres2b → images/tres2b.jpg`.

83 der 84 `.jpg`-Weltraumbilder sind vorhanden. Der `onerror`-Handler in `buildScene`
(`this.style.display='none'; this.nextElementSibling.style.display='flex'`) fängt das sauber
ab → **Emoji-Platzhalter** erscheint, kein sichtbarer Fehler. **Empfehlung:** Verhalten in
README/STATUS dokumentieren (ist teils schon in STATUS vermerkt) und die `.png`-Pipeline
(`prep_images.py`) abarbeiten; `tres2b.jpg` gehört zu den von H1 betroffenen Fehl-Bildern und
sollte ohnehin neu/kuratiert beschafft werden.

### N2 — Tote CSS-Klassen `.side-left` / `.side-right`

**Datei:** `styles.css` Z. 158–159 und 487–488. Die Klassen werden im JS **nirgends** gesetzt
— `buildScene` positioniert über `LANE_X`-Prozentwerte als Inline-`left`-Style. Dead Code,
gefahrlos entfernbar (4 Regeln).

### N3 — `it.img`-`onerror` als Inline-Attribut

**Datei:** `script.js` Z. 154. `onerror="this.style.display='none';…"` ist Inline-Event-HTML.
Funktioniert unter `file://`, würde aber unter einer strengen `Content-Security-Policy`
(`script-src` ohne `unsafe-inline`) blockiert. Bei der ohnehin empfohlenen DOM-Umstellung
(M1) den Handler als `img.onerror = () => {…}` setzen.

### N4 — Touch-Pfad: kein Hover-Popup, Modal-`mouseover` entfällt — Datenfeld `fact` dort ungenutzt

**Datei:** `script.js` `setupInteraction` (Z. 504). Bei `!supportsHover` (Touch) wird früh
zurückgekehrt; Tap öffnet direkt das Modal. Korrekt, aber: Der einzige Ort, der `it.fact`
direkt rendert, ist `showPopup` (Hover). Auf Touch-Geräten sieht man `fact` nur noch indirekt,
falls ein Objekt **keinen** `SKY_DETAILS`-Eintrag hat (dann nutzt `renderModalBody` `fact` als
Fallback). Da inzwischen **alle 155 Objekte einen `SKY_DETAILS`-Eintrag** haben (geprüft),
wird der `fact`-Fallback in `renderModalBody` (Z. 365–367) **nie** ausgelöst → toter Pfad.
Kein Bug, nur Hinweis: Fallback ist reine Vorsichtsmaßnahme (gut so).

### N5 — `formatAlt` mit `lg`-Default vs. `lang`-Closure

**Datei:** `script.js` Z. 59. `formatAlt(m, lg = lang)` liest beim **Definitionsaufruf** den
aktuellen `lang`-Wert über Default-Parameter — funktioniert, weil `lang` zur Aufrufzeit
ausgewertet wird. Korrekt, aber subtil; bei Sprachumschaltung wird ohnehin alles neu gebaut.
Kein Fix nötig, nur Verständnis-Hinweis.

### N6 — `console`-Fehlerquellen geprüft: keine gefunden

Statische Prüfung ergab keine offensichtlichen Laufzeit-Fehlerquellen: keine `null`-Zugriffe
auf fehlende DOM-IDs (alle in `init` referenzierten IDs existieren in `index.html`),
`getContext("2d")` auf vorhandenem `<canvas id="bg">`, `matchMedia` mit Fallback-Verhalten.

---

## INFO / Positiv bestätigt

### I1 — Daten-Integrität sehr gut
- **Keine doppelten `id`s** (155 eindeutige).
- **Alle 155 Objekte** haben vollständige `name.de/en` **und** `fact.de/en`.
- **Alle 155** haben einen `SKY_DETAILS`-Eintrag; alle `desc`/`groups`/`rows` vollständig
  zweisprachig (kein fehlendes `de`/`en`).
- Keine `SKY_DETAILS`-Schlüssel ohne passendes `SKY_DATA`-Objekt.
- Keine `SPACE_YEARS`-Schlüssel ohne passendes Objekt.

### I2 — i18n-Schlüssel konsistent
Alle 7 `data-i18n`-Keys im HTML (`ground, jump, scrollHint, title, subtitle, start, inspired`)
sind in `I18N` definiert; keine überzähligen/fehlenden Keys. `applyStaticI18n` prüft
defensiv `if (I18N[key])`.

### I3 — `note`-Lookups robust
Alle 7 in den Daten vorkommenden `note`-Werte
(`typisch, extremwert, bodenhoehe, extremereignis, laborwert, referenz, unsicher`) sind in
`NOTE_LABELS` definiert. `typisch`/`referenz` sind bewusst `null` (kein Badge). Lookup eines
unbekannten `note` ergäbe `undefined` → `note ? … : ""` fängt das ab. Kein Crash möglich.

### I4 — Skalen-/Farbfunktionen NaN-sicher
Geprüft an den Rändern: `altToGroundPx(0)=0`, negatives Argument → `0`; `groundPxToAlt(0)=0`,
negatives `gpx` → `0`; Übergang `100000 m ↔ GROUND_PX` exakt konsistent (Hin- und
Rückrechnung deckungsgleich). `colorAt` durch `clamp01` gegen Über-/Unterschreitung
geschützt; Werte unter dem ersten/über dem letzten Stützpunkt liefern saubere Endfarben.
Einzige Restgrenze siehe M4.

### I5 — Barrierefreiheit grundsätzlich solide
Fokusfalle im Modal (`trapFocus`), `aria-modal`, `aria-labelledby`, Fokus-Rückgabe beim
Schließen, `role="button"` + `tabIndex` + `aria-label` an Items, Tastatur-Aktivierung
(Enter/Space), `prefers-reduced-motion` respektiert bei Teleport-Scroll. Gut umgesetzt.

---

## Priorisierte Maßnahmenliste

1. **(H1)** Bildbeschaffung umstellen: Auto-Übernahme stoppen, Verifikationsschritt + Titel-/
   `nasa_id`-Prüfung einführen, keine losen Fallback-Queries, kuratierte Quelle je Objekt.
2. **(M2/H1)** `CREDITS_SPACE.md` additiv mergen statt überschreiben.
3. **(M1/N3)** `.modal-meta`-Link und Item-Captions über DOM-API statt `innerHTML` bauen
   (`href`-/Attribut-Injection-Muster schließen, CSP-fest).
4. **(M4)** `altToGroundPx`-Ergebnis auf `TOTAL_HEIGHT` clampen.
5. **(N1)** Fehlende `.png`-Bilder über `prep_images.py` abarbeiten; Emoji-Fallback in
   STATUS dokumentieren.
6. **(M3/N2)** Scroll-Listener konsolidieren; tote `.side-left/.side-right`-Regeln entfernen.
