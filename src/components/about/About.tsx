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
          style={{ willChange: "transform, opacity" }}
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
            Full Stack Developer & Problem Solver
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
              <strong className="text-foreground">Founding Engineer & Technical Lead</strong> at Analytics Depot (USA) with 3+ years of experience building web
              applications, mobile solutions, and AI-powered platforms. I led a team of 3 developers to architect scalable apps with <strong className="text-foreground">99%+ uptime</strong> and implemented RAG systems using FastAPI.
            </p>
            <p className="text-muted-foreground">
              My expertise spans from <strong className="text-foreground">cutting deployment time from ~30 mins to a few mins</strong> through CI/CD optimization, to achieving <strong className="text-foreground">100/100 Lighthouse SEO scores</strong>. As a <strong className="text-foreground">Fiverr Level 1 seller with 5/5 rating</strong>, I've worked for international clients across USA, UK, Netherlands, and Japan, delivering excellence consistently.
            </p>

            {/* Professional Highlights */}
            <div className="space-y-4 pt-4 bg-gradient-to-br from-primary/5 via-muted/30 to-blue-500/5 p-6 rounded-xl border border-primary/10 shadow-sm">
              <h4 className="text-lg font-semibold flex items-center gap-2">
                <span className="h-1 w-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full" />
                Key Achievements
              </h4>
              <div className="grid gap-3">
                <div className="flex items-start gap-2">
                  <span className="text-lg">🏆</span>
                  <span className="text-sm text-muted-foreground">
                    <strong>1st Place Hackathon Winner</strong> - Developed innovative tech solution in competitive ideathon 2024
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-lg">⚡</span>
                  <span className="text-sm text-muted-foreground">
                    <strong>CI/CD Optimization</strong> - Reduced deployment time from 30 minutes to few minutes
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-lg">🎯</span>
                  <span className="text-sm text-muted-foreground">
                    <strong>SEO Excellence</strong> - Achieved 100/100 Lighthouse SEO score improving organic visibility
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-lg">🚀</span>
                  <span className="text-sm text-muted-foreground">
                    <strong>99%+ Uptime</strong> - Architected scalable apps serving users reliably
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-lg">💡</span>
                  <span className="text-sm text-muted-foreground">
                    <strong>Open Source Impact</strong> - SaaS Boiler CLI peaked at 500+ downloads on npm
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-lg">🌍</span>
                  <span className="text-sm text-muted-foreground">
                    <strong>Global Client Work</strong> - Delivered projects for USA, UK, Netherlands, and Japan
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-lg">👥</span>
                  <span className="text-sm text-muted-foreground">
                    <strong>Team Leadership</strong> - Led team of 3 developers building AI-driven analytics platforms
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-lg">🎮</span>
                  <span className="text-sm text-muted-foreground">
                    <strong>5+ Hackathons</strong> - Competitive programming, logistics optimization, AI solutions
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            style={{ willChange: "transform, opacity" }}
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
