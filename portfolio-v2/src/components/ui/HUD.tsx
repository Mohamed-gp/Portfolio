"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useGameStore } from "@/store/gameStore";
import { AIRCRAFT } from "@/data/aircraft";
import { ISLANDS } from "@/data/islands";
import { useState, useEffect, useRef, useMemo } from "react";
import * as THREE from "three";

// Simulated flight telemetry (in a real game, this would come from physics engine)
interface FlightTelemetry {
  verticalSpeed: number;
  gForce: number;
  mach: number;
  aoa: number;
  pitch: number;
  roll: number;
  fuel: number;
  engineTemp: number;
  oilPressure: number;
}

// Primary Flight Display - Attitude Indicator
function AttitudeIndicator({ pitch, roll }: { pitch: number; roll: number }) {
  return (
    <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-emerald-500/50 shadow-lg shadow-emerald-500/20">
      {/* Sky and ground - rotates with roll, translates with pitch */}
      <motion.div
        className="absolute inset-[-50%] w-[200%] h-[200%]"
        style={{
          background:
            "linear-gradient(to bottom, #0c4a6e 0%, #0c4a6e 50%, #78350f 50%, #78350f 100%)",
          rotate: roll,
          y: pitch * 1.5,
        }}
      />

      {/* Horizon reference lines */}
      <motion.div className="absolute inset-0" style={{ rotate: roll }}>
        {/* Pitch ladder */}
        {[-30, -20, -10, 10, 20, 30].map((deg) => (
          <motion.div
            key={deg}
            className="absolute left-1/2 w-12 -translate-x-1/2 flex items-center justify-center"
            style={{
              top: `${50 - deg * 1.2 + pitch * 1.5}%`,
            }}
          >
            <div
              className={`flex items-center gap-1 ${
                deg > 0 ? "text-cyan-400" : "text-amber-600"
              }`}
            >
              <div
                className={`w-3 h-0.5 ${
                  deg > 0 ? "bg-cyan-400" : "bg-amber-600"
                }`}
              />
              <span className="text-[8px] font-mono opacity-80">
                {Math.abs(deg)}
              </span>
              <div
                className={`w-3 h-0.5 ${
                  deg > 0 ? "bg-cyan-400" : "bg-amber-600"
                }`}
              />
            </div>
          </motion.div>
        ))}

        {/* Main horizon line */}
        <div
          className="absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-white -translate-y-1/2"
          style={{ transform: `translateY(${pitch * 1.5}px)` }}
        />
      </motion.div>

      {/* Aircraft reference symbol (fixed) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          width="60"
          height="30"
          viewBox="0 0 60 30"
          className="text-amber-400"
        >
          {/* Wings */}
          <line
            x1="0"
            y1="15"
            x2="22"
            y2="15"
            stroke="currentColor"
            strokeWidth="3"
          />
          <line
            x1="38"
            y1="15"
            x2="60"
            y2="15"
            stroke="currentColor"
            strokeWidth="3"
          />
          {/* Center */}
          <circle cx="30" cy="15" r="4" fill="currentColor" />
          {/* Tail */}
          <line
            x1="30"
            y1="19"
            x2="30"
            y2="26"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Roll scale at top */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2">
        <svg width="60" height="12" viewBox="0 0 60 12" className="opacity-70">
          {[-45, -30, -15, 0, 15, 30, 45].map((angle, i) => {
            const x = 30 + Math.sin((angle * Math.PI) / 180) * 25;
            const y = 10 - Math.cos((angle * Math.PI) / 180) * 8;
            return (
              <line
                key={i}
                x1={x}
                y1={y}
                x2={x}
                y2={y + (angle === 0 ? 4 : 2)}
                stroke={angle === 0 ? "#fbbf24" : "#10b981"}
                strokeWidth={angle === 0 ? 2 : 1}
              />
            );
          })}
        </svg>
        {/* Roll pointer */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2"
          style={{ rotate: roll, transformOrigin: "center 50px" }}
        >
          <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-b-[6px] border-l-transparent border-r-transparent border-b-amber-400" />
        </motion.div>
      </div>

      {/* Digital readouts */}
      <div className="absolute bottom-1 left-1 bg-black/60 rounded px-1">
        <span className="text-[8px] font-mono text-emerald-400">
          {Math.round(pitch)}°
        </span>
      </div>
      <div className="absolute bottom-1 right-1 bg-black/60 rounded px-1">
        <span className="text-[8px] font-mono text-cyan-400">
          {Math.round(roll)}°
        </span>
      </div>
    </div>
  );
}

// Vertical Speed Indicator
function VerticalSpeedIndicator({ vs }: { vs: number }) {
  const clampedVS = Math.max(-3000, Math.min(3000, vs));
  const needleAngle = (clampedVS / 3000) * 90;

  return (
    <div className="relative w-16 h-16 rounded-full border border-emerald-500/40 bg-slate-900/80">
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[7px] text-slate-500 font-mono">FPM</span>
      </div>

      {/* Scale */}
      <svg className="absolute inset-0" viewBox="0 0 64 64">
        {[-3, -2, -1, 0, 1, 2, 3].map((mark) => {
          const angle = (mark / 3) * 90 - 90;
          const x1 = 32 + Math.cos((angle * Math.PI) / 180) * 24;
          const y1 = 32 + Math.sin((angle * Math.PI) / 180) * 24;
          const x2 = 32 + Math.cos((angle * Math.PI) / 180) * 28;
          const y2 = 32 + Math.sin((angle * Math.PI) / 180) * 28;
          return (
            <line
              key={mark}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={mark === 0 ? "#fbbf24" : "#10b981"}
              strokeWidth={mark === 0 ? 2 : 1}
              opacity={0.6}
            />
          );
        })}
      </svg>

      {/* Needle */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-6 h-0.5 bg-emerald-400 origin-left rounded"
        style={{
          rotate: needleAngle - 90,
          x: "-2px",
          y: "-1px",
        }}
      />

      {/* Digital readout */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-black/60 rounded px-1">
        <span
          className={`text-[9px] font-mono ${
            vs > 500
              ? "text-cyan-400"
              : vs < -500
              ? "text-amber-400"
              : "text-emerald-400"
          }`}
        >
          {vs > 0 ? "+" : ""}
          {Math.round(vs)}
        </span>
      </div>
    </div>
  );
}

// G-Force Meter
function GForceMeter({ g }: { g: number }) {
  const getGColor = () => {
    if (g > 7 || g < -2) return { text: "text-red-500", bg: "bg-red-500" };
    if (g > 5 || g < -1) return { text: "text-amber-400", bg: "bg-amber-400" };
    return { text: "text-emerald-400", bg: "bg-emerald-400" };
  };
  const colors = getGColor();

  return (
    <div className="bg-slate-900/80 border border-emerald-500/30 rounded-lg p-2 w-20">
      <div className="text-slate-500 font-mono text-[8px] text-center">
        G-LOAD
      </div>
      <div
        className={`font-mono text-2xl font-bold text-center ${colors.text}`}
      >
        {g.toFixed(1)}
      </div>
      {/* G meter bar */}
      <div className="h-1.5 w-full bg-slate-700 rounded mt-1 overflow-hidden">
        <motion.div
          className={`h-full ${colors.bg}`}
          style={{ width: `${Math.min((Math.abs(g) / 9) * 100, 100)}%` }}
        />
      </div>
      {/* Limit markers */}
      <div className="flex justify-between mt-0.5">
        <span className="text-[7px] text-red-500/60">-3</span>
        <span className="text-[7px] text-slate-500">0</span>
        <span className="text-[7px] text-red-500/60">9</span>
      </div>
    </div>
  );
}

// Mach Indicator
function MachIndicator({ mach }: { mach: number }) {
  const isTransonic = mach > 0.8 && mach < 1.2;
  const isSupersonic = mach >= 1.0;

  return (
    <div className="bg-slate-900/80 border border-emerald-500/30 rounded-lg p-2 w-20">
      <div className="text-slate-500 font-mono text-[8px] text-center">
        MACH
      </div>
      <div
        className={`font-mono text-2xl font-bold text-center ${
          isSupersonic
            ? "text-cyan-400"
            : isTransonic
            ? "text-amber-400"
            : "text-emerald-400"
        }`}
      >
        {mach.toFixed(2)}
      </div>
      {isSupersonic && (
        <div className="text-[8px] text-cyan-400 text-center animate-pulse">
          SUPERSONIC
        </div>
      )}
    </div>
  );
}

// Angle of Attack Indicator
function AOAIndicator({ aoa }: { aoa: number }) {
  const aoaDeg = aoa * (180 / Math.PI);
  const isWarning = Math.abs(aoaDeg) > 12;
  const isCritical = Math.abs(aoaDeg) > 18;

  return (
    <div className="bg-slate-900/80 border border-emerald-500/30 rounded-lg p-2 w-20">
      <div className="text-slate-500 font-mono text-[8px] text-center">AOA</div>
      <div
        className={`font-mono text-2xl font-bold text-center ${
          isCritical
            ? "text-red-500 animate-pulse"
            : isWarning
            ? "text-amber-400"
            : "text-emerald-400"
        }`}
      >
        {aoaDeg.toFixed(1)}°
      </div>
      {/* AOA gauge */}
      <div className="relative h-1.5 w-full bg-slate-700 rounded mt-1 overflow-hidden">
        <div className="absolute left-[70%] w-[30%] h-full bg-red-500/30" />
        <motion.div
          className={`absolute top-0 w-1 h-full ${
            isCritical
              ? "bg-red-500"
              : isWarning
              ? "bg-amber-400"
              : "bg-emerald-400"
          }`}
          style={{ left: `${Math.min(50 + aoaDeg * 2, 100)}%` }}
        />
      </div>
    </div>
  );
}

// Engine Status Display
function EngineStatus({ temp, oil }: { temp: number; oil: number }) {
  return (
    <div className="bg-slate-900/80 border border-emerald-500/30 rounded-lg p-2">
      <div className="text-slate-500 font-mono text-[8px] text-center mb-1">
        ENGINE
      </div>
      <div className="flex gap-3">
        <div className="flex flex-col items-center">
          <span className="text-[7px] text-slate-500">EGT</span>
          <span
            className={`text-xs font-mono ${
              temp > 850
                ? "text-red-500"
                : temp > 700
                ? "text-amber-400"
                : "text-emerald-400"
            }`}
          >
            {Math.round(temp)}°
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[7px] text-slate-500">OIL</span>
          <span
            className={`text-xs font-mono ${
              oil < 30
                ? "text-red-500"
                : oil < 50
                ? "text-amber-400"
                : "text-emerald-400"
            }`}
          >
            {Math.round(oil)}
          </span>
        </div>
      </div>
    </div>
  );
}

// Speed Tape (vertical)
function SpeedTape({ speed, maxSpeed }: { speed: number; maxSpeed: number }) {
  const displaySpeed = Math.round(speed * maxSpeed);
  const isLowSpeed = speed < 0.15;
  const isHighSpeed = speed > 0.9;

  // Generate tape markings
  const tapeMarks = useMemo(() => {
    const marks = [];
    const centerSpeed = displaySpeed;
    for (let i = -4; i <= 4; i++) {
      const markSpeed = Math.round((centerSpeed + i * 20) / 10) * 10;
      if (markSpeed >= 0 && markSpeed <= maxSpeed) {
        marks.push({ speed: markSpeed, offset: i * 20 });
      }
    }
    return marks;
  }, [displaySpeed, maxSpeed]);

  return (
    <div className="bg-slate-900/80 border border-emerald-500/30 rounded-lg p-2 w-24">
      <div className="text-slate-500 font-mono text-[8px] text-center">IAS</div>

      {/* Speed tape */}
      <div className="relative h-48 overflow-hidden mt-1">
        {/* Moving tape */}
        <div className="absolute inset-0 flex flex-col items-end justify-center">
          {tapeMarks.map(({ speed: markSpeed, offset }) => (
            <motion.div
              key={markSpeed}
              className="absolute right-0 flex items-center"
              style={{ top: `calc(50% + ${offset}px)` }}
            >
              <span
                className={`text-[10px] font-mono mr-1 ${
                  markSpeed === Math.round(displaySpeed / 10) * 10
                    ? "text-white"
                    : "text-slate-500"
                }`}
              >
                {markSpeed}
              </span>
              <div
                className={`w-3 h-px ${
                  markSpeed % 50 === 0 ? "bg-emerald-500" : "bg-slate-600"
                }`}
              />
            </motion.div>
          ))}
        </div>

        {/* Current speed box */}
        <div
          className={`absolute left-0 right-0 top-1/2 -translate-y-1/2 flex items-center justify-center ${
            isLowSpeed
              ? "bg-red-500/30"
              : isHighSpeed
              ? "bg-amber-500/30"
              : "bg-emerald-500/30"
          } rounded py-1`}
        >
          <span
            className={`font-mono text-2xl font-bold ${
              isLowSpeed
                ? "text-red-400"
                : isHighSpeed
                ? "text-amber-400"
                : "text-white"
            }`}
          >
            {displaySpeed}
          </span>
        </div>

        {/* Speed trend arrow */}
        <div className="absolute top-1/2 -left-1 -translate-y-1/2">
          <div
            className={`w-0 h-0 border-t-[6px] border-b-[6px] border-r-[8px] border-t-transparent border-b-transparent ${
              isLowSpeed ? "border-r-red-500" : "border-r-emerald-500"
            }`}
          />
        </div>

        {/* Stall/Overspeed zones */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-red-500/30 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-amber-500/30 to-transparent" />
      </div>

      <div className="text-emerald-400 font-mono text-[8px] text-center mt-1">
        KNOTS
      </div>
    </div>
  );
}

// Altitude Tape (vertical)
function AltitudeTape({
  altitude,
  maxAlt,
}: {
  altitude: number;
  maxAlt: number;
}) {
  const displayAlt = Math.round(altitude * 100);
  const isLowAlt = altitude < 20;

  const tapeMarks = useMemo(() => {
    const marks = [];
    const centerAlt = displayAlt;
    for (let i = -4; i <= 4; i++) {
      const markAlt = Math.round((centerAlt + i * 500) / 100) * 100;
      if (markAlt >= 0 && markAlt <= maxAlt * 100) {
        marks.push({ alt: markAlt, offset: i * 20 });
      }
    }
    return marks;
  }, [displayAlt, maxAlt]);

  return (
    <div className="bg-slate-900/80 border border-cyan-500/30 rounded-lg p-2 w-24">
      <div className="text-slate-500 font-mono text-[8px] text-center">ALT</div>

      {/* Altitude tape */}
      <div className="relative h-48 overflow-hidden mt-1">
        <div className="absolute inset-0 flex flex-col items-start justify-center">
          {tapeMarks.map(({ alt: markAlt, offset }) => (
            <motion.div
              key={markAlt}
              className="absolute left-0 flex items-center"
              style={{ top: `calc(50% - ${offset}px)` }}
            >
              <div
                className={`w-3 h-px ${
                  markAlt % 1000 === 0 ? "bg-cyan-500" : "bg-slate-600"
                }`}
              />
              <span
                className={`text-[10px] font-mono ml-1 ${
                  markAlt === Math.round(displayAlt / 100) * 100
                    ? "text-white"
                    : "text-slate-500"
                }`}
              >
                {markAlt >= 1000 ? `${(markAlt / 1000).toFixed(1)}K` : markAlt}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Current altitude box */}
        <div
          className={`absolute left-0 right-0 top-1/2 -translate-y-1/2 flex items-center justify-center ${
            isLowAlt ? "bg-amber-500/30" : "bg-cyan-500/30"
          } rounded py-1`}
        >
          <span
            className={`font-mono text-2xl font-bold ${
              isLowAlt ? "text-amber-400" : "text-white"
            }`}
          >
            {displayAlt}
          </span>
        </div>

        {/* Ground proximity zone */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-amber-500/30 to-transparent" />
      </div>

      <div className="text-cyan-400 font-mono text-[8px] text-center mt-1">
        FEET MSL
      </div>
    </div>
  );
}

// Compass/Heading Indicator
function HeadingIndicator({ heading }: { heading: number }) {
  const getCardinal = (deg: number) => {
    if (deg >= 337.5 || deg < 22.5) return "N";
    if (deg >= 22.5 && deg < 67.5) return "NE";
    if (deg >= 67.5 && deg < 112.5) return "E";
    if (deg >= 112.5 && deg < 157.5) return "SE";
    if (deg >= 157.5 && deg < 202.5) return "S";
    if (deg >= 202.5 && deg < 247.5) return "SW";
    if (deg >= 247.5 && deg < 292.5) return "W";
    return "NW";
  };

  return (
    <div className="bg-slate-900/80 border border-emerald-500/30 rounded-lg px-4 py-2">
      <div className="relative w-72 h-14 overflow-hidden">
        {/* Compass tape */}
        <motion.div
          className="absolute top-2 flex whitespace-nowrap"
          style={{ x: `-${((heading % 360) / 360) * 720 + 144}px` }}
        >
          {Array.from({ length: 73 }).map((_, i) => {
            const deg = (i * 5) % 360;
            const isCardinal = deg % 90 === 0;
            const isMajor = deg % 30 === 0;
            const label =
              deg === 0
                ? "N"
                : deg === 90
                ? "E"
                : deg === 180
                ? "S"
                : deg === 270
                ? "W"
                : deg.toString();

            return (
              <div key={i} className="flex flex-col items-center w-10">
                <div
                  className={`h-${
                    isCardinal ? "4" : isMajor ? "3" : "2"
                  } w-px ${
                    isCardinal
                      ? "bg-amber-400"
                      : isMajor
                      ? "bg-emerald-500"
                      : "bg-slate-600"
                  }`}
                  style={{
                    height: isCardinal ? "16px" : isMajor ? "12px" : "8px",
                  }}
                />
                {(isCardinal || isMajor) && (
                  <span
                    className={`text-[10px] font-mono ${
                      isCardinal
                        ? "text-amber-400 font-bold"
                        : "text-emerald-500"
                    }`}
                  >
                    {label}
                  </span>
                )}
              </div>
            );
          })}
        </motion.div>

        {/* Center marker */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-amber-400" />
        </div>

        {/* Heading box */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black/80 border border-emerald-500/30 rounded px-3 py-0.5">
          <span className="text-amber-400 font-mono font-bold text-lg">
            {Math.round(heading).toString().padStart(3, "0")}°
          </span>
          <span className="text-emerald-400 font-mono text-sm ml-2">
            {getCardinal(heading)}
          </span>
        </div>
      </div>
    </div>
  );
}

// Fuel Gauge
function FuelGauge({ fuel }: { fuel: number }) {
  const isLow = fuel < 20;
  const isCritical = fuel < 10;

  return (
    <div className="bg-slate-900/80 border border-emerald-500/30 rounded-lg p-2">
      <div className="flex items-center gap-2">
        <span className="text-slate-500 font-mono text-[8px]">FUEL</span>
        <div className="w-24 h-2 bg-slate-700 rounded overflow-hidden">
          <motion.div
            className={`h-full ${
              isCritical
                ? "bg-red-500 animate-pulse"
                : isLow
                ? "bg-amber-500"
                : "bg-emerald-500"
            }`}
            style={{ width: `${fuel}%` }}
          />
        </div>
        <span
          className={`font-mono text-xs ${
            isCritical
              ? "text-red-500"
              : isLow
              ? "text-amber-400"
              : "text-emerald-400"
          }`}
        >
          {Math.round(fuel)}%
        </span>
      </div>
    </div>
  );
}

export function HUD() {
  const {
    speed,
    altitude,
    heading,
    currentIsland,
    currentAircraft,
    showHUD,
    isLanded,
  } = useGameStore();
  const aircraft = AIRCRAFT[currentAircraft];

  // Simulated telemetry
  const [telemetry, setTelemetry] = useState<FlightTelemetry>({
    verticalSpeed: 0,
    gForce: 1,
    mach: 0,
    aoa: 0,
    pitch: 0,
    roll: 0,
    fuel: 85,
    engineTemp: 620,
    oilPressure: 72,
  });

  const prevAltRef = useRef(altitude);
  const prevSpeedRef = useRef(speed);

  // Update telemetry
  useEffect(() => {
    const dt = 0.033;
    const verticalSpeed = ((altitude - prevAltRef.current) / dt) * 100;
    prevAltRef.current = altitude;

    const speedDelta = (speed - prevSpeedRef.current) / dt;
    prevSpeedRef.current = speed;

    // Simulate G-force from acceleration and pitch
    const accelG = speedDelta * 3;
    const pitchG = Math.sin((telemetry.pitch * Math.PI) / 180);
    const gForce = 1 + accelG + pitchG * 0.5 + (Math.random() - 0.5) * 0.1;

    // Estimate mach from speed
    const mach = speed * 1.0;

    // Simulate pitch and roll (smoother movement)
    const targetPitch = (verticalSpeed / 100) * 15;
    const targetRoll = Math.sin(Date.now() * 0.0005) * 8;

    // AOA estimate
    const aoa = targetPitch * 0.05;

    // Engine telemetry
    const engineTemp = 580 + speed * 400 + Math.random() * 20;
    const oilPressure = 75 - speed * 10 + Math.random() * 5;

    setTelemetry((prev) => ({
      verticalSpeed,
      gForce: THREE.MathUtils.lerp(
        prev.gForce,
        Math.max(-3, Math.min(9, gForce)),
        0.3
      ),
      mach,
      aoa,
      pitch: THREE.MathUtils.lerp(prev.pitch, targetPitch, 0.1),
      roll: THREE.MathUtils.lerp(prev.roll, targetRoll, 0.05),
      fuel: Math.max(0, prev.fuel - 0.002),
      engineTemp: THREE.MathUtils.lerp(prev.engineTemp, engineTemp, 0.1),
      oilPressure: THREE.MathUtils.lerp(prev.oilPressure, oilPressure, 0.1),
    }));
  }, [speed, altitude, telemetry.pitch]);

  // Warning states
  const isLowSpeed = speed < 0.15;
  const isOverspeed = speed > 0.95;
  const canLand = currentIsland && speed < 0.25;

  if (!showHUD) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-30 font-mono">
      {/* Critical Warnings */}
      <AnimatePresence>
        {isLowSpeed && !isLanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute left-1/2 top-20 -translate-x-1/2"
          >
            <div className="flex items-center gap-3 rounded-lg border-2 border-red-500 bg-red-500/20 px-6 py-3 animate-pulse">
              <span className="text-3xl">⚠️</span>
              <div>
                <div className="text-red-500 font-bold text-xl">
                  STALL WARNING
                </div>
                <div className="text-red-400 text-sm">INCREASE THRUST</div>
              </div>
              <span className="text-3xl">⚠️</span>
            </div>
          </motion.div>
        )}

        {isOverspeed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute left-1/2 top-20 -translate-x-1/2"
          >
            <div className="rounded-lg border-2 border-amber-500 bg-amber-500/20 px-6 py-2 text-amber-400 font-bold text-lg">
              OVERSPEED - REDUCE THROTTLE
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Bar */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="absolute left-0 right-0 top-0 flex items-center justify-between bg-gradient-to-b from-slate-900/90 to-transparent p-4"
      >
        {/* Aircraft Info */}
        <div className="flex items-center gap-2">
          <div className="rounded bg-slate-800/80 border border-emerald-500/30 px-3 py-1.5">
            <span className="text-slate-400 text-xs">ACFT: </span>
            <span className="text-emerald-400 font-bold">{aircraft.name}</span>
          </div>
          <EngineStatus
            temp={telemetry.engineTemp}
            oil={telemetry.oilPressure}
          />
        </div>

        {/* Center - Heading */}
        <HeadingIndicator heading={heading} />

        {/* Fuel */}
        <div className="flex items-center gap-2">
          <FuelGauge fuel={telemetry.fuel} />
          {currentIsland && (
            <div className="rounded bg-slate-800/80 border border-cyan-500/30 px-3 py-1.5">
              <span className="text-slate-400 text-xs">TGT: </span>
              <span className="text-cyan-400 font-bold">
                {ISLANDS[currentIsland].name}
              </span>
            </div>
          )}
        </div>
      </motion.div>

      {/* Left Panel - Speed & Flight Data */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-2"
      >
        <SpeedTape speed={speed} maxSpeed={340} />
        <div className="flex gap-2">
          <MachIndicator mach={telemetry.mach} />
          <AOAIndicator aoa={telemetry.aoa} />
        </div>
      </motion.div>

      {/* Center - Attitude Indicator */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3"
      >
        <AttitudeIndicator pitch={telemetry.pitch} roll={telemetry.roll} />
        <VerticalSpeedIndicator vs={telemetry.verticalSpeed} />
      </motion.div>

      {/* Right Panel - Altitude & G-Force */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2"
      >
        <AltitudeTape altitude={altitude} maxAlt={300} />
        <GForceMeter g={telemetry.gForce} />
      </motion.div>

      {/* Landing Indicator */}
      <AnimatePresence>
        {canLand && !isLanded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute left-1/2 bottom-28 -translate-x-1/2"
          >
            <div className="rounded-lg border-2 border-emerald-500 bg-slate-900/90 px-6 py-3 text-center">
              <div className="text-emerald-400 font-bold text-lg mb-1">
                {ISLANDS[currentIsland].name.toUpperCase()} - APPROACH
              </div>
              <div className="flex items-center justify-center gap-4 text-sm mb-2">
                <span
                  className={
                    speed < 0.1 ? "text-emerald-400" : "text-amber-400"
                  }
                >
                  SPD: {speed < 0.1 ? "✓" : "↓"} {Math.round(speed * 340)}
                </span>
                <span className="text-slate-500">|</span>
                <span
                  className={
                    altitude < 80 ? "text-emerald-400" : "text-amber-400"
                  }
                >
                  ALT: {altitude < 80 ? "✓" : "↓"} {Math.round(altitude * 100)}
                </span>
              </div>
              {speed < 0.1 ? (
                <motion.div
                  className="text-emerald-400 font-bold animate-pulse"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                >
                  PRESS [SPACE] TO LAND
                </motion.div>
              ) : (
                <div className="text-amber-400 text-sm">
                  Reduce speed below 35 KTS
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Controls Reference */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2"
      >
        <div className="flex gap-4 rounded-lg bg-slate-900/80 border border-slate-700 px-4 py-2 text-xs text-slate-400">
          <span>
            <kbd className="rounded bg-slate-700 px-1.5 py-0.5 text-emerald-400 mr-1">
              W
            </kbd>
            <kbd className="rounded bg-slate-700 px-1.5 py-0.5 text-emerald-400">
              S
            </kbd>{" "}
            Pitch
          </span>
          <span>
            <kbd className="rounded bg-slate-700 px-1.5 py-0.5 text-emerald-400 mr-1">
              A
            </kbd>
            <kbd className="rounded bg-slate-700 px-1.5 py-0.5 text-emerald-400">
              D
            </kbd>{" "}
            Roll
          </span>
          <span>
            <kbd className="rounded bg-slate-700 px-1.5 py-0.5 text-emerald-400 mr-1">
              Q
            </kbd>
            <kbd className="rounded bg-slate-700 px-1.5 py-0.5 text-emerald-400">
              E
            </kbd>{" "}
            Yaw
          </span>
          <span>
            <kbd className="rounded bg-slate-700 px-1.5 py-0.5 text-cyan-400">
              SHIFT
            </kbd>{" "}
            Afterburner
          </span>
          <span>
            <kbd className="rounded bg-slate-700 px-1.5 py-0.5 text-amber-400">
              SPACE
            </kbd>{" "}
            Land
          </span>
        </div>
      </motion.div>
    </div>
  );
}
