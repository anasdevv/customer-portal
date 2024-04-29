/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placeimg.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '**.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '**.supabase.co',
        port: '',
      },
      // bgstdvulbdofaqrbanez.supabase.co
    ],
  },
};

module.exports = nextConfig;
