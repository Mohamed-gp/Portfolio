"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Github,
  Linkedin,
  Mail,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
// emailjs lazy-loaded in submit handler to reduce initial bundle

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setStatus("idle");

    try {
      const emailjs = (await import("@emailjs/browser")).default;
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.log(error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            Let&apos;s Connect
          </h2>
          <p className="text-muted-foreground">
            Have a project in mind or want to discuss potential opportunities?
            Send me a message directly or reach out through any of these
            channels.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <Card className="border-primary/10">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl font-bold mb-6">Send a Message</h3>
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        className="bg-background"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or opportunity..."
                      rows={5}
                      required
                      className="bg-background resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm font-medium"
                    >
                      <CheckCircle2 className="h-4 w-4" />
                      Message sent successfully! I&apos;ll get back to you soon.
                    </motion.div>
                  )}

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-red-600 dark:text-red-400 text-sm font-medium"
                    >
                      <AlertCircle className="h-4 w-4" />
                      Failed to send. Please try emailing me directly.
                    </motion.div>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {[
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
              {
                icon: Linkedin,
                label: "LinkedIn",
                value: "mohamedouterbah",
                href: "https://www.linkedin.com/in/mohamedouterbah",
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
                <Card className="group cursor-pointer overflow-hidden border-primary/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-5 flex items-center gap-4">
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
      </div>
    </section>
  );
}
