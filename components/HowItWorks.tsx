"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Discovery Call",
    desc: "Free 30-minute strategy session. We audit your current setup, understand your goals, and map out exactly where AI and digital products will have the biggest revenue impact.",
    detail: "Free · 30 minutes",
    color: "#5B4FE8",
    bg: "rgba(91,79,232,0.07)",
    border: "rgba(91,79,232,0.2)",
  },
  {
    num: "02",
    title: "Design & Build",
    desc: "Our team designs and develops your complete solution — websites, apps, AI bots, or full automation stacks. No templates. Everything is custom-built and tested for your business.",
    detail: "Average 48-hour delivery",
    color: "#10B981",
    bg: "rgba(16,185,129,0.07)",
    border: "rgba(16,185,129,0.2)",
  },
  {
    num: "03",
    title: "Launch & Grow",
    desc: "We deploy, QA, and hand over everything with full documentation. Your new system works 24/7 — capturing leads, automating workflows, and growing revenue on autopilot.",
    detail: "Ongoing support included",
    color: "#3B82F6",
    bg: "rgba(59,130,246,0.07)",
    border: "rgba(59,130,246,0.2)",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0.15, 0.75], ["0%", "100%"]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative py-14 sm:py-32 px-4 sm:px-8 section-alt grain-overlay overflow-hidden"
    >
      <div className="relative z-10 container-xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-16 sm:mb-24 max-w-2xl"
        >
          <span className="eyebrow mb-6">How it works</span>
          <h2 className="headline-lg mt-6">
            Three steps to a{" "}
            <span className="brand-text">system that sells</span>.
          </h2>
          <p className="body-lg mt-4 max-w-lg">
            From your first call to fully deployed — in days, not months. No jargon, no delays.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Scroll-linked progress line */}
          <div
            className="hidden md:block absolute left-[31px] top-6 bottom-6 w-px"
            style={{ background: "var(--border)" }}
          >
            <motion.div
              style={{ height: lineHeight, background: "linear-gradient(180deg, var(--accent) 0%, #10B981 50%, #3B82F6 100%)" }}
              className="w-full rounded-full"
            />
          </div>

          <div className="space-y-6 sm:space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -24, y: 16 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, delay: i * 0.12, ease: [0.23, 1, 0.32, 1] }}
                className="flex gap-6 sm:gap-8 group"
              >
                {/* Step dot / number */}
                <div className="hidden md:flex flex-col items-center shrink-0">
                  <motion.div
                    whileInView={{ scale: [0.5, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
                    className="w-[62px] h-[62px] rounded-2xl flex items-center justify-center text-sm font-bold tracking-wide transition-all duration-400 group-hover:shadow-lg"
                    style={{
                      background: step.bg,
                      border: `1.5px solid ${step.border}`,
                      color: step.color,
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 800,
                    }}
                  >
                    {step.num}
                  </motion.div>
                </div>

                {/* Content card */}
                <div
                  className="card p-7 sm:p-9 flex-1 group-hover:border-[rgba(91,79,232,0.3)] transition-all duration-400"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      {/* Mobile step num */}
                      <span
                        className="md:hidden label mb-2 block"
                        style={{ color: step.color }}
                      >
                        {step.num}
                      </span>
                      <h3 className="headline-md">{step.title}</h3>
                      <p className="body-lg mt-3 max-w-xl">{step.desc}</p>
                      <div
                        className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold"
                        style={{
                          background: step.bg,
                          border: `1px solid ${step.border}`,
                          color: step.color,
                        }}
                      >
                        <Sparkles size={11} />
                        {step.detail}
                      </div>
                    </div>
                    <div
                      className="hidden sm:flex w-10 h-10 rounded-full items-center justify-center shrink-0 mt-1 transition-all duration-400 group-hover:translate-x-1 group-hover:-translate-y-1"
                      style={{ background: step.bg, border: `1px solid ${step.border}` }}
                    >
                      <ArrowUpRight size={16} style={{ color: step.color }} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 sm:mt-16 flex flex-col sm:flex-row items-center gap-4"
        >
          <a href="#contact" className="btn-primary px-8 py-4 text-sm">
            Book your free discovery call <ArrowUpRight size={14} />
          </a>
          <p className="body-sm">Free 30-min session · No commitment required</p>
        </motion.div>
      </div>
    </section>
  );
}
