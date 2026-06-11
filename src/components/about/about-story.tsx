"use client";

import { motion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";

export function AboutStory() {
  return (
    <section className="relative w-full py-16 lg:py-24">
      <div className="mx-auto flex max-w-[96rem] flex-col gap-12 px-6 sm:px-10 lg:flex-row lg:items-center lg:gap-16 lg:px-14">
        
        {/* Left Col - Headline */}
        <div className="lg:w-[35%]">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: EASE_OUT_EXPO }}
          >
            <span className="mb-6 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.3em] text-label-foreground">
              <span className="h-px w-6 bg-foreground/20" aria-hidden="true" />
              OUR STORY
            </span>
            <h2 className="max-w-[400px] text-3xl font-medium tracking-tight text-foreground lg:text-5xl">
              Why We Started NexLoop
            </h2>
          </motion.div>
        </div>

        {/* Right Col - Content */}
        <div className="lg:w-[65%]">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.1, ease: EASE_OUT_EXPO }}
            className="flex flex-col gap-6 border-l border-border pl-6 text-lg font-light leading-relaxed text-muted-foreground sm:pl-8 sm:text-xl lg:text-[1.125rem]"
          >
            <p>
              We saw businesses struggling with <span className="font-medium text-foreground">fragmented tools</span>, repetitive work, and outdated digital experiences.
            </p>
            <p>
              NexLoop was created by Nikhil Wagh and Atharva to bridge the gap between <span className="font-medium text-foreground">modern technology</span> and practical business growth.
            </p>
            <p>
              Rather than selling isolated services, we build complete digital systems that combine <span className="font-medium text-foreground">websites</span>, <span className="font-medium text-foreground">mobile apps</span>, automation, <span className="font-medium text-foreground">AI chatbots</span>, <span className="font-medium text-foreground">voice agents</span>, and scalable business workflows.
            </p>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
