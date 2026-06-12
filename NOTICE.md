CYCLUS Prime
Copyright © 2026 Zak Sam. All rights reserved.

This repository/package contains a playable demo and related materials for evaluation and playtesting only.
No permission is granted to copy, redistribute, modify, sell, sublicense, reverse engineer, extract, or reuse the source code, formulas, artwork, text, design, gameplay implementation, or derived systems without prior written permission.

Recommended publishing model:
- Keep the complete source repository private.
- Publish only the generated demo build from `dist/index.html` in the public repository or on itch.io/GitHub Pages.


## v3.7.1 — GitHub Split & Public Formula-Hiding

- Two-repository split: private source repo + public demo repo.
- Public demo build from `prepare_public_repo.py` with renamed/obfuscated scoring identifiers.
- Cleaned `__pycache__`, flattened directory structure.
- Updated PWA manifest, service worker, icons, and offline support.
- Fixed language bar visibility bug when opening help from start screen.
