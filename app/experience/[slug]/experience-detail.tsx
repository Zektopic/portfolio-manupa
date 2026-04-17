"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ImageOff, Briefcase, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import { experienceData } from "../../data/experience";
import { projectsData } from "../../data/projects";
import { SitecoreCloudBackground } from "./sitecore-background";
import { RenewaaCloudBackground } from "./renewaa-background";
import { VegaBackground } from "./vega-background";

const placeholderColors = [
  "from-sky-400/30 to-indigo-400/30",
  "from-emerald-400/30 to-teal-400/30",
  "from-orange-400/30 to-rose-400/30",
  "from-purple-400/30 to-fuchsia-400/30",
  "from-amber-400/30 to-yellow-400/30",
  "from-cyan-400/30 to-blue-400/30",
];

function TechLogo({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <img
        src={logo}
        alt={name}
        className="w-10 h-10 object-contain"
        onError={(e) => {
          const target = e.currentTarget;
          target.style.display = "none";
          const fallback = target.nextElementSibling as HTMLElement;
          if (fallback) fallback.style.display = "flex";
        }}
      />
      <div className="w-10 h-10 rounded-lg bg-slate-200/60 items-center justify-center hidden">
        <span className="text-[9px] font-bold text-slate-500 text-center leading-none">
          {name.slice(0, 4)}
        </span>
      </div>
      <span className="text-xs text-slate-500 text-center max-w-[4rem] leading-tight">
        {name}
      </span>
    </div>
  );
}

