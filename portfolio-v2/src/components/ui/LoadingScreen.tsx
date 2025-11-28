'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '@/store/gameStore';
import { getRandomQuote } from '@/data/aircraft';

const loadingMessages = [
  'Initializing flight systems...',
  'Calibrating instruments...',
  'Loading portfolio payload...',
  'Fueling creativity tanks...',
  'Running pre-flight checks...',
  'Engaging stealth protocols...',
  'Deploying landing zones...',
];

export function LoadingScreen() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [progress, setProgress] = useState(0);
  const { setLoading, setShowMissionBriefing, currentAircraft } = useGameStore();

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % loadingMessages.length);
    }, 800);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(messageInterval);
          setTimeout(() => {
            setLoading(false);
            setShowMissionBriefing(true);
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 300);

    return () => {
      clearInterval(messageInterval);
      clearInterval(progressInterval);
    };
  }, [setLoading, setShowMissionBriefing]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950"
    >
      {/* Radar Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* Radar circles */}
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-500/20"
              style={{
                width: `${i * 150}px`,
                height: `${i * 150}px`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
            />
          ))}
          
          {/* Radar sweep */}
          <motion.div
            className="absolute left-1/2 top-1/2 h-[300px] w-1 origin-bottom -translate-x-1/2"
            style={{
              background: 'linear-gradient(to top, transparent, rgba(16, 185, 129, 0.5))',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-4">
        {/* Aircraft Icon */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-6xl"
        >
          ✈️
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center font-mono text-2xl font-bold text-emerald-400 md:text-4xl"
        >
          PORTFOLIO COMMAND CENTER
        </motion.h1>

        {/* Loading Message */}
        <AnimatePresence mode="wait">
          <motion.p
            key={currentMessage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="h-6 font-mono text-sm text-slate-400"
          >
            {loadingMessages[currentMessage]}
          </motion.p>
        </AnimatePresence>

        {/* Progress Bar */}
        <div className="h-2 w-64 overflow-hidden rounded-full bg-slate-800">
          <motion.div
            className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500"
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Random Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="font-mono text-xs text-emerald-500/60"
        >
          "{getRandomQuote(currentAircraft)}"
        </motion.p>
      </div>

      {/* Scanlines Effect */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
        }}
      />
    </motion.div>
  );
}
