/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '6c8fb3gvzm.ufs.sh',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '6c8fb3gvzm.ufs.sh',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