export function ExperienceDetail({ slug }: { slug: string }) {
  const experience = experienceData.find((e) => e.slug === slug);

  if (!experience) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 via-sky-50/50 to-indigo-50/50 p-6">
        <h1 className="text-3xl font-light text-slate-800 mb-4">Experience not found</h1>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-800 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </main>
    );
  }

  const relatedProjects = projectsData.filter(
    (p) =>
      p.associatedWith &&
      experience.company.toLowerCase().includes(p.associatedWith.toLowerCase().split(" ")[0])
  );

  const hasPositions = "positions" in experience && Array.isArray(experience.positions);
  const descriptions: string[] = hasPositions
    ? experience.positions!.flatMap((p: { description?: string[] }) => p.description || [])
    : (experience as { description?: string[] }).description || [];

  const businessDev: string[] = hasPositions
    ? experience.positions!.flatMap((p: { businessDevelopment?: string[] }) => p.businessDevelopment || [])
    : [];

  const hasCustomBackground = slug === "sitecore" || slug === "renewaa-energy" || slug === "vega-innovations";

  return (
    <main
      className={`min-h-screen ${
        hasCustomBackground
          ? "bg-transparent relative"
          : "bg-gradient-to-br from-slate-50 via-sky-50/50 to-indigo-50/50"
      }`}
    >
      {slug === "sitecore" && <SitecoreCloudBackground />}
      {slug === "renewaa-energy" && <RenewaaCloudBackground />}
      {slug === "vega-innovations" && <VegaBackground />}
      <div className={`max-w-4xl mx-auto px-6 md:px-12 py-12 ${hasCustomBackground ? "relative z-10" : ""}`}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-sky-600 transition-colors backdrop-blur-md bg-white/60 px-5 py-2.5 rounded-full border border-white/50 shadow-sm hover:shadow-md font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 mb-10"
        >
          <h1 className="text-3xl md:text-5xl font-light tracking-tight text-slate-800">
            {experience.company}
          </h1>
          <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" />
              {experience.position || (hasPositions ? experience.positions![0].title : "")}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {experience.duration}
            </span>
            {experience.location && (
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                {experience.location}
              </span>
            )}
          </div>
        </motion.div>

        {experience.summary && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-10 p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-white/50 shadow-sm"
          >
            <p className="text-lg text-slate-700 leading-relaxed font-light">
              {experience.summary}
            </p>
          </motion.div>
        )}

        {hasPositions && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mb-10"
          >
            <h2 className="text-xl font-semibold text-slate-800 mb-4">Positions</h2>
            <div className="space-y-4">
              {experience.positions!.map((pos: { id: number; title: string; type: string; duration: string; location?: string; description?: string[] }) => (
                <div
                  key={pos.id}
                  className="p-5 rounded-2xl bg-white/60 backdrop-blur-md border border-white/50 shadow-sm"
                >
                  <h3 className="font-semibold text-slate-800">{pos.title}</h3>
                  <p className="text-sm text-slate-500">
                    {pos.type} · {pos.duration}
                    {pos.location ? ` · ${pos.location}` : ""}
                  </p>
                  {pos.description && (
                    <ul className="mt-3 space-y-1.5">
                      {pos.description.map((d, i) => (
                        <li key={i} className="text-sm text-slate-600 flex gap-2">
                          <span className="text-sky-500 mt-1 shrink-0">&#8226;</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {!hasPositions && descriptions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-10"
          >
            <h2 className="text-xl font-semibold text-slate-800 mb-4">Responsibilities</h2>
            <div className="p-5 rounded-2xl bg-white/60 backdrop-blur-md border border-white/50 shadow-sm">
              <ul className="space-y-2">
                {descriptions.map((d, i) => (
                  <li key={i} className="text-sm text-slate-600 flex gap-2">
                    <span className="text-sky-500 mt-1 shrink-0">&#8226;</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}

        {businessDev.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mb-10"
          >
            <h2 className="text-xl font-semibold text-slate-800 mb-4">Business Development</h2>
            <div className="p-5 rounded-2xl bg-white/60 backdrop-blur-md border border-white/50 shadow-sm">
              <ul className="space-y-2">
                {businessDev.map((d, i) => (
                  <li key={i} className="text-sm text-slate-600 flex gap-2">
                    <span className="text-sky-500 mt-1 shrink-0">&#8226;</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}

        {experience.techStack && experience.techStack.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-10"
          >
            <h2 className="text-xl font-semibold text-slate-800 mb-4">Tech Stack</h2>
            <div className="p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-white/50 shadow-sm">
              <div className="flex flex-wrap gap-6">
                {experience.techStack.map((tech) => (
                  <TechLogo key={tech.name} name={tech.name} logo={tech.logo} />
                ))}
              </div>
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mb-10"
        >
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Project Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {(experience.projectImages && experience.projectImages.length > 0
              ? experience.projectImages
              : Array.from({ length: 3 }, (_, i) => null)
            ).map((img, i) =>
              img ? (
                <img
                  key={i}
                  src={img}
                  alt={`${experience.company} project ${i + 1}`}
                  className="w-full h-40 object-cover rounded-xl border border-white/50 shadow-sm"
                />
              ) : (
                <div
                  key={i}
                  className={`w-full h-40 rounded-xl bg-gradient-to-br ${
                    placeholderColors[i % placeholderColors.length]
                  } flex flex-col items-center justify-center gap-2 border border-white/50 shadow-sm relative overflow-hidden`}
                >
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                  <ImageOff className="w-6 h-6 text-slate-400/50" />
                  <span className="text-[10px] font-semibold text-slate-500/60 uppercase tracking-widest">
                    Photo
                  </span>
                </div>
              )
            )}
          </div>
        </motion.div>

        {relatedProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-10"
          >
            <h2 className="text-xl font-semibold text-slate-800 mb-4">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedProjects.map((project) => (
                <div
                  key={project.title}
                  className="p-5 rounded-2xl bg-white/60 backdrop-blur-md border border-white/50 shadow-sm"
                >
                  <h3 className="font-semibold text-slate-800">{project.title}</h3>
                  {project.duration && (
                    <p className="text-xs text-slate-400 mt-0.5">{project.duration}</p>
                  )}
                  <p className="text-sm text-slate-600 mt-2 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
}
