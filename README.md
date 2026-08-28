# East Valley Dive Club — website

The website for East Valley Dive Club in Mesa, Arizona.

**If you're Laura:** you're in the right place. This is where the website's
files live. You don't need to understand any of it — you'll never edit these
files directly. The only thing you need this repository for is one step:
connecting it to Netlify, which is covered in the setup packet.

Nothing here can break the live site by being looked at.

---

## Connecting this to Netlify

In Netlify: **Add new project → Import an existing project → GitHub →
`evdc-site` → Deploy.**

Don't change the build settings it shows you. They're already set correctly by
`netlify.toml` in this folder:

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Publish directory | `out` |
| Node version | 22 |

## For developers

Next.js 16 (App Router), TypeScript, Tailwind v4, framer-motion. npm.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export → out/
```

The site is a **static export** (`output: "export"` in `next.config.ts`) —
no server, no API routes, no serverless functions. It deploys as plain files.

All site copy lives in **`lib/content.ts`**. Edit that one file to change any
wording on the site; the components read from it. Images still needed are
listed in `IMAGE_SLOTS.md`.

### Parent reviews

The Reviews section has a "Leave a review" form backed by **Netlify Forms**
(form name `reviews`) — no server needed on a static export. Two things to
know:

1. **Netlify setup (one-time, done 2026-08-13):** form detection enabled in
   the site's Netlify dashboard (Forms tab), email notification pointed at
   the club Gmail. Additionally the self-serve publish flow needs two env
   vars on the site (both created/owned by Laura): `NETLIFY_REVIEWS_TOKEN`
   (a Netlify personal access token, used at build time to read submissions)
   and `NEXT_PUBLIC_PUBLISH_HOOK_URL` (a build hook URL, baked into the
   publish page).
   **🔴 Status 2026-08-28: neither env var was ever created.** Laura tried and
   couldn't get it working (08-27), so the self-serve flow below is NOT live —
   publishing is currently the manual path: she forwards reviews, they go into
   `reviews.quotes` in `lib/content.ts`, and a push deploys them. Everything
   below stays accurate for the day the env vars exist; nothing needs rebuilding.
2. **Publishing a review — no developer involved:** nothing appears on the
   site automatically. `scripts/fetch-reviews.mjs` runs before every build
   (npm `prebuild`) and pulls the form's **verified** submissions from the
   Netlify API into `lib/reviews-data.json`, which the Reviews section
   renders (never the email or IP fields). Laura's flow:
   - Notification email arrives with the review.
   - **Good** → open the bookmarked `eastvalleydiving.com/coach-publish/`
     page → tap **Publish new reviews to the site** → live in ~2 minutes.
   - **Bad** → delete it (or Mark as spam) in the Netlify Forms tab; deleted
     and spam submissions can never publish.
   - **Remove one already on the site** → delete it in Forms, then tap
     Publish again.

Notes for developers:

- The `/coach-publish/` page is unlinked and `noindex`; worst case someone
  who finds it triggers a rebuild (costs a build credit, never content).
- **A failing deploy with `fetch-reviews: FAILED` in the log is deliberate**:
  the token was present but the API call failed (expired token, or Laura
  reset her Netlify password, which invalidates all tokens). Fix = Laura
  generates a fresh token and updates `NETLIFY_REVIEWS_TOKEN`. The build
  fails rather than silently shipping an empty review list.
- `reviews.quotes` in `lib/content.ts` still works for hand-pinned/edited
  quotes; they render ahead of the fetched ones. **The two lists are deduped
  on normalised quote text**, so the nine reviews pinned by hand on 2026-08-28
  won't render twice on the day the fetch pipeline is switched on — they came
  out of the same Netlify submissions the script reads.
- The quote wall is CSS multi-column, not a grid, because reviews run from one
  line to 140 words and grid rows stretch every cell to the tallest. Cards use
  `break-inside-avoid`; don't convert it back to `grid-cols-*`.
- `public/__forms.html` is a hidden mirror of the form that guarantees
  Netlify's build-time detection finds it — keep its field names in sync
  with `components/reviews.tsx`.

### Known placeholders

The first version was built before any details were gathered from the club, so
some content is deliberately unfinished and some is unverified:

- The coach section is live with all six bios (Kainoa Sauls's arrived
  2026-08-21). Headshots are still inbound, and Kainoa is the one coach whose
  title we don't have — his `role` is deliberately empty until Laura says.
- No pricing or practice schedule anywhere on the site (real phone + email added 2026-08-12).
- Registration + parent portal now link to JackRabbit (added 2026-08-12); contact email/phone are real.
- `public/logo.svg` is a stand-in, not the club's actual logo.
- The About body, the three About stats, and the four program names are
  Laura's own words (2026-08-21). Her prose took three small copyedits
  (parallelism, one Oxford comma, one sentence fragment) and the program
  blurbs were assembled from her wording elsewhere in `content.ts` — all
  flagged to her, none signed off yet.
- The unverified April claims "Arizona's top ... club" and "springboard **and
  platform**" were removed sitewide 2026-08-22 (her facility is springboards
  only: 3x1m + 1x3m, no towers). "Regionals" survives as a step in the Path
  section on purpose — that's the real USA Diving ladder, not the stat line
  she edited. **Platform is named once again, on purpose:** Laura said
  2026-08-24 that the team travels offsite for platform practices, so the
  Competition Team blurb says so. What was removed was the sitewide *platform
  positioning*, not this — don't sweep it as drift.
- Laura's 2026-08-24 round (also unsigned-off): the hero sub is her wording
  ("Rec classes & Competition Team", "beginner to Nationals" cut — swept from
  the meta description too), the "Flagship program" label is gone from the
  Competition Team card (the crimson top rule stays), and the clause carrying
  her platform fragment — "with travel offsite for platform practices" — is
  written here, not by her.

## Image credits

`skyline-board.jpg` is the club's own photo. The other two are CC0 / public
domain (no attribution required); sources kept for the record:

- `public/images/skyline-board.jpg` — **the club's own photo**, shot by Laura
  Sanchez at Skyline Aquatic Center, sent 2026-08-21 and used with her
  permission. Not CC0 — do not reuse outside this site. Prepared with
  `magick <src> -auto-orient -strip -gravity center -crop 3:2 +repage -resize 1400x -quality 78`;
  the source was a portrait iPhone HEIC (EXIF orientation 6), and `-strip` is
  required — phone photos carry GPS.
- `public/images/gallery/*.webp` — **the club's own photos**, sent by Laura
  2026-08-12 and shipped 2026-08-22 after she confirmed media-release coverage.
  Not CC0 — do not reuse outside this site. See "Photo slideshow" below.
- `public/images/springboard.jpg` — "Crystal Clear Swimming Pool Water with Diving Board" (CC0), via Openverse / Flickr: https://live.staticflickr.com/502/18794504112_7bf6dca615_b.jpg — no longer on the page; still the OG/share image (`app/layout.tsx`).
- `public/images/underwater.jpg` — "swimming pool" underwater light (CC0), via Openverse / Flickr: https://live.staticflickr.com/2397/2140972884_c13023e9ef_b.jpg

### Photo slideshow

`components/gallery.tsx` crossfades the photos in `gallery.photos`
(`lib/content.ts`) on a two-second rotation, between the Join and Contact
sections. `SLIDE_MS` and `FADE_MS` at the top of the component are the only
knobs for pace. An empty `photos` array renders nothing, so the section is safe
to ship dark.

**Photos of minors.** Nothing goes in here until Laura confirms media-release
coverage for that photo or set — this repo is public, so a commit is permanent
and cannot be scrubbed without her (she owns the repo). Alt text describes
action and setting only and never names a diver.

**Adding a photo.** Pre-crop to 3:2 so it matches the frame, strip EXIF, and
encode WebP:

```
magick <src> -auto-orient -strip \
  -set option:cw '%[fx: min(w, h*3/2) ]' \
  -set option:ch '%[fx: min(h, w*2/3) ]' \
  -set option:oy '%[fx: round( (h - min(h, w*2/3)) * <PCT>/100 ) ]' \
  -set option:ox '%[fx: round( (w - min(w, h*3/2))/2 ) ]' \
  -crop '%[cw]x%[ch]+%[ox]+%[oy]' +repage \
  -resize '1400x933>' -quality 72 public/images/gallery/NN-name.webp
```

`<PCT>` slides the 3:2 window vertically (50 = centred, 70 = lower — use it to
keep heads and feet in frame on tall shots). `-auto-orient` first and `-strip`
are both mandatory: iPhone photos arrive rotated by EXIF and carry GPS.
`1400x933>` never upscales, so an already-small photo stays at its native size
rather than faking resolution.

WebP at q72 is roughly half the bytes of the equivalent JPEG and is visually
indistinguishable at 1:1. Keep the whole set under ~1.5 MB — every slide
downloads when the section renders. The current ten total 1.2 MB.

Then add an entry to `gallery.photos` with `src` and `alt`. Filenames are
numbered in display order; the order is deliberate (alternating scale, venue
and brightness so each crossfade reads as a change).
