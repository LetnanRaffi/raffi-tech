import { Heart, Github, Linkedin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-sidebar text-sidebar-foreground py-12 border-t border-sidebar-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo/photo_6246947705343118562_y.jpg"
                alt="RaffiTech Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <h3 className="text-xl font-bold text-sidebar-primary">RaffiTech Solutions</h3>
            </div>
            <p className="text-sidebar-foreground/80 text-pretty mb-6">
              Solusi teknologi terpercaya untuk kebutuhan digital Anda. Melayani dengan profesional dan hasil
              berkualitas.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/LetnanRaffi" target="_blank" rel="noreferrer" className="text-sidebar-foreground/60 hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/muhamad-raffi-pasha" target="_blank" rel="noreferrer" className="text-sidebar-foreground/60 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <a href="#home" className="text-sidebar-foreground/80 hover:text-sidebar-primary transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#services" className="text-sidebar-foreground/80 hover:text-sidebar-primary transition-colors">
                  Layanan
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-sidebar-foreground/80 hover:text-sidebar-primary transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#skills" className="text-sidebar-foreground/80 hover:text-sidebar-primary transition-colors">
                  Keahlian
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sidebar-foreground/80 hover:text-sidebar-primary transition-colors">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Layanan Utama</h4>
            <ul className="space-y-2 text-sidebar-foreground/80">
              <li>Desain Grafis</li>
              <li>Pembuatan Website</li>
              <li>Install Ulang PC/Laptop</li>
              <li>Jasa Pengetikan</li>
              <li>Laporan PKL</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sidebar-border mt-8 pt-8 text-center">
          <p className="text-sidebar-foreground/60 flex items-center justify-center gap-2 flex-wrap">
            <span>© 2025 RaffiTech Solutions. Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>by</span>
            <a href="https://muhamadraffipasha.vercel.app" target="_blank" rel="noreferrer" className="font-semibold hover:text-primary transition-colors hover:underline">
              Muhamad Raffi Pasha
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
