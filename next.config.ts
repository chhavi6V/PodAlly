import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cachedimages.podchaser.com",
      },
    ],
  },
};

export default nextConfig;
