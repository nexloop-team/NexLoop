"use client";

import { useState, useRef } from "react";
import type { MouseEvent } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Check, Monitor, Smartphone, Bot, Globe } from "lucide-react";

const ACCENT = "var(--accent)";

type Capability = {
  icon: React.ElementType;
  title: string;
  desc: string;
  tags: string[];
};

const capabilities: Capability[] = [
  {
    icon: Globe,
    title: "Website design & development",
    desc: "Minimal, conversion-focused sites in Next.js - custom UI, SEO structure, and performance built in from day one.",
    tags: ["Next.js", "Figma", "SEO"],
  },
  {
    icon: Smartphone,
    title: "Web apps & product UI",
    desc: "Dashboards, landing systems, and mobile apps - clear flows, accessible components, launch-ready builds.",
    tags: ["React", "Flutter", "Product"],
  },
  {
    icon: Bot,
    title: "Automation & AI",
    desc: "Chatbots, WhatsApp flows, and CRM automation that qualify leads and reduce manual follow-up.",
    tags: ["WhatsApp", "CRM", "GPT"],
  },
];

function CapabilityRow({ item, index }: { item: Capability; index: number }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="capability-row group"
    >
      <span className="capability-num">{String(index + 1).padStart(2, "0")}</span>
      <div className="capability-body">
        <div className="capability-main">
          <div className="capability-icon" aria-hidden>
            <Icon size={22} style={{ color: ACCENT }} />
          </div>
          <div className="capability-copy">
            <h3 className="capability-title">{item.title}</h3>
            <p className="capability-desc">{item.desc}</p>
            <div className="capability-tags">
              {item.tags.map((tag) => (
                <span key={tag} className="capability-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <a href="#contact" className="capability-cta">
          <span className="hidden sm:inline">Discuss</span>
          <ArrowUpRight size={18} className="capability-cta-icon" />
        </a>
      </div>
    </motion.div>
  );
}

/* ── Packages (NO PRICES - outcome-focused) ── */
type Package = {
  name: string;
  tagline: string;
  outcome: string;
  includes: string[];
  featured?: boolean;
  badge?: string;
};
type Tab = { id: string; label: string; icon: React.ElementType; packages: Package[] };

const tabs: Tab[] = [
  {
    id: "web", label: "Websites", icon: Monitor,
    packages: [
      {
        name: "Starter",
        tagline: "Get online fast",
        outcome: "A clean, mobile-first website that gets your business online and starts capturing leads within a week.",
        includes: ["1–2 page responsive design", "WhatsApp + contact form", "Basic SEO setup", "Google Business profile", "Free domain setup (1st year)"],
      },
      {
        name: "Growth",
        tagline: "Built to convert",
        outcome: "A fully custom website engineered to turn visitors into paying customers - with analytics, speed optimization, and ongoing support.",
        includes: ["3–5 pages, custom UI", "Lead capture + CTAs", "SEO + Google Analytics", "Core Web Vitals optimized", "Google Maps integration", "15-day post-launch support"],
        featured: true,
        badge: "Most popular",
      },
      {
        name: "High-Impact",
        tagline: "Conversion machine",
        outcome: "A single, hyper-focused landing page designed from the ground up to maximize conversions with copy assistance and A/B readiness.",
        includes: ["Single high-converting page", "Copywriting assistance", "Lead capture + CRM sync", "A/B-ready structure", "Analytics + heatmap setup", "Unlimited revisions (7 days)"],
      },
    ],
  },
  {
    id: "apps", label: "Mobile Apps", icon: Smartphone,
    packages: [
      {
        name: "Essentials",
        tagline: "Your brand, on every phone",
        outcome: "A polished Android app that puts your business in your customers' pockets with key information and contact points.",
        includes: ["Android app (Flutter)", "3–5 screens", "WhatsApp + contact integration", "Play Store submission", "Custom app icon"],
      },
      {
        name: "Launch",
        tagline: "Ship your MVP",
        outcome: "A fully functional mobile app with user authentication, push notifications, and API integration - ready for the Play Store.",
        includes: ["5–7 screens", "Login + user profiles", "Push notifications", "API integration", "Play Store submission", "30-day bug support"],
        featured: true,
        badge: "Most popular",
      },
      {
        name: "Catalogue",
        tagline: "Your products, anywhere",
        outcome: "A product browsing app with search, categories, and WhatsApp ordering - making it easy for customers to buy from you.",
        includes: ["Product listing + categories", "Search + filter", "WhatsApp order button", "Admin panel for updates", "Play Store listing"],
      },
    ],
  },
  {
    id: "ai", label: "AI & Automation", icon: Bot,
    packages: [
      {
        name: "Quick Start",
        tagline: "Automate your replies",
        outcome: "Never miss a lead again - automated WhatsApp responses that greet, qualify, and capture every inquiry 24/7.",
        includes: ["WhatsApp Business setup", "Auto-reply + greeting flow", "Lead capture templates", "Message template design"],
      },
      {
        name: "AI Agent",
        tagline: "Your 24/7 sales rep",
        outcome: "A GPT-powered chatbot that handles conversations on your website and WhatsApp - qualifying leads, answering FAQs, and handing off to humans.",
        includes: ["GPT-powered chatbot", "Website + WhatsApp integration", "FAQ + lead qualification", "CRM handoff", "Human takeover support", "1 month monitoring"],
        featured: true,
        badge: "High demand",
      },
      {
        name: "Full Pipeline",
        tagline: "Automate everything",
        outcome: "End-to-end lead automation: from form submission to CRM entry, follow-up sequences, lead scoring, and pipeline sync - zero manual work.",
        includes: ["Form → WhatsApp notification", "CRM + email sequences", "Lead scoring + tagging", "Google Sheets / Notion sync", "Setup docs + walkthrough"],
      },
    ],
  },
];

function PackageCard({ pkg, delay }: { pkg: Package; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.5, delay, ease: [0.23, 1, 0.32, 1] }}
      onMouseMove={handleMagneticMove}
      onMouseLeave={handleMagneticLeave}
      className={`package-card magnetic-card ${pkg.featured ? "featured" : ""}`}
    >
      {pkg.badge && (
        <div className="mb-5">
          <span
            className="text-xs font-semibold px-3 py-1.5 rounded-full"
            style={{ background: "var(--accent-subtle)", color: "var(--brand)", border: "1px solid rgba(91,79,232,0.2)" }}
          >
            ✦ {pkg.badge}
          </span>
        </div>
      )}

      <h3 className="headline-md">{pkg.name}</h3>
      <p className="text-sm font-medium mt-1" style={{ color: "var(--accent)" }}>{pkg.tagline}</p>

      <p className="body-md mt-4 leading-relaxed">{pkg.outcome}</p>

      <div className="divider my-6" />

      <p className="label mb-4">What&apos;s included</p>
      <ul className="space-y-3 flex-1">
        {pkg.includes.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "var(--fg-secondary)" }}>
            <span
              className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
              style={{ background: "var(--accent-subtle)", border: "1px solid var(--border)" }}
            >
              <Check size={11} strokeWidth={2.5} style={{ color: "var(--accent)" }} />
            </span>
            {item}
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className={`mt-8 flex items-center justify-center gap-2 py-3.5 rounded-full text-sm font-semibold transition-all ${pkg.featured ? "btn-primary" : "btn-ghost"}`}
      >
        Get a free quote <ArrowUpRight size={13} />
      </a>
    </motion.div>
  );
}

