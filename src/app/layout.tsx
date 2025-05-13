import { Inter } from "next/font/google"

import type { Metadata } from "next"

import { Container } from "@/components/layout/container"
import { ThemeProvider } from "@/components/theme/theme-provider"

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
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${inter.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Container>{children}</Container>
        </ThemeProvider>
      </body>
    </html>
  )
}
