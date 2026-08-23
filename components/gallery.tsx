"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { gallery } from "@/lib/content";

/**
 * Photo slideshow — Laura's ask, 2026-08-22.
 *
 * Every slide sits in the DOM at once and crossfades on opacity. At a two
 * second pace there is no room to fetch the next photo on demand without a
 * flash, which is why the per-photo weight budget is tight (see README).
 *
 * The crossfade holds the outgoing photo at full opacity and fades the
 * incoming one in on top of it. Fading both at once would let the near-black
 * frame show through at the midpoint and read as a flicker.
 *
 * Autoplay stops on hover, on keyboard focus, on the pause button, and never
 * starts for prefers-reduced-motion (WCAG 2.2.2, Pause/Stop/Hide).
 */

// How long each photo holds, and how long the crossfade between two takes.
// Laura asked for a two second rotation; both are one-number tunables.
const SLIDE_MS = 2000;
const FADE_MS = 700;

export function Gallery() {
  const photos = gallery.photos;
  const [active, setActive] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const reduce = useReducedMotion();

  // Reduced-motion visitors get a still frame. The play button still works if
  // they want the rotation on their own terms.
  useEffect(() => {
    if (reduce) setUserPaused(true);
  }, [reduce]);

  const running = photos.length > 1 && !userPaused && !hovering;

  useEffect(() => {
    if (!running) return;
    const id = setInterval(
      () => setActive((i) => (i + 1) % photos.length),
      SLIDE_MS,
    );
    return () => clearInterval(id);
  }, [running, photos.length]);

  // No photos yet — render nothing rather than an empty frame.
  if (photos.length === 0) return null;

  const many = photos.length > 1;

  return (
    <section id="gallery" className="relative bg-charcoal py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <p className="eyebrow">{gallery.eyebrow}</p>
        <h2 className="font-display mt-6 text-bone text-4xl sm:text-6xl md:text-7xl leading-[1.02] font-medium">
          {gallery.title}
        </h2>

        <div
          className="mt-16 mx-auto max-w-5xl"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          onFocus={() => setHovering(true)}
          onBlur={() => setHovering(false)}
        >
          <div
            className="relative aspect-[3/2] overflow-hidden bg-ink"
            role="region"
            aria-roledescription="carousel"
            aria-label={gallery.label}
          >
            {photos.map((p, i) => {
              const isActive = i === active;
              return (
                <img
                  key={p.src}
                  src={p.src}
                  alt={p.alt}
                  aria-hidden={!isActive}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{
                    objectPosition: p.focus ?? "center",
                    opacity: isActive ? 1 : 0,
                    zIndex: isActive ? 2 : 1,
                    // Fade in over the outgoing photo; on the way out, hold
                    // full opacity underneath until the new one has covered it.
                    transition: isActive
                      ? `opacity ${FADE_MS}ms linear`
                      : `opacity 0ms linear ${FADE_MS}ms`,
                  }}
                />
              );
            })}
          </div>

          {many && (
            <div className="mt-6 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setUserPaused((p) => !p)}
                aria-label={
                  userPaused ? "Play the slideshow" : "Pause the slideshow"
                }
                className="-m-2 p-2 text-stone-400 hover:text-bone transition-colors"
              >
                {userPaused ? (
                  <svg viewBox="0 0 12 12" aria-hidden className="h-3 w-3 fill-current">
                    <path d="M2.6 1.1v9.8a.6.6 0 0 0 .92.5l7.4-4.9a.6.6 0 0 0 0-1L3.52.6a.6.6 0 0 0-.92.5Z" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 12 12" aria-hidden className="h-3 w-3 fill-current">
                    <rect x="1.6" y="1" width="3.2" height="10" rx="1" />
                    <rect x="7.2" y="1" width="3.2" height="10" rx="1" />
                  </svg>
                )}
              </button>

              <div className="flex items-center">
                {photos.map((p, i) => (
                  // The button is 24x24 — the WCAG 2.5.8 minimum target — while
                  // the dot inside stays small enough to still read as a dot.
                  <button
                    key={p.src}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Show photo ${i + 1} of ${photos.length}`}
                    aria-current={i === active}
                    className="h-6 w-6 flex items-center justify-center group"
                  >
                    <span
                      className={`block h-1.5 w-1.5 rounded-full transition-colors ${
                        i === active
                          ? "bg-crimson"
                          : "bg-white/25 group-hover:bg-white/60"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
