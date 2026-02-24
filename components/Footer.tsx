"use client";

import { Twitter, Linkedin, Instagram, Mail, Phone, ArrowUpRight } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Website Development", href: "#services" },
    { label: "AI Automation", href: "#services" },
    { label: "Lead Generation", href: "#services" },
    { label: "WhatsApp Bots", href: "#services" },
  ],
  "Use Cases": [
    { label: "Real Estate", href: "#" },
    { label: "Clinics", href: "#" },
    { label: "Coaching", href: "#" },
    { label: "Agencies", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
};

const socials = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Mail, href: "mailto:team.nexloop@gmail.com", label: "Email" },
];

const ticker = [
  "AI Automation", "Lead Generation", "WhatsApp Bots",
  "Voice Agents", "Website Development", "CRM Integration",
  "24/7 Systems", "Business Growth",
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06]">
      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.4), transparent)",
        }}
      />

      {/* Ticker */}
      <div className="py-4 border-b border-white/[0.05]">
        <div className="ticker-wrap">
          <div className="ticker-inner">
            {[...ticker, ...ticker].map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-4 px-6 text-xs text-white/30 shrink-0 tracking-wide"
              >
                <span className="w-1 h-1 rounded-full bg-purple-500/50 shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="flex flex-col lg:flex-row gap-10 sm:gap-12">
          {/* Brand */}
          <div className="lg:w-56 shrink-0">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-600/80 to-violet-700/80 border border-purple-500/30 flex items-center justify-center shadow-[0_0_10px_rgba(124,58,237,0.35)]">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 0.5L11 3V9L6 11.5L1 9V3L6 0.5Z" fill="white" opacity="0.95" />
                </svg>
              </div>
              <span className="font-bold text-base tracking-tight"><span className="text-white">Nex</span><span style={{ background: 'linear-gradient(135deg,#a78bfa,#818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Loop</span></span>
            </a>
            <p className="text-sm text-white/35 leading-relaxed mb-5">
              NexLoop builds AI automation systems and high-converting
              websites that grow your business on autopilot.
            </p>
            <a href="mailto:team.nexloop@gmail.com" className="flex items-center gap-2 text-xs text-white/35 hover:text-white/60 transition-colors">
              <Mail size={12} />
              team.nexloop@gmail.com
            </a>
            <a href="tel:+919511875269" className="flex items-center gap-2 text-xs text-white/35 hover:text-white/60 transition-colors mt-1.5">
              <Phone size={12} />
              +91 9511875269
            </a>
            <div className="flex gap-2.5 mt-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/35 hover:text-white hover:border-white/20 transition-all"
                >
                  <s.icon size={13} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-4">
                  {category}
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="flex items-center gap-1 text-sm text-white/30 hover:text-white/70 transition-colors group"
                      >
                        {link.label}
                        <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-50 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} NexLoop. All rights reserved.
          </p>
          <p className="text-xs text-white/25">
            Built with{" "}
            <span className="text-purple-400/70">Next.js + Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
