"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { site } from "@/lib/content";

const links = [
  { href: "#about", label: "The Club" },
  { href: "#programs", label: "Programs" },
  { href: "#location", label: "Location" },
  { href: "#join", label: "Join" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink/85 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 sm:px-10 h-16 flex items-center justify-between">
        <a href="#top" aria-label={site.name} className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt={`${site.name} logo`}
            width={120}
            height={45}
            className="h-9 w-auto"
            priority
          />
          <span className="sr-only">{site.name}</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-stone-300">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-bone transition-colors tracking-wide"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#join"
          className="inline-flex items-center gap-2 rounded-full bg-crimson hover:bg-crimson-deep text-bone px-5 py-2 text-sm font-medium transition-colors"
        >
          Register
          <span aria-hidden>→</span>
        </a>
      </nav>
    </header>
  );
}
