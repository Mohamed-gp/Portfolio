"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useGameStore } from "@/store/gameStore";
import { ISLANDS } from "@/data/islands";
import { AIRCRAFT } from "@/data/aircraft";
import type { IslandType } from "@/types";

// About Island Content
function AboutContent() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="h-20 w-20 rounded-full bg-emerald-500/20 flex items-center justify-center text-4xl">
          👨‍💻
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">Mohamed Outerbah</h3>
          <p className="text-emerald-400">Full-Stack Developer</p>
        </div>
      </div>

      <p className="text-slate-300 leading-relaxed">
        Welcome aboard, pilot! I'm a passionate developer from Algeria with 4+
        years of experience building production applications. From multi-service
        logistics platforms to AI-powered analytics, I deliver scalable
        full-stack solutions for international clients.
      </p>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="rounded-lg bg-slate-800/50 p-3">
          <div className="text-slate-400">Location</div>
          <div className="text-white">🇩🇿 Algeria</div>
        </div>
        <div className="rounded-lg bg-slate-800/50 p-3">
          <div className="text-slate-400">Status</div>
          <div className="text-emerald-400">Available for work</div>
        </div>
        <div className="rounded-lg bg-slate-800/50 p-3">
          <div className="text-slate-400">Experience</div>
          <div className="text-white">4+ Years</div>
        </div>
        <div className="rounded-lg bg-slate-800/50 p-3">
          <div className="text-slate-400">Specialty</div>
          <div className="text-white">React, Next.js & NestJS</div>
        </div>
      </div>
    </div>
  );
}

