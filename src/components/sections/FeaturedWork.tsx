"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";

const projects = [
  {
    id: 1,
    title: "AI Voice Agent Platform",
    description: "Automated inbound and outbound customer conversations.",
    // Premium abstract tech imagery
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Healthcare Appointment System",
    description: "AI-powered patient scheduling and reminders.",
    // Premium abstract light/clean imagery
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "WhatsApp Automation Suite",
    description: "Lead capture and customer engagement automation.",
    // Premium dark abstract imagery
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Custom SaaS Dashboard",
    description: "Business intelligence and workflow management.",
    // Premium interface/data abstract imagery
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
  },
];

export function FeaturedWork() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="work"
      className="relative overflow-hidden bg-background/50 peerly-blurred backdrop-blur-sm py-40 sm:py-28 lg:py-46"
    >
      <div className="relative z-10 mx-auto max-w-[96rem] px-6 sm:px-10 lg:px-24">
        {/* ── Section Header ───────────────────────────────────── */}
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: EASE_OUT_EXPO }}
          >
            <div className="mb-4 flex items-center justify-between sm:mb-6">
              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-label-foreground">
                Featured Work
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.1, ease: EASE_OUT_EXPO }}
            className="text-balance text-[1.5rem] font-light uppercase leading-[1.3] tracking-[0.05em] text-foreground sm:text-3xl md:text-4xl lg:text-[2.75rem]"
          >
            We create AI systems, websites, mobile apps, and automation
            experiences that help businesses scale.
          </motion.h2>
        </div>

        {/* ── Projects Grid ────────────────────────────────────── */}
        <div className="mt-28 grid grid-cols-1 gap-y-16 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-20 lg:mt-36 lg:gap-x-12 xl:gap-x-16">
          {projects.map((project, idx) => (
            <motion.a
              key={project.id}
              href="#"
              className="group flex flex-col transition-transform duration-[0.8s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-3"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 1.2,
                delay: shouldReduceMotion ? 0 : 0.1 * (idx % 2),
                ease: EASE_OUT_EXPO,
              }}
            >
              {/* Image Container */}
              <div className="relative mb-6 overflow-hidden rounded-[20px] bg-surface/30 aspect-[4/3] sm:mb-8">
                {/* Subtle Inner Border for Premium Edge */}
                <div className="absolute inset-0 z-10 rounded-[20px] border border-foreground/5 transition-colors duration-500 group-hover:border-foreground/15 pointer-events-none" />
                
                {/* Overlay shadow to integrate image with dark background */}
                <div className="absolute inset-0 z-[1] bg-black/10 transition-opacity duration-500 group-hover:bg-black/0 pointer-events-none" />

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Project Meta */}
              <div className="mt-6 flex flex-col gap-2 px-1">
                <h3 className="text-[13px] font-medium uppercase tracking-[0.08em] text-foreground transition-colors duration-300 group-hover:text-foreground sm:text-[15px]">
                  {project.title}
                </h3>
                <p className="text-[12px] font-light tracking-wide text-muted-foreground sm:text-[13.5px]">
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
