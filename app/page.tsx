"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { IconButton, Popover, Box } from "@mui/material";
import { Palette, Cloud, Cpu, Briefcase, Linkedin, Mail, FileText, Link as LinkIcon } from "lucide-react";
import Link from "next/link";

// Predefined color presets for the liquid glass UI
const colorPresets = [
  { name: "Ocean", primary: "#0ea5e9", bg: "from-sky-50 via-sky-100 to-indigo-100", blob1: "bg-sky-300/40", blob2: "bg-indigo-300/40" },
  { name: "Sunset", primary: "#f97316", bg: "from-orange-50 via-orange-100 to-rose-100", blob1: "bg-orange-300/40", blob2: "bg-rose-300/40" },
  { name: "Forest", primary: "#10b981", bg: "from-emerald-50 via-emerald-100 to-teal-100", blob1: "bg-emerald-300/40", blob2: "bg-teal-300/40" },
  { name: "Amethyst", primary: "#8b5cf6", bg: "from-purple-50 via-purple-100 to-fuchsia-100", blob1: "bg-purple-300/40", blob2: "bg-fuchsia-300/40" },
];

export default function LiquidGlassHero() {
  const [activeColor, setActiveColor] = useState(colorPresets[0]);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "color-popover" : undefined;

  // Dynamic MUI theme based on selected color
  const theme = createTheme({
    palette: {
      primary: {
        main: activeColor.primary,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <main
        className={`relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center p-6 bg-gradient-to-br ${activeColor.bg} transition-colors duration-1000 ease-in-out`}
      >
        {/* Floating Background Blobs for "Liquid" effect */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 80, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute top-1/4 left-1/4 w-[30rem] h-[30rem] rounded-full blur-[100px] pointer-events-none transition-colors duration-1000 ${activeColor.blob1}`}
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            x: [0, -100, 0],
            y: [0, 80, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className={`absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] rounded-full blur-[120px] pointer-events-none transition-colors duration-1000 ${activeColor.blob2}`}
        />

        {/* Theme Picker (Material UI) */}
        <Box className="absolute top-8 right-8 z-50">
          <IconButton
            aria-describedby={id}
            onClick={handleClick}
            className="bg-white/40 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] hover:bg-white/60 transition-all duration-300"
            color="primary"
          >
            <Palette className="w-6 h-6" />
          </IconButton>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            sx={{
              mt: 2,
              "& .MuiPaper-root": {
                background: "rgba(255, 255, 255, 0.4)",
                backdropFilter: "blur(24px)",
                border: "1px solid rgba(255, 255, 255, 0.5)",
                borderRadius: "20px",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
                padding: "4px",
              },
            }}
          >
            <Box className="p-3 flex gap-4">
              {colorPresets.map((preset) => (
                <button
                  key={preset.name}
                  onClick={() => { setActiveColor(preset); handleClose(); }}
                  className="w-10 h-10 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 w-10 h-10 cursor-pointer"
                  style={{ backgroundColor: preset.primary, outlineColor: preset.primary }}
                  title={preset.name}
                />
              ))}
            </Box>
          </Popover>
        </Box>

        {/* Main Content (Liquid Glass Panel) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="relative z-10 w-full max-w-5xl p-10 md:p-20 rounded-[3rem] border border-white/60 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.2) 100%)",
            backdropFilter: "blur(30px)",
            WebkitBackdropFilter: "blur(30px)",
            boxShadow: "0 24px 64px 0 rgba(0, 0, 0, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 0.3)",
          }}
        >
          {/* Inner highlight logic for that glass edge look */}
          <div className="absolute inset-0 rounded-[3rem] border border-white/80 pointer-events-none" style={{ maskImage: "linear-gradient(to bottom, black, transparent)" }} />
          
          <div className="text-center space-y-6 relative z-10 flex flex-col items-center">
            {/* Profile Avatar Placeholder */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.8, type: "spring", stiffness: 100 }}
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white/60 shadow-xl overflow-hidden mb-2 bg-slate-200/50 backdrop-blur-sm flex items-center justify-center group"
            >
              {/* Optional: Add an actual image tag here when ready */}
              {/* <img src="/profile-image.jpg" alt="Profile" className="w-full h-full object-cover" /> */}
              <span className="text-slate-500 font-medium text-lg uppercase tracking-widest group-hover:scale-110 transition-transform duration-500">Photo</span>
              
              {/* Subtle inner glowing ring based on active theme */}
              <div 
                className="absolute inset-0 rounded-full border-2 opacity-50 pointer-events-none" 
                style={{ borderColor: activeColor.primary }} 
              />
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/50 bg-white/40 backdrop-blur-md text-sm font-medium text-slate-600 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: activeColor.primary }}></span>
              Available for new opportunities
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-light tracking-tight text-slate-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              Portfolio <span className="font-semibold transition-colors duration-1000" style={{ color: activeColor.primary }}>Experiences</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-2xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Select an environment below to explore different facets of my technical expertise and background.
            </motion.p>

            {/* Social Links Row */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.6, duration: 0.8 }}
               className="flex items-center justify-center gap-4 mt-6"
            >
              <SocialButton href="https://linkedin.com" icon={<Linkedin className="w-5 h-5" />} color={activeColor.primary} ariaLabel="LinkedIn" />
              <SocialButton href="mailto:email@example.com" icon={<Mail className="w-5 h-5" />} color={activeColor.primary} ariaLabel="Email" />
              <SocialButton href="https://blog.example.com" icon={<FileText className="w-5 h-5" />} color={activeColor.primary} ariaLabel="Blog" />
              <SocialButton href="https://linktr.ee" icon={<LinkIcon className="w-5 h-5" />} color={activeColor.primary} ariaLabel="Linktree" />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 relative z-10">
            <NavButton
              href="/cloud"
              icon={<Cloud className="w-8 h-8" />}
              title="Cloud"
              description="Scalable infrastructure & DevOps"
              color={activeColor.primary}
              delay={0.6}
            />
            <NavButton
              href="/embedded"
              icon={<Cpu className="w-8 h-8" />}
              title="Embedded"
              description="Hardware & microcontrollers"
              color={activeColor.primary}
              delay={0.8}
            />
            <NavButton
              href="/business"
              icon={<Briefcase className="w-8 h-8" />}
              title="Business"
              description="Leadership & strategy"
              color={activeColor.primary}
              delay={1.0}
            />
          </div>
        </motion.div>
      </main>
    </ThemeProvider>
  );
}

function NavButton({ href, icon, title, description, color, delay }: { href: string; icon: React.ReactNode; title: string; description: string; color: string; delay: number }) {
  return (
    <Link href={href} className="block h-full outline-none group">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay, type: "spring", bounce: 0.5 }}
        whileHover={{ y: -8, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="h-full flex flex-col items-center text-center p-8 rounded-3xl border border-white/50 bg-white/40 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:bg-white/60 transition-all duration-300 relative overflow-hidden"
      >
        {/* Hover glint effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/70 to-transparent skew-x-12" />

        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-inner bg-white/80 transition-colors duration-1000 border border-white/60"
          style={{ color: color }}
        >
          {icon}
        </div>
        <h2 className="text-2xl font-semibold text-slate-800 mb-3">{title}</h2>
        <p className="text-slate-600 font-medium">{description}</p>
      </motion.div>
    </Link>
  );
}

function SocialButton({ href, icon, color, ariaLabel }: { href: string; icon: React.ReactNode; color: string; ariaLabel: string }) {
  return (
    <Link 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      aria-label={ariaLabel}
      className="group outline-none"
    >
      <motion.div
        whileHover={{ y: -4, scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-10 h-10 rounded-full bg-white/50 backdrop-blur-md border border-white/60 shadow-sm flex items-center justify-center text-slate-600 transition-colors duration-300 hover:bg-white/80"
        style={{ '--hover-color': color } as React.CSSProperties}
      >
        <div className="transition-colors duration-300 group-hover:text-[var(--hover-color)]">
          {icon}
        </div>
      </motion.div>
    </Link>
  );
}
