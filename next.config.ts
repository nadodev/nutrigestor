import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  reactStrictMode: true,
  experimental: {
    serverActions: {
      allowedOrigins: ['*']
    }
  },
};

export default nextConfig;


