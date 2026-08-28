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
  eyebrow: "Mesa, Arizona",
  headline: {
    pre: "Built for the ones",
    accent: "who go",
    post: "higher.",
  },
  sub: "Year-round springboard diving in Mesa. Rec classes & Competition Team.",
  ctaPrimary: { label: "Join the Club", href: "#join" },
  ctaSecondary: { label: "See Programs", href: "#programs" },
} as const;

export const about = {
  eyebrow: "The Club",
  title: "We teach the hardest moment\nin every sport: the takeoff.",
  // Body is Laura's own copy (2026-08-21), lightly copyedited: parallelism in
  // the first line, one Oxford comma, and the fragment in the last paragraph.
  // Facts unchanged. Flagged to her for review.
  body: [
    "Whether it's your first diving class or you're heading to Nationals, we're excited for you to dive into the EVDC program!",
    "Our mission is to help every diver build a strong foundation in the fundamentals of diving, develop new skills and dives, prepare for meets, compete with confidence, and proudly represent EVDC.",
    "Being a great diver is about more than learning dives. Through our program, divers will develop confidence, discipline, critical thinking, physical and mental strength, conditioning, time management, and goal-setting skills. Along the way, we hope to create an environment where athletes have fun, make lifelong friends, celebrate personal accomplishments, and create memories that last far beyond the pool.",
    "Our knowledgeable coaching staff trains year-round at Skyline Aquatic Center. We're sanctioned by AAU and USA Diving for our competitive season, and sponsored by Arena for team gear.",
  ],
  // Laura's closing line, verbatim - rendered as a pull-quote, not a paragraph.
  kicker:
    "Dive in. Work hard. Have fun. Support your teammates. Set goals. Make memories.",
  // Stats are Laura's wording (2026-08-21). "AAU & USA Diving" spells out what
  // she wrote as "AAU & USA" - flagged to her.
  stats: [
    { value: "All ages", label: "Beginner to team" },
    { value: "Year-round", label: "Rec & competition team classes" },
    { value: "→ Nationals", label: "AAU & USA Diving" },
  ],
} as const;

export const programs = {
  eyebrow: "Programs",
  title: "Get started here.",
  // Four programs per Laura (2026-08-21), replacing April's invented six.
  // She supplied names only; blurbs are assembled from her own wording
  // elsewhere in this file and are pending her sign-off.
  //
  // The platform mention in the Competition Team blurb is Laura's own
  // (2026-08-24) and is deliberate: the sitewide "springboard AND platform"
  // positioning was removed 2026-08-22 because her facility is springboards
  // only, but the team does travel offsite for platform practices. Don't
  // sweep it as drift.
  items: [
    {
      name: "Rec Class",
      tag: "Ages 12 & Under",
      blurb:
        "First dives, first flips, first time on the boards. A structured foundation in the fundamentals of diving.",
      featured: false,
    },
    {
      name: "Rec Class",
      tag: "Ages 13 & Up",
      blurb:
        "Same fundamentals, later start. Learn the boards, develop new skills and dives, and find out where the sport takes you.",
      featured: false,
    },
    {
      name: "Pre-Team",
      tag: "Coming soon",
      blurb:
        "The step between rec class and the competition team. Details coming soon.",
      featured: false,
    },
    {
      name: "Competition Team",
      tag: "AAU & USA Diving",
      blurb:
        "Year-round training at Skyline Aquatic Center, with travel offsite for platform practices. Prepare for meets, compete with confidence, and represent EVDC.",
      featured: true,
    },
  ],
} as const;

