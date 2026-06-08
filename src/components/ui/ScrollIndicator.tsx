"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_IN_OUT } from "@/lib/motion";

export function ScrollIndicator() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
      initial={shouldReduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.8, ease: EASE_IN_OUT }}
    >
      <span className="text-[10px] uppercase tracking-[0.3em] text-muted/60">
        Scroll
      </span>
      <div className="relative h-12 w-px overflow-hidden bg-foreground/10">
        <motion.div
          className="absolute left-0 top-0 w-full bg-accent/70"
          style={{ height: "40%" }}
          animate={
            shouldReduceMotion
              ? undefined
              : { y: ["-100%", "220%"] }
          }
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: EASE_IN_OUT,
            repeatDelay: 0.4,
          }}
        />
      </div>
    </motion.div>
  );
}
