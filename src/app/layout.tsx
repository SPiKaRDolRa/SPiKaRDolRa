import { Inter } from "next/font/google"

import type { Metadata } from "next"

import "../styles/tailwind.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Next.js Enterprise with shadcn/ui",
  description: "A Next.js enterprise application with shadcn/ui components",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
