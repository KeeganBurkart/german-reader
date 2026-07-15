# Lesen

A single-file German reading trainer, built for one goal: reading proficiency by a Vienna trip in December 2026.

- **Flow** — short Vienna readings built around your introduced Anki vocabulary, with tap glosses, one gist check, optional audio, and one contextual grammar pattern
- **Decode** — 128 graded texts (A2–B2) for deliberate assisted reading, plus paste-anything mode
- **Grammar** — a decoder's crib for reading German, reinforced inside Flow rather than taught as an isolated course
- **Plan / Progress** — a 24-week ramp with streak tracking and honest metrics
- **One-way Anki sync** — tracks recently introduced, learning, and stable words without creating cards or another review queue

No build, no backend, no dependencies. Open `index.html` or serve the folder statically. Progress lives in `localStorage` (backup/restore built in).

Refresh the local Anki snapshot with `uv run sync_anki.py`, then reload the page. Push the generated `known.js` when updating the hosted version.

Built with [Claude Code](https://claude.com/claude-code).
