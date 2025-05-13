import Link from "next/link"

import { Button } from "@/components/ui/button"

import { Navbar } from "@/components/layout/navbar"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="grid items-center gap-6 pt-6 pb-8 md:py-10">
          <div className="flex max-w-[980px] flex-col items-start gap-2">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
              Next.js Enterprise <br className="hidden sm:inline" />
              with shadcn/ui Components
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              A showcase of UI components with theme support. Choose between normal and 8-bit theme styles, with full
              light and dark mode support.
            </p>
          </div>
          <div className="flex gap-4">
            <Button asChild>
              <Link href="/show-case/native-shadcn">Native Components</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/show-case/8bit-shadcn">8-Bit Components</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
