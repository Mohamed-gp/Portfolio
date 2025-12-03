"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sky, Stars } from "@react-three/drei";
import * as THREE from "three";

// Simple animated ocean - no complex shaders
function Ocean() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y =
        -50 + Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -50, 0]}>
      <planeGeometry args={[2000, 2000, 1, 1]} />
      <meshStandardMaterial color="#0a3d62" roughness={0.8} metalness={0.2} />
    </mesh>
  );
}

// Simple clouds using basic meshes
function SimpleClouds() {
  const cloudsData = [
    { pos: [-100, 100, -200], scale: 30 },
    { pos: [150, 120, -300], scale: 40 },
    { pos: [-200, 90, -150], scale: 25 },
    { pos: [100, 110, -400], scale: 35 },
    { pos: [0, 130, -350], scale: 45 },
  ];

  return (
    <group>
      {cloudsData.map((cloud, i) => (
        <mesh key={i} position={cloud.pos as [number, number, number]}>
          <sphereGeometry args={[cloud.scale, 8, 6]} />
          <meshStandardMaterial
            color="#ffffff"
            transparent
            opacity={0.5}
            roughness={1}
          />
        </mesh>
      ))}
    </group>
  );
}

// Distant mountains - simple geometry
function Mountains() {
  return (
    <group>
      {[-300, -100, 100, 300].map((x, i) => (
        <mesh key={i} position={[x, -20, -500]}>
          <coneGeometry args={[80 + i * 10, 100 + i * 15, 4]} />
          <meshStandardMaterial color="#1e293b" roughness={1} />
        </mesh>
      ))}
    </group>
  );
}

export function Environment() {
  return (
    <>
      {/* Sky */}
      <Sky
        distance={450000}
        sunPosition={[100, 50, -100]}
        inclination={0.5}
        azimuth={0.25}
        turbidity={8}
        rayleigh={0.5}
      />

      {/* Stars - reduced count */}
      <Stars
        radius={300}
        depth={50}
        count={500}
        factor={3}
        saturation={0}
        fade
        speed={0.5}
      />

      {/* Ocean */}
      <Ocean />

      {/* Simple clouds */}
      <SimpleClouds />

      {/* Mountains */}
      <Mountains />

      {/* Fog for depth */}
      <fog attach="fog" args={["#1e293b", 100, 800]} />

      {/* Lighting */}
      <ambientLight intensity={0.4} />

      <directionalLight
        position={[100, 100, 50]}
        intensity={1}
        color="#fef3c7"
      />

      <hemisphereLight args={["#87CEEB", "#1a1a2e", 0.3]} />
    </>
  );
}
