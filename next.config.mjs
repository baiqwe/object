/** @type {import('next').NextConfig} */
const nextConfig = {
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
