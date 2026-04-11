"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef, useEffect } from "react";
import * as THREE from "three";

// Configuration based on lucia-gomez/lava-lamp simulation
const NUM_BLOBS = 8;        // Reduced amount of particles
const MIN_RADIUS = 0.04;    // Min blob size (normalized 4%)
const MAX_RADIUS = 0.12;    // Max blob size (normalized 12%)
const SPEED = 0.0015;       // Blob speed
const STICKINESS = 1.35;    // High stickiness for merging effect

function ShaderScene() {
  const { size } = useThree();
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const blobs = useMemo(() => {
    return Array.from({ length: NUM_BLOBS }).map(() => {
      let vx, vy;
      do {
        vx = (Math.random() - 0.5) * SPEED * 2;
        vy = (Math.random() - 0.5) * SPEED * 2;
      } while (Math.abs(vx) < SPEED * 0.2 && Math.abs(vy) < SPEED * 0.2);
      
      return {
        x: Math.random(),
        y: Math.random(),
        vx,
        vy,
        r: Math.random() * (MAX_RADIUS - MIN_RADIUS) + MIN_RADIUS
      };
    });
  }, []);

  const uniforms = useMemo(() => ({
    blobs: { value: Array(NUM_BLOBS).fill(null).map(() => new THREE.Vector3()) },
    color1: { value: new THREE.Color("#ffaa00") }, // Yellowish center 
    color2: { value: new THREE.Color("#ff3300") }, // Reddish bottom
    bgColor: { value: new THREE.Color("#fff7ed") }, // Light opaque background
    resolution: { value: new THREE.Vector2(size.width, size.height) },
    stickiness: { value: STICKINESS }
  }), []);

  useEffect(() => {
    uniforms.resolution.value.set(size.width, size.height);
  }, [size.width, size.height, uniforms]);

  useFrame(() => {
    if (!materialRef.current) return;
    
    const aspect = size.width / size.height;

    blobs.forEach((blob, i) => {
      blob.x += blob.vx;
      blob.y += blob.vy;

      // Adjust collision bounds considering aspect ratio so they don't clip harshly
      const rx = blob.r;
      const ry = blob.r * aspect;

      if (blob.x <= rx) { blob.vx *= -1; blob.x = rx + 0.001; }
      if (blob.x >= 1 - rx) { blob.vx *= -1; blob.x = 1 - rx - 0.001; }
      if (blob.y <= ry) { blob.vy *= -1; blob.y = ry + 0.001; }
      if (blob.y >= 1 - ry) { blob.vy *= -1; blob.y = 1 - ry - 0.001; }

      uniforms.blobs.value[i].set(blob.x, blob.y, blob.r);
    });
    
    materialRef.current.uniformsNeedUpdate = true;
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={`
          void main() {
            gl_Position = vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          precision highp float;
          uniform vec3 blobs[${NUM_BLOBS}];
          uniform vec3 color1;
          uniform vec3 color2;
          uniform vec3 bgColor;
          uniform vec2 resolution;
          uniform float stickiness;
          
          void main() {
            // Normalized pixel coordinates (from 0 to 1)
            vec2 uv = gl_FragCoord.xy / resolution.xy;
            float aspect = resolution.x / resolution.y;
            
            float sum = 0.0;
            for (int i = 0; i < ${NUM_BLOBS}; i++) {
              vec3 blob = blobs[i];
              
              // dx, dy in normalized coords, adjusted by aspect ratio for circular distance
              float dx = blob.x - uv.x;
              float dy = (blob.y - uv.y) / aspect; 
              float radius = blob.z;
              
              sum += (radius * radius) / (dx * dx + dy * dy);
            }
            
            float threshold = 2.0 - stickiness;
            float alpha = smoothstep(threshold - 0.02, threshold + 0.02, sum);
            
            vec3 color = mix(color2, color1, uv.y);
            vec3 finalColor = mix(bgColor, color, alpha);
            
            gl_FragColor = vec4(finalColor, 1.0);
          }
        `}
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  );
}

export default function LavaLampBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* 2D Metaball WebGL Shader Canvas */}
      <Canvas orthographic camera={{ position: [0, 0, 1], zoom: 1 }}>
        <ShaderScene />
      </Canvas>
      
      {/* Frosted Glass Overlay to reduce distraction */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl z-10" />
    </div>
  );
}
