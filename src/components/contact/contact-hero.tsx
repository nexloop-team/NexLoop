"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";

export function ContactHero() {
  const shouldReduceMotion = useReducedMotion();

  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: EASE_OUT_EXPO },
    },
  };

  return (
    <motion.div
      variants={shouldReduceMotion ? undefined : containerVars}
      initial="hidden"
      animate="show"
      className="flex flex-col pr-0 lg:pr-16"
    >
      <motion.h1
        variants={shouldReduceMotion ? undefined : itemVars}
        className="text-4xl font-light uppercase tracking-widest text-foreground sm:text-5xl md:text-6xl lg:text-[4.5rem] lg:leading-[1.1]"
      >
        Book A Free
        <br />
        Strategy Call
      </motion.h1>

      <motion.p
        variants={shouldReduceMotion ? undefined : itemVars}
        className="mt-8 text-xl font-light text-muted-foreground sm:text-2xl"
      >
        Tell us about your business, project, or automation goals.
      </motion.p>

      <motion.p
        variants={shouldReduceMotion ? undefined : itemVars}
        className="mt-6 max-w-[42ch] text-[15px] font-light leading-relaxed tracking-wide text-label-foreground"
      >
        Whether you need AI automation, a custom website, a mobile application,
        or an intelligent business system, we'll help you identify the fastest
        path to growth.
      </motion.p>

      <motion.div
        variants={shouldReduceMotion ? undefined : itemVars}
        className="mt-12 flex flex-col gap-6"
      >
        <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-label-foreground">
          Response time: Within 24 hours
        </span>

        <div className="flex flex-wrap gap-3">
          {["AI Automation", "Web Development", "Mobile Apps", "Voice Agents"].map(
            (badge) => (
              <span
                key={badge}
                className="inline-flex rounded-full border border-border bg-foreground/5 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-label-foreground"
              >
                {badge}
              </span>
            )
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
