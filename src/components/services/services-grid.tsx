"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";

const services = [ {
    title: "Web Development",
    description:
      "Custom websites, landing pages, dashboards, SaaS platforms, and modern web experiences.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications built for growth, performance, and user engagement.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "AI Automation",
    description:
      "Automate repetitive business processes, lead qualification, internal workflows, CRM updates, and operational tasks.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "AI Chatbots",
    description:
      "Website chatbots trained on your business that answer questions, capture leads, and support customers.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
  {
    title: "AI Voice Agents",
    description:
      "Human-like AI voice agents for appointment booking, customer support, and lead qualification.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    title: "WhatsApp Automation",
    description:
      "Automate conversations, follow-ups, reminders, and lead generation directly through WhatsApp.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
 
];

export function ServicesGrid() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative mx-auto w-full max-w-[96rem] px-6 py-24 sm:px-10 lg:px-14">
      {/* Title */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: EASE_OUT_EXPO }}
        className="mb-16 md:mb-24"
      >
        <h2 className="text-[11px] font-medium uppercase tracking-[0.3em] text-label-foreground">
          Our Services
        </h2>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 1,
              delay: index * 0.1,
              ease: EASE_OUT_EXPO,
            }}
            className="group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-foreground/5 bg-foreground/[0.01] p-8 backdrop-blur-md transition-all duration-500 hover:border-foreground/20 hover:bg-foreground/[0.04]"
          >
            {/* Top Row: Icon & Arrow */}
            <div className="mb-12 flex items-start justify-between text-label-foreground transition-colors duration-500 group-hover:text-foreground">
              <div className="rounded-full bg-foreground/5 p-4 transition-colors duration-500 group-hover:bg-foreground/10">
                {service.icon}
              </div>
              <svg
                className="h-5 w-5 -translate-x-2 translate-y-2 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>

            {/* Content */}
            <h3 className="mb-4 text-xl font-light tracking-widest text-foreground transition-colors duration-500">
              {service.title}
            </h3>
            <p className="text-[13px] font-light leading-relaxed tracking-wide text-muted-foreground transition-colors duration-500 group-hover:text-foreground">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
