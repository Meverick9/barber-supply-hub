/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'm.media-amazon.com' },
      { protocol: 'https', hostname: 'images-na.ssl-images-amazon.com' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.barbersupplyhub.com' }],
        destination: 'https://barbersupplyhub.com/:path*',
        permanent: true,
      },
    ]
  },
}
module.exports = nextConfig