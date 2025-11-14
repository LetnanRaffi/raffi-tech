import { Code, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-sidebar text-sidebar-foreground py-12 border-t border-sidebar-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-sidebar-primary mb-4">RaffiTech Solutions</h3>
            <p className="text-sidebar-foreground/80 text-pretty">
              Solusi teknologi terpercaya untuk kebutuhan digital Anda. Melayani dengan profesional dan hasil
              berkualitas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
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
          <p className="text-sidebar-foreground/60 flex items-center justify-center gap-2">
            <span>© 2025 RaffiTech Solutions. Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>and</span>
            <Code className="h-4 w-4 text-sidebar-primary" />
          </p>
        </div>
      </div>
    </footer>
  )
}
