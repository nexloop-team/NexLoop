"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";

const projects = [
  {
    id: 1,
    title: "Vighnaharta Engineers",
    description: "Corporate website designed and developed for a precision manufacturing company in Pune. Focused on credibility, lead generation, and professional presentation.",
    tags: ["Website Design", "Next.js", "Business Website"],
    image: "/images/work/vighnaharta.jpg",
    alt: "Vighnaharta Engineers corporate website designed and developed by NexLoop",
    link: "https://www.vighanahartaengineers.in/"
  },
  {
    id: 2,
    title: "DTBM",
    description: "Modern landing page experience focused on bold typography, storytelling, and immersive design aesthetics.",
    tags: ["Frontend", "Next.js", "Creative Design"],
    image: "/images/work/dtbm.jpg",
    alt: "DTBM landing page designed and developed by NexLoop",
    link: "https://dtbm.vercel.app/"
  }
];

export function FeaturedWork() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="work" className="relative z-10 w-full overflow-hidden bg-transparent py-24">
      <div className="mx-auto max-w-[96rem] px-6 sm:px-10 lg:px-14">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col gap-6 sm:mb-24 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: EASE_OUT_EXPO }}
            className="flex flex-col gap-4"
          >
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-label-foreground">
              Selected Work
            </span>
            <h2 className="max-w-[600px] text-2xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              A small selection of projects we&apos;ve designed and developed.
            </h2>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 1,
                delay: shouldReduceMotion ? 0 : 0.1 * (idx % 2),
                ease: EASE_OUT_EXPO,
              }}
              className="group flex flex-col"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-foreground/[0.02] p-4 backdrop-blur-md transition-all duration-500 hover:border-foreground/20 hover:bg-foreground/[0.04] sm:p-6"
              >
                {/* Image Container */}
                <div className="relative mb-8 aspect-[16/10] overflow-hidden rounded-2xl bg-black/20">
                  <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl border border-white/5" />
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[1s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Project Meta */}
                <div className="flex flex-1 flex-col px-2 pb-2">
                  {/* Tags */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-foreground/[0.05] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-label-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title & Description */}
                  <h3 className="mb-3 text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mb-8 max-w-lg text-[15px] font-light leading-[1.8] text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Button */}
                  <div className="mt-auto flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.15em] text-foreground transition-colors group-hover:text-muted-foreground">
                    Visit Website <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
