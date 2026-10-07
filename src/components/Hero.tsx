import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ivory pt-36 pb-20 lg:pt-44 lg:pb-28">
      {/* subtle architectural rules */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-[4%] hidden w-px bg-ink/[0.07] lg:block"
      />
      <div className="container-default grid items-center gap-16 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="max-w-2xl">
          <p className="anim-rise delay-1 eyebrow">
            Barrister &amp; Solicitor · New Zealand
          </p>
          <h1 className="anim-rise delay-2 mt-7 font-serif text-[3.4rem] leading-[1.04] tracking-[-0.01em] text-ink sm:text-6xl lg:text-[4.6rem]">
            Clear legal advice.
            <br />
            Confidently handled.
          </h1>
          <p className="anim-rise delay-3 mt-7 max-w-xl text-lg leading-relaxed text-warmgrey">
            Jay Law gives expert, practical legal advice — in Family, Property,
            Immigration and Commercial Law — with a focus on strong
            relationships and outcomes you can understand.
          </p>
          <div className="anim-rise delay-4 mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="btn btn-primary">
              Book a Consultation
              <ArrowRight size={18} />
            </Link>
            <Link href="/practice-areas" className="btn btn-outline">
              Explore Practice Areas
            </Link>
          </div>
          <p className="anim-rise delay-5 mt-8 text-sm tracking-wide text-stone">
            Free first consultation · We reply within one working day
          </p>
        </div>

        <div className="anim-image delay-img relative">
          <div className="absolute -top-5 -left-5 hidden h-full w-full border border-forest/20 sm:block" />
          <figure className="relative aspect-[4/5] overflow-hidden bg-sand">
            <Image
              src="/jayanthi-vallipuram.jpg"
              alt="Jayanthi Vallipuram, Principal of Jay Law"
              fill
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 1024px) 42vw, 92vw"
              className="object-cover"
              style={{ objectPosition: "50% 8%" }}
            />
          </figure>
          <figcaption className="mt-5 flex items-baseline justify-between border-t border-ink/15 pt-4 text-sm text-warmgrey">
            <span className="font-semibold text-ink">Jayanthi Vallipuram</span>
            <span>Principal · Barrister &amp; Solicitor</span>
          </figcaption>
        </div>
      </div>
    </section>
  );
}
