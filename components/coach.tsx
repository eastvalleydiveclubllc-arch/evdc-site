import { coach } from "@/lib/content";

export function Coach() {
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

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 grid md:grid-cols-5 gap-12 md:gap-16 items-center">
        {/* Portrait placeholder */}
        <div className="md:col-span-2">
          <div className="relative aspect-[4/5] w-full max-w-md bg-charcoal overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-2 to-ink" />
            <svg
              aria-hidden
              viewBox="0 0 200 260"
              className="absolute inset-0 w-full h-full text-crimson/30 p-8"
              fill="currentColor"
            >
              <path d="M120 20c8 0 16 6 16 15 0 10-8 17-17 17-8 0-16-6-16-15 0-10 8-17 17-17zm-30 50c4-3 10-3 15 0l30 20c6 4 10 10 10 18 0 3-1 6-2 8l-20 40c-3 5-9 8-15 8l-40 2c-8 0-15-6-15-14 0-8 6-14 14-15l34-2 12-24-23-15c-5-3-7-8-7-13 0-5 3-10 7-13z" />
            </svg>
            <div className="absolute bottom-4 left-4 right-4 text-xs uppercase tracking-[0.22em] text-stone-500">
              Portrait slot — replace with Kayla's photo
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="md:col-span-3">
          <p className="eyebrow">{coach.eyebrow}</p>
          <h2 className="font-display mt-6 text-bone text-5xl sm:text-7xl font-medium leading-[0.98]">
            {coach.name}
            <span className="text-crimson">.</span>
          </h2>
          <div className="mt-4 text-sm uppercase tracking-[0.22em] text-stone-400">
            {coach.title}
          </div>
          <div className="mt-10 space-y-5 text-stone-300 text-lg leading-relaxed max-w-xl">
            {coach.bioPlaceholder.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
