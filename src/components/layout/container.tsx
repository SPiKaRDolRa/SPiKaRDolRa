// src/components/layout/container.tsx
import { cn } from "@/lib/utils"

export function Container({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mx-auto w-full px-4 md:px-6 container", className)} {...props}>
      {children}
    </div>
  )
}
