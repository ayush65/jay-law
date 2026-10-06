import type { Metadata } from "next";
import { Clock, Mail, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { contactDetails } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "North Island or South Island — we reply within one working day. Book your free first consultation with Jay Law today.",
  alternates: {
    canonical: "/contact",
  },
};

const offices = [
  {
    island: "North Island",
    name: contactDetails.north.name,
    role: contactDetails.north.role,
    phone: contactDetails.north.phone,
    phoneHref: contactDetails.north.phoneHref,
    email: contactDetails.north.email,
    emailHref: contactDetails.north.emailHref,
  },
  {
    island: "South Island",
    name: contactDetails.south.name,
    role: contactDetails.south.role,
    phone: "Enquire online",
    phoneHref: contactDetails.south.emailHref,
    email: contactDetails.south.email,
    emailHref: contactDetails.south.emailHref,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-ivory pt-36 pb-16 lg:pt-44">
        <div className="container-default max-w-4xl">
          <p className="eyebrow">Contact Jay Law</p>
          <h1 className="anim-rise delay-1 mt-7 font-serif text-5xl leading-[1.06] text-ink sm:text-6xl lg:text-[4.2rem]">
            For expert legal advice, get in touch.
          </h1>
          <p className="anim-rise delay-2 mt-7 max-w-2xl text-lg leading-relaxed text-warmgrey">
            North Island or South Island — we reply within one working day.
            Book your free first consultation today.
          </p>
        </div>
      </section>

      <section className="pb-12">
        <div className="container-default grid gap-10 md:grid-cols-2">
          {offices.map((office) => (
            <div
              key={office.island}
              className="border border-ink/10 bg-paper px-9 py-10"
            >
              <p className="text-[0.7rem] font-bold tracking-[0.26em] text-forest uppercase">
                {office.island}
              </p>
              <h2 className="mt-4 font-serif text-3xl text-ink">
                {office.name}
              </h2>
              <p className="mt-1 text-sm font-semibold text-warmgrey">
                {office.role}
              </p>
              <div className="mt-8 space-y-4">
                <a
                  href={office.phoneHref}
                  className="flex items-center gap-4 text-lg font-semibold transition-colors hover:text-forest"
                >
                  <Phone size={18} className="text-forest" />
                  {office.phone}
                </a>
                <a
                  href={office.emailHref}
                  className="flex items-center gap-4 text-lg font-semibold break-all transition-colors hover:text-forest"
                >
                  <Mail size={18} className="shrink-0 text-forest" />
                  {office.email}
                </a>
                <p className="flex items-center gap-4 text-warmgrey">
                  <Clock size={18} className="text-forest" />
                  Mon – Fri · 9am – 5pm
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sand py-24 lg:py-32">
        <div className="container-default grid gap-14 lg:grid-cols-[1.15fr_1fr]">
          <Reveal>
            <h2 className="font-serif text-4xl leading-[1.1] text-ink">
              Send us an enquiry.
            </h2>
            <p className="mt-5 max-w-lg text-[1.05rem] leading-relaxed text-warmgrey">
              Tell us a little about your situation and we&apos;ll be in touch
              within one working day.
            </p>
            <div className="mt-10">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="bg-forest p-10 text-ivory">
              <p className="eyebrow eyebrow-light">Legal Aid</p>
              <p className="mt-5 text-[1rem] leading-relaxed text-ivory/75">
                If you cannot afford a lawyer, you may be able to apply for
                Legal Aid. We can advise whether you may be eligible — Legal Aid
                is only provided for eligible Family Law proceedings.
              </p>
              <p className="mt-8 text-[0.82rem] leading-relaxed tracking-wide text-ivory/50">
                Free first consultation · Reply within one working day · Mon–Fri
                9am–5pm
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
