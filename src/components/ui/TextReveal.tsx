"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { cn } from "@/lib/cn";

type TextRevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "span" | "div" | "p";
  duration?: number;
};

/*
  Cinematic text reveal:
  - Starts 105% below clip boundary (not 110%) for a tighter, more controlled entry
  - Fades in as it rises — the combination of y + opacity creates weight
  - Slight skew on entry corrects itself, giving letters a sense of physical momentum
  - Clip is handled by the parent overflow:hidden container (.hero-headline-line)
*/

export function TextReveal({
  children,
  delay = 0,
  className,
  as: Tag = "span",
  duration = 1.35,
}: TextRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Tag className={cn("block overflow-hidden", className)}>
      <motion.span
        className="block"
        initial={{ y: "105%", opacity: 0, skewY: 0.8 }}
        animate={{ y: 0, opacity: 1, skewY: 0 }}
        transition={{
          duration,
          delay,
          ease: EASE_OUT_EXPO,
        }}
      >
        {children}
      </motion.span>
    </Tag>
  );
}
