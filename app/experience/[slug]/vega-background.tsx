"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Grid } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useMemo } from "react";

function MovingRoad() {
  const gridRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (gridRef.current) {
      // Loop the position Z seamlessly
      // sectionSize is 5, so moving it modulo 5 creates an infinity illusion
      gridRef.current.position.z = (state.clock.elapsedTime * 10) % 5;
    }
  });

  return (
    <group ref={gridRef}>
      <Grid
        position={[0, -2, 0]}
        args={[80, 80]}
        cellSize={1}
        cellThickness={0.8}
        cellColor="#041221"
        sectionSize={5}
        sectionThickness={1.5}
        sectionColor="#00d8ff"
        fadeDistance={40}
        fadeStrength={1.5}
      />
    </group>
  );
}

function SpeedLines() {
  const linesRef = useRef<THREE.Group>(null);
  
  const lines = useMemo(() => {
    return Array.from({ length: 50 }).map(() => ({
      x: (Math.random() - 0.5) * 40,
      y: (Math.random() - 0.5) * 10 - 1, // varied height
      z: Math.random() * -60,
      speed: 30 + Math.random() * 40,
      color: Math.random() > 0.7 ? "#ff0055" : Math.random() > 0.5 ? "#00ffff" : "#ffffff", // Red, Cyan, White
      length: 2 + Math.random() * 6
    }));
  }, []);

  useFrame((state, delta) => {
    if (linesRef.current) {
      linesRef.current.children.forEach((child, i) => {
        child.position.z += lines[i].speed * delta;
        if (child.position.z > 5) {
          // Reset lines far back
          child.position.z = -60 - Math.random() * 20;
          // Randomize X and Y again so it feels varied
          child.position.x = (Math.random() - 0.5) * 40;
          child.position.y = (Math.random() - 0.5) * 10 - 1;
        }
      });
    }
  });

  return (
    <group ref={linesRef}>
      {lines.map((line, i) => (
        <mesh key={i} position={[line.x, line.y, line.z]}>
          <boxGeometry args={[0.08, 0.08, line.length]} />
          <meshBasicMaterial color={line.color} />
        </mesh>
      ))}
    </group>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#01020a"]} /> 
      <fog attach="fog" args={["#01020a", 5, 40]} />
      
      <MovingRoad />
      <SpeedLines />
      
      <ambientLight intensity={0.5} />
    </>
  );
}

export function VegaBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Scene />
      </Canvas>
    </div>
  );
}
