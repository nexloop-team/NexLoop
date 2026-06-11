"use client";

import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 w-full border-t border-white/10 bg-transparent">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-8 sm:px-10 lg:py-14">
        
        {/* Main Footer Content */}
        <div className="flex flex-col gap-6 sm:gap-12 lg:flex-row lg:justify-between lg:gap-16">
          
          {/* Brand & Services */}
          <div className="flex flex-col lg:max-w-md">
            <Link href="/" className="text-2xl font-light tracking-[0.25em] text-foreground transition-opacity hover:opacity-80 sm:text-3xl">
              NEXLOOP
            </Link>
            <p className="mt-2 text-[14px] font-light leading-relaxed text-foreground/50 sm:mt-4 sm:text-[15px]">
              Building intelligent digital systems.
            </p>
            
            <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/40 sm:mt-8 sm:text-[11px]">
              Services:
            </p>
            
            {/* Mobile Services Wrap */}
            <p className="mt-2 block text-[13px] font-light leading-relaxed text-foreground/60 sm:hidden">
              Websites &bull; Mobile Apps &bull; AI Automation
            </p>
            {/* Desktop Services Wrap */}
            <p className="mt-2 hidden text-[14px] font-light leading-relaxed text-foreground/60 sm:block">
              Websites &bull; Mobile Apps &bull; AI Automation &bull; AI Chatbots &bull; AI Voice Agents &bull; WhatsApp Automation
            </p>
          </div>

          {/* Links & Social */}
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-24 lg:pt-2">
            
            {/* Links Column - HIDDEN ON MOBILE */}
            <div className="hidden flex-col gap-4 sm:flex">
              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/40">
                Links
              </span>
              <nav className="flex flex-col gap-3">
                <Link href="/about" className="text-[15px] font-light text-foreground/60 transition-all duration-300 hover:text-foreground">
                  About
                </Link>
                <Link href="/services" className="text-[15px] font-light text-foreground/60 transition-all duration-300 hover:text-foreground">
                  Services
                </Link>
                <Link href="/#work" className="text-[15px] font-light text-foreground/60 transition-all duration-300 hover:text-foreground">
                  Work
                </Link>
                <Link href="/contact" className="text-[15px] font-light text-foreground/60 transition-all duration-300 hover:text-foreground">
                  Contact
                </Link>
              </nav>
            </div>

            {/* Social Column */}
            <div className="flex flex-col gap-0 sm:gap-4">
              
              <span className="hidden text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/40 sm:block">
                Social
              </span>
              
              {/* Mobile Social + Email Inline */}
              <div className="flex flex-col gap-2 sm:hidden">
                <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/40">
                  Social:
                </p>
                <div className="flex flex-row flex-wrap items-center gap-2.5 text-[13px] font-light text-foreground/60">
                  <a href="https://www.linkedin.com/company/nexloop-solutions" className="transition-all duration-300 hover:text-foreground">LinkedIn</a>
                  <span>&bull;</span>
                  <a href="https://www.instagram.com/nexloop.io" className="transition-all duration-300 hover:text-foreground">Instagram</a>
                  <span>&bull;</span>
                  <a href="#" className="transition-all duration-300 hover:text-foreground">X</a>
                </div>
                
                <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/40">
                  Email:
                </p>
                <a href="mailto:team.nexloop@gmail.com" className="text-[13px] font-light text-foreground/60 transition-all duration-300 hover:text-foreground">
                  team.nexloop@gmail.com
                </a>
              </div>

              {/* Desktop Social Column */}
              <div className="hidden flex-col gap-3 sm:flex">
                <a href="https://www.linkedin.com/company/nexloop-solutions" target="_blank" rel="noopener noreferrer" className="text-[15px] font-light text-foreground/60 transition-all duration-300 hover:text-foreground">
                  LinkedIn
                </a>
                <a href="https://www.instagram.com/nexloop.io" target="_blank" rel="noopener noreferrer" className="text-[15px] font-light text-foreground/60 transition-all duration-300 hover:text-foreground">
                  Instagram
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-[15px] font-light text-foreground/60 transition-all duration-300 hover:text-foreground">
                  X (Twitter)
                </a>
                <a href="mailto:team.nexloop@gmail.com" className="text-[15px] font-light text-foreground/60 transition-all duration-300 hover:text-foreground">
                  team.nexloop@gmail.com
                </a>
              </div>

            </div>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-start border-t border-white/5 pt-6 sm:mt-16 sm:items-center sm:justify-center sm:pt-8">
          <p className="text-[12px] font-light tracking-wide text-foreground/50 sm:text-[13px]">
            &copy; {currentYear} NexLoop. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
