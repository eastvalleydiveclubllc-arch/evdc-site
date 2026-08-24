import { programs } from "@/lib/content";

export function Programs() {
  return (
    <section id="programs" className="relative bg-charcoal py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <p className="eyebrow">{programs.eyebrow}</p>
        <h2 className="font-display mt-6 text-bone text-4xl sm:text-6xl md:text-7xl leading-[1.02] font-medium">
          {programs.title}
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {programs.items.map((p) => (
            <article
              key={`${p.name} ${p.tag}`}
              className="relative bg-charcoal p-8 sm:p-10 min-h-[280px] flex flex-col justify-between"
            >
              {p.featured && (
                <div className="absolute top-0 inset-x-0 h-[2px] bg-crimson" />
              )}
              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-stone-400">
                  {p.tag}
                </div>
                <h3 className="font-display mt-4 text-2xl sm:text-3xl text-bone leading-tight">
                  {p.name}
                </h3>
              </div>
              <p className="mt-6 text-stone-300 leading-relaxed text-sm sm:text-base">
                {p.blurb}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
