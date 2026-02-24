"use client";

import { motion } from "framer-motion";
import { Bot, Globe, BarChart3, Clock, ArrowUpRight } from "lucide-react";

const features = [
  {
    tag: "AI Chatbot Automation",
    title: "Replace Repetitive Tasks with AI",
    description:
      "Deploy conversational AI systems that handle customer queries, qualify leads, schedule appointments, and send follow-ups — around the clock. Our AI chatbot automation integrates directly into your existing workflows.",
    chips: ["Chatbot Automation", "Scheduling", "FAQ Handling"],
    icon: Bot,
    mockup: "chat",
  },
  {
    tag: "Lead Generation Automation",
    title: "Turn Traffic into Pipeline — Automatically",
    description:
      "AI-powered lead capture and nurture systems that engage every visitor, qualify intent in real time, and push warm leads into your CRM automatically. Built for modern businesses that demand measurable ROI.",
    chips: ["Lead Capture", "AI Qualification", "CRM Sync"],
    icon: BarChart3,
    mockup: "dashboard",
  },
  {
    tag: "Website Development",
    title: "High-Converting Websites for Modern Businesses",
    description:
      "We design and build blazing-fast, SEO-optimized websites engineered to convert visitors into paying customers — with mobile-first design, structured data, and business automation systems built in from day one.",
    chips: ["Custom Design", "SEO-Optimized", "Mobile-First"],
    icon: Globe,
    mockup: "web",
  },
  {
    tag: "CRM & Workflow Automation",
    title: "Run Your Business on Autopilot",
    description:
      "Intelligent automation pipelines that work while you sleep — capturing leads, sending follow-ups, syncing your CRM, and triggering next steps without any manual effort. The backbone of every modern business automation system.",
    chips: ["WhatsApp Automation", "CRM Automation", "Auto-Triggers"],
    icon: Clock,
    mockup: "workflow",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.23, 1, 0.32, 1] },
  }),
};

function ChatMockup() {
  return (
    <div className="mockup-shell h-full min-h-[180px] p-4 flex flex-col gap-3">
      <div className="mockup-topbar">
        <div className="mockup-dot" />
        <div className="mockup-dot" />
        <div className="mockup-dot" />
      </div>
      <div className="flex flex-col gap-2 p-2">
        <div className="flex items-start gap-2">
          <div className="w-6 h-6 rounded-full bg-purple-600/30 flex-shrink-0 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-purple-500" />
          </div>
          <div className="bg-white/5 border border-white/8 rounded-xl rounded-tl-sm px-3 py-2">
            <p className="text-xs text-white/70">Hi! How can I help you today?</p>
            <p className="text-[10px] text-white/30 mt-1">I can qualify leads, answer FAQs, or book a call for you — 24/7</p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-purple-600/20 border border-purple-500/20 rounded-xl rounded-tr-sm px-3 py-2">
            <p className="text-xs text-white/80">Book me a discovery call.</p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <div className="w-6 h-6 rounded-full bg-purple-600/30 flex-shrink-0 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-purple-500" />
          </div>
          <div className="bg-white/5 border border-white/8 rounded-xl rounded-tl-sm px-3 py-2">
            <p className="text-[10px] text-white/60">✓ Call booked for Thursday 3pm. Confirmation sent.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardMockup() {
  const items = [
    { label: "AI Chatbot leads today", sub: "+14 new leads qualified", color: "text-purple-400" },
    { label: "WhatsApp automation", sub: "38 messages sent automatically", color: "text-blue-400" },
    { label: "CRM sync status", sub: "All pipelines up to date", color: "text-green-400" },
  ];
  return (
    <div className="mockup-shell h-full min-h-[180px]">
      <div className="mockup-topbar">
        <div className="mockup-dot" /><div className="mockup-dot" /><div className="mockup-dot" />
      </div>
      <div className="p-3 flex flex-col gap-1">
        {items.map((item) => (
          <div key={item.label} className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-white/[0.03] transition-colors">
            <div>
              <p className="text-xs font-medium text-white/80">{item.label}</p>
              <p className="text-[10px] text-white/40">{item.sub}</p>
            </div>
            <div className={`w-4 h-4 ${item.color} opacity-70`}>
              {item.color.includes("green") ? "✓" : item.color.includes("blue") ? "↑" : "○"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function WebMockup() {
  return (
    <div className="mockup-shell h-full min-h-[180px]">
      <div className="mockup-topbar">
        <div className="mockup-dot" /><div className="mockup-dot" /><div className="mockup-dot" />
        <div className="flex-1 h-4 bg-white/5 rounded ml-2 flex items-center px-2">
          <span className="text-[9px] text-white/30">nexloop.app</span>
        </div>
      </div>
      <div className="p-4 space-y-2">
        <div className="h-3 bg-white/10 rounded-full w-3/4" />
        <div className="h-2 bg-white/5 rounded-full w-full" />
        <div className="h-2 bg-white/5 rounded-full w-5/6" />
        <div className="mt-3 flex gap-2">
          <div className="h-6 bg-purple-600/50 rounded-lg w-20" />
          <div className="h-6 bg-white/5 border border-white/10 rounded-lg w-20" />
        </div>
      </div>
    </div>
  );
}

function WorkflowMockup() {
  const steps = ["Lead captured via AI", "WhatsApp message sent", "CRM updated instantly", "Follow-up scheduled"];
  return (
    <div className="mockup-shell h-full min-h-[180px] p-4">
      <div className="space-y-2">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center gap-2">
            <div className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold ${i < 3 ? 'bg-purple-600 text-white' : 'bg-white/10 text-white/30'}`}>{i + 1}</div>
            <div className={`flex-1 h-6 rounded-lg flex items-center px-2 text-[10px] ${i < 3 ? 'bg-purple-600/20 border border-purple-500/20 text-white/70' : 'bg-white/5 border border-white/8 text-white/30'}`}>
              {step}
            </div>
            {i < 3 && <span className="text-purple-400 text-[10px]">✓</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  const mockups: Record<string, JSX.Element> = {
    chat: <ChatMockup />,
    dashboard: <DashboardMockup />,
    web: <WebMockup />,
    workflow: <WorkflowMockup />,
  };

  return (
    <section id="services" className="relative py-28 px-6">
      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Our Services</span>
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1]">
            AI Automation Services
            <br />
            <span className="gradient-text">Built to Generate Results</span>
          </h2>
          <p className="mt-4 text-white/45 text-base max-w-xl mx-auto leading-relaxed">
            We don&apos;t just build websites — we deploy complete business automation systems that
            capture leads, qualify prospects, and grow revenue on autopilot.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="space-y-8">
          {features.map((f, i) => (
            <motion.div
              key={f.tag}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className={`grid grid-cols-1 md:grid-cols-2 gap-0 glass-card overflow-hidden ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}
            >
              {/* Text side */}
              <div className={`p-8 md:p-10 flex flex-col justify-center gap-5 ${i % 2 === 1 ? "md:[direction:ltr]" : ""}`}>
                <span className="section-label w-fit">{f.tag}</span>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-white/45 text-sm leading-relaxed">
                    {f.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {f.chips.map((chip) => (
                    <span key={chip} className="tag-chip">{chip}</span>
                  ))}
                </div>
                <a href="#contact" className="flex items-center gap-1.5 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors w-fit group">
                  Get started <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Mockup side */}
              <div className={`border-t md:border-t-0 ${i % 2 === 1 ? "md:border-r border-white/[0.07] md:[direction:ltr]" : "md:border-l border-white/[0.07]"} bg-black/40 p-6 flex items-center`}>
                <div className="w-full">
                  {mockups[f.mockup]}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
