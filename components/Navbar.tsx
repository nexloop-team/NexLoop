"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, ArrowUpRight } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import WhatsAppIcon, { WHATSAPP_URL } from "./WhatsAppIcon";

type NavLink = { label: string; href: string; id: string; page?: boolean };

const navLinks: NavLink[] = [
  { label: "Work", href: "/work", id: "portfolio", page: true },
  { label: "Services", href: "/services", id: "services", page: true },
  { label: "About", href: "/about", id: "about", page: true },
  { label: "Blog", href: "/blog", id: "blog", page: true },
  { label: "Contact", href: "/contact", id: "contact", page: true },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("portfolio");

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setScrolled(scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!mobileOpen) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (pathname !== "/") return;

    const ids = navLinks.filter((link) => !link.page).map((link) => link.id);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const updateActive = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const anchor = scrollY + window.innerHeight * 0.35;
      let current = sections[0].id;
      for (const section of sections) {
        if (anchor >= section.offsetTop) current = section.id;
      }
      setActiveSection(current);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-nav" : ""}`}
        style={{ padding: scrolled ? "10px 0" : "16px 0" }}
      >
        <div className="container-xl flex items-center justify-between gap-3">
          <Link href="/" className="nav-brand group" aria-label="NexLoop Home">
            <div className="nav-brand-logo-wrap">
              <Image
                src="/logo1.png"
                alt="NexLoop"
                width={200}
                height={48}
                priority
                sizes="176px"
                className="logo-mark nav-brand-logo"
              />
            </div>
          </Link>

          <nav className="hidden md:flex items-center" aria-label="Main navigation">
            <div className={`nav-dock ${scrolled ? "nav-dock-scrolled" : ""}`}>
              {navLinks.map((link) => {
                const isActive = link.page
                  ? link.href === "/blog"
                    ? pathname.startsWith("/blog")
                    : pathname === link.href
                  : pathname === "/" && link.id === activeSection;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`nav-link px-4 py-2 text-sm font-medium rounded-full relative ${isActive ? "active" : ""}`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="nav-active-indicator"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="theme-toggle"
              aria-label="Chat on WhatsApp"
            >
              <WhatsAppIcon size={15} />
            </a>
            <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ rotate: -120, opacity: 0, scale: 0.7 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 120, opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.22 }}
                >
                  {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
                </motion.div>
              </AnimatePresence>
            </button>
            <Link href="/contact" className="btn-primary text-sm px-6 py-2.5 gap-1.5">
              Book a call <ArrowUpRight size={13} />
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-1.5 shrink-0">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="theme-toggle"
              style={{ width: 34, height: 34 }}
              aria-label="Chat on WhatsApp"
            >
              <WhatsAppIcon size={14} />
            </a>
            <button onClick={toggleTheme} className="theme-toggle" style={{ width: 34, height: 34 }} aria-label="Toggle theme">
              {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-full transition-colors"
              style={{
                color: "var(--fg)",
                background: mobileOpen ? "var(--bg-elevated)" : "transparent",
                border: "1.5px solid var(--border)",
              }}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={mobileOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  {mobileOpen ? <X size={18} /> : <Menu size={18} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 md:hidden"
              style={{ background: "rgba(12,12,15,0.3)", backdropFilter: "blur(6px)" }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.97 }}
              transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
              className="fixed top-[76px] left-4 right-4 z-50 rounded-2xl p-5 md:hidden max-h-[calc(100dvh-5.5rem)] overflow-y-auto"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-xl)",
              }}
            >
              <div className="nav-mobile-info">
                <p className="nav-mobile-info-title">Digital product studio</p>
                <p className="nav-mobile-info-desc">
                  We design websites, build mobile apps, and set up AI automation so your business can grow faster.
                </p>
                <div className="nav-mobile-info-actions">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="nav-mobile-info-link">
                    <WhatsAppIcon size={13} /> WhatsApp
                  </a>
                  <a href="tel:+919511875269" className="nav-mobile-info-link">
                    +91 9511875269
                  </a>
                </div>
              </div>
              <nav className="flex flex-col gap-1 mb-4" aria-label="Mobile navigation">
                {navLinks.map((link, i) => {
                  const isActive = link.page
                  ? link.href === "/blog"
                    ? pathname.startsWith("/blog")
                    : pathname === link.href
                  : pathname === "/" && link.id === activeSection;
                  return (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.25 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`nav-mobile-link flex items-center justify-between px-4 py-3.5 text-sm font-medium rounded-xl transition-colors ${
                          isActive ? "active" : ""
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn-primary w-full py-3.5 text-sm">
                Book a call <ArrowUpRight size={13} />
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
