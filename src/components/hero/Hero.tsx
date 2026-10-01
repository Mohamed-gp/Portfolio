"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ProfilePicture from "@/../public/profile/profile_picture.jpg";

const EMAIL = "mohamedterba6@gmail.com";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Full-Stack Engineer";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-300 dark:bg-cyan-900 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-sky-300 dark:bg-sky-900 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="flex-1 flex items-center">
        <div className="container px-4 sm:px-6 grid lg:grid-cols-2 gap-8 md:gap-12 items-center pt-20 pb-16 sm:pb-20">
          <div className="space-y-4 sm:space-y-6 text-center lg:text-left animate-fade-in-up">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-muted-foreground">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Mohamed Outerbah
              </span>
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold min-h-[1.2em]">
              {text}
              <span className="animate-blink">|</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              <strong className="text-foreground">
                I build web and mobile products used by thousands in
                production.
              </strong>{" "}
              3+ years shipping end-to-end: Frontend Lead on{" "}
              <a
                href="https://analyticsdepot.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-foreground underline decoration-primary/40 underline-offset-4 hover:decoration-primary transition-colors"
              >
                Analytics Depot
              </a>
              , a production AI analytics SaaS, and Founder/Lead Engineer of{" "}
              <a
                href="https://dzstore.org/en"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-foreground underline decoration-primary/40 underline-offset-4 hover:decoration-primary transition-colors"
              >
                DzStore
              </a>
              , a Shopify-style store builder that grew to{" "}
              <strong className="text-foreground">
                2,000+ merchants, 70+ paying subscribers, and ~300 orders a
                week
              </strong>{" "}
              within 4 months, with zero ad spend.
            </p>

            {/* Prominent contact bar */}
            <div className="flex flex-wrap items-center gap-2 justify-center lg:justify-start">
              <Link
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90 transition-opacity"
              >
                <Mail className="h-4 w-4 shrink-0" />
                Email me
              </Link>
              <Link
                href="https://www.linkedin.com/in/mohamedouterbah"
                target="_blank"
                aria-label="LinkedIn"
                className="p-2.5 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com/Mohamed-gp"
                target="_blank"
                aria-label="GitHub"
                className="p-2.5 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </Link>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-1">
              <Button
                asChild
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group backdrop-blur-sm bg-white/10 dark:bg-gray-800/30 border-2 hover:bg-white/20 dark:hover:bg-gray-800/50 transition-all duration-300"
              >
                <Link
                  href="/cv/Mohamed_Outerbah_CV.pdf"
                  target="_blank"
                  prefetch={false}
                  download
                  onClick={() => {
                    import("posthog-js").then(({ default: posthog }) =>
                      posthog.capture("cv_download"),
                    );
                  }}
                >
                  <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                  Download CV
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative order-first lg:order-last mx-auto flex items-center justify-center w-[220px] sm:w-[280px] md:w-[320px] lg:w-[360px] xl:w-[400px] aspect-square animate-fade-in-scale">
            {/* Profile image with gradient border */}
            <div className="relative z-10 w-full h-full aspect-square flex justify-center items-center">
              {/* Static gradient border */}
              <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-br from-blue-600 via-cyan-500 to-sky-600 shadow-2xl">
                {/* Image container */}
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-inner">
                  <Image
                    src={ProfilePicture}
                    alt="Mohamed Outerbah - Full-Stack Engineer"
                    width={400}
                    height={400}
                    priority
                    sizes="(max-width: 640px) 220px, (max-width: 768px) 280px, (max-width: 1024px) 320px, 400px"
                    className="object-cover object-top w-full h-full hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
