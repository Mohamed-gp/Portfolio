"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Star, Code, Trophy, Calendar, Coffee } from "lucide-react";

const stats = [
  {
    icon: <Users className="h-6 w-6 text-blue-500" />,
    value: "+10",
    label: "Happy Clients",
    description: "Satisfied clients worldwide",
  },
  {
    icon: <Star className="h-6 w-6 text-yellow-500" />,
    value: "5/5",
    label: "Client Rating",
    description: "Average rating on Fiverr",
  },
  {
    icon: <Code className="h-6 w-6 text-green-500" />,
    value: "+20",
    label: "Live Projects",
    description: "Deployed applications",
  },
  {
    icon: <Trophy className="h-6 w-6 text-purple-500" />,
    value: "+5",
    label: "Hackathons",
    description: "Competitions participated",
  },
  {
    icon: <Calendar className="h-6 w-6 text-orange-500" />,
    value: "+3",
    label: "Years of Experience",
    description: "In web development",
  },
  {
    icon: <Coffee className="h-6 w-6 text-amber-600" />,
    value: "+1000",
    label: "Hours Coded",
    description: "Lines of code written",
  },
];

function StatsSection() {
  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
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
              whileHover={{ y: -5 }}
            >
              <Card className="text-center h-full hover:shadow-lg transition-all duration-300 border-primary/10">
                <CardContent className="p-4 sm:p-6 space-y-3">
                  <div className="flex justify-center">
                    <div className="p-3 rounded-full bg-muted/50">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl sm:text-3xl font-bold text-primary">
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

export default StatsSection;
