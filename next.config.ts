import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ycep4hdyvmfuo63e.public.blob.vercel-storage.com',
        port: '',
      },
    ]
  }
};

export default nextConfig;
