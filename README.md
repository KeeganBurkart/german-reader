# Lesen

A single-file German reading trainer, built for one goal: reading proficiency by a Vienna trip in December 2026.

- **Reader** — a date-driven daily text pick matched to your actual Anki deck position, with per-word glosses, coverage stats, comprehension questions, and offline read-aloud
- **108 graded texts** (A2–B2), all Vienna/Austria-themed, plus paste-anything mode for real news
- **Grammar** — a decoder's crib for reading German, not producing it
- **Plan / Progress** — a 24-week ramp with streak tracking and honest metrics

No build, no backend, no dependencies: `index.html` + `vocab.js` (4,214-word frequency deck) + `texts.js` (corpus). Open the file or serve it statically. Progress lives in `localStorage` (backup/restore built in).

Built with [Claude Code](https://claude.com/claude-code).
