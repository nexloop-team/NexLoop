"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT_EXPO, HERO_BASE_DELAY, LINE_STAGGER } from "@/lib/motion";

export function AboutHero() {
  const shouldReduceMotion = useReducedMotion();
  const headlineEndDelay = HERO_BASE_DELAY + 0.3;

  return (
    <section className="relative flex min-h-[75dvh] flex-col overflow-hidden pt-28 pb-16 sm:pt-32">
      <div className="relative z-10 mx-auto flex w-full max-w-[96rem] flex-col justify-center px-6 sm:px-10 lg:px-14">
        
        {/* Eyebrow */}
        <motion.div
          className="mb-6 sm:mb-8"
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: HERO_BASE_DELAY - 0.15, ease: EASE_OUT_EXPO }}
        >
          <span className="inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.3em] text-label-foreground">
            <span className="h-px w-7 bg-foreground/20" aria-hidden="true" />
            ABOUT NEXLOOP
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          className="max-w-[48rem] text-3xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: HERO_BASE_DELAY, ease: EASE_OUT_EXPO }}
        >
          Building Digital Products & Intelligent Systems.
        </motion.h1>

        {/* Description */}
        <motion.p
          className="mt-6 max-w-[50ch] text-[15px] font-light leading-[1.8] text-muted-foreground sm:text-[17px]"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: headlineEndDelay, ease: EASE_OUT_EXPO }}
        >
          NexLoop is a product-focused agency founded by Nikhil Wagh and Atharva. We help businesses launch websites, mobile applications, AI automations, chatbots, voice agents, and scalable digital systems.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row items-center gap-4"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: headlineEndDelay + 0.2, ease: EASE_OUT_EXPO }}
        >
          {/* Glass CTA */}
          <div className="group relative w-full sm:w-auto">
            <div className="pointer-events-none absolute inset-0 -m-1 rounded-full bg-blue-500/30 blur-2xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-m-2 group-hover:bg-blue-400/40 group-hover:blur-3xl" />
            <a
              href="/contact"
              className="relative z-10 flex h-[48px] w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:bg-white/10 sm:w-auto sm:inline-flex"
            >
              Book A Strategy Call
            </a>
          </div>

          <a
            href="/services"
            className="flex h-[48px] w-full items-center justify-center rounded-full border border-foreground/20 px-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground transition-all duration-500 hover:scale-[1.02] hover:border-foreground/45 hover:bg-foreground/[0.03] sm:w-auto sm:inline-flex"
          >
            Explore Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}
