#!/usr/bin/env python3
"""
fetch_space_images.py — Holt gemeinfreie Weltraum-Bilder aus der
NASA Image and Video Library (https://images-api.nasa.gov) für jedes
kosmische Objekt in data.js (Felder `id` + `nasa`-Suchbegriff).

- Kosmische Bilder werden NICHT freigestellt (auf dunklem Hintergrund ideal).
- Ergebnis: images/<id>.jpg  (vorhandene Dateien werden übersprungen).
- Attribution wird in CREDITS_SPACE.md protokolliert.

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


def first_image_url(term):
    url = f"{API}?{urllib.parse.urlencode({'q': term, 'media_type': 'image'})}"
    data = fetch_json(url)
    items = data.get("collection", {}).get("items", [])
    for it in items:
        links = it.get("links", [])
        if links and links[0].get("href"):
            meta = (it.get("data") or [{}])[0]
            return links[0]["href"], meta.get("title", ""), meta.get("center", "NASA")
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

    lines = ["# Weltraum-Bildnachweise (NASA Image and Video Library)\n",
             "Automatisch via images-api.nasa.gov geholt. Gemeinfrei, sofern nicht anders vermerkt.\n"]
    ok = fail = skip = 0
    for i, (oid, term) in enumerate(targets, 1):
        dst = OUT / f"{oid}.jpg"
        if dst.exists() and not args.force:
            skip += 1
            continue
        try:
            url, title, center = first_image_url(term)
            if not url:
                print(f"[{i}/{len(targets)}] {oid}: kein Treffer für '{term}'")
                fail += 1
                continue
            save_image(url, dst)
            lines.append(f"- **{oid}** — {title or term} ({center}) — Suche: \"{term}\"")
            print(f"[{i}/{len(targets)}] {oid}: OK")
            ok += 1
            time.sleep(0.4)
        except Exception as e:
            print(f"[{i}/{len(targets)}] {oid}: FEHLER {e}")
            fail += 1
    CREDITS.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"\nFertig. OK={ok}  übersprungen={skip}  fehlgeschlagen={fail}")
    print(f"Nachweise: {CREDITS}")


if __name__ == "__main__":
    main()
