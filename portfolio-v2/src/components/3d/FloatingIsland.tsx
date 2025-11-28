'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';
import type { Island as IslandType } from '@/types';

interface FloatingIslandProps {
  island: IslandType;
  onClick?: () => void;
  isNearby?: boolean;
}

// Simple tree
function SimpleTree({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh position={[0, 1, 0]}>
        <cylinderGeometry args={[0.1, 0.15, 2, 6]} />
        <meshStandardMaterial color="#5d4037" />
      </mesh>
      <mesh position={[0, 2.5, 0]}>
        <coneGeometry args={[1, 2, 6]} />
        <meshStandardMaterial color="#2e7d32" />
      </mesh>
    </group>
  );
}

export function FloatingIsland({ island, isNearby = false }: FloatingIslandProps) {
  const groupRef = useRef<THREE.Group>(null);
  const floatOffset = useRef(Math.random() * Math.PI * 2);

  useFrame((state) => {
    if (groupRef.current) {
      // Simple floating animation
      groupRef.current.position.y = 
        island.position[1] + Math.sin(state.clock.elapsedTime * 0.5 + floatOffset.current) * 2;
    }
  });

  return (
    <group ref={groupRef} position={island.position}>
      {/* Main island body */}
      <mesh>
        <cylinderGeometry args={[12, 8, 6, 8]} />
        <meshStandardMaterial color="#4a5568" roughness={0.9} />
      </mesh>
      
      {/* Top grass layer */}
      <mesh position={[0, 3.5, 0]}>
        <cylinderGeometry args={[12, 12, 1, 8]} />
        <meshStandardMaterial color="#22c55e" roughness={0.8} />
      </mesh>

      {/* Landing pad */}
      <mesh position={[0, 4.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[6, 16]} />
        <meshStandardMaterial color="#334155" roughness={0.7} />
      </mesh>

      {/* Landing pad marker */}
      <mesh position={[0, 4.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[3, 4, 16]} />
        <meshStandardMaterial color={island.color} emissive={island.color} emissiveIntensity={0.5} />
      </mesh>

      {/* Trees */}
      <SimpleTree position={[-8, 4, 5]} />
      <SimpleTree position={[7, 4, -6]} />
      <SimpleTree position={[-5, 4, -7]} />

      {/* Island label */}
      <Text
        position={[0, 12, 0]}
        fontSize={2}
        color={island.color}
        anchorX="center"
        anchorY="middle"
      >
        {island.icon} {island.name}
      </Text>

      {/* Nearby indicator */}
      {isNearby && (
        <mesh position={[0, 8, 0]}>
          <sphereGeometry args={[1, 8, 8]} />
          <meshStandardMaterial 
            color={island.color} 
            emissive={island.color} 
            emissiveIntensity={1}
            transparent
            opacity={0.8}
          />
        </mesh>
      )}

      {/* Beacon light */}
      <pointLight 
        position={[0, 10, 0]} 
        color={island.color} 
        intensity={isNearby ? 3 : 1} 
        distance={50} 
      />
    </group>
  );
}
