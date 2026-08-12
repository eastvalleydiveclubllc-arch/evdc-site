// All site copy lives here. Edit this file to retune every word on the site.
// Placeholders marked with `PLACEHOLDER_` prefixes — safe to swap live.

export const REGISTRATION_URL_PLACEHOLDER = "#join";

export const site = {
  name: "East Valley Dive Club",
  shortName: "EVDC",
  city: "Mesa",
  state: "Arizona",
  address: "845 S Crismon Rd, Mesa, AZ 85208",
  mapsQuery: "845+S+Crismon+Rd,+Mesa,+AZ+85208",
  instagram: "https://www.instagram.com/eastvalleydiveclub/",
  facebook: "https://www.facebook.com/eastvalleydiveclub/",
  email: "eastvalleydiveclubllc@gmail.com",
  phone: "480-469-8699",
  phoneHref: "tel:+14804698699",
} as const;

export const hero = {
  eyebrow: "Mesa, Arizona · Since the beginning",
  headline: {
    pre: "Built for the ones",
    accent: "who go",
    post: "higher.",
  },
  sub: "Arizona's top springboard and platform diving club. Beginner lessons through National qualifiers — under one roof.",
  ctaPrimary: { label: "Join the Club", href: "#join" },
  ctaSecondary: { label: "See Programs", href: "#programs" },
} as const;

export const about = {
  eyebrow: "The Club",
  title: "We teach the hardest moment\nin every sport: the takeoff.",
  body: [
    "East Valley Dive Club is a year-round springboard and platform program based in Mesa. We coach beginners finding their first back dive, high-school athletes pursuing state, and national-level qualifiers aiming for Zones and Nationals — all on the same deck, all built around the same fundamentals.",
    "What makes the program different isn't the facility. It's the standard. We run practices the way championship divers train, from day one.",
  ],
  stats: [
    { value: "All ages", label: "Beginner to National" },
    { value: "Year-round", label: "Not a summer camp" },
    { value: "Regionals → Nationals", label: "Competition path" },
  ],
} as const;

export const programs = {
  eyebrow: "Programs",
  title: "Pick your lane.",
  sub: "Six distinct programs. One standard.",
  items: [
    {
      name: "Beginner Lessons",
      tag: "Ages 6+",
      blurb:
        "First dives, first flips, first time off the 3-meter. Structured curriculum — not open swim with a whistle.",
      featured: false,
    },
    {
      name: "Intermediate Lessons",
      tag: "Ready to compete?",
      blurb:
        "The bridge from rec to team. Build a dive list, learn meet flow, earn a spot on the roster.",
      featured: false,
    },
    {
      name: "Recreational Team",
      tag: "All levels",
      blurb:
        "Train with a team. Compete if you want to. Discover if the sport is for you without committing to year-round.",
      featured: false,
    },
    {
      name: "Competitive Team",
      tag: "Regionals · Zones · Nationals",
      blurb:
        "Year-round, high-volume, high-standard. For divers pursuing the full USA Diving competition path.",
      featured: true,
    },
    {
      name: "Gym-to-Dive",
      tag: "For retired gymnasts",
      blurb:
        "A bridge program for gymnasts transitioning to diving. Leverage your air awareness — we'll teach the water.",
      featured: false,
    },
    {
      name: "HS Summer Camp",
      tag: "May – August",
      blurb:
        "High-school divers only. Six weeks, four days a week, one goal: come back to your team better than you left.",
      featured: false,
    },
  ],
} as const;

export const coach = {
  eyebrow: "Coaching",
  headline: "Meet the coaches",
  title: "",
  bio: [
    "This section will introduce the coaching staff — who runs practice, what they competed in, and how they teach.",
    "Names, bios and photos are being added.",
  ],
} as const;

export const location = {
  eyebrow: "Where We Train",
  title: "East Mesa. Heated pool. Full diving well.",
  bullets: [
    "Springboard + platform towers",
    "Year-round heated facility",
    "Dryland training area on-site",
    "Free parking, easy access from the 60 and 202",
  ],
} as const;

export const path = {
  eyebrow: "The Path",
  title: "From first dive\nto Nationals.",
  sub: "A clear progression, not a maze. Here's where the road goes.",
  steps: [
    {
      tier: "I",
      name: "Foundation",
      blurb: "Balance, body line, water entry. The non-negotiables.",
    },
    {
      tier: "II",
      name: "Regionals",
      blurb: "Qualify out of Arizona. Earn your dive list. Travel as a team.",
    },
    {
      tier: "III",
      name: "Zones",
      blurb: "Compete against the best in the West. Multi-day meets. Real pressure.",
    },
    {
      tier: "IV",
      name: "Nationals",
      blurb: "The top of the USA Diving ladder. A few EVDC divers get there every year.",
    },
  ],
} as const;

export const join = {
  eyebrow: "How to Join",
  title: "Three steps. No guesswork.",
  steps: [
    {
      n: "01",
      name: "Free trial class",
      blurb:
        "Show up, meet a coach, get in the water. Free, no commitment. Dress code: swimsuit + towel.",
    },
    {
      n: "02",
      name: "Sign up in the parent portal",
      blurb:
        "Add your family and diver info, see which classes have open spots, and pick your days.",
    },
    {
      n: "03",
      name: "Monthly billing, handled",
      blurb:
        "Card on file in the portal. Simple, predictable monthly dues.",
    },
  ],
} as const;

export const contact = {
  eyebrow: "Contact",
  title: "Questions?\nCoaches answer their own email.",
  sub: "Tap below — we'll get back to you within a day, usually sooner.",
  emailLabel: "Email the club",
} as const;
