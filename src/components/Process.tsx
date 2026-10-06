import Reveal from "@/components/Reveal";
import { processSteps } from "@/lib/data";

export default function Process() {
  return (
    <section id="approach" className="scroll-mt-28 bg-ivory py-24 lg:py-32">
      <div className="container-default">
        <div className="max-w-2xl">
          <p className="eyebrow">Our approach</p>
          <h2 className="mt-6 font-serif text-4xl leading-[1.08] text-ink sm:text-5xl">
            A clear path from question to resolution.
          </h2>
        </div>

        <ol className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-5 md:gap-7">
          {processSteps.map((step, i) => (
            <li
              key={step.title}
              className="process-step"
              data-reveal
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="step-num block font-serif text-5xl leading-none">
                0{i + 1}
              </span>
              <span className="step-rule my-6 block h-px w-full" />
              <h3 className="step-title text-[0.85rem] font-bold tracking-[0.22em] text-warmgrey uppercase">
                {step.title}
              </h3>
              <p className="mt-4 text-[0.92rem] leading-relaxed text-warmgrey">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
