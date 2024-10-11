const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "false",
})

const nextConfig = {
  reactStrictMode: true,
}

module.exports = withBundleAnalyzer(nextConfig)
