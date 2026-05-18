"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Star, Quote, TrendingUp, ArrowUpRight, Users, Clock, BarChart3 } from "lucide-react";

const stats = [
  { val: "200+", label: "Projects delivered", icon: BarChart3, color: "#5B4FE8" },
  { val: "4.9★", label: "Average rating", icon: Star, color: "#F59E0B" },
  { val: "48h", label: "Avg. launch time", icon: Clock, color: "#10B981" },
  { val: "98%", label: "Client satisfaction", icon: Users, color: "#3B82F6" },
];

const testimonials = [
  {
    name: "Marcus Torres",
    role: "Real Estate Agency",
    initials: "MT",
    quote: "NexLoop's WhatsApp AI bot completely transformed how we capture leads. We went from 12 to 40+ showings per month — without hiring anyone.",
    metric: "+230%",
    metricLabel: "more leads",
    color: "#5B4FE8",
  },
  {
    name: "Dr. Priya Nair",
    role: "ClearWell Health",
    initials: "PN",
    quote: "They built a full AI system — chatbot, booking flow, CRM sync. Cut no-shows by 40% and handles all patient FAQs automatically.",
    metric: "-40%",
    metricLabel: "no-shows",
    color: "#10B981",
  },
  {
    name: "Jason Lee",
    role: "Momentum Coaching",
    initials: "JL",
    quote: "My website was a brochure. Now it's a lead machine. 15+ discovery calls per week without running a single ad.",
    metric: "15+",
    metricLabel: "calls/week",
    color: "#3B82F6",
  },
  {
    name: "Aisha Rahman",
    role: "Luxe Threads Co.",
    initials: "AR",
    quote: "Within 2 weeks of launching the AI chatbot, cart abandonment dropped 28% and WhatsApp orders tripled. Incredible ROI.",
    metric: "3×",
    metricLabel: "more orders",
    color: "#F59E0B",
  },
  {
    name: "Rahul Mehta",
    role: "InvoicePro",
    initials: "RM",
    quote: "We replaced our entire support queue with NexLoop's AI. Average response time went from 4 hours to 30 seconds. Customers noticed immediately.",
    metric: "30s",
    metricLabel: "response",
    color: "#EC4899",
  },
  {
    name: "Sophie Chen",
    role: "Spark Digital",
    initials: "SC",
    quote: "They automated our entire client onboarding — AI collects briefs, syncs to Notion, books kick-off calls. Saves 12+ hours every single week.",
    metric: "12h",
    metricLabel: "saved/week",
    color: "#8B5CF6",
  },
];

function AnimatedStat({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.4, y: 10 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.55, type: "spring", stiffness: 220, damping: 18 }}
    >
      {value}
    </motion.span>
  );
}

