"use client";
import React, { useState, useEffect, useMemo } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";

const words = ["Websites", "Apps", "AI Systems", "Automation"];

export const HeroParallax = () => {
  const [wordIdx, setWordIdx] = useState(0);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const ref = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const springConfig = { stiffness: 260, damping: 30 };
  const mockupY = useSpring(useTransform(scrollYProgress, [0, 0.5], [0, 40]), springConfig);
  const mockupRotate = useSpring(useTransform(scrollYProgress, [0, 0.4], [2, -2]), springConfig);
  const mockupOpacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.75, 1]), springConfig);

  useEffect(() => {
    const t = setInterval(() => setWordIdx((i) => (i + 1) % words.length), 3000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      setCursor({ x: rect.width * 0.55, y: rect.height * 0.3 });
    }
  }, []);

  const onMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setCursor({ x: event.clientX - rect.left, y: event.clientY - rect.top });
  };

  const glowStyle = useMemo(
    () => ({
      "--cursor-x": `${cursor.x}px`,
      "--cursor-y": `${cursor.y}px`,
    } as React.CSSProperties),
    [cursor]
  );

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className="hero-stage relative overflow-hidden antialiased"
      style={glowStyle}
    >
      <div className="hero-spotlight" />
      <div className="hero-grid" />
      <div className="hero-particles" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-32 pb-16 md:pt-36 md:pb-24">
        <div className="grid gap-16 md:grid-cols-[1.05fr,0.95fr] items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium"
                style={{
                  background: "var(--accent-subtle)",
                  border: "1px solid var(--border)",
                  color: "var(--fg-secondary)",
                }}
              >
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--accent)" }} />
                Digital Product Agency — Est. 2024
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="headline-xl mt-6 max-w-2xl"
            >
              We design &amp; build{" "}
              <span className="relative inline-block" style={{ minWidth: "180px" }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[wordIdx]}
                    initial={{ opacity: 0, y: 24, filter: "blur(4px)", rotateX: 45 }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)", rotateX: 0 }}
                    exit={{ opacity: 0, y: -24, filter: "blur(4px)", rotateX: -45 }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    className="brand-text"
                    style={{ display: "inline-block" }}
                  >
                    {words[wordIdx]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <br />
              that grow your business.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="body-lg mt-5 max-w-xl"
            >
              We craft high-converting websites, mobile apps, and AI automation systems — delivered in{" "}
              <strong style={{ color: "var(--fg)", fontWeight: 600 }}>days, not months</strong>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row items-start gap-3"
            >
              <a href="#contact" className="btn-primary px-8 py-4 text-sm">
                Start a project <ArrowUpRight size={14} />
              </a>
              <a href="#process" className="btn-ghost px-7 py-4 text-sm group">
                <span
                  className="flex items-center justify-center w-6 h-6 rounded-full"
                  style={{ background: "var(--accent-subtle)", border: "1px solid var(--border)" }}
                >
                  <Play size={9} className="ml-0.5" style={{ color: "var(--accent)" }} fill="currentColor" />
                </span>
                See how it works
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 flex flex-wrap items-center gap-8 sm:gap-14"
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
                  <p className="text-2xl sm:text-3xl font-bold tracking-tight font-display" style={{ color: "var(--fg)" }}>
                    {val}
                  </p>
                  <p className="body-sm mt-0.5">{label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              className="hero-mockup"
              style={{ y: mockupY, rotate: mockupRotate, opacity: mockupOpacity }}
            >
              <div className="hero-mockup-top">
                <div className="hero-mockup-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="hero-mockup-title">NexLoop Automations</div>
                <div className="hero-mockup-pill">Live</div>
              </div>

              <div className="hero-mockup-body">
                <div className="hero-mockup-header">
                  <div>
                    <p className="hero-label">Pipeline activity</p>
                    <p className="hero-value">+132%</p>
                  </div>
                  <div className="hero-live-metric">
                    <span className="hero-live-dot" />
                    24 leads in last hour
                  </div>
                </div>

                <div className="hero-mockup-grid">
                  <div className="hero-metric-card">
                    <p className="hero-label">Qualified</p>
                    <p className="hero-metric">78%</p>
                    <div className="hero-bar">
                      <span style={{ width: "78%" }} />
                    </div>
                  </div>
                  <div className="hero-metric-card">
                    <p className="hero-label">Meetings</p>
                    <p className="hero-metric">34</p>
                    <div className="hero-bar">
                      <span style={{ width: "62%" }} />
                    </div>
                  </div>
                  <div className="hero-metric-card hero-metric-wide">
                    <p className="hero-label">AI responders</p>
                    <div className="hero-activity">
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                    <p className="hero-subtle">Average response 18s</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="hero-float-card hero-float-right"
              animate={{ y: [0, -12, 0], rotate: [1, -1, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="hero-float-title">+32 leads today</p>
              <p className="hero-float-sub">AI qualified in seconds</p>
            </motion.div>

            <motion.div
              className="hero-float-card hero-float-left"
              animate={{ y: [0, 10, 0], rotate: [-1, 1, -1] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="hero-float-title">AI booked meeting</p>
              <p className="hero-float-sub">Calendar synced</p>
            </motion.div>

            <motion.div
              className="hero-float-card hero-float-bottom"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="hero-float-title">Conversion +18%</p>
              <p className="hero-float-sub">Last 14 days</p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to top, var(--bg), transparent)" }} />
    </div>
  );
};
