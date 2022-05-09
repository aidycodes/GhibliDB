/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
   compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
   images: {
        domains: ['image.tmdb.org','www.jrailpass.com','upload.wikimedia.org','www.themoviedb.org'],
    },
}

module.exports = nextConfig