// Projects Island Content
function ProjectsContent() {
  const projects = [
    {
      title: "HaulHub - Logistics Platform",
      description:
        "Multi-service logistics platform (Uber-like) with 5+ user roles",
      tech: ["Next.js", "NestJS", "React Native"],
      status: "Live",
    },
    {
      title: "Analytics Depot - AI Platform",
      description: "RAG-based AI system with FastAPI and Next.js frontend",
      tech: ["FastAPI", "Next.js", "Python"],
      status: "Live",
    },
    {
      title: "Cribbix - Real Estate",
      description:
        "Real estate platform with Redis caching and Stripe subscriptions",
      tech: ["Next.js", "Redis", "Stripe"],
      status: "Live",
    },
    {
      title: "Munia - Open Source",
      description: "Contributed to Next.js project with 300+ GitHub stars",
      tech: ["Next.js", "TypeScript", "Auth"],
      status: "Completed",
      url: "https://munia.norcio.dev/",
    },
  ];

  return (
    <div className="space-y-4">
      <p className="text-slate-400 text-sm">Missions completed and ongoing:</p>

      {projects.map((project, i) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className="rounded-lg border border-slate-700 bg-slate-800/50 p-4"
        >
          <div className="flex items-start justify-between">
            <h4 className="font-semibold text-white">{project.title}</h4>
            <span
              className={`text-xs px-2 py-1 rounded ${
                project.status === "Completed"
                  ? "bg-emerald-500/20 text-emerald-400"
                  : "bg-amber-500/20 text-amber-400"
              }`}
            >
              {project.status}
            </span>
          </div>
          <p className="mt-1 text-sm text-slate-400">{project.description}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs bg-slate-700 px-2 py-1 rounded text-cyan-400"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Skills Island Content
function SkillsContent() {
  const skills = [
    { name: "React / Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js / NestJS", level: 88 },
    { name: "FastAPI / Python", level: 80 },
    { name: "PostgreSQL / Redis", level: 85 },
    { name: "Docker / DevOps", level: 80 },
    { name: "React Native / Expo", level: 85 },
    { name: "Tailwind CSS", level: 95 },
  ];

  return (
    <div className="space-y-4">
      <p className="text-slate-400 text-sm">
        Technical arsenal at your disposal:
      </p>

      {skills.map((skill, i) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "100%" }}
          transition={{ delay: i * 0.1 }}
        >
          <div className="flex justify-between text-sm mb-1">
            <span className="text-white">{skill.name}</span>
            <span className="text-emerald-400">{skill.level}%</span>
          </div>
          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
              className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Contact Island Content
function ContactContent() {
  return (
    <div className="space-y-4">
      <p className="text-slate-400 text-sm">Establish communication:</p>

      <form className="space-y-3">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-2 text-white placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-2 text-white placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none"
        />
        <textarea
          placeholder="Your Message"
          rows={3}
          className="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-2 text-white placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none resize-none"
        />
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full rounded-lg bg-emerald-500 py-2 font-semibold text-slate-900 transition-colors hover:bg-emerald-400"
        >
          📡 Send Transmission
        </motion.button>
      </form>

      <div className="flex justify-center gap-4 pt-2">
        <a
          href="https://github.com/Mohamed-gp"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-white transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/mohamedouterbah"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-white transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="mailto:mohamedterba6@gmail.com"
          className="text-slate-400 hover:text-white transition-colors"
        >
          Email
        </a>
      </div>
    </div>
  );
}

// Hangar Island Content
function HangarContent() {
  const { unlockedAircraft, unlockAircraft } = useGameStore();

  const handleUnlock = (id: "f15-eagle" | "f35-lightning") => {
    unlockAircraft(id);
  };

  return (
    <div className="space-y-4">
      <p className="text-slate-400 text-sm">
        Welcome to the secret hangar! Unlock new aircraft:
      </p>

      {Object.values(AIRCRAFT).map((aircraft) => {
        const isUnlocked = unlockedAircraft.includes(aircraft.id);

        return (
          <div
            key={aircraft.id}
            className={`rounded-lg border p-4 ${
              isUnlocked
                ? "border-emerald-500/50 bg-emerald-500/10"
                : "border-slate-700 bg-slate-800/50"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{isUnlocked ? "✈️" : "🔒"}</span>
                <div>
                  <h4 className="font-semibold text-white">{aircraft.name}</h4>
                  <p className="text-xs text-slate-400">
                    {aircraft.description}
                  </p>
                </div>
              </div>

              {!isUnlocked && aircraft.id !== "b2-spirit" && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    handleUnlock(aircraft.id as "f15-eagle" | "f35-lightning")
                  }
                  className="rounded bg-amber-500 px-3 py-1 text-sm font-semibold text-slate-900"
                >
                  UNLOCK
                </motion.button>
              )}

              {isUnlocked && (
                <span className="text-xs text-emerald-400 font-mono">
                  UNLOCKED ✓
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Main Island Content Panel
export function IslandContent() {
  const { currentIsland, isLanded, setLanded, setFlying } = useGameStore();

  const handleTakeoff = () => {
    setLanded(false);
    setFlying(true);
  };

  const getContent = (island: IslandType) => {
    switch (island) {
      case "about":
        return <AboutContent />;
      case "projects":
        return <ProjectsContent />;
      case "skills":
        return <SkillsContent />;
      case "contact":
        return <ContactContent />;
      case "hangar":
        return <HangarContent />;
      default:
        return null;
    }
  };

  if (!currentIsland || !isLanded) return null;

  const island = ISLANDS[currentIsland];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-40 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/95"
        >
          {/* Header */}
          <div
            className="p-4"
            style={{
              background: `linear-gradient(135deg, ${island.color}33, transparent)`,
            }}
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">{island.icon}</span>
              <div>
                <h2 className="text-xl font-bold text-white">{island.name}</h2>
                <p className="text-sm text-slate-400">{island.description}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="max-h-[60vh] overflow-y-auto p-4">
            {getContent(currentIsland)}
          </div>

          {/* Footer */}
          <div className="border-t border-slate-700 p-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleTakeoff}
              className="w-full rounded-lg bg-emerald-500 py-3 font-mono font-bold text-slate-900 transition-colors hover:bg-emerald-400"
            >
              🛫 TAKEOFF
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
