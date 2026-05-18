"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

const projects = [
  {
    title: "Website Featured",
    category: "Website",
    year: "2026",
    desc: "High-converting homepage with SEO, analytics, and booking flows.",
    metric: "+2.8x conversions",
    tags: ["Web App", "SaaS", "Full Stack"],
    image: "/images/website-1.svg",
    liveUrl: "https://alpha-website.example",
    summary:
      "A conversion-first website with optimized landing pages and clear user journeys.",
    results: ["+2.8x conversions", "-31% bounce rate", "Faster lead capture"],
    type: "website",
  },
  {
    title: "App Mock",
    category: "Mobile App",
    year: "2025",
    desc: "Mobile app flow with onboarding, notifications, and team spaces.",
    metric: "+3.1x retention",
    tags: ["Mobile App", "SaaS", "Full Stack"],
    image: "/images/app-2.svg",
    liveUrl: "https://orbit-app.example",
    summary:
      "An onboarding-led mobile experience that increases engagement and retention.",
    results: ["+3.1x retention", "-40% churn", "Faster onboarding"],
    type: "app",
  },
  {
    title: "Automation Flow",
    category: "Automation",
    year: "2025",
    desc: "Workflow engine for lead capture, scoring, and routing.",
    metric: "-37% manual ops",
    tags: ["Automation", "AI", "Full Stack"],
    image: "/images/automation-1.svg",
    liveUrl: "https://core-automation.example",
    summary:
      "Automated lead workflows with scoring, enrichment, and CRM sync.",
    results: ["-37% manual ops", "24/7 routing", "Cleaner pipeline"],
    type: "automation",
  },
  {
    title: "AI Dashboard",
    category: "Dashboard",
    year: "2026",
    desc: "Realtime analytics with alerts, KPIs, and automation insights.",
    metric: "+64% response rate",
    tags: ["AI", "Automation", "Web App"],
    image: "/images/automation-2.svg",
    liveUrl: "https://pulse-automation.example",
    summary:
      "Dashboards that trigger alerts and follow-ups based on behavior.",
    results: ["+64% response rate", "-29% delays", "Live monitoring"],
    type: "dashboard",
  },
  {
    title: "Website Horizon",
    category: "Website",
    year: "2024",
    desc: "Product-focused landing with pricing, FAQs, and launch-ready CTAs.",
    metric: "+46% demo requests",
    tags: ["Web App", "SaaS", "Full Stack"],
    image: "/images/website-2.svg",
    liveUrl: "https://beta-website.example",
    summary:
      "A clean product site designed to move visitors from interest to action.",
    results: ["+46% demo requests", "+22% CTR", "Clearer messaging"],
    type: "website",
  },
];

