const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "false",
})

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: false,
  },
}

module.exports = withBundleAnalyzer(nextConfig)
