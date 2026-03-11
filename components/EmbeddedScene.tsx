"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Wireframe, Box, Icosahedron } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useRef } from "react";
import * as THREE from "three";

function HackerObject() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x -= delta * 0.1;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Outer Cage */}
      <Icosahedron args={[2, 1]}>
        <meshBasicMaterial color="#00ff00" wireframe />
      </Icosahedron>
      
      {/* Inner Core */}
      <Box args={[1, 1, 1]}>
        {/* We use MeshBasicMaterial and go above 1 for color to trigger the Bloom effect */}
        <meshBasicMaterial color={[0, 2, 0]} /> 
        <Wireframe stroke={"#00ff00"} thickness={0.05} />
      </Box>
    </group>
  );
}

export default function EmbeddedScene() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 bg-gray-950">
      {/* Grid background for a terminal/blueprint aesthetic */}
      <div 
        className="absolute inset-0 opacity-20" 
        style={{
          backgroundImage: `linear-gradient(to right, #00ff00 1px, transparent 1px), linear-gradient(to bottom, #00ff00 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} 
      />
      
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        {/* Black void background */}
        <color attach="background" args={['#030712']} /> 
        
        <HackerObject />
        
        {/* Postprocessing for the Cyberpunk Neon Glow */}
        <EffectComposer disableNormalPass>
          <Bloom 
            luminanceThreshold={1} 
            mipmapBlur 
            intensity={1.5} 
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
