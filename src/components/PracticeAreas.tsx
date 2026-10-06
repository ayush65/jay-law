import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { practiceAreas } from "@/lib/data";

export default function PracticeAreas() {
  return (
    <section id="practice-areas" className="scroll-mt-28 bg-ivory py-24 lg:py-32">
      <div className="container-default">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Practice areas</p>
            <h2 className="mt-6 font-serif text-4xl leading-[1.08] text-ink sm:text-5xl lg:text-[3.4rem]">
              Focused expertise,
              <br />
              clear presentation.
            </h2>
          </div>
          <Link
            href="/practice-areas"
            className="nav-link self-start text-sm font-semibold tracking-wide text-forest lg:self-auto"
          >
            View all practice areas
          </Link>
        </div>

        <div className="mt-16">
          {practiceAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/practice-areas/${area.slug}`}
              className="area-row group"
            >
              <span className="area-num font-serif text-2xl md:text-[1.9rem]">
                {area.number}
              </span>
              <h3 className="font-serif text-2xl leading-tight text-ink transition-colors duration-300 group-hover:text-forest md:text-[1.85rem]">
                {area.label}
              </h3>
              <p className="hidden text-[0.95rem] leading-relaxed text-warmgrey md:block">
                {area.tagline}
              </p>
              <ArrowUpRight
                size={22}
                className="area-arrow hidden text-forest md:block"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
