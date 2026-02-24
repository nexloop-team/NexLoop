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
      "Real estate agents and agencies use NexLoop's AI automation services to capture buyer and seller leads 24/7, auto-qualify them via AI chatbot, and book property viewings automatically — freeing you to focus on closing deals.",
    outcomes: ["AI-qualify buyer intent", "Auto-schedule viewings", "WhatsApp AI bot follow-ups", "SEO property listing pages"],
    tools: ["AI Chatbot Automation", "WhatsApp AI Bot", "Booking System", "CRM Automation"],
  },
  {
    id: "clinics",
    icon: Stethoscope,
    label: "Clinics",
    title: "Fill Your Schedule, Reduce No-Shows",
    description:
      "Medical clinics and wellness centres deploy NexLoop's intelligent automation systems to handle appointment booking, patient FAQs, and reminder sequences — cutting admin workload by 60% while improving patient satisfaction.",
    outcomes: ["Online appointment booking", "Automated reminders", "AI-powered patient FAQ bot", "Review collection automation"],
    tools: ["AI Voice Agent", "WhatsApp AI Bot", "Booking Flow", "CRM Automation"],
  },
  {
    id: "coaching",
    icon: GraduationCap,
    label: "Coaching",
    title: "Sell Your Expertise While You Sleep",
    description:
      "Coaches and consultants use NexLoop's lead generation automation to build authority websites, run discovery call funnels, and nurture prospects with AI-powered email and WhatsApp sequences — all on autopilot.",
    outcomes: ["Discovery call funnels", "Automated email sequences", "Lead magnet delivery", "Conversational AI nurture"],
    tools: ["Landing Pages", "Lead Generation Automation", "Booking System", "CRM Automation"],
  },
  {
    id: "agencies",
    icon: Briefcase,
    label: "Agencies",
    title: "Scale Client Delivery with AI Automation",
    description:
      "Marketing and service agencies use NexLoop to build AI automation systems for clients, automate reporting, and offer business automation services as a recurring revenue stream — all white-labelled.",
    outcomes: ["White-label AI automation", "Client reporting dashboards", "Lead gen automation as a service", "Scalable business systems"],
    tools: ["White-label Setup", "Client Portal", "AI Automation Workflows", "Analytics"],
  },
];

export default function UseCases() {
  const [active, setActive] = useState("real-estate");
  const activeCase = useCases.find((u) => u.id === active)!;

  return (
    <section id="use-cases" className="relative py-16 sm:py-28 px-4 sm:px-6">
      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="section-label">Use Cases</span>
          <h2 className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
            AI Automation Across
            <br />
            <span className="gradient-text">Every Industry</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-white/45 text-sm sm:text-base max-w-lg mx-auto">
            Our intelligent automation systems are tailored to the unique needs of every modern business.
          </p>
        </motion.div>

        {/* Tab Switcher — horizontal scroll on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 sm:mb-8"
        >
          {/* Scrollable container on mobile */}
          <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0 sm:flex-wrap sm:justify-center scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {useCases.map((uc) => (
              <button
                key={uc.id}
                onClick={() => setActive(uc.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 min-h-[44px] ${active === uc.id
                  ? "btn-primary text-white"
                  : "btn-ghost text-white/50 hover:text-white"
                  }`}
              >
                <uc.icon size={14} />
                {uc.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="glass-card p-6 sm:p-8 md:p-10"
          >
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
              {/* Left */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4 sm:mb-5">
                  <div className="w-9 h-9 rounded-xl bg-purple-600/12 border border-purple-500/20 flex items-center justify-center">
                    <activeCase.icon size={16} className="text-purple-400" />
                  </div>
                  <span className="section-label">{activeCase.label}</span>
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3 tracking-tight">
                  {activeCase.title}
                </h3>

                <p className="text-white/45 leading-relaxed text-sm max-w-lg">
                  {activeCase.description}
                </p>
              </div>

              {/* Right */}
              <div className="flex flex-row md:flex-col gap-6 md:w-60 md:shrink-0">
                <div className="flex-1 md:flex-none">
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

                <div className="flex-1 md:flex-none">
                  <h4 className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-3">
                    AI Tools Deployed
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeCase.tools.map((t) => (
                      <span key={t} className="tag-chip text-xs">{t}</span>
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
