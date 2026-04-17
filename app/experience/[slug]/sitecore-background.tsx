"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Cloud, Clouds, Sky } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";

function Scene() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.cos(state.clock.elapsedTime / 20) / 10;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime / 10) / 2;
    }
  });

  return (
    <>
      <Sky 
        distance={450000} 
        sunPosition={[0, 0.05, -1]} 
        mieCoefficient={0.005}
        mieDirectionalG={0.8}
        rayleigh={3}
        turbidity={10} 
      />
      <ambientLight intensity={1} color="#ffb6c1" />
      <directionalLight position={[0, 5, -10]} intensity={2} color="#ffdfba" />
      
      <group ref={groupRef}>
        <Clouds material={THREE.MeshLambertMaterial} limit={400}>
          <Cloud position={[0, -2, -10]} speed={0.1} opacity={0.6} color="#ffe4e1" />
          <Cloud position={[-10, 2, -15]} speed={0.2} opacity={0.5} color="pink" />
          <Cloud position={[10, 4, -25]} speed={0.15} opacity={0.7} color="#ffb6c1" />
          <Cloud position={[-5, 8, -20]} speed={0.1} opacity={0.4} color="#ffdfba" />
          <Cloud position={[15, -4, -15]} speed={0.2} opacity={0.5} color="#fff0f5" />
        </Clouds>
      </group>
    </>
  );
}

export function SitecoreCloudBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <Scene />
      </Canvas>
    </div>
  );
}
