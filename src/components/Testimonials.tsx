"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  if (testimonials.length === 0) return null;
  const t = testimonials[index];

  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="container-default max-w-4xl text-center">
        <p className="eyebrow justify-center">Client feedback</p>

        <div className="mt-14 min-h-[220px]" aria-live="polite">
          <blockquote key={index} className="quote-in">
            <p className="font-serif text-[1.75rem] leading-[1.4] text-ink sm:text-4xl">
              “{t.quote}”
            </p>
            <footer className="mt-9">
              <p className="text-sm font-bold tracking-wide text-ink uppercase">
                {t.name}
              </p>
              <p className="mt-1 text-[0.72rem] font-semibold tracking-[0.22em] text-forest uppercase">
                {t.matter}
              </p>
            </footer>
          </blockquote>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="border border-ink/15 p-3 text-ink/70 transition-colors hover:border-ink/40 hover:text-ink"
          >
            <ArrowLeft size={17} />
          </button>
          <span className="text-[0.72rem] font-bold tracking-[0.3em] text-stone">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(testimonials.length).padStart(2, "0")}
          </span>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="border border-ink/15 p-3 text-ink/70 transition-colors hover:border-ink/40 hover:text-ink"
          >
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </section>
  );
}
