/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
  turbo: {
    loaders: {}, // ✅ or leave empty if unsure
  },
}

};

module.exports = nextConfig;
