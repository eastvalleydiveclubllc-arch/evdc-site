import { path } from "@/lib/content";

export function Path() {
  return (
    <section className="relative bg-ink py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="eyebrow">{path.eyebrow}</p>
            <h2 className="font-display mt-6 text-bone text-4xl sm:text-6xl md:text-7xl leading-[1.02] font-medium whitespace-pre-line">
              {path.title}
            </h2>
          </div>
          <p className="text-stone-400 text-lg max-w-sm md:text-right">
            {path.sub}
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-px bg-white/5">
          {path.steps.map((s, i) => (
            <div
              key={s.tier}
              className="relative bg-ink p-8 sm:p-10 min-h-[260px] flex flex-col justify-between"
            >
              <div>
                <div className="font-display text-5xl sm:text-6xl text-crimson leading-none">
                  {s.tier}
                </div>
                <h3 className="font-display mt-6 text-2xl text-bone">
                  {s.name}
                </h3>
              </div>
              <p className="mt-4 text-stone-400 leading-relaxed text-sm">
                {s.blurb}
              </p>
              {i < path.steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-crimson/40">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
