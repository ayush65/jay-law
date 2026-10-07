import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function FirmStory() {
  return (
    <section className="bg-sand py-24 lg:py-32">
      <div className="container-default grid gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow">About Jay Law</p>
          <h2 className="mt-6 font-serif text-4xl leading-[1.08] text-ink sm:text-5xl">
            Experienced.
            <br />
            Approachable.
            <br />
            On your side.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="space-y-6 text-[1.05rem] leading-[1.8] text-warmgrey">
            <p>
              Jay Law was established in 2022 by{" "}
              <strong className="font-semibold text-ink">
                Jayanthi Vallipuram (Jay)
              </strong>
              . A sole practitioner providing services in Family, Immigration,
              Employment and Commercial Law since 2017, she founded the firm on
              a simple belief — that expert legal care should feel human.
            </p>
            <p>
              In 2026, Jay Law expanded to the{" "}
              <strong className="font-semibold text-ink">South Island</strong>{" "}
              with the support of Sadaat Abasi, who brings extensive personal
              experience and wisdom from his legal background.
            </p>
            <p className="font-serif text-2xl leading-snug text-ink">
              “Their issues become ours.”
            </p>
            <p>
              Together they bring a combination of experience, wisdom, insight
              and integrity — and we pride ourselves on the strong relationships
              we form with our clients.
            </p>
          </div>
          <Link
            href="/about"
            className="nav-link mt-10 inline-block text-sm font-semibold tracking-wide text-forest"
          >
            Read our story
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
