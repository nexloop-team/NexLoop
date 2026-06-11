"use client";

import { motion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";

const stats = [
  "AI-Driven Solutions",
  "Custom Development",
  "Fast Delivery",
  "Business-Focused Results",
];

export function AboutStats() {
  return (
    <section className="relative w-full py-24 sm:py-32 lg:py-40">
      <div className="mx-auto flex max-w-[96rem] flex-col px-6 sm:px-10 lg:px-14">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: EASE_OUT_EXPO }}
          className="mb-16 sm:mb-24 text-center"
        >
          <span className="mb-6 block text-[10px] font-medium uppercase tracking-[0.3em] text-label-foreground">
            Why Choose NexLoop
          </span>
          <h2 className="mx-auto max-w-4xl text-3xl font-light uppercase leading-[1.2] tracking-widest text-foreground sm:text-4xl md:text-5xl">
            Why Businesses Choose Us
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.1 * index, ease: EASE_OUT_EXPO }}
              className="group flex flex-col items-center justify-center rounded-2xl border border-border bg-foreground/[0.02] p-10 text-center backdrop-blur-sm transition-colors hover:border-foreground/20 hover:bg-foreground/[0.04]"
            >
              <h3 className="text-sm font-medium uppercase tracking-widest text-foreground sm:text-base">
                {stat}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
