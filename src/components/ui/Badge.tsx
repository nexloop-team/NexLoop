"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { cn } from "@/lib/cn";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("flex items-center justify-center gap-3", className)}
      initial={
        shouldReduceMotion
          ? { opacity: 1, filter: "blur(0px)" }
          : { opacity: 0, filter: "blur(6px)" }
      }
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 1, delay: 0.15, ease: EASE_OUT_EXPO }}
    >
      <span className="h-px w-8 bg-foreground/20" aria-hidden="true" />
      <span className="text-[10px] font-normal uppercase tracking-[0.28em] text-muted/80 sm:text-[11px]">
        {children}
      </span>
      <span className="h-px w-8 bg-foreground/20" aria-hidden="true" />
    </motion.div>
  );
}
