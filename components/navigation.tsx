"use client"

import Link from "next/link"
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from 'lucide-react'
import { useState } from "react"
import Image from "next/image"

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Startseite" },
    { href: "/leistungen", label: "Leistungen" },
    { href: "/mietwagen", label: "Mietwagen" },
    { href: "/galerie", label: "Galerie" },
    { href: "/ueber-uns", label: "Über Uns" },
    { href: "/kontakt", label: "Kontakt" },
  ]
  // </CHANGE>

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo-main.png"
              alt="RG Rüsselsheimer Garage Logo"
              width={120}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-secondary ${
                  pathname === item.href ? "text-primary" : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors"
            >
              <Link href="/kontakt">
                <Phone className="w-4 h-4 mr-2" />
                Termin anfragen
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-secondary ${
                    pathname === item.href ? "text-primary" : "text-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors w-full"
              >
                <Link href="/kontakt" onClick={() => setMobileMenuOpen(false)}>
                  <Phone className="w-4 h-4 mr-2" />
                  Termin anfragen
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
