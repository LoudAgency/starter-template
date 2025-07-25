import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { NavItem } from "@/types"
import { cn } from "@/lib/utils"

interface FooterProps {
  logo?: React.ReactNode
  description?: string
  navItems?: NavItem[]
  socialLinks?: NavItem[]
  copyright?: string
  className?: string
}

export function Footer({
  logo,
  description,
  navItems = [],
  socialLinks = [],
  copyright,
  className,
}: FooterProps) {
  return (
    <footer className={cn("border-t bg-background", className)}>
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            {logo && <div>{logo}</div>}
            {description && (
              <p className="text-sm text-muted-foreground max-w-xs">
                {description}
              </p>
            )}
            {socialLinks.length > 0 && (
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {navItems.length > 0 && (
            <div className="md:col-span-3">
              <nav className="grid gap-4 md:grid-cols-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
        {copyright && (
          <>
            <Separator className="my-8" />
            <div className="text-center text-sm text-muted-foreground">
              {copyright}
            </div>
          </>
        )}
      </div>
    </footer>
  )
}