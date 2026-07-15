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
    rows = db.execute(
        "select n.id,n.flds,max(c.ivl),max(c.reps),max(c.lapses) "
        "from notes n join cards c on c.nid=n.id where c.did=? and c.type!=0 group by n.id", (did,)).fetchall()
    entries = []
    for _, fields, interval, reps, lapses in rows:
        state = "stable" if interval >= 21 else "learning" if interval >= 7 else "seen"
        entries.append({"word": fields.split(chr(31))[0], "state": state, "interval": interval,
                        "reps": reps, "lapses": lapses})
    words = [entry["word"] for entry in entries]
    firsts = db.execute(
        "select min(r.id) from revlog r join cards c on r.cid=c.id where c.did=? group by c.nid", (did,)).fetchall()
    now = time.time() * 1000
    days = collections.Counter(int((now - ms) / 86400000) for (ms,) in firsts)
    recent = sum(v for d, v in days.items() if d <= 14)
    per_day = round(recent / min(14, max(1, max(days) + 1 if days else 1)), 1)

counts = collections.Counter(entry["state"] for entry in entries)
meta = {"date": str(datetime.date.today()), "count": len(words), "seen": counts["seen"],
        "learning": counts["learning"], "stable": counts["stable"], "perDay": per_day}
out = ("const KNOWN_WORDS=" + json.dumps(words, ensure_ascii=False, separators=(",", ":")) +
       ";\nconst ANKI_WORDS=" + json.dumps(entries, ensure_ascii=False, separators=(",", ":")) +
       ";\nconst KNOWN_META=" + json.dumps(meta, separators=(",", ":")) + ";\n")
open(os.path.join(APP_DIR, "known.js"), "w").write(out)
print(f"known.js written: {len(words)} introduced, {counts['learning']} learning, "
      f"{counts['stable']} stable, ~{per_day}/day recent pace")
