"use client";

import { motion } from "framer-motion";

const logos = [
  { name: "Shopify", icon: "🛒" },
  { name: "HubSpot", icon: "🔶" },
  { name: "Zapier", icon: "⚡" },
  { name: "Slack", icon: "💬" },
  { name: "Notion", icon: "🗒️" },
  { name: "Stripe", icon: "💳" },
  { name: "Calendly", icon: "📅" },
  { name: "Mailchimp", icon: "🐒" },
  { name: "Typeform", icon: "📝" },
  { name: "ActiveCampaign", icon: "📣" },
  { name: "WhatsApp", icon: "💚" },
  { name: "OpenAI", icon: "🤖" },
];

export default function LogoTicker() {
  const doubled = [...logos, ...logos];
  return (
    <section
      className="relative py-10 sm:py-14 overflow-hidden"
      style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
    >
      {/* Background */}
      <div className="absolute inset-0" style={{ background: "var(--bg-alt)" }} />

      <div className="relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="label text-center mb-8"
        >
          Trusted integrations &amp; platforms
        </motion.p>

        <div className="ticker-wrap">
          <div className="ticker-inner">
            {doubled.map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="flex items-center gap-2.5 px-8 sm:px-10 shrink-0 transition-all duration-300 cursor-default group"
              >
                <span
                  className="text-base leading-none transition-transform duration-300 group-hover:scale-125"
                  role="img"
                  aria-label={logo.name}
                >
                  {logo.icon}
                </span>
                <span
                  className="text-sm font-semibold tracking-tight whitespace-nowrap transition-colors duration-300"
                  style={{ color: "var(--fg-muted)", fontFamily: "'DM Sans', sans-serif" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg-muted)")}
                >
                  {logo.name}
                </span>
                <span
                  className="w-1 h-1 rounded-full ml-4 shrink-0 opacity-30"
                  style={{ background: "var(--fg-muted)" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
