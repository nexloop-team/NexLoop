"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function AuroraBackground({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)} aria-hidden>
      <motion.div
        className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full opacity-60"
        style={{
          background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{ x: [0, 40, -20, 0], y: [0, 30, 10, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-[30%] -right-[15%] w-[60%] h-[60%] rounded-full opacity-50"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
        animate={{ x: [0, -50, 20, 0], y: [0, -40, 0, 0], scale: [1, 1.15, 1, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[30%] right-[20%] w-[40%] h-[40%] rounded-full opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(16,185,129,0.2) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
        animate={{ x: [0, 30, -30, 0], y: [0, -25, 25, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
