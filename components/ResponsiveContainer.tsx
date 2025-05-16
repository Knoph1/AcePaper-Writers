import type React from "react"
import { cn } from "@/lib/utils"

interface ResponsiveContainerProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
  fluid?: boolean
}

export function ResponsiveContainer({
  children,
  className,
  as: Component = "div",
  fluid = false,
}: ResponsiveContainerProps) {
  return (
    <Component
      className={cn(fluid ? "w-full px-4 sm:px-6 md:px-8" : "container mx-auto px-4 sm:px-6 md:px-8", className)}
    >
      {children}
    </Component>
  )
}
