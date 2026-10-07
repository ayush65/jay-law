import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import ConsultationCTA from "@/components/ConsultationCTA";
import { FaqList } from "@/components/Faq";
import { faqGroups } from "@/lib/data";
import { contactPhone } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers to the questions our clients ask most — fees, Legal Aid, family law, property, business and immigration.",
  alternates: {
    canonical: "/faqs",
  },
};

export default function FaqsPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqGroups.flatMap((g) =>
      g.items.map((item) => ({
        "@type": "Question",
        name: item.title,
        acceptedAnswer: { "@type": "Answer", text: item.content },
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqLd).replace(/</g, "\\u003c"),
        }}
      />
      <section className="bg-ivory pt-36 pb-16 lg:pt-44">
        <div className="container-default max-w-4xl">
          <p className="eyebrow">Frequently asked questions</p>
          <h1 className="anim-rise delay-1 mt-7 font-serif text-5xl leading-[1.06] text-ink sm:text-6xl lg:text-[4.2rem]">
            Answers to the questions we hear most.
          </h1>
          <p className="anim-rise delay-2 mt-7 max-w-2xl text-lg leading-relaxed text-warmgrey">
            Can&apos;t find what you&apos;re looking for? Ask us directly — your
            we&apos;ll talk your options through with you.
          </p>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="container-default grid gap-14 lg:grid-cols-[1fr_1.6fr]">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <h2 className="font-serif text-3xl leading-tight text-ink lg:text-4xl">
                Still have questions?
              </h2>
              <p className="mt-5 max-w-sm text-[1rem] leading-relaxed text-warmgrey">
                Call us on{" "}
                <a
                  href={`tel:${contactPhone}`}
                  className="font-semibold text-forest"
                >
                  {contactPhone}
                </a>{" "}
                or send us a note — we answer within one working day.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:flex-col">
                <a href={`tel:${contactPhone}`} className="btn btn-primary">
                  <Phone size={17} />
                  {contactPhone}
                </a>
                <Link href="/contact" className="btn btn-outline">
                  Send an enquiry
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </Reveal>

          <div className="space-y-16">
            {faqGroups.map((group) => (
              <Reveal key={group.group}>
                <h2 className="font-serif text-2xl text-ink">{group.group}</h2>
                <div className="mt-6">
                  <FaqList items={group.items} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
