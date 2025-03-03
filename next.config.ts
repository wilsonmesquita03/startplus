import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "escolastart.s3.sa-east-1.amazonaws.com",
      },
    ],
  },
  experimental: {
    authInterrupts: true,
  },
};

export default nextConfig;

