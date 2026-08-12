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

### Known placeholders

The first version was built before any details were gathered from the club, so
some content is deliberately unfinished and some is unverified:

- The coach section is intentionally **name-free** until the club confirms who
  coaches — don't invent a name.
- No pricing or practice schedule anywhere on the site (real phone + email added 2026-08-12).
- Registration and contact buttons don't yet lead anywhere real.
- `public/logo.svg` is a stand-in, not the club's actual logo.
- Marketing claims in `lib/content.ts` (facility features, competitive
  results) were written without verification and are pending sign-off.

## Image credits

Both photos are CC0 / public domain (no attribution required); sources kept for the record:

- `public/images/springboard.jpg` — "Crystal Clear Swimming Pool Water with Diving Board" (CC0), via Openverse / Flickr: https://live.staticflickr.com/502/18794504112_7bf6dca615_b.jpg
- `public/images/underwater.jpg` — "swimming pool" underwater light (CC0), via Openverse / Flickr: https://live.staticflickr.com/2397/2140972884_c13023e9ef_b.jpg
