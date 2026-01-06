import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Palette, Globe, RotateCcw, FileText, ClipboardList, Wifi } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Jasa Desain",
    description:
      "Tingkatkan citra bisnis Anda dengan desain profesional untuk logo, banner, dan materi promosi. Tampil lebih meyakinkan di era digital!",
    price: "Mulai Rp 30.000",
  },
  {
    icon: Globe,
    title: "Pembuatan Website",
    description:
      "Website modern dan mobile-friendly untuk bisnis UMKM, portfolio, atau toko online. Tampilan profesional yang bikin pelanggan makin percaya!",
    price: "Mulai Rp 200.000",
  },
  {
    icon: RotateCcw,
    title: "Install Ulang & Service",
    description:
      "Laptop lemot? Sering hang atau bluescreen? Serahkan ke ahlinya! Performa kembali ngebut, data aman, dan bergaransi. Proses cepat!",
    price: "Mulai Rp 50.000",
  },
  {
    icon: Wifi,
    title: "Setting Jaringan & Mikrotik",
    description:
      "WiFi lemot sampai ke kamar? Kami atur jaringan dengan Mikrotik agar koneksi stabil ke seluruh rumah, aman, dan bisa kontrol pemakaian!",
    price: "Mulai Rp 150.000",
  },
  {
    icon: FileText,
    title: "Jasa Ngetik",
    description:
      "Layanan pengetikan dokumen Word, Excel, PowerPoint dengan akurasi tinggi dan format profesional. Hemat waktu Anda!",
    price: "Hubungi Kami",
  },
  {
    icon: ClipboardList,
    title: "Pembuatan Laporan PKL",
    description:
      "Bantuan penyusunan laporan PKL dengan format rapi, profesional, dan sesuai standar akademik. Lulus tanpa ribet!",
    price: "Hubungi Kami",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent pulse-neon"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Layanan Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Solusi teknologi terdepan untuk kebutuhan digital era modern
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 border border-white/10 bg-card hover:border-accent/50 hover:scale-105 group"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <service.icon className="h-6 w-6 text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl text-card-foreground group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-pretty group-hover:text-foreground transition-colors duration-300 mb-3">
                  {service.description}
                </CardDescription>
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                  {service.price}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
