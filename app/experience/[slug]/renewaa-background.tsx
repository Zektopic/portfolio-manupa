"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles, Grid, Float } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";

function Lightning() {
  const lightRef = useRef<THREE.PointLight>(null);
  
  useFrame((state) => {
    if (lightRef.current) {
      // Fast, erratic sine wave intersections to simulate sudden lightning flashes
      const time = state.clock.elapsedTime;
      const flash = Math.sin(time * 15) * Math.sin(time * 25) * Math.sin(time * 35);
      
      // Only flash when the waves intersect perfectly at a high peak
      if (flash > 0.85) {
        lightRef.current.intensity = flash * 15;
        // Randomize the location of the lightning strike
        lightRef.current.position.set(
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.2) * 10,
          (Math.random() - 0.5) * 5
        );
      } else {
        // Quickly decay the light
        lightRef.current.intensity = THREE.MathUtils.lerp(lightRef.current.intensity, 0, 0.2);
      }
    }
  });

  return (
    <pointLight ref={lightRef} color="#43a3ff" intensity={0} distance={30} decay={2} />
  );
}

function CircuitCore() {
  return (
    <Float floatIntensity={2} rotationIntensity={1} speed={2}>
      {/* Central minimalistic wireframe representing a chip or electronic core */}
      <mesh position={[0, 1, 0]}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial 
          color="#000000" 
          wireframe 
          emissive="#43a3ff" 
          emissiveIntensity={1.5} 
        />
      </mesh>
      
      {/* A second inner solid core */}
      <mesh position={[0, 1, 0]}>
        <octahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial color="#050810" emissive="#102a50" />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#03050a"]} /> 
      <fog attach="fog" args={["#03050a", 5, 20]} />
      
      {/* Dim ambient light so the lightning flashes are more dramatic */}
      <ambientLight intensity={0.1} color="#43a3ff" />
      
      <Lightning />
      
      <CircuitCore />
      
      {/* Floating electrons / data particles */}
      <Sparkles count={150} scale={15} size={2} speed={0.4} opacity={0.6} color="#43a3ff" />
      <Sparkles count={30} scale={10} size={4} speed={1.5} opacity={0.9} color="#ffffff" />
      
      {/* PCB-style grid floor */}
      <Grid
        position={[0, -2, 0]}
        args={[30, 30]}
        cellSize={0.5}
        cellThickness={0.8}
        cellColor="#08142b"
        sectionSize={2.5}
        sectionThickness={1.5}
        sectionColor="#143063"
        fadeDistance={20}
        fadeStrength={1.5}
      />
    </>
  );
}

export function RenewaaCloudBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <Scene />
      </Canvas>
    </div>
  );
}
