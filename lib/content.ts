// All site copy lives here. Edit this file to retune every word on the site.
// Placeholders marked with `PLACEHOLDER_` prefixes — safe to swap live.

// JackRabbit links from Laura, 2026-08-12. Registration = new families;
// the parent portal is where existing families manage classes and billing.
export const REGISTRATION_URL =
  "https://app.jackrabbitclass.com/regv2.asp?id=558510";
export const PARENT_PORTAL_URL =
  "https://app.jackrabbitclass.com/jr4.0/ParentPortal/Login?orgId=558510";

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
  eyebrow: "Mesa, Arizona · Springboard & Platform",
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

// Coach order is Laura's explicit instruction (2026-08-12):
// Laura, Kayla, Amanda, Kainoa, Kendall, Rocky.
// Laura's and Kainoa's bios are still inbound — empty bio = not rendered.
// Bios are the coaches' own words, lightly copyedited for typos only.
export const coach = {
  eyebrow: "Coaching",
  headline: "Meet the coaches",
  coaches: [
    {
      name: "Laura Sanchez",
      role: "Head Coach",
      bio: [
        "Originally from Wisconsin, I was a four-time state qualifier. I began club diving with the Schroeder Dive Team during my junior year and went on to dive collegiately at Minnesota State Mankato. As a freshman I qualified for the NCAA Division II championships, but a knee injury toward the end of the season ultimately ended my competitive diving career.",
        "After transitioning to coaching, I led several Wisconsin high school athletes to state championships and was honored with a nomination for Coach of the Year. Alongside coaching, I also worked in the marketing department at Harley-Davidson, gaining valuable experience in leadership and communication.",
        "In 2016 I moved to Arizona, and I joined East Valley Dive Club in 2017. Since then, I've had the privilege of watching countless divers grow within the program and continue their careers at the collegiate level. For me, coaching is about more than just diving — it's about helping young athletes develop life skills, confidence, leadership, and the resilience to push beyond their comfort zones.",
        "I became head coach of EVDC in the fall of 2022 and continue to coach high school diving as well, where I've had multiple athletes qualify for the AIA State Meet and have been voted Coach of the Year.",
        "Outside the pool, I'm a proud mom of three boys and love spending my time with family.",
      ],
    },
    {
      name: "Kayla Huffman",
      role: "Assistant Coach",
      bio: [
        "I'm originally from Flagstaff, where I dove for Northern Arizona Divers for 14 years. While diving for NAD I was a USA Diving National qualifier in the 14-15 and 16-18 age groups and qualified for AAU Nationals at 15, 16, 17, and 18, making finals in every age group.",
        "After my diving career I spent two years as an assistant coach for NAD. I originally applied for the military, then an auto mechanics job brought me to Mesa — and along the way, EVDC reached out about coaching. I've been with the club about three years now.",
        "When I'm not coaching, I work full time for an HVAC test and balance company in Tempe. And when I'm not working, I'm most likely camping or spending time with family and friends.",
      ],
    },
    {
      name: "Amanda Naylor",
      role: "Coach",
      bio: [
        "I'm originally from outside Philadelphia and started diving when I was six years old — and fell in love with the sport. I walked on at Rider University, a small school in New Jersey, and decided to train full time after I graduated. I trained for the 2012 and 2016 Olympics.",
        "I'm a two-time national champion, spent four years on the national team, and was a member of the 2016 Olympic performance squad, a 2013 World Team member and finalist in 3-meter synchro, and a two-time Olympic Trials finalist.",
        "I moved to Phoenix in February 2017 and started coaching with East Valley Dive Club in 2018. I love coaching and enjoy sharing the knowledge I've gained from all my experiences as a diver and a coach. Outside of coaching, I work from home full time at CVS Health.",
      ],
    },
    {
      name: "Kainoa",
      role: "",
      bio: [],
    },
    {
      name: "Kendall Marquez",
      role: "Substitute Coach",
      bio: [
        "Born and raised in Flagstaff, I dove with Nikki Huffman on the Northern Arizona Divers club team for five years, after about three years of competitive gymnastics. In college I dove all four years for Northern Arizona University's Division I swim and dive team, qualifying for NCAA Zones three of those years on 1-meter and 3-meter springboard.",
        "I graduated from NAU in May 2025 with a bachelor's degree in construction management, which led me to the Valley working as a field engineer at Sundt Construction in transportation. I've coached at Northern Arizona diving camps, helped out with the NAD club, and recently started helping out here at EVDC. I love this sport, and I'm excited to share it and keep diving a part of my life.",
      ],
    },
    {
      name: 'Raquel "Rocky" Gonzales',
      role: "Substitute Coach",
      bio: [
        "Growing up in Chandler, I started in competitive gymnastics before moving into trampoline and tumbling, qualifying for Nationals in 2008. I transitioned to diving as a freshman at Hamilton High School, becoming a three-time Division I State Qualifier, team captain, and school record-holder for both six dives (216.0) and eleven dives (384.7). I later qualified for the 2014 USA Diving Age Group Nationals, placing 24th on platform representing Sun Devil Divers.",
        "I went on to dive NCAA Division I at Northern Arizona University, where I earned the second-highest platform score in program history, three NCAA Zone qualifications, and nine All-WAC honors. Today I bring that competitive background into coaching — helping athletes develop strong fundamentals, confidence, and the mental toughness to excel in and out of the pool.",
      ],
    },
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
      blurb: "The top of the USA Diving ladder.",
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
  ctaPrimary: { label: "Register online", href: REGISTRATION_URL },
  ctaSecondary: { label: "Parent portal login", href: PARENT_PORTAL_URL },
} as const;

export const contact = {
  eyebrow: "Contact",
  title: "Questions?\nCoaches answer their own email.",
  sub: "Tap below — a coach will get back to you.",
  emailLabel: "Email the club",
} as const;
