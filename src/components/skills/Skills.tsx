"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  BrainCircuit,
  KeyRound,
  Network,
  Radio,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { skillGroups, type Skill } from "@/lib/data";

const conceptIcons = {
  rest: Network,
  websocket: Radio,
  rbac: ShieldCheck,
  rag: BrainCircuit,
  llm: Sparkles,
  oauth: KeyRound,
};

function SkillIcon({ skill }: { skill: Skill }) {
  if (skill.concept) {
    const Icon = conceptIcons[skill.concept];
    return <Icon className="h-7 w-7 text-primary" strokeWidth={1.75} />;
  }
  return (
    <Image
      src={`/skills/${skill.icon}`}
      alt=""
      width={28}
      height={28}
      className={cn(
        "h-7 w-7 object-contain",
        skill.tone === "light" && "invert dark:invert-0",
        skill.tone === "dark" && "dark:invert dark:hue-rotate-180",
      )}
    />
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20">
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12 max-w-3xl mx-auto"
        >
          <Badge
            variant="outline"
            className="mb-4 px-3 py-1 text-sm border-primary/20"
          >
            Skills
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Technical Skills
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: gi * 0.05 }}
              className="rounded-2xl border bg-card/60 p-5"
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {group.label}
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center gap-2 rounded-xl border bg-background px-2 py-3 text-center transition-colors hover:border-primary/40"
                  >
                    <SkillIcon skill={skill} />
                    <span className="text-xs font-medium leading-tight">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
