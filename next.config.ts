import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static export. The site has no API routes, server actions, forms or
  // ISR, so there is nothing to run on a server. This keeps the Netlify deploy
  // off the Next.js runtime entirely — no serverless functions, so effectively
  // no compute credits burned against the plan's monthly allowance.
  output: "export",

  // Required by `output: "export"`. The only image is an SVG wordmark, which
  // the optimizer passes through untouched regardless.
  images: { unoptimized: true },
};

export default nextConfig;
