"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const stepStyle = {
  color: "var(--accent)",
  bg: "var(--accent-subtle)",
  border: "var(--border)",
};

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "A focused call to understand your brand, audience, and goals. We agree on scope, timeline, and what success looks like before design starts.",
    detail: "Free · 30 minutes",
  },
  {
    num: "02",
    title: "Design & build",
    desc: "Figma layouts, then production in Next.js - custom components, responsive polish, and performance checks throughout.",
    detail: "Clear milestones",
  },
  {
    num: "03",
    title: "Launch & handoff",
    desc: "Deploy to Vercel, final QA, analytics setup, and documentation so your team can own the site after go-live.",
    detail: "You keep the code",
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
      className="relative section-pad px-4 sm:px-8 section-alt overflow-hidden"
    >
      <div className="relative z-10 container-xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="section-header"
        >
          <span className="eyebrow mb-6">Process</span>
          <h2 className="headline-lg mt-6">
            Simple steps from{" "}
            <span className="brand-text">brief to launch</span>.
          </h2>
          <p className="body-lg mt-4 max-w-lg" style={{ color: "var(--fg-secondary)" }}>
            Transparent process, fixed checkpoints, and a site you can maintain after handoff.
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
              style={{ height: lineHeight, background: "var(--accent)" }}
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
                      background: stepStyle.bg,
                      border: `1.5px solid ${stepStyle.border}`,
                      color: stepStyle.color,
                      fontWeight: 700,
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
                        style={{ color: stepStyle.color }}
                      >
                        {step.num}
                      </span>
                      <h3 className="headline-md">{step.title}</h3>
                      <p className="body-lg mt-3 max-w-xl">{step.desc}</p>
                      <div
                        className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold"
                        style={{
                          background: stepStyle.bg,
                          border: `1px solid ${stepStyle.border}`,
                          color: stepStyle.color,
                        }}
                      >
                        {step.detail}
                      </div>
                    </div>
                    <div
                      className="hidden sm:flex w-10 h-10 rounded-full items-center justify-center shrink-0 mt-1 transition-all duration-400 group-hover:translate-x-1 group-hover:-translate-y-1"
                      style={{ background: stepStyle.bg, border: `1px solid ${stepStyle.border}` }}
                    >
                      <ArrowUpRight size={16} style={{ color: stepStyle.color }} />
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
