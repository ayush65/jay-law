const stats = [
  { value: "2022", label: "Established" },
  { value: "2017", label: "Practising since" },
  { value: "2", label: "Islands served" },
];

export default function TrustStats() {
  return (
    <section className="border-y border-ink/[0.09] bg-paper">
      <div className="container-default grid grid-cols-1 gap-y-10 px-0 py-14 sm:grid-cols-3 lg:py-16 lg:[&>*:not(:first-child)]:border-l lg:[&>*:not(:first-child)]:border-ink/[0.09]">
        {stats.map((s) => (
          <div key={s.label} className="px-6 text-center lg:text-left lg:first:pl-0">
            <p className="font-serif text-5xl leading-none text-ink lg:text-6xl">
              {s.value}
            </p>
            <p className="mt-3 text-[0.68rem] font-bold tracking-[0.26em] text-stone uppercase">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
