"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { projectsImagesSkills } from "@/lib/data";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  BrainCircuit,
  Code2,
  Database,
  Layers,
  Search,
  X,
  Zap,
} from "lucide-react";

// Enhanced categories with icons
const categories = [
  {
    id: "all",
    label: "All Skills",
    icon: <BrainCircuit className="h-3.5 w-3.5" />,
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: <Code2 className="h-3.5 w-3.5" />,
  },
  {
    id: "backend",
    label: "Backend",
    icon: <Database className="h-3.5 w-3.5" />,
  },
  {
    id: "devops",
    label: "DevOps",
    icon: <Layers className="h-3.5 w-3.5" />,
  },
  {
    id: "tools",
    label: "Tools & Others",
    icon: <Zap className="h-3.5 w-3.5" />,
  },
];

// Generate a deterministic skill level based on skill name
function getSkillLevel(skillName: string) {
  const expertSkills = [
    "typescript",
    "javascript",
    "react",
    "next js",
    "next.js",
    "tailwind css",
    "node js",
    "node.js",
    "expo (react native)",
  ];
  const advancedSkills = [
    "express js",
    "express.js",
    "nestjs",
    "fastapi",
    "python",
    "mongodb",
    "postgresql",
    "prisma",
    "redis",
    "docker",
    "stripe",
    "redux toolkit",
    "supabase",
  ];

  const normalizedName = skillName.toLowerCase();

  if (expertSkills.includes(normalizedName)) {
    return 5; // Expert
  } else if (advancedSkills.includes(normalizedName)) {
    return 4; // Advanced
  }
  return 3; // Intermediate
}

// Deduplicate and categorize skills
const uniqueSkillsMap = new Map();

projectsImagesSkills.forEach((skill) => {
  // If we already have this skill by name, skip it
  if (uniqueSkillsMap.has(skill.name.toLowerCase())) {
    return;
  }

  let category = "tools";

  if (
    [
      "react",
      "next",
      "html",
      "css",
      "javascript",
      "typescript",
      "tailwind",
      "mui",
      "shadcn",
    ].some((tech) => skill.name.toLowerCase().includes(tech))
  ) {
    category = "frontend";
  } else if (
    [
      "node",
      "express",
      "mongodb",
      "mysql",
      "postgres",
      "graphql",
      "firebase",
      "supabase",
      "go",
      "fiber",
      "prisma",
      "dingo",
      "laravel",
      "nestjs",
      "fastapi",
      "python",
      "redis",
    ].some((tech) => skill.name.toLowerCase().includes(tech))
  ) {
    category = "backend";
  } else if (
    [
      "docker",
      "kubernetes",
      "git",
      "ci",
      "cd",
      "aws",
      "azure",
      "vercel",
      "github actions",
      "coolify",
      "pm2",
      "digitalocean",
      "sentry",
    ].some((tech) => skill.name.toLowerCase().includes(tech))
  ) {
    category = "devops";
  }

  const level = getSkillLevel(skill.name);

  uniqueSkillsMap.set(skill.name.toLowerCase(), {
    ...skill,
    category,
    level,
  });
});

