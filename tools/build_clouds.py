#!/usr/bin/env python3
"""Weiche Wolken-PNGs (2 Formen) fuer die Parallax-Wolkenlagen.
Komposit aus mehreren unscharfen weissen Ellipsen mit weichem Alpha -> keine harte Kante.
"""
import os
from PIL import Image, ImageDraw, ImageFilter

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(HERE, "images", "clouds")
os.makedirs(OUT, exist_ok=True)

def make_cloud(name, w, h, blobs, blur):
    scale = 3
    W, H = w * scale, h * scale
    base = Image.new("L", (W, H), 0)
    d = ImageDraw.Draw(base)
    for (cx, cy, rx, ry, a) in blobs:
        d.ellipse([(cx-rx)*scale, (cy-ry)*scale, (cx+rx)*scale, (cy+ry)*scale], fill=a)
    base = base.filter(ImageFilter.GaussianBlur(blur * scale))
    base = base.resize((w, h), Image.LANCZOS)
    white = Image.new("RGBA", (w, h), (255, 255, 255, 0))
    # sanfter Blau-Weiss-Verlauf oben->unten fuer Volumen
    px = white.load()
    ap = base.load()
    for y in range(h):
        t = y / h
        r = int(255 - 8 * t)
        g = int(255 - 4 * t)
        b = 255
        for x in range(w):
            a = ap[x, y]
            if a:
                px[x, y] = (r, g, b, a)
    white.save(os.path.join(OUT, name))
    print("wrote", name, white.size)

# Breite, flache Schoenwetterwolke
make_cloud("cloud-a.png", 420, 190, [
    (150, 120, 95, 55, 235), (230, 105, 120, 70, 245), (300, 125, 85, 50, 235),
    (200, 95, 70, 45, 250), (110, 130, 55, 38, 220), (340, 130, 55, 35, 210),
], blur=10)

# Kompaktere, hoehere Wolke
make_cloud("cloud-b.png", 340, 200, [
    (150, 130, 80, 55, 240), (200, 100, 90, 62, 248), (110, 120, 55, 42, 225),
    (250, 128, 60, 42, 225), (175, 150, 100, 45, 230),
], blur=9)

# Duenner, hoher Schleier (Cirrus)
make_cloud("cloud-c.png", 460, 120, [
    (150, 60, 120, 26, 150), (250, 66, 130, 22, 140), (330, 60, 90, 20, 130),
    (90, 62, 70, 18, 120),
], blur=8)
