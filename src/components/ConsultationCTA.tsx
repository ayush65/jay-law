import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { contactPhone } from "@/lib/site";

export default function ConsultationCTA() {
  return (
    <section className="bg-charcoal">
      <div className="container-default py-24 text-center lg:py-32">
        <p className="eyebrow eyebrow-light justify-center">Get in touch</p>
        <h2 className="mt-7 font-serif text-4xl leading-[1.08] text-ivory sm:text-5xl lg:text-6xl">
          Let&apos;s talk about
          <br />
          what comes next.
        </h2>
        <p className="mt-7 text-[1.05rem] leading-relaxed text-ivory/60">
          Your first consultation is free.
        </p>
        <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/contact" className="btn btn-primary">
            Book a Consultation
            <ArrowRight size={18} />
          </Link>
          <a href={`tel:${contactPhone}`} className="btn btn-outline-light">
            <Phone size={17} />
            Call {contactPhone}
          </a>
        </div>
      </div>
    </section>
  );
}
