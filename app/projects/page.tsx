"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, ImageOff } from "lucide-react";
import Link from "next/link";
import { projectsData } from "../data/projects";
import LavaLampBackground from "@/components/LavaLampBackground";

// Deterministic placeholder colors based on project title
const placeholderColors = [
  "from-sky-400/30 to-indigo-400/30",
  "from-emerald-400/30 to-teal-400/30",
  "from-orange-400/30 to-rose-400/30",
  "from-purple-400/30 to-fuchsia-400/30",
  "from-amber-400/30 to-yellow-400/30",
  "from-cyan-400/30 to-blue-400/30",
  "from-pink-400/30 to-red-400/30",
  "from-lime-400/30 to-green-400/30",
];

function getPlaceholderGradient(index: number) {
  return placeholderColors[index % placeholderColors.length];
}

// Skill category icons for placeholder image labels
function getProjectLabel(skills: string[]): string {
  const s = skills.join(" ").toLowerCase();
  if (s.includes("esp32") || s.includes("stm32") || s.includes("arduino") || s.includes("microcontroller")) return "Embedded";
  if (s.includes("devops") || s.includes("terraform") || s.includes("jenkins") || s.includes("docker")) return "DevOps";
  if (s.includes("kicad") || s.includes("pcb") || s.includes("electronic")) return "Hardware";
  if (s.includes("kotlin") || s.includes("flutter") || s.includes("android")) return "Mobile";
  if (s.includes("web") || s.includes("html") || s.includes("css")) return "Web";
  if (s.includes("fpga") || s.includes("machine learning") || s.includes("ai")) return "AI / FPGA";
  if (s.includes("rust")) return "Rust";
  if (s.includes("python")) return "Python";
  return "Project";
}

export default function ProjectsShowcase() {
  return (
    <main className="relative min-h-screen w-full">
      <LavaLampBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-12">

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed top-6 left-6 md:top-12 md:left-12 z-50"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-sky-600 transition-colors backdrop-blur-md bg-white/70 px-4 md:px-5 py-2 md:py-2.5 rounded-full border border-white/50 shadow-md hover:shadow-lg font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Back</span>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-slate-800">
            Project{" "}
            <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-indigo-600">
              Showcase
            </span>
          </h1>
          <p className="text-lg text-slate-500 mt-4 max-w-2xl">
            {projectsData.length} projects spanning Embedded Systems, Cloud
            infrastructure, IoT, DevOps, and more.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.04 }}
              className="group"
            >
              <div className="h-full rounded-2xl border border-white/60 bg-white/60 backdrop-blur-md shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
                {/* Placeholder Image */}
                {project.images && project.images.length > 0 ? (
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div
                    className={`w-full h-48 bg-gradient-to-br ${getPlaceholderGradient(i)} flex flex-col items-center justify-center gap-2 relative overflow-hidden`}
                  >
                    {/* Decorative grid pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div
                        className="w-full h-full"
                        style={{
                          backgroundImage:
                            "linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)",
                          backgroundSize: "20px 20px",
                        }}
                      />
                    </div>
                    <ImageOff className="w-8 h-8 text-slate-400/60" />
                    <span className="text-xs font-semibold text-slate-500/70 uppercase tracking-widest">
                      {getProjectLabel(project.skills)}
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <div>
                    <h3 className="font-semibold text-slate-800 text-lg leading-snug group-hover:text-sky-700 transition-colors">
                      {project.title}
                    </h3>
                    {project.duration && (
                      <p className="text-xs text-slate-400 mt-1">
                        {project.duration}
                      </p>
                    )}
                    {project.associatedWith && (
                      <p className="text-xs text-sky-600/80 mt-0.5">
                        {project.associatedWith}
                      </p>
                    )}
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {project.skills.slice(0, 4).map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                    {project.skills.length > 4 && (
                      <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-400 font-medium">
                        +{project.skills.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Link */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-sky-600 hover:text-sky-800 font-medium mt-2 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      View on GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
