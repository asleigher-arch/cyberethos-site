import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
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
    }));
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
