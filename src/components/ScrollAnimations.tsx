"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Vanilla-JS scroll choreography. Keeps every piece of critical content
 * in the DOM and visible; only enhances it (reveals, active timeline
 * steps). Includes a hard failsafe so nothing stays hidden if
 * hydration or observers fall over.
 */
export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const w = window as Window & { __revealFailsafe?: number; __scrollReady?: boolean };
    if (w.__revealFailsafe) {
      clearTimeout(w.__revealFailsafe);
      w.__revealFailsafe = undefined;
    }
    w.__scrollReady = true;

    const revealAll = () => {
      document
        .querySelectorAll("[data-reveal]:not(.is-visible)")
        .forEach((el) => el.classList.add("is-visible"));
    };

    if (!("IntersectionObserver" in window)) {
      revealAll();
      return undefined;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    document
      .querySelectorAll("[data-reveal]:not(.is-visible)")
      .forEach((el) => io.observe(el));

    const stepObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-active");
            stepObserver.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 }
    );

    document
      .querySelectorAll(".process-step")
      .forEach((el) => stepObserver.observe(el));

    return () => {
      io.disconnect();
      stepObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
