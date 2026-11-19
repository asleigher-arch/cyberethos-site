import type { NextConfig } from "next";

// Friend's static homepage security policy. Scoped to the document at /
// only. Do not copy this onto other routes: it would block analytics
// and a future Meta Pixel on /review.
const homepageDocumentHeaders = [
  {
    key: "Content-Security-Policy",
    value:
      "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'self'; media-src 'self'; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self'; upgrade-insecure-requests",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...[
        "/signin",
        "/signup",
        "/profile",
        "/calendar",
        "/form-elements",
        "/basic-tables",
        "/blank",
        "/line-chart",
        "/bar-chart",
        "/alerts",
        "/avatars",
        "/badge",
        "/buttons",
        "/images",
        "/videos",
        "/modals",
        "/error-404",
      ].map((source) => ({
        source,
        destination: "/",
        permanent: false,
      })),
      // The static file is also reachable at this path. Send people to /
      // so relative asset URLs in the document resolve at the site root.
      {
        source: "/home/index.html",
        destination: "/",
        permanent: false,
      },
      // These pages are gone. Permanent so old links and ads open /.
      { source: "/subscribe", destination: "/", permanent: true },
      { source: "/members", destination: "/", permanent: true },
      { source: "/welcome-founding", destination: "/", permanent: true },
      { source: "/welcome", destination: "/", permanent: true },
      { source: "/thanks", destination: "/", permanent: true },
    ];
  },
  async rewrites() {
    return {
      // beforeFiles runs before the App Router page at /, so the document
      // is the friend's static HTML and not the previous React homepage.
      beforeFiles: [
        {
          source: "/",
          destination: "/home/index.html",
        },
      ],
    };
  },
  async headers() {
    return [
      { source: "/", headers: homepageDocumentHeaders },
      {
        source: "/assets/fonts/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/assets/css/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        source: "/assets/js/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        source: "/assets/vendor/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        source: "/assets/img/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        source: "/assets/terrain/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
