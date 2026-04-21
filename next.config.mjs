/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/c/:category',
        destination: '/random-:category-generator',
        permanent: true,
      },
      {
        source: '/:lang/c/:category',
        destination: '/:lang/random-:category-generator',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/random-:category-generator',
        destination: '/c/:category',
      },
      {
        source: '/:lang/random-:category-generator',
        destination: '/:lang/c/:category',
      },
    ];
  },
};

export default nextConfig;
