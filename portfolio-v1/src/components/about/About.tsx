"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

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
            Passionate about creating efficient, scalable solutions that make a
            real impact.
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
            <h3 className="text-2xl font-semibold">Experience & Expertise</h3>
            <p className="text-muted-foreground">
              <strong className="text-foreground">Full-Stack Engineer</strong>{" "}
              with 3+ years delivering production-grade platforms for clients
              across the Netherlands, UK, and USA. Currently{" "}
              <strong className="text-foreground">
                Founding Engineer at Analytics Depot
              </strong>{" "}
              — an AI SaaS with{" "}
              <strong className="text-foreground">232 registered users</strong>,
              competing with Julius and Databox. Also building HaulHub, a{" "}
              <strong className="text-foreground">
                live Uber-style logistics marketplace on iOS & Android
              </strong>{" "}
              in the Netherlands.
            </p>
            <p className="text-muted-foreground">
              My expertise spans{" "}
              <strong className="text-foreground">
                real-time collaboration with WebSockets
              </strong>
              , custom drag-and-drop dashboard builders, RAG-based document
              intelligence, and{" "}
              <strong className="text-foreground">
                cutting deployment time from ~30 mins to under 5 mins
              </strong>{" "}
              through CI/CD optimization. Founded{" "}
              <strong className="text-foreground">DzStore</strong> — a
              Shopify-equivalent SaaS with 50+ active users. With a{" "}
              <strong className="text-foreground">4.9/5 Fiverr rating</strong>{" "}
              across 6+ delivered production applications, I've worked for
              international clients across USA, UK, Netherlands, Japan, and
              Saudi Arabia.
            </p>

            {/* Professional Highlights */}
            <div className="space-y-4 pt-4 bg-gradient-to-br from-primary/5 via-muted/30 to-blue-500/5 p-6 rounded-xl border border-primary/10 shadow-sm">
              <h4 className="text-lg font-semibold flex items-center gap-2">
                <span className="h-1 w-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full" />
                Key Achievements
              </h4>
              <div className="grid gap-3">
                <div className="flex items-start gap-2">
                  <span className="text-lg">🚀</span>
                  <span className="text-sm text-muted-foreground">
                    <strong>Founding Engineer — Analytics Depot</strong> - AI
                    SaaS with 232 users, competing with Julius & Databox
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-lg">📱</span>
                  <span className="text-sm text-muted-foreground">
                    <strong>HaulHub — Live on iOS & Android</strong> -
                    Uber-style logistics marketplace with 12+ service categories
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-lg">🏆</span>
                  <span className="text-sm text-muted-foreground">
                    <strong>1st Place Hackathon Winner</strong> - Competitive
                    ideathon 2024 · 5+ hackathons participated
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-lg">🛒</span>
                  <span className="text-sm text-muted-foreground">
                    <strong>Founded DzStore</strong> - Shopify-equivalent SaaS
                    with 50+ active users for Algerian market
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-lg">⚡</span>
                  <span className="text-sm text-muted-foreground">
                    <strong>CI/CD Optimization</strong> - Reduced deployment
                    time from 30 minutes to under 5 minutes
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-lg">💡</span>
                  <span className="text-sm text-muted-foreground">
                    <strong>Open Source Contributor</strong> - Contributed to
                    Munia (300+ GitHub stars Next.js project)
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-lg">🌍</span>
                  <span className="text-sm text-muted-foreground">
                    <strong>Global Client Work</strong> - 6+ production apps for
                    USA, UK, Netherlands, Japan, and Saudi Arabia
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-lg">👥</span>
                  <span className="text-sm text-muted-foreground">
                    <strong>Cross-Functional Collaboration</strong> - Working
                    with 6-person teams across AI/ML, LLMOps, and infrastructure
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
            className="grid grid-cols-2 gap-4"
          >
            <Card className="relative bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 hover:shadow-xl transition-all duration-300 group border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-900">
              <CardContent className="p-6 flex flex-col items-center text-center relative z-10">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Code2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="font-semibold mb-2">Code Craftsman</h4>
                <p className="text-sm text-muted-foreground">
                  I don't just write code, I craft digital experiences that
                  users actually love
                </p>
              </CardContent>
            </Card>

            <Card className="relative bg-gradient-to-br from-cyan-50 to-white dark:from-gray-900 dark:to-gray-800 hover:shadow-xl transition-all duration-300 group border-2 border-transparent hover:border-cyan-200 dark:hover:border-cyan-900">
              <CardContent className="p-6 flex flex-col items-center text-center relative z-10">
                <div className="p-3 rounded-full bg-cyan-100 dark:bg-cyan-900/30 mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Users className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <h4 className="font-semibold mb-2">Team Player</h4>
                <p className="text-sm text-muted-foreground">
                  From solo freelancing to team collaboration — I make
                  everyone's job easier
                </p>
              </CardContent>
            </Card>

            <Card className="relative bg-gradient-to-br from-sky-50 to-white dark:from-gray-900 dark:to-gray-800 hover:shadow-xl transition-all duration-300 group border-2 border-transparent hover:border-sky-200 dark:hover:border-sky-900">
              <CardContent className="p-6 flex flex-col items-center text-center relative z-10">
                <div className="p-3 rounded-full bg-sky-100 dark:bg-sky-900/30 mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Lightbulb className="h-6 w-6 text-sky-600 dark:text-sky-400" />
                </div>
                <h4 className="font-semibold mb-2">Solution Architect</h4>
                <p className="text-sm text-muted-foreground">
                  I see problems as puzzles waiting to be solved (and I'm pretty
                  good at puzzles)
                </p>
              </CardContent>
            </Card>

            <Card className="relative bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 hover:shadow-xl transition-all duration-300 group border-2 border-transparent hover:border-indigo-200 dark:hover:border-indigo-900">
              <CardContent className="p-6 flex flex-col items-center text-center relative z-10">
                <div className="p-3 rounded-full bg-indigo-100 dark:bg-indigo-900/30 mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Rocket className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h4 className="font-semibold mb-2">Tech Enthusiast</h4>
                <p className="text-sm text-muted-foreground">
                  Always learning the latest tech — because staying ahead means
                  better solutions
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
