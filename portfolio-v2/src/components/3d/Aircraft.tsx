'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGameStore } from '@/store/gameStore';
import * as THREE from 'three';

// Simple B-2 Spirit shape
function B2Spirit() {
  return (
    <group>
      {/* Main body/wing */}
      <mesh>
        <boxGeometry args={[8, 0.3, 3]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.3} roughness={0.7} />
      </mesh>
      
      {/* Center body */}
      <mesh position={[0, 0.2, 0]}>
        <boxGeometry args={[2, 0.5, 2]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.3} roughness={0.7} />
      </mesh>
      
      {/* Wing tips (swept back) */}
      <mesh position={[-4, 0, 1]} rotation={[0, 0.5, 0]}>
        <boxGeometry args={[3, 0.2, 1.5]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.3} roughness={0.7} />
      </mesh>
      <mesh position={[4, 0, 1]} rotation={[0, -0.5, 0]}>
        <boxGeometry args={[3, 0.2, 1.5]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.3} roughness={0.7} />
      </mesh>
      
      {/* Cockpit */}
      <mesh position={[0, 0.4, -0.8]}>
        <sphereGeometry args={[0.5, 8, 6]} />
        <meshStandardMaterial color="#0ea5e9" metalness={0.8} roughness={0.2} transparent opacity={0.6} />
      </mesh>
      
      {/* Engine glow */}
      <mesh position={[0, 0, 1.8]}>
        <sphereGeometry args={[0.3, 8, 8]} />
        <meshStandardMaterial color="#f97316" emissive="#f97316" emissiveIntensity={2} />
      </mesh>
      <pointLight position={[0, 0, 2]} color="#f97316" intensity={2} distance={10} />
    </group>
  );
}

// Simple F-15 shape
function F15Eagle() {
  return (
    <group>
      {/* Fuselage */}
      <mesh>
        <boxGeometry args={[1.2, 0.8, 5]} />
        <meshStandardMaterial color="#64748b" metalness={0.5} roughness={0.5} />
      </mesh>
      
      {/* Wings */}
      <mesh position={[0, 0, 0.5]}>
        <boxGeometry args={[6, 0.15, 2]} />
        <meshStandardMaterial color="#64748b" metalness={0.5} roughness={0.5} />
      </mesh>
      
      {/* Tail fins */}
      <mesh position={[-0.5, 0.8, 2]} rotation={[0, 0, 0.2]}>
        <boxGeometry args={[0.1, 1.2, 1]} />
        <meshStandardMaterial color="#64748b" metalness={0.5} roughness={0.5} />
      </mesh>
      <mesh position={[0.5, 0.8, 2]} rotation={[0, 0, -0.2]}>
        <boxGeometry args={[0.1, 1.2, 1]} />
        <meshStandardMaterial color="#64748b" metalness={0.5} roughness={0.5} />
      </mesh>
      
      {/* Horizontal stabilizers */}
      <mesh position={[0, 0, 2.2]}>
        <boxGeometry args={[3, 0.1, 0.8]} />
        <meshStandardMaterial color="#64748b" metalness={0.5} roughness={0.5} />
      </mesh>
      
      {/* Cockpit */}
      <mesh position={[0, 0.5, -1.5]}>
        <sphereGeometry args={[0.4, 8, 6]} />
        <meshStandardMaterial color="#0ea5e9" metalness={0.8} roughness={0.2} transparent opacity={0.6} />
      </mesh>
      
      {/* Nose cone */}
      <mesh position={[0, 0, -2.8]} rotation={[Math.PI / 2, 0, 0]}>
        <coneGeometry args={[0.3, 1, 8]} />
        <meshStandardMaterial color="#475569" metalness={0.6} roughness={0.4} />
      </mesh>
      
      {/* Engine glows */}
      <mesh position={[-0.3, 0, 2.8]}>
        <sphereGeometry args={[0.25, 8, 8]} />
        <meshStandardMaterial color="#f97316" emissive="#f97316" emissiveIntensity={2} />
      </mesh>
      <mesh position={[0.3, 0, 2.8]}>
        <sphereGeometry args={[0.25, 8, 8]} />
        <meshStandardMaterial color="#f97316" emissive="#f97316" emissiveIntensity={2} />
      </mesh>
      <pointLight position={[0, 0, 3]} color="#f97316" intensity={2} distance={10} />
    </group>
  );
}

// Simple F-35 shape
function F35Lightning() {
  return (
    <group>
      {/* Fuselage */}
      <mesh>
        <boxGeometry args={[1.5, 0.6, 4.5]} />
        <meshStandardMaterial color="#374151" metalness={0.4} roughness={0.6} />
      </mesh>
      
      {/* Wings */}
      <mesh position={[0, 0, 0.3]}>
        <boxGeometry args={[5, 0.12, 1.8]} />
        <meshStandardMaterial color="#374151" metalness={0.4} roughness={0.6} />
      </mesh>
      
      {/* Single tail fin */}
      <mesh position={[0, 0.8, 1.8]}>
        <boxGeometry args={[0.1, 1.4, 1]} />
        <meshStandardMaterial color="#374151" metalness={0.4} roughness={0.6} />
      </mesh>
      
      {/* Horizontal stabilizers */}
      <mesh position={[0, 0, 2]}>
        <boxGeometry args={[2.5, 0.1, 0.7]} />
        <meshStandardMaterial color="#374151" metalness={0.4} roughness={0.6} />
      </mesh>
      
      {/* Cockpit */}
      <mesh position={[0, 0.4, -1.2]}>
        <sphereGeometry args={[0.45, 8, 6]} />
        <meshStandardMaterial color="#0ea5e9" metalness={0.8} roughness={0.2} transparent opacity={0.6} />
      </mesh>
      
      {/* Nose */}
      <mesh position={[0, 0, -2.5]} rotation={[Math.PI / 2, 0, 0]}>
        <coneGeometry args={[0.4, 1.2, 8]} />
        <meshStandardMaterial color="#4b5563" metalness={0.5} roughness={0.5} />
      </mesh>
      
      {/* Engine glow */}
      <mesh position={[0, 0, 2.5]}>
        <sphereGeometry args={[0.35, 8, 8]} />
        <meshStandardMaterial color="#f97316" emissive="#f97316" emissiveIntensity={2} />
      </mesh>
      <pointLight position={[0, 0, 3]} color="#f97316" intensity={2} distance={10} />
    </group>
  );
}

export function Aircraft() {
  const groupRef = useRef<THREE.Group>(null);
  const { currentAircraft, speed } = useGameStore();

  // Select aircraft model based on current selection
  const AircraftModel = () => {
    switch (currentAircraft) {
      case 'f15-eagle':
        return <F15Eagle />;
      case 'f35-lightning':
        return <F35Lightning />;
      default:
        return <B2Spirit />;
    }
  };

  return (
    <group ref={groupRef}>
      <AircraftModel />
      
      {/* Navigation lights */}
      <pointLight position={[-4, 0, 0]} color="#ff0000" intensity={0.5} distance={5} />
      <pointLight position={[4, 0, 0]} color="#00ff00" intensity={0.5} distance={5} />
    </group>
  );
}
