"use client"   ;

import { motion } from "framer-motion";

const logos = [
  { name: "Shopify" },
  { name: "HubSpot" },
  { name: "Zapier" },
  { name: "Slack" },
  { name: "Notion" },
  { name: "Stripe" },
  { name: "Calendly" },
  { name: "Mailchimp" },
  { name: "Typeform" },
  { name: "ActiveCampaign" },
  { name: "WhatsApp" },
  { name: "OpenAI" },
];

export default function LogoTicker() {
  const doubled = [...logos, ...logos];
  return (
    <section
      className="relative py-2.5 sm:py-3 overflow-hidden"
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
          className="label text-center mb-2"
        >
          Trusted integrations &amp; platforms
        </motion.p>

        <div className="ticker-wrap">
          <div className="ticker-inner">
            {doubled.map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="flex items-center gap-2 px-4 sm:px-5 shrink-0 transition-all duration-300 cursor-default group"
              >
                <span
                  className="text-xs font-semibold tracking-tight whitespace-nowrap transition-colors duration-300"
                  style={{ color: "var(--fg-muted)", fontFamily: "'DM Sans', sans-serif" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg-muted)")}
                >
                  {logo.name}
                </span>
                <span
                  className="w-1 h-1 rounded-full ml-3 shrink-0 opacity-30"
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
