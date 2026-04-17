"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="p-2.5 rounded-full bg-white/40 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] w-10 h-10" />
    );
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="p-2 w-10 h-10 rounded-full bg-white/40 dark:bg-slate-800/40 backdrop-blur-xl border border-white/50 dark:border-slate-700/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] hover:bg-white/60 dark:hover:bg-slate-800/60 transition-all duration-300 text-slate-800 dark:text-slate-200 focus:outline-none flex items-center justify-center cursor-pointer"
      aria-label="Toggle dark mode"
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <Sun
          className={`absolute transition-transform duration-500 ease-in-out ${
            currentTheme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100"
          }`}
          strokeWidth={1.5}
          size={20}
        />
        <Moon
          className={`absolute transition-transform duration-500 ease-in-out ${
            currentTheme === "dark" ? "rotate-0 scale-100" : "-rotate-90 scale-0"
          }`}
          strokeWidth={1.5}
          size={20}
        />
      </div>
    </button>
  );
}
