# Mohamed Outerbah

**Full-Stack Engineer** · Next.js · React · React Native · Node.js · FastAPI · TypeScript
[Email](mailto:mohamedterba6@gmail.com) · [Portfolio](https://www.mohamedouterbah.com) · [GitHub](https://github.com/Mohamed-gp) · [LinkedIn](https://www.linkedin.com/in/mohamedouterbah)

---

Full-Stack Engineer with 3+ years shipping production web & mobile platforms end-to-end. Own the entire frontend of a live AI analytics SaaS as 2nd-highest contributor in a ~10-person team, and built the on-demand dispatch and fleet-operations services of a live Uber-style logistics marketplace. Co-founder of DzStore, a Shopify-equivalent SaaS that grew to 550+ stores and 15+ paying subscribers in its first 2 months with zero ad spend, and Fibble, a multiplayer party game generating revenue organically.

## Experience

### Full-Stack Engineer (Frontend Lead) · _Analytics Depot (AI Analytics SaaS), USA · Remote_

**Apr 2025 - Present**

- Own the entire frontend architecture of a live AI analytics platform, ranking 2nd of ~10 engineers by contribution across AI/ML, LLMOps, and infra: every user-facing surface from dashboards to the marketing site.
- **Dashboards & reporting:** Designed and implemented the drag-and-drop dashboard builder, shareable password-protected/embed reports, and one-click PDF/PowerPoint export UI.
- **Real-time collaboration:** Shipped WebSocket session sync, live user presence, and a collaborative chat sidebar over production wss://, plus the NL-to-SQL query interface.
- **Data connectors:** Developed an OAuth2 connector platform with encrypted credential storage across 10+ sources (BigQuery, GA4, Search Console, Sheets, Gmail, YouTube, Google Play, PostgreSQL, MySQL, Slack), including per-connector refresh schedules taken end-to-end (React UI, FastAPI, Celery Beat).
- **AI / RAG:** Delivered RAG document-intelligence Q&A with resilient streaming, multi-format ingestion (CSV/PDF/Excel/images), and a Gemini model layer with fallback.
- **Growth & DevOps:** Rebuilt the full marketing site (animated hero, comparison, FAQ); cut deploy time from ~30 min to under 5 with zero-downtime PM2 cluster reloads; hardened CI/CD (GitHub Actions) with Sentry observability; PKCE OAuth and Apple "Hide My Email" auth.
- **Mobile:** Initialized the companion React Native app: dashboard viewing, push notifications, biometric auth, offline caching.

### Full-Stack Engineer (Contract) · _HaulHub (Logistics Marketplace), Netherlands · Remote_

**Jun 2025 - May 2026**

- One of the primary engineers across backend, mobile & web on a production Uber-style marketplace, live on iOS & Android in the Netherlands across 12 service categories and 100+ skilled-labor sub-categories, localized in 5 languages (EN/NL/AR/DE/UR) with full RTL.
- **On-demand dispatch service:** Engineered the request-to-delivery flow end-to-end: nearest-provider matching with the Haversine formula and per-provider search radius, competing provider offers with price and pickup-time bids, an 11-state request lifecycle with proof-of-delivery and disputes, live driver tracking over per-ride WebSocket rooms, and Stripe escrow with timing-based cancellation refunds.
- **Fleet-operations service:** Developed the B2B fleet module, the platform's largest: companies manage drivers, vehicles, and workers, accept marketplace requests, and assign each trip to a specific driver and vehicle, backed by a settlement engine that splits every job into company commission and driver earnings.
- **Multi-role architecture:** Architected a role-based permission system across 5+ user types (Admin with sub-roles, End Users, freelance & company Service Providers, Company Employees), each with dedicated dashboards.
- **Payments & compliance:** Integrated Stripe with hardened webhook signature verification (on-demand, subscriptions, provider payouts) and Dutch KVK business-registry lookup.
- **Mobile & infra:** Shipped the React Native (Expo) app via EAS builds with push notifications, real-time chat, and map directions; Dockerized microservices on Hetzner via Coolify with Sentry + Clarity.

### Freelance Full-Stack Developer · _Global clients · Remote_

**Jun 2023 - Jun 2025**

- Delivered 6+ production applications for clients in the UK, USA, Netherlands, Japan, and Saudi Arabia, with a **5/5 rating across all delivered projects.**
- **Cribbix (UK):** Rightmove-style property platform (V1 & V2): interactive map search with live filtering, client/agency/admin dashboards, real-time chat, AI property descriptions, Stripe tenancy payments, Redis caching, and independent DigitalOcean VPS deployment.
- **MLC SharePoint to Zoho sync:** Zero-framework Cloudflare Worker watching a SharePoint contract library and auto-updating Zoho CRM (NDA/MSA detection) with SendGrid notifications.

### Web Development Intern · _Exclusive Labs · Remote_

**Sep - Dec 2024**

- Created a course management system (Next.js + Express) with role-based auth for students, instructors, and admins.

## Founder Projects

### DzStore · _Shopify-equivalent E-commerce SaaS · Co-Founder & Lead Engineer · dzstore.org_

**2026 - Present**

- **Traction:** 550+ active stores, 600+ users, and 1,300+ products within 2 months of launch, 100% organic with zero ad spend: **15+ paying PRO subscribers acquired through SEO alone**, a +500% week-over-week user-growth spike, and +800% week-over-week revenue growth in the first weeks of monetization.
- **Quality signals:** 4.6/5 average across 42 in-app merchant survey responses; 99.95% uptime over the last 90 days with zero recorded incidents (public status page).
- **Organic SEO engine:** Owned technical SEO end-to-end: 4,300+ pages indexed, 600+ valid product snippets & merchant listings (Google Shopping rich results), and breadcrumb/FAQ structured data, driving 1,600+ Google Search clicks and all merchant acquisition.
- **Engineering:** Led nearly all engineering across the stack: multi-tenant subdomain-per-store routing with Caddy on-demand TLS for custom domains, a 42-model Prisma/PostgreSQL schema, drag-and-drop storefront builder, online card payments (Chargily Pay) with HMAC-verified webhooks, per-region shipping, abandoned-cart lifecycle emails (Resend), affiliate payouts, AI product descriptions, and Arabic/French RTL; self-hosted on Hetzner via Docker with zero-downtime deploys and Upstash Redis.

### Fibble · _Multiplayer Party Game (Web + Discord) · Co-Founder & Full-Stack Engineer · fibble.io_

**2026 - Present**

- **Product:** Free real-time bluffing trivia game (2-8 players, no download) playable in the browser and as a Discord Activity, with a premium subscription tier.
- **Traction:** 2,500+ players from 39 countries in the first weeks and $50 MRR, entirely organic with zero ad spend.
- **Engineering:** Serverless real-time multiplayer: Postgres as the source of truth with Ably pub/sub fan-out, server-authoritative phase deadlines, and HMAC anti-spoofing action tokens; plus Discord Activity integration, Paddle + Discord SKU billing, and a full admin analytics panel (player geo, sessions, retention, moderation).

## Education & Awards

**Master's in Computer Science**, AI & Data Science specialization, ESTIN, Algeria · _Expected 2027_

- **Hackathon Winner 2024:** 1st place, competitive ideathon · 5+ hackathons participated.
- **Open-source contributor:** Munia, a Next.js social platform with 300+ GitHub stars (auth-aware navigation and dynamic UI).

## Technical Skills

- **Frontend:** React, Next.js (App & Pages Router), TypeScript, JavaScript ES6+, Tailwind CSS, Redux Toolkit
- **Mobile:** React Native (Expo) for iOS & Android: EAS builds, push notifications, biometric auth, RTL i18n
- **Backend:** Node.js, NestJS, Express.js, FastAPI, Python, REST APIs, WebSockets, Ably, RBAC
- **Databases:** PostgreSQL, Prisma ORM, Redis, MongoDB
- **DevOps:** Docker, GitHub Actions, CI/CD, VPS (Hetzner, DigitalOcean), Coolify, Caddy/Nginx, PM2, Cloudflare Workers
- **Integrations & AI:** Stripe, Paddle, online payments (Chargily Pay), OAuth2 (PKCE), Apple/Google Auth, Sentry, SendGrid/Resend, PostHog, RAG systems, LangChain, NL-to-SQL, Celery, real-time collaboration