function handleMagneticMove(event: MouseEvent<HTMLDivElement>) {
  const target = event.currentTarget;
  const rect = target.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const px = x / rect.width - 0.5;
  const py = y / rect.height - 0.5;
  const mx = px * 16;
  const my = py * 16;
  const rx = py * -10;
  const ry = px * 10;
  target.style.setProperty("--mx", `${mx}px`);
  target.style.setProperty("--my", `${my}px`);
  target.style.setProperty("--rx", `${ry}deg`);
  target.style.setProperty("--ry", `${rx}deg`);
}

function handleMagneticLeave(event: MouseEvent<HTMLDivElement>) {
  const target = event.currentTarget;
  target.style.setProperty("--mx", "0px");
  target.style.setProperty("--my", "0px");
  target.style.setProperty("--rx", "0deg");
  target.style.setProperty("--ry", "0deg");
}

export default function Services() {
  const [activeTab, setActiveTab] = useState("web");
  const current = tabs.find((t) => t.id === activeTab)!;
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section id="services" ref={sectionRef} className="relative section-pad px-4 sm:px-8 section-warm overflow-hidden">

      <div className="container-xl relative z-10">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="eyebrow mb-6">Capabilities</span>
          <h2 className="headline-lg mt-6">
            Three ways we help you{" "}
            <span className="brand-text">grow online</span>.
          </h2>
          <p className="body-lg mt-4 max-w-xl hidden md:block" style={{ color: "var(--fg-secondary)" }}>
            Focused services with clear deliverables - no bloated retainers, no template shops.
          </p>
        </motion.div>

        {/* ── Capabilities showcase ── */}
        <motion.div style={{ y: bgY }} className="capability-showcase mb-8 md:mb-28">
          {capabilities.map((item, i) => (
            <CapabilityRow key={item.title} item={item} index={i} />
          ))}
        </motion.div>

        {/* ── Packages - desktop only (keeps mobile page short) ── */}
        <div className="hidden md:block">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <span className="eyebrow mb-6">Our packages</span>
            <h2 className="headline-lg mt-6">
              Choose the right fit.{" "}
              <span className="brand-text">We handle the rest.</span>
            </h2>
            <p className="body-lg mt-4 max-w-xl">
              Every package includes a free consultation. We&apos;ll recommend the best option for your business - no upselling, no surprises.
            </p>
          </motion.div>

          {/* Tab filter */}
          <div
            className="mt-10 mb-10 flex items-center gap-1 p-1.5 rounded-full w-fit"
            style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)" }}
          >
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`filter-pill ${activeTab === tab.id ? "active" : ""}`}
                >
                  <Icon size={14} /> {tab.label}
                </button>
              );
            })}
          </div>

          {/* Package cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch"
              style={{ minHeight: "520px" }}
            >
              {current.packages.map((p, i) => (
                <PackageCard key={p.name} pkg={p} delay={i * 0.06} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Bottom note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="body-sm text-center mt-10 max-w-lg mx-auto"
          >
            All packages include free consultation. Custom solutions, add-ons, and monthly maintenance plans available on request.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
