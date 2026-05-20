"use client";

import { motion } from "framer-motion";
import { Mail, Phone, ArrowUpRight, Twitter, Linkedin, Instagram, Sparkles } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  Company: [
    { label: "Services", href: "/#services" },
    { label: "Process", href: "/#process" },
    { label: "Reviews", href: "/#reviews" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/#contact" },
  ],
  Services: [
    { label: "Website Development", href: "/#services" },
    { label: "Mobile Apps", href: "/#services" },
    { label: "AI Chatbots", href: "/#services" },
    { label: "Lead Automation", href: "/#services" },
    { label: "AI Voice Agents", href: "/#services" },
  ],
  Blog: [
    { label: "AI Automation Guide", href: "/blog/ai-automation-guide-for-businesses" },
    { label: "WhatsApp Marketing", href: "/blog/whatsapp-marketing-automation" },
    { label: "Web Design Trends", href: "/blog/web-design-trends-2025" },
    { label: "Lead Gen Strategies", href: "/blog/lead-generation-strategies-ai" },
  ],
};

const socials = [
  { icon: Twitter, href: "https://twitter.com/nexloopapp", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/nexloop", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/nexloopapp", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="relative" style={{ borderTop: "1px solid var(--border)" }}>

      {/* Big CTA Strip — desktop (mobile uses sticky bar + contact section) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="desktop-only relative overflow-hidden section-pad-compact px-4 sm:px-8 text-center"
        style={{ background: "var(--bg-alt)" }}
      >
        {/* Bg glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 50% 80%, var(--accent-glow) 0%, transparent 60%)",
            filter: "blur(80px)",
          }}
        />

        <div className="relative z-10 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow mb-5">Ready to start?</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="headline-md mt-6"
          >
            Ready to build something{" "}
            <span className="brand-text">great</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body-md mt-3 max-w-md mx-auto"
          >
            Let&apos;s turn your idea into a product that works — and a system that grows.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2.5 mt-6"
          >
            <Link href="/#contact" className="btn-primary px-6 py-3 text-sm">
              <Sparkles size={14} />
              Start a project <ArrowUpRight size={14} />
            </Link>
            <Link href="/blog" className="btn-ghost px-6 py-3 text-sm">
              Read our blog →
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer grid */}
      <div className="container-xl section-pad-compact">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* Brand column */}
          <div className="lg:w-72 shrink-0">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <span className="brand-dot" style={{ width: 11, height: 11 }} />
              <span className="font-bold text-[16px] tracking-tight" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--fg)" }}>
                NexLoop
              </span>
            </Link>
            <p className="body-md max-w-xs hidden md:block">
              Digital product agency. We build websites, mobile apps, and AI automation systems that grow your business — faster than you thought possible.
            </p>
            <div className="mt-6 space-y-2">
              <a
                href="mailto:team.nexloop@gmail.com"
                className="flex items-center gap-2.5 body-sm transition-colors group"
                style={{ color: "var(--fg-muted)" }}
              >
                <Mail size={13} className="shrink-0 group-hover:text-[var(--accent)] transition-colors" />
                team.nexloop@gmail.com
              </a>
              <a
                href="tel:+919511875269"
                className="flex items-center gap-2.5 body-sm transition-colors group"
                style={{ color: "var(--fg-muted)" }}
              >
                <Phone size={13} className="shrink-0 group-hover:text-[var(--accent)] transition-colors" />
                +91 9511875269
              </a>
            </div>
            {/* Socials */}
            <div className="flex items-center gap-2.5 mt-6">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 group"
                  style={{
                    border: "1.5px solid var(--border)",
                    color: "var(--fg-muted)",
                    background: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.color = "var(--accent)";
                    e.currentTarget.style.background = "var(--accent-subtle)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color = "var(--fg-muted)";
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links grid — desktop */}
          <div className="desktop-only flex-1 grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([cat, items]) => (
              <div key={cat}>
                <p className="label mb-5">{cat}</p>
                <ul className="space-y-3">
                  {items.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm transition-colors duration-200"
                        style={{ color: "var(--fg-muted)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg-muted)")}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="divider mt-12 mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="body-sm">© {new Date().getFullYear()} NexLoop. All rights reserved.</p>
          <p className="body-sm">Crafted with care in India 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
}
