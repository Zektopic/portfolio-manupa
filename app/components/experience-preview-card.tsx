"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";

type Variant = "glass" | "terminal" | "corporate";

interface ExperiencePreviewCardProps {
  slug: string;
  company: string;
  role: string;
  duration: string;
  detail: string;
  summary: string;
  techStack: { name: string; logo: string }[];
  variant: Variant;
  delay: number;
}

const variantStyles: Record<Variant, {
  card: string;
  cardExpanded: string;
  duration: string;
  company: string;
  role: string;
  detail: string;
  summary: string;
  techLabel: string;
  link: string;
  chevron: string;
}> = {
  glass: {
    card: "bg-white/40 backdrop-blur-md rounded-2xl border border-white/50 shadow-sm hover:shadow-md",
    cardExpanded: "bg-white/50 backdrop-blur-md rounded-2xl border border-sky-200/60 shadow-md",
    duration: "text-xs font-semibold text-sky-600 uppercase tracking-wide",
    company: "font-semibold text-slate-800",
    role: "text-sm text-slate-700",
    detail: "text-xs text-slate-500",
    summary: "text-sm text-slate-600",
    techLabel: "text-xs text-slate-500",
    link: "text-sky-600 hover:text-sky-800",
    chevron: "text-slate-400",
  },
  terminal: {
    card: "bg-gray-900/80 border border-green-500/40 hover:border-green-400",
    cardExpanded: "bg-gray-900/90 border border-green-400",
    duration: "text-xs text-green-400 tracking-widest uppercase",
    company: "font-bold text-white tracking-wide",
    role: "text-sm text-gray-200",
    detail: "text-xs text-gray-400",
    summary: "text-sm text-gray-300",
    techLabel: "text-xs text-green-400/80",
    link: "text-green-400 hover:text-green-300",
    chevron: "text-green-500/60",
  },
  corporate: {
    card: "bg-white/80 backdrop-blur-md rounded-2xl border border-slate-100 shadow-sm hover:shadow-md",
    cardExpanded: "bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200 shadow-md",
    duration: "text-xs font-semibold text-slate-500 uppercase tracking-wide",
    company: "font-semibold text-slate-900",
    role: "text-sm text-slate-700",
    detail: "text-xs text-slate-500",
    summary: "text-sm text-slate-600",
    techLabel: "text-xs text-slate-500",
    link: "text-slate-700 hover:text-slate-900",
    chevron: "text-slate-400",
  },
};

function TechLogo({ name, logo }: { name: string; logo: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className="w-7 h-7 rounded-md bg-slate-200/60 flex items-center justify-center"
        title={name}
      >
        <span className="text-[8px] font-bold text-slate-500 leading-none text-center">
          {name.slice(0, 3)}
        </span>
      </div>
    );
  }

  return (
    <img
      src={logo}
      alt={name}
      title={name}
      className="w-6 h-6 object-contain"
      onError={() => setFailed(true)}
    />
  );
}

export function ExperiencePreviewCard({
  slug,
  company,
  role,
  duration,
  detail,
  summary,
  techStack,
  variant,
  delay,
}: ExperiencePreviewCardProps) {
  const [expanded, setExpanded] = useState(false);
  const styles = variantStyles[variant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`p-5 transition-all duration-300 cursor-pointer ${
        expanded ? styles.cardExpanded : styles.card
      }`}
      onClick={() => setExpanded(!expanded)}
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 flex flex-col gap-1">
          <span className={styles.duration}>{duration}</span>
          <h4 className={styles.company}>{company}</h4>
          <p className={styles.role}>{role}</p>
        </div>
        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className={styles.chevron}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </div>

      {!expanded && (
        <p className={`mt-2 ${styles.detail}`}>{detail}</p>
      )}

      {/* Expanded content */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className={`mt-3 ${styles.summary}`}>{summary}</p>

            {/* Tech stack logos */}
            {techStack.length > 0 && (
              <div className="mt-4">
                <span className={`${styles.techLabel} block mb-2`}>Tech Stack</span>
                <div className="flex flex-wrap items-center gap-3">
                  {techStack.map((tech) => (
                    <TechLogo key={tech.name} name={tech.name} logo={tech.logo} />
                  ))}
                </div>
              </div>
            )}

            {/* Know More link */}
            <Link
              href={`/experience/${slug}`}
              onClick={(e) => e.stopPropagation()}
              className={`inline-flex items-center gap-1.5 mt-4 text-sm font-medium ${styles.link} transition-colors`}
            >
              Know More
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
