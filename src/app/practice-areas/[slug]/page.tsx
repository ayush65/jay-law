import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import ConsultationCTA from "@/components/ConsultationCTA";
import { FaqList } from "@/components/Faq";
import {
  faqGroups,
  practiceAreas,
  processSteps,
  contactDetails,
} from "@/lib/data";
import { siteUrl } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

const areaFaqs: Record<string, string[]> = {
  "family-law": ["Family law"],
  property: ["Property & business"],
  immigration: ["Immigration"],
  "commercial-law": ["Property & business"],
  "elders-law": ["Property & business"],
  "legal-aid": ["Legal aid"],
};

const faqsFor = (slug: string) => {
  const wanted = areaFaqs[slug] ?? [];
  return faqGroups
    .filter((g) => wanted.includes(g.group))
    .flatMap((g) => g.items);
};

export function generateStaticParams() {
  return practiceAreas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const area = practiceAreas.find((a) => a.slug === slug);
  if (!area) return {};
  return {
    title: area.label,
    description: area.tagline,
    alternates: {
      canonical: `/practice-areas/${area.slug}`,
    },
    openGraph: {
      title: `${area.label} | Jay Law`,
      description: area.tagline,
      url: `${siteUrl}/practice-areas/${area.slug}`,
    },
  };
}

export default async function PracticeAreaPage({ params }: Params) {
  const { slug } = await params;
  const area = practiceAreas.find((a) => a.slug === slug);
  if (!area) notFound();

  const faqs = faqsFor(slug);

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Practice Areas",
        item: `${siteUrl}/practice-areas`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: area.label,
        item: `${siteUrl}/practice-areas/${area.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* HERO */}
      <section className="bg-ivory pt-36 pb-16 lg:pt-44">
        <div className="container-default">
          <nav aria-label="Breadcrumb" className="anim-rise">
            <ol className="flex flex-wrap items-center gap-2 text-[0.78rem] font-semibold tracking-wide text-stone">
              <li>
                <Link href="/" className="transition-colors hover:text-forest">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link
                  href="/practice-areas"
                  className="transition-colors hover:text-forest"
                >
                  Practice Areas
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-ink">{area.label}</li>
            </ol>
          </nav>

          <p className="eyebrow mt-10">Practice area · {area.number}</p>
          <h1 className="anim-rise delay-1 mt-7 max-w-3xl font-serif text-5xl leading-[1.06] text-ink sm:text-6xl lg:text-[4.2rem]">
            {area.label}
          </h1>
          <p className="anim-rise delay-2 mt-7 max-w-2xl text-lg leading-relaxed text-warmgrey">
            {area.description}
          </p>
          <div className="anim-rise delay-3 mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="btn btn-primary">
              Book a Consultation
            </Link>
            <a
              href={contactDetails.north.phoneHref}
              className="btn btn-outline"
            >
              <Phone size={17} />
              {contactDetails.north.phone}
            </a>
          </div>
        </div>
      </section>

      {/* WHAT WE HELP WITH */}
      {area.items.length > 0 && (
        <section className="border-t border-ink/[0.09] bg-paper py-20 lg:py-28">
          <div className="container-default">
            <p className="eyebrow">What we help with</p>
            <h2 className="mt-6 max-w-xl font-serif text-4xl leading-[1.1] text-ink">
              The detail matters.
            </h2>
            <div className="mt-14 space-y-14">
              {area.items.map((item) => (
                <Reveal key={item.title}>
                  <div className="grid gap-8 border-t border-ink/10 pt-10 lg:grid-cols-[1fr_1.3fr]">
                    <h3 className="font-serif text-3xl text-ink">
                      {item.title}
                    </h3>
                    <div>
                      <p className="text-[1.02rem] leading-[1.8] text-warmgrey">
                        {item.description}
                      </p>
                      {item.details && (
                        <ul className="mt-7 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                          {item.details.map((d) => (
                            <li
                              key={d}
                              className="flex items-start gap-3 text-[0.92rem] leading-relaxed text-ink/80"
                            >
                              <span className="mt-[0.55rem] block size-1.5 shrink-0 rounded-full bg-forest" />
                              {d}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ELDERS LAW specific presentation */}
      {slug === "elders-law" && (
        <section className="border-t border-ink/[0.09] bg-paper py-20 lg:py-28">
          <div className="container-default">
            <p className="eyebrow">What we help with</p>
            <h2 className="mt-6 max-w-xl font-serif text-4xl leading-[1.1] text-ink">
              Property, business and commercial — end to end.
            </h2>
            <div className="mt-14 grid gap-10 md:grid-cols-2">
              <Link
                href="/practice-areas/property"
                className="group border-t border-ink/15 pt-8"
              >
                <h3 className="font-serif text-3xl text-ink transition-colors group-hover:text-forest">
                  Property &amp; Conveyancing
                </h3>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-warmgrey">
                  Sale and purchase agreements, conveyancing, and advice from
                  the very start of your purchase or sale.
                </p>
                <span className="mt-6 inline-block text-sm font-semibold tracking-wide text-forest">
                  Explore property →
                </span>
              </Link>
              <Link
                href="/practice-areas/commercial-law"
                className="group border-t border-ink/15 pt-8"
              >
                <h3 className="font-serif text-3xl text-ink transition-colors group-hover:text-forest">
                  Business &amp; Commercial
                </h3>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-warmgrey">
                  A full suite of commercial legal services — from company
                  incorporation to restructurings, leases and commercial
                  contracts.
                </p>
                <span className="mt-6 inline-block text-sm font-semibold tracking-wide text-forest">
                  Explore commercial →
                </span>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* WHY CLIENTS CHOOSE JAY LAW */}
      <section className="py-20 lg:py-28">
        <div className="container-default grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Why Jay Law</p>
            <h2 className="mt-6 max-w-md font-serif text-4xl leading-[1.1] text-ink">
              A firm people come back to.
            </h2>
          </div>
          <ul className="space-y-8">
            {[
              [
                "Experience, wisdom & integrity",
                "Jay and Sadaat bring a combination of experience, wisdom, insight and integrity to resolve your legal issues.",
              ],
              [
                "Honest, practical advice",
                "Clear guidance in plain English — we deal with the fine print so you don't have to.",
              ],
              [
                "Free first consultation",
                "Book a free first consultation to explore how we can help you and what outcomes are realistic.",
              ],
            ].map(([title, text]) => (
              <li key={title} className="border-t border-ink/10 pt-7">
                <h3 className="font-serif text-2xl text-ink">{title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-warmgrey">
                  {text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="bg-sand py-20 lg:py-28">
        <div className="container-default">
          <p className="eyebrow">How we work</p>
          <h2 className="mt-6 max-w-xl font-serif text-4xl leading-[1.1] text-ink">
            A clear path, five steps.
          </h2>
          <ol className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {processSteps.map((step, i) => (
              <li key={step.title}>
                <span className="font-serif text-3xl text-forest">
                  0{i + 1}
                </span>
                <h3 className="mt-4 text-[0.78rem] font-bold tracking-[0.2em] uppercase">
                  {step.title}
                </h3>
                <p className="mt-3 text-[0.88rem] leading-relaxed text-warmgrey">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="py-20 lg:py-28">
          <div className="container-default max-w-4xl">
            <p className="eyebrow">FAQs</p>
            <h2 className="mt-6 font-serif text-4xl leading-[1.1] text-ink">
              Questions we hear most.
            </h2>
            <div className="mt-12">
              <FaqList items={faqs} />
            </div>
          </div>
        </section>
      )}

      <ConsultationCTA />
    </>
  );
}
