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
- `src/pages/[...slug].astro`: Single dynamic route that globs `src/content/*.md` (non-recursive) and renders each into the layout.
- `src/content.config.ts`: Defines the `blog` content collection (Zod schema: `title`, `description`, `publishDate`).
- `src/content/blog/*.md`: Blog posts (the `blog` collection). Separate from the page glob above.
- `src/lib/blog.ts`: `getPosts()` — all posts sorted newest-first by `publishDate`. Used by both blog pages.
- `src/pages/blog/index.astro`: Blog listing (`/blog`), posts sorted newest-first.
- `src/pages/blog/[...slug].astro`: Individual post pages (`/blog/<slug>`), where `<slug>` is the post filename.
- `src/layouts/Layout.astro`: Shared HTML shell — nav header (Home/CV/Blog), `<head>` meta/OG/canonical tags, Person JSON-LD (homepage only), Google Analytics.
- `astro.config.mjs`: Site URL, `trailingSlash: "never"`, `build.format: "file"` (clean extensionless URLs), sitemap, external-link rehype plugin.
- `public/`: Static assets served as-is (`CNAME`, `favicon.svg`, `robots.txt`, `assets/`).
- `.github/workflows/deploy.yaml`: Builds and deploys to GitHub Pages on push to `main`.

## Adding / Editing Pages
- To add a page, create a new `src/content/<name>.md` with `title` and `description` frontmatter (both required — the build throws without them). Add a `slug` for a non-home path; omit it for the homepage.
- Content is rendered inside `<article class="prose">`, so standard markdown styles automatically.
- To add a blog post, create `src/content/blog/<slug>.md` with `title`, `description`, and `publishDate` frontmatter. It appears at `/blog/<slug>` and in the `/blog` listing automatically. The visible post title is rendered from frontmatter `title` — don't add a body H1.

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
