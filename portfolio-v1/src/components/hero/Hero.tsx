"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ProfilePicture from "@/../public/profile/profilePicture2mb.jpg";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Full Stack Developer";
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
        <div className="container px-4 sm:px-6 grid lg:grid-cols-2 gap-8 md:gap-12 items-center pt-20">
          <div className="space-y-4 sm:space-y-6 text-center lg:text-left animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Mohamed Outerbah
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              {text}
              <span className="animate-blink">|</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              <strong className="text-foreground">Full-Stack Developer</strong>{" "}
              with <strong className="text-foreground">4+ years</strong> of
              experience building production applications with{" "}
              <strong className="text-foreground">99%+ uptime</strong> and{" "}
              <strong className="text-foreground">5.0/5 client rating</strong>.
              I architect scalable full-stack solutions from backend APIs to
              mobile apps, delivering for international clients across USA, UK,
              Netherlands, and Japan.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
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
                >
                  <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                  Download CV
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="group hover:bg-muted/50 transition-all duration-300"
              >
                <Link href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Let's Talk
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4 justify-center lg:justify-start">
              <Link
                href="https://github.com/Mohamed-gp"
                target="_blank"
                className="p-3 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 cursor-pointer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/mohamedouterbah"
                target="_blank"
                className="p-3 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 cursor-pointer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:mohamedterba6@gmail.com"
                target="_blank"
                className="p-3 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 cursor-pointer"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div className="relative order-first lg:order-last mx-auto w-[220px] sm:w-[280px] md:w-[320px] lg:w-[360px] xl:w-[400px] aspect-square animate-fade-in-scale">
            {/* Profile image with gradient border */}
            <div className="relative z-10 w-full h-full aspect-square flex justify-center items-center">
              {/* Static gradient border */}
              <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-br from-blue-600 via-cyan-500 to-sky-600 shadow-2xl">
                {/* Image container */}
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-inner">
                  <Image
                    src={ProfilePicture}
                    alt="Mohamed Outerbah - Full Stack Developer"
                    width={400}
                    height={400}
                    priority
                    className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
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
