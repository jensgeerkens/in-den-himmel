#!/usr/bin/env python3
"""
prep_images.py — Bilder für "In den Himmel" freistellen und optimieren.

Workflow:
  1. Lade pro Objekt ein frei lizenziertes Foto (Wikimedia Commons / NASA) herunter
     und lege es unter  images/raw/<id>.jpg|png|webp  ab.
     Die <id> muss exakt der `id` in data.js entsprechen (z. B. sperbergeier.jpg).
  2. Einmalig:  pip install rembg pillow onnxruntime
  3. Ausführen:  python tools/prep_images.py
     -> erzeugt freigestellte, skalierte PNGs in  images/<id>.png

Optionen:
  --max  Kantenlänge in px (Default 320)
  --no-bg-removal   nur skalieren, Hintergrund behalten
"""
import argparse
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / "images" / "raw"
OUT = ROOT / "images"
EXTS = (".jpg", ".jpeg", ".png", ".webp")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--max", type=int, default=320, help="max. Kantenlänge in px")
    ap.add_argument("--no-bg-removal", action="store_true")
    args = ap.parse_args()

    try:
        from PIL import Image
    except ImportError:
        sys.exit("Bitte zuerst installieren:  pip install pillow rembg onnxruntime")

    remove = None
    if not args.no_bg_removal:
        try:
            from rembg import remove as _remove
            remove = _remove
        except ImportError:
            print("Hinweis: rembg nicht gefunden – es wird nur skaliert (Hintergrund bleibt).")

    raws = [p for p in RAW.glob("*") if p.suffix.lower() in EXTS]
    if not raws:
        sys.exit(f"Keine Bilder in {RAW} gefunden. Lege dort <id>.jpg-Dateien ab.")

    OUT.mkdir(parents=True, exist_ok=True)
    for src in sorted(raws):
        img = Image.open(src).convert("RGBA")
        if remove:
            img = remove(img)                       # Hintergrund entfernen
        img.thumbnail((args.max, args.max))         # proportional verkleinern
        dst = OUT / (src.stem + ".png")
        img.save(dst, "PNG", optimize=True)
        print(f"  {src.name}  ->  {dst.relative_to(ROOT)}  ({img.width}x{img.height})")

    print(f"\nFertig: {len(raws)} Bild(er) verarbeitet -> {OUT}")


if __name__ == "__main__":
    main()
