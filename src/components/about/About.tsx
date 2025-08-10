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
    <section id="about" className="py-20 bg-muted/30">
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
              className="mb-4 px-3 py-1 text-sm border-primary/20"
            >
              About Me
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
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
              Full Stack Developer with 3+ years of experience building web
              applications and mobile solutions. I specialize in modern web
              development with a strong focus on TypeScript and have a proven
              track record of delivering high-quality projects on time.
            </p>
            <p className="text-muted-foreground">
              My freelance work has earned me a <strong>5-star rating</strong>{" "}
              on Fiverr, where I've successfully completed projects ranging from
              e-commerce platforms to property management systems. I also
              co-created the <strong>SaaS Boiler CLI</strong> tool, which has
              reached <strong>500+ downloads</strong> on npm.
            </p>

            {/* Professional Highlights */}
            <div className="space-y-4 pt-4 bg-muted/30 p-6 rounded-lg">
              <h4 className="text-lg font-semibold">Key Achievements</h4>
              <div className="grid gap-3">
                <div className="flex items-start gap-2">
                  <span className="text-lg">🎯</span>
                  <span className="text-sm text-muted-foreground">
                    5/5 rating on Fiverr with 100% project completion rate
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-lg">🚀</span>
                  <span className="text-sm text-muted-foreground">
                    20+ production applications deployed and maintained
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-lg">💡</span>
                  <span className="text-sm text-muted-foreground">
                    Open source CLI tool with 500+ npm downloads
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-lg">🌍</span>
                  <span className="text-sm text-muted-foreground">
                    International client collaborations across multiple time
                    zones
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
            <Card className="bg-background/50 hover:bg-background/80 transition-colors group">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Code2 className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold mb-2">Code Craftsman</h4>
                <p className="text-sm text-muted-foreground">
                  I don't just write code, I craft digital experiences that
                  users actually love
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/50 hover:bg-background/80 transition-colors group">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Users className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold mb-2">Team Player</h4>
                <p className="text-sm text-muted-foreground">
                  From solo freelancing to team collaboration — I make
                  everyone's job easier
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/50 hover:bg-background/80 transition-colors group">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Lightbulb className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold mb-2">Solution Architect</h4>
                <p className="text-sm text-muted-foreground">
                  I see problems as puzzles waiting to be solved (and I'm pretty
                  good at puzzles)
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/50 hover:bg-background/80 transition-colors group">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Rocket className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
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
