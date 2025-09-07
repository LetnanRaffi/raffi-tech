"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false) // Close mobile menu after clicking
    }
  }

  return (
    <nav className="bg-background/90 backdrop-blur-lg border-b border-accent/30 sticky top-0 z-50 cyberpunk-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary neon-glow cursor-pointer">
              <span className="text-accent">{">"}</span> RaffiTech <span className="text-primary">_</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:neon-glow"
              >
                Beranda
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-foreground hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:neon-glow"
              >
                Layanan
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-foreground hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:neon-glow"
              >
                Keahlian
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:neon-glow"
              >
                Kontak
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-accent hover:neon-glow transition-all duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card/90 backdrop-blur-sm rounded-lg mt-2 cyberpunk-border">
              <button
                onClick={() => scrollToSection("home")}
                className="text-card-foreground hover:text-accent block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 w-full text-left hover:neon-glow"
              >
                Beranda
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-card-foreground hover:text-accent block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 w-full text-left hover:neon-glow"
              >
                Layanan
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-card-foreground hover:text-accent block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 w-full text-left hover:neon-glow"
              >
                Keahlian
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-card-foreground hover:text-accent block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 w-full text-left hover:neon-glow"
              >
                Kontak
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
