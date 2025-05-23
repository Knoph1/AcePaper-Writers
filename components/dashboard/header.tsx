"use client"

import { Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"

export function DashboardHeader() {
  return (
    <header className="bg-white border-b px-4 py-3 flex items-center justify-between">
      <div className="flex-1 md:flex-initial flex items-center">
        <Image src="/logo.png" alt="AcePaper Writers Logo" width={50} height={50} className="w-12 h-12 mr-2" />
        <div className="flex flex-col">
          <span className="text-lg font-bold leading-tight">
            <span className="text-orange-500">AcePaper</span>
            <span className="text-teal-900">Writers</span>
          </span>
          <span className="text-xs text-gray-600 font-medium leading-tight">We Write. You Excel.</span>
        </div>
      </div>

      <div className="hidden md:flex items-center flex-1 mx-4">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input type="search" placeholder="Search..." className="w-full pl-9 bg-gray-50 border-gray-200" />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <ThemeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-orange-500 rounded-full" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="max-h-80 overflow-y-auto">
              <DropdownMenuItem className="flex flex-col items-start py-2">
                <p className="font-medium">New message received</p>
                <p className="text-sm text-gray-500">John sent you a message about your order</p>
                <p className="text-xs text-gray-400 mt-1">2 minutes ago</p>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start py-2">
                <p className="font-medium">Order status updated</p>
                <p className="text-sm text-gray-500">Your order #1234 is now in progress</p>
                <p className="text-xs text-gray-400 mt-1">1 hour ago</p>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start py-2">
                <p className="font-medium">Payment confirmed</p>
                <p className="text-sm text-gray-500">Your payment of $120 has been processed</p>
                <p className="text-xs text-gray-400 mt-1">Yesterday</p>
              </DropdownMenuItem>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-center text-sm text-orange-500 cursor-pointer">
              View all notifications
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="gap-2">
              <div className="h-8 w-8 rounded-full bg-teal-900 flex items-center justify-center text-white">JD</div>
              <span className="hidden md:inline">John Doe</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Help & Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
