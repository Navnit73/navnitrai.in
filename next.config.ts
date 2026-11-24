import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export to ./out — served by Cloudflare (see wrangler.json).
  // Security headers live in public/_headers.
  output: "export",
  poweredByHeader: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