function TestimonialCard({
  t,
  i,
  direction,
}: {
  t: (typeof testimonials)[0];
  i: number;
  direction: "left" | "right";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === "left" ? -28 : 28, y: 16 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
      className="testimonial-card group"
    >
      <div className="flex gap-0.5 mb-4">
        {[...Array(5)].map((_, j) => (
          <Star key={j} size={12} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-sm leading-relaxed" style={{ color: "var(--fg-secondary)" }}>
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="divider mt-4 mb-4" />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0 transition-transform duration-300 group-hover:scale-110"
            style={{ background: t.color }}
          >
            {t.initials}
          </div>
          <div>
            <p className="text-sm font-semibold" style={{ color: "var(--fg)" }}>
              {t.name}
            </p>
            <p className="text-xs" style={{ color: "var(--fg-muted)" }}>
              {t.role}
            </p>
          </div>
        </div>
        <div className="text-right">
          <p
            className="text-lg font-bold"
            style={{ color: t.color, fontFamily: "'DM Sans', sans-serif" }}
          >
            {t.metric}
          </p>
          <p className="text-[10px] font-medium" style={{ color: "var(--fg-muted)" }}>
            {t.metricLabel}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const leftY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rightY = useTransform(scrollYProgress, [0, 1], [90, -30]);

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="relative section-pad px-4 sm:px-8 section-warm overflow-hidden"
    >
      {/* Bg orb */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
          filter: "blur(100px)",
          transform: "translate(-30%, 30%)",
        }}
      />

      <div className="container-xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="section-header"
        >
          <span className="eyebrow mb-6">Client results</span>
          <h2 className="headline-lg mt-6">
            Real results.{" "}
            <span className="brand-text">Real businesses.</span>
          </h2>
          <p className="body-lg mt-4 max-w-lg">
            Don&apos;t take our word for it — see the measurable outcomes our clients achieved.
          </p>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-20">
          {stats.map(({ val, label, icon: Icon, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 28, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="card p-4 sm:p-6 text-center group cursor-default"
            >
              <div
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 transition-all duration-400 group-hover:scale-110 group-hover:rotate-6"
                style={{ background: `${color}12`, border: `1px solid ${color}25` }}
              >
                <Icon size={16} style={{ color }} />
              </div>
              <p
                className="text-xl sm:text-3xl font-bold tracking-tight"
                style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--fg)" }}
              >
                <AnimatedStat value={val} />
              </p>
              <p className="body-sm mt-1">{label}</p>
            </motion.div>
          ))}
        </div>

        {/* Featured quote — hidden on mobile */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="hidden sm:block card p-8 sm:p-12 mb-14 sm:mb-20 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, var(--bg-card) 0%, var(--bg-elevated) 100%)",
            borderColor: "rgba(91,79,232,0.2)",
          }}
        >
          <Quote
            size={100}
            className="absolute top-4 right-4 opacity-[0.04]"
            style={{ color: "var(--accent)" }}
          />
          <div className="flex gap-0.5 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p
            className="text-lg sm:text-2xl font-medium leading-relaxed max-w-3xl"
            style={{
              color: "var(--fg-secondary)",
              fontStyle: "italic",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            &ldquo;NexLoop delivered our website in 3 days. The quality was 10× better than
            agencies charging 5× more. They genuinely care about your results and stay with you
            until everything works perfectly.&rdquo;
          </p>
          <div className="mt-8 flex items-center gap-4 flex-wrap">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
              style={{
                background: "linear-gradient(135deg, var(--accent), var(--accent-light))",
              }}
            >
              MT
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: "var(--fg)" }}>
                Marcus Torres
              </p>
              <p className="body-sm">Founder, Prime Realty Group</p>
            </div>
            <span
              className="ml-auto hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold"
              style={{
                background: "var(--accent-subtle)",
                color: "var(--brand)",
                border: "1px solid rgba(91,79,232,0.2)",
              }}
            >
              <TrendingUp size={14} /> +230% leads
            </span>
          </div>
        </motion.blockquote>

        {/* MOBILE: 2 cards only, no parallax */}
        <div className="sm:hidden space-y-4">
          {testimonials.slice(0, 2).map((t, i) => (
            <TestimonialCard key={t.name} t={t} i={i} direction="left" />
          ))}
        </div>

        {/* DESKTOP: Full 6 cards in 2 parallax columns */}
        <div className="hidden sm:grid sm:grid-cols-2 gap-10 md:gap-6">
          <motion.div style={{ y: leftY }} className="space-y-5">
            {testimonials.slice(0, 3).map((t, i) => (
              <TestimonialCard key={t.name} t={t} i={i} direction="left" />
            ))}
          </motion.div>
          <motion.div style={{ y: rightY }} className="space-y-5 md:mt-16">
            {testimonials.slice(3).map((t, i) => (
              <TestimonialCard key={t.name} t={t} i={i} direction="right" />
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 sm:mt-14 text-center"
        >
          <a href="#contact" className="btn-primary px-8 py-4 text-sm">
            Get results like these <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
