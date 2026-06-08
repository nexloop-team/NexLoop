"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { EASE_OUT_EXPO } from "@/lib/motion";

export function ServicesHero() {
  const shouldReduceMotion = useReducedMotion();

  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: EASE_OUT_EXPO },
    },
  };

  return (
    <section className="relative flex flex-col items-center px-6 pb-20 pt-40 text-center sm:px-10 sm:pb-32 sm:pt-48 lg:px-14 lg:pt-56">
      <motion.div
        variants={shouldReduceMotion ? undefined : containerVars}
        initial="hidden"
        animate="show"
        className="flex max-w-[70rem] flex-col items-center"
      >
        {/* Eyebrow */}
        <motion.div variants={shouldReduceMotion ? undefined : itemVars} className="mb-8">
          <span className="inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.3em] text-label-foreground">
            <span className="h-px w-7 bg-foreground/20" aria-hidden="true" />
            What We Build
            <span className="h-px w-7 bg-foreground/20" aria-hidden="true" />
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={shouldReduceMotion ? undefined : itemVars}
          className="text-balance text-4xl font-light uppercase leading-[1.1] tracking-widest text-foreground sm:text-5xl md:text-6xl lg:text-[4.5rem]"
        >
          AI Systems, Websites, Mobile Apps & Automation Solutions
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={shouldReduceMotion ? undefined : itemVars}
          className="mt-8 max-w-[38rem] text-balance text-[15px] font-light leading-[1.8] tracking-wide text-muted-foreground sm:text-base md:text-lg lg:mt-10 lg:text-[17px]"
        >
          We design and build intelligent digital systems that help businesses
          automate operations, generate leads, improve customer experiences, and
          scale efficiently.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={shouldReduceMotion ? undefined : itemVars}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:gap-6 lg:mt-14"
        >
          <Button href="/contact" variant="primary">
            Book a Strategy Call
          </Button>
          <Button href="/#work" variant="secondary">
            View Our Work
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
