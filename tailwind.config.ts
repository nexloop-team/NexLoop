import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'DM Sans'", "'Inter'", "sans-serif"],
        body:    ["'Inter'", "sans-serif"],
        mono:    ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        nexloop: {
          bg:                "var(--bg)",
          "bg-alt":          "var(--bg-alt)",
          card:              "var(--bg-card)",
          border:            "var(--border)",
          accent:            "var(--accent)",
          "accent-light":    "var(--accent-light)",
          "accent-subtle":   "var(--accent-subtle)",
          fg:                "var(--fg)",
          "fg-secondary":    "var(--fg-secondary)",
          muted:             "var(--fg-muted)",
        },
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
        sm:      "var(--radius-sm)",
        xs:      "var(--radius-xs)",
      },
      animation: {
        float:          "float 6s ease-in-out infinite",
        "float-slow":   "float 9s ease-in-out infinite",
        "pulse-slow":   "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        ticker:         "ticker 38s linear infinite",
        "fade-up":      "fadeUp 0.6s cubic-bezier(0.23,1,0.32,1) both",
        "scale-in":     "scaleIn 0.5s cubic-bezier(0.23,1,0.32,1) both",
        "mesh-pulse":   "meshPulse 9s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-14px)" },
        },
        ticker: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.92)" },
          to:   { opacity: "1", transform: "scale(1)" },
        },
        meshPulse: {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%":      { opacity: "0.9", transform: "scale(1.12)" },
        },
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.23, 1, 0.32, 1)",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};

export default config;
