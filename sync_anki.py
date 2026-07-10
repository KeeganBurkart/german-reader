#!/usr/bin/env python3
"""Sync studied words from Anki into known.js (exact per-word coverage).
Run occasionally: python3 sync_anki.py  — then reload the app (and git push if you use the hosted version)."""
import sqlite3, json, shutil, tempfile, time, datetime, collections, os, glob

DECK_NAME = "Deutsch: 4000 German Words by Frequency"
APP_DIR = os.path.dirname(os.path.abspath(__file__))

profiles = glob.glob(os.path.expanduser("~/Library/Application Support/Anki2/*/collection.anki2"))
if not profiles:
    raise SystemExit("No Anki collection found")
src = max(profiles, key=os.path.getmtime)

with tempfile.TemporaryDirectory() as td:
    dbp = os.path.join(td, "c.db")
    shutil.copy(src, dbp)
    db = sqlite3.connect(dbp)
    did = None
    for i, name in db.execute("select id,name from decks"):
        if name == DECK_NAME:
            did = i
    if did is None:
        raise SystemExit(f"Deck not found: {DECK_NAME}")
    words = [f.split(chr(31))[0] for (f,) in db.execute(
        "select distinct n.flds from notes n join cards c on c.nid=n.id where c.did=? and c.type!=0", (did,))]
    firsts = db.execute(
        "select min(r.id) from revlog r join cards c on r.cid=c.id where c.did=? group by c.nid", (did,)).fetchall()
    now = time.time() * 1000
    days = collections.Counter(int((now - ms) / 86400000) for (ms,) in firsts)
    recent = sum(v for d, v in days.items() if d <= 14)
    per_day = round(recent / min(14, max(1, max(days) + 1 if days else 1)), 1)

out = ("const KNOWN_WORDS=" + json.dumps(words, ensure_ascii=False, separators=(",", ":")) +
       ";\nconst KNOWN_META=" + json.dumps({"date": str(datetime.date.today()), "count": len(words), "perDay": per_day}) + ";")
open(os.path.join(APP_DIR, "known.js"), "w").write(out)
print(f"known.js written: {len(words)} studied words, ~{per_day}/day recent pace")
