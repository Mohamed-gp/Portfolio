"use client";

import { motion } from "framer-motion";
import { useGameStore } from "@/store/gameStore";
import { AIRCRAFT } from "@/data/aircraft";

// Takeoff HUD - simplified display for runway phase
export function TakeoffHUD() {
  const { groundSpeed, currentAircraft } = useGameStore();
  const aircraft = AIRCRAFT[currentAircraft];

  // Speed thresholds
  const rotationSpeed = 45; // Speed to start rotating
  const liftoffSpeed = 55; // Speed for actual liftoff

  // Calculate progress
  const speedPercentage = Math.min((groundSpeed / liftoffSpeed) * 100, 100);
  const isAtRotation = groundSpeed >= rotationSpeed;
  const isReadyForLiftoff = groundSpeed >= liftoffSpeed;

  // Speed in knots (roughly)
  const speedKnots = Math.round(groundSpeed * 1.944);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 select-none">
      {/* Top Status Bar */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="absolute top-4 left-1/2 -translate-x-1/2"
      >
        <div className="bg-slate-900/90 border border-emerald-500/30 rounded-lg px-6 py-2">
          <div className="flex items-center gap-4">
            <span className="text-emerald-400 font-mono text-sm">
              {aircraft.name}
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-amber-400 font-mono text-sm animate-pulse">
              RUNWAY 09
            </span>
          </div>
        </div>
      </motion.div>

      {/* Speed Display - Left Side */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="absolute left-8 top-1/2 -translate-y-1/2"
      >
        <div className="bg-slate-900/90 border border-emerald-500/30 rounded-lg p-4 w-48">
          {/* Digital Speed */}
          <div className="text-center mb-4">
            <div className="text-slate-400 text-xs font-mono mb-1">
              GROUND SPEED
            </div>
            <div
              className={`text-4xl font-bold font-mono ${
                isReadyForLiftoff
                  ? "text-emerald-400"
                  : isAtRotation
                  ? "text-amber-400"
                  : "text-cyan-400"
              }`}
            >
              {speedKnots}
              <span className="text-lg ml-1 text-slate-500">KTS</span>
            </div>
          </div>

          {/* Speed Bar */}
          <div className="relative h-6 bg-slate-700/50 rounded-full overflow-hidden mb-2">
            <motion.div
              className={`h-full rounded-full transition-colors ${
                isReadyForLiftoff
                  ? "bg-emerald-500"
                  : isAtRotation
                  ? "bg-amber-500"
                  : "bg-cyan-500"
              }`}
              style={{ width: `${speedPercentage}%` }}
              animate={{ width: `${speedPercentage}%` }}
            />

            {/* Rotation marker */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-amber-400"
              style={{ left: `${(rotationSpeed / liftoffSpeed) * 100}%` }}
            >
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] text-amber-400 font-mono whitespace-nowrap">
                V<sub>R</sub>
              </span>
            </div>

            {/* Liftoff marker */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-emerald-400"
              style={{ left: "100%" }}
            >
              <span className="absolute -top-5 right-0 text-[10px] text-emerald-400 font-mono whitespace-nowrap">
                V<sub>LOF</sub>
              </span>
            </div>
          </div>

          {/* Legend */}
          <div className="flex justify-between text-xs font-mono text-slate-500">
            <span>0</span>
            <span>{Math.round(rotationSpeed * 1.944)} Vr</span>
            <span>{Math.round(liftoffSpeed * 1.944)}</span>
          </div>
        </div>
      </motion.div>

      {/* Status Messages - Center */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="absolute bottom-1/4 left-1/2 -translate-x-1/2"
      >
        {groundSpeed < 5 && (
          <div className="bg-slate-900/90 border border-cyan-500/30 rounded-lg px-6 py-3 text-center">
            <div className="text-cyan-400 font-bold text-lg mb-1">
              🛫 CLEARED FOR TAKEOFF
            </div>
            <div className="text-slate-400 text-sm">
              Hold{" "}
              <kbd className="bg-slate-700 px-2 py-0.5 rounded text-emerald-400 font-mono">
                W
              </kbd>{" "}
              or{" "}
              <kbd className="bg-slate-700 px-2 py-0.5 rounded text-cyan-400 font-mono">
                SHIFT
              </kbd>{" "}
              to accelerate
            </div>
          </div>
        )}

        {groundSpeed >= 5 && !isAtRotation && (
          <div className="bg-slate-900/90 border border-cyan-500/30 rounded-lg px-6 py-3 text-center">
            <div className="text-cyan-400 font-bold text-lg mb-1">
              ✈️ ACCELERATING
            </div>
            <div className="text-slate-400 text-sm">
              Maintain throttle until V<sub>R</sub>
            </div>
          </div>
        )}

        {isAtRotation && !isReadyForLiftoff && (
          <motion.div
            className="bg-slate-900/90 border border-amber-500/50 rounded-lg px-6 py-3 text-center"
            animate={{
              borderColor: [
                "rgba(245,158,11,0.5)",
                "rgba(245,158,11,1)",
                "rgba(245,158,11,0.5)",
              ],
            }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            <div className="text-amber-400 font-bold text-lg mb-1">
              ⚠️ ROTATE
            </div>
            <div className="text-slate-400 text-sm">
              Pull up with{" "}
              <kbd className="bg-slate-700 px-2 py-0.5 rounded text-emerald-400 font-mono">
                W
              </kbd>
            </div>
          </motion.div>
        )}

        {isReadyForLiftoff && (
          <motion.div
            className="bg-slate-900/90 border border-emerald-500/50 rounded-lg px-6 py-3 text-center"
            animate={{
              borderColor: [
                "rgba(16,185,129,0.5)",
                "rgba(16,185,129,1)",
                "rgba(16,185,129,0.5)",
              ],
              scale: [1, 1.02, 1],
            }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            <div className="text-emerald-400 font-bold text-lg mb-1">
              🚀 LIFTOFF!
            </div>
            <div className="text-slate-400 text-sm">
              Maintain rotation for positive climb
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Controls Reference - Bottom */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2"
      >
        <div className="flex gap-4 rounded-lg bg-slate-900/80 border border-slate-700 px-4 py-2 text-xs text-slate-400">
          <span>
            <kbd className="rounded bg-slate-700 px-1.5 py-0.5 text-emerald-400 mr-1">
              W
            </kbd>
            Accelerate / Rotate
          </span>
          <span>
            <kbd className="rounded bg-slate-700 px-1.5 py-0.5 text-cyan-400 mr-1">
              SHIFT
            </kbd>
            Afterburner
          </span>
          <span>
            <kbd className="rounded bg-slate-700 px-1.5 py-0.5 text-amber-400 mr-1">
              Q
            </kbd>
            <kbd className="rounded bg-slate-700 px-1.5 py-0.5 text-amber-400">
              E
            </kbd>
            Steer
          </span>
          <span>
            <kbd className="rounded bg-slate-700 px-1.5 py-0.5 text-red-400">
              S
            </kbd>
            Brake
          </span>
        </div>
      </motion.div>

      {/* Artificial Horizon Reference */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      >
        {/* Simple crosshair */}
        <svg
          width="120"
          height="80"
          viewBox="0 0 120 80"
          className="opacity-50"
        >
          {/* Horizon line */}
          <line
            x1="0"
            y1="40"
            x2="40"
            y2="40"
            stroke="#10b981"
            strokeWidth="2"
          />
          <line
            x1="80"
            y1="40"
            x2="120"
            y2="40"
            stroke="#10b981"
            strokeWidth="2"
          />

          {/* Center markers */}
          <circle
            cx="60"
            cy="40"
            r="3"
            fill="none"
            stroke="#10b981"
            strokeWidth="2"
          />

          {/* Wing markers */}
          <line
            x1="35"
            y1="40"
            x2="50"
            y2="40"
            stroke="#10b981"
            strokeWidth="2"
          />
          <line
            x1="70"
            y1="40"
            x2="85"
            y2="40"
            stroke="#10b981"
            strokeWidth="2"
          />

          {/* Vertical reference */}
          <line
            x1="60"
            y1="45"
            x2="60"
            y2="60"
            stroke="#10b981"
            strokeWidth="2"
          />
        </svg>
      </motion.div>
    </div>
  );
}
