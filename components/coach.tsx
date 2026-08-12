import { coach } from "@/lib/content";

export function Coach() {
  // Coaches without a bio yet (Laura, Kainoa) stay unrendered until their
  // text arrives — the display order itself is Laura's and must not change.
  const roster = coach.coaches.filter((c) => c.bio.length > 0);

  return (
    <section id="coach" className="relative bg-ink py-28 sm:py-40 overflow-hidden">
      {/* Oversized diver watermark */}
      <svg
        aria-hidden
        viewBox="0 0 200 260"
        className="absolute -left-20 bottom-0 w-[80vw] max-w-[900px] text-crimson/5 pointer-events-none"
        fill="currentColor"
      >
        <path d="M120 20c8 0 16 6 16 15 0 10-8 17-17 17-8 0-16-6-16-15 0-10 8-17 17-17zm-30 50c4-3 10-3 15 0l30 20c6 4 10 10 10 18 0 3-1 6-2 8l-20 40c-3 5-9 8-15 8l-40 2c-8 0-15-6-15-14 0-8 6-14 14-15l34-2 12-24-23-15c-5-3-7-8-7-13 0-5 3-10 7-13z" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <p className="eyebrow">{coach.eyebrow}</p>
        <h2 className="font-display mt-6 text-bone text-5xl sm:text-7xl font-medium leading-[0.98]">
          {coach.headline}
          <span className="text-crimson">.</span>
        </h2>

        <div className="mt-16 grid md:grid-cols-2 gap-x-16 gap-y-14">
          {roster.map((c) => (
            <article key={c.name} className="border-t border-white/10 pt-8">
              {c.role && (
                <div className="text-xs uppercase tracking-[0.22em] text-stone-400">
                  {c.role}
                </div>
              )}
              <h3 className="font-display mt-3 text-2xl sm:text-3xl text-bone">
                {c.name}
              </h3>
              <div className="mt-5 space-y-4 text-stone-300 leading-relaxed text-sm sm:text-base">
                {c.bio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
