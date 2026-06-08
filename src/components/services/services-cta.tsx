"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";

export function ServicesCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative mx-auto w-full max-w-[96rem] px-6 py-32 text-center sm:px-10 sm:py-40 lg:px-14 lg:py-48">
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: EASE_OUT_EXPO }}
        className="flex flex-col items-center"
      >
        <h2 className="max-w-4xl text-balance text-4xl font-light uppercase leading-[1.1] tracking-widest text-foreground sm:text-5xl md:text-6xl lg:text-[4.5rem]">
          Ready To Build Something Powerful?
        </h2>

        <p className="mt-8 max-w-2xl text-balance text-[15px] font-light leading-relaxed tracking-wide text-muted-foreground sm:text-lg">
          Let's discuss your project and identify the fastest path to growth.
        </p>

        <div className="mt-14 sm:mt-16">
          <div className="group relative inline-flex">
            {/* Ambient Glow */}
            <div className="pointer-events-none absolute inset-0 -m-2 rounded-full bg-foreground opacity-10 blur-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-m-3 group-hover:opacity-30 group-hover:blur-2xl" />
            
            {/* Button */}
            <a
              href="/contact"
              className="relative z-10 inline-flex h-12 items-center justify-center rounded-full border border-foreground/20 bg-foreground/5 px-8 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/80 transition-all duration-500 hover:border-foreground/40 hover:bg-foreground/10 hover:text-foreground sm:h-14 sm:px-10 sm:text-[12px]"
            >
              Book a Strategy Call
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
