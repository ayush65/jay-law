import Link from "next/link";
import Image from "next/image";
import { people } from "@/lib/data";

export default function People() {
  return (
    <section id="people" className="scroll-mt-28 bg-ivory py-24 lg:py-32">
      <div className="container-default">
        <div className="flex items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="eyebrow">Our people</p>
            <h2 className="mt-6 font-serif text-4xl leading-[1.08] text-ink sm:text-5xl">
              Who you&apos;ll be
              <br />
              working with.
            </h2>
          </div>
          <Link
            href="/our-people"
            className="nav-link hidden text-sm font-semibold tracking-wide text-forest sm:inline-block"
          >
            Meet the team
          </Link>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:gap-16">
          {people.map((p) => (
            <figure key={p.name} className="group">
              <div className="photo-hover relative aspect-[4/5] overflow-hidden bg-sand">
                <Image
                  src={p.photo}
                  alt={`${p.name}, ${p.role}`}
                  fill
                  sizes="(min-width: 768px) 45vw, 92vw"
                  className="object-cover"
                  style={{ objectPosition: p.photoPos }}
                />
                <span className="photo-tint absolute inset-0" />
                <span className="absolute top-5 left-5 bg-ivory/85 px-4 py-1.5 text-[0.68rem] font-bold tracking-[0.2em] text-ink uppercase backdrop-blur">
                  {p.island}
                </span>
              </div>
              <figcaption className="mt-6 flex items-baseline justify-between gap-4 border-t border-ink/15 pt-5">
                <h3 className="font-serif text-2xl text-ink lg:text-3xl">
                  {p.name}
                </h3>
                <span className="text-[0.72rem] font-bold tracking-[0.2em] text-stone uppercase">
                  {p.island}
                </span>
              </figcaption>
              <p className="mt-2 text-sm font-semibold tracking-wide text-forest">
                {p.role}
              </p>
              <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-warmgrey">
                {p.bio.split(". ")[0]}.
              </p>
              <Link
                href="/our-people"
                className="nav-link mt-5 inline-block text-sm font-semibold tracking-wide text-forest"
              >
                Full profile
              </Link>
            </figure>
          ))}
        </div>

        <div className="mt-12 sm:hidden">
          <Link
            href="/our-people"
            className="nav-link text-sm font-semibold tracking-wide text-forest"
          >
            Meet the team
          </Link>
        </div>
      </div>
    </section>
  );
}
