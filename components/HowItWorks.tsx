"use client";

import { motion } from "framer-motion";
import { Search, Cpu, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "We Understand Your Business",
    description:
      "We audit your current setup and identify precisely where intelligent automation and AI systems can generate the highest impact for your business — from lead capture to CRM automation.",
    chips: ["Discovery Call", "Business Audit", "Automation Roadmap"],
  },
  {
    number: "02",
    icon: Cpu,
    title: "We Build Your AI Automation System",
    description:
      "Our team designs, develops, and deploys your complete business automation system — AI chatbots, WhatsApp AI bots, voice agents, lead generation automation, and CRM integration — all in one cohesive stack.",
    chips: ["AI Integration", "WhatsApp Bot Setup", "Testing & QA"],
  },
  {
    number: "03",
    icon: Rocket,
    title: "Your Business Generates Leads Automatically",
    description:
      "Your intelligent automation system goes live and works for you 24/7. Leads come in, conversations are automated, CRM updates instantly, and your calendar fills — without lifting a finger.",
    chips: ["Go Live in 48h", "24/7 AI Automation", "Ongoing Support"],
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-28 px-6">
      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Our Process</span>
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1]">
            How Our Business
            <br />
            <span className="gradient-text">Automation System Works</span>
          </h2>
          <p className="mt-4 text-white/45 text-base max-w-md mx-auto">
            From discovery to a fully deployed AI automation system — in days, not months.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="flex flex-col gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="group glass-card p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              {/* Number */}
              <span
                className="text-6xl font-bold leading-none select-none shrink-0 tabular-nums"
                style={{
                  fontVariantNumeric: "tabular-nums",
                  color: "rgba(124,58,237,0.2)",
                }}
              >
                {step.number}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-purple-600/15 border border-purple-500/20 flex items-center justify-center shrink-0 group-hover:bg-purple-600/25 transition-colors">
                <step.icon size={20} className="text-purple-400" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{step.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {step.chips.map((chip) => (
                    <span key={chip} className="tag-chip">{chip}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
