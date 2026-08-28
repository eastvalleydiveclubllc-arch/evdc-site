"use client";

import { useState } from "react";
import { reviews, site } from "@/lib/content";
import reviewsData from "@/lib/reviews-data.json";

// Submissions go to Netlify Forms (form name "reviews"). The hidden mirror
// form in public/__forms.html registers the form at build time — keep its
// field names in sync with this one.
//
// Published quotes come from two places: hand-pinned entries in
// content.ts (`reviews.quotes`, listed first) and lib/reviews-data.json,
// which scripts/fetch-reviews.mjs fills at build time from the form's
// verified submissions. Laura publishes/removes via Netlify + the
// /coach-publish/ page — no code change per review.
const fetched = reviewsData as {
  id: string;
  quote: string;
  name: string;
  date: string;
}[];

export function Reviews() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const body = new URLSearchParams();
    new FormData(form).forEach((value, key) => body.append(key, String(value)));
    setStatus("sending");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClasses =
    "w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-bone placeholder:text-stone-500 focus:outline-none focus:border-white/40 transition-colors";

  // Laura's first nine reviews were pasted into content.ts by hand, out of
  // the same Netlify submissions scripts/fetch-reviews.mjs reads. Dedupe on
  // the quote text so switching the fetch pipeline on can't render them twice.
  const seen = new Set<string>();
  const quotes = [
    ...reviews.quotes.map((q, i) => ({ key: `pinned-${i}`, ...q })),
    ...fetched.map((r) => ({
      key: r.id,
      quote: r.quote,
      name: r.name,
      detail: undefined as string | undefined,
    })),
  ].filter((q) => {
    const fingerprint = q.quote
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
    if (seen.has(fingerprint)) return false;
    seen.add(fingerprint);
    return true;
  });

  return (
    <section id="reviews" className="relative bg-charcoal py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="eyebrow">{reviews.eyebrow}</p>
            <h2 className="font-display mt-6 text-bone text-4xl sm:text-6xl md:text-7xl leading-[1.02] font-medium">
              {reviews.title}
            </h2>
          </div>
          <p className="text-stone-400 text-lg max-w-sm md:text-right">
            {reviews.sub}
          </p>
        </div>

        {/* Multi-column, not a grid: reviews run from one line to a hundred
            words, and grid rows stretch every cell to the tallest one. Columns
            let each card end where its text ends. break-inside-avoid keeps a
            card from splitting across a column. */}
        {quotes.length > 0 && (
          <div className="mt-16 columns-1 md:columns-2 lg:columns-3 gap-x-16">
            {quotes.map((q) => (
              <figure
                key={q.key}
                className="break-inside-avoid border-t border-white/10 pt-8 mb-14"
              >
                <blockquote className="text-stone-200 leading-relaxed">
                  &ldquo;{q.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6">
                  <div className="text-bone font-medium">{q.name}</div>
                  {q.detail && (
                    <div className="mt-1 text-xs uppercase tracking-[0.22em] text-stone-400">
                      {q.detail}
                    </div>
                  )}
                </figcaption>
              </figure>
            ))}
          </div>
        )}

        <div className="mt-16 max-w-2xl">
          <h3 className="font-display text-2xl sm:text-3xl text-bone">
            {reviews.form.heading}
          </h3>
          <p className="mt-3 text-stone-400">{reviews.form.sub}</p>

          {status === "sent" ? (
            <p className="mt-8 text-lg text-bone rise-in" role="status">
              {reviews.form.success}
            </p>
          ) : (
            <form
              name="reviews"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="mt-8 space-y-4"
            >
              <input type="hidden" name="form-name" value="reviews" />
              <p className="hidden" aria-hidden="true">
                <label>
                  Don&rsquo;t fill this out: <input name="bot-field" />
                </label>
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="review-name"
                    className="block text-sm text-stone-300 mb-2"
                  >
                    {reviews.form.nameLabel}
                  </label>
                  <input
                    id="review-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label
                    htmlFor="review-email"
                    className="block text-sm text-stone-300 mb-2"
                  >
                    {reviews.form.emailLabel}
                  </label>
                  <input
                    id="review-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="review-text"
                  className="block text-sm text-stone-300 mb-2"
                >
                  {reviews.form.reviewLabel}
                </label>
                <textarea
                  id="review-text"
                  name="review"
                  required
                  rows={5}
                  className={inputClasses}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 rounded-full bg-crimson hover:bg-crimson-deep disabled:opacity-60 text-bone px-8 py-4 text-base font-medium tracking-wide transition-colors"
              >
                {status === "sending"
                  ? reviews.form.sending
                  : reviews.form.submitLabel}
                <span aria-hidden>→</span>
              </button>

              {status === "error" && (
                <p className="text-stone-300" role="alert">
                  {reviews.form.error}{" "}
                  <a
                    href={`mailto:${site.email}?subject=EVDC%20review`}
                    className="text-bone underline underline-offset-4 hover:text-crimson transition-colors"
                  >
                    {site.email}
                  </a>
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
