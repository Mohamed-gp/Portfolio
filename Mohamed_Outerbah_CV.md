# Mohamed Outerbah

**Full-Stack Engineer** · Next.js · React · React Native · Node.js · Express · Python
Algeria (Remote) · Open to Contracts & Full-Time Remote
[Email](mailto:mohamedterba6@gmail.com) · [Portfolio](https://mohamedouterbah.vercel.app) · [GitHub](https://github.com/Mohamed-gp) · [LinkedIn](https://www.linkedin.com/in/mohamedouterbah)

---

Full-Stack Engineer with 3+ years shipping production-grade web & mobile platforms for clients across the USA, UK, Netherlands, Japan, and Saudi Arabia. Core engineer on an AI analytics SaaS (Analytics Depot), full-stack engineer on a live iOS/Android logistics marketplace (HaulHub), and co-founder of a pre-revenue e-commerce SaaS (DzStore) that reached 151 stores in 2 months on pure organic growth. 5/5 rating across every delivered project.

## Experience

### Analytics Depot — Full-Stack Engineer · *AI SaaS, USA · Remote*
**Apr 2025 – Present**
- Core engineer (and 2nd-highest contributor, **120+ commits**) on a live AI analytics platform, working across a ~10-person cross-functional team (AI/ML, LLMOps, NL-to-SQL, infra).
- **Dashboards & reporting:** Built the custom drag-and-drop dashboard builder and the shareable reporting system — password-protected and embed-mode reports with one-click PDF/PowerPoint export.
- **Real-time collaboration:** Shipped WebSocket session sync, live user-presence, and a collaborative chat sidebar (with production-grade `wss://` handling), plus a natural-language-to-SQL query interface.
- **Data connectors:** Built an OAuth2 connector platform with encrypted credential storage spanning Google services, SQL databases, cloud warehouses (BigQuery), Google Sheets, and Slack.
- **AI / RAG:** Delivered RAG document-intelligence Q&A with resilient streaming, soft-delete tombstones for uploaded files, multi-format ingestion (CSV/PDF/Excel/images), and a Gemini model layer with fallback.
- **Async & scale:** Implemented Redis caching and Celery task queues for async jobs, scheduled reports, a threshold-alert builder, and data-source auto-refresh.
- **Auth & DevOps:** Built RBAC across Admin/Expert/User roles with Apple + Google auth and rate limiting; cut deploy time from ~30 min to under 5 min; hardened CI/CD (GitHub Actions, PM2), idempotent Alembic migrations with fail-on-error rollback, and Sentry error/performance observability.
- **Mobile:** Initialized the companion React Native app — dashboard viewing, push notifications, biometric auth, and offline caching.

### HaulHub — Full-Stack Engineer (Contract) · *Logistics Marketplace, Netherlands · Remote*
**Jun 2025 – May 2026**
- Full-stack engineer (**380+ commits** across backend, mobile, and web) on a production Uber-style logistics marketplace — live on iOS & Android in the Netherlands with 12+ service categories (truck rentals, skilled labor, agricultural equipment, furniture moving).
- **Multi-role architecture:** Built a role-based permission system across 5+ user types — Admin (with sub-roles), End Users, Service Providers (freelancers & companies), and Company Employees — each with dedicated dashboards and scopes.
- **Core services:** Built the platform's two most complex services end-to-end: booking flows, real-time tracking, provider matching, and status management.
- **Payments:** Integrated Stripe with hardened raw-body webhook signature verification — on-demand payments, subscriptions, and provider payouts.
- **Compliance & fleet:** Built fleet-company and employee flows, skilled-labor approval, vehicle/image management, and Dutch KVK business-registry lookup.
- **Mobile:** Shipped the React Native (Expo) app to the App Store via EAS builds, with push notifications, full RTL internationalization (English/Arabic/Urdu/Dutch), real-time chat, and map directions.
- **Infra:** Deployed Dockerized microservices on Hetzner via Coolify; hardened CORS; integrated Sentry and Microsoft Clarity analytics.

### Freelance — Full-Stack Developer · *Global · Remote*
**2022 – Present**
- Delivered 6+ production applications for clients in the UK, USA, Netherlands, Japan, and Saudi Arabia. **5/5 Fiverr rating, Level 1 Seller.**
- **Cribbix (UK):** Built a Rightmove-style property rental & sales platform (V1 & V2) — interactive map search with full filtering, client/agency/admin dashboards, renter profiles, real-time chat, AI-generated property descriptions, and Stripe tenancy payments. Added Redis caching, rate limiting, and reCAPTCHA v3; migrated to Next.js 15 + React 18 and ran full VPS deployment on DigitalOcean independently.
- **MLC SharePoint to Zoho CRM Sync (2026):** Built a zero-framework Cloudflare Worker that watches a SharePoint contract library and auto-updates matching Zoho CRM accounts (NDA/MSA detection), emailing account managers via SendGrid — with a deliberate "never auto-fill legal dates" safeguard.

### Exclusive Labs — Web Development Intern · *Remote*
**Sep – Dec 2024**
- Built a course management system (Next.js + Express) with role-based auth for students, instructors, and admins.

## Projects

**DzStore — Shopify-equivalent e-commerce SaaS** · Co-Founder & Full-Stack Engineer
- Co-founded a multi-tenant e-commerce SaaS and worked across its full stack — database, backend, and frontend. Reached **151 active stores, 253 users, and 190+ products in its first 2 months — 100% organic SEO, zero ad spend** (pre-revenue).
- **Multi-tenancy & infra:** Subdomain-per-store routing (Next.js middleware) with **Caddy on-demand TLS** for merchant custom domains; a 38-model Prisma/PostgreSQL schema; self-hosted on Hetzner via Docker with a cron sidecar and Upstash Redis caching/rate-limiting.
- **Commerce:** Drag-and-drop storefront builder with themes, product/variant management, per-region (wilaya/commune) shipping, discount codes, abandoned-cart recovery with lifecycle emails (Resend), and an affiliate system with payouts.
- **Platform:** Better-Auth with email verification, AI product-listing & description generation, customer fraud flagging, merchant SEO controls, full Arabic/French RTL (next-intl), and self-hosted Umami analytics.

**Khdame — CRM & marketplace for retail stores** · Co-Founder & Full-Stack Developer
- Co-founded a CRM suite for small/medium retail: desktop web app, Android app (Expo), and an integrated marketplace with product listings, price filters, and region-based search.
- Shipped real-time push notifications, WebSocket infrastructure, inventory management, a statistics dashboard with calendar view, OTP email verification, Google Auth, store image uploads, and Play Store submission.

**Munia — Open-source social media** · Contributor · *300+ GitHub stars*
- Contributed auth-aware navigation and dynamic UI logic to a Next.js open-source project.

## Education

**Master's in Computer Science** — ESTIN, Algeria · *Expected 2027*

- **Hackathon Winner 2024** — 1st place, competitive ideathon · 5+ hackathons participated.

## Technical Skills

- **Frontend:** React, Next.js (App & Pages Router), TypeScript, JavaScript ES6+, Tailwind CSS, Redux Toolkit
- **Mobile:** React Native (Expo) — iOS & Android, EAS builds, push notifications, biometric auth, RTL i18n
- **Backend:** Node.js, NestJS, Express.js, FastAPI, Python, REST APIs, WebSockets, RBAC
- **Databases:** PostgreSQL, Prisma ORM, Redis, MongoDB
- **DevOps:** Docker, GitHub Actions, CI/CD, VPS (Hetzner, DigitalOcean), Coolify, Caddy/Nginx, PM2, Cloudflare Workers
- **Integrations:** Stripe, OAuth2, Apple/Google Auth, Zoho CRM, SharePoint, Google Maps, reCAPTCHA, Turnstile, SendGrid/Resend, Sentry, Umami
- **AI / SaaS:** RAG systems, LangChain, NL-to-SQL, Gemini, Celery task queues, real-time collaboration, drag-and-drop builders
