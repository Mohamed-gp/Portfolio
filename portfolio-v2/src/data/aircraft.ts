import type { Aircraft, AircraftType } from "@/types";

export const AIRCRAFT: Record<AircraftType, Aircraft> = {
  "b2-spirit": {
    id: "b2-spirit",
    name: "B-2 Spirit",
    description:
      "Stealth Bomber - Silent but deadly. Perfect for sneaking past deadlines.",
    speed: 0.8,
    agility: 0.6,
    unlocked: true,
    color: "#1a1a2e",
    quotes: [
      "Stealth mode activated 🕶️",
      "Ready to nuke some deadlines 💣",
      "Flying under the radar...",
      "Deploying portfolio payload...",
      "Silent but deadly approach initiated",
    ],
  },
  "f15-eagle": {
    id: "f15-eagle",
    name: "F-15 Eagle",
    description:
      "Air Superiority Fighter - When you need to dominate the skies and your inbox.",
    speed: 1.0,
    agility: 0.9,
    unlocked: false,
    color: "#4a5568",
    quotes: [
      "Eagle has left the nest 🦅",
      "Air superiority achieved!",
      "Going full afterburner!",
      "Target acquired: your attention",
      "Breaking the sound barrier of productivity",
    ],
  },
  "f35-lightning": {
    id: "f35-lightning",
    name: "F-35 Lightning II",
    description:
      "Stealth Multirole Fighter - The Swiss Army knife of the skies.",
    speed: 0.95,
    agility: 0.85,
    unlocked: false,
    color: "#2d3748",
    quotes: [
      "Lightning strikes twice ⚡",
      "Multirole mode: engaged",
      "Stealth + Speed = Unstoppable",
      "VTOL capabilities... just kidding, keep flying",
      "Fifth generation excellence",
    ],
  },
};

export const getRandomQuote = (aircraftId: AircraftType): string => {
  const aircraft = AIRCRAFT[aircraftId];
  return aircraft.quotes[Math.floor(Math.random() * aircraft.quotes.length)];
};
