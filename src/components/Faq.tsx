import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { faqGroups } from "@/lib/data";
import Reveal from "@/components/Reveal";

export function FaqList({
  items,
}: {
  items: { title: string; content: string }[];
}) {
  return (
    <div>
      {items.map((item) => (
        <details key={item.title} className="faq-item">
          <summary>
            <span className="text-[1.05rem] font-semibold text-ink md:text-lg">
              {item.title}
            </span>
            <span className="faq-icon" aria-hidden />
          </summary>
          <p className="faq-body">{item.content}</p>
        </details>
      ))}
    </div>
  );
}

export default function Faq() {
  const preview = faqGroups[0].items;

  return (
    <section className="bg-ivory py-24 lg:py-32">
      <div className="container-default max-w-4xl">
        <Reveal>
          <p className="eyebrow">FAQs</p>
          <h2 className="mt-6 font-serif text-4xl leading-[1.08] text-ink sm:text-5xl">
            Common questions.
          </h2>
        </Reveal>

        <div className="mt-14">
          <FaqList items={preview} />
        </div>

        <p className="mt-12 text-center">
          <Link
            href="/faqs"
            className="nav-link inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-forest"
          >
            View all FAQs
            <ArrowRight size={16} />
          </Link>
        </p>
      </div>
    </section>
  );
}
