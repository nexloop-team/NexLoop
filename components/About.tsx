"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Timer, Code2 } from "lucide-react";

const ACCENT = "var(--accent)";

const principles = [
  {
    title: "No templates",
    desc: "Every layout is designed for your brand — not a ThemeForest reskin.",
    icon: Code2,
  },
  {
    title: "Fast, clear delivery",
    desc: "Fixed scope, weekly updates, and a handoff you can actually maintain.",
    icon: Timer,
  },
  {
    title: "Built to convert",
    desc: "Structure, copy rhythm, and performance tuned for real business goals.",
    icon: ShieldCheck,
  },
];

export default function About() {
  return (
    <section id="about" className="relative section-pad px-4 sm:px-8 section-alt grain-overlay overflow-hidden">
      <div className="container-xl relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1fr,1fr] items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-header"
          >
            <span className="eyebrow mb-5">About</span>
            <h2 className="headline-lg mt-5">
              A small studio focused on{" "}
              <span className="brand-text">clarity and craft</span>.
            </h2>
            <p className="body-lg mt-4 max-w-lg hidden md:block" style={{ color: "var(--fg-secondary)" }}>
              NexLoop is a design-led team building websites and digital products for businesses
              that need to look credible immediately. We combine product thinking, clean engineering,
              and automation where it actually saves time.
            </p>
            <p className="body-md mt-3 md:hidden" style={{ color: "var(--fg-secondary)" }}>
              Design-led studio — websites, apps &amp; automation. Fast delivery, no templates.
            </p>
            <ul className="mt-6 md:mt-8 space-y-2 md:space-y-3">
              {["Figma → Next.js → Vercel", "India-based · working globally", "Reply within 24 hours"].map(
                (line) => (
                  <li
                    key={line}
                    className="text-sm flex items-center gap-3"
                    style={{ color: "var(--fg-secondary)" }}
                  >
                    <span
                      className="w-1 h-1 rounded-full shrink-0"
                      style={{ background: ACCENT }}
                    />
                    {line}
                  </li>
                )
              )}
            </ul>
            <div className="md:hidden flex flex-wrap gap-2 mt-4">
              {["Discover", "Design & build", "Launch"].map((step) => (
                <span
                  key={step}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={{
                    background: "var(--bg-elevated)",
                    border: "1px solid var(--border)",
                    color: "var(--fg-secondary)",
                  }}
                >
                  {step}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="hidden md:grid gap-4">
            {principles.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="card p-5 sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: "var(--accent-subtle)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      <Icon size={18} style={{ color: ACCENT }} />
                    </div>
                    <div>
                      <h3 className="headline-sm">{item.title}</h3>
                      <p className="body-md mt-2" style={{ color: "var(--fg-secondary)" }}>
                        {item.desc}
                      </p>
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
