"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Star, Code, Trophy, Calendar } from "lucide-react";

const stats = [
  {
    icon: <Trophy className="h-6 w-6 text-yellow-500" />,
    value: "99%+",
    label: "Uptime",
    description: "Architected scalable apps",
  },
  {
    icon: <Star className="h-6 w-6 text-green-500" />,
    value: "100/100",
    label: "Lighthouse SEO",
    description: "Performance optimization",
  },
  {
    icon: <Users className="h-6 w-6 text-blue-500" />,
    value: "5/5",
    label: "Client Rating",
    description: "Fiverr rating score",
  },
  {
    icon: <Code className="h-6 w-6 text-blue-500" />,
    value: "5min",
    label: "CI/CD Deploy",
    description: "From 30min to 5min",
  },
  {
    icon: <Trophy className="h-6 w-6 text-orange-500" />,
    value: "1st Place",
    label: "Hackathon Winner",
    description: "Competitive ideathon 2024",
  },
  {
    icon: <Calendar className="h-6 w-6 text-pink-500" />,
    value: "4+",
    label: "Years Experience",
    description: "Full-stack development",
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
            Results That Matter
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Numbers that reflect my commitment to delivering exceptional results
            and building lasting relationships with clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
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
