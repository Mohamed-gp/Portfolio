"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/30 dark:bg-gray-900/30">
      <div className="container px-4 sm:px-6">
        <motion.div
          style={{ willChange: "transform, opacity" }}
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-muted-foreground">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out through any of these channels.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* GitHub Card */}
            <motion.div
              style={{ willChange: "transform, opacity" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="overflow-hidden border-primary/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mb-4">
                    <Github className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">GitHub</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Check out my open source work
                  </p>
                  <a
                    href="https://github.com/Mohamed-gp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1 text-primary hover:underline font-medium"
                  >
                    View Projects
                    <svg
                      className="h-3.5 w-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M7 17L17 7M17 7H8M17 7V16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
            {/* Email Card */}
            <motion.div
              style={{ willChange: "transform, opacity" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="overflow-hidden border-primary/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mb-4">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Email</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    For direct inquiries and collaborations
                  </p>
                  <a
                    href="mailto:mohamedterba6@gmail.com"
                    target="_blank"
                    className="mt-auto inline-flex items-center text-primary hover:underline font-medium"
                  >
                    mohamedterba6@gmail.com
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            {/* LinkedIn Card */}
            <motion.div
              style={{ willChange: "transform, opacity" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="overflow-hidden border-primary/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mb-4">
                    <Linkedin className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">LinkedIn</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Connect with me professionally
                  </p>
                  <a
                    href="https://www.linkedin.com/in/mohamedouterbah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1 text-primary hover:underline font-medium"
                  >
                    View Profile
                    <svg
                      className="h-3.5 w-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M7 17L17 7M17 7H8M17 7V16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Additional message */}
          <motion.div
            style={{ willChange: "transform, opacity" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12 text-muted-foreground"
          >
            <p>Looking forward to connecting with you!</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
