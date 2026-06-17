# CLAUDE.md

## Project
Personal website and CV for Lior Shalev, served as a static site at [liorshalev.com](https://liorshalev.com).

## Tech Stack
- Framework: Astro (static site generation)
- Styling: Tailwind CSS v4 + `@tailwindcss/typography` (`prose`)
- Content: Markdown with YAML frontmatter
- Hosting: GitHub Pages (custom domain via `public/CNAME`)

## Key Files
- `src/content/*.md`: Page content. Each file becomes a page. `home.md` (no `slug`) is the homepage; `lior-shalev-cv.md` (`slug: /cv`) is the CV.
- `src/pages/[...slug].astro`: Single dynamic route that globs `src/content/*.md` and renders each into the layout.
- `src/layouts/Layout.astro`: Shared HTML shell — `<head>` meta/OG/canonical tags, Person JSON-LD (homepage only), Google Analytics.
- `astro.config.mjs`: Site URL, `trailingSlash: "never"`, `build.format: "file"` (clean extensionless URLs), sitemap, external-link rehype plugin.
- `public/`: Static assets served as-is (`CNAME`, `favicon.svg`, `robots.txt`, `assets/`).
- `.github/workflows/deploy.yaml`: Builds and deploys to GitHub Pages on push to `main`.

## Adding / Editing Pages
- To add a page, create a new `src/content/<name>.md` with `title` and `description` frontmatter (both required — the build throws without them). Add a `slug` for a non-home path; omit it for the homepage.
- Content is rendered inside `<article class="prose">`, so standard markdown styles automatically.

## Commands
- `npm run dev`: Local dev server
- `npm run build`: Production build to `dist/`
- `npm run preview`: Preview the build

## Conventions
- Changes land via PRs to `main` (CODEOWNERS auto-requests review); deploy is automatic on merge.
- Keep commit messages short and action-oriented.

## Constraints
- Static site only — no backend, database, auth, or client-side framework. Keep it simple.
- Don't commit `dist/` or `.astro/` (generated, gitignored).
