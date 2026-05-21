"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const headlineY = useTransform(scrollYProgress, [0, 0.45], [0, -60]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);

  useEffect(() => {
    const t = setInterval(() => setWordIdx((i) => (i + 1) % words.length), 2800);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) setCursor({ x: rect.width * 0.5, y: rect.height * 0.4 });
  }, []);

  const onHeroMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setCursor({ x: event.clientX - rect.left, y: event.clientY - rect.top });
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
      className="hero-stage hero-stage-centered relative overflow-hidden grain-overlay"
      style={glowStyle}
    >
      <ShaderCanvas className="hidden md:block opacity-70 mix-blend-screen" />
      <AuroraBackground className="hidden md:block" />
      <div className="hero-mesh hidden md:block" />
      <div className="hero-spotlight hidden md:block" />
      <div className="hero-grid hidden md:block" />
      <div className="hero-particles hidden md:block" />

      <div className="relative z-10 flex min-h-[calc(100dvh-4.5rem)] flex-col items-center justify-center px-4 sm:px-8 py-20 md:py-24 text-center">
        <motion.div
          style={{ y: headlineY, opacity: headlineOpacity }}
          className="flex w-full max-w-3xl flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow inline-flex items-center justify-center">
              <motion.span
                className="inline-block w-2 h-2 rounded-full mr-1.5"
                style={{ background: "var(--accent)" }}
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Website design studio
            </span>
          </motion.div>

          <h1 className="headline-xl mt-5 md:mt-7 max-w-3xl mx-auto">
            <span className="hero-headline-row inline-flex flex-wrap items-baseline justify-center gap-x-[0.3em]">
              <span className="shrink-0 md:hidden">We design</span>
              <span className="shrink-0 hidden md:inline">
                <BlurReveal text="We design" />
              </span>
              <span className="hero-word-slot relative inline-block align-bottom">
                <span className="invisible brand-text" aria-hidden>
                  websites
                </span>
                <span className="absolute inset-0 flex items-end justify-center">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={words[wordIdx]}
                      initial={{ opacity: 0, y: 40, filter: "blur(10px)", rotateX: 60 }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)", rotateX: 0 }}
                      exit={{ opacity: 0, y: -40, filter: "blur(10px)", rotateX: -60 }}
                      transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
                      className="brand-text inline-block text-center"
                      style={{ transformOrigin: "bottom center" }}
                    >
                      {words[wordIdx]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </span>
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
            className="body-lg mt-5 max-w-xl mx-auto hidden md:block"
            style={{ color: "var(--fg-secondary)" }}
          >
            Custom Next.js sites and digital products - cinematic UX, fast delivery, no templates.
          </motion.p>
          <p
            className="body-md mt-4 max-w-sm mx-auto md:hidden"
            style={{ color: "var(--fg-secondary)" }}
          >
            Premium websites &amp; apps - fast delivery, no templates.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto"
          >
            <Magnetic strength={0.4}>
              <a
                href="/contact"
                className="btn-primary btn-shimmer px-6 py-3.5 md:px-8 md:py-4 text-sm w-full sm:w-auto justify-center"
              >
                Start a project <ArrowUpRight size={14} />
              </a>
            </Magnetic>
            <Magnetic strength={0.3} className="w-full sm:w-auto">
              <a
                href="/work"
                className="btn-ghost px-6 py-3.5 md:px-7 md:py-4 text-sm w-full justify-center"
              >
                View work
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-24 md:h-32 pointer-events-none z-[2]"
        style={{ background: "linear-gradient(to top, var(--bg), transparent)" }}
      />
    </div>
  );
};
