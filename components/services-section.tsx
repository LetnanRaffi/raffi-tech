import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Palette, Globe, Wifi, Monitor } from "lucide-react"

const services = [
  {
    icon: Monitor,
    title: "Install Ulang & Software",
    description:
      "Laptop lemot atau kena virus? Kami install ulang Windows, aktivasi Office, setup antivirus, dan optimasi sistem. Data aman, performa kembali ngebut!",
    price: "Mulai Rp 50.000",
    features: ["Windows & Office Activation", "Driver & Update", "Hapus Virus/Malware", "Optimasi Startup"],
  },
  {
    icon: Globe,
    title: "Pembuatan Website",
    description:
      "Website modern dan mobile-friendly untuk bisnis Anda. Landing page, company profile, atau undangan digital dengan desain premium yang bikin pelanggan makin percaya!",
    price: "Mulai Rp 200.000",
    features: ["Landing Page", "Company Profile", "Undangan Digital", "SEO Friendly"],
  },
  {
    icon: Wifi,
    title: "Setting Jaringan & Mikrotik",
    description:
      "WiFi lemot atau mau buat voucher hotspot? Kami atur jaringan dengan Mikrotik agar koneksi stabil, bandwidth terbagi rata, dan aman dari penyusup!",
    price: "Mulai Rp 150.000",
    features: ["Setup Router & WiFi", "Mikrotik Voucheran", "LAN Kantor/Rumah", "Bandwidth Management"],
  },
  {
    icon: Palette,
    title: "Desain Grafis",
    description:
      "Tingkatkan citra bisnis Anda dengan desain profesional. Logo, banner, poster, CV, hingga konten sosmed yang eye-catching dan sesuai identitas brand!",
    price: "Mulai Rp 30.000",
    features: ["Logo & Branding", "Banner & Poster", "Desain CV", "Konten Sosmed"],
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent pulse-neon"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Software & Network Specialist</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 mt-2">
            Layanan Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Solusi IT lengkap untuk kebutuhan software dan jaringan Anda. Tanpa ribet, tanpa drama.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 border border-white/10 bg-card hover:border-primary/40 group overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <service.icon className="h-7 w-7 text-primary transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-card-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold mt-2">
                      {service.price}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-pretty group-hover:text-foreground/80 transition-colors duration-300 mb-4">
                  {service.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <span key={i} className="text-xs bg-muted px-2 py-1 rounded-md text-muted-foreground">
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
