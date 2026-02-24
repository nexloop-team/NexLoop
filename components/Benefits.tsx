"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, DollarSign, Users, ShieldCheck, BarChart3 } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "3x More Leads",
    description: "Automated systems work around the clock to capture and qualify leads from every channel.",
  },
  {
    icon: Clock,
    title: "24/7 Automation",
    description: "Your AI never sleeps. It responds, qualifies, and books — while you rest or focus on growth.",
  },
  {
    icon: DollarSign,
    title: "Increased Revenue",
    description: "Higher conversion rates and faster follow-up mean more closed deals and better ROI.",
  },
  {
    icon: Users,
    title: "Better Customer Experience",
    description: "Instant, personalized responses delight prospects and build trust before the first call.",
  },
  {
    icon: ShieldCheck,
    title: "Save 10+ Hours/Week",
    description: "Eliminate repetitive tasks. Automating intake, follow-up, and FAQs saves hours every week.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Insights",
    description: "Real-time dashboards show where leads come from, what converts, and where to optimize.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-28 px-6">
      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Benefits</span>
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1]">
            Why Businesses Choose
            <br />
            <span className="gradient-text">NexLoop</span>
          </h2>
          <p className="mt-4 text-white/45 text-base max-w-xl mx-auto">
            Discover how AI automation enhances efficiency, reduces costs, and
            drives growth with smarter processes.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.23, 1, 0.32, 1] }}
              className="group glass-card p-6 shine-sweep"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-purple-600/12 border border-purple-500/15 flex items-center justify-center mb-5 group-hover:bg-purple-600/20 transition-colors">
                <b.icon size={18} className="text-purple-400" />
              </div>

              <h3 className="text-base font-bold text-white mb-1.5 tracking-tight">
                {b.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {b.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
