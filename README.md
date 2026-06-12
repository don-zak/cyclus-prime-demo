# CYCLUS Prime — Public Web Demo

> **Playable public demo** | v3.7.1-github-split-public-formula-hiding

This repository contains the public, browser-playable demo only. It is generated from the private source repository.

## Included

- `index.html` — bundled and source-hidden public demo
- `manifest.webmanifest` and `sw.js` — PWA support for hosted deployment
- `icons/` — PWA icons
- `LICENSE.txt` and `NOTICE.md`

## Not included

The public repository intentionally does **not** include:

- `js/` source modules
- `css/` source files
- `engine.mjs`, `game.mjs`, `pyramid.mjs`, or scoring source
- build/test/server tooling
- private design notes or mathematical implementation notes

The playable web demo still executes client-side logic in the browser. Source hiding reduces casual extraction and prevents publishing the private source tree, but it is not equivalent to server-side secrecy.

## GitHub Pages

Use:

```text
Settings → Pages → Deploy from a branch → main / root
```
