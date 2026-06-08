"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  ariaLabel?: string;
};

/*
  Premium pill button design:
  - Primary: white fill, near-black text, subtle inner shadow, hover lifts slightly
  - Secondary: transparent with a single-pixel white/20 border, letter-spaced label
  - Both: tight letter-spacing (0.16em), ultra-small caps text (10–11px), tall enough
    for touch targets (h-11/h-12), slow spring-like hover transition
*/

const baseStyles =
  "relative inline-flex h-11 items-center justify-center overflow-hidden rounded-full px-8 text-[10.5px] font-medium uppercase tracking-[0.2em] transition-colors duration-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:h-12 sm:px-10 sm:text-[11px]";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-nav-btn-bg text-nav-btn-text shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_1px_12px_rgba(0,0,0,0.4)] hover:scale-[1.02]",
  secondary:
    "border border-foreground/22 bg-transparent text-foreground hover:border-foreground/45 hover:bg-foreground/[0.03]",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  ariaLabel,
}: ButtonProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.015 }}
      whileTap={shouldReduceMotion ? undefined : { y: 0, scale: 0.985 }}
      transition={{
        duration: 0.55,
        ease: EASE_OUT_EXPO,
      }}
    >
      <a
        href={href}
        aria-label={ariaLabel}
        className={cn(baseStyles, variantStyles[variant], className)}
      >
        {children}
      </a>
    </motion.div>
  );
}
