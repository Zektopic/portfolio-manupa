"use client";

import { motion } from "framer-motion";
import BusinessScene from "@/components/BusinessScene";
import { ArrowLeft, Target, TrendingUp, Users, Presentation, Briefcase } from "lucide-react";
import Link from "next/link";
import { experienceData } from "../data/experience";
import { ExperiencePreviewCard } from "../components/experience-preview-card";

const businessExperience = experienceData.filter((e) =>
  e.domains?.includes("business")
);

export default function BusinessExperience() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden text-slate-800">
      <BusinessScene />

      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen p-6 md:p-12 pt-24">

        {/* Navigation back */}
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="fixed top-6 left-6 md:top-12 md:left-12 z-50"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors backdrop-blur-md bg-white/70 px-4 md:px-5 py-2 md:py-2.5 rounded-full border border-slate-200 shadow-md hover:shadow-lg font-medium">
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Back</span>
          </Link>
        </motion.div>

        {/* Main Content Area */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-5xl mx-auto backdrop-blur-xl bg-white/70 p-8 md:p-16 rounded-[2rem] border border-white shadow-xl relative overflow-hidden"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-5xl md:text-7xl font-light tracking-tight text-slate-900 mb-6 text-center md:text-left"
          >
            Business <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-slate-700 to-slate-900">Leadership</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-2xl text-slate-600 mb-16 font-light leading-relaxed max-w-2xl text-center md:text-left"
          >
            Driving strategic initiatives, leading agile transformations, and delivering undeniable value through technical bridge-building.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <ServiceCard
              delay={1.0}
              icon={<Target className="w-6 h-6 text-slate-700" />}
              title="Strategic Planning"
              description="Aligning technical roadmaps with core business objectives to drive long-term value and competitive advantage."
            />
            <ServiceCard
              delay={1.1}
              icon={<Users className="w-6 h-6 text-slate-700" />}
              title="Team Leadership"
              description="Building, mentoring, and scaling high-performing cross-functional engineering and product teams."
            />
            <ServiceCard
              delay={1.2}
              icon={<TrendingUp className="w-6 h-6 text-slate-700" />}
              title="Agile Delivery"
              description="Implementing and optimizing agile methodologies (Scrum/Kanban) to accelerate product time-to-market."
            />
            <ServiceCard
              delay={1.3}
              icon={<Presentation className="w-6 h-6 text-slate-700" />}
              title="Stakeholder Management"
              description="Translating complex technical concepts into actionable insights for C-level executives and key stakeholders."
            />
          </div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-slate-700" />
              Professional Experience
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {businessExperience.map((exp, i) => (
                <ExperiencePreviewCard
                  key={exp.slug}
                  slug={exp.slug}
                  company={exp.company}
                  role={exp.position || ("positions" in exp ? exp.positions![0].title : "")}
                  duration={exp.duration}
                  detail={exp.location || ""}
                  summary={exp.summary || ""}
                  techStack={exp.techStack || []}
                  variant="corporate"
                  delay={1.6 + i * 0.1}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}

function ServiceCard({ delay, icon, title, description }: { delay: number, icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col gap-4"
    >
      <div className="bg-slate-100 w-12 h-12 rounded-xl flex items-center justify-center shadow-inner">
        {icon}
      </div>
      <h3 className="text-xl font-medium text-slate-900">{title}</h3>
      <p className="text-slate-600 font-light leading-relaxed">{description}</p>
    </motion.div>
  );
}
