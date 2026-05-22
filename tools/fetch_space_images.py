#!/usr/bin/env python3
"""
fetch_space_images.py — Holt gemeinfreie Weltraum-Bilder aus der
NASA Image and Video Library (https://images-api.nasa.gov) für jedes
kosmische Objekt in data.js (Felder `id` + `nasa`-Suchbegriff).

!!! WARNUNG / LESSON LEARNED !!!
Eine frühere Version übernahm BLIND den ersten Suchtreffer und lud dabei völlig
falsche Bilder herunter (u.a. ein Foto von Kindern bei einer Veranstaltung unter
dem Label „TrES-2b – dunkelster Planet", ein Mars-Krater statt Barnards Stern,
ein Erd-Foto „Great Lakes" statt „Great Attractor"). Solche Treffer dürfen NIEMALS
automatisch online gehen.
Diese Version prüft jeden Treffer per Relevanz- und Negativwort-Filter und LÄSST
LIEBER AUS (Emoji-Fallback) als ein unsicheres Bild zu übernehmen. Trotzdem gilt:
JEDES geholte Bild VOR Veröffentlichung visuell kontrollieren.

- Kosmische Bilder werden NICHT freigestellt (auf dunklem Hintergrund ideal).
- Ergebnis: images/<id>.jpg  (vorhandene Dateien werden übersprungen).
- Attribution wird ADDITIV in CREDITS_SPACE.md ergänzt (nichts überschrieben).

Benötigt:  pip install pillow   (urllib/json sind Standardbibliothek)
Aufruf:    python tools/fetch_space_images.py [--force] [--limit N]
"""
import argparse
import json
import re
import sys
import time
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "data.js"
OUT = ROOT / "images"
CREDITS = ROOT / "CREDITS_SPACE.md"
API = "https://images-api.nasa.gov/search"
UA = {"User-Agent": "in-den-himmel/1.0 (educational scroll project)"}
MAX_PX = 480


def parse_targets():
    """Liest data.js und liefert (id, suchbegriff)-Paare für Objekte mit `nasa`."""
    text = DATA.read_text(encoding="utf-8")
    chunks = text.split("{ id:")
    targets = []
    for c in chunks[1:]:
        mid = re.search(r'^"([^"]+)"', c)
        mnasa = re.search(r'nasa:"([^"]+)"', c)
        # Split auf "{ id:" isoliert je ein Objekt pro Chunk -> nasa gehört dazu.
        if mid and mnasa:
            targets.append((mid.group(1), mnasa.group(1)))
    return targets


def fetch_json(url):
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.load(r)


# Generische Kategorie-Wörter: taugen NICHT als Relevanzbeleg (führen zu Fehlmatches
# wie "Great Lakes" für "Great Attractor large scale structure").
STOPWORDS = {
    "the", "a", "of", "and", "in", "on", "star", "planet", "galaxy", "black", "hole",
    "large", "scale", "structure", "red", "blue", "supergiant", "hypergiant", "dwarf",
    "nebula", "cluster", "system", "object", "great", "wall", "space", "deep", "field",
    "cosmic", "exoplanet", "pulsar", "quasar", "supernova", "remnant", "comet", "asteroid",
}
# Negativwörter: tauchen sie im Treffer-Titel auf, ist es mit hoher Wahrscheinlichkeit
# ein irdisches/personenbezogenes/dokumentarisches Motiv -> ablehnen.
DENYLIST = (
    "documentary", "screening", "press", "conference", "interview", "ceremony", "award",
    "students", "children", "kids", "school", "visit", "tour", "employee", "staff",
    "administrator", "portrait", "headshot", "crater", "lakes", "lake", "river", "city",
    "building", "center opening", "groundbreaking", "town hall", "panel", "meeting",
    "earth observation", "wildfire", "hurricane", "flood",
)


def _term_tokens(term):
    """Aussagekräftige (nicht-generische) Tokens eines Suchbegriffs, kleingeschrieben."""
    clean = re.sub(r"[^A-Za-z0-9 ]", " ", term).lower()
    return [w for w in clean.split() if len(w) >= 4 and w not in STOPWORDS]


