import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["@huggingface/inference"],
  }
};

export default nextConfig;
