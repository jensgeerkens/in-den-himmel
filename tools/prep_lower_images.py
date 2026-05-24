#!/usr/bin/env python3
"""
prep_lower_images.py — verarbeitet die in images/raw/ liegenden Bilder
der unteren Ebene (untere Atmosphäre, Tiere & Aircraft) in zwei Klassen:

  * FAUNA (Tiere/Insekten/Fledermaus/Spinne): rembg-Freistellung -> images/{id}.png
  * TECH  (Aircraft/Bauwerke/Berge): nur skalieren, Hintergrund bleibt -> images/{id}.jpg

Output ist auf max. 640 px Kantenlänge skaliert. Anschließend gibt das Skript
JS-Snippets für data.js aus (id -> img-Pfad mit korrekter Endung).
"""
from __future__ import annotations
import sys, json
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / "images" / "raw"
OUT = ROOT / "images"
MAX_EDGE = 640

FAUNA = {
    "spatz","schwalbe","marienkaefer","mauersegler","distelfalter",
    "fledermaus","monarch","spinne","steinadler","bartgeier",
    "streifengans","singschwan","alpendohle","hummel","kranich","sperbergeier",
}
TECH = {
    "drohne","jet","helikopter","concorde","u2","ballon","sr71",
    "wetterballon","mig25","stratos","burj","montblanc","everest",
}

def main():
    if not RAW.exists():
        sys.exit(f"{RAW} fehlt")

    try:
        from rembg import remove
    except ImportError:
        sys.exit("Bitte zuerst: pip install rembg onnxruntime pillow")

    results = {}  # id -> filename
    for src in sorted(RAW.iterdir()):
        cid = src.stem
        if cid.startswith("_"):
            continue
        if cid in FAUNA:
            print(f"  FAUNA  {cid}  (rembg + scale)")
            img = Image.open(src).convert("RGBA")
            img = remove(img)
            img.thumbnail((MAX_EDGE, MAX_EDGE), Image.LANCZOS)
            dst = OUT / f"{cid}.png"
            img.save(dst, "PNG", optimize=True)
            results[cid] = dst.name
        elif cid in TECH:
            print(f"  TECH   {cid}  (scale only)")
            img = Image.open(src).convert("RGB")
            img.thumbnail((MAX_EDGE, MAX_EDGE), Image.LANCZOS)
            dst = OUT / f"{cid}.jpg"
            img.save(dst, "JPEG", quality=85, optimize=True, progressive=True)
            results[cid] = dst.name
        else:
            print(f"  SKIP   {cid}  (nicht in FAUNA/TECH-Liste)")

    print(f"\nVerarbeitet: {len(results)} Bilder.")
    print("\nJS-Snippet (für data.js, id -> img-Pfad):")
    print(json.dumps({k: f"images/{v}" for k, v in sorted(results.items())}, indent=2, ensure_ascii=False))

if __name__ == "__main__":
    main()
