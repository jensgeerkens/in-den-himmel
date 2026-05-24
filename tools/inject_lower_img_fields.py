#!/usr/bin/env python3
"""
inject_lower_img_fields.py — fügt in data.js für jede id der unteren Ebene
die Felder `img:"images/{id}.{ext}", credit:"...", license:"..."` ein.

Datenquellen:
  * eval/img-harness/candidates_lower_fauna.json
  * eval/img-harness/candidates_lower_tech.json
  * eval/img-harness/picks_lower.json (Pick-Override: direct_url -> Match per URL zum Kandidaten)
  * images/{id}.png (FAUNA) oder images/{id}.jpg (TECH) — bestimmt die Endung

Insertion-Punkt: nach `en:"..."},` (also Ende des fact-Blocks). Wenn dort bereits
ein img:-Feld existiert (durch fetch_space_images.py o. ä.), wird übersprungen.

Macht ein Backup data.js.bak im Projektordner.
"""
from __future__ import annotations
import json, re, shutil, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "data.js"
HARNESS = ROOT / "eval" / "img-harness"
IMAGES = ROOT / "images"

def load_credits() -> dict[str, dict]:
    """Liefert {id: {author, license, ext}}"""
    picks = json.loads((HARNESS / "picks_lower.json").read_text(encoding="utf-8"))
    out: dict[str, dict] = {}
    for fname in ("candidates_lower_fauna.json", "candidates_lower_tech.json"):
        data = json.loads((HARNESS / fname).read_text(encoding="utf-8"))
        for entry in data.get("candidates", []):
            cid = entry["id"]
            cands = entry.get("candidates", [])
            if not cands:
                continue
            pick_url = picks.get(cid)
            chosen = cands[0]
            if pick_url:
                for c in cands:
                    if c["direct_url"] == pick_url:
                        chosen = c
                        break
            ext = ".png" if (IMAGES / f"{cid}.png").exists() else ".jpg" if (IMAGES / f"{cid}.jpg").exists() else None
            if not ext:
                print(f"  WARN {cid}: weder .png noch .jpg in images/ — übersprungen", file=sys.stderr)
                continue
            out[cid] = {"author": chosen["author"], "license": chosen["license"], "ext": ext}
    return out

def main():
    if not DATA.exists():
        sys.exit(f"{DATA} fehlt")
    src = DATA.read_text(encoding="utf-8")

    shutil.copyfile(DATA, ROOT / "data.js.bak")
    print(f"Backup: data.js.bak")

    creds = load_credits()
    print(f"Zu injecten: {len(creds)} IDs")

    new_src = src
    inserted = skipped_has_img = not_found = 0
    for cid, info in creds.items():
        # Finde den Objektblock zur id
        # Pattern: { id:"<cid>", ... } — wir suchen das schließende } nach balanciertem Tiefenzähler
        m = re.search(r'(\{\s*id:"' + re.escape(cid) + r'",)', new_src)
        if not m:
            print(f"  NOT FOUND {cid}")
            not_found += 1
            continue
        start = m.start(1)
        depth = 0
        j = start
        while j < len(new_src):
            ch = new_src[j]
            if ch == "{": depth += 1
            elif ch == "}":
                depth -= 1
                if depth == 0: break
            j += 1
        if depth != 0:
            print(f"  UNBALANCED {cid}")
            not_found += 1
            continue
        block = new_src[start:j+1]

        if re.search(r'\bimg:\s*"', block):
            print(f"  SKIP {cid} (img-Feld existiert bereits)")
            skipped_has_img += 1
            continue

        # Einfüge-Punkt: Ende des fact-Blocks — wir suchen nach `en:"…"}` innerhalb des Blocks
        # Bevorzugt: nach dem ersten Vorkommen von `en:"..."},\n` im Block, das auf eine Zeile mit fact endet.
        fact_close = re.search(r'en:"[^"]*"\}\,\s*\n', block)
        if not fact_close:
            print(f"  FACT-CLOSE not found {cid}")
            not_found += 1
            continue
        insert_at = start + fact_close.end()

        # Bestimme Einrückung anhand der nächsten Zeile (Default 4)
        # Nimm die Einrückung der ersten Zeile im Block nach { id:...
        indent_match = re.search(r'\n(\s+)\w', new_src[start:start+200])
        indent = indent_match.group(1) if indent_match else "    "

        img_path = f"images/{cid}{info['ext']}"
        author = info["author"].replace('"', "'")
        lic = info["license"].replace('"', "'")
        new_line = f'{indent}img:"{img_path}", credit:"{author}", license:"{lic}",\n'

        new_src = new_src[:insert_at] + new_line + new_src[insert_at:]
        inserted += 1
        print(f"  OK   {cid}  -> {img_path}")

    DATA.write_text(new_src, encoding="utf-8")
    print(f"\nFertig: {inserted} eingefügt, {skipped_has_img} bereits vorhanden, {not_found} nicht gefunden.")

if __name__ == "__main__":
    main()
