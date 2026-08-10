# Mohamed Outerbah

**Full-Stack Engineer** · Next.js · React · React Native · Node.js · Express · TypeScript
Algeria · CET (UTC+1) · [mohamedterba6@gmail.com](mailto:mohamedterba6@gmail.com) · [mohamedouterbah.com](https://www.mohamedouterbah.com) · [github.com/Mohamed-gp](https://github.com/Mohamed-gp) · [linkedin.com/in/mohamedouterbah](https://www.linkedin.com/in/mohamedouterbah)

---

Full-Stack Engineer with 3+ years shipping production web & mobile platforms end-to-end. Own the entire frontend of a live AI analytics SaaS as 2nd-highest contributor in a ~10-person team, and built the on-demand dispatch and fleet-operations services of a live Uber-style logistics marketplace. Co-founder of DzStore, a Shopify-equivalent SaaS that grew to 1,000+ live stores in its first 3 months live, 20+ of them converting to paid plans, and Fibble, a multiplayer party game on web and Discord with 3,000+ players, both entirely organic with zero ad spend.

## Experience

### Full-Stack Engineer (Frontend Lead) · _[Analytics Depot](https://analyticsdepot.com/) (AI Analytics SaaS), USA · Remote_

**Apr 2025 - Present**

- Build every user-facing surface of a live AI analytics platform in TypeScript, JavaScript, React, HTML, and CSS, from analytics dashboards to the marketing site, so non-technical business teams can explore their data and act on it without engineering help.
- **Dashboards & reporting:** Designed and implemented the drag-and-drop dashboard builder, shareable password-protected/embed reports, and one-click PDF/PowerPoint export UI.
- **Real-time collaboration:** Shipped WebSocket session sync, user presence, and a collaborative chat sidebar over production wss://, plus the NL-to-SQL query interface.
- **Data connectors:** Developed an OAuth2 connector platform with encrypted credential storage spanning 10+ sources (BigQuery, GA4, Search Console, Sheets, Gmail, YouTube, Google Play, PostgreSQL, MySQL, Slack), including per-connector refresh schedules taken end-to-end (React UI, FastAPI/Python, Celery Beat) and in-app alerts that tell a user the moment a sync starts failing.
- **AI / RAG:** Delivered RAG document-intelligence Q&A with resilient streaming, multi-format ingestion (CSV/PDF/Excel/images), and a Gemini model layer with fallback.
- **LLM agent observability:** Instrumented AI agent runs with an admin console over the trace pipeline: run volume and reliability trends, per-run latency and provider-cost drill-down into spans, cost-regression flags, recovered failures broken out from real ones, and async CSV/JSON export of the query log.
- **Growth & DevOps:** Rebuilt the full marketing site (animated hero, comparison, FAQ); cut deploy time from ~30 min to under 5 with zero-downtime PM2 cluster reloads; hardened CI/CD (GitHub Actions) with Sentry observability, working Agile in a cross-functional ~10-person team of AI/ML, LLMOps, and infra engineers; PKCE OAuth and Apple "Hide My Email" auth.
- **Mobile:** Initialized the companion React Native app: dashboard viewing, push notifications, biometric auth, offline caching.

### Full-Stack Engineer (Contract) · _[HaulHub](https://haulhub.app/) (Logistics Marketplace), Netherlands · Remote_

**Jun 2025 - May 2026**

- One of the primary engineers across backend, mobile & web on a production Uber-style marketplace, live on iOS & Android in the Netherlands across 12 service categories and 100+ skilled-labor sub-categories, localized in 5 languages (EN/NL/AR/DE/UR) with full RTL.
- **On-demand dispatch service:** Engineered the request-to-delivery flow end-to-end: nearest-provider matching with the Haversine formula and per-provider search radius, competing provider offers with price and pickup-time bids, an 11-state request lifecycle with proof-of-delivery and disputes, live driver tracking over per-ride WebSocket rooms, and Stripe escrow with timing-based cancellation refunds.
- **Fleet-operations service:** Developed the B2B fleet module, the platform's largest: companies manage drivers, vehicles, and workers, accept marketplace requests, and assign each trip to a specific driver and vehicle, backed by a settlement engine that splits every job into company commission and driver earnings.
- **Multi-role architecture:** Architected a role-based permission system across 5+ user types (Admin with sub-roles, End Users, freelance & company Service Providers, Company Employees), each with dedicated dashboards.
- **Payments & compliance:** Integrated Stripe with hardened webhook signature verification (on-demand, subscriptions, provider payouts) and Dutch KVK business-registry lookup.
- **Mobile & infra:** Shipped the React Native (Expo) app via EAS builds with push notifications, real-time chat, and map directions; Dockerized microservices on Hetzner via Coolify with Sentry + Clarity.

### Freelance Full-Stack Developer · _Global clients · Remote_

**Jun 2023 - Jun 2025**

- Delivered 6+ production applications for clients in the UK, USA, Netherlands, Japan, and Saudi Arabia, with a **5/5 rating on every client project** ([Fiverr](https://www.fiverr.com/mohamedouterbah)).
- **[Cribbix](https://cribbix.com/) (UK):** Rightmove-style property platform (V1 & V2): interactive map search with instant filtering, client/agency/admin dashboards, real-time chat, AI property descriptions, Stripe tenancy payments, Redis caching, and independent DigitalOcean VPS deployment.
- **MLC SharePoint to Zoho sync:** Zero-framework Cloudflare Worker watching a SharePoint contract library and auto-updating Zoho CRM (NDA/MSA detection) with SendGrid notifications.

### Web Development Intern · _Exclusive Labs · Remote_

**Sep - Dec 2024**

- Created a course management system (Next.js + Express) with role-based auth for students, instructors, and admins.

## Founder Projects

### DzStore · _Shopify-equivalent E-commerce SaaS · Co-Founder & Lead Engineer · [dzstore.org](https://dzstore.org/en)_

**Jun 2025 - Present**

- **Traction:** Reached 1,000+ active stores, 2,100+ products, 550+ orders, and 5.5M+ DZD in merchant sales (GMV) in the first 3 months since the May 2026 launch, on 47,000+ visitors and 166,000+ pageviews, still adding ~120 new stores a week, 100% organic with zero ad spend, and **20+ merchants upgraded to paid PRO plans, acquired through SEO alone**.
- **Quality signals:** 4.7/5 average across 73 in-app merchant survey responses; 99.95% uptime over the last 90 days with zero recorded incidents (public status page).
- **Organic SEO engine:** Owned technical SEO end-to-end: 15,000+ pages indexed, 600+ valid product snippets & merchant listings (Google Shopping rich results), and breadcrumb/FAQ structured data, now pulling 3,000+ Google Search clicks and 100,000+ impressions a month, and effectively every merchant signup (search out-refers social 12:1 on the signup funnel).
- **Engineering:** Led nearly all engineering across the stack: multi-tenant subdomain-per-store routing with Caddy on-demand TLS for custom domains, a 44-model Prisma/PostgreSQL schema, drag-and-drop storefront builder, online card payments (Chargily Pay) with HMAC-verified webhooks, per-region shipping rates plus a carrier layer wrapping 70 Algerian delivery companies behind 5 API adapters (tariff import, shipment creation, tracking), abandoned-cart lifecycle emails (Resend), affiliate payouts, AI product descriptions, and Arabic/French RTL; self-hosted on Hetzner via Docker with zero-downtime deploys and Upstash Redis.
- **Cost engineering:** Migrated the production PostgreSQL from Neon to Supabase with pg_dump/pg_restore at zero downtime, and made the image-optimizer cache survive deploys, cutting the database bill by 50%+ and retiring ~17 GB/month of Cloudinary egress.

### Fibble · _Multiplayer Party Game (Web + Discord) · Co-Founder & Full-Stack Engineer · [fibble.io](https://fibble.io/)_

**Sep 2025 - Present**

- **Product:** Free real-time bluffing trivia game (2-8 players, no download) playable in the browser and as a Discord Activity, with a premium subscription tier.
- **Traction:** 3,000+ players in 80+ countries across 2,200+ games played in the first 3 months since the May 2026 launch, entirely organic with zero ad spend, converting its first paying subscribers on both billing rails.
- **Engineering:** Serverless real-time multiplayer: Postgres as the source of truth with Ably pub/sub fan-out, server-authoritative phase deadlines, and HMAC anti-spoofing action tokens; plus Discord Activity integration, Paddle + Discord SKU billing, and a full admin analytics panel (player geo, sessions, retention, moderation).

## Education & Awards

**Master's in Computer Science**, AI & Data Science specialization, ESTIN, Algeria · _Expected 2027_

- **Hackathon Winner 2024:** 1st place, competitive ideathon · 5+ hackathons participated.
- **Open-source contributor:** [Munia](https://github.com/leandronorcio/munia), a Next.js social platform with 300+ GitHub stars (auth-aware navigation and UI logic).

## Technical Skills

- **Frontend:** React, Next.js (App & Pages Router), TypeScript, JavaScript ES6+, HTML5, CSS3, Tailwind CSS, Redux Toolkit
- **Mobile:** React Native (Expo) for iOS & Android: EAS builds, push notifications, biometric auth, RTL i18n
- **Backend:** Node.js, NestJS, Express.js, FastAPI, Python, REST APIs, WebSockets, Ably, RBAC
- **Databases:** PostgreSQL, MySQL, SQL, Prisma ORM, Supabase, Redis, MongoDB
- **Cloud:** Google Cloud (BigQuery), Microsoft Azure, Cloudflare, Hetzner, DigitalOcean
- **DevOps & Practices:** Docker, Git, GitHub Actions, CI/CD, Agile, Coolify, Caddy/Nginx, PM2, Claude Code (AI-assisted dev)
- **Integrations & AI:** Stripe, Paddle, online payments (Chargily Pay), OAuth2 (PKCE), Apple/Google Auth, Sentry, SendGrid/Resend, PostHog, RAG systems, LangChain, NL-to-SQL, Celery, real-time collaboration