const gridCards = [
  { id: "hero", area: "portfolio-hero", kind: "project", project: projects[0] },
  { id: "app", area: "portfolio-app", kind: "project", project: projects[1] },
  { id: "automation", area: "portfolio-automation", kind: "project", project: projects[2] },
  { id: "contact", area: "portfolio-contact", kind: "contact" },
  { id: "dashboard", area: "portfolio-dashboard", kind: "project", project: projects[3] },
];

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null);

  useEffect(() => {
    if (!activeProject) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveProject(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [activeProject]);

  return (
    <section id="portfolio" className="relative section-pad px-4 sm:px-8 section-warm overflow-hidden">
      <div className="container-xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="eyebrow mb-5">Projects</span>
          <h2 className="headline-lg mt-5">
            Projects that ship fast and <span className="brand-text">convert</span>.
          </h2>
          <p className="body-lg mt-4 max-w-xl">
            A mixed bento of websites, apps, and automations. Click any tile for details and live links.
          </p>
        </motion.div>

        <div className="portfolio-grid">
          {gridCards.map((card, i) => {
            if (card.kind === "contact") {
              return (
                <motion.article
                  key={card.id}
                  initial={{ opacity: 0, y: 24, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: [0.23, 1, 0.32, 1] }}
                  className={`portfolio-card group ${card.area}`}
                  style={{ aspectRatio: "16 / 10" }}
                >
                  <div className="p-6 flex h-full flex-col justify-between">
                    <div>
                      <p className="text-white/60 text-xs">Have a project?</p>
                      <p className="mt-2 text-2xl sm:text-3xl font-semibold text-white">Contact us</p>
                    </div>
                    <span className="text-xs font-semibold px-3 py-2 rounded-full w-fit" style={{ background: "rgba(255,255,255,0.14)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)" }}>
                      Start a project
                    </span>
                  </div>
                </motion.article>
              );
            }

            const project = card.project!;
            return (
              <motion.article
                key={card.id}
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.23, 1, 0.32, 1] }}
                className={`portfolio-card group ${card.area}`}
                style={{ aspectRatio: project.type === "app" ? "9 / 17.5" : "16 / 10" }}
              >
                <button
                  type="button"
                  onClick={() => setActiveProject(project)}
                  className="text-left w-full h-full"
                  aria-label={`Open ${project.title} details`}
                >
                  <div className="relative w-full h-full">
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <img
                      src={project.image}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 h-full w-full object-cover blur-2xl opacity-40 scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute inset-0 flex items-end p-5">
                      <div className="w-full opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <p className="text-xs font-semibold text-white/70">{project.category} · {project.year}</p>
                            <p className="mt-1 text-2xl sm:text-3xl font-bold text-white">{project.title}</p>
                            <p className="mt-2 text-sm text-white/75">{project.metric}</p>
                          </div>
                          <div className="flex flex-col gap-2">
                            <span className="text-xs font-semibold px-3 py-2 rounded-full" style={{ background: "rgba(255,255,255,0.14)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)" }}>
                              View Project
                            </span>
                            <span className="text-xs font-semibold px-3 py-2 rounded-full" style={{ background: "rgba(255,255,255,0.08)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)" }}>
                              Live Demo
                            </span>
                          </div>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-semibold px-2 py-1 rounded-full"
                              style={{ background: "rgba(0,0,0,0.45)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)" }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="sr-only">View project details</span>
                </button>
              </motion.article>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              className="absolute inset-0"
              aria-label="Close project details"
              onClick={() => setActiveProject(null)}
              style={{ background: "rgba(10,10,14,0.55)" }}
            />
            <motion.div
              initial={{ y: 24, scale: 0.98, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 24, scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
              className="relative w-full max-w-3xl rounded-2xl overflow-hidden"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow-xl)" }}
            >
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full"
                style={{ border: "1px solid var(--border)", background: "var(--bg-elevated)", color: "var(--fg)" }}
              >
                <X size={14} />
              </button>
              <div className="relative w-full h-56 sm:h-64">
                <img
                  src={activeProject.image}
                  alt={`${activeProject.title} preview`}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="label">Project</p>
                    <h3 className="headline-md mt-3">{activeProject.title}</h3>
                    <p className="body-lg mt-3 max-w-xl">{activeProject.summary}</p>
                  </div>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)", color: "var(--fg-secondary)" }}
                  >
                    {activeProject.metric}
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {activeProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-semibold px-2.5 py-1 rounded-md tracking-wide"
                      style={{ background: "var(--bg-elevated)", color: "var(--fg-secondary)", border: "1px solid var(--border)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <p className="label mb-3">Results</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {activeProject.results.map((result) => (
                      <div
                        key={result}
                        className="card p-4 text-sm font-semibold"
                        style={{ color: "var(--fg)", background: "var(--bg-elevated)" }}
                      >
                        {result}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary px-6 py-3 text-sm"
                  >
                    View live project <ArrowUpRight size={14} />
                  </a>
                  <a href="/#contact" className="btn-ghost px-6 py-3 text-sm">
                    Request details
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
