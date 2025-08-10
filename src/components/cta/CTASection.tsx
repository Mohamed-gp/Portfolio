"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

function CTASection() {
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
                  Ready to Build Something
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {" "}
                    Amazing?
                  </span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Let's discuss your project and turn your ideas into reality.
                  I'm always excited to work on challenging projects that make a
                  real impact.
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
                <p className="text-sm text-muted-foreground">
                  💡 Available for freelance projects and full-time
                  opportunities
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

export default CTASection;
