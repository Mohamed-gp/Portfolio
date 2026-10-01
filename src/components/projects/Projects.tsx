"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Smartphone,
  Users,
  ExternalLink,
  Code,
  Target,
  Check,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

interface Project {
  title: string;
  client?: string;
  company?: string;
  type: string | string[];
  url: string;
  github?: string;
  video?: string;
  image: string;
  gallery?: { src: string; caption: string }[];
  galleryTitle?: string;
  phoneShots?: { src: string; caption: string }[];
  phoneShotsTitle?: string;
  flowVideo?: { src: string; title: string; caption: string };
  tagline: string;
  description: string | string[];
  features: string[];
  hardest: string;
  status: string;
  highlight?: string;
  role: string;
  technologies: string[];
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Ordered by strength: Analytics Depot → DzStore → HaulHub
  const projects: Project[] = [
    {
      title: "Analytics Depot — AI-Powered Analytics Platform",
      client: "Analytics Depot",
      company: "Analytics Depot",
      type: "Web Application",
      url: "https://analyticsdepot.com/",
      image: "/projects/analytics-depot/hero-v3.webp",
      galleryTitle: "The product, end to end",
      gallery: [
        {
          src: "/projects/analytics-depot/app-01-home-workspaces.webp",
          caption:
            "1. Sign in and pick a workspace. Each one (Real Estate, Finance, Marketing, E-commerce, Management) primes the agent with its own domain context.",
        },
        {
          src: "/projects/analytics-depot/app-04-integrations.webp",
          caption:
            "2. Connect a source: the OAuth2 connector platform I built end to end, spanning warehouses (BigQuery, Snowflake, Databricks, Redshift), databases, and SaaS tools.",
        },
        {
          src: "/projects/analytics-depot/app-07-connector-instance.webp",
          caption:
            "Each connection is a managed instance: pick the sheet, sync on a schedule, disconnect, with live active and error counts above.",
        },
        {
          src: "/projects/analytics-depot/app-spreadsheet-view.webp",
          caption:
            "3. The data lands in a built-in spreadsheet over 9,000+ rows, with an AI formula bar and CSV/Excel export. Identifier columns blurred here.",
        },
        {
          src: "/projects/analytics-depot/app-02-agent-console.webp",
          caption:
            "4. The agent console: conversation history per workspace, suggested queries, and a live rail showing worker status, data sync, and supported file types.",
        },
        {
          src: "/projects/analytics-depot/app-03-live-analysis.webp",
          caption:
            "5. A real answer: the agent researches, cites its sources inline, renders the breakdown, and offers follow-up skills (what drove this, forecast, find outliers).",
        },
        {
          src: "/projects/analytics-depot/app-05-auto-dashboard-live.webp",
          caption:
            "6. The dashboard builds itself from the file: KPI tiles with period-over-period deltas plus generated time-series and breakdown charts, all editable widgets.",
        },
        {
          src: "/projects/analytics-depot/app-chat-analysis.webp",
          caption:
            "7. Charts are interactive Plotly, with the Data Explorer profiling every column of the dataset alongside the answer.",
        },
        {
          src: "/projects/analytics-depot/app-06-data-explorer.webp",
          caption:
            "The Data Explorer profiles the file as it lands: row and column counts, a quality score, KPI sparklines, then every column typed with its missing rate, cardinality, and distribution.",
        },
        {
          src: "/projects/analytics-depot/app-08-full-workspace.webp",
          caption:
            "The whole workspace in one frame: conversation history, the answer, the profiler, and the toolbar for upload, data sources, charts, export, and sharing.",
        },
        {
          src: "/projects/analytics-depot/site-04-collaboration.webp",
          caption:
            "8. Share it: role-based access and always-current report links, on the WebSocket presence and collaboration layer.",
        },
        {
          src: "/projects/analytics-depot/site-01-comparison.webp",
          caption: "The marketing site I rebuilt from scratch: positioning.",
        },
        {
          src: "/projects/analytics-depot/site-03-features.webp",
          caption:
            "And its feature grid: connectors, query speed, predictive insights, per-industry context.",
        },
      ],
      tagline: "AI analytics SaaS: connect your data, ask in plain English, get answers and dashboards back.",
      description: [
        "Frontend lead and 2nd-highest contributor on a ~10-person team. I built most of the product: five AI workspaces, dashboards, reporting, and the realtime features.",
        "14 data connectors (BigQuery, Snowflake, GA4, Slack and more) with OAuth2 and scheduled syncs.",
        "RAG over CSV, PDF, Excel and images, with streaming answers and cited sources.",
        "Eliminated a 1-3 minute outage on every deploy and cut deploys from ~30 minutes to under 5.",
      ],
      features: [
        "Ask in plain English, get SQL-backed answers and charts",
        "Dashboards that build themselves from an uploaded file",
        "14 one-click data connectors",
      ],
      hardest:
        "Keeping auto-generated charts honest. A wrong aggregation or a misread date column gives you a dashboard that looks right and isn't. I caught these with golden test workbooks and rewrote the rules behind them.",
      status: "Live",
      role: "Full-Stack Engineer (Frontend Lead) · team of ~10",
      technologies: [
        "Next.js",
        "FastAPI",
        "React Native",
        "WebSockets",
        "Redis",
        "Celery",
        "RAG",
        "LangChain",
        "Sentry",
      ],
    },
    {
      title: "DzStore — E-commerce SaaS Platform",
      type: ["Web Application", "Mobile Application"],
      url: "https://dzstore.org/en",
      image: "/projects/dzstore/hero-v3.webp",
      galleryTitle: "Storefront themes and the merchant dashboard",
      gallery: [
        {
          src: "/projects/dzstore/v3-dashboard.webp",
          caption:
            "The merchant dashboard: revenue trend, orders, and the delivery funnel from pending to delivered.",
        },
        {
          src: "/projects/dzstore/v3-theme-atlas.webp",
          caption:
            "Atlas, the default theme: clean and editorial, with checkout kept fast.",
        },
        {
          src: "/projects/dzstore/v3-theme-souk.webp",
          caption:
            "Souk: a dense theme for large catalogues, with offers and best sellers up front.",
        },
        {
          src: "/projects/dzstore/v3-theme-noir.webp",
          caption: "Noir: a dark, premium theme for fashion and luxury stores.",
        },
        {
          src: "/projects/dzstore/v3-theme-vitrine.webp",
          caption:
            "Vitrine: a lookbook theme with big imagery and refined type.",
        },
        {
          src: "/projects/dzstore/v3-theme-epure.webp",
          caption:
            "Épure: a minimal product page built around one hero product and a one-tap order.",
        },
        {
          src: "/projects/dzstore/v3-theme-picker.webp",
          caption:
            "Merchants switch themes in one click, or design their own pages in the builder.",
        },
        {
          src: "/projects/dzstore/v3-orders.webp",
          caption:
            "Orders: every status at a glance, cash collected on delivery, and inline status changes.",
        },
        {
          src: "/projects/dzstore/v3-products.webp",
          caption:
            "The catalogue: stock, sales, compare-at pricing, and bulk import.",
        },
        {
          src: "/projects/dzstore/v3-carriers.webp",
          caption:
            "100+ Algerian delivery carriers, each connected from one page.",
        },
      ],
      phoneShotsTitle: "The merchant app (React Native + Expo)",
      phoneShots: [
        {
          src: "/projects/dzstore/v3-app-01-home.webp",
          caption: "Home: today's orders, pending count, and month revenue",
        },
        {
          src: "/projects/dzstore/v3-app-02-orders.webp",
          caption: "Orders with status filters, one tap to call or update",
        },
        {
          src: "/projects/dzstore/v3-app-03-order-detail.webp",
          caption: "Call the customer or send to a carrier in one tap",
        },
        {
          src: "/projects/dzstore/v3-app-04-products.webp",
          caption: "Catalogue with live stock and compare-at pricing",
        },
        {
          src: "/projects/dzstore/v3-app-05-product-edit.webp",
          caption: "Edit a product from the phone, with AI descriptions",
        },
        {
          src: "/projects/dzstore/v3-app-06-customers.webp",
          caption: "Customer book with VIP tags and lifetime spend",
        },
        {
          src: "/projects/dzstore/v3-app-07-abandoned.webp",
          caption: "Abandoned carts, recovered over WhatsApp or a call",
        },
        {
          src: "/projects/dzstore/v3-app-09-settings.webp",
          caption: "Trilingual by design: Arabic (RTL), French, English",
        },
      ],
      tagline: "A Shopify-style store builder: 2,000+ merchants and 70+ paying subscribers in 4 months, with zero ad spend.",
      description: [
        "Founder and lead engineer. 2,000+ merchants, 5,000+ products, 13M+ DZD (~$100K) in delivered sales and 70+ paid Pro subscriptions within 4 months of launch.",
        "Doubled weekly orders (+127%) by shipping one-click Buy Now on every storefront.",
        "One Next.js app serves every store by host header, with each query scoped to the owning store and row-level security as a second wall.",
        "Cut marketplace page weight by 80% and response time by 64% by moving search and pagination server-side; the slowest SQL query now runs 4x faster.",
        "Multi-tenant storefronts on custom domains, payments, themes, and 100+ delivery carriers behind 6 reusable adapters.",
        "React Native merchant app for iOS and Android, Arabic RTL included.",
        "10K+ Google Search clicks (4K+ in the last 28 days), up 780% in 90 days, and 40K+ monthly visits, all organic.",
      ],
      features: [
        "Launch a store in seconds, no code",
        "Own subdomain or custom domain with automatic HTTPS",
        "Cash on delivery, card payments, 100+ carriers",
      ],
      hardest:
        "Multi-tenancy: one Next.js app serves every store by reading the host header, every query is scoped to the store that owns the data, and a least-privilege database role with row-level security is a second wall, so no merchant can ever see another's orders. Custom domains get HTTPS automatically through Caddy on-demand TLS.",
      status: "Live",
      highlight: "2,000+ merchants · 70+ paying in 4 months",
      role: "Founder & Lead Engineer",
      technologies: [
        "Next.js",
        "React Native (Expo)",
        "PostgreSQL",
        "Prisma",
        "Supabase",
        "TypeScript",
        "Docker",
        "Caddy",
        "Umami",
        "Technical SEO",
      ],
    },
    {
      title: "HaulHub — Logistics Marketplace (iOS & Android)",
      client: "HaulHub",
      type: ["Web Application", "Mobile Application"],
      url: "https://haulhub.app/",
      image: "/projects/haulhub/hero-v2.webp",
      flowVideo: {
        src: "/projects/haulhub/request-to-accept-flow.mp4",
        title: "The live cycle, in 19 seconds",
        caption:
          "Recorded against the running backend: the request goes out, three providers bid against each other (€483 undercut to €443, then €459 for a faster pickup), the customer accepts and lands in Stripe checkout. This is only the bidding cycle, the full journey is in the screens below.",
      },
      phoneShotsTitle:
        "Every side of the marketplace: customer, freelance provider, and fleet companies in both verticals",
      phoneShots: [
        {
          src: "/projects/haulhub/app-01-languages.webp",
          caption: "5 languages with full RTL (EN/NL/AR/UR/DE)",
        },
        {
          src: "/projects/haulhub/app-02-customer-home.webp",
          caption: "Customer home: pick a service and go",
        },
        {
          src: "/projects/haulhub/app-03-service-catalogue-v2.webp",
          caption: "12 service categories, live and upcoming",
        },
        {
          src: "/projects/haulhub/app-04-pickup-map.webp",
          caption: "Pickup picker with map search and geocoding",
        },
        {
          src: "/projects/haulhub/app-05-vehicle-types-v2.webp",
          caption: "Vehicle catalogue with real capacities",
        },
        {
          src: "/projects/haulhub/app-06-request-form.webp",
          caption: "Load details: material, weight, drivers, timing",
        },
        {
          src: "/projects/haulhub/app-07-destination-recipient.webp",
          caption: "Per-destination recipient for proof of delivery",
        },
        {
          src: "/projects/haulhub/app-08-confirm-request.webp",
          caption: "Review before the request goes out",
        },
        {
          src: "/projects/haulhub/app-09-competing-offer-1.webp",
          caption: "Offer 1 of 3: providers bid, each offer expires",
        },
        {
          src: "/projects/haulhub/app-10-competing-offer-2.webp",
          caption: "A rival bid undercuts on price and pickup time",
        },
        {
          src: "/projects/haulhub/app-11-request-accepted.webp",
          caption: "Accepted: provider assigned at the agreed price",
        },
        {
          src: "/projects/haulhub/app-12-request-details.webp",
          caption: "Request detail with route and live status",
        },
        {
          src: "/projects/haulhub/app-13-provider-verification.webp",
          caption: "Provider side: document verification gate",
        },
        {
          src: "/projects/haulhub/app-14-provider-dashboard.webp",
          caption: "Provider dashboard: online toggle and earnings",
        },
        {
          src: "/projects/haulhub/app-15-provider-history.webp",
          caption: "Provider job history by status",
        },
        {
          src: "/projects/haulhub/app-16-fleet-dashboard.webp",
          caption: "Fleet company dashboard: balance, active drivers and jobs",
        },
        {
          src: "/projects/haulhub/app-17-fleet-incoming-requests.webp",
          caption: "Marketplace jobs arriving for the company to bid on",
        },
        {
          src: "/projects/haulhub/app-18-fleet-job-detail.webp",
          caption: "Job detail: route, cargo, and the recipient to deliver to",
        },
        {
          src: "/projects/haulhub/app-19-fleet-bid-and-assign.webp",
          caption: "Bid a price and assign the job to a specific employee",
        },
        {
          src: "/projects/haulhub/app-20-fleet-company-profile-v2.webp",
          caption: "Company profile with the request radius that gates matching",
        },
        {
          src: "/projects/haulhub/app-21-fleet-drivers-v2.webp",
          caption: "The driver roster: four drivers with status and rating each",
        },
        {
          src: "/projects/haulhub/app-22-fleet-add-driver.webp",
          caption: "Onboarding an employee, with the company-employee role",
        },
        {
          src: "/projects/haulhub/app-23-fleet-vehicles-v2.webp",
          caption: "The vehicle fleet, filtered live by available, in use, maintenance",
        },
        {
          src: "/projects/haulhub/app-24-fleet-add-vehicle.webp",
          caption: "Adding a vehicle: type, plate, load capacity, load type",
        },
        {
          src: "/projects/haulhub/app-25-labor-company-dashboard.webp",
          caption:
            "The same company role in skilled labor: workers and jobs, not drivers and trips",
        },
        {
          src: "/projects/haulhub/app-26-labor-company-profile-v2.webp",
          caption: "A labor company manages workers only, with no vehicle fleet",
        },
        {
          src: "/projects/haulhub/app-27-labor-add-worker.webp",
          caption: "Onboarding a worker into the company under the same role",
        },
        {
          src: "/projects/haulhub/app-28-labor-workers.webp",
          caption:
            "The worker roster, scored on jobs completed rather than trips driven",
        },
        {
          src: "/projects/haulhub/app-29-employee-home.webp",
          caption:
            "The fourth role: a company employee sees only their own jobs and stats, with no fleet to manage",
        },
        {
          src: "/projects/haulhub/app-30-employee-assigned-job.webp",
          caption:
            "The company assigns a job and it lands on that employee's phone",
        },
        {
          src: "/projects/haulhub/app-31-employee-job-route.webp",
          caption: "The driver's brief: routed pickup to drop-off with an ETA",
        },
        {
          src: "/projects/haulhub/app-32-employee-assigned-by-company.webp",
          caption:
            "\"Assigned by your company\": the employee accepts nothing, they just start the trip",
        },
        {
          src: "/projects/haulhub/app-33-employee-trip-in-progress.webp",
          caption:
            "Trip in progress: live route, chat with the customer, then confirm each destination",
        },
      ],
      tagline: "Uber-style logistics marketplace, live on iOS and Android in the Netherlands.",
      description: [
        "Core engineer across backend, web and mobile: 5+ user roles, 12 service categories, 5 languages with full RTL.",
        "Engineered the dispatch system: requests go to the nearest providers, who compete on price and pickup time, with live tracking and Stripe escrow.",
        "Opened the platform to B2B fleets: companies manage their own drivers and vehicles and get payouts split automatically.",
      ],
      features: [
        "Post a job, get competing offers in seconds",
        "Live driver tracking and proof of delivery",
        "Fleet dashboards for companies",
      ],
      hardest:
        "Real-time dispatch: matching a request to nearby providers, running a live bidding round, and holding payment in escrow across an 11-state lifecycle.",
      status: "Live on iOS & Android",
      role: "Full-Stack Engineer",
      technologies: [
        "Next.js",
        "NestJS",
        "React Native",
        "Expo",
        "Stripe",
        "Docker",
        "PostgreSQL",
        "Coolify",
      ],
    },
    // Fibble is hidden for now (kept for later).
    // {
    //   title: "Fibble — Multiplayer Trivia Game (Web & Discord)",
    //   country: "Global",
    //   flag: "🌍",
    //   type: "Web Application",
    //   url: "https://fibble.io/",
    //   image: "/projects/fibble/hero-v3.webp",
    //   galleryTitle: "Inside the game",
    //   gallery: [
    //     {
    //       src: "/projects/fibble/lobby-chat.webp",
    //       caption:
    //         "The lobby: real players and bots in one room, chatting live while the host sets the rules.",
    //     },
    //     {
    //       src: "/projects/fibble/round-write-answer.webp",
    //       caption:
    //         "A round in play: everyone writes a fake answer against a server-authoritative countdown.",
    //     },
    //     {
    //       src: "/projects/fibble/game-truth-reveal.webp",
    //       caption:
    //         "End of a round: the real answer revealed among the players' fakes, points for spotting it and for fooling everyone else.",
    //     },
    //     {
    //       src: "/projects/fibble/room-presets.webp",
    //       caption:
    //         "Room setup: game modes from Classic to Elimination, 2-8 players plus bots.",
    //     },
    //     {
    //       src: "/projects/fibble/room-categories.webp",
    //       caption:
    //         "The deck picker: free and premium categories, from flags to Valorant.",
    //     },
    //   ],
    //   phoneShotsTitle: "The same game on a phone, in the browser",
    //   phoneShots: [
    //     {
    //       src: "/projects/fibble/phone-01-guest-entry.webp",
    //       caption: "Play as a guest: no app, no download, no account",
    //     },
    //     {
    //       src: "/projects/fibble/phone-02-vote.webp",
    //       caption: "Voting: spot the real answer among the players' fakes",
    //     },
    //     {
    //       src: "/projects/fibble/phone-03-standings.webp",
    //       caption: "Standings after every round, players and bots ranked",
    //     },
    //   ],
    //   tagline: "Bluffing trivia game for the browser and Discord. 3,000+ players in 80+ countries.",
    //   description: [
    //     "Co-founder. Real-time multiplayer with no game server: Postgres as the source of truth plus Ably pub/sub.",
    //     "Runs inside Discord as an Activity, with Paddle and Discord subscriptions.",
    //   ],
    //   features: [
    //     "Write fake answers, fool your friends",
    //     "Browser or Discord, nothing to install",
    //     "Custom question packs and bots",
    //   ],
    //   hardest:
    //     "Keeping game state in sync on serverless: server-owned timers, idempotent phase changes, and signed action tokens so players can't cheat.",
    //   status: "Live · 3,000+ Players",
    //   role: "Co-Founder & Full-Stack Engineer",
    //   technologies: [
    //     "Next.js",
    //     "TypeScript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "Ably",
    //     "Discord SDK",
    //     "Paddle",
    //     "Docker",
    //   ],
    // },
  ];

