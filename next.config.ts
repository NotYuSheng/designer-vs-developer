import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/designer-vs-developer',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
