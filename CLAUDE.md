# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository layout

This is a monorepo containing **two independent Next.js apps**, each with its own `package.json`, `tsconfig.json`, and lockfile. There is no root-level workspace config — always `cd` into the specific app before running commands.

- `portfolio-v1/` — Mohamed Outerbah's professional portfolio (recruiter-facing single-page site).
- `portfolio-v2/` — Experimental 3D flight-sim portfolio where the user pilots a jet between floating islands representing portfolio sections.

The two apps share no code; treat them as separate projects.

## Common commands

Run from inside the relevant app directory (`portfolio-v1` or `portfolio-v2`):

```bash
npm install
npm run dev      # next dev (localhost:3000)
npm run build    # next build
npm run start    # next start
npm run lint     # v1: next lint  |  v2: eslint
```

Neither app has a test runner configured.

## portfolio-v1 architecture

Single-page marketing site, App Router (Next.js 15, React 19, Tailwind v3).

- Entry: `src/app/page.tsx` — composes the page from section components (`Hero`, `About`, `Experience`, `Skills`, `Projects`, `Testimonials`, `CTASection`, `Contact`, etc.). All sections except `Header`/`Hero`/`Footer` are loaded via `next/dynamic` to keep the initial bundle lean.
- Components live in `src/components/<section>/` (one folder per page section); shared primitives are in `src/components/ui/` (Radix-based, shadcn-style). `src/lib/utils.ts` exposes the standard `cn()` helper.
- Static content (nav titles, skills list) is centralized in `src/lib/data.ts`.
- SEO is heavy in `src/app/layout.tsx`: full Open Graph / Twitter metadata, JSON-LD `Person` schema, viewport theme colors. When editing copy or links shown publicly, keep this metadata in sync.
- Theming via `next-themes` through `ThemeProviderWrapper`; toast/dialog/dropdown built on Radix; animations via `framer-motion`; carousels via `swiper`.
- Contact form sends email through `@emailjs/browser` (client-side EmailJS).

Note: there is a typo'd directory `src/components/foooter/` (three o's) — imports must match (`@/components/foooter/Footer`).

## portfolio-v2 architecture

Interactive 3D flight game, App Router (Next.js 16, React 19, Tailwind v4, React Compiler enabled via `babel-plugin-react-compiler`).

- Entry: `src/app/page.tsx` → `src/components/Game.tsx`. `Game.tsx` is the orchestrator: it loads the 3D `Scene` via `next/dynamic({ ssr: false })` (Three.js cannot SSR) and switches UI overlays based on game-state flags.
- State: a single Zustand store at `src/store/gameStore.ts` drives everything — aircraft selection, flight telemetry (`speed`, `altitude`, `heading`), takeoff state (`isOnRunway`, `groundSpeed`), and UI flags (`isLoading`, `showMissionBriefing`, `isFlying`, `isLanded`, `currentIsland`). Only `unlockedAircraft` is persisted to localStorage (`jet-portfolio-storage`); everything else resets on reload.
- 3D layer (`src/components/3d/`): `Scene.tsx` sets up the R3F canvas; `Aircraft`, `Environment`, `FloatingIsland`, `Runway` are scene objects; `FlightController` and `GroundController` mutate the store every frame based on input.
- UI layer (`src/components/ui/`): pure overlays rendered above the canvas — `LoadingScreen`, `MissionBriefing`, `TakeoffHUD` (runway), `HUD` (in-flight), `AircraftSelector`, `IslandContent` (modal shown when landed on a section island).
- Input: `src/hooks/useFlightControls.ts` is the single keyboard listener (W/S pitch, A/D roll, Q/E yaw, Shift boost, Space land — see `FlightControls` in `src/types/index.ts`).
- Data: `src/data/aircraft.ts` and `src/data/islands.ts` define the three aircraft (`b2-spirit`, `f15-eagle`, `f35-lightning`) and five islands (`about`, `projects`, `skills`, `contact`, `hangar`). Their string-literal IDs are the source of truth — the matching union types in `src/types/index.ts` must stay aligned.
- Stack specifics: `@react-three/fiber` + `@react-three/drei` + `@react-three/postprocessing` for 3D, `gsap` and `framer-motion` for animation, `leva` for dev-time tweakable controls.

When adding a new portfolio section to v2, the pattern is: add an entry to `islands.ts`, extend the `IslandType` union in `types/index.ts`, and add a matching case in `IslandContent.tsx`.
