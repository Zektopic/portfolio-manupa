"use client";

import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Float, Environment } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

interface BlobProps {
  color: string;
  position: [number, number, number];
  speed: number;
  distort: number;
  radius: number;
  factor: number;
}

function Blob({ color, position, speed, distort, radius, factor }: BlobProps) {
  const mesh = useRef<THREE.Mesh>(null);
  
  return (
    <Float speed={speed} rotationIntensity={1} floatIntensity={factor}>
      <mesh position={position} ref={mesh}>
        <sphereGeometry args={[radius, 64, 64]} />
        <MeshDistortMaterial 
          color={color} 
          envMapIntensity={0.8} 
          clearcoat={1} 
          clearcoatRoughness={0.1} 
          metalness={0.1}
          roughness={0.2}
          distort={distort} 
          speed={speed} 
        />
      </mesh>
    </Float>
  );
}

export default function LavaLampBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-gradient-to-b from-orange-50 to-orange-100">
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffeedd" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#ffeedd" />
        
        {/* Soft Point Lights to act like the lamp's core glow */}
        <pointLight position={[0, -5, 0]} intensity={2} color="#ff6600" distance={20} />
        <pointLight position={[0, 5, 0]} intensity={1} color="#ff9900" distance={20} />

        <Blob position={[-4, 2, -5]} color="#ff7a00" speed={2} distort={0.4} radius={3} factor={1.2} />
        <Blob position={[4, -3, -2]} color="#ff5500" speed={1.5} distort={0.5} radius={2.5} factor={1.5} />
        <Blob position={[0, -5, -8]} color="#ff8800" speed={1} distort={0.6} radius={4} factor={1} />
        <Blob position={[-5, -4, -4]} color="#ff3300" speed={2.5} distort={0.3} radius={2} factor={2} />
        <Blob position={[5, 4, -6]} color="#ff6600" speed={1.2} distort={0.5} radius={3.5} factor={1.3} />
        <Blob position={[0, 5, -5]} color="#ff8800" speed={1.8} distort={0.4} radius={2.8} factor={1.8} />

        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
