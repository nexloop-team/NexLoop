"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";

const steps = [
  { number: "01", title: "Discovery" },
  { number: "02", title: "Strategy" },
  { number: "03", title: "Development" },
  { number: "04", title: "Launch & Growth" },
];

export function ProcessSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative mx-auto w-full max-w-[96rem] px-6 py-24 sm:px-10 lg:px-14 lg:py-32">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
        {/* Title */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: EASE_OUT_EXPO }}
          className="mb-16 lg:mb-0 lg:w-1/3"
        >
          <h2 className="text-[11px] font-medium uppercase tracking-[0.3em] text-label-foreground">
            How We Work
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="flex flex-col lg:w-2/3">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 1,
                delay: index * 0.15,
                ease: EASE_OUT_EXPO,
              }}
              className="group flex flex-col border-t border-foreground/10 py-10 transition-colors duration-500 hover:border-foreground/30 sm:flex-row sm:items-center sm:gap-12 md:py-14"
            >
              <span className="mb-4 text-xl font-light tracking-widest text-label-foreground transition-colors duration-500 group-hover:text-muted-foreground sm:mb-0 md:text-2xl">
                {step.number}
              </span>
              <h3 className="text-3xl font-light uppercase tracking-widest text-foreground transition-all duration-500 group-hover:translate-x-4 md:text-4xl lg:text-5xl">
                {step.title}
              </h3>
            </motion.div>
          ))}
          {/* Bottom border for the last item */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 1,
              delay: steps.length * 0.15,
              ease: EASE_OUT_EXPO,
            }}
            className="h-px w-full origin-left bg-foreground/10"
          />
        </div>
      </div>
    </section>
  );
}
