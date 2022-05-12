// @ts-check

/**
* @type {import('next').NextConfig}
**/
const nextConfig = {
    swcMinify: false,
    async redirects() {
        return [
          {
            source: '/',
            destination: '/user/darkingsoft',
            permanent: true,
          },
        ]
    },
}
  
module.exports = nextConfig