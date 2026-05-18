"use client";

import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Timer, Users } from "lucide-react";

const highlights = [
  {
    title: "Fast, focused builds",
    desc: "We ship websites and automation systems in days, not months.",
    icon: Timer,
    accent: "#5B4FE8",
  },
  {
    title: "Trust-first delivery",
    desc: "Clear scope, fixed timelines, and transparent progress updates.",
    icon: ShieldCheck,
    accent: "#10B981",
  },
  {
    title: "Real outcomes",
    desc: "Every project is designed to lift conversions and revenue.",
    icon: Users,
    accent: "#3B82F6",
  },
];

export default function About() {
  return (
    <section id="about" className="relative section-pad px-4 sm:px-8 section-alt grain-overlay overflow-hidden">
      <div className="container-xl relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <span className="eyebrow mb-5">About us</span>
            <h2 className="headline-lg mt-5">
              We are your product and automation team, built for <span className="brand-text">speed</span>.
            </h2>
            <p className="body-lg mt-4 max-w-xl">
              NexLoop blends product design, engineering, and AI automation to help businesses grow faster.
              We focus on clarity, rapid delivery, and systems that keep converting long after launch.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full"
              style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)", color: "var(--fg-secondary)" }}
            >
              <Sparkles size={12} /> 200+ projects shipped
            </div>
          </motion.div>

          <div className="grid gap-4">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="card p-5 sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-2xl flex items-center justify-center"
                      style={{ background: `${item.accent}12`, border: `1px solid ${item.accent}25` }}
                    >
                      <Icon size={18} style={{ color: item.accent }} />
                    </div>
                    <div>
                      <h3 className="headline-sm">{item.title}</h3>
                      <p className="body-md mt-2">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
