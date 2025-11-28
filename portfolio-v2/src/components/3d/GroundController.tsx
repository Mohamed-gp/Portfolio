'use client';

import { useRef, useEffect, useCallback } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { Aircraft } from './Aircraft';
import { useGameStore } from '@/store/gameStore';
import { useFlightControls } from '@/hooks/useFlightControls';
import { AIRCRAFT } from '@/data/aircraft';

// Takeoff physics constants
const GROUND_PHYSICS = {
  maxGroundSpeed: 80, // m/s
  groundAcceleration: 15, // m/s² with afterburner
  normalAcceleration: 8, // m/s² without afterburner
  groundFriction: 0.02,
  rotationSpeed: 45, // takeoff rotation speed in m/s
  liftoffSpeed: 55, // speed at which aircraft lifts off
  maxSteeringAngle: 0.3, // radians
  steeringRate: 1.5,
};

export function GroundController() {
  const groupRef = useRef<THREE.Group>(null);
  const { camera } = useThree();
  
  // State
  const groundSpeedRef = useRef(0);
  const steeringRef = useRef(0);
  const pitchRef = useRef(0);
  const isRotatingRef = useRef(false);
  
  // Camera state for smooth following
  const cameraStateRef = useRef({
    position: new THREE.Vector3(0, 15, 40),
    target: new THREE.Vector3(0, 3, 0),
  });
  
  const { getInput } = useFlightControls();
  const {
    currentAircraft,
    setFlying,
    setOnRunway,
    setGroundSpeed,
    isOnRunway,
  } = useGameStore();
  
  const aircraftData = AIRCRAFT[currentAircraft];

  // Initialize position on runway
  useEffect(() => {
    if (groupRef.current) {
      // Start at the beginning of the runway
      groupRef.current.position.set(0, 2.5, 180);
      groupRef.current.rotation.set(0, Math.PI, 0); // Face down runway
    }
    
    // Initialize camera
    camera.position.set(0, 20, 220);
    camera.lookAt(0, 3, 180);
  }, [camera]);

  const handleTakeoff = useCallback(() => {
    setOnRunway(false);
    setFlying(true);
  }, [setOnRunway, setFlying]);

  useFrame((state, delta) => {
    if (!groupRef.current || !isOnRunway) return;
    
    const dt = Math.min(delta, 0.033);
    const group = groupRef.current;
    const input = getInput();
    const speedMod = aircraftData.speed;
    
    // === THROTTLE / ACCELERATION ===
    const isAccelerating = input.throttleUp || input.boost;
    const isBraking = input.throttleDown;
    
    let acceleration = 0;
    
    if (isAccelerating) {
      // Accelerate down runway
      acceleration = input.boost 
        ? GROUND_PHYSICS.groundAcceleration * speedMod
        : GROUND_PHYSICS.normalAcceleration * speedMod;
    } else if (isBraking) {
      // Braking
      acceleration = -GROUND_PHYSICS.groundAcceleration * 1.5;
    } else {
      // Natural deceleration from friction
      acceleration = -groundSpeedRef.current * GROUND_PHYSICS.groundFriction;
    }
    
    // Update ground speed
    groundSpeedRef.current += acceleration * dt;
    groundSpeedRef.current = THREE.MathUtils.clamp(
      groundSpeedRef.current, 
      0, 
      GROUND_PHYSICS.maxGroundSpeed * speedMod
    );
    
    // === STEERING ===
    // Steering effectiveness decreases with speed
    const steeringEffectiveness = 1 - (groundSpeedRef.current / GROUND_PHYSICS.maxGroundSpeed) * 0.7;
    const targetSteering = input.yaw * GROUND_PHYSICS.maxSteeringAngle * steeringEffectiveness;
    
    // Smooth steering
    steeringRef.current += (targetSteering - steeringRef.current) * GROUND_PHYSICS.steeringRate * dt;
    
    // Apply steering to heading
    if (groundSpeedRef.current > 1) {
      group.rotation.y += steeringRef.current * dt * (groundSpeedRef.current / 30);
    }
    
    // === ROTATION (PITCH UP FOR TAKEOFF) ===
    if (groundSpeedRef.current >= GROUND_PHYSICS.rotationSpeed) {
      isRotatingRef.current = true;
      // Pitch up for rotation
      const targetPitch = input.pitch > 0 ? -0.15 : (input.pitch < 0 ? 0 : -0.08);
      pitchRef.current += (targetPitch - pitchRef.current) * 2 * dt;
    } else {
      isRotatingRef.current = false;
      pitchRef.current += (0 - pitchRef.current) * 3 * dt;
    }
    
    group.rotation.x = pitchRef.current;
    
    // === MOVEMENT ===
    const forward = new THREE.Vector3(0, 0, -1).applyAxisAngle(
      new THREE.Vector3(0, 1, 0),
      group.rotation.y
    );
    
    // Move aircraft
    group.position.add(forward.multiplyScalar(groundSpeedRef.current * dt));
    
    // Keep on ground (with slight bounce based on speed)
    const groundHeight = 2.5 + Math.sin(state.clock.elapsedTime * 20) * (groundSpeedRef.current / 200) * 0.1;
    group.position.y = groundHeight;
    
    // === LIFTOFF CHECK ===
    if (groundSpeedRef.current >= GROUND_PHYSICS.liftoffSpeed && isRotatingRef.current) {
      // Transfer to flight mode!
      handleTakeoff();
      return;
    }
    
    // === CAMERA ===
    const camState = cameraStateRef.current;
    
    // Camera position: behind and above aircraft
    const idealCamPos = group.position.clone()
      .add(new THREE.Vector3(0, 10 + groundSpeedRef.current * 0.05, 35 + groundSpeedRef.current * 0.2));
    
    // Smooth camera follow
    camState.position.lerp(idealCamPos, 0.05);
    camera.position.copy(camState.position);
    
    // Look at aircraft
    const lookTarget = group.position.clone().add(new THREE.Vector3(0, 3, -20));
    camState.target.lerp(lookTarget, 0.05);
    camera.lookAt(camState.target);
    
    // === UPDATE STORE ===
    setGroundSpeed(groundSpeedRef.current);
  });

  return (
    <group ref={groupRef}>
      <Aircraft />
    </group>
  );
}
