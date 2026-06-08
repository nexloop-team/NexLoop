"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { cn } from "@/lib/cn";

interface FooterLink {
  title: string;
  href: string;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    label: "Services",
    links: [
      { title: "AI Automation", href: "#" },
      { title: "AI Chatbots", href: "#" },
      { title: "AI Voice Agents", href: "#" },
      { title: "Web Development", href: "#" },
      { title: "Mobile Apps", href: "#" },
      { title: "WhatsApp Automation", href: "#" },
    ],
  },
  {
    label: "Company",
    links: [
      { title: "About", href: "#" },
      { title: "Services", href: "#" },
      { title: "Work", href: "#" },
      { title: "Contact", href: "#" },
    ],
  },
  {
    label: "Projects",
    links: [
      { title: "AI Voice Agent", href: "#" },
      { title: "WhatsApp Automation", href: "#" },
      { title: "CRM Dashboard", href: "#" },
      { title: "Appointment Booking System", href: "#" },
    ],
  },
  {
    label: "Social",
    links: [
      { title: "Instagram", href: "#" },
      { title: "LinkedIn", href: "#" },
      { title: "GitHub", href: "#" },
      { title: "X (Twitter)", href: "#" },
    ],
  },
];

type ViewAnimationProps = {
  delay?: number;
  className?: string;
  children: React.ReactNode;
};

function AnimatedContainer({
  className,
  delay = 0,
  children,
}: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: "blur(8px)", y: 20, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 1.2, ease: EASE_OUT_EXPO }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-background/30 peerly-blurred backdrop-blur-sm pb-10 pt-20 sm:pt-32 lg:pt-40">
      <div className="relative z-10 mx-auto max-w-[96rem] px-6 sm:px-10 lg:px-14">
        {/* ── Main Links Grid ─────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {footerSections.map((section, index) => (
            <AnimatedContainer
              key={section.label}
              delay={0.1 + index * 0.1}
              className="flex flex-col"
            >
              <h3 className="mb-8 text-[10px] font-medium uppercase tracking-[0.2em] text-label-foreground">
                {section.label}
              </h3>
              <ul className="flex flex-col space-y-4">
                {section.links.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.href}
                      className="text-[14px] font-light tracking-wide text-muted-foreground transition-colors duration-500 hover:text-foreground"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </AnimatedContainer>
          ))}
        </div>

        {/* ── Brand & Copyright Row ───────────────────────────── */}
        <AnimatedContainer delay={0.4} className="mt-32 lg:mt-48">
          <div className="flex flex-col items-start justify-between gap-8 border-t border-foreground/10 pt-10 sm:flex-row sm:items-end">
            <div className="flex flex-col gap-3">
              <span className="text-2xl font-light uppercase tracking-widest text-foreground sm:text-3xl">
                NexLoop
              </span>
              <span className="text-[13px] font-light tracking-wide text-muted-foreground sm:text-sm">
                AI Automation, Web Development & Mobile Applications
              </span>
            </div>
            <span className="text-[12px] font-light text-label-foreground sm:text-[13px]">
              © {new Date().getFullYear()} NexLoop. All rights reserved.
            </span>
          </div>
        </AnimatedContainer>
      </div>
    </footer>
  );
}
