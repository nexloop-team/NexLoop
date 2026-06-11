"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { TextReveal } from "@/components/ui/TextReveal";
import {
  EASE_IN_OUT,
  EASE_OUT_EXPO,
  HERO_BASE_DELAY,
  LINE_STAGGER,
} from "@/lib/motion";

const HEADLINE_LINES = ["WE BUILD", "INTELLIGENT SYSTEMS"] as const;

const SUBHEADLINE =
  "AI automation, websites, mobile apps, and digital experiences for ambitious businesses.";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  // Time at which the last headline line finishes — everything below staggers from here
  const headlineEndDelay =
    HERO_BASE_DELAY + HEADLINE_LINES.length * LINE_STAGGER + 0.75;

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-[100dvh] flex-col overflow-hidden"
    >
      


      {/* ── Hero content ─────────────────────────────────────── */}
      {/*
        Layout goal: headline + description + CTAs all above the fold.
        Strategy:
          • flex-1 + justify-center keeps the block vertically centred in remaining height
          • max-w-[60rem] on the headline block limits line length — avoids edge-to-edge
            dominance while still feeling large and editorial
          • Description and CTAs stack directly beneath the headline with tight gaps
          • Bottom padding reserves space for the scroll indicator without pushing content down
      */}
      <div className="relative z-10 flex flex-1 flex-col justify-center px-6 pb-20 pt-4 sm:px-10 sm:pb-24 sm:pt-6 lg:px-14 lg:pb-28 lg:pt-8">

        {/* Eyebrow — establishes vertical rhythm, very low visual weight */}
        <motion.div
          className="mb-8 sm:mb-10"
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: HERO_BASE_DELAY - 0.15,
            ease: EASE_OUT_EXPO,
          }}
        >
          <span className="inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.3em] text-foreground/30">
            <span className="h-px w-7 bg-foreground/20" aria-hidden="true" />
            Digital Agency
          </span>
        </motion.div>

        {/* Headline — constrained width keeps it legible and proportioned */}
        <h1
          id="hero-heading"
          className="hero-headline max-w-[60rem] uppercase text-foreground"
        >
          {HEADLINE_LINES.map((line, index) => (
            <TextReveal
              key={line}
              delay={HERO_BASE_DELAY + index * LINE_STAGGER}
              className={index === 1 ? "mt-1" : undefined}
            >
              {line}
            </TextReveal>
          ))}
        </h1>

        {/* Description — sits directly below headline */}
        <motion.p
          className="hero-subheadline mt-8 max-w-[46ch] font-light text-muted-foreground sm:mt-9 lg:mt-10"
          initial={
            shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: headlineEndDelay,
            ease: EASE_OUT_EXPO,
          }}
        >
          {SUBHEADLINE} 
        </motion.p>

        {/* CTA buttons — directly below description */}
        <motion.div
          className="mt-9 flex flex-row items-center gap-3 sm:mt-10 sm:gap-4"
          initial={
            shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: headlineEndDelay + 0.2,
            ease: EASE_OUT_EXPO,
          }}
        >
          {/* Glass CTA */}
          <div className="group relative">
            {/* Glow */}
            <div className="pointer-events-none absolute inset-0 -m-1 rounded-full bg-blue-500/30 blur-2xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-m-2 group-hover:bg-blue-400/40 group-hover:blur-3xl" />
            
            {/* Button */}
            <a
              href="/contact"
              className="relative z-10 inline-flex h-[56px] items-center justify-center rounded-full border border-border bg-foreground/[0.03] px-10 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:bg-foreground/[0.08]"
            >
              Book a Call
            </a>
          </div>

          <a
            href="#work"
            className="inline-flex h-[56px] items-center justify-center rounded-full border border-foreground/20 px-10 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground transition-all duration-500 hover:scale-[1.02] hover:border-foreground/45 hover:bg-foreground/[0.03]"
          >
            View Work
          </a>
        </motion.div>
      </div>

      {/* ── Scroll indicator — bottom-left ──────────────────── */}
      <motion.div
        aria-hidden="true"
        className="absolute bottom-8 left-6 flex flex-col items-center gap-2.5 sm:left-10 lg:left-14"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: headlineEndDelay + 0.7,
          ease: EASE_IN_OUT,
        }}
      >
        <div className="relative h-12 w-px overflow-hidden bg-foreground/10">
          <motion.div
            className="absolute left-0 top-0 h-[45%] w-full bg-foreground/30"
            animate={
              shouldReduceMotion ? undefined : { y: ["-100%", "280%"] }
            }
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: EASE_IN_OUT,
              repeatDelay: 0.5,
            }}
          />
        </div>
        <span className="text-[9px] uppercase tracking-[0.35em] text-label-foreground">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
