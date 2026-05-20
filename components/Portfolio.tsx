"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import Image from "next/image";
import { useLenis } from "@/components/LenisProvider";
import { useIsMobile } from "@/lib/useIsMobile";

const ACCENT = "var(--accent)";

type Project = {
  title: string;
  category: string;
  year: string;
  desc: string;
  outcome: string;
  tags: string[];
  image: string;
  liveUrl: string | null;
  summary: string;
  results: string[];
  type: "website" | "app" | "automation";
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "NexLoop Studio",
    category: "Website",
    year: "2026",
    desc: "Brand site built with Next.js — minimal layout, fast performance, clear service positioning.",
    outcome: "Editorial layout · App Router · Dark theme",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    image: "/logo1.png",
    liveUrl: "https://nexloop.in",
    summary:
      "Our own studio site: typography-led sections, restrained motion, and a contact flow tuned for inbound leads.",
    results: ["Sub-2s load target", "Mobile-first", "SEO-ready structure"],
    type: "website",
    featured: true,
  },
  {
    title: "SaaS Landing",
    category: "Website",
    year: "2025",
    desc: "Product landing with pricing, FAQs, and conversion-focused CTAs.",
    outcome: "Clear messaging · Strong CTA hierarchy",
    tags: ["Web Design", "Landing Page"],
    image: "/images/website-2.svg",
    liveUrl: null,
    summary:
      "A product-focused landing experience designed to move visitors from interest to demo request.",
    results: ["Conversion-led layout", "Accessible components", "Analytics-ready"],
    type: "website",
  },
  {
    title: "Mobile Product",
    category: "App",
    year: "2025",
    desc: "Onboarding-led mobile flow with notifications and team spaces.",
    outcome: "Guided onboarding · Retention-focused UX",
    tags: ["Flutter", "Product UI"],
    image: "/images/app-2.svg",
    liveUrl: null,
    summary: "Mobile experience focused on activation and repeat usage after first session.",
    results: ["Streamlined onboarding", "Push-ready architecture", "Play Store assets"],
    type: "app",
  },
  {
    title: "Lead Automation",
    category: "Automation",
    year: "2025",
    desc: "Capture, score, and route leads into CRM with minimal manual work.",
    outcome: "24/7 routing · CRM sync",
    tags: ["Automation", "CRM"],
    image: "/images/automation-1.svg",
    liveUrl: null,
    summary: "Workflow automation connecting forms, WhatsApp, and pipeline tools.",
    results: ["Automated follow-ups", "Lead scoring", "Pipeline visibility"],
    type: "automation",
  },
];

const filters = ["All", "Website", "App", "Automation"] as const;
type Filter = (typeof filters)[number];

