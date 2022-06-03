/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  reactStrictMode: true,
  env: {
    EMAILJS_SERVICE_ID: "service_6t69o7k",
    EMAILJS_TEMPLATE_ID: "template_imtp3jn",
    EMAILJS_PUBLIC_KEY: "AL1swyNGdurshL3Ts",
  },
};

module.exports = withBundleAnalyzer(nextConfig);
