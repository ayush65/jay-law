import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import ConsultationCTA from "@/components/ConsultationCTA";
import { practiceAreas } from "@/lib/data";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Family Law, Property & Conveyancing, Immigration, Business & Commercial, Elders Law and Legal Aid — the services of Jay Law, New Zealand.",
  alternates: {
    canonical: "/practice-areas",
  },
};

export default function PracticeAreasPage() {
  return (
    <>
      <section className="bg-ivory pt-36 pb-16 lg:pt-44">
        <div className="container-default max-w-4xl">
          <p className="eyebrow">Practice areas</p>
          <h1 className="anim-rise delay-1 mt-7 font-serif text-5xl leading-[1.06] text-ink sm:text-6xl lg:text-[4.2rem]">
            Clear advice across the matters that matter.
          </h1>
          <p className="anim-rise delay-2 mt-7 max-w-2xl text-lg leading-relaxed text-warmgrey">
            Property, Immigration, Family and Commercial Law — with Employment
            Law experience dating back to 2017 — handled by a team combining
            experience, wisdom, insight and integrity.
          </p>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="container-default">
          {practiceAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/practice-areas/${area.slug}`}
              className="area-row group"
              id={
                area.slug === "family-law"
                  ? "family"
                  : area.slug === "elders-law"
                    ? "elders"
                    : area.slug === "legal-aid"
                      ? "legal-aid"
                      : area.slug
              }
            >
              <span className="area-num font-serif text-2xl md:text-[1.9rem]">
                {area.number}
              </span>
              <h2 className="font-serif text-2xl leading-tight text-ink transition-colors duration-300 group-hover:text-forest md:text-[1.85rem]">
                {area.label}
              </h2>
              <p className="hidden text-[0.95rem] leading-relaxed text-warmgrey md:block">
                {area.description}
              </p>
              <ArrowUpRight
                size={22}
                className="area-arrow hidden text-forest md:block"
              />
            </Link>
          ))}

          <Reveal className="mt-16">
            <p className="max-w-2xl text-[0.95rem] leading-relaxed text-warmgrey">
              Not sure which area fits your situation? Book a free first
              consultation and we&apos;ll point you in the right direction.
            </p>
          </Reveal>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
