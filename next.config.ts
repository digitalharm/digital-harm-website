import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The reporting directory moved into the Guides collection as
      // "For Reporting Content". Preserve the old URL.
      {
        source: "/reporting",
        destination: "/for-reporting",
        permanent: true,
      },
      // Editorial standards merged into the About page (anchors preserved,
      // e.g. /about#independence). The browser keeps the fragment on redirect.
      {
        source: "/editorial-standards",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
