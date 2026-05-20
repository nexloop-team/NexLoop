"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { ShaderCanvas } from "@/components/ui/shader-canvas";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Magnetic } from "@/components/ui/magnetic";

const words = ["websites", "products", "systems"];

function BlurReveal({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          initial={{ opacity: 0, filter: "blur(12px)", y: 16 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.45, delay: 0.04 + i * 0.025, ease: [0.23, 1, 0.32, 1] }}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : undefined }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

export const HeroParallax = () => {
  const [wordIdx, setWordIdx] = useState(0);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement | null>(null);
  const mockupRef = useRef<HTMLDivElement | null>(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 180, damping: 22 });
  const springRotateY = useSpring(rotateY, { stiffness: 180, damping: 22 });

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const headlineY = useTransform(scrollYProgress, [0, 0.45], [0, -80]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const mockupY = useSpring(useTransform(scrollYProgress, [0, 0.5], [0, 60]), {
    stiffness: 260,
    damping: 30,
  });
  const mockupScale = useSpring(useTransform(scrollYProgress, [0, 0.4], [1, 0.92]), {
    stiffness: 260,
    damping: 30,
  });

  useEffect(() => {
    const t = setInterval(() => setWordIdx((i) => (i + 1) % words.length), 2800);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) setCursor({ x: rect.width * 0.55, y: rect.height * 0.35 });
  }, []);

  const onHeroMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setCursor({ x: event.clientX - rect.left, y: event.clientY - rect.top });

    if (mockupRef.current) {
      const mRect = mockupRef.current.getBoundingClientRect();
      const px = (event.clientX - mRect.left) / mRect.width - 0.5;
      const py = (event.clientY - mRect.top) / mRect.height - 0.5;
      rotateY.set(px * 14);
      rotateX.set(py * -10);
    }
  };

  const onHeroLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const glowStyle = useMemo(
    () =>
      ({
        "--cursor-x": `${cursor.x}px`,
        "--cursor-y": `${cursor.y}px`,
      }) as React.CSSProperties,
    [cursor]
  );

  return (
    <div
      ref={ref}
      onMouseMove={onHeroMove}
      onMouseLeave={onHeroLeave}
      className="hero-stage relative overflow-hidden grain-overlay"
      style={glowStyle}
    >
      <ShaderCanvas className="hidden md:block opacity-70 mix-blend-screen" />
      <AuroraBackground className="hidden md:block" />
      <div className="hero-mesh hidden md:block" />
      <div className="hero-spotlight hidden md:block" />
      <div className="hero-grid hidden md:block" />
      <div className="hero-particles hidden md:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pt-24 pb-10 md:pt-32 md:pb-24">
        <div className="grid gap-8 lg:grid-cols-[1.05fr,0.95fr] lg:gap-12 items-center">
          <motion.div style={{ y: headlineY, opacity: headlineOpacity }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="eyebrow">
                <motion.span
                  className="inline-block w-2 h-2 rounded-full mr-1"
                  style={{ background: "var(--accent)" }}
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Website design studio
              </span>
            </motion.div>

            <h1 className="headline-xl mt-4 md:mt-6 max-w-2xl">
              <span className="md:hidden">We design </span>
              <span className="hidden md:inline">
                <BlurReveal text="We design " />
              </span>
              <span className="relative inline-block min-w-[120px] sm:min-w-[200px] align-bottom">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[wordIdx]}
                    initial={{ opacity: 0, y: 40, filter: "blur(10px)", rotateX: 60 }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)", rotateX: 0 }}
                    exit={{ opacity: 0, y: -40, filter: "blur(10px)", rotateX: -60 }}
                    transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
                    className="brand-text inline-block"
                    style={{ transformOrigin: "bottom center" }}
                  >
                    {words[wordIdx]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="inline-block mt-1"
              >
                that earn trust in seconds.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.45 }}
              className="body-lg mt-4 max-w-md hidden md:block"
              style={{ color: "var(--fg-secondary)" }}
            >
              Custom Next.js sites and digital products — cinematic UX, fast delivery, no templates.
            </motion.p>
            <p className="body-md mt-3 max-w-sm md:hidden" style={{ color: "var(--fg-secondary)" }}>
              Premium websites &amp; apps — fast delivery, no templates.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="mt-6 md:mt-9 flex flex-wrap items-center gap-3"
            >
              <Magnetic strength={0.4}>
                <a href="#contact" className="btn-primary btn-shimmer px-6 py-3.5 md:px-8 md:py-4 text-sm w-full sm:w-auto justify-center">
                  Start a project <ArrowUpRight size={14} />
                </a>
              </Magnetic>
              <a href="#portfolio" className="btn-ghost px-6 py-3.5 text-sm w-full sm:w-auto justify-center md:hidden">
                View work
              </a>
              <Magnetic strength={0.3}>
                <a href="#portfolio" className="btn-ghost px-7 py-4 text-sm hidden md:inline-flex">
                  View work
                </a>
              </Magnetic>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative hidden lg:block"
            style={{ y: mockupY, scale: mockupScale, perspective: 1200 }}
          >
            <motion.div
              ref={mockupRef}
              className="hero-mockup"
              style={{
                rotateX: springRotateX,
                rotateY: springRotateY,
                transformStyle: "preserve-3d",
              }}
            >
              <div className="hero-mockup-top">
                <div className="hero-mockup-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="hero-mockup-title">nexloop.in</div>
                <div className="hero-mockup-pill">Live</div>
              </div>

              <div className="hero-mockup-body">
                <div className="hero-mockup-header">
                  <div>
                    <p className="hero-label">Studio preview</p>
                    <p className="hero-value">100%</p>
                  </div>
                  <div className="hero-live-metric">
                    <span className="hero-live-dot" />
                    Building in public
                  </div>
                </div>

                <div className="aspect-[16/10] relative flex items-center justify-center -mx-2 mb-2 rounded-xl overflow-hidden"
                  style={{ background: "var(--bg)", border: "1px solid var(--border)" }}
                >
                  <Image
                    src="/logo1.png"
                    alt="NexLoop"
                    width={200}
                    height={56}
                    className="h-10 w-auto opacity-90"
                  />
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%)",
                    }}
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
                  />
                </div>

                <div className="hero-mockup-grid">
                  <div className="hero-metric-card">
                    <p className="hero-label">Design</p>
                    <p className="hero-metric">A+</p>
                    <div className="hero-bar">
                      <span style={{ width: "92%" }} />
                    </div>
                  </div>
                  <div className="hero-metric-card">
                    <p className="hero-label">Speed</p>
                    <p className="hero-metric">98</p>
                    <div className="hero-bar">
                      <span style={{ width: "88%" }} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="hero-float-card hero-float-right"
              animate={{ y: [0, -14, 0], rotate: [2, -2, 2] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="hero-float-title">Motion-first UX</p>
              <p className="hero-float-sub">Framer · GSAP-ready</p>
            </motion.div>

            <motion.div
              className="hero-float-card hero-float-left"
              animate={{ y: [0, 12, 0], rotate: [-2, 2, -2] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="hero-float-title">Ship in days</p>
              <p className="hero-float-sub">Next.js · Vercel</p>
            </motion.div>

            <motion.div
              className="hero-float-card hero-float-bottom"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="hero-float-title">No templates</p>
              <p className="hero-float-sub">100% custom</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-24 md:h-40 pointer-events-none z-[2]"
        style={{ background: "linear-gradient(to top, var(--bg), transparent)" }}
      />
    </div>
  );
};
