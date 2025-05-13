import Link from "next/link"

import { ThemeToggle } from "@/components/theme/theme-toggle"

export function Navbar() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center justify-between px-4">
        <nav className="hidden gap-6 md:flex">
          <Link href="/show-case/native-shadcn" className="text-sm font-medium transition-colors hover:text-primary">
            Native Components
          </Link>
          <Link href="/show-case/8bit-shadcn" className="text-sm font-medium transition-colors hover:text-primary">
            8-Bit Components
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}