// Coach order is Laura's explicit instruction (2026-08-12):
// Laura, Kayla, Amanda, Kainoa, Kendall, Rocky.
// Kainoa's title is still unconfirmed; an empty role renders without a kicker.
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
      // Bio replaced 2026-08-24 at Kayla's request (texted to Nate, via Laura).
      name: "Kayla Huffman",
      role: "Assistant Coach",
      bio: [
        "I'm originally from Flagstaff, where I dove for Northern Arizona Divers for 14 years. While diving for NAD I was a USA Diving National qualifier in the 14-15 and 16-18 age groups and qualified for AAU Nationals at 15, 16, 17, and 18, making finals in every age group. Diving under Nikki Kelsey and learning from her years of coaching is where I found my love of diving and coaching — and where I started following in my mother's footsteps, coaching alongside her as her assistant coach.",
        "After my diving career I spent two years as an assistant coach for NAD. While coaching at NAD I originally applied for the military, then an auto mechanics job brought me to Mesa — and along the way, EVDC reached out about coaching. I've been with the club about three years now, and we've made amazing connections with our athletes and the other coaches.",
        "When I'm not coaching at EVDC, I'm back in Flagstaff helping Nikki Kelsey, the head diving coach at NAU, with her summer diving camps as head counselor.",
        "When I'm not at the pool or coaching, I work a full-time job for an HVAC test and balance company in Tempe — I'm very grateful to them for being super flexible with my crazy summer coaching schedule. And when I'm not coaching or working, I'm camping or spending time with my friends and family; it's my favorite thing to do, with coaching a close second.",
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
      name: "Kainoa Sauls",
      role: "",
      bio: [
        "I was a competitive diver for 12 years, during which I had the honor of being coached by several Olympians, including Michele Mitchell, Hongping Lee, and Rafa Quintero, as well as Olympic team coaches such as Dwight Dumais, Omar Ojeda, and John Winfield. Under their tutelage, I won regional titles and competed at the national and elite levels from the age of 10 through 18.",
        "Later, I was recruited by Hongping Lee to dive at the University of Southern California before medically retiring from the sport due to back injuries.",
        "My favorite category of dives has always been twisters, with the 5335D on 1m being my favorite, while the 205B on 3m has always been my go-to dive.",
      ],
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

// Facility facts are Laura's own list (2026-08-12) — don't embellish.
export const location = {
  eyebrow: "Where We Train",
  title: "Skyline Aquatic Center,\nEast Mesa.",
  bullets: [
    "Three 1-meter boards and one 3-meter board",
    "Pool heated during the winter months",
    "Classroom for seasonal dryland training",
    "Shaded bleachers for spectators",
    "City of Mesa lifeguards",
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

// Reviews flow: parents submit through the on-site form (Netlify Forms →
// email notification to the club). Laura picks which ones publish; paste
// approved quotes into `quotes` below — their words, typo-fixes only, same
// policy as coach bios. Keep divers' names out unless the parent
// deliberately included them. While `quotes` is empty, the section shows
// the form alone.
export const reviews = {
  eyebrow: "Families",
  title: "What families say.",
  sub: "Straight from EVDC families and alumni. Every review is read by a coach before it appears here.",
  // Parents' and alumni's own words, from Laura's 2026-08-28 batch out of
  // Netlify Forms. Copyedited for typos only. See README "Publishing a review".
  quotes: [
    {
      quote:
        "My daughter has dove with EVDC for several years, and I believe it has helped develop her into the confident, resilient, driven young woman she is today. Everyone is friendly, professional, and more importantly, fun. This team has given her a plethora of memorable experiences and a second family I know she will always cherish.",
      name: "Stacy Killough",
    },
    {
      quote:
        "We couldn’t be happier with our experience at East Valley Dive Club. The coaches have made such a meaningful difference in both of our kids’ lives, and we are incredibly grateful to be a part of this team. With our oldest, their guidance has played a huge role in his growth and has helped him reach the level of being recruited by Division I programs. Just as importantly, they have created such a welcoming and supportive environment for our youngest, who has special needs. That means more to our family than we can put into words. What we appreciate most is that the coaches recognize that every athlete is different and they meet the child where they are. Whether the athlete is working toward competing at the highest level or simply finding joy in the sport, they’ve got you. We highly recommend East Valley Dive Club!",
      name: "Kori Sprintz",
    },
    {
      quote:
        "East Valley Dive Club has been amazing for my son. From the first day he joined the club, the coaches have been very committed to his development as a diver as well as a young man. They care about their divers and are very knowledgeable and skilled in their coaching. I’m a former coach and I recognize a good program and EVDC is definitely a program you should send your kids to for diving.",
      name: "Michael Romero",
    },
    {
      quote:
        "After 13 years of competitive gymnastics my daughter decided to transition into diving at EVDC. Coach Laura and her team have made the switch so easy. After a year at East Valley my daughter is competing dives I never even imagined! We love the EVDC program, coaches and families!",
      name: "Kirsten Emmerton",
    },
    {
      quote:
        "My teenage boys have been diving at East Valley for the past four years and have had a wonderful experience! The coaches really care about the kids, work hard to help them learn and improve, and provide year round opportunities for growth. We especially love Laura and appreciate how organized and involved she is in each diver’s journey. We highly recommend East Valley Dive Club!",
      name: "Stephanie Evans",
    },
    {
      quote:
        "Can’t say enough about our wonderful coaches and the joy of watching our son’s diving journey to nationals for the past 5 years. Because of the excellent coaching his dive list depth and growth are evident and continue to push for his best.",
      name: "Sheila Smith",
    },
    {
      quote:
        "EVDC is the best club in Arizona!! I dove there for about 5 years and it was the best ever! The coaches are amazing and the program is awesome! Highly recommend and everything about it is amazing!",
      name: "Abbey Gardner",
      detail: "Former diver",
    },
    {
      quote:
        "We love EVDC! My daughter started club dive after doing a season of high school dive. She learned so much at EVDC and placed higher at state dive year after year because of it.",
      name: "Joleen Stratton",
    },
    {
      quote:
        "We love EVDC!! So happy we found them! The coaches are amazing!",
      name: "Hanna Little",
    },
  ] as { quote: string; name: string; detail?: string }[],
  form: {
    heading: "Leave a review",
    sub: "Have a diver in the program? Tell other families what to expect.",
    nameLabel: "Your name",
    emailLabel: "Email (optional)",
    reviewLabel: "Your review",
    submitLabel: "Send review",
    sending: "Sending…",
    success: "Thanks — Coach Laura reads every one.",
    error: "That didn't go through. Email us instead:",
  },
} as const;

// Copy for the hidden /coach-publish/ page — Laura's one-tap review
// publisher. The page is unlinked and noindexed; she keeps it bookmarked.
export const publishPage = {
  eyebrow: "Coach tools",
  heading: "Publish reviews",
  sub: "New parent reviews wait off the site until you publish them. Anything you deleted (or marked as spam) in the Netlify Forms tab will never publish.",
  button: "Publish new reviews to the site",
  publishing: "Publishing — the site will update in about 2 minutes. You can close this page.",
  error: "That didn't send. Check your connection and tap again.",
  notConfigured:
    "Not set up yet — the publish link hasn't been connected. Text Nate.",
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

/** One slide in the photo slideshow. */
export type GalleryPhoto = {
  src: string;
  /**
   * Describes action and setting only. NEVER a diver's name — club standard
   * for photos of minors, set 2026-08-12.
   */
  alt: string;
  /** CSS object-position for the 3:2 crop. Omit for "center". */
  focus?: string;
};

// Laura's club photos. She confirmed media-release coverage before these
// shipped — the standing rule is that no photo of a diver goes up without it.
// Order is deliberate, not chronological; see README.
//
// `eyebrow` and `title` are written here, not by Laura — on the ask-Laura list
// alongside the rest of the 2026-08-21 round.
export const gallery = {
  eyebrow: "Photos",
  title: "On the boards.",
  label: "Club photos",
  // Pre-cropped to 3:2 to match the frame, so `focus` is unused today — it is
  // here for any photo added later that is not already 3:2.
  photos: [
    {
      src: "/images/gallery/01-sunset-poolside.webp",
      alt: "The team sitting along the edge of the pool under a burning orange sky, the color reflected across the water.",
    },
    {
      src: "/images/gallery/02-lineup-bright-suits.webp",
      alt: "Divers lined up along the pool deck in bright competition suits.",
    },
    {
      src: "/images/gallery/03-group-selfie.webp",
      alt: "Divers crowded into a group selfie on the pool deck, mid-laugh.",
    },
    {
      src: "/images/gallery/04-deck-tower-flags.webp",
      alt: "The team and a coach on the deck at a meet, banners strung behind them and a diving tower beyond.",
    },
    {
      src: "/images/gallery/05-full-team-indoor.webp",
      alt: "The club in team shirts at an indoor aquatic center, diving platforms behind them.",
    },
    {
      src: "/images/gallery/06-three-divers-poolside.webp",
      alt: "Two divers in team suits poolside with a younger club member between them.",
    },
    {
      src: "/images/gallery/07-team-tower.webp",
      alt: "Divers in team suits on the deck at an outdoor meet, a diving tower rising behind.",
    },
    {
      src: "/images/gallery/08-away-meet-deck.webp",
      alt: "The team in club shirts poolside at an away meet.",
    },
    {
      src: "/images/gallery/09-team-towels-deck.webp",
      alt: "Divers in team suits with towels over their shoulders, poolside at an outdoor meet.",
    },
    {
      src: "/images/gallery/10-towels-blue-sky.webp",
      alt: "Four divers on the board deck with towels around their shoulders under a clear sky.",
    },
  ] as GalleryPhoto[],
} as const;
