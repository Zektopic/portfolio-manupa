"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Cloud, Clouds, Grid, Sparkles } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useMemo } from "react";

// Digital Low-poly Tree representing Agritech
function Tree({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Trunk */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.1, 0.15, 1, 5]} />
        <meshStandardMaterial color="#4d3319" />
      </mesh>
      {/* Leaves */}
      <mesh position={[0, 1.5, 0]}>
        <coneGeometry args={[0.8, 2, 5]} />
        <meshStandardMaterial color="#2d8a4e" flatShading />
      </mesh>
    </group>
  );
}

// Data packets traveling from trees to clouds (IoT to Cloud DevOps)
function DataStream() {
  const packetsRef = useRef<THREE.Group>(null);
  
  const packets = useMemo(() => {
    return Array.from({ length: 40 }).map(() => ({
      x: (Math.random() - 0.5) * 30, // wide spread over the plantation
      y: Math.random() * 12,
      z: (Math.random() - 0.5) * 20 - 5,
      speed: 2 + Math.random() * 4,
    }));
  }, []);

  useFrame((state, delta) => {
    if (packetsRef.current) {
      packetsRef.current.children.forEach((child, i) => {
        child.position.y += packets[i].speed * delta;
        if (child.position.y > 12) {
          child.position.y = 0; // restart from ground
        }
      });
    }
  });

  return (
    <group ref={packetsRef}>
      {packets.map((p, i) => (
        <mesh key={i} position={[p.x, p.y, p.z]}>
          <boxGeometry args={[0.1, 0.4, 0.1]} />
          <meshBasicMaterial color="#00e5ff" />
        </mesh>
      ))}
    </group>
  );
}

// Semi-transparent glowing arch to signify a "Greenhouse" structure
function GreenhouseDome() {
  return (
    <mesh position={[0, 2, -5]}>
      <cylinderGeometry args={[15, 15, 30, 16, 1, true, 0, Math.PI]} />
      <meshStandardMaterial 
        color="#a1e8b9" 
        wireframe 
        transparent 
        opacity={0.1} 
        side={THREE.DoubleSide} 
      />
    </mesh>
  );
}

function Scene() {
  const cloudGroupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (cloudGroupRef.current) {
      // Gently drift clouds
      cloudGroupRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.1) * 3;
      cloudGroupRef.current.position.y = 10 + Math.sin(state.clock.elapsedTime * 0.2) * 0.5;
    }
  });

  // Generate random tree positions
  const trees = useMemo(() => {
    return Array.from({ length: 30 }).map(() => ({
      x: (Math.random() - 0.5) * 25,
      z: (Math.random() - 0.5) * 25 - 5,
    }));
  }, []);

  return (
    <>
      <color attach="background" args={["#08120b"]} /> 
      <fog attach="fog" args={["#08120b", 5, 30]} />
      
      {/* Soft warm greenhouse light */}
      <ambientLight intensity={0.4} color="#a1e8b9" />
      {/* Sunlight beaming from top right */}
      <directionalLight position={[10, 20, 10]} intensity={1.5} color="#ffeb3b" />
      {/* Cyan tech glow from the bottom */}
      <pointLight position={[0, 2, 5]} intensity={2} color="#00e5ff" distance={20} />

      {/* Scattered Low-poly Trees */}
      {trees.map((t, i) => (
        <Tree key={i} position={[t.x, -2, t.z]} />
      ))}
      
      <GreenhouseDome />

      {/* Cyber-Agri floor */}
      <Grid
        position={[0, -2, 0]}
        args={[50, 50]}
        cellSize={1}
        cellThickness={0.5}
        cellColor="#102b17"
        sectionSize={4}
        sectionThickness={1}
        sectionColor="#205c32"
        fadeDistance={25}
        fadeStrength={2}
      />

      <DataStream />

      {/* Ambient greenhouse moisture / data dust */}
      <Sparkles count={150} scale={25} size={1.5} color="#88ffaa" opacity={0.4} speed={0.2} position={[0, 2, -5]} />
      
      {/* The Cloud (DevOps Infrastructure) */}
      <group ref={cloudGroupRef} position={[0, 10, -10]}>
        <Clouds material={THREE.MeshLambertMaterial} limit={400}>
          <Cloud position={[0, 0, 0]} speed={0.1} opacity={0.8} color="#e0f7fa" />
          <Cloud position={[-6, 1, 2]} speed={0.15} opacity={0.6} color="#b2ebf2" />
          <Cloud position={[6, -1, -2]} speed={0.2} opacity={0.7} color="#4dd0e1" />
          <Cloud position={[0, -2, 5]} speed={0.1} opacity={0.5} color="#84ffff" />
        </Clouds>
      </group>
    </>
  );
}

export function AzendBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 1, 12], fov: 60 }}>
        <Scene />
      </Canvas>
    </div>
  );
}
