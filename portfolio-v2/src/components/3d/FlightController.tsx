"use client";

import { useRef, useEffect, useCallback } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useFlightControls } from "@/hooks/useFlightControls";
import { useGameStore } from "@/store/gameStore";
import { AIRCRAFT } from "@/data/aircraft";
import { ISLAND_LIST } from "@/data/islands";
import { Aircraft } from "./Aircraft";

export function FlightController() {
  const groupRef = useRef<THREE.Group>(null);
  const velocityRef = useRef(new THREE.Vector3(0, 5, -60));
  const angularVelRef = useRef(new THREE.Vector3());

  const { camera } = useThree();
  const { getInput, resetKeys } = useFlightControls();
  const {
    currentAircraft,
    isFlying,
    isLanded,
    setSpeed,
    setAltitude,
    setHeading,
    setCurrentIsland,
    setLanded,
    groundSpeed,
  } = useGameStore();

  const aircraftData = AIRCRAFT[currentAircraft];

  // Initialize position
  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.position.set(0, 20, 150);
      groupRef.current.rotation.set(-0.1, Math.PI, 0);
      velocityRef.current.set(0, 5, -Math.max(groundSpeed, 60));
    }
  }, [groundSpeed]);

  // Check island proximity
  const checkIslandProximity = useCallback(
    (position: THREE.Vector3) => {
      let nearestIsland = null;
      let nearestDistance = Infinity;

      for (const island of ISLAND_LIST) {
        const islandPos = new THREE.Vector3(...island.position);
        const distance = position.distanceTo(islandPos);

        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIsland = island;
        }
      }

      if (nearestDistance < 30 && nearestIsland) {
        setCurrentIsland(nearestIsland.id);
        return { island: nearestIsland, canLand: nearestDistance < 20 };
      }

      setCurrentIsland(null);
      return { island: null, canLand: false };
    },
    [setCurrentIsland]
  );

  useFrame((state, delta) => {
    if (!groupRef.current || !isFlying || isLanded) return;

    const dt = Math.min(delta, 0.05);
    const group = groupRef.current;
    const velocity = velocityRef.current;
    const angularVel = angularVelRef.current;

    const input = getInput();
    const agility = aircraftData.agility;
    const speedMod = aircraftData.speed;

    // Get directions
    const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(
      group.quaternion
    );
    const up = new THREE.Vector3(0, 1, 0).applyQuaternion(group.quaternion);
    const right = new THREE.Vector3(1, 0, 0).applyQuaternion(group.quaternion);

    // Simple thrust
    const baseThrust = input.boost ? 120 : 80;
    const thrust = baseThrust * speedMod;

    // Apply thrust
    velocity.add(forward.clone().multiplyScalar(thrust * dt));

    // Simple gravity
    velocity.y -= 20 * dt;

    // Simple lift (proportional to speed and AoA)
    const speed = velocity.length();
    const lift = speed * 0.4;
    velocity.y += lift * dt;

    // Air drag
    velocity.multiplyScalar(0.995);

    // Control inputs - rotation
    const pitchRate = input.pitch * 2.5 * agility;
    const rollRate = input.roll * 3.0 * agility;
    const yawRate = input.yaw * 1.5 * agility;

    // Smooth angular velocity
    angularVel.x += (pitchRate - angularVel.x) * 5 * dt;
    angularVel.z += (rollRate - angularVel.z) * 5 * dt;
    angularVel.y += (yawRate - angularVel.y) * 5 * dt;

    // Apply rotation
    group.rotateOnAxis(right, angularVel.x * dt);
    group.rotateOnAxis(forward, -angularVel.z * dt);
    group.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), angularVel.y * dt);

    // Update position
    group.position.add(velocity.clone().multiplyScalar(dt));

    // Ground collision
    if (group.position.y < 5) {
      group.position.y = 5;
      if (velocity.y < 0) velocity.y *= -0.3;
    }

    // Ceiling
    if (group.position.y > 250) {
      group.position.y = 250;
      velocity.y = Math.min(0, velocity.y);
    }

    // Camera follow
    const camOffset = forward
      .clone()
      .multiplyScalar(25)
      .add(new THREE.Vector3(0, 8, 0));
    const idealCamPos = group.position.clone().add(camOffset);
    camera.position.lerp(idealCamPos, 0.05);

    const lookTarget = group.position
      .clone()
      .add(forward.clone().multiplyScalar(-50));
    camera.lookAt(lookTarget);

    // Update store
    setSpeed(speed / 100);
    setAltitude(group.position.y);

    const headingRad = Math.atan2(forward.x, -forward.z);
    setHeading(((headingRad * 180) / Math.PI + 360) % 360);

    // Landing check
    const { canLand, island } = checkIslandProximity(group.position);

    if (input.land && canLand && island && speed < 40) {
      setLanded(true);
      resetKeys();

      const targetPos = new THREE.Vector3(...island.position);
      targetPos.y += 8;
      group.position.copy(targetPos);
      velocity.set(0, 0, 0);
      angularVel.set(0, 0, 0);
    }
  });

  return (
    <group ref={groupRef}>
      <Aircraft />
    </group>
  );
}
