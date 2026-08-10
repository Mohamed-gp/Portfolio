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
  country: string;
  flag: string;
  client?: string;
  company?: string;
  type: string | string[];
  url: string;
  github?: string;
  video?: string;
  image: string;
  description: string;
  features: string[];
  hardest: string;
  status: string;
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

  // Ordered by strength: Analytics Depot → DzStore → HaulHub → Fibble → Cribbix
  const projects: Project[] = [
    {
      title: "Analytics Depot — AI-Powered Analytics Platform",
      country: "United States",
      flag: "🇺🇸",
      client: "Analytics Depot",
      company: "Analytics Depot",
      type: "Web Application",
      url: "https://analyticsdepot.com/",
      image: "/projects/analytics-depot/hero-updated-1.png",
      description:
        "Frontend lead on a live AI analytics SaaS, owning every user-facing surface: a drag-and-drop dashboard builder with multiple chart types, shareable reports (password-protected + embed mode) with one-click PDF/PowerPoint export, and an OAuth2 connector platform spanning 10+ data sources (BigQuery, GA4, Search Console, Sheets, Gmail, YouTube, Google Play, PostgreSQL, MySQL, Slack). Shipped RAG document Q&A, an NL-to-SQL query interface, per-connector refresh scheduling (React + FastAPI + Celery), and the rebuilt public marketing site. Hardened auth with PKCE OAuth and Apple \"Hide My Email\"; cut deploy time from ~30 min to under 5 with zero-downtime PM2 cluster reloads. Built the LLM agent observability console on top of the trace pipeline: run volume and reliability trends, per-run latency and provider-cost drill-down into spans, cost-regression flags, and async CSV/JSON export of the query log.",
      features: [
        "Ask questions in plain English, get SQL-backed answers and charts",
        "Drag-and-drop dashboards with shareable, embeddable reports",
        "10+ one-click data connectors, from BigQuery and GA4 to Slack",
        "Upload CSV/PDF/Excel documents and chat with them (RAG)",
      ],
      hardest:
        "Real-time multi-user dashboard sync over WebSockets: session sync, live presence, and a collaborative chat sidebar that stay consistent across editors.",
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
      country: "Algeria",
      flag: "🇩🇿",
      type: "Web Application",
      url: "https://dzstore.org/en",
      image: "/projects/dzstore/hero-updated-1.png",
      description:
        "In its first 3 months: 1,000+ active stores, 2,100+ products, 500+ orders, and 20+ merchants upgraded to paid PRO plans through SEO alone, adding ~80 new stores a week, 100% organic, zero ad spend, and 5.5M+ DZD in merchant sales (GMV). Co-founded this multi-tenant Shopify-equivalent SaaS and lead nearly all engineering: subdomain-per-store routing with Caddy on-demand TLS, a 44-model Prisma/PostgreSQL schema, a drag-and-drop storefront builder, per-region shipping plus a carrier layer covering 70 Algerian delivery companies behind 5 API adapters, abandoned-cart recovery, an affiliate system, and AI product descriptions; self-hosted on Hetzner via Docker with 99.95% uptime over the last 90 days. Cut running costs by moving the production Postgres off Neon to Supabase and persisting the image-optimizer cache across deploys, cutting the database bill by 50%+ (migrated with pg_dump at zero downtime) and retiring ~17 GB/month of CDN egress. Technical SEO drives acquisition: 15,000+ pages indexed with 600+ valid Google Shopping product snippets. Merchants rate it 4.7/5 in the in-app survey.",
      features: [
        "Merchants launch a full online store in seconds, no code needed",
        "Every store gets its own subdomain or custom domain with auto HTTPS",
        "Cash on delivery + online card payments, 70 delivery carriers",
        "AI product descriptions, abandoned-cart recovery, trending-product radar",
      ],
      hardest:
        "Multi-tenant subdomain routing with Caddy on-demand TLS: every merchant gets their own store and custom domain with automatic HTTPS, all from one codebase.",
      status: "Live · 1,000+ Stores · 20+ Paying",
      role: "Co-Founder & Lead Engineer",
      technologies: [
        "Next.js",
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
      country: "Netherlands",
      flag: "🇳🇱",
      client: "HaulHub",
      type: ["Web Application", "Mobile Application"],
      url: "https://haulhub.app/",
      image: "/projects/haulhub/hero-updated-1.png",
      description:
        "One of the primary engineers across backend, mobile & web on a production Uber-style logistics marketplace, live on iOS & Android in the Netherlands across 12 service categories and 100+ skilled-labor sub-categories. Built the on-demand dispatch service (Haversine nearest-provider matching, competing provider offers, live driver tracking over per-ride WebSocket rooms, an 11-state request lifecycle) and the B2B fleet-operations module end-to-end, plus Stripe payments (on-demand, subscriptions, provider payouts) and Dutch KVK business-registry lookup. Shipped with full RTL i18n in 5 languages (EN/NL/AR/DE/UR).",
      features: [
        "Post a job, get competing price and pickup-time offers in seconds",
        "Live driver tracking, proof of delivery, and dispute handling",
        "Fleet dashboards for companies: drivers, vehicles, earnings splits",
        "Stripe escrow payments, 5 languages with full RTL",
      ],
      hardest:
        "Dispatching a request to the right provider in real time: Haversine radius matching that fans out to freelancers and fleet companies, competing offers, live location tracking, and Stripe escrow with timing-based cancellation refunds, across an 11-state request lifecycle.",
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
    {
      title: "Fibble — Multiplayer Trivia Game (Web & Discord)",
      country: "Global",
      flag: "🌍",
      type: "Web Application",
      url: "https://fibble.io/",
      image: "/projects/fibble/hero-updated-1.png",
      description:
        "Co-founded a real-time multiplayer bluffing trivia game playable on the web and inside Discord as an embedded Activity. 3,000+ players across 80+ countries and 2,200+ games played in its first 3 months, fully organic, zero ads. Premium via Paddle checkout on web plus native Discord SKU subscriptions in-app, user-generated question packs, media questions (image/GIF/audio), bots, friends & DMs with moderation, and a full admin panel; Dockerized on Hetzner behind Caddy, with GitHub Actions CI/CD, health checks, and automatic rollback.",
      features: [
        "Bluff-based trivia: write fake answers, fool your friends, 2-8 players",
        "Plays in the browser or inside Discord, nothing to install",
        "Custom question packs, media questions, bots, friends and DMs",
        "Premium via Paddle on web and native Discord subscriptions",
      ],
      hardest:
        "Real-time multiplayer game-state sync on a serverless Next.js stack with no dedicated game server: Postgres as the source of truth, Ably pub/sub fan-out, server-authoritative phase deadlines with idempotent transitions, and HMAC action tokens so guests and Discord players can't spoof each other.",
      status: "Live · 3,000+ Players",
      role: "Co-Founder & Full-Stack Engineer",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "Ably",
        "Discord SDK",
        "Paddle",
        "Docker",
      ],
    },
    {
      title: "Cribbix — Real Estate Platform",
      country: "United Kingdom",
      flag: "🇬🇧",
      client: "Cribbix",
      type: "Web Application",
      url: "https://cribbix.com/",
      image: "/projects/cribbix/hero-updated-1.png",
      description:
        "Built a Rightmove-style property rental & sales platform (V1 & V2): interactive map search with full filtering, client/agency/admin dashboards, renter profiles, real-time chat, AI-generated property descriptions, and Stripe tenancy payments. Added Redis caching, rate limiting, and reCAPTCHA v3; migrated to Next.js 15 + React 18 and ran full VPS deployment on DigitalOcean independently.",
      features: [
        "Map-first property search with instant filtering, rent and buy",
        "Saved alerts, enquiry tracking, and tour scheduling with agents",
        "Digital agreement signing and Stripe rent collection",
        "Real-time chat and AI-generated listing descriptions",
      ],
      hardest:
        "Map-based property search with live filtering that updates results without re-initializing the map on every interaction.",
      status: "Live",
      role: "Full-Stack Developer",
      technologies: [
        "Next.js",
        "Redis",
        "Stripe",
        "reCAPTCHA",
        "PostgreSQL",
        "DigitalOcean",
      ],
    },
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
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 text-sm border-primary/20 bg-primary/5"
          >
            <Globe className="mr-2 h-4 w-4" />
            Live Projects
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Selected Work
          </h2>
          <p className="text-muted-foreground text-lg">
            Production platforms serving real users: AI analytics, a live
            logistics marketplace, e-commerce SaaS, and open source. Click any
            card for the full breakdown.
          </p>
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
                <span className="text-2xl">{selectedProject?.flag}</span>
                {selectedProject?.title}
              </DialogTitle>
              <DialogDescription className="text-base">
                {selectedProject?.role} • {selectedProject?.country}
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
                      style={{ aspectRatio: "16/9" }}
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
                    About the project
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

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
  const isLive =
    project.status.startsWith("Live") || project.status === "Live & Profitable";

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
          <div className="absolute top-3 left-3 flex gap-1.5">
            <Badge className="bg-background/85 text-foreground backdrop-blur-sm border-none shadow-sm">
              <span className="mr-1">{project.flag}</span>
              {project.country}
            </Badge>
          </div>
          <div className="absolute top-3 right-3">
            <Badge
              className={
                isLive
                  ? "bg-green-600 text-white border-none shadow-sm"
                  : "bg-background/85 text-foreground border-none shadow-sm"
              }
            >
              {project.status}
            </Badge>
          </div>
        </button>
      )}

      <div className="p-5 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="text-lg font-bold leading-tight">{project.title}</h3>
          <p className="text-sm text-primary font-medium mt-0.5">
            {project.role}
          </p>
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
            <Badge variant="outline" className="text-xs px-2 py-0.5">
              +{project.technologies.length - 5}
            </Badge>
          )}
        </div>

        <p className="text-sm text-muted-foreground line-clamp-3">
          {project.description}
        </p>

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

        {/* Hardest problem hook */}
        <div className="rounded-md bg-muted/50 border-l-2 border-primary/60 px-3 py-2">
          <p className="text-xs text-muted-foreground">
            <span className="font-semibold text-foreground">
              Hardest problem:{" "}
            </span>
            {project.hardest}
          </p>
        </div>

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
