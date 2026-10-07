"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const slides = [
  {
    src: "/hero-property.jpg",
    alt: "A conveyancing and property consultation in a New Zealand law office",
    label: "Property",
  },
  {
    src: "/hero-immigration.jpg",
    alt: "An immigration consultation with a lawyer and a client reviewing a visa application",
    label: "Immigration",
  },
  {
    src: "/hero-consultation.jpg",
    alt: "A lawyer meeting with a client for a legal consultation in a premium office",
    label: "Consultation",
  },
  {
    src: "/hero-commercial.jpg",
    alt: "A commercial business consultation with a lawyer and clients in a boardroom",
    label: "Commercial",
  },
  {
    src: "/hero-family.jpg",
    alt: "A warm family law consultation with a lawyer, a couple, and a child-focused setting",
    label: "Family",
  },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const next = () => setActive((i) => (i + 1) % slides.length);
  const prev = () => setActive((i) => (i - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (paused || typeof window === "undefined") return undefined;
    const reduce = window.matchMedia
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;
    const id = window.setInterval(() => {
      if (!document.hidden && !reduce) {
        setActive((i) => (i + 1) % slides.length);
      }
    }, 6000);
    return () => window.clearInterval(id);
  }, [paused]);

  const onKeyNavigate = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  return (
    <figure
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        className="relative aspect-[4/5] overflow-hidden bg-sand"
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          const dx = e.changedTouches[0].clientX - (touchStartX.current ?? 0);
          if (dx > 40) prev();
          if (dx < -40) next();
          touchStartX.current = null;
        }}
        onKeyDown={onKeyNavigate}
        tabIndex={0}
        aria-label="Hero image carousel"
        role="region"
      >
        {slides.map((slide, i) => (
          <div
            key={slide.label}
            className={`absolute inset-0 transition-opacity duration-[900ms] ease-in-out ${
              i === active ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            aria-hidden={i !== active}
          >
            <Image
              src={slide.src}
              alt={i === active ? slide.alt : ""}
              fill
              sizes="(min-width: 1024px) 44vw, 92vw"
              className={`object-cover transition-transform duration-[3000ms] ease-out ${
                i === active ? "scale-100" : "scale-[1.04]"
              }`}
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : "auto"}
            />
          </div>
        ))}
      </div>

      <figcaption className="mt-5 flex items-center justify-between border-t border-ink/15 pt-4 text-sm text-warmgrey">
        <span className="font-semibold text-ink">{slides[active].label}</span>
        <span className="text-[0.72rem] tracking-[0.18em] text-stone uppercase">
          {active + 1} / {slides.length}
        </span>
      </figcaption>

      <div className="mt-5 flex items-center gap-2" role="tablist" aria-label="Carousel slides">
        {slides.map((slide, i) => (
          <button
            key={slide.label}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={`${slide.label} slide ${i + 1}`}
            onClick={() => setActive(i)}
            className={`size-2.5 rounded-full transition-colors ${
              i === active ? "bg-forest" : "bg-ink/20 hover:bg-ink/40"
            }`}
          />
        ))}
        <div className="ml-auto flex gap-2">
          <button
            type="button"
            aria-label="Previous image"
            onClick={prev}
            className="border border-ink/15 px-3 py-1.5 text-sm transition-colors hover:border-ink/40"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={next}
            className="border border-ink/15 px-3 py-1.5 text-sm transition-colors hover:border-ink/40"
          >
            ›
          </button>
        </div>
      </div>
    </figure>
  );
}
