import { values } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function WhyJayLaw() {
  return (
    <section className="bg-coal py-24 text-ivory lg:py-32">
      <div className="container-default">
        <div className="max-w-2xl">
          <p className="eyebrow eyebrow-light">Why Jay Law</p>
          <h2 className="mt-6 font-serif text-4xl leading-[1.08] text-ivory sm:text-5xl">
            The relationships we form
            <br />
            set us apart.
          </h2>
        </div>

        <div className="mt-16 divide-y divide-ivory/10">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 60}>
              <div className="grid grid-cols-[3.5rem_1fr] items-baseline gap-6 py-9 md:grid-cols-[6rem_minmax(0,1fr)_1.2fr] md:gap-10 md:py-11">
                <span className="font-serif text-3xl text-ivory/30 md:text-5xl">
                  0{i + 1}
                </span>
                <h3 className="font-serif text-2xl text-ivory md:text-[1.9rem]">
                  {v.title}
                </h3>
                <p className="col-start-2 text-[0.95rem] leading-relaxed text-ivory/55 md:col-start-3">
                  {v.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
