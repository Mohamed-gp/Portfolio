"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-primary/5 via-background to-primary/5">
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="border-primary/20 bg-gradient-to-br from-background to-muted/30 shadow-xl">
            <CardContent className="p-8 sm:p-12 text-center space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  Hiring a{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Full-Stack Engineer?
                  </span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  I ship production web &amp; mobile platforms end-to-end —
                  frontend, backend, mobile, and infrastructure. Available now
                  for full-time remote roles and contracts.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild size="lg" className="group">
                  <Link href="#contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Start a Conversation
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>

              <div className="pt-4">
                <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                  </span>
                  Available for full-time remote roles — US East Coast overlap &
                  EMEA hours
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
