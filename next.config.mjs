import path from 'node:path';
import { fileURLToPath } from 'node:url';
import categoriesData from './data/json/categories.json' with { type: 'json' };

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const categoryMatcher = categoriesData.map((category) => category.slug).join('|');
const objectImageBaseUrl = process.env.NEXT_PUBLIC_OBJECT_IMAGE_BASE_URL;
const objectImageHostname = objectImageBaseUrl ? new URL(objectImageBaseUrl).hostname : null;

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // Cloudflare Workers/OpenNext should serve already-compressed WebP assets
    // directly from R2/CDN instead of relying on Next's dynamic image optimizer.
    unoptimized: true,
    remotePatterns: objectImageHostname
      ? [
          {
            protocol: 'https',
            hostname: objectImageHostname,
            pathname: '/images/objects/**',
          },
        ]
      : [],
  },
  async redirects() {
    return [
      {
        source: '/en',
        destination: '/',
        permanent: true,
      },
      {
        source: '/en/:path*',
        destination: '/:path*',
        permanent: true,
      },
      {
        source: `/c/:category(${categoryMatcher})`,
        destination: '/random-:category-generator',
        permanent: true,
      },
      {
        source: `/:lang(en|zh|ja)/c/:category(${categoryMatcher})`,
        destination: '/:lang/random-:category-generator',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, s-maxage=86400, stale-while-revalidate=604800',
          },
        ],
      },
      {
        source: '/:file(robots.txt|sitemap.xml|ads.txt)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800',
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: `/random-:category(${categoryMatcher})-generator`,
        destination: '/c/:category',
      },
      {
        source: `/:lang(en|zh|ja)/random-:category(${categoryMatcher})-generator`,
        destination: '/:lang/c/:category',
      },
    ];
  },
};

export default nextConfig;
