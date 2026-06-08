"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const AnimatedNavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      className="group relative inline-flex h-5 items-center overflow-hidden text-[10.5px] font-medium uppercase tracking-[0.2em]"
    >
      <span className="flex h-5 items-center text-foreground/40 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
        {children}
      </span>
      <span className="absolute inset-0 flex h-5 items-center text-foreground/90 translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0">
        {children}
      </span>
    </a>
  );
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinksData = [
    { label: "Services", href: "/services" },
    { label: "Work", href: "/#work" },
    { label: "About", href: "/about" },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0, x: "-50%" }}
      animate={{ y: 0, opacity: 1, x: "-50%" }}
      transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed left-1/2 top-6 z-50 flex w-[calc(100%-3rem)] max-w-max flex-col items-center overflow-hidden border border-border bg-nav-bg px-5 py-3 backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:w-auto sm:px-6 sm:py-3.5 ${
        isOpen ? "rounded-3xl" : "rounded-full"
      }`}
    >
      <div className="flex w-full items-center justify-between gap-x-6 sm:gap-x-12">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="flex h-[22px] w-[22px] items-center justify-center rounded-full border border-foreground/20 text-[8px] font-medium tracking-wider text-foreground/60 transition-colors duration-500 group-hover:border-foreground/40 group-hover:text-foreground">
            N
          </div>
          <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-foreground/80 transition-colors duration-500 group-hover:text-foreground">
            NexLoop
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center space-x-7 sm:flex">
          {navLinksData.map((link) => (
            <AnimatedNavLink key={link.href} href={link.href}>
              {link.label}
            </AnimatedNavLink>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 sm:flex">
          <ThemeToggle />
          <div className="group relative">
            <div className="pointer-events-none absolute inset-0 -m-1 rounded-full bg-white opacity-40 blur-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-m-1.5 group-hover:opacity-60 group-hover:blur-2xl" />
            <a
              href="/contact"
              className="relative z-10 inline-flex h-8 items-center justify-center rounded-full bg-white px-5 text-[9.5px] font-bold uppercase tracking-[0.2em] text-black transition-all duration-500 hover:scale-[1.03]"
            >
              Book a Call
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="flex h-8 w-8 items-center justify-end text-foreground/50 transition-colors hover:text-foreground sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4 7h16M4 17h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex w-full flex-col items-center sm:hidden"
          >
            <nav className="flex w-full flex-col items-center space-y-6 pb-6 pt-8">
              {navLinksData.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/50 transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex w-full flex-col items-center gap-4 pt-2">
                <ThemeToggle />
                <div className="w-full px-6 mt-4">
                  <div className="group relative w-full">
                    <div className="pointer-events-none absolute inset-0 -m-1 rounded-full bg-white opacity-40 blur-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-m-1.5 group-hover:opacity-60 group-hover:blur-2xl" />
                    <a
                      href="/contact"
                      onClick={() => setIsOpen(false)}
                      className="relative z-10 flex h-10 w-full items-center justify-center rounded-full bg-white px-6 text-[10px] font-bold uppercase tracking-[0.2em] text-black transition-all duration-500 hover:scale-[1.03]"
                    >
                      Book a Call
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
