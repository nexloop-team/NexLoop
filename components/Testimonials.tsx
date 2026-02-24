"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcus Torres",
    role: "Real Estate Agency Owner",
    company: "Prime Realty Group",
    avatar: "MT",
    quote:
      "NexLoop's WhatsApp AI bot completely transformed how we capture leads. It qualifies buyers 24/7 automatically — we went from 12 to 40+ showings per month in under 8 weeks. This is intelligent automation that actually works.",
    stars: 5,
    metric: "+230% leads",
  },
  {
    name: "Dr. Priya Nair",
    role: "Medical Clinic Director",
    company: "ClearWell Health",
    avatar: "PN",
    quote:
      "NexLoop built us a full AI automation system — chatbot, booking flow, and CRM sync. It cut no-shows by 40% and handles all our patient FAQs instantly. Our front desk now focuses on patients, not the phone.",
    stars: 5,
    metric: "-40% no-shows",
  },
  {
    name: "Jason Lee",
    role: "Business Coach",
    company: "Momentum Coaching",
    avatar: "JL",
    quote:
      "My website used to be a digital brochure. With NexLoop's lead generation automation it's now a lead machine. I consistently book 15+ discovery calls a week without running ads. Best AI automation investment I've made.",
    stars: 5,
    metric: "15+ calls/week",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-16 sm:py-28 px-4 sm:px-6">
      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="section-label">Testimonials</span>
          <h2 className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
            Real Results from
            <br />
            <span className="gradient-text">Real Businesses</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-white/45 text-sm sm:text-base max-w-lg mx-auto">
            Modern businesses across real estate, healthcare, and coaching trust NexLoop&apos;s AI automation systems to drive measurable growth.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="group glass-card p-6 flex flex-col gap-5 shine-sweep"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={12} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/50 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Metric */}
              <div className="inline-block self-start px-3 py-1 rounded-lg bg-purple-600/12 border border-purple-500/20 text-purple-300 text-xs font-medium">
                {t.metric}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                <div className="w-9 h-9 rounded-xl bg-purple-600/25 flex items-center justify-center shrink-0">
                  <span className="text-white text-xs font-bold">{t.avatar}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-white/45">{t.role} &middot; {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
