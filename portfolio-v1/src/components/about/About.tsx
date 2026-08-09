"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Layers,
  Smartphone,
  ShieldCheck,
  Compass,
  Rocket,
  Trophy,
  Store,
  Zap,
  Globe,
  Gamepad2,
  GitCommitHorizontal,
} from "lucide-react";

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const capabilities = [
    {
      icon: <Layers className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      bg: "bg-blue-100 dark:bg-blue-900/30",
      title: "Ships end-to-end",
      body: "Frontend, backend, mobile, and deployment, solo or embedded in a team.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />,
      bg: "bg-cyan-100 dark:bg-cyan-900/30",
      title: "Production-grade",
      body: "Auth, Stripe payments, real-time sync, observability, and CI/CD on live apps.",
    },
    {
      icon: <Smartphone className="h-6 w-6 text-sky-600 dark:text-sky-400" />,
      bg: "bg-sky-100 dark:bg-sky-900/30",
      title: "Web + Mobile",
      body: "React / Next.js on web; React Native (Expo) shipped to the App Store & Play Store.",
    },
    {
      icon: <Compass className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
      bg: "bg-indigo-100 dark:bg-indigo-900/30",
      title: "Owns ambiguity",
      body: "Took HaulHub's dispatch and fleet services from spec to live in production.",
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/50 via-background to-muted/30 -z-10" />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 mx-auto"
        >
          <div className="flex justify-center">
            <Badge
              variant="outline"
              className="mb-4 px-4 py-2 text-sm border-primary/20 bg-primary/5 backdrop-blur-sm"
            >
              About Me
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
            Full-Stack Engineer & Problem Solver
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            I build production platforms that real users and paying clients
            depend on, end to end.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            style={{ willChange: "transform, opacity" }}
            custom={0}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">What I do</h3>
            <p className="text-muted-foreground">
              I don't just build features, I own them end to end: from database
              schema and API design through the UI, the mobile app, and the
              pipeline that deploys it. Nearly all of it runs in live
              production with real users, including my current work as frontend
              lead on{" "}
              <a
                href="https://analyticsdepot.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-foreground underline decoration-primary/40 underline-offset-4 hover:decoration-primary transition-colors"
              >
                Analytics Depot
              </a>{" "}
              (an AI analytics SaaS), where I work Agile in a cross-functional
              team, and a full-stack role on{" "}
              <a
                href="https://haulhub.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-foreground underline decoration-primary/40 underline-offset-4 hover:decoration-primary transition-colors"
              >
                HaulHub
              </a>
              , a production logistics marketplace on iOS &amp; Android.
            </p>
            <p className="text-muted-foreground">
              My work spans{" "}
              <strong className="text-foreground">
                real-time collaboration over WebSockets
              </strong>
              , custom drag-and-drop dashboard builders, RAG document
              intelligence, Stripe payments, and self-managed VPS deployments. I
              co-founded{" "}
              <a
                href="https://dzstore.org/en"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-foreground underline decoration-primary/40 underline-offset-4 hover:decoration-primary transition-colors"
              >
                DzStore
              </a>
              , a Shopify-equivalent SaaS where I lead nearly all engineering
              across the full stack. In its first 3 months it has grown to{" "}
              <strong className="text-foreground">
                950+ users, 800+ active stores, and 20+ on paid plans
              </strong>
              , adding ~80 new stores a week, 100% organic, zero ad spend,
              99.95% uptime. I hold a{" "}
              <strong className="text-foreground">5/5 rating</strong> across 6+
              delivered production applications.
            </p>

            {/* Professional Highlights */}
            <div className="space-y-4 pt-4 bg-gradient-to-br from-primary/5 via-muted/30 to-blue-500/5 p-6 rounded-xl border border-primary/10 shadow-sm">
              <h4 className="text-lg font-semibold flex items-center gap-2">
                <span className="h-1 w-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full" />
                Key Achievements
              </h4>
              <div className="grid gap-3">
                <div className="flex items-start gap-2.5">
                  <Smartphone className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    <strong>HaulHub, live on iOS & Android:</strong> built its
                    on-demand dispatch and fleet-operations services
                    end-to-end, across backend, mobile & web
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Rocket className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    <strong>Frontend lead at Analytics Depot (AI SaaS):</strong>{" "}
                    owns every user-facing surface: dashboards, real-time
                    collaboration, RAG, NL-to-SQL
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Store className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    <strong>Co-founded DzStore:</strong> 950+ users, 800+
                    stores & 20+ on paid plans in 3 months, 100% organic
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Gamepad2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    <strong>Co-founded Fibble:</strong> real-time multiplayer
                    party game, 3,000+ players across 39 countries in 3 months,
                    100% organic
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Zap className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    <strong>Zero-downtime deploys at Analytics Depot:</strong>{" "}
                    cut release time from ~30 min to under 5 with PM2 cluster
                    reloads
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Trophy className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    <strong>1st Place Hackathon Winner 2024:</strong>{" "}
                    competitive ideathon
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <GitCommitHorizontal className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    <strong>Open-source contributor:</strong> Munia, a Next.js
                    social platform with 300+ GitHub stars
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Globe className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    <strong>5/5 across global clients:</strong> USA, UK,
                    Netherlands, Japan, and Saudi Arabia
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 self-start"
          >
            {capabilities.map((c) => (
              <Card
                key={c.title}
                className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 hover:shadow-xl transition-all duration-300 group border-2 border-transparent hover:border-primary/20"
              >
                <CardContent className="p-6 flex flex-col items-center text-center relative z-10">
                  <div
                    className={`p-3 rounded-full ${c.bg} mb-4 group-hover:scale-110 transition-all duration-300`}
                  >
                    {c.icon}
                  </div>
                  <h4 className="font-semibold mb-2">{c.title}</h4>
                  <p className="text-sm text-muted-foreground">{c.body}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
