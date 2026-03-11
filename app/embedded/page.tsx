"use client";

import { motion } from "framer-motion";
import EmbeddedScene from "@/components/EmbeddedScene";
import { ArrowLeft, Cpu, Terminal, Wifi, Power } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

// Optional typewriter effect hook
function useTypewriter(text: string, speed: number = 30) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index === text.length) {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return displayedText;
}

export default function EmbeddedExperience() {
  const titleText = useTypewriter("Embedded Systems Engineer");

  return (
    <main className="relative min-h-screen w-full overflow-hidden text-green-500 font-mono">
      <EmbeddedScene />
      
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen p-6 md:p-12 pt-24">
        
        {/* Navigation back */}
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.1, delay: 0.2 }}
           className="absolute top-8 left-8 md:top-12 md:left-12"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 hover:bg-green-400/20 transition-colors bg-gray-950/90 px-4 py-2 border border-green-500/50 uppercase tracking-widest text-sm backdrop-blur-md">
            <ArrowLeft className="w-4 h-4" />
            <span>[ Return ]</span>
          </Link>
        </motion.div>

        {/* Main Content Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, delay: 0.4 }}
          className="w-full max-w-5xl mx-auto bg-gray-950/95 backdrop-blur-xl p-8 md:p-16 border-l-4 border-r border-y border-green-500/50 shadow-[0_0_30px_rgba(0,255,0,0.15)] relative overflow-hidden"
        >
          {/* Scanline effect */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />

          <div className="mb-2 text-green-400/80 text-xs tracking-widest uppercase flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 animate-pulse" />
            System Online // User: Root
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-green-300 mb-6 drop-shadow-[0_0_12px_rgba(0,255,0,0.8)] h-16 md:h-20">
            &gt; {titleText}<span className="animate-pulse">_</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 1.5 }}
            className="text-lg md:text-xl text-green-400 mb-16 max-w-2xl leading-relaxed"
          >
            Developing low-level firmware, optimizing microcontrollers, and building the bridge between hardware and connected IoT ecosystems.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <ServiceCard 
              delay={1.6} 
              icon={<Cpu className="w-6 h-6 text-green-400" />}
              title="Microcontroller Architecture"
              description="Programming ARM Cortex, ESP32, and AVR based systems utilizing RTOS for deterministic task execution."
            />
            <ServiceCard 
              delay={1.7} 
              icon={<Terminal className="w-6 h-6 text-green-400" />}
              title="Low-Level Firmware"
              description="Writing highly optimized C/C++ and Rust to interface with sensors, actuators, and memory management units."
            />
            <ServiceCard 
              delay={1.8} 
              icon={<Wifi className="w-6 h-6 text-green-400" />}
              title="IoT Connectivity"
              description="Implementing MQTT, CoAP, and BLE stacks for secure, low-power device communication to cloud endpoints."
            />
            <ServiceCard 
              delay={1.9} 
              icon={<Power className="w-6 h-6 text-green-400" />}
              title="Hardware Bring-up"
              description="Debugging schematics and PCBs using oscilloscopes, logic analyzers, and reading datasheets."
            />
          </div>
        </motion.div>
      </div>
    </main>
  );
}

function ServiceCard({ delay, icon, title, description }: { delay: number, icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2, delay }}
      whileHover={{ scale: 1.02, backgroundColor: "rgba(0, 255, 0, 0.1)" }}
      className="bg-gray-900/80 p-6 border border-green-500/40 hover:border-green-400 transition-all duration-150 flex flex-col gap-4 group backdrop-blur-sm"
    >
      <div className="flex items-center gap-4">
        <div className="bg-gray-950 p-3 border border-green-400/50 group-hover:shadow-[0_0_15px_rgba(0,255,0,0.4)] transition-shadow">
          {icon}
        </div>
        <h3 className="text-xl font-bold tracking-wider text-green-300">{title}</h3>
      </div>
      <p className="text-green-400/90 text-sm leading-relaxed border-t border-green-500/30 pt-4 mt-2">
        {description}
      </p>
    </motion.div>
  );
}
