import type { ReactNode } from "react";

interface SubpageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
}

export default function SubpageHero({ eyebrow, title, description }: SubpageHeroProps) {
  return (
    <section className="relative pt-32 sm:pt-40 pb-12 sm:pb-16 px-4 sm:px-8 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 60% 0%, var(--accent-glow) 0%, transparent 55%)",
          filter: "blur(80px)",
        }}
      />
      <div className="container-xl relative z-10 max-w-3xl">
        <span className="eyebrow mb-5">{eyebrow}</span>
        <h1 className="headline-lg mt-5">{title}</h1>
        <p className="body-lg mt-4" style={{ color: "var(--fg-secondary)" }}>
          {description}
        </p>
      </div>
    </section>
  );
}
