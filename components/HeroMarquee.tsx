"use client";

const items = [
  "Website Design",
  "Next.js",
  "Product UI",
  "Motion",
  "SEO",
  "Automation",
  "Figma",
  "Vercel",
  "Brand Systems",
  "Conversion",
];

export default function HeroMarquee() {
  const row = [...items, ...items];

  return (
    <div
      className="relative py-4 overflow-hidden border-y"
      style={{ borderColor: "var(--border)", background: "var(--bg-alt)" }}
    >
      <div className="ticker-wrap">
        <div className="ticker-inner gap-10">
          {row.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="inline-flex items-center gap-10 text-sm font-semibold tracking-wide uppercase shrink-0"
              style={{ color: "var(--fg-muted)", letterSpacing: "0.12em" }}
            >
              {item}
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
