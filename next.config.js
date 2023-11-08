/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// During Dev Mode
module.exports = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}

module.exports = nextConfig
