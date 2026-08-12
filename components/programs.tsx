import { programs } from "@/lib/content";

export function Programs() {
  return (
    <section id="programs" className="relative bg-charcoal py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="eyebrow">{programs.eyebrow}</p>
            <h2 className="font-display mt-6 text-bone text-4xl sm:text-6xl md:text-7xl leading-[1.02] font-medium">
              {programs.title}
            </h2>
          </div>
          <p className="text-stone-400 text-lg max-w-sm md:text-right">
            {programs.sub}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {programs.items.map((p) => (
            <article
              key={p.name}
              className={`relative bg-charcoal p-8 sm:p-10 min-h-[280px] flex flex-col justify-between ${
                p.featured ? "lg:col-span-1" : ""
              }`}
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
              {p.featured && (
                <div className="mt-6 inline-flex items-center gap-2 text-crimson text-xs font-medium uppercase tracking-[0.22em]">
                  Flagship program
                  <span aria-hidden>→</span>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
