"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import Lenis from "@studio-freight/lenis";

const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

function getHashTarget(href: string): HTMLElement | null {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return null;

  const hash = href.slice(hashIndex);
  if (hash.length < 2) return null;

  const path = href.slice(0, hashIndex) || window.location.pathname;
  const isSamePage =
    path === "" ||
    path === window.location.pathname ||
    path === "/" ||
    href.startsWith("#");

  if (!isSamePage) return null;
  return document.querySelector<HTMLElement>(hash);
}

export default function LenisProvider({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isNarrow = window.matchMedia("(max-width: 767px)").matches;
    if (prefersReduced || isNarrow) return;

    const instance = new Lenis({
      duration: 1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    setLenis(instance);

    let rafId = 0;
    const raf = (time: number) => {
      instance.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const resize = () => instance.resize();
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("load", resize);

    const onAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest("a[href]") as HTMLAnchorElement | null;
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href) return;

      const el = getHashTarget(href);
      if (!el) return;

      event.preventDefault();
      instance.scrollTo(el, { offset: -88, duration: 1.1 });
    };

    document.addEventListener("click", onAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("load", resize);
      document.removeEventListener("click", onAnchorClick);
      instance.destroy();
      setLenis(null);
    };
  }, []);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}
