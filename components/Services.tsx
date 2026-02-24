"use client";

import { motion } from "framer-motion";
import { Bot, Globe, BarChart3, Clock, ArrowUpRight } from "lucide-react";

const features = [
  {
    tag: "AI Assistant",
    title: "Delegate Daily Tasks",
    description:
      "From managing calendars to drafting emails and summarizing meetings, our AI assistants work around the clock to keep your business running smarter and faster.",
    chips: ["Summaries", "Scheduling", "Many more"],
    icon: Bot,
    mockup: "chat",
  },
  {
    tag: "Sales & Marketing",
    title: "Accelerate Sales Growth",
    description:
      "AI tools for lead generation, personalized outreach, and automated content creation that scales your sales efforts and builds stronger brand presence.",
    chips: ["Leads", "Content", "Social post"],
    icon: BarChart3,
    mockup: "dashboard",
  },
  {
    tag: "Website Dev",
    title: "High-Converting Websites",
    description:
      "We design and build blazing-fast websites engineered to convert visitors into paying customers with SEO-optimized structure and mobile-first design.",
    chips: ["Custom design", "SEO", "Mobile-first"],
    icon: Globe,
    mockup: "web",
  },
  {
    tag: "Automation",
    title: "24/7 Automated Workflows",
    description:
      "Set up intelligent automation pipelines that run while you sleep — capturing leads, sending follow-ups, and updating your CRM without any manual effort.",
    chips: ["WhatsApp", "CRM sync", "Triggers"],
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
            <p className="text-xs text-white/70">What can I help with?</p>
            <p className="text-[10px] text-white/30 mt-1">Whether you want help in customer handling or make changes in your system, just give me a command</p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-purple-600/20 border border-purple-500/20 rounded-xl rounded-tr-sm px-3 py-2">
            <p className="text-xs text-white/80">Provide me full report.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardMockup() {
  const items = [
    { label: "Chatbot system", sub: "Efficiency will increase by 20%", color: "text-purple-400" },
    { label: "Workflow system", sub: "Update available...", color: "text-blue-400" },
    { label: "Sales system", sub: "Up to date", color: "text-green-400" },
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
          <span className="text-[9px] text-white/30">orbitwin.ai</span>
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
  const steps = ["Lead captured", "Email sent", "CRM updated", "Follow-up scheduled"];
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
            AI Solutions That
            <br />
            <span className="gradient-text">Generate Results</span>
          </h2>
          <p className="mt-4 text-white/45 text-base max-w-xl mx-auto leading-relaxed">
            We don&apos;t just build websites — we build systems that generate
            leads automatically.
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
                  Learn more <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
