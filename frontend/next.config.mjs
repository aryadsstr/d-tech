/** @type {import('next').NextConfig} */
const nextConfig = {};

export default {
  async rewrites() {
    return [
      { source: '/sitemap.xml', destination: '/public/sitemap.xml' },
    ];
  },
};
