"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface MobileMenuProps {
  links: {
    href: string
    label: string
  }[]
}

export function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  // Close menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="relative z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-sm transition-all duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8 p-4">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="AcePaper Writers Logo" width={60} height={60} className="w-14 h-14" />
            <div className="flex flex-col text-center">
              <span className="text-lg font-bold leading-tight">
                <span className="text-orange-500">AcePaper</span>
                <span className="text-teal-900">Writers</span>
              </span>
              <span className="text-xs text-gray-600 font-medium leading-tight">We Write. You Excel.</span>
            </div>
          </div>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xl font-medium hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}
