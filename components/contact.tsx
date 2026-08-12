import { contact, site } from "@/lib/content";

export function Contact() {
  const mailto = `mailto:${site.email}?subject=East%20Valley%20Dive%20Club%20—%20Question`;

  return (
    <section id="contact" className="relative bg-ink py-28 sm:py-40">
      <div className="mx-auto max-w-5xl px-6 sm:px-10 text-center">
        <p className="eyebrow">{contact.eyebrow}</p>
        <h2 className="font-display mt-6 text-bone text-4xl sm:text-6xl md:text-7xl leading-[1.02] font-medium whitespace-pre-line">
          {contact.title}
        </h2>
        <p className="mt-8 text-stone-400 text-lg max-w-2xl mx-auto">
          {contact.sub}
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={mailto}
            className="group inline-flex items-center gap-2 rounded-full bg-crimson hover:bg-crimson-deep text-bone px-8 py-4 text-base font-medium tracking-wide transition-colors"
          >
            {contact.emailLabel}
            <span className="transition-transform group-hover:translate-x-1" aria-hidden>
              →
            </span>
          </a>
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 hover:border-white/50 hover:bg-white/5 text-bone px-8 py-4 text-base font-medium tracking-wide transition-colors"
          >
            Call or text
          </a>
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 hover:border-white/50 hover:bg-white/5 text-bone px-8 py-4 text-base font-medium tracking-wide transition-colors"
          >
            Instagram
          </a>
        </div>

        <div className="mt-12 text-xs uppercase tracking-[0.22em] text-stone-500">
          {site.email} · {site.phone}
        </div>
      </div>
    </section>
  );
}