// Convert Map back to array and sort by level
const categorizedSkills = Array.from(uniqueSkillsMap.values()).sort(
  (a, b) => b.level - a.level,
);

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [mounted, setMounted] = useState(false);

  // Handle browser hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Filter skills based on both category and search query
  const filteredSkills = categorizedSkills.filter(
    (skill) =>
      (activeCategory === "all" || skill.category === activeCategory) &&
      (searchQuery === "" ||
        skill.name.toLowerCase().includes(searchQuery.toLowerCase())),
  );

  // For better performance with many skills
  const staggerDelay = 0.02;

  return (
    <section id="skills" className="py-16 sm:py-20 relative overflow-hidden">
      {/* Improved background with better light/dark mode support */}
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.03] dark:opacity-[0.07]"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"></div>

      <div className="container px-4 sm:px-6 relative">
        <motion.div
          style={{ willChange: "transform, opacity" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12 max-w-3xl mx-auto"
        >
          <Badge
            variant="outline"
            className="mb-4 px-3 py-1 text-sm border-primary/20 bg-primary/5 dark:bg-primary/10"
          >
            My Skills
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <BrainCircuit className="h-7 w-7 text-primary hidden sm:inline" />
            Technical Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've developed a diverse skill set across the full stack, allowing
            me to build complete, scalable applications from concept to
            deployment.
          </p>
        </motion.div>

        {/* Search and filter controls - FIXED FOR MOBILE */}
        <div className="flex flex-col  justify-center items-center gap-4 mb-8">
          {/* Category filter pills - FIXED FOR MOBILE */}
          <div className="flex flex-wrap w-fit justify-center  overflow-x-auto py-1 px-1.5 rounded-full gap-1 sm:gap-2 bg-muted/40 backdrop-blur-sm border border-muted/30 dark:bg-gray-800/40 dark:border-gray-700/30">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-2 sm:px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all flex items-center gap-1 sm:gap-1.5 shrink-0",
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted dark:hover:bg-gray-700/50",
                )}
              >
                {category.icon}
                <span className="hidden xs:inline">{category.label}</span>
                <span className="inline xs:hidden">
                  {category.id === "all" ? "All" : category.label.split(" ")[0]}
                </span>
              </button>
            ))}
          </div>

          <div className="relative w-full max-w-xs">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-9 h-10 bg-muted/40 dark:bg-gray-800/40 backdrop-blur-sm border-muted dark:border-gray-700/50"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-2.5 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {mounted && (
          <AnimatePresence mode="wait">
            <motion.div
              style={{ willChange: "transform, opacity" }}
              className="flex flex-wrap justify-center gap-4 sm:gap-6"
              layout
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {filteredSkills.map((skill, ind) => (
                <motion.div
                  style={{ willChange: "transform, opacity" }}
                  key={ind + skill?.filename}
                  className="flex flex-col gap-2 items-center justify-center group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: ind * staggerDelay }}
                  layout
                >
                  <div className="relative">
                    {/* Skill level indicator (subtle ring) */}
                    <div
                      className={cn(
                        "absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm",
                        skill.level === 5
                          ? "bg-primary/30"
                          : skill.level === 4
                            ? "bg-blue-500/30"
                            : "bg-violet-500/30",
                      )}
                    ></div>

                    <motion.div
                      style={{ willChange: "transform, opacity" }}
                      className={cn(
                        "relative flex items-center justify-center",
                        "w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18",
                        "rounded-full",
                        "transition-all duration-300",
                        "bg-gray-800/90 dark:bg-gray-800" /* Dark background for better contrast in BOTH modes */,
                        "border border-gray-700/50 dark:border-gray-700/80" /* Dark border for light mode too */,
                        "shadow-md dark:shadow-md",
                        "group-hover:shadow-lg dark:group-hover:shadow-lg",
                        "group-hover:border-primary/30 dark:group-hover:border-primary/30",
                      )}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Light reflection */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent dark:from-white/10 dark:to-transparent opacity-70"></div>

                      {/* The icon */}
                      <div className="relative z-10 flex items-center justify-center w-full h-full p-3">
                        <Image
                          loading="lazy"
                          className={cn(
                            "w-full h-full",
                            "object-contain transition-all duration-300 group-hover:scale-110",
                            "drop-shadow-[0_2px_2px_rgba(255,255,255,0.15)]" /* Light drop shadow for dark backgrounds */,
                            "brightness-[1.15] contrast-[1.15]" /* Increased brightness and contrast */,
                          )}
                          src={`/skills/${skill?.filename}`}
                          alt={skill.name}
                          width={100}
                          height={100}
                          quality={90}
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Skill name with better visibility */}
                  <motion.p
                    style={{ willChange: "transform, opacity" }}
                    className="font-medium text-foreground dark:text-gray-200 text-xs sm:text-sm transition-colors"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 + ind * staggerDelay }}
                  >
                    {skill?.name}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      <style jsx>{`
        .bg-dot-pattern {
          background-image: radial-gradient(
            circle,
            var(--foreground) 1px,
            transparent 1px
          );
          background-size: 24px 24px;
        }

        /* Add xs breakpoint for better control on very small screens */
        @media (min-width: 480px) {
          .xs\\:inline {
            display: inline;
          }
          .xs\\:hidden {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
