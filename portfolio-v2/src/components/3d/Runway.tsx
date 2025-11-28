'use client';

import { Text } from '@react-three/drei';

// Simple runway component
export function Runway() {
  const runwayLength = 400;
  const runwayWidth = 30;

  return (
    <group position={[0, 0, 0]}>
      {/* Airport platform */}
      <mesh position={[0, -2, 0]}>
        <boxGeometry args={[300, 4, 500]} />
        <meshStandardMaterial color="#1e3a1e" roughness={1} />
      </mesh>
      
      {/* Main runway surface */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.1, 0]}>
        <planeGeometry args={[runwayWidth, runwayLength]} />
        <meshStandardMaterial color="#1f2937" roughness={0.85} />
      </mesh>

      {/* Runway centerline */}
      {Array.from({ length: 12 }).map((_, i) => (
        <mesh 
          key={i} 
          position={[0, 0.12, -170 + i * 30]} 
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[0.5, 10]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      ))}

      {/* Runway edges */}
      <mesh position={[-14, 0.12, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.5, runwayLength - 20]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
      <mesh position={[14, 0.12, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.5, runwayLength - 20]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>

      {/* Threshold markings */}
      {Array.from({ length: 6 }).map((_, i) => (
        <mesh 
          key={`thresh-${i}`} 
          position={[(i - 2.5) * 4, 0.12, 180]} 
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[1.5, 20]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      ))}

      {/* Runway number */}
      <Text
        position={[0, 0.15, 150]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={6}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        09
      </Text>

      {/* Taxiway */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-35, 0.08, 150]}>
        <planeGeometry args={[12, 80]} />
        <meshStandardMaterial color="#374151" roughness={0.9} />
      </mesh>

      {/* Simple control tower */}
      <group position={[-70, 0, 100]}>
        <mesh position={[0, 8, 0]}>
          <boxGeometry args={[15, 16, 12]} />
          <meshStandardMaterial color="#374151" roughness={0.7} />
        </mesh>
        <mesh position={[0, 20, 0]}>
          <cylinderGeometry args={[5, 5, 8, 8]} />
          <meshStandardMaterial color="#0ea5e9" metalness={0.5} roughness={0.3} transparent opacity={0.7} />
        </mesh>
      </group>

      {/* Simple hangar */}
      <group position={[-70, 0, 0]}>
        <mesh position={[0, 7, 0]}>
          <boxGeometry args={[25, 14, 35]} />
          <meshStandardMaterial color="#4b5563" roughness={0.8} />
        </mesh>
      </group>

      {/* Edge lights (static) */}
      {Array.from({ length: 10 }).map((_, i) => (
        <group key={`light-${i}`}>
          <mesh position={[-15, 0.3, -180 + i * 40]}>
            <sphereGeometry args={[0.3, 6, 6]} />
            <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={1} />
          </mesh>
          <mesh position={[15, 0.3, -180 + i * 40]}>
            <sphereGeometry args={[0.3, 6, 6]} />
            <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={1} />
          </mesh>
        </group>
      ))}

      {/* Threshold lights (green) */}
      {Array.from({ length: 6 }).map((_, i) => (
        <mesh key={`green-${i}`} position={[(i - 2.5) * 5, 0.3, 195]}>
          <sphereGeometry args={[0.3, 6, 6]} />
          <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={2} />
        </mesh>
      ))}
    </group>
  );
}
