import { join } from "@/lib/content";

export function Join() {
  return (
    <section id="join" className="relative bg-paper text-ink py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <p
          className="eyebrow"
          style={{ color: "var(--color-stone-500)" }}
        >
          {join.eyebrow}
        </p>
        <h2 className="font-display mt-6 text-ink text-4xl sm:text-6xl md:text-7xl leading-[1.02] font-medium max-w-3xl">
          {join.title}
        </h2>

        <div className="mt-20 grid md:grid-cols-3 gap-10 md:gap-16">
          {join.steps.map((s) => (
            <div key={s.n} className="border-t border-ink/15 pt-8">
              <div className="font-display text-5xl text-crimson">{s.n}</div>
              <h3 className="font-display mt-6 text-2xl sm:text-3xl text-ink">
                {s.name}
              </h3>
              <p className="mt-4 text-ink/70 leading-relaxed">{s.blurb}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row gap-4">
          <a
            href={join.ctaPrimary.href}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-crimson hover:bg-crimson-deep text-bone px-8 py-4 text-base font-medium tracking-wide transition-colors"
          >
            {join.ctaPrimary.label}
            <span className="transition-transform group-hover:translate-x-1" aria-hidden>
              →
            </span>
          </a>
          <a
            href={join.ctaSecondary.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/25 hover:border-ink/60 text-ink px-8 py-4 text-base font-medium tracking-wide transition-colors"
          >
            {join.ctaSecondary.label}
          </a>
        </div>
      </div>
    </section>
  );
}
