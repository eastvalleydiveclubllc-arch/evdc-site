// Prebuild: fetch verified review submissions from Netlify Forms and write
// them to lib/reviews-data.json for the Reviews component to render.
//
// Behavior is deliberately asymmetric:
//   - NETLIFY_REVIEWS_TOKEN absent  → keep the committed JSON, exit 0
//     (local dev and pre-setup deploys work unchanged)
//   - token present but fetch fails → exit 1 and FAIL THE BUILD
//     (a soft fallback would silently ship the committed file and make
//     every published review vanish from the site; a failed deploy keeps
//     the last good version live instead)
//
// If a build fails here, the usual cause is an expired/invalidated token —
// see README "Parent reviews". Never log the token.

import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const API = "https://api.netlify.com/api/v1";
const SITE = "eastvalleydiving.com"; // Netlify accepts the domain as site_id
const FORM_NAME = "reviews";
const OUT_FILE = join(dirname(fileURLToPath(import.meta.url)), "..", "lib", "reviews-data.json");

const token = process.env.NETLIFY_REVIEWS_TOKEN;

if (!token) {
  console.log("fetch-reviews: NETLIFY_REVIEWS_TOKEN not set — keeping committed reviews-data.json");
  process.exit(0);
}

async function api(path) {
  const res = await fetch(`${API}${path}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "User-Agent": "evdc-site build (eastvalleydiveclubllc@gmail.com)",
    },
  });
  if (!res.ok) {
    throw new Error(`GET ${path} → HTTP ${res.status}`);
  }
  return res.json();
}

try {
  const forms = await api(`/sites/${SITE}/forms`);
  const form = forms.find((f) => f.name === FORM_NAME);
  if (!form) {
    throw new Error(`no form named "${FORM_NAME}" on site ${SITE}`);
  }

  const submissions = [];
  for (let page = 1; ; page++) {
    const batch = await api(`/forms/${form.id}/submissions?per_page=100&page=${page}`);
    submissions.push(...batch);
    if (batch.length < 100) break;
  }

  const reviews = submissions
    .map((s) => ({
      id: s.id,
      quote: (s.data?.review ?? "").trim(),
      name: (s.data?.name ?? "").trim(),
      date: s.created_at,
      // NEVER include s.data.email or s.data.ip — this file ships publicly.
    }))
    .filter((r) => r.quote && r.name)
    .filter((r) => !r.name.toLowerCase().includes("delete me"))
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  writeFileSync(OUT_FILE, JSON.stringify(reviews, null, 2) + "\n");
  console.log(`fetch-reviews: wrote ${reviews.length} review(s) to lib/reviews-data.json`);
} catch (err) {
  console.error(`fetch-reviews: FAILED — ${err.message}`);
  console.error("fetch-reviews: token is set, so this build is aborted on purpose (see README \"Parent reviews\"). Expired token is the usual cause.");
  process.exit(1);
}
