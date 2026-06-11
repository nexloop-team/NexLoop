"use client";

import { motion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";

const steps = [
  {
    title: "Discover",
    description: "Understand goals and challenges.",
  },
  {
    title: "Design",
    description: "Plan the optimal solution.",
  },
  {
    title: "Build",
    description: "Develop products and automations.",
  },
  {
    title: "Scale",
    description: "Optimize and grow.",
  },
];

export function AboutProcess() {
  return (
    <section className="relative w-full py-16 sm:py-24">
      <div className="mx-auto flex max-w-[96rem] flex-col px-6 sm:px-10 lg:px-14">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: EASE_OUT_EXPO }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
            How We Work
          </h2>
        </motion.div>

        {/* Horizontal Cards Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.05 * index, ease: EASE_OUT_EXPO }}
              className="flex flex-col rounded-2xl border border-border bg-foreground/[0.01] p-8 transition-colors hover:border-foreground/15"
            >
              <h3 className="mb-3 text-base font-medium text-foreground sm:text-lg">
                {step.title}
              </h3>
              <p className="text-[14px] font-light leading-[1.6] text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
