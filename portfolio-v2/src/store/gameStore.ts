import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AircraftType, IslandType, GameState } from '@/types';

interface ExtendedGameState extends GameState {
  // Takeoff State
  isOnRunway: boolean;
  groundSpeed: number;
  isAccelerating: boolean;
  setOnRunway: (onRunway: boolean) => void;
  setGroundSpeed: (speed: number) => void;
  setAccelerating: (accelerating: boolean) => void;
}

export const useGameStore = create<ExtendedGameState>()(
  persist(
    (set) => ({
      // Aircraft State
      currentAircraft: 'b2-spirit',
      unlockedAircraft: ['b2-spirit'],
      setAircraft: (aircraft) => set({ currentAircraft: aircraft }),
      unlockAircraft: (aircraft) =>
        set((state) => ({
          unlockedAircraft: state.unlockedAircraft.includes(aircraft)
            ? state.unlockedAircraft
            : [...state.unlockedAircraft, aircraft],
        })),

      // Flight State
      isFlying: false,
      speed: 0,
      altitude: 0,
      heading: 0,
      setFlying: (flying) => set({ isFlying: flying }),
      setSpeed: (speed) => set({ speed }),
      setAltitude: (altitude) => set({ altitude }),
      setHeading: (heading) => set({ heading }),

      // Takeoff State
      isOnRunway: true,
      groundSpeed: 0,
      isAccelerating: false,
      setOnRunway: (onRunway) => set({ isOnRunway: onRunway }),
      setGroundSpeed: (speed) => set({ groundSpeed: speed }),
      setAccelerating: (accelerating) => set({ isAccelerating: accelerating }),

      // UI State
      currentIsland: null,
      isLanded: false,
      showHUD: true,
      showMissionBriefing: true,
      isLoading: true,
      setCurrentIsland: (island) => set({ currentIsland: island }),
      setLanded: (landed) => set({ isLanded: landed }),
      setShowHUD: (show) => set({ showHUD: show }),
      setShowMissionBriefing: (show) => set({ showMissionBriefing: show }),
      setLoading: (loading) => set({ isLoading: loading }),
    }),
    {
      name: 'jet-portfolio-storage',
      partialize: (state) => ({
        unlockedAircraft: state.unlockedAircraft,
      }),
    }
  )
);
