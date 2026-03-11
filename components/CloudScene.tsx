"use client";

import { Canvas } from "@react-three/fiber";
import { Cloud, Clouds, Sky } from "@react-three/drei";
import * as THREE from "three";

export default function CloudScene() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 bg-sky-50">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        {/* Sky with a low sun for a pleasant gradient */}
        <Sky sunPosition={[100, 20, 100]} turbidity={0.1} rayleigh={0.5} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        {/* Floating clouds */}
        <Clouds material={THREE.MeshBasicMaterial}>
          <Cloud segments={40} bounds={[10, 2, 2]} volume={10} color="#ffffff" opacity={0.5} position={[0, -2, -5]} />
          <Cloud segments={40} bounds={[10, 2, 2]} volume={10} color="#f0f8ff" opacity={0.8} position={[4, 2, -10]} />
          <Cloud segments={30} bounds={[5, 1, 1]} volume={5} color="#e0f2fe" opacity={0.6} position={[-6, 4, -15]} />
        </Clouds>
      </Canvas>
    </div>
  );
}
