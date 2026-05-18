"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Dot follows instantly
  const dotX = useSpring(mouseX, { stiffness: 1800, damping: 30 });
  const dotY = useSpring(mouseY, { stiffness: 1800, damping: 30 });

  // Ring lags behind — the "trail" effect
  const ringX = useSpring(mouseX, { stiffness: 260, damping: 22 });
  const ringY = useSpring(mouseY, { stiffness: 260, damping: 22 });

  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);
    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    // Detect hoverable elements
    const handleHoverIn = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.matches('a, button, [role="button"], input, textarea, select, label, [tabindex]') ||
        target.closest('a, button, [role="button"]')
      ) {
        setIsHovering(true);
      }
    };
    const handleHoverOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.matches('a, button, [role="button"], input, textarea, select, label, [tabindex]') ||
        target.closest('a, button, [role="button"]')
      ) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseover", handleHoverIn);
    document.addEventListener("mouseout", handleHoverOut);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseover", handleHoverIn);
      document.removeEventListener("mouseout", handleHoverOut);
    };
  }, [isVisible, mouseX, mouseY]);

  // Hide on touch devices
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Hide default cursor site-wide */}
      <style>{`* { cursor: none !important; }`}</style>

      {/* Outer glow ring */}
      <motion.div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isClicking ? 0.7 : isHovering ? 1.2 : 1,
          width: isHovering ? 28 : 26,
          height: isHovering ? 28 : 26,
        }}
        transition={{ scale: { type: "spring", stiffness: 300, damping: 18 }, opacity: { duration: 0.1 } }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            border: `1.5px solid ${isHovering ? "var(--accent)" : "rgba(91,79,232,0.6)"}`,
            background: isHovering ? "var(--accent-subtle)" : "transparent",
            boxShadow: isHovering ? "0 0 16px var(--accent-glow)" : "none",
            transition: "border-color 0.2s, background 0.2s, box-shadow 0.2s",
          }}
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: isHovering ? "var(--accent)" : "var(--fg)",
          boxShadow: isHovering ? "0 0 10px var(--accent)" : "none",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isClicking ? 0.6 : 1,
        }}
        transition={{ opacity: { duration: 0.1 }, scale: { type: "spring", stiffness: 520, damping: 18 } }}
      />
    </>
  );
}
