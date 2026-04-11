"use client";

import { motion } from "framer-motion";
import CloudScene from "@/components/CloudScene";
import { ArrowLeft, CloudCog, Server, Shield, Database, Briefcase } from "lucide-react";
import Link from "next/link";
import { experienceData } from "../data/experience";
import { ExperiencePreviewCard } from "../components/experience-preview-card";

const cloudExperience = experienceData.filter((e) =>
  e.domains?.includes("cloud")
);

export default function CloudExperience() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden text-slate-800">
      <CloudScene />

      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen p-6 md:p-12 pt-24">

        {/* Navigation back */}
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="absolute top-8 left-8 md:top-12 md:left-12"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-sky-600 transition-colors backdrop-blur-md bg-white/40 px-5 py-2.5 rounded-full border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] font-medium">
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </Link>
        </motion.div>

        {/* Main Content Area */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 40 }}
          className="w-full max-w-5xl mx-auto backdrop-blur-xl bg-white/30 p-8 md:p-16 rounded-[2.5rem] border border-white/60 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle glowing orb effect behind the text */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-sky-200/50 rounded-full blur-3xl pointer-events-none" />

          <motion.h1
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="text-5xl md:text-7xl font-light tracking-tight text-slate-800 mb-6 text-center md:text-left"
          >
            Cloud <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-indigo-600">Engineer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-lg md:text-2xl text-slate-600 mb-16 font-light leading-relaxed max-w-2xl text-center md:text-left"
          >
            Designing, deploying, and managing scalable, highly-available infrastructure that seamlessly scales over the horizon.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <ServiceCard
              delay={1.1}
              icon={<Server className="w-6 h-6 text-sky-500" />}
              title="Infrastructure as Code"
              description="Automating cloud deployments using Terraform and CloudFormation to ensure reproducible and reliable environments."
            />
            <ServiceCard
              delay={1.2}
              icon={<Database className="w-6 h-6 text-indigo-500" />}
              title="Serverless Architecture"
              description="Designing cost-efficient, event-driven applications utilizing AWS Lambda, DynamoDB, and API Gateway."
            />
            <ServiceCard
              delay={1.3}
              icon={<Shield className="w-6 h-6 text-teal-500" />}
              title="Cloud Security"
              description="Implementing strict IAM policies, network security groups, and zero-trust architectures to protect cloud workloads."
            />
            <ServiceCard
              delay={1.4}
              icon={<CloudCog className="w-6 h-6 text-blue-500" />}
              title="Container Orchestration"
              description="Deploying and managing microservices using Docker, Kubernetes (EKS/AKS), and CI/CD pipelines."
            />
          </div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-sky-500" />
              Professional Experience
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cloudExperience.map((exp, i) => (
                <ExperiencePreviewCard
                  key={exp.slug}
                  slug={exp.slug}
                  company={exp.company}
                  role={exp.position || ("positions" in exp ? exp.positions![0].title : "")}
                  duration={exp.duration}
                  detail={exp.location || ""}
                  summary={exp.summary || ""}
                  techStack={exp.techStack || []}
                  variant="glass"
                  delay={1.7 + i * 0.1}
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
      transition={{ duration: 0.8, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white/40 backdrop-blur-md p-8 rounded-3xl border border-white/50 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-4"
    >
      <div className="bg-white/60 w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner">
        {icon}
      </div>
      <h3 className="text-xl font-medium text-slate-800">{title}</h3>
      <p className="text-slate-600 font-light leading-relaxed">{description}</p>
    </motion.div>
  );
}
