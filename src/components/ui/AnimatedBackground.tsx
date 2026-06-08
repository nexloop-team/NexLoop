import { cn } from "@/lib/cn";

type AnimatedBackgroundProps = {
  className?: string;
};

/*
  Layered ambient glow system — 5 independent layers create realistic light depth:

  Layer 1 — Deep ground mass:  large, very dark olive, bottom-left anchor
  Layer 2 — Mid atmosphere:    medium, warmer olive, slightly above layer 1
  Layer 3 — Counter-light:     small, right-side ghost for depth
  Layer 4 — Specular peak:     tiny, brightest, innermost hot-spot on the mass
  Layer 5 — Top-edge bleed:    vertical gradient seals the very top in pure black

  All glow colors use low-opacity so they blend into near-black rather than
  fighting it. The result is a light that feels embedded, not overlaid.
*/

const glows = [
  {
    // Ground mass — largest, darkest, anchors the whole scene bottom-left
    id: "glow-ground",
    animationClass: "glow-drift-1",
    style: {
      position: "absolute" as const,
      bottom: "-40%",
      left: "-30%",
      width: "min(160vw, 1400px)",
      height: "min(160vw, 1400px)",
      background: `radial-gradient(
        ellipse 80% 70% at 45% 55%,
        rgba(var(--glow-primary), 0.28) 0%,
        rgba(var(--glow-primary), 0.12) 30%,
        rgba(var(--glow-secondary), 0.05) 55%,
        transparent 72%
      )`,
      filter: "blur(90px)",
    },
  },
  {
    // Mid atmosphere — feeds into the ground mass from slightly higher/righter
    id: "glow-mid",
    animationClass: "glow-drift-2",
    style: {
      position: "absolute" as const,
      bottom: "-15%",
      left: "-5%",
      width: "min(100vw, 900px)",
      height: "min(100vw, 900px)",
      background: `radial-gradient(
        circle at 40% 60%,
        rgba(var(--glow-secondary), 0.18) 0%,
        rgba(var(--glow-primary), 0.08) 40%,
        transparent 65%
      )`,
      filter: "blur(70px)",
    },
  },
  {
    // Tertiary counter — subtle right-side presence prevents flat look
    id: "glow-counter",
    animationClass: "glow-drift-3",
    style: {
      position: "absolute" as const,
      top: "20%",
      right: "-25%",
      width: "min(70vw, 600px)",
      height: "min(70vw, 600px)",
      background: `radial-gradient(
        circle at 50% 50%,
        rgba(var(--glow-deep), 0.14) 0%,
        rgba(var(--glow-secondary), 0.04) 45%,
        transparent 68%
      )`,
      filter: "blur(100px)",
    },
  },
  {
    // Specular hot-spot — the brightest point inside the ground mass
    id: "glow-specular",
    animationClass: "glow-drift-4",
    style: {
      position: "absolute" as const,
      bottom: "0%",
      left: "0%",
      width: "min(60vw, 550px)",
      height: "min(60vw, 550px)",
      background: `radial-gradient(
        circle at 50% 50%,
        rgba(var(--glow-tertiary), 0.20) 0%,
        rgba(var(--glow-primary), 0.08) 35%,
        transparent 60%
      )`,
      filter: "blur(50px)",
    },
  },
  {
    // Accent ghost — a hair of yellow-green near the top of the mass
    id: "glow-accent",
    animationClass: "glow-breathe",
    style: {
      position: "absolute" as const,
      bottom: "15%",
      left: "8%",
      width: "min(30vw, 280px)",
      height: "min(30vw, 280px)",
      background: `radial-gradient(
        circle at 50% 50%,
        rgba(200, 240, 58, 0.06) 0%,
        rgba(var(--glow-primary), 0.03) 50%,
        transparent 75%
      )`,
      filter: "blur(40px)",
    },
  },
] as const;

export function AnimatedBackground({ className }: AnimatedBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
      style={{ background: "var(--background)" }}
    >
      {glows.map((glow) => (
        <div
          key={glow.id}
          className={cn("absolute rounded-full", glow.animationClass)}
          style={{
            ...glow.style,
            transform: "translate3d(0, 0, 0)",
            backfaceVisibility: "hidden",
          }}
        />
      ))}

      {/* Vignette — pulls the corners/edges deep black, focuses eye on center */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 85% 75% at 50% 50%, transparent 25%, rgba(3,3,3,0.55) 65%, rgba(3,3,3,0.97) 100%),
            linear-gradient(to bottom, rgba(3,3,3,0.55) 0%, transparent 18%, transparent 75%, rgba(3,3,3,0.75) 100%)
          `,
        }}
      />

      {/* Film grain — fine, low-opacity, adds organic texture */}
      <div className="grain-overlay absolute inset-0 opacity-[0.032]" />
    </div>
  );
}
