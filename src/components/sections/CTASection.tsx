"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

interface CTAProps {
  badge?: {
    text: string;
  };
  title: string;
  description?: string;
  action: {
    text: string;
    href: string;
  };
  className?: string;
}

export function CTASection({
  badge,
  title,
  description,
  action,
  className,
}: CTAProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className={cn("relative w-full py-32 sm:py-40 lg:py-48", className)}>
      <div className="relative z-10 mx-auto flex max-w-[96rem] flex-col items-center px-6 text-center sm:px-10 lg:px-14">
        {/* Badge */}
        {badge && (
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: EASE_OUT_EXPO }}
            className="mb-8 sm:mb-12"
          >
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-label-foreground">
              {badge.text}
            </span>
          </motion.div>
        )}

        {/* Title */}
        <motion.h2
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.1, ease: EASE_OUT_EXPO }}
          className="max-w-4xl text-balance text-3xl font-light uppercase leading-[1.2] tracking-widest text-foreground sm:text-4xl md:text-5xl lg:text-[3.5rem]"
        >
          {title}
        </motion.h2>

        {/* Description */}
        {description && (
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: EASE_OUT_EXPO }}
            className="mt-8 max-w-2xl text-balance text-[13px] font-light leading-[1.8] tracking-wide text-muted-foreground sm:text-sm md:text-[15px]"
          >
            {description}
          </motion.p>
        )}

        {/* Action Button */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.3, ease: EASE_OUT_EXPO }}
          className="mt-12 sm:mt-16"
        >
          <Button href={action.href} variant="primary">
            {action.text}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