  const isWeb = (p: Project) =>
    p.type === "Web Application" ||
    (Array.isArray(p.type) && p.type.includes("Web Application"));
  const isMobile = (p: Project) =>
    Array.isArray(p.type)
      ? p.type.includes("Mobile Application")
      : p.type === "Mobile Application";

  const getProjectsForTab = (tab: string) => {
    if (tab === "web") return projects.filter(isWeb);
    if (tab === "mobile") return projects.filter(isMobile);
    return projects;
  };

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20"
    >
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16 max-w-4xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Projects
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-lg mx-auto grid-cols-3 h-12 p-1 bg-muted/50 backdrop-blur-sm">
                <TabsTrigger
                  value="all"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 text-sm font-medium"
                >
                  <Users className="mr-1 h-4 w-4" />
                  All
                </TabsTrigger>
                <TabsTrigger
                  value="web"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 text-sm font-medium"
                >
                  <Globe className="mr-1 h-4 w-4" />
                  Web
                </TabsTrigger>
                <TabsTrigger
                  value="mobile"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 text-sm font-medium"
                >
                  <Smartphone className="mr-1 h-4 w-4" />
                  Mobile
                </TabsTrigger>
              </TabsList>
            </div>

            {["all", "web", "mobile"].map((tab) => (
              <TabsContent key={tab} value={tab} className="mt-0">
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
                  {getProjectsForTab(tab).map((project) => (
                    <ProjectCard
                      key={project.title}
                      project={project}
                      onClick={() => handleProjectClick(project)}
                    />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Project Details Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                {selectedProject?.title}
              </DialogTitle>
              <DialogDescription className="text-base">
                {selectedProject?.role}
              </DialogDescription>
            </DialogHeader>

            {selectedProject && (
              <div className="space-y-6">
                {selectedProject.video ? (
                  <div
                    className="relative w-full rounded-lg overflow-hidden bg-muted"
                    style={{ aspectRatio: "16/9" }}
                  >
                    <video
                      src={selectedProject.video}
                      controls
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-contain rounded-lg"
                    />
                  </div>
                ) : (
                  selectedProject.image && (
                    <div
                      className="relative w-full rounded-lg overflow-hidden"
                      style={{ aspectRatio: "2/1" }}
                    >
                      <Image
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 700px"
                        quality={90}
                        className="object-cover"
                      />
                    </div>
                  )
                )}

                {/* Stack badges (lead) */}
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="px-3 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Hardest problem */}
                <div className="rounded-lg border-l-2 border-primary bg-primary/5 p-4">
                  <h3 className="font-semibold text-sm mb-1 flex items-center gap-2 text-primary">
                    <Target className="h-4 w-4" />
                    Hardest problem I solved
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {selectedProject.hardest}
                  </p>
                </div>

                {/* Key features */}
                <div>
                  <h3 className="font-semibold text-lg mb-2">Key features</h3>
                  <ul className="space-y-1.5">
                    {selectedProject.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Description */}
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    What I did
                  </h3>
                  <ul className="space-y-1.5">
                    {(Array.isArray(selectedProject.description)
                      ? selectedProject.description
                      : [selectedProject.description]
                    ).map((line) => (
                      <li
                        key={line.slice(0, 40)}
                        className="flex gap-2 text-sm text-muted-foreground"
                      >
                        <span
                          className="mt-[0.45rem] h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0"
                          aria-hidden
                        />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* In-app screenshots */}
                {selectedProject.gallery && (
                  <div>
                    <h3 className="font-semibold text-lg mb-3">
                      {selectedProject.galleryTitle ?? "Inside the app"}
                    </h3>
                    <div className="space-y-5">
                      {selectedProject.gallery.map((shot) => (
                        <figure key={shot.src}>
                          <div
                            className="relative w-full rounded-lg overflow-hidden border border-primary/10"
                            style={{ aspectRatio: "1.96" }}
                          >
                            <Image
                              src={shot.src}
                              alt={shot.caption}
                              fill
                              sizes="(max-width: 768px) 100vw, 700px"
                              quality={90}
                              className="object-cover"
                            />
                          </div>
                          <figcaption className="text-xs text-muted-foreground mt-1.5">
                            {shot.caption}
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  </div>
                )}

                {/* End-to-end flow video */}
                {selectedProject.flowVideo && (
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      {selectedProject.flowVideo.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {selectedProject.flowVideo.caption}
                    </p>
                    <div className="flex justify-center">
                      <video
                        src={selectedProject.flowVideo.src}
                        controls
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="rounded-xl border border-primary/10 bg-muted max-h-[70vh] w-auto"
                      />
                    </div>
                  </div>
                )}

                {/* Mobile app screenshots */}
                {selectedProject.phoneShots && (
                  <div>
                    <h3 className="font-semibold text-lg mb-3">
                      {selectedProject.phoneShotsTitle ?? "The mobile app"}
                    </h3>
                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                      {selectedProject.phoneShots.map((shot) => (
                        <figure key={shot.src}>
                          <div
                            className="relative w-full rounded-lg overflow-hidden border border-primary/10 bg-muted"
                            style={{ aspectRatio: "0.455" }}
                          >
                            <Image
                              src={shot.src}
                              alt={shot.caption}
                              fill
                              sizes="(max-width: 768px) 33vw, 230px"
                              quality={90}
                              className="object-cover"
                            />
                          </div>
                          <figcaption className="text-xs text-muted-foreground mt-1.5">
                            {shot.caption}
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap gap-3">
                  <Button asChild className="w-full sm:w-auto" size="lg">
                    <a
                      href={selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Live Project
                    </a>
                  </Button>
                  {selectedProject.github && (
                    <Button
                      asChild
                      variant="outline"
                      className="w-full sm:w-auto"
                      size="lg"
                    >
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Code className="mr-2 h-4 w-4" />
                        View Source Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  const isWebProject =
    project.type === "Web Application" ||
    (Array.isArray(project.type) && project.type.includes("Web Application"));
  const isMobileProject = Array.isArray(project.type)
    ? project.type.includes("Mobile Application")
    : project.type === "Mobile Application";

  return (
    <Card className="overflow-hidden group border border-primary/10 bg-card shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-primary/20 hover:-translate-y-1 h-full flex flex-col">
      {/* Project Image */}
      {project.image && (
        <button
          onClick={onClick}
          className="relative w-full h-44 overflow-hidden bg-muted text-left"
          aria-label={`Open details for ${project.title}`}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            quality={85}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </button>
      )}

      <div className="p-5 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="text-lg font-bold leading-tight">{project.title}</h3>
          <p className="text-sm text-primary font-medium mt-0.5">
            {project.role}
          </p>
          {project.highlight && (
            <p className="mt-2 inline-flex items-center rounded-full bg-green-600/10 px-2.5 py-0.5 text-xs font-semibold text-green-700 dark:text-green-400">
              {project.highlight}
            </p>
          )}
        </div>

        {/* Stack badges — lead with these */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs px-2 py-0.5 font-medium"
            >
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 5 && (
            <button
              onClick={onClick}
              aria-label={`Show all ${project.technologies.length} technologies for ${project.title}`}
            >
              <Badge
                variant="outline"
                className="text-xs px-2 py-0.5 cursor-pointer hover:bg-primary/10 hover:border-primary/40 transition-colors"
              >
                +{project.technologies.length - 5}
              </Badge>
            </button>
          )}
        </div>

        <p className="text-sm text-muted-foreground">{project.tagline}</p>

        {/* What the app does */}
        <ul className="space-y-1">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-xs text-muted-foreground"
            >
              <Check className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 pt-1 mt-auto">
          <Button asChild size="sm" className="flex-1">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
              Live
            </a>
          </Button>
          {project.github && (
            <Button asChild size="sm" variant="outline">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code className="mr-1.5 h-3.5 w-3.5" />
                Code
              </a>
            </Button>
          )}
          <Button size="sm" variant="ghost" onClick={onClick}>
            Details
          </Button>
        </div>

        {/* type indicators for a11y/filter clarity */}
        <div className="sr-only">
          {isWebProject ? "Web Application. " : ""}
          {isMobileProject ? "Mobile Application." : ""}
        </div>
      </div>
    </Card>
  );
}
