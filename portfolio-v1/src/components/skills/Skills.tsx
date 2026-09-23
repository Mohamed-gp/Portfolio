"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { skillGroups } from "@/lib/data";

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

        <div className="max-w-4xl mx-auto divide-y divide-border rounded-xl border bg-card/50">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 p-4 sm:p-5"
            >
              <h3 className="sm:w-40 shrink-0 font-semibold text-sm sm:text-base">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 rounded-md border bg-background px-2.5 py-1 text-sm"
                  >
                    {skill.icon && (
                      <Image
                        src={`/skills/${skill.icon}`}
                        alt=""
                        width={16}
                        height={16}
                        className="h-4 w-4"
                      />
                    )}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
