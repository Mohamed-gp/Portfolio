"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGameStore } from "@/store/gameStore";
import { AIRCRAFT } from "@/data/aircraft";

const briefingLines = [
  "> SYSTEM ONLINE",
  "> PILOT IDENTIFIED: Mohamed Outerbah",
  "> CLEARANCE LEVEL: Full-Stack Developer",
  "> EXPERIENCE: 4+ Years | 6+ Production Apps",
  "> ",
  "> MISSION BRIEFING:",
  "> Your objective is to explore the portfolio airspace.",
  "> Multiple landing zones detected across the region.",
  "> ",
  "> TAKEOFF PROCEDURE:",
  "> Hold W or SHIFT to accelerate on runway",
  "> At rotation speed, pull back (W) to lift off",
  "> ",
  "> FLIGHT CONTROLS:",
  "> W/S - Pitch control (nose up/down)",
  "> A/D - Roll control (bank left/right)",
  "> Q/E - Yaw/Turn (rudder)",
  "> SHIFT - Afterburner (max thrust)",
  "> SPACE - Land on island when near",
  "> ",
  "> AIRCRAFT STATUS: Ready for deployment",
  "> ",
  "> Good luck, pilot. The skies are yours.",
  "> ",
  "> Press ENTER or click to taxi to runway...",
];

export function MissionBriefing() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const { setShowMissionBriefing, setOnRunway, currentAircraft } =
    useGameStore();
  const aircraft = AIRCRAFT[currentAircraft];

  const startMission = useCallback(() => {
    setShowMissionBriefing(false);
    setOnRunway(true); // Start on runway, not flying
  }, [setShowMissionBriefing, setOnRunway]);

  const skipBriefing = useCallback(() => {
    setDisplayedLines(briefingLines);
    setIsComplete(true);
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (currentLineIndex < briefingLines.length) {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, briefingLines[currentLineIndex]]);
        setCurrentLineIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timer);
    } else {
      setIsComplete(true);
    }
  }, [currentLineIndex]);

  // Listen for enter key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter" && isComplete) {
        startMission();
      } else if (event.key === "Escape") {
        skipBriefing();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isComplete, startMission, skipBriefing]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-40 flex items-center justify-center bg-slate-950/95 p-4"
    >
      <div className="relative w-full max-w-2xl">
        {/* Terminal Window */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="overflow-hidden rounded-lg border border-emerald-500/30 bg-slate-900/90 shadow-2xl shadow-emerald-500/10"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 border-b border-emerald-500/30 bg-slate-800/50 px-4 py-2">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <span className="ml-2 font-mono text-xs text-slate-400">
              mission-briefing.sh — {aircraft.name}
            </span>
          </div>

          {/* Terminal Content */}
          <div className="h-[450px] overflow-y-auto p-4 font-mono text-sm">
            {displayedLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`${
                  line.startsWith("> MISSION") ||
                  line.startsWith("> FLIGHT") ||
                  line.startsWith("> TAKEOFF")
                    ? "text-emerald-400 font-bold"
                    : line.startsWith("> AIRCRAFT")
                      ? "text-cyan-400"
                      : "text-green-400"
                }`}
              >
                {line}
              </motion.div>
            ))}

            {/* Blinking Cursor */}
            {!isComplete && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="inline-block h-4 w-2 bg-emerald-400"
              />
            )}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <AnimatePresence>
          {isComplete && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 flex justify-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={startMission}
                className="rounded-lg bg-emerald-500 px-6 py-3 font-mono font-bold text-slate-900 transition-colors hover:bg-emerald-400"
              >
                🛫 TAXI TO RUNWAY
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Skip hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-4 text-center font-mono text-xs text-slate-500"
        >
          Press ESC to skip • Press ENTER to begin when ready
        </motion.p>
      </div>
    </motion.div>
  );
}
