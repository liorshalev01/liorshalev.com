# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Lior Shalev's personal site (liorshalev.com), an Astro 6 static site styled with Tailwind CSS 4, deployed to GitHub Pages. The GitHub Actions workflow (`.github/workflows/deploy.yaml`) builds with `withastro/action` and deploys to Pages on every push to `main`, so anything pushed to `main` publishes immediately. The custom domain is set via `public/CNAME`.

## Commands

```sh
npm run dev       # dev server on http://localhost:4321
npm run build     # static build to dist/
npm run preview   # serve the built dist/
```

There are no test or lint scripts. On this machine npm is not on the default non-interactive PATH; use `export PATH="$HOME/.nvm/versions/node/v26.3.0/bin:$PATH"` first.

## Architecture

All pages are markdown files in `src/content/`, rendered by a single generic wrapper:

- `src/content/*.md` — one file per page. Each file's URL comes from its `slug` frontmatter (e.g. `slug: pages/cv` → `/pages/cv`); a file with no slug becomes the homepage `/`. To add a page, drop a `.md` here with a `slug` — no other file needs touching.
- `src/pages/[...slug].astro` — the only route. Its `getStaticPaths()` globs `src/content/*.md` and renders each as `<Layout><article class="prose mx-auto p-4"><Content /></article></Layout>`.

Do not place `.md` files directly in `src/pages/` — Astro auto-routes them as bare pages without the Layout or typography styles.

`src/layouts/Layout.astro` is the single HTML shell (head, favicon, Google Analytics tag). Tailwind 4 is configured entirely in CSS — `src/styles/global.css` does `@import "tailwindcss"` and loads the `@tailwindcss/typography` plugin; there is no tailwind.config.js. Markdown body styling comes from the `prose` class in the wrapper, not from element styles.

Internal markdown links must use extensionless route paths (e.g. `/pages/cv`), not file paths (`lior-shalev-cv.md`).
