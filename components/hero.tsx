import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative h-[100svh] min-h-[760px] w-full overflow-hidden bg-ink"
    >
      {/* Layered gradient background */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 80% 10%, rgba(200,16,46,0.22) 0%, rgba(200,16,46,0.06) 35%, rgba(10,10,10,0) 60%), radial-gradient(80% 60% at 10% 100%, rgba(201,169,110,0.10) 0%, rgba(10,10,10,0) 55%), linear-gradient(180deg, #0a0a0a 0%, #0a0a0a 60%, #141414 100%)",
        }}
      />

      {/* Subtle grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07] kenburns"
        style={{
          backgroundImage:
            "linear-gradient(rgba(250,250,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(250,250,247,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Oversized diver silhouette */}
      <svg
        aria-hidden
        viewBox="0 0 320 440"
        className="absolute right-[-6vw] top-[4%] w-[78vw] max-w-[920px] text-crimson/[0.14] pointer-events-none"
        fill="currentColor"
      >
        {/* Stylized diver in pike — tall vertical silhouette */}
        <g>
          <circle cx="180" cy="50" r="26" />
          <path d="M160 80 Q135 115 155 160 Q185 195 230 180 Q260 165 248 130 Q235 100 205 96 Z" />
          <path d="M215 110 L305 10 L320 30 L228 136 Z" />
          <path d="M155 140 Q138 170 160 200 Q175 212 185 200 Q180 180 170 170 Z" />
          {/* water ripple */}
          <path d="M40 380 Q120 360 200 380 T360 380" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
          <path d="M20 410 Q110 390 200 410 T380 410" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
          <path d="M0 430 Q100 410 200 430 T400 430" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.2" />
        </g>
      </svg>

      {/* Top vignette */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink to-transparent" aria-hidden />
      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink to-transparent" aria-hidden />

      {/* Content */}
      <div className="relative h-full mx-auto max-w-7xl px-6 sm:px-10 flex flex-col justify-end pb-20 sm:pb-28 pt-28">
        <p className="eyebrow fade-up fade-up-1">{hero.eyebrow}</p>
        <h1 className="font-display fade-up fade-up-2 mt-5 text-bone text-[3.25rem] leading-[0.95] sm:text-7xl md:text-8xl lg:text-[8.5rem] font-medium max-w-5xl">
          {hero.headline.pre}{" "}
          <span className="text-stone-300">{hero.headline.accent}</span>{" "}
          <span
            className="text-crimson italic draw-underline"
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            {hero.headline.post}
          </span>
        </h1>
        <p className="fade-up fade-up-3 mt-8 max-w-xl text-base sm:text-lg text-stone-300 leading-relaxed">
          {hero.sub}
        </p>
        <div className="fade-up fade-up-4 mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href={hero.ctaPrimary.href}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-crimson hover:bg-crimson-deep text-bone px-7 py-3.5 text-sm font-medium tracking-wide transition-colors"
          >
            {hero.ctaPrimary.label}
            <span className="transition-transform group-hover:translate-x-1" aria-hidden>
              →
            </span>
          </a>
          <a
            href={hero.ctaSecondary.href}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 hover:border-white/50 hover:bg-white/5 text-bone px-7 py-3.5 text-sm font-medium tracking-wide transition-colors"
          >
            {hero.ctaSecondary.label}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-stone-500 text-[10px] tracking-[0.4em] uppercase fade-up fade-up-4">
        Scroll
      </div>
    </section>
  );
}
