# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository layout

- `portfolio-v1/` — Mohamed Outerbah's professional portfolio (recruiter-facing single-page Next.js site). Always `cd` into it before running commands.
- `Mohamed_Outerbah_CV.md` / `Mohamed_Outerbah_CV.html` — the CV source files at the repo root. The HTML is the print source for the downloadable PDF.
- `build-cv.sh` — exports the CV HTML to `portfolio-v1/public/cv/Mohamed_Outerbah_CV.pdf` via headless Chromium. It also runs automatically as the `prebuild` script of `npm run build` (skipped silently where no Chromium exists, e.g. Vercel — so the committed PDF must be kept current).

## Common commands

Run from inside `portfolio-v1`:

```bash
npm install
npm run dev      # next dev (localhost:3000)
npm run build    # regenerates the CV PDF, then next build
npm run start    # next start
npm run lint     # next lint
npm run cv       # rebuild only the CV PDF
```

No test runner is configured.

## portfolio-v1 architecture

Single-page marketing site, App Router (Next.js 16, React 19, Tailwind v3).

- Entry: `src/app/page.tsx` — composes the page from section components (`Hero`, `About`, `Experience`, `Projects`, `Testimonials`, `Skills`, `StatsSection`, `CTASection`, `Contact`, etc.). All sections except `Header`/`Hero`/`Footer` are loaded via `next/dynamic` to keep the initial bundle lean.
- Components live in `src/components/<section>/` (one folder per page section); shared primitives are in `src/components/ui/` (Radix-based, shadcn-style). `src/lib/utils.ts` exposes the standard `cn()` helper.
- Static content (skills list) is centralized in `src/lib/data.ts`; experience/project copy lives inside the section components.
- SEO is heavy in `src/app/layout.tsx`: full Open Graph / Twitter metadata, JSON-LD `Person` schema, viewport theme colors. When editing copy or links shown publicly, keep this metadata in sync (and the CV files in sync with the site).
- Theming via `next-themes` through `ThemeProviderWrapper`; toast/dialog/dropdown built on Radix; animations via `framer-motion`.
- Contact form sends email through `@emailjs/browser` (client-side EmailJS, `NEXT_PUBLIC_EMAILJS_*` env vars).

Note: there is a typo'd directory `src/components/foooter/` (three o's) — imports must match (`@/components/foooter/Footer`).

## Content rules

- Metrics on the site and CV are user-verified claims (store counts, paying subscribers, uptime). Do not invent or inflate numbers; when they change, update site + CV md + CV html together and rebuild the PDF.
- The CV must contain no em-dashes and no action verb used more than twice (ATS conventions the user follows).
