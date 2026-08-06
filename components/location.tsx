import { location, site } from "@/lib/content";

export function Location() {
  return (
    <section id="location" className="relative bg-bone text-ink py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 grid md:grid-cols-2 gap-14 md:gap-20">
        <div>
          <p className="eyebrow" style={{ color: "var(--color-stone-500)" }}>
            {location.eyebrow}
          </p>
          <h2 className="font-display mt-6 text-ink text-4xl sm:text-6xl md:text-7xl leading-[1.02] font-medium">
            {location.title}
          </h2>

          <div className="mt-10">
            <div className="text-xs uppercase tracking-[0.22em] text-stone-500">
              Practice Facility
            </div>
            <div className="font-display text-2xl sm:text-3xl mt-3 text-ink">
              {site.address}
            </div>
          </div>

          <ul className="mt-10 space-y-4">
            {location.bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-4 text-ink/80 text-base sm:text-lg"
              >
                <span
                  aria-hidden
                  className="mt-2.5 inline-block h-px w-6 bg-crimson flex-shrink-0"
                />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${site.mapsQuery}`}
            target="_blank"
            rel="noreferrer"
            className="mt-12 inline-flex items-center gap-2 text-crimson hover:text-crimson-deep font-medium text-sm tracking-wide transition-colors"
          >
            Open in Google Maps
            <span aria-hidden>→</span>
          </a>
        </div>

        <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[540px] overflow-hidden bg-stone-200">
          <iframe
            title="Map to East Valley Dive Club"
            src={`https://www.google.com/maps?q=${site.mapsQuery}&output=embed`}
            className="absolute inset-0 w-full h-full grayscale contrast-[1.05]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
