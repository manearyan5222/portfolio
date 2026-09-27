import type { NextConfig } from "next";

const isVercel = process.env.VERCEL === "1";
const basePath = isVercel ? "" : "/portfolio";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
