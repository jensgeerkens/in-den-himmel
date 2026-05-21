# In den Himmel 🪶🚀

Eine interaktive Scroll-Seite als Gegenstück zu [neal.fun/deep-sea](https://neal.fun/deep-sea/):
Statt in die Meerestiefe zu tauchen, **scrollst du nach oben in den Himmel und ins Weltall**.
Fliegende Tiere erscheinen auf ihrer **wissenschaftlich dokumentierten maximalen Flughöhe** –
danach Flugzeuge und schließlich die Raumfahrt in zwei Kategorien:
**bemannt** (ISS, Mond, Apollo) und **unbemannt** (Hubble, JWST, Curiosity, Voyager).

## Starten
Einfach **`index.html` doppelklicken** – läuft komplett offline im Browser, kein Server, kein Build.

> Optional zum Entwickeln/Testen mit lokalem Server:
> `python -m http.server 8731` und dann `http://127.0.0.1:8731/` öffnen.

## Bedienung
- **Hochscrollen = aufsteigen.** Start am Boden (0 m), der Höhenmesser oben rechts zählt mit.
- **DE / EN** oben links schaltet die Sprache um.
- **„Springe zu …"** teleportiert zu Boden, höchstem Vogel, Stratosphäre, Weltraum, Mond, Voyager 1.
- **Klick auf ein Objekt** öffnet Details (Fakt, wiss. Name, Quelle).

## Aufbau
| Datei | Inhalt |
|-------|--------|
| `index.html` | Grundgerüst + UI-Elemente |
| `styles.css` | Layout, Höhenmesser, Boden, Atmosphären-Bänder, Modal, Responsive |
| `data.js` | **Inhalts-Datenbasis** (Tiere, Flugzeuge, Raumfahrt) – hier neue Objekte ergänzen |
| `script.js` | Höhen-Skalierung, Szenen-Aufbau, Canvas-Hintergrund, Interaktion |
| `tools/prep_images.py` | Bilder freistellen + skalieren (rembg) |
| `CREDITS.md` | Bild- und Quellennachweise |

## Höhen-Skala
Damit der dichte Tier-Bereich (0–12 km) erlebbar bleibt und trotzdem Voyager (~24 Mrd. km)
erreichbar ist, ist die Skala zweigeteilt:
- **0–100 km:** abschnittsweise linear (unten viele Pixel pro Meter, oben weniger).
- **ab 100 km:** logarithmisch (feste Pixel pro Zehnerpotenz der Distanz).

## Bilder hinzufügen
Die Seite zeigt zunächst **Emoji-Platzhalter**. Für echte freigestellte Fotos:
1. Pro Objekt ein frei lizenziertes Bild laden (Wikimedia Commons für Tiere, NASA für Raumfahrt).
2. Ablegen als `images/raw/<id>.jpg` – `<id>` = das `id`-Feld aus `data.js` (z. B. `sperbergeier.jpg`).
3. `pip install pillow rembg onnxruntime`
4. `python tools/prep_images.py` → erzeugt `images/<id>.png` (Hintergrund entfernt, skaliert).
5. Nachweise in `CREDITS.md` eintragen.

## Neues Objekt ergänzen
In `data.js` einen Eintrag im Array `SKY_DATA` hinzufügen:
```js
{ id:"adler2", cat:"bird", emoji:"🦅", altitude_m:5000,
  name:{de:"…", en:"…"}, sci:"…", note:"typisch",
  fact:{de:"…", en:"…"},
  img:"images/adler2.png", credit:"…", license:"CC BY-SA", source:"https://…" }
```
`cat`: bird · insect · bat · spider · aircraft · manned · unmanned · reference
`note`: typisch · extremwert · extremereignis · laborwert · bodenhoehe · referenz

---
Inspiriert von neal.fun/deep-sea. Höhenangaben recherchiert und faktengeprüft (Mai 2026).
