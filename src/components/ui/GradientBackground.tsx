"use client"

import * as React from "react"
import { GrainGradient } from "@paper-design/shaders-react"
import { useTheme } from "next-themes"

export function GradientBackground() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    // Defer the state update to the next animation frame to avoid
    // triggering a synchronous state update inside the effect body
    // which can cause cascading renders and lint errors.
    let rafId = 0
    rafId = window.requestAnimationFrame(() => setMounted(true))
    return () => window.cancelAnimationFrame(rafId)
  }, [])

  const isLight = mounted && resolvedTheme === "light"

  // We use useMemo to prevent unnecessary array recreation which might trigger shader re-compiles
  const shaderProps = React.useMemo(() => {
    if (isLight) {
      return {
        colorBack: "#f8f9fa",
        colors: ["#ffffff", "#e2e8f0", "#bae6fd"], // White, Soft Silver, Light Blue highlight
        intensity: 0.6,
        speed: 0.2, // Same animation speed as dark mode
      }
    }
    return {
      colorBack: "#000000",
      colors: ["hsl(190, 100%, 55%)", "hsl(210, 80%, 40%)", "hsl(230, 60%, 20%)"],
      intensity: 0.3,
      speed: 0.2,
    }
  }, [isLight])

  // Memoize the shader element to prevent ANY React render cycles from hitting the WebGL canvas
  const memoizedShader = React.useMemo(() => (
    <GrainGradient
      style={{ height: "100%", width: "100%" }}
      colorBack={shaderProps.colorBack}
      softness={0.95}
      intensity={shaderProps.intensity}
      noise={0}
      shape="corners"
      offsetX={0}
      offsetY={0}
      scale={1.3}
      rotation={0}
      speed={shaderProps.speed}
      colors={shaderProps.colors}
    />
  ), [shaderProps])

  return (
    <div 
      className="fixed inset-0 -z-50 bg-background pointer-events-none transition-colors duration-1000"
      style={{ transform: "translateZ(0)", willChange: "transform" }}
    >
      {/* SINGLE SHADER INSTANCE */}
      <div 
        className="absolute inset-0 transition-opacity duration-1000"
        style={{ opacity: mounted ? 1 : 0 }}
      >
        {memoizedShader}
      </div>

      {/* TOP AMBIENT LIGHT */}
      <div
        className="absolute inset-0 transition-all duration-1000"
        style={{
          opacity: 0.5,
          background: isLight 
            ? "radial-gradient(circle at 50% 20%, rgba(255,255,255,0.4), transparent 60%)"
            : "radial-gradient(circle at 50% 20%, rgba(0,180,255,0.15), transparent 60%)",
        }}
      />

      {/* LEFT GLOW */}
      <div
        className="absolute -left-40 top-20 h-175 w-175 rounded-full blur-[180px] transition-colors duration-1000"
        style={{
          background: isLight ? "rgba(186,230,253,0.15)" : "rgba(0,180,255,0.08)",
          transform: "translateZ(0)",
        }}
      />

      {/* RIGHT GLOW */}
      <div
        className="absolute -right-40 bottom-20 h-175 w-175 rounded-full blur-[180px] transition-colors duration-1000"
        style={{
          background: isLight ? "rgba(226,232,240,0.3)" : "rgba(80,120,255,0.08)",
          transform: "translateZ(0)",
        }}
      />

      {/* BOTTOM OVERLAY (creates depth) */}
      <div 
        className="absolute inset-0 transition-colors duration-1000"
        style={{
          background: isLight
            ? "linear-gradient(to bottom, rgba(248,248,246,0) 0%, rgba(248,248,246,0.1) 50%, rgba(248,248,246,0.7) 100%)"
            : "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.9) 100%)",
        }}
      />

      {/* CINEMATIC VIGNETTE */}
      <div
        className="absolute inset-0 transition-colors duration-1000"
        style={{
          background: isLight
            ? "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(248,248,246,0.3) 100%)"
            : "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(0,0,0,0.8) 100%)",
        }}
      />

      {/* SHARED GRAIN LAYER */}
      <div 
        className="grain-overlay absolute inset-0 mix-blend-overlay dark:mix-blend-overlay transition-opacity duration-1000"
        style={{ 
          opacity: isLight ? 0.05 : 0.04,
          transform: "translateZ(0)"
        }}
      />
    </div>
  )
}
