import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function LegalAid() {
  return (
    <section className="bg-forest py-24 text-ivory lg:py-32">
      <div className="container-default grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <p className="eyebrow eyebrow-light">Legal Aid</p>
          <h2 className="mt-6 font-serif text-4xl leading-[1.08] text-ivory sm:text-5xl">
            Legal support should
            <br />
            be accessible.
          </h2>
          <p className="mt-7 max-w-xl text-[1.05rem] leading-[1.8] text-ivory/70">
            If you cannot afford a lawyer, you may be able to apply for Legal
            Aid. We can advise you whether or not you may be eligible to apply,
            and we provide Legal Aid for eligible Family Law proceedings.
          </p>
          <Link
            href="/contact"
            className="btn btn-outline-light mt-10"
          >
            Ask About Your Eligibility
          </Link>
        </Reveal>

        <Reveal delay={120}>
          <div className="divide-y divide-ivory/15 border border-ivory/15">
            {[
              ["Personal attention", "Every matter gets careful, practical attention from start to finish."],
              [
                "Family Law proceedings",
                "Legal Aid available for eligible matters.",
              ],
              [
                "Plain English advice",
                "We deal with the detail so you can follow.",
              ],
            ].map(([title, text]) => (
              <div key={title} className="px-8 py-7">
                <p className="font-serif text-xl text-ivory">{title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ivory/55">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
