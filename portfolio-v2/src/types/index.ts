// Aircraft Types
export type AircraftType = 'b2-spirit' | 'f15-eagle' | 'f35-lightning';

export interface Aircraft {
  id: AircraftType;
  name: string;
  description: string;
  speed: number;
  agility: number;
  unlocked: boolean;
  color: string;
  quotes: string[];
}

// Island/Landing Zone Types
export type IslandType = 'about' | 'projects' | 'skills' | 'contact' | 'hangar';

export interface Island {
  id: IslandType;
  name: string;
  position: [number, number, number];
  color: string;
  icon: string;
  description: string;
}

// Game State
export interface GameState {
  // Aircraft
  currentAircraft: AircraftType;
  unlockedAircraft: AircraftType[];
  setAircraft: (aircraft: AircraftType) => void;
  unlockAircraft: (aircraft: AircraftType) => void;

  // Flight State
  isFlying: boolean;
  speed: number;
  altitude: number;
  heading: number;
  setFlying: (flying: boolean) => void;
  setSpeed: (speed: number) => void;
  setAltitude: (altitude: number) => void;
  setHeading: (heading: number) => void;

  // Takeoff State
  isOnRunway: boolean;
  groundSpeed: number;
  isAccelerating: boolean;
  setOnRunway: (onRunway: boolean) => void;
  setGroundSpeed: (speed: number) => void;
  setAccelerating: (accelerating: boolean) => void;

  // UI State
  currentIsland: IslandType | null;
  isLanded: boolean;
  showHUD: boolean;
  showMissionBriefing: boolean;
  isLoading: boolean;
  setCurrentIsland: (island: IslandType | null) => void;
  setLanded: (landed: boolean) => void;
  setShowHUD: (show: boolean) => void;
  setShowMissionBriefing: (show: boolean) => void;
  setLoading: (loading: boolean) => void;
}

// Controls
export interface FlightControls {
  pitch: number; // W/S
  roll: number; // A/D
  yaw: number; // Q/E
  boost: boolean; // SHIFT
  land: boolean; // SPACE
  throttleUp: boolean;
  throttleDown: boolean;
}

// HUD Data
export interface HUDData {
  speed: number;
  altitude: number;
  heading: number;
  nearestIsland: IslandType | null;
  distanceToIsland: number;
}
