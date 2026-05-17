"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const words = ["Websites", "Apps", "AI Systems", "Automation"];

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  /* Scroll-reactive transforms */
  const headlineY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const subtextY = useTransform(scrollYProgress, [0, 0.5], [0, -40]);
  const statsY = useTransform(scrollYProgress, [0, 0.5], [0, -20]);
  const statsOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const meshScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.3]);
  const meshOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    const t = setInterval(() => setWordIdx((i) => (i + 1) % words.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden grain-overlay">
      {/* Scroll-reactive gradient mesh */}
      <motion.div className="hero-mesh" style={{ scale: meshScale, opacity: meshOpacity }} />

      {/* Floating accent orbs — respond to scroll */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 120]) }}
        className="absolute top-32 right-[15%] w-3 h-3 rounded-full opacity-40"
        initial={{ opacity: 0 }} animate={{ opacity: 0.4 }}
        transition={{ delay: 1 }}
      >
        <div className="w-3 h-3 rounded-full" style={{ background: 'var(--accent)', animation: 'float 6s ease-in-out infinite' }} />
      </motion.div>
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 180]) }}
        className="absolute top-[60%] left-[10%] w-2 h-2 rounded-full opacity-30"
        initial={{ opacity: 0 }} animate={{ opacity: 0.3 }}
        transition={{ delay: 1.3 }}
      >
        <div className="w-2 h-2 rounded-full" style={{ background: 'var(--accent)', animation: 'float 8s ease-in-out infinite reverse' }} />
      </motion.div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 pt-32 sm:pt-0">
        <div className="flex flex-col items-center text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{ y: headlineY, opacity: headlineOpacity }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium" style={{ background: 'var(--accent-subtle)', border: '1px solid var(--border)', color: 'var(--fg-secondary)' }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--accent)' }} />
              Digital Product Agency - Est. 2024
            </span>
          </motion.div>

          {/* H1 — scroll-reactive */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            style={{ y: headlineY, opacity: headlineOpacity }}
            className="headline-xl mt-6 max-w-4xl"
          >
            We design &amp; build{" "}
            <span className="relative inline-block" style={{ minWidth: '180px' }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[wordIdx]}
                  initial={{ opacity: 0, y: 24, filter: "blur(6px)", rotateX: 45 }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)", rotateX: 0 }}
                  exit={{ opacity: 0, y: -24, filter: "blur(6px)", rotateX: -45 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className="brand-text"
                  style={{ display: "inline-block" }}
                >
                  {words[wordIdx]}
                </motion.span>
              </AnimatePresence>
            </span>
            <br />that grow your business.
          </motion.h1>

          {/* Subtext — scroll-reactive with delay */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            style={{ y: subtextY, opacity: headlineOpacity }}
            className="body-lg mt-5 max-w-xl"
          >
            We craft high-converting websites, mobile apps, and AI automation systems - delivered in <strong style={{ color: 'var(--fg)', fontWeight: 600 }}>days, not months</strong>.
          </motion.p>

          {/* CTAs — scroll-reactive */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ y: subtextY, opacity: headlineOpacity }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-3"
          >
            <a href="#contact" className="btn-primary px-8 py-4 text-sm">
              Start a project <ArrowUpRight size={14} />
            </a>
            <a href="#process" className="btn-ghost px-7 py-4 text-sm group">
              <span className="flex items-center justify-center w-6 h-6 rounded-full" style={{ background: 'var(--accent-subtle)', border: '1px solid var(--border)' }}>
                <Play size={9} className="ml-0.5" style={{ color: 'var(--accent)' }} fill="currentColor" />
              </span>
              See how it works
            </a>
          </motion.div>

          {/* Stats — scroll-reactive with independent speed */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{ y: statsY, opacity: statsOpacity }}
            className="mt-14 flex flex-wrap items-center justify-center gap-8 sm:gap-14"
          >
            {[
              { val: "200+", label: "Projects delivered" },
              { val: "48h", label: "Avg. launch time" },
              { val: "4.9★", label: "Client rating" },
              { val: "98%", label: "Satisfaction rate" },
            ].map(({ val, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.08 }}
              >
                <p className="text-2xl sm:text-3xl font-bold tracking-tight font-display" style={{ color: 'var(--fg)' }}>
                  {val}
                </p>
                <p className="body-sm mt-0.5">{label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            style={{ opacity: headlineOpacity }}
            className="mt-16 flex flex-col items-center gap-2"
          >
            <p className="body-sm">Scroll to explore</p>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
              style={{ border: '1.5px solid var(--border)' }}
            >
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3], height: [4, 8, 4] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 rounded-full"
                style={{ background: 'var(--accent)' }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: 'linear-gradient(to top, var(--bg), transparent)' }} />
    </section>
  );
}
