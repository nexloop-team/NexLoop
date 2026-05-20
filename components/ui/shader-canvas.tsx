"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type ShaderCanvasProps = {
  className?: string;
};

export function ShaderCanvas({ className }: ShaderCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let animationId = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = parent.clientWidth * dpr;
      canvas.height = parent.clientHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    const blobs = [
      { phase: 0, speed: 0.9, hue: [91, 79, 232] },
      { phase: 2.1, speed: 0.7, hue: [123, 112, 245] },
      { phase: 4.2, speed: 1.1, hue: [59, 130, 246] },
      { phase: 1.4, speed: 0.6, hue: [16, 185, 129] },
      { phase: 3.6, speed: 0.85, hue: [236, 72, 153] },
    ];

    const draw = () => {
      if (!prefersReduced) frame += 0.012;

      const w = canvas.parentElement?.clientWidth ?? 800;
      const h = canvas.parentElement?.clientHeight ?? 600;
      ctx.clearRect(0, 0, w, h);

      ctx.globalCompositeOperation = "lighter";

      for (const blob of blobs) {
        const t = frame * blob.speed + blob.phase;
        const x = w * (0.5 + 0.38 * Math.sin(t * 0.7));
        const y = h * (0.45 + 0.32 * Math.cos(t * 0.55));
        const radius = Math.min(w, h) * (0.28 + 0.08 * Math.sin(t * 1.3));
        const [r, g, b] = blob.hue;
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, `rgba(${r},${g},${b},0.45)`);
        gradient.addColorStop(0.45, `rgba(${r},${g},${b},0.12)`);
        gradient.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalCompositeOperation = "source-over";
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 w-full h-full", className)}
      aria-hidden
    />
  );
}
