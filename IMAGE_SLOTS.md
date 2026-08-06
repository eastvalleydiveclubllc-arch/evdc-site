# Image slots to replace

This v0 site ships with a typographic hero (no photo) and an SVG logo
approximation. When Kayla sends real assets, swap these files:

| Slot            | File                  | Recommended     | Used by              |
| --------------- | --------------------- | --------------- | -------------------- |
| Wordmark logo   | `public/logo.svg`     | SVG, transparent| `components/nav.tsx` |
| Coach portrait  | `public/coach.jpg`    | 4:5, ≥ 1200px   | `components/coach.tsx` (currently a silhouette placeholder) |
| Hero photo (optional) | `public/hero.jpg` | 16:9 or wider, ≥ 2000px | `components/hero.tsx` — currently pure gradient, no photo needed |

To swap the hero to a real photo later:
1. Drop `public/hero.jpg`
2. In `components/hero.tsx`, uncomment the `<Image>` block and remove the
   gradient/grid layers.
