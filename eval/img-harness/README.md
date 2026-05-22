# Bild-Beschaffungs-Harness — "In den Himmel"

Multi-Agenten-Pipeline, um die 13 nach dem Audit fehlenden/falschen Bilder durch
**geprüfte** Ersatzbilder zu ersetzen. Adressiert die Vorfall-Ursache (blind geholtes
Bild) durch mehrstufige Prüfung.

## Pipeline
1. **worklist.json** — kanonische Ziel-Liste mit Objektbeschreibung + zulässigem Bildtyp.
2. **Researcher-Agenten** (parallel, je ein Batch): finden 1–2 Kandidaten pro Ziel aus
   vertrauenswürdigen Quellen (Wikimedia Commons / ESO / NASA), liefern **Direkt-Download-URL**
   + Quelle + Lizenz + Autor + Bildbeschreibung (aus der Quell-Caption). → `candidates.json`
3. **Kritiker-Agent**: prüft jeden Kandidaten gegen Regeln (Motiv stimmt, keine Personen/
   Veranstaltung, Lizenz PD/CC, distinktes Motiv). → `verdicts.json` (ACCEPT/REJECT + Grund).
4. **Visuelle Endkontrolle (Mensch/Claude)**: akzeptierte Bilder werden nach `images/raw/`
   geladen, einzeln angesehen, erst dann nach `images/<id>.jpg` promotet + CREDITS aktualisiert.

## Harte Regeln (Critic)
- Motiv MUSS das Objekt zeigen (echtes Foto, offizielle Illustration ODER Daten-Viz — je nach Typ).
- KEINE erkennbaren Personen, Pressekonferenzen, Veranstaltungen, Innenräume, Logos, Karten-UI.
- Lizenz NUR Public Domain (NASA) oder CC BY / CC BY-SA / CC0. Keine "all rights reserved".
- Quelle MUSS eine seriöse Institution sein (NASA/JPL, ESA/Hubble, ESO, Wikimedia Commons mit klarer Herkunft).
- Im Zweifel: REJECT. Lieber Emoji-Fallback als ein falsches Bild.
