#!/usr/bin/env python3
"""
fetch_lower_images.py — lädt die in candidates_lower_*.json freigegebenen
Bild-Kandidaten von Wikimedia Commons nach images/raw/<id>.<ext>.

Erwartet:
  eval/img-harness/candidates_lower_fauna.json
  eval/img-harness/candidates_lower_tech.json

Auswahl-Strategie:
  * Nimmt pro id den ERSTEN Kandidaten aus der Liste (Researcher hat schon priorisiert).
  * Konsumiert optional eval/img-harness/picks_lower.json (id -> direct_url),
    falls man manuell anders entscheiden will.

Output:
  images/raw/<id>.<ext>  (ext aus URL abgeleitet)
  + Audit-Zeile pro Datei nach STDOUT.

Verwendung:
  python tools/fetch_lower_images.py [--dry-run]
"""
from __future__ import annotations
import argparse, json, sys, os, urllib.request, urllib.parse
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
HARNESS = ROOT / "eval" / "img-harness"
RAW = ROOT / "images" / "raw"
UA = "in-den-himmel/1.0 (educational/non-commercial; contact: geejens@googlemail.com)"

def load_cands() -> dict[str, list[dict]]:
    """Liefert {id: [candidate, ...]} aus beiden batch-Dateien zusammen."""
    out: dict[str, list[dict]] = {}
    for fname in ("candidates_lower_fauna.json", "candidates_lower_tech.json"):
        p = HARNESS / fname
        if not p.exists():
            print(f"WARN: {p.name} fehlt — überspringe", file=sys.stderr)
            continue
        data = json.loads(p.read_text(encoding="utf-8"))
        for entry in data.get("candidates", []):
            cid = entry["id"]
            cands = entry.get("candidates", [])
            if cands:
                out[cid] = cands
    return out

def load_picks() -> dict[str, str]:
    p = HARNESS / "picks_lower.json"
    if not p.exists():
        return {}
    return json.loads(p.read_text(encoding="utf-8"))

def ext_from_url(url: str) -> str:
    path = urllib.parse.urlparse(url).path
    e = os.path.splitext(path)[1].lower()
    if e in (".jpg", ".jpeg", ".png", ".webp"):
        return e
    return ".jpg"

def fetch(url: str, dst: Path) -> int:
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=30) as r, open(dst, "wb") as f:
        data = r.read()
        f.write(data)
        return len(data)

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--only", help="Komma-Liste von IDs (sonst alle)")
    args = ap.parse_args()

    RAW.mkdir(parents=True, exist_ok=True)
    cands = load_cands()
    picks = load_picks()
    only = set(args.only.split(",")) if args.only else None

    n_ok = n_skip = n_fail = 0
    for cid, lst in sorted(cands.items()):
        if only and cid not in only:
            continue
        url = picks.get(cid) or lst[0]["direct_url"]
        ext = ext_from_url(url)
        dst = RAW / f"{cid}{ext}"
        if dst.exists():
            print(f"  SKIP  {cid}  ({dst.name} schon da)")
            n_skip += 1
            continue
        if args.dry_run:
            print(f"  PLAN  {cid}  <- {url}")
            n_ok += 1
            continue
        try:
            size = fetch(url, dst)
            print(f"  OK    {cid}  -> {dst.name}  ({size//1024} KB)")
            n_ok += 1
        except Exception as e:
            print(f"  FAIL  {cid}  {e}")
            n_fail += 1

    print(f"\nFertig: {n_ok} ok, {n_skip} übersprungen, {n_fail} fehlgeschlagen.")
    if n_fail:
        sys.exit(2)

if __name__ == "__main__":
    main()