function isLogo(image: string) {
  return image.includes("logo");
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-8"
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
        onClick={onClose}
        style={{ background: "rgba(10,10,14,0.6)", backdropFilter: "blur(8px)" }}
      />
      <motion.div
        initial={{ y: 24, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 24, opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
        data-lenis-prevent
        className="relative w-full max-w-2xl rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          boxShadow: "var(--shadow-xl)",
        }}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full z-10"
          style={{
            border: "1px solid var(--border)",
            background: "var(--bg-elevated)",
            color: "var(--fg)",
          }}
        >
          <X size={14} />
        </button>
        <div
          className={`relative w-full h-52 sm:h-64 flex items-center justify-center overflow-hidden ${
            isLogo(project.image) ? "p-12" : ""
          }`}
          style={{ background: "var(--bg-elevated)" }}
        >
          {isLogo(project.image) ? (
            <Image src={project.image} alt={project.title} width={200} height={56} className="h-12 w-auto" />
          ) : (
            <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
          )}
        </div>
        <div className="p-6 sm:p-8">
          <p className="label">
            {project.category} · {project.year}
          </p>
          <h3 className="headline-md mt-2">{project.title}</h3>
          <p className="body-md mt-3 max-w-lg" style={{ color: "var(--fg-secondary)" }}>
            {project.summary}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium px-2.5 py-1 rounded-md"
                style={{
                  background: "var(--bg-elevated)",
                  color: "var(--fg-secondary)",
                  border: "1px solid var(--border)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <ul className="mt-6 space-y-2">
            {project.results.map((result) => (
              <li
                key={result}
                className="text-sm flex items-center gap-2"
                style={{ color: "var(--fg-secondary)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: ACCENT }} />
                {result}
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap gap-3">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary px-6 py-3 text-sm"
              >
                View live <ArrowUpRight size={14} />
              </a>
            ) : (
              <a href="#contact" className="btn-primary px-6 py-3 text-sm">
                Request case study <ArrowUpRight size={14} />
              </a>
            )}
            <a href="#contact" className="btn-ghost px-6 py-3 text-sm">
              Discuss a similar build
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function FeaturedProject({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const logo = isLogo(project.image);

  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
      className="work-featured group w-full text-left"
      aria-label={`View ${project.title}`}
    >
      <div className="work-featured-media">
        {logo ? (
          <div className="work-featured-logo">
            <Image src={project.image} alt={project.title} width={240} height={64} className="h-14 w-auto" />
          </div>
        ) : (
          <img src={project.image} alt={project.title} className="work-featured-img" loading="eager" />
        )}
        <div className="work-featured-shine" aria-hidden />
        <div className="work-featured-gradient" />
      </div>
      <div className="work-featured-footer">
        <div>
          <span className="work-badge">Featured project</span>
          <h3 className="work-featured-title">{project.title}</h3>
          <p className="work-featured-outcome">{project.outcome}</p>
        </div>
        <span className="work-featured-cta">
          View case <ArrowUpRight size={16} className="work-arrow-icon" />
        </span>
      </div>
    </motion.button>
  );
}

function ProjectRow({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const logo = isLogo(project.image);

  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="work-row group w-full text-left"
      aria-label={`View ${project.title}`}
    >
      <span className="work-row-index">{String(index + 1).padStart(2, "0")}</span>
      <div className="work-row-body">
        <div className="work-row-copy">
          <p className="work-row-meta">
            {project.category} · {project.year}
          </p>
          <h3 className="work-row-title">{project.title}</h3>
          <p className="work-row-desc">{project.desc}</p>
          <div className="work-row-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="work-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="work-row-preview">
          <div className={`work-row-thumb ${logo ? "work-row-thumb--logo" : ""}`}>
            {logo ? (
              <Image src={project.image} alt="" width={120} height={32} className="h-7 w-auto opacity-80" />
            ) : (
              <img src={project.image} alt="" className="work-row-thumb-img" loading="lazy" />
            )}
          </div>
          <span className="work-row-arrow" aria-hidden>
            <ArrowUpRight size={20} />
          </span>
        </div>
      </div>
    </motion.button>
  );
}

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<Filter>("All");
  const lenis = useLenis();
  const isMobile = useIsMobile();

  const featured = projects.find((p) => p.featured) ?? projects[0];
  const listProjects = projects.filter((p) => p !== featured);

  const filteredList =
    filter === "All"
      ? listProjects
      : listProjects.filter((p) => p.category === filter);

  const visibleList = isMobile ? filteredList.slice(0, 2) : filteredList;

  useEffect(() => {
    if (!lenis) return;
    if (activeProject) lenis.stop();
    else lenis.start();
  }, [activeProject, lenis]);

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
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-8 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-header mb-0"
          >
            <span className="eyebrow mb-5">Selected work</span>
            <h2 className="headline-lg mt-4 md:mt-5">
              Work that <span className="brand-text">converts</span>.
            </h2>
            <p className="body-md mt-3 md:hidden" style={{ color: "var(--fg-muted)" }}>
              Tap a project for details.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="hidden md:flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filter projects"
          >
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={`work-filter ${filter === f ? "work-filter--active" : ""}`}
              >
                {f}
              </button>
            ))}
          </motion.div>
        </div>

        <FeaturedProject project={featured} onOpen={() => setActiveProject(featured)} />

        <div className="work-list mt-6 sm:mt-8">
          <AnimatePresence mode="popLayout">
            {visibleList.map((project, i) => (
              <ProjectRow
                key={project.title}
                project={project}
                index={i}
                onOpen={() => setActiveProject(project)}
              />
            ))}
          </AnimatePresence>
        </div>

        {isMobile && filteredList.length > 2 && (
          <p className="body-sm text-center py-4 md:hidden" style={{ color: "var(--fg-muted)" }}>
            +{filteredList.length - 2} more on desktop
          </p>
        )}

        {filteredList.length === 0 && (
          <p className="body-md py-12 text-center" style={{ color: "var(--fg-muted)" }}>
            No projects in this category yet.
          </p>
        )}

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="work-cta-banner group"
        >
          <div>
            <p className="work-cta-label">Next slot open</p>
            <p className="work-cta-title">Let&apos;s build your next project</p>
          </div>
          <span className="work-cta-link">
            Start a project <ArrowUpRight size={18} className="work-arrow-icon" />
          </span>
        </motion.a>
      </div>

      <AnimatePresence>
        {activeProject && (
          <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
