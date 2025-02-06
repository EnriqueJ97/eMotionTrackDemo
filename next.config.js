/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/eMotionTrackDemo',
  assetPrefix: '/eMotionTrackDemo',
  trailingSlash: true
}

module.exports = nextConfig
