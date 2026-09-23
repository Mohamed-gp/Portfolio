# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository layout

- The repo root is Mohamed Outerbah's professional portfolio (recruiter-facing single-page Next.js site). The old 3D `portfolio-v2` experiment lives on the `portfolio-v2` branch, not in `main`.
- `public/cv/Mohamed_Outerbah_CV.pdf` — the downloadable CV. Its source (`Mohamed_Outerbah_CV.html` + `build-cv.sh`) lives outside the repo in `../cv-source/`; edit the HTML there, run `./build-cv.sh`, and it writes the PDF back here. Re-check PDF text extraction after any change so it stays ATS-parseable; the rules that keep words from gluing together are in `../cv-source/README.md`.

## Common commands

Run from the repo root:

```bash
npm install
npm run dev      # next dev (localhost:3000)
npm run build
npm run start    # next start
npm run lint     # next lint
```

No test runner is configured.

## Architecture

Single-page marketing site, App Router (Next.js 16, React 19, Tailwind v3).

- Entry: `src/app/page.tsx` — composes the page from section components (`Hero`, `Experience`, `Projects`, `Testimonials`, `Skills`, `Contact`). All sections except `Header`/`Hero`/`Footer` are loaded via `next/dynamic` to keep the initial bundle lean.
- Components live in `src/components/<section>/` (one folder per page section); shared primitives are in `src/components/ui/` (Radix-based, shadcn-style). `src/lib/utils.ts` exposes the standard `cn()` helper.
- Static content (skills list) is centralized in `src/lib/data.ts`; experience/project copy lives inside the section components.
- SEO is heavy in `src/app/layout.tsx`: full Open Graph / Twitter metadata, JSON-LD `Person` schema, viewport theme colors. When editing copy or links shown publicly, keep this metadata in sync (and the CV files in sync with the site).
- Theming via `next-themes` through `ThemeProviderWrapper`; toast/dialog/dropdown built on Radix; animations via `framer-motion`.
- Contact form sends email through `@emailjs/browser` (client-side EmailJS, `NEXT_PUBLIC_EMAILJS_*` env vars).

Note: there is a typo'd directory `src/components/foooter/` (three o's) — imports must match (`@/components/foooter/Footer`).

## Content rules

- Metrics on the site and CV are user-verified claims (store counts, paying subscribers, uptime). Do not invent or inflate numbers; when they change, update the site and the CV source in `../cv-source/` together and rebuild the PDF.
- The CV must contain no em-dashes and no action verb used more than twice (ATS conventions the user follows).
