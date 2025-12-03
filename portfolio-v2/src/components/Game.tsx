"use client";

import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { useGameStore } from "@/store/gameStore";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { MissionBriefing } from "@/components/ui/MissionBriefing";
import { HUD } from "@/components/ui/HUD";
import { TakeoffHUD } from "@/components/ui/TakeoffHUD";
import { AircraftSelector } from "@/components/ui/AircraftSelector";
import { IslandContent } from "@/components/ui/IslandContent";

// Dynamically import the 3D Scene to avoid SSR issues
const Scene = dynamic(
  () => import("@/components/3d/Scene").then((mod) => mod.Scene),
  { ssr: false }
);

export function Game() {
  const { isLoading, showMissionBriefing, isFlying, isLanded, isOnRunway } =
    useGameStore();

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-slate-950">
      {/* 3D Scene - Always rendered in background */}
      <Scene />

      {/* UI Overlays */}
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      <AnimatePresence>
        {!isLoading && showMissionBriefing && (
          <MissionBriefing key="briefing" />
        )}
      </AnimatePresence>

      {/* Takeoff HUD - Visible when on runway */}
      {isOnRunway && !isFlying && !showMissionBriefing && <TakeoffHUD />}

      {/* Flight HUD - Visible when flying */}
      {isFlying && !isLanded && <HUD />}

      {/* Aircraft Selector */}
      <AircraftSelector />

      {/* Island Content Modal */}
      <IslandContent />
    </main>
  );
}
