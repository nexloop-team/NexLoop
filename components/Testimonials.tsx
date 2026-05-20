"use client";

import { motion } from "framer-motion";
import { Quote, ArrowUpRight } from "lucide-react";

const ACCENT = "var(--accent)";

const featured = {
  quote:
    "They delivered a clean, fast site with clear messaging. The process was straightforward — scope, design, build, launch — without the usual agency noise.",
  name: "Client partner",
  role: "Founder · Growth business",
  initials: "CP",
};

const supporting = [
  {
    quote: "Our landing page finally looks like a real product company. Leads understand what we do within seconds.",
    name: "SaaS founder",
    role: "B2B software",
    initials: "SF",
  },
  {
    quote: "WhatsApp automation and the new site work together. We respond faster and look more professional doing it.",
    name: "Operations lead",
    role: "Services brand",
    initials: "OL",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="relative section-pad px-4 sm:px-8 section-warm overflow-hidden">
      <div className="container-xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <span className="eyebrow mb-5">Clients</span>
          <h2 className="headline-lg mt-5">
            Trusted when the <span className="brand-text">details matter</span>.
          </h2>
          <p className="body-lg mt-4 max-w-lg hidden md:block" style={{ color: "var(--fg-secondary)" }}>
            Replace these placeholders with real quotes and photos as you collect them — honest proof beats inflated stats.
          </p>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring", stiffness: 300, damping: 25 }}
          whileHover={{ scale: 1.01 }}
          className="card card-shine p-8 sm:p-10 mb-8 relative overflow-hidden"
        >
          <Quote
            size={80}
            className="absolute top-4 right-4 opacity-[0.04]"
            style={{ color: ACCENT }}
          />
          <p
            className="text-lg sm:text-xl font-medium leading-relaxed max-w-3xl"
            style={{ color: "var(--fg-secondary)" }}
          >
            &ldquo;{featured.quote}&rdquo;
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center text-xs font-semibold text-white"
              style={{ background: ACCENT }}
            >
              {featured.initials}
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: "var(--fg)" }}>
                {featured.name}
              </p>
              <p className="body-sm">{featured.role}</p>
            </div>
          </div>
        </motion.blockquote>

        <div className="hidden md:grid sm:grid-cols-2 gap-4">
          {supporting.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="card p-6"
            >
              <p className="text-sm leading-relaxed" style={{ color: "var(--fg-secondary)" }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="divider my-4" />
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-semibold text-white"
                  style={{ background: "var(--bg-elevated)", color: ACCENT, border: "1px solid var(--border)" }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: "var(--fg)" }}>
                    {t.name}
                  </p>
                  <p className="text-xs" style={{ color: "var(--fg-muted)" }}>
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <a href="#contact" className="btn-primary px-8 py-3.5 text-sm">
            Start your project <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
