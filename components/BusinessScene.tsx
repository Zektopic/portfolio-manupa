"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AbstractShape() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float floatIntensity={2} speed={1.5} rotationIntensity={1}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={2.5}>
        <MeshDistortMaterial
          color="#0f172a" // Deep slate
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.1}
          metalness={0.9}
        />
      </Sphere>
    </Float>
  );
}

export default function BusinessScene() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 bg-slate-50">
      {/* Background gradients for a premium corporate feel */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200" />
      
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        {/* Warm light from one side, cool from the other for a nice metallic reflection */}
        <directionalLight position={[15, 10, 5]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-15, -10, -5]} intensity={1} color="#3b82f6" />
        <directionalLight position={[0, -5, 15]} intensity={0.5} color="#ea580c" />
        
        <AbstractShape />
      </Canvas>
    </div>
  );
}
