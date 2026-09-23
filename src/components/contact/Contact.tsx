"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/30 dark:bg-gray-900/30">
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <Badge
            variant="outline"
            className="mb-4 px-3 py-1 text-sm border-primary/20 bg-primary/5 dark:bg-primary/10"
          >
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hiring a{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Full-Stack Engineer?
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Reach out on LinkedIn or by email.
          </p>
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2 mt-4">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Available now for full-time remote roles and contracts
          </p>
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2 mt-2">
            <Clock className="h-3.5 w-3.5" />
            I usually respond within a few hours
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto grid sm:grid-cols-3 gap-4"
        >
          {[
            {
              icon: Linkedin,
              label: "LinkedIn",
              value: "mohamedouterbah",
              href: "https://www.linkedin.com/in/mohamedouterbah",
              external: true,
            },
            {
              icon: Mail,
              label: "Email",
              value: "mohamedterba6@gmail.com",
              href: "mailto:mohamedterba6@gmail.com",
              external: false,
            },
            {
              icon: Github,
              label: "GitHub",
              value: "Mohamed-gp",
              href: "https://github.com/Mohamed-gp",
              external: true,
            },
          ].map(({ icon: Icon, label, value, href, external }) => (
            <a
              key={label}
              href={href}
              aria-label={`${label}: ${value}`}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <Card className="group cursor-pointer overflow-hidden border-primary/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                <CardContent className="p-5 flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold">{label}</h3>
                    <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors break-all">
                      {value}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
