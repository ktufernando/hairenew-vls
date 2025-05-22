/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.imgur.com', 'img.youtube.com', 'via.placeholder.com', 'placehold.co'],
    unoptimized: process.env.NODE_ENV !== 'production',
  },
}

module.exports = nextConfig
