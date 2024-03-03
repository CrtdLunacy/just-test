// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'minipark.by',
        port: '',
        pathname: '/wp-content/uploads/2021/10/32170-ford-mustang-2011-gt-maisto.jpg',
      },
    ],
  }
}

export default nextConfig
