"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Stamp,
  BadgeCheck,
  Mountain,
  Server,
  Github,
  BrainCircuit,
  Music,
  Camera,
  Sparkles,
} from "lucide-react";

const hobbies = [
  {
    icon: <Stamp className="w-6 h-6" />,
    title: "Philately",
    description:
      "Collecting stamps from around the world — a quiet passion that connects me to history and different cultures.",
    color: "#e07a5f",
  },
  {
    icon: <BadgeCheck className="w-6 h-6" />,
    title: "Badminton",
    description:
      "My go-to sport for staying active. Nothing beats a good rally to clear the mind after a long coding session.",
    color: "#81b29a",
  },
  {
    icon: <Mountain className="w-6 h-6" />,
    title: "Traveling & Hiking",
    description:
      "Exploring new trails and landscapes across Sri Lanka and beyond. Every hike is a reminder to keep moving forward.",
    color: "#f2cc8f",
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "Home Servers & Self-hosting",
    description:
      "Running my own infrastructure at home — because why pay for the cloud when you can build your own?",
    color: "#3d405b",
  },
  {
    icon: <Github className="w-6 h-6" />,
    title: "Open Source",
    description:
      "Contributing to and maintaining projects under github.com/Zektopic. Building in the open is how I give back.",
    color: "#6c63ff",
    link: "https://github.com/Zektopic",
  },
  {
    icon: <BrainCircuit className="w-6 h-6" />,
    title: "Local AI / LLM Tinkering",
    description:
      "Running Qwen and Gemma models locally on my AMD Ryzen 8600G. Exploring what's possible when AI runs on your own hardware.",
    color: "#e76f51",
  },
];

const collagePhotos = [
  { src: "/images/about-me/collage-1.svg", alt: "Travel and hiking adventures" },
  { src: "/images/about-me/collage-2.svg", alt: "Stamp collection close-up" },
  { src: "/images/about-me/collage-3.svg", alt: "Badminton and sports" },
  { src: "/images/about-me/collage-4.svg", alt: "Home server setup" },
  { src: "/images/about-me/collage-5.svg", alt: "Workstation and coding" },
  { src: "/images/about-me/collage-6.svg", alt: "Friends and team" },
  { src: "/images/about-me/collage-7.svg", alt: "Nature and landscape" },
  { src: "/images/about-me/collage-8.svg", alt: "Life moment" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function AboutMe() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden flex flex-col items-center p-6 md:p-12 pt-24 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      {/* Warm background blobs */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] rounded-full blur-[100px] pointer-events-none bg-orange-200/40"
      />
      <motion.div
        animate={{ scale: [1, 1.4, 1], x: [0, -80, 0], y: [0, 60, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-1/4 right-1/4 w-[35rem] h-[35rem] rounded-full blur-[120px] pointer-events-none bg-rose-200/40"
      />

      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="fixed top-6 left-6 md:top-12 md:left-12 z-50"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-amber-700 transition-colors backdrop-blur-md bg-white/60 px-4 md:px-5 py-2 md:py-2.5 rounded-full border border-white/50 shadow-md hover:shadow-lg font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="hidden sm:inline">Back</span>
        </Link>
      </motion.div>

      {/* Main Glass Panel */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        className="relative z-10 w-full max-w-4xl rounded-[2rem] border border-white/60 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.2) 100%)",
          backdropFilter: "blur(30px)",
          WebkitBackdropFilter: "blur(30px)",
          boxShadow:
            "0 24px 64px 0 rgba(0,0,0,0.06), inset 0 0 0 1px rgba(255,255,255,0.3)",
        }}
      >
        <div className="p-8 md:p-16">
          {/* Easter egg notice */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100/60 border border-amber-200/50 text-sm text-amber-700 font-medium mb-8"
          >
            <Sparkles className="w-4 h-4" />
            You found the secret page!
          </motion.div>

          {/* Header */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-slate-800 mb-4"
          >
            Hey, I&apos;m{" "}
            <span className="font-semibold text-amber-600">Manu</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-2xl mb-12"
          >
            Beyond the code and cloud deployments, here&apos;s a glimpse into
            what keeps me going when the IDE is closed. Spoiler: it&apos;s rarely
            closed.
          </motion.p>

          {/* Hobbies Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16"
          >
            {hobbies.map((hobby) => (
              <motion.div
                key={hobby.title}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.01 }}
                className="bg-white/50 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col gap-3 group"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-110"
                    style={{ backgroundColor: hobby.color }}
                  >
                    {hobby.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">
                    {hobby.title}
                  </h3>
                </div>
                <p className="text-slate-600 font-light leading-relaxed text-sm">
                  {hobby.description}
                </p>
                {hobby.link && (
                  <Link
                    href={hobby.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium mt-1 transition-colors"
                    style={{ color: hobby.color }}
                  >
                    Visit &rarr;
                  </Link>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Photo Collage */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                <Camera className="w-5 h-5 text-amber-600" />
              </div>
              <h2 className="text-2xl font-semibold text-slate-800">
                Life in Frames
              </h2>
            </div>
            <div className="columns-2 md:columns-3 gap-4">
              {collagePhotos.map((photo, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.5, ease: "easeOut" as const }}
                  className="break-inside-avoid mb-4"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full rounded-2xl border border-white/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Music Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center">
                <Music className="w-5 h-5 text-rose-500" />
              </div>
              <h2 className="text-2xl font-semibold text-slate-800">
                What I Listen To
              </h2>
            </div>
            <div className="bg-white/50 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-sm">
              <p className="text-slate-600 font-light leading-relaxed mb-3">
                Big fan of <span className="font-medium text-slate-800">J-Rock</span> (Japanese Rock).
                My current obsession is{" "}
                <span className="font-medium text-slate-800">Base Ball Bear</span>{" "}
                &mdash; if you haven&apos;t heard{" "}
                <span className="italic text-rose-500">&quot;Stairway Generation&quot;</span>,
                you&apos;re missing out. It&apos;s the kind of track that makes you want
                to code through the night.
              </p>
              <p className="text-sm text-slate-500 font-light">
                Also into: city pop, lo-fi, and anything with a good guitar riff.
              </p>
            </div>
          </motion.div>

          {/* Footer note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="text-center text-sm text-slate-400 font-light"
          >
            Thanks for being curious enough to click my name. That says something about you.
          </motion.p>
        </div>
      </motion.div>
    </main>
  );
}
