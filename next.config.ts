import withBundleAnalyzer from "@next/bundle-analyzer"
import { type NextConfig } from "next"

import { env } from "./env.mjs"

const config: NextConfig = {
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  // การเปลี่ยนโฟลเดอร์ root ใน Next.js 15
  distDir: 'dist', // ถ้าต้องการเปลี่ยน build output directory

  // กำหนด path pattern สำหรับไฟล์ที่ย้ายไปอยู่ใน src
  pageExtensions: ['tsx', 'ts', 'jsx', 'js', 'mdx', 'md'],

  rewrites: async () => [
    { source: "/healthz", destination: "/api/health" },
    { source: "/api/healthz", destination: "/api/health" },
    { source: "/health", destination: "/api/health" },
    { source: "/ping", destination: "/api/health" },
  ],
}

export default env.ANALYZE ? withBundleAnalyzer({ enabled: env.ANALYZE })(config) : config