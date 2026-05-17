"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Sparkles } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

type NavLink = { label: string; href: string; id: string };

const navLinks: NavLink[] = [
  { label: "Services", href: "/#services", id: "services" },
  { label: "Process", href: "/#process", id: "process" },
  { label: "Reviews", href: "/#reviews", id: "reviews" },
  { label: "Blog", href: "/blog", id: "blog" },
  { label: "Contact", href: "/#contact", id: "contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("services");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
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
    if (pathname !== "/") {
      setActiveSection(pathname === "/blog" ? "blog" : "services");
      return;
    }

    const ids = navLinks.map((link) => link.id).filter((id) => id !== "blog");
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.2, 0.4, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
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
        <div className="container-xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="NexLoop Home">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="flex items-center"
            >
              <Image
                src="/logo1.png"
                alt="NexLoop"
                width={200}
                height={48}
                priority
                className="logo-mark h-[36px] w-auto origin-left scale-[4.9]"
              />
            </motion.div>
          </Link>

          <nav className="hidden md:flex items-center" aria-label="Main navigation">
            <div className={`nav-dock ${scrolled ? "nav-dock-scrolled" : ""}`}>
              {navLinks.map((link) => {
                const isActive = pathname === "/blog" ? link.id === "blog" : link.id === activeSection;
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
                    {link.label === "Blog" && (
                      <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span
                          className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50"
                          style={{ background: "var(--accent)" }}
                        />
                        <span
                          className="relative inline-flex rounded-full h-3 w-3"
                          style={{ background: "var(--accent)", transform: "scale(0.65)" }}
                        />
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </nav>

          <div className="hidden md:flex items-center gap-3">
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
            <Link href="/#contact" className="btn-primary text-sm px-6 py-2.5 gap-1.5">
              <Sparkles size={13} />
              Start a project
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-2">
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
              className="fixed top-[68px] left-4 right-4 z-50 rounded-2xl p-5 md:hidden"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-xl)",
              }}
            >
              <nav className="flex flex-col gap-1 mb-4" aria-label="Mobile navigation">
                {navLinks.map((link, i) => {
                  const isActive = pathname === "/blog" ? link.id === "blog" : link.id === activeSection;
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
                        {link.label === "Blog" && (
                          <span
                            className="text-xs font-bold px-2 py-0.5 rounded-full"
                            style={{ background: "var(--accent-subtle)", color: "var(--accent)" }}
                          >
                            New
                          </span>
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
              <Link href="/#contact" onClick={() => setMobileOpen(false)} className="btn-primary w-full py-3.5 text-sm">
                <Sparkles size={13} />
                Start a project →
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
