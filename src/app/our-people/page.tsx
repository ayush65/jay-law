import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import ConsultationCTA from "@/components/ConsultationCTA";
import { people } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our People",
  description:
    "Meet Jayanthi Vallipuram, Principal and Barrister & Solicitor, and Sadat Abbasi, Associate — the team behind Jay Law across New Zealand.",
  alternates: {
    canonical: "/our-people",
  },
};

export default function OurPeoplePage() {
  return (
    <>
      <section className="bg-ivory pt-36 pb-16 lg:pt-44">
        <div className="container-default max-w-4xl">
          <p className="eyebrow">Our people</p>
          <h1 className="anim-rise delay-1 mt-7 font-serif text-5xl leading-[1.06] text-ink sm:text-6xl lg:text-[4.2rem]">
            Who you&apos;ll be working with.
          </h1>
          <p className="anim-rise delay-2 mt-7 max-w-2xl text-lg leading-relaxed text-warmgrey">
            A dynamic team that combines experience, wisdom, insight and
            integrity to resolve your legal issues.
          </p>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="container-default space-y-24">
          {people.map((p, i) => (
            <div
              key={p.name}
              className={`grid items-start gap-12 lg:grid-cols-2 lg:gap-20 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal>
                <figure className="photo-hover relative aspect-[4/5] overflow-hidden bg-sand">
                  <Image
                    src={p.photo}
                    alt={`${p.name}, ${p.role}`}
                    fill
                    sizes="(min-width: 1024px) 44vw, 92vw"
                    className="object-cover"
                    style={{ objectPosition: p.photoPos }}
                  />
                  <span className="photo-tint absolute inset-0" />
                  <span className="absolute top-5 left-5 bg-ivory/85 px-4 py-1.5 text-[0.68rem] font-bold tracking-[0.2em] text-ink uppercase backdrop-blur">
                    {p.island}
                  </span>
                </figure>
              </Reveal>

              <Reveal delay={120}>
                <p className="text-[0.72rem] font-bold tracking-[0.26em] text-stone uppercase">
                  {p.island}
                </p>
                <h2 className="mt-4 font-serif text-4xl text-ink lg:text-5xl">
                  {p.name}
                </h2>
                <p className="mt-3 text-sm font-bold tracking-wide text-forest">
                  {p.role}
                </p>
                <p className="mt-7 text-[1.05rem] leading-[1.85] text-warmgrey">
                  {p.bio}
                </p>
                <div className="mt-8 flex flex-wrap gap-2.5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-ink/15 px-3.5 py-1.5 text-[0.72rem] font-semibold tracking-wide text-ink/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {p.contact && (
                  <div className="mt-10 border-t border-ink/15 pt-7">
                    <p className="font-semibold text-ink">
                      {p.contact.title}
                    </p>
                    <p className="mt-1 text-sm text-warmgrey">
                      {p.contact.role} · {p.contact.firm}
                    </p>
                    {p.contact.phone && (
                      <a
                        href={`tel:${p.contact.phone}`}
                        className="mt-4 inline-flex items-center gap-2.5 text-lg font-semibold text-forest"
                      >
                        <Phone size={17} />
                        {p.contact.phone}
                      </a>
                    )}
                    {p.contact.email && (
                      <a
                        href={`mailto:${p.contact.email}`}
                        className="mt-4 inline-flex items-center gap-2.5 text-lg font-semibold text-forest"
                      >
                        <Mail size={17} />
                        {p.contact.email}
                      </a>
                    )}
                  </div>
                )}

                {!p.contact && (
                  <div className="mt-10 border-t border-ink/15 pt-7">
                    <a
                      href="mailto:sadat@jaylawlimited.co.nz"
                      className="inline-flex items-center gap-2.5 text-lg font-semibold text-forest"
                    >
                      <Mail size={17} />
                      sadat@jaylawlimited.co.nz
                    </a>
                  </div>
                )}
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
