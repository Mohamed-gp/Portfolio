"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Code,
  Calendar,
  Star,
  Activity,
  Gamepad2,
  BadgeDollarSign,
} from "lucide-react";

const stats = [
  {
    icon: <Code className="h-6 w-6 text-purple-500" />,
    value: "7+",
    label: "Production Apps",
    description: "Live in production, real users daily",
  },
  {
    icon: <Calendar className="h-6 w-6 text-pink-500" />,
    value: "3+",
    label: "Years Experience",
    description: "Full-stack engineering",
  },
  {
    icon: <Gamepad2 className="h-6 w-6 text-cyan-500" />,
    value: "3,000+",
    label: "Game Players",
    description: "On Fibble, co-founded, 80+ countries",
  },
  {
    icon: <Users className="h-6 w-6 text-blue-500" />,
    value: "1,100+",
    label: "DzStore Stores",
    description: "Live merchant stores, 100% organic",
  },
  {
    icon: <BadgeDollarSign className="h-6 w-6 text-amber-500" />,
    value: "25+",
    label: "Merchants on Paid Plans",
    description: "DzStore PRO, acquired through SEO alone",
  },
  {
    icon: <Activity className="h-6 w-6 text-emerald-500" />,
    value: "99.95%",
    label: "Uptime",
    description: "Infra real users depend on, self-hosted",
  },
  {
    icon: <Star className="h-6 w-6 text-green-500" />,
    value: "5/5",
    label: "Client Rating",
    description: "Across every delivered project",
  },
];

export default function StatsSection() {
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-background to-cyan-50 dark:from-gray-900 dark:via-background dark:to-gray-900 -z-10" />

      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            By the Numbers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A quick snapshot of what I&apos;ve shipped and who I&apos;ve shipped
            it for.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="w-[calc(50%-0.5rem)] md:w-[calc(33.333%-1rem)] lg:w-[180px]"
            >
              <Card className="text-center h-full hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary/20 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm relative overflow-hidden group">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardContent className="p-4 sm:p-6 space-y-3 relative z-10">
                  <div className="flex justify-center">
                    <div className="p-3 rounded-full bg-gradient-to-br from-muted/80 to-muted/50 group-hover:from-primary/10 group-hover:to-blue-500/10 transition-all duration-300 group-hover:scale-110">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 inline-block">
                      {stat.value}
                    </div>
                    <div className="font-semibold text-sm sm:text-base">
                      {stat.label}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">
                      {stat.description}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
