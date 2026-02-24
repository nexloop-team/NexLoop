"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Stethoscope, GraduationCap, Briefcase } from "lucide-react";

interface UseCase {
  id: string;
  icon: React.ElementType;
  label: string;
  title: string;
  description: string;
  outcomes: string[];
  tools: string[];
}

const useCases: UseCase[] = [
  {
    id: "real-estate",
    icon: Building2,
    label: "Real Estate",
    title: "Turn Every Inquiry into a Showing",
    description:
      "Real estate agents and agencies use NexLoop to capture buyer/seller leads 24/7, auto-qualify them via AI chat, and book viewings on autopilot — all while you focus on closing deals.",
    outcomes: ["Auto-qualify buyer intent", "Schedule property showings", "WhatsApp drip follow-ups", "Property listing pages"],
    tools: ["AI Chatbot", "WhatsApp Bot", "Booking System", "CRM Sync"],
  },
  {
    id: "clinics",
    icon: Stethoscope,
    label: "Clinics",
    title: "Fill Your Schedule, Reduce No-Shows",
    description:
      "Medical clinics and wellness centers automate appointment booking, patient FAQs, and reminder sequences — reducing admin workload by 60% while improving patient satisfaction.",
    outcomes: ["Online appointment booking", "Automated reminders", "Patient FAQ bot", "Review collection system"],
    tools: ["Voice Agent", "WhatsApp Bot", "Booking Flow", "Feedback System"],
  },
  {
    id: "coaching",
    icon: GraduationCap,
    label: "Coaching",
    title: "Sell Your Expertise While You Sleep",
    description:
      "Coaches and consultants use NexLoop to build authority websites, run discovery call funnels, and nurture prospects with AI-powered email and WhatsApp sequences.",
    outcomes: ["Discovery call funnels", "Automated email sequences", "Lead magnet delivery", "Community building tools"],
    tools: ["Landing Pages", "AI Follow-up", "Booking System", "Email Flows"],
  },
  {
    id: "agencies",
    icon: Briefcase,
    label: "Agencies",
    title: "Scale Client Delivery with AI",
    description:
      "Marketing and service agencies use NexLoop to build lead gen systems for clients, automate reporting, and offer AI services as a recurring revenue stream.",
    outcomes: ["White-label AI solutions", "Client reporting dashboards", "Lead gen as a service", "Scalable delivery systems"],
    tools: ["White-label Setup", "Client Portal", "AI Workflows", "Analytics"],
  },
];

export default function UseCases() {
  const [active, setActive] = useState("real-estate");
  const activeCase = useCases.find((u) => u.id === active)!;

  return (
    <section id="use-cases" className="relative py-28 px-6">
      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label">Use Cases</span>
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1]">
            Built for Every
            <br />
            <span className="gradient-text">Growth-Focused Business</span>
          </h2>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {useCases.map((uc) => (
            <button
              key={uc.id}
              onClick={() => setActive(uc.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${active === uc.id
                ? "btn-primary text-white"
                : "btn-ghost text-white/50 hover:text-white"
                }`}
            >
              <uc.icon size={14} />
              {uc.label}
            </button>
          ))}
        </motion.div>

        {/* Content Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="glass-card p-8 md:p-10"
          >
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-purple-600/12 border border-purple-500/20 flex items-center justify-center">
                    <activeCase.icon size={16} className="text-purple-400" />
                  </div>
                  <span className="section-label">{activeCase.label}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
                  {activeCase.title}
                </h3>

                <p className="text-white/45 leading-relaxed text-sm max-w-lg">
                  {activeCase.description}
                </p>
              </div>

              {/* Right */}
              <div className="flex flex-col gap-6 md:w-60 shrink-0">
                <div>
                  <h4 className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-3">
                    Key Outcomes
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {activeCase.outcomes.map((o) => (
                      <li key={o} className="flex items-center gap-2 text-sm text-white/60">
                        <div className="w-1 h-1 rounded-full bg-purple-400 shrink-0" />
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-3">
                    Tools Deployed
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeCase.tools.map((t) => (
                      <span key={t} className="tag-chip">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
