'use client';

import { Suspense } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { Preload, AdaptiveDpr } from '@react-three/drei';
import { Environment } from './Environment';
import { FlightController } from './FlightController';
import { GroundController } from './GroundController';
import { Runway } from './Runway';
import { FloatingIsland } from './FloatingIsland';
import { ISLAND_LIST } from '@/data/islands';
import { useGameStore } from '@/store/gameStore';

// Camera controller for initial view (before mission starts)
function CameraController() {
  const { camera } = useThree();
  const { isFlying, isLanded, isOnRunway, showMissionBriefing } = useGameStore();
  
  useFrame((state) => {
    if (showMissionBriefing || (!isFlying && !isOnRunway && !isLanded)) {
      const t = state.clock.elapsedTime * 0.15;
      camera.position.x = Math.sin(t) * 40;
      camera.position.z = 200 + Math.cos(t) * 20;
      camera.position.y = 20 + Math.sin(t * 0.5) * 3;
      camera.lookAt(0, 5, 180);
    }
  });
  
  return null;
}

function SceneContent() {
  const { isFlying, currentIsland, isLanded, isOnRunway } = useGameStore();

  return (
    <>
      <CameraController />
      
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[50, 100, 50]} intensity={1} />
      
      {/* Environment */}
      <Environment />
      
      {/* Runway */}
      <Runway />
      
      {/* Floating islands */}
      {ISLAND_LIST.map((island) => (
        <FloatingIsland
          key={island.id}
          island={island}
          isNearby={currentIsland === island.id}
        />
      ))}
      
      {/* Ground Controller (on runway) */}
      {isOnRunway && !isFlying && <GroundController />}
      
      {/* Flight Controller (in air) */}
      {isFlying && !isLanded && <FlightController />}
    </>
  );
}

export function Scene() {
  return (
    <Canvas
      camera={{
        position: [0, 50, 200],
        fov: 60,
        near: 1,
        far: 2000,
      }}
      gl={{
        antialias: false,
        powerPreference: 'high-performance',
        alpha: false,
        stencil: false,
        depth: true,
      }}
      dpr={[0.8, 1.5]}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: '#0a1628',
      }}
    >
      <Suspense fallback={null}>
        <AdaptiveDpr pixelated />
        <SceneContent />
        <Preload all />
      </Suspense>
    </Canvas>
  );
}
