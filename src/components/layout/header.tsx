"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { NavItem } from "@/types"
import { cn } from "@/lib/utils"

interface HeaderProps {
  logo?: React.ReactNode
  navItems?: NavItem[]
  actions?: React.ReactNode
  className?: string
}

export function Header({ logo, navItems = [], actions, className }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className={cn("sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", className)}>
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          {logo && <a href="/starter-template/" className="mr-6 flex items-center space-x-2">{logo}</a>}
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle Menu</span>
        </Button>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          {logo && (
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <a href="/starter-template/" className="flex items-center md:hidden">{logo}</a>
            </div>
          )}
          {actions && <div className="flex items-center space-x-2">{actions}</div>}
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Separator />
          <div className="container py-4">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="text-foreground/60 transition-colors hover:text-foreground/80"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}