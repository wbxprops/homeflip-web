import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/ppm-pre-strategy-survey',
        destination: '/pre-strategy-survey',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
