import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import Reveal from "@/components/Reveal";
import ConsultationCTA from "@/components/ConsultationCTA";
import { timeline } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "From a sole practitioner to a two-island practice — the story of Jay Law, founded in 2022 by Jayanthi Vallipuram and expanded in 2026 with Sadat Abbasi.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-ivory pt-36 pb-16 lg:pt-44">
        <div className="container-default max-w-4xl">
          <p className="eyebrow">Our story</p>
          <h1 className="anim-rise delay-1 mt-7 font-serif text-5xl leading-[1.06] text-ink sm:text-6xl lg:text-[4.2rem]">
            A firm built on relationships.
          </h1>
          <p className="anim-rise delay-2 mt-7 max-w-2xl text-lg leading-relaxed text-warmgrey">
            From a sole practitioner to a two-island practice — this is the
            story of Jay Law.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="pb-24 lg:pb-32">
        <div className="container-default grid gap-14 pt-10 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="text-[1.05rem] leading-[1.85] text-warmgrey">
              Jay Law was established in 2022 by{" "}
              <strong className="font-semibold text-ink">
                Jayanthi Vallipuram (Jay)
              </strong>
              . A sole practitioner providing services in Family, Immigration,
              Employment and Commercial Law since 2017, she founded the firm on
              a simple belief — that expert legal care should feel human.
            </p>
            <p className="mt-6 text-[1.05rem] leading-[1.85] text-warmgrey">
              In 2026, Jay Law expanded its services to the{" "}
              <strong className="font-semibold text-ink">South Island</strong>{" "}
              with the support of Sadat Abbasi, who brings extensive personal
              experience and wisdom from his legal background.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-[1.05rem] leading-[1.85] text-warmgrey">
              Together they bring a combination of experience, wisdom, insight
              and integrity — and we pride ourselves on the strong relationships
              we form with our clients.
            </p>
            <p className="mt-8 font-serif text-3xl leading-snug text-ink">
              “Building strong relationships with our clients.”
            </p>
            <p className="mt-8 text-[1.05rem] leading-[1.85] text-warmgrey">
              Every engagement starts with a real
              conversation about your situation, what you need, and what a
              realistic path forward looks like. No obligation, no jargon.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-sand py-24 lg:py-28">
        <div className="container-default">
          <p className="eyebrow">Milestones</p>
          <h2 className="mt-6 max-w-xl font-serif text-4xl leading-[1.1] text-ink sm:text-5xl">
            How Jay Law came to be.
          </h2>

          <ol className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
            {timeline.map((item, i) => (
              <li key={item.year} data-reveal style={{ transitionDelay: `${i * 90}ms` }}>
                <span className="block h-px w-full bg-forest/40" />
                <p className="mt-7 font-serif text-5xl text-forest">
                  {item.year}
                </p>
                <h3 className="mt-4 text-[0.85rem] font-bold tracking-[0.2em] uppercase">
                  {item.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-warmgrey">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* QUOTE */}
      <section className="bg-paper py-24">
        <div className="container-default max-w-3xl text-center">
          <Quote size={40} className="mx-auto text-forest/40" />
          <blockquote className="mt-8 font-serif text-2xl leading-relaxed text-ink sm:text-3xl">
            “The life of the law has not been logic; it has been experience.”
          </blockquote>
          <cite className="mt-6 block text-[0.75rem] font-bold tracking-[0.28em] text-stone uppercase not-italic">
            — Oliver Wendell Holmes Jr.
          </cite>
        </div>
      </section>

      {/* PEOPLE TEASER */}
      <section className="bg-ivory py-24 lg:py-28">
        <div className="container-default max-w-2xl text-center lg:text-left">
          <p className="eyebrow justify-center lg:justify-start">
            Our people
          </p>
          <h2 className="mt-6 font-serif text-4xl leading-[1.1] text-ink">
            Meet Jay and Sadat.
          </h2>
          <p className="mt-6 text-[1.05rem] leading-[1.8] text-warmgrey">
            A dynamic team combining experience, wisdom, insight and integrity
            to resolve your legal issues — across the North and South Islands.
          </p>
          <Link href="/our-people" className="btn btn-outline mt-10">
            Meet the team
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
