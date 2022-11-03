/** @type {import('next').NextConfig} */
// import withPlugins from "next-compose-plugins";
// import withPWA from "next-pwa";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images : {domains: ["raw.githubusercontent.com"],},
}
  
  const withPWA = require("next-pwa")({
	dest: "public",
	register: true,
  });
  
  module.exports = withPWA(nextConfig);
  
  