"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";

const features = [
  "Custom Solutions",
  "Fast Execution",
  "AI First Approach",
  "Scalable Systems",
  "Long-Term Support",
  "Modern Design",
];

export function WhyNexLoop() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative mx-auto w-full max-w-[96rem] px-6 py-24 sm:px-10 lg:px-14 lg:py-32">
      {/* Title */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: EASE_OUT_EXPO }}
        className="mb-16 md:mb-24 text-center"
      >
        <h2 className="text-[11px] font-medium uppercase tracking-[0.3em] text-label-foreground">
          Why Businesses Choose NexLoop
        </h2>
      </motion.div>

      {/* Grid */}
      <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature}
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 1,
              delay: index * 0.1,
              ease: EASE_OUT_EXPO,
            }}
            className="flex items-center justify-center rounded-full border border-foreground/10 bg-foreground/[0.02] px-6 py-4 backdrop-blur-sm sm:px-8 sm:py-5 lg:px-10 lg:py-6"
          >
            <span className="text-[13px] font-light uppercase tracking-widest text-foreground sm:text-[14px] md:text-[15px]">
              {feature}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
