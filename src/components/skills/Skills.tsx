"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import {
  BrainCircuit,
  KeyRound,
  Network,
  Radio,
  RadioTower,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { skillGroups, type Skill } from "@/lib/data";

const conceptIcons = {
  rest: Network,
  websocket: Radio,
  sse: RadioTower,
  rbac: ShieldCheck,
  rag: BrainCircuit,
  llm: Sparkles,
  oauth: KeyRound,
};

function SkillIcon({ skill }: { skill: Skill }) {
  if (skill.concept) {
    const Icon = conceptIcons[skill.concept];
    return <Icon className="h-8 w-8 text-primary" strokeWidth={1.75} />;
  }
  return (
    <Image
      src={`/skills/${skill.icon}`}
      alt=""
      width={32}
      height={32}
      className={cn(
        "h-8 w-8 object-contain",
        skill.tone === "light" && "invert dark:invert-0",
        skill.tone === "dark" && "dark:invert dark:hue-rotate-180",
      )}
    />
  );
}

export default function Skills() {
  const [active, setActive] = useState(skillGroups[0].label);
  const group = skillGroups.find((g) => g.label === active) ?? skillGroups[0];

  return (
    <section id="skills" className="py-16 sm:py-20">
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 max-w-3xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Technical Skills
          </h2>
        </motion.div>

        <div
          role="tablist"
          aria-label="Skill categories"
          className="mx-auto mb-8 flex max-w-3xl flex-wrap justify-center gap-2"
        >
          {skillGroups.map((g) => (
            <button
              key={g.label}
              role="tab"
              aria-selected={g.label === active}
              onClick={() => setActive(g.label)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                g.label === active
                  ? "border-primary bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:border-primary/40 hover:text-foreground",
              )}
            >
              {g.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={group.label}
            role="tabpanel"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-auto grid max-w-3xl grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5"
          >
            {group.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center gap-2 rounded-xl border bg-card/60 px-2 py-4 text-center transition-colors hover:border-primary/40"
              >
                <SkillIcon skill={skill} />
                <span className="text-xs sm:text-sm font-medium leading-tight">
                  {skill.name}
                </span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