def is_relevant(term, title):
    """Treffer nur akzeptieren, wenn der Titel ein aussagekräftiges Token des
    Suchbegriffs enthält UND kein Negativwort. Verhindert Fremdbild-Fehlgriffe."""
    if not title:
        return False
    t = title.lower()
    if any(bad in t for bad in DENYLIST):
        return False
    tokens = _term_tokens(term)
    if not tokens:                       # kein distinktives Token -> lieber ablehnen
        return False
    return any(tok in t for tok in tokens)


def _query(term):
    url = f"{API}?{urllib.parse.urlencode({'q': term, 'media_type': 'image'})}"
    data = fetch_json(url)
    # Erste RELEVANTE Treffer zurückgeben (nicht blind den ersten).
    for it in data.get("collection", {}).get("items", []):
        links = it.get("links", [])
        meta = (it.get("data") or [{}])[0]
        title = meta.get("title", "")
        if links and links[0].get("href") and is_relevant(term, title):
            return links[0]["href"], title, meta.get("center", "NASA")
    return None, None, None


def first_image_url(term):
    # Nur konservative Varianten: Originalbegriff und ohne Sonderzeichen.
    # Die früheren losen Fallbacks (erste 2 Wörter / erstes Großwort) sind ENTFERNT,
    # weil sie generische Fremdbilder lieferten. Lieber kein Bild als ein falsches.
    clean = re.sub(r"[^A-Za-z0-9 ]", " ", term)
    clean = re.sub(r"\s+", " ", clean).strip()
    candidates = [term]
    if clean != term:
        candidates.append(clean)
    for q in candidates:
        try:
            res = _query(q)
            if res[0]:
                return res
        except Exception:
            pass
    return None, None, None


def save_image(url, dst):
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=60) as r:
        raw = r.read()
    try:
        import io
        from PIL import Image
        img = Image.open(io.BytesIO(raw)).convert("RGB")
        img.thumbnail((MAX_PX, MAX_PX))
        img.save(dst, "JPEG", quality=82, optimize=True)
    except ImportError:
        dst.write_bytes(raw)  # ohne Pillow: Rohbild speichern


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--force", action="store_true", help="vorhandene Bilder überschreiben")
    ap.add_argument("--limit", type=int, default=0, help="nur N Bilder holen (Test)")
    args = ap.parse_args()

    OUT.mkdir(parents=True, exist_ok=True)
    targets = parse_targets()
    if args.limit:
        targets = targets[: args.limit]
    print(f"{len(targets)} Objekte mit NASA-Suchbegriff gefunden.")

    existing = CREDITS.read_text(encoding="utf-8") if CREDITS.exists() else ""
    new_lines = []
    ok = fail = skip = 0
    for i, (oid, term) in enumerate(targets, 1):
        dst = OUT / f"{oid}.jpg"
        if dst.exists() and not args.force:
            skip += 1
            continue
        try:
            url, title, center = first_image_url(term)
            if not url:
                print(f"[{i}/{len(targets)}] {oid}: kein RELEVANTER Treffer für '{term}' (übersprungen -> Emoji)")
                fail += 1
                continue
            save_image(url, dst)
            if f"**{oid}**" not in existing:        # additiv: keine Duplikate
                new_lines.append(f"- **{oid}** — {title or term} ({center}) — Suche: \"{term}\"")
            print(f"[{i}/{len(targets)}] {oid}: OK — {title}")
            print(f"    !! Bitte VISUELL prüfen, ob das Bild wirklich '{oid}' zeigt.")
            ok += 1
            time.sleep(0.4)
        except Exception as e:
            print(f"[{i}/{len(targets)}] {oid}: FEHLER {e}")
            fail += 1
    if new_lines:
        header = "" if existing else "# Weltraum-Bildnachweise (NASA Image and Video Library)\n\nGemeinfrei, sofern nicht anders vermerkt.\n"
        block = header + ("\n" if existing and not existing.endswith("\n") else "")
        block += f"\n## Lauf {time.strftime('%Y-%m-%d')} (auto, VOR Veröffentlichung visuell prüfen)\n" + "\n".join(new_lines) + "\n"
        with CREDITS.open("a", encoding="utf-8") as f:
            f.write(block)
    print(f"\nFertig. OK={ok}  übersprungen={skip}  abgelehnt/fehlgeschlagen={fail}")
    print("ERINNERUNG: jedes neue Bild visuell kontrollieren, bevor irgendetwas online geht.")
    print(f"Nachweise (ergänzt): {CREDITS}")


if __name__ == "__main__":
    main()
