"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const avatars = [
  { initials: "AK", color: "bg-violet-600" },
  { initials: "SM", color: "bg-indigo-600" },
  { initials: "JL", color: "bg-purple-700" },
  { initials: "RN", color: "bg-fuchsia-700" },
];

const stats = [
  { value: "3x", label: "More Leads" },
  { value: "24/7", label: "AI Automation" },
  { value: "48h", label: "Delivery" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Starry background */}
      <div className="stars absolute inset-0" />

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 0%, transparent 100%)",
        }}
      />

      {/* Central purple glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(100,30,230,0.6) 0%, rgba(70,20,180,0.2) 40%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-5 sm:px-6 text-center flex flex-col items-center gap-5 sm:gap-7 pt-24 pb-36 sm:pt-0 sm:pb-0">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="new-badge text-xs sm:text-sm">
            <span className="badge-dot">New</span>
            AI-Powered Business Automation
          </span>
        </motion.div>

        {/* H1 — scaled for mobile */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          className="text-[2.4rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-[-0.03em]"
        >
          Intelligent{" "}
          <span className="animated-gradient-text">Automation</span>
          <br />
          for Modern Businesses.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22, ease: "easeOut" }}
          className="max-w-xl text-sm sm:text-base md:text-lg text-white/50 leading-relaxed px-2 sm:px-0"
        >
          NexLoop is your <strong className="text-white/70 font-medium">AI automation partner</strong> — we
          design and deploy intelligent automation systems that capture leads, run 24/7 AI chatbots,
          and handle your entire customer journey so modern businesses can scale without hiring more.
        </motion.p>

        {/* CTAs — full width on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.33, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto"
        >
          <a
            href="#contact"
            className="btn-primary group flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 sm:py-3 rounded-xl text-sm font-semibold text-white"
          >
            Start Automating — It&apos;s Free
            <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#services"
            className="btn-ghost flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 sm:py-3 rounded-xl text-sm font-medium text-white/75"
          >
            View AI Services
          </a>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          className="flex items-center gap-3 pt-1"
        >
          <div className="flex -space-x-2">
            {avatars.map((a) => (
              <div
                key={a.initials}
                className={`w-7 h-7 rounded-full ${a.color} border-2 border-black flex items-center justify-center`}
              >
                <span className="text-[9px] font-bold text-white">{a.initials}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-white/40">
            Trusted by <span className="text-white/70 font-medium">200+</span> growth-focused businesses
          </p>
        </motion.div>
      </div>

      {/* Stats row — hidden on very small mobile to prevent overlap, visible sm+ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.65 }}
        className="absolute bottom-8 sm:bottom-14 left-0 right-0 flex items-center justify-center gap-4 sm:gap-8 z-10"
      >
        {stats.map(({ value, label }) => (
          <div key={label} className="flex flex-col items-center gap-0.5">
            <span
              className="text-lg sm:text-xl font-bold text-white tracking-tight"
              style={{ background: 'linear-gradient(135deg,#c4b5fd,#818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
            >
              {value}
            </span>
            <span className="text-[9px] sm:text-[10px] text-white/30 uppercase tracking-wider whitespace-nowrap">{label}</span>
          </div>
        ))}
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-44 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
