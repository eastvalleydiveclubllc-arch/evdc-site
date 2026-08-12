import { about } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="relative bg-ink py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <p className="eyebrow">{about.eyebrow}</p>
        <h2 className="font-display mt-6 text-bone text-4xl sm:text-6xl md:text-7xl leading-[1.02] font-medium max-w-4xl whitespace-pre-line">
          {about.title}
        </h2>

        <div className="mt-16 grid md:grid-cols-2 gap-12 md:gap-20">
          <div className="space-y-6 text-stone-300 text-lg leading-relaxed">
            {about.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="flex flex-col gap-10 md:border-l md:border-white/10 md:pl-12">
            <div className="relative aspect-[3/2] overflow-hidden">
              <img
                src="/images/springboard.jpg"
                alt="Springboard over rippling pool water"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            {about.stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl sm:text-4xl text-bone leading-none">
                  {s.value}
                </div>
                <div className="mt-3 text-sm uppercase tracking-[0.22em] text-stone-400">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
