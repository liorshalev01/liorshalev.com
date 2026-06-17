# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal website and CV for Lior Shalev, served as a static site at [liorshalev.com](https://liorshalev.com).

## Commands

- `npm run dev`: Local dev server (port 4321)
- `npm run build`: Production build to `dist/`
- `npm run preview`: Serve the production build locally

There is no test suite or linter. The build itself is the safety net: `getStaticPaths` in `src/pages/[...slug].astro` throws if a content page is missing `title` or `description`, and the `blog` collection's Zod schema fails the build on malformed frontmatter.

## Tech Stack

- **Astro** (static site generation), TypeScript in `astro/tsconfigs/strictest` mode.
- **Tailwind CSS v4** (utilities) + `@tailwindcss/typography` (`prose`). The only CSS is the two imports in `src/styles/global.css`; all layout is Tailwind utility classes in `Layout.astro`. Default system fonts, no animations.
- **Content**: Markdown with YAML frontmatter.
- **Hosting**: GitHub Pages, custom domain via `public/CNAME`. `.github/workflows/deploy.yaml` builds and deploys on push to `main`.

## Architecture

There are two distinct content mechanisms — don't confuse them:

1. **Standalone pages** — `src/content/*.md` (non-recursive glob). `src/pages/[...slug].astro` globs these and renders each into `Layout.astro`. The page's URL comes from its frontmatter `slug` (e.g. `slug: /cv`); a file with **no** `slug` becomes the homepage (`home.md`) and gets `isHome` (which enables Person JSON-LD). These files are NOT a content collection.
2. **Blog collection** — `src/content/blog/*.md`, declared in `src/content.config.ts` with a Zod schema (`title`, `description`, `publishDate`). Accessed via `getCollection`/`render`, never via the page glob above. `src/lib/blog.ts` `getPosts()` returns all posts newest-first and is the single source for the blog listing (`src/pages/blog/index.astro`), individual posts (`src/pages/blog/[...slug].astro`, slug = filename), and the RSS feed (`src/pages/rss.xml.ts`).

`src/layouts/Layout.astro` is the shared shell for everything: single-column centered layout (`max-w-prose`), top nav (Home/CV/Blog), `<main class="prose">` slot, footer with social + RSS icons, plus all `<head>` meta/OG/canonical/RSS-alternate tags, Person JSON-LD (homepage only), and Google Analytics. Page content renders inside `prose`, so markdown is styled automatically.

`astro.config.mjs`: `site` URL, `trailingSlash: "never"`, `build.format: "file"` (clean extensionless URLs), sitemap integration, and a `rehype-external-links` plugin that opens external links in a new tab.

`src/lib/date.ts` `formatDate()` formats post dates in UTC to match the `<time datetime>` ISO attribute (avoids timezone-dependent off-by-one display).

## Adding content

- **New page**: create `src/content/<name>.md` with `title` and `description` frontmatter (both required — build throws otherwise). Add `slug` for a non-home path; omit for the homepage. Body H1 is fine here (see `home.md`).
- **New blog post**: create `src/content/blog/<slug>.md` with `title`, `description`, and `publishDate`. It appears at `/blog/<slug>` and in the listing/RSS automatically. The visible title is rendered from frontmatter by the page — **do not** add a body H1.

## Conventions

- Import from `src/` via the `@/*` alias (e.g. `@/lib/blog`), not relative `../` paths.
- Changes land via PRs to `main` (CODEOWNERS auto-requests review); deploy is automatic on merge. Keep commit messages short and action-oriented.
- Static site only — no backend, database, auth, or client-side framework. Keep it simple.
- Don't commit `dist/` or `.astro/` (generated, gitignored).
