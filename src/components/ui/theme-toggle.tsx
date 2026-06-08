"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-9 w-9" aria-hidden="true" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-foreground/15 bg-foreground/5 backdrop-blur-md transition-colors hover:border-foreground/30 hover:bg-foreground/10"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          scale: isDark ? 1 : 0,
          opacity: isDark ? 1 : 0,
          rotate: isDark ? 0 : -90,
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute"
      >
        <Moon className="h-4 w-4 text-foreground/70 transition-colors group-hover:text-foreground" strokeWidth={1.5} />
      </motion.div>

      <motion.div
        initial={false}
        animate={{
          scale: !isDark ? 1 : 0,
          opacity: !isDark ? 1 : 0,
          rotate: !isDark ? 0 : 90,
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute"
      >
        <Sun className="h-4 w-4 text-foreground/70 transition-colors group-hover:text-foreground" strokeWidth={1.5} />
      </motion.div>
    </button>
  );
}
