'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '@/store/gameStore';
import { AIRCRAFT } from '@/data/aircraft';
import type { AircraftType } from '@/types';

export function AircraftSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentAircraft, unlockedAircraft, setAircraft, isFlying } = useGameStore();
  const aircraft = AIRCRAFT[currentAircraft];

  const handleSelect = (id: AircraftType) => {
    if (unlockedAircraft.includes(id)) {
      setAircraft(id);
      setIsOpen(false);
    }
  };

  if (!isFlying) return null;

  return (
    <div className="fixed left-4 top-20 z-20">
      {/* Current Aircraft Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-900/90 px-4 py-3 font-mono text-sm backdrop-blur-sm"
      >
        <span className="text-2xl">✈️</span>
        <div className="text-left">
          <div className="text-emerald-400">{aircraft.name}</div>
          <div className="text-xs text-slate-500">Click to change</div>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-slate-400"
        >
          ▼
        </motion.span>
      </motion.button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="absolute left-0 top-full mt-2 w-72 overflow-hidden rounded-lg border border-slate-700 bg-slate-900/95 backdrop-blur-sm"
          >
            {Object.values(AIRCRAFT).map((a) => {
              const isUnlocked = unlockedAircraft.includes(a.id);
              const isSelected = currentAircraft === a.id;

              return (
                <motion.button
                  key={a.id}
                  whileHover={isUnlocked ? { backgroundColor: 'rgba(16, 185, 129, 0.1)' } : {}}
                  onClick={() => handleSelect(a.id)}
                  disabled={!isUnlocked}
                  className={`flex w-full items-start gap-3 p-4 text-left transition-colors ${
                    isSelected
                      ? 'bg-emerald-500/20 border-l-2 border-emerald-500'
                      : ''
                  } ${!isUnlocked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <div 
                    className="mt-1 h-8 w-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: a.color }}
                  >
                    {isUnlocked ? '✈️' : '🔒'}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className={isUnlocked ? 'text-white' : 'text-slate-500'}>
                        {a.name}
                      </span>
                      {!isUnlocked && (
                        <span className="text-xs text-amber-500">LOCKED</span>
                      )}
                    </div>
                    <p className="mt-1 text-xs text-slate-400">{a.description}</p>
                    
                    {/* Stats */}
                    <div className="mt-2 flex gap-4 text-xs">
                      <div>
                        <span className="text-slate-500">Speed: </span>
                        <span className="text-cyan-400">{Math.round(a.speed * 100)}%</span>
                      </div>
                      <div>
                        <span className="text-slate-500">Agility: </span>
                        <span className="text-amber-400">{Math.round(a.agility * 100)}%</span>
                      </div>
                    </div>
                  </div>
                </motion.button>
              );
            })}

            {/* Unlock Hint */}
            <div className="border-t border-slate-700 p-3 text-center">
              <p className="font-mono text-xs text-slate-500">
                🛩️ Land at the Hangar to unlock more aircraft
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
