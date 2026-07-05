#!/usr/bin/env python3
"""Bild-Pipeline fuer 'In den Himmel'.
- Konvertiert alle Anzeige-Bilder in images/ auf max. 320 px Breite als WebP.
- Behaelt Alpha (freigestellte Tierfotos) bei.
- Schreibt images/manifest.js mit den echten Ziel-Dimensionen (width/height-Attribute, CLS-sicher).
Idempotent: laeuft nur ueber .jpg/.png direkt in images/ (nicht raw/, nicht clouds/).
"""
import os, glob, json
from PIL import Image

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG_DIR = os.path.join(HERE, "images")
MAX_W = 320

dims = {}
count = 0
saved_before = 0
saved_after = 0

for path in sorted(glob.glob(os.path.join(IMG_DIR, "*.jpg")) + glob.glob(os.path.join(IMG_DIR, "*.png"))):
    fn = os.path.basename(path)
    base, ext = os.path.splitext(fn)
    rel_src = "images/" + fn
    out = os.path.join(IMG_DIR, base + ".webp")
    im = Image.open(path)
    w, h = im.size
    if w > MAX_W:
        nh = round(h * MAX_W / w)
        im = im.resize((MAX_W, nh), Image.LANCZOS)
    tw, th = im.size
    has_alpha = im.mode in ("RGBA", "LA") or (im.mode == "P" and "transparency" in im.info)
    if has_alpha:
        im = im.convert("RGBA")
        im.save(out, "WEBP", quality=82, method=6)
    else:
        im = im.convert("RGB")
        im.save(out, "WEBP", quality=80, method=6)
    dims[rel_src] = [tw, th]
    saved_before += os.path.getsize(path)
    saved_after += os.path.getsize(out)
    count += 1

manifest = os.path.join(IMG_DIR, "manifest.js")
with open(manifest, "w", encoding="utf-8") as f:
    f.write("/* Auto-generiert von tools/build_images.py — echte WebP-Dimensionen fuer width/height (CLS-sicher). */\n")
    f.write("const IMG_DIMS = " + json.dumps(dims, ensure_ascii=False, separators=(",", ":")) + ";\n")

print(f"{count} Bilder -> WebP. {saved_before/1e6:.1f} MB -> {saved_after/1e6:.1f} MB "
      f"({100*(1-saved_after/saved_before):.0f}% kleiner). manifest.js geschrieben.")
