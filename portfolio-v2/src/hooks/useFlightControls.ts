"use client";

import { useEffect, useCallback, useRef } from "react";
import { useGameStore } from "@/store/gameStore";

interface KeyState {
  KeyW: boolean;
  KeyS: boolean;
  KeyA: boolean;
  KeyD: boolean;
  KeyQ: boolean;
  KeyE: boolean;
  ShiftLeft: boolean;
  ShiftRight: boolean;
  Space: boolean;
  ArrowUp: boolean;
  ArrowDown: boolean;
}

const initialKeyState: KeyState = {
  KeyW: false,
  KeyS: false,
  KeyA: false,
  KeyD: false,
  KeyQ: false,
  KeyE: false,
  ShiftLeft: false,
  ShiftRight: false,
  Space: false,
  ArrowUp: false,
  ArrowDown: false,
};

export interface FlightInput {
  pitch: number; // -1 to 1 (W/S)
  roll: number; // -1 to 1 (A/D)
  yaw: number; // -1 to 1 (Q/E)
  boost: boolean; // Shift
  land: boolean; // Space
  throttleUp: boolean; // W or ArrowUp for ground acceleration
  throttleDown: boolean; // S or ArrowDown for braking
}

export function useFlightControls() {
  const keys = useRef<KeyState>({ ...initialKeyState });
  const { isFlying, isLanded, showMissionBriefing, isOnRunway } =
    useGameStore();

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      // Allow controls during runway phase or flight phase
      if (showMissionBriefing) return;
      if (!isFlying && !isOnRunway) return;
      if (isLanded) return;

      const code = event.code as keyof KeyState;
      if (code in keys.current) {
        keys.current[code] = true;
        event.preventDefault();
      }
    },
    [isFlying, isLanded, showMissionBriefing, isOnRunway]
  );

  const handleKeyUp = useCallback((event: KeyboardEvent) => {
    const code = event.code as keyof KeyState;
    if (code in keys.current) {
      keys.current[code] = false;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  const getInput = useCallback((): FlightInput => {
    const k = keys.current;

    return {
      pitch: (k.KeyW ? 1 : 0) - (k.KeyS ? 1 : 0),
      roll: (k.KeyD ? 1 : 0) - (k.KeyA ? 1 : 0),
      yaw: (k.KeyE ? 1 : 0) - (k.KeyQ ? 1 : 0),
      boost: k.ShiftLeft || k.ShiftRight,
      land: k.Space,
      throttleUp: k.KeyW || k.ArrowUp,
      throttleDown: k.KeyS || k.ArrowDown,
    };
  }, []);

  const resetKeys = useCallback(() => {
    keys.current = { ...initialKeyState };
  }, []);

  return { getInput, resetKeys };
}
