import { Card, CardContent } from "@/components/ui/card"
import { Eye, Zap, Headphones, Wallet } from "lucide-react"

const usps = [
    {
        icon: Eye,
        title: "Transparansi Total",
        description:
            "Jujur soal kerusakan, gak ada biaya siluman. Harga yang disepakati = harga yang dibayar. Gak ada drama 'ternyata harus ganti ini itu' mendadak.",
        highlight: "No Biaya Tersembunyi",
    },
    {
        icon: Zap,
        title: "Teknisi Muda & Update",
        description:
            "Kami paham teknologi terbaru: Cloud, Mikrotik modern, Web App, AI. Bukan cara jadul yang ribet dan lama. Solusi cepat dengan metode kekinian.",
        highlight: "Tech-Savvy",
    },
    {
        icon: Headphones,
        title: "Fast Response & Solutif",
        description:
            "Chat masuk? Langsung dibalas! Baik AI RaffiBot 24 jam atau admin manusia, kami gak suka bikin nunggu. Langsung kasih solusi, gak bertele-tele.",
        highlight: "Respons < 5 Menit",
    },
    {
        icon: Wallet,
        title: "Harga Masuk Akal",
        description:
            "Kualitas premium dengan harga yang bersahabat. Cocok untuk UMKM yang mau profesional dan mahasiswa yang kantongnya terbatas. Win-win!",
        highlight: "UMKM & Mahasiswa Friendly",
    },
]

export default function WhyChooseUsSection() {
    return (
        <section id="why-us" className="py-20 bg-muted/30 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/5 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Kenapa Pilih RaffiTech?
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                        Bukan cuma tukang service biasa. Ini yang bikin kami beda dari yang lain di Bekasi.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {usps.map((usp, index) => (
                        <Card
                            key={index}
                            className="group relative hover:shadow-xl transition-all duration-300 border border-white/10 bg-card hover:border-primary/40 overflow-hidden"
                        >
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <CardContent className="relative p-6 flex gap-5">
                                {/* Icon */}
                                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                                    <usp.icon className="w-7 h-7 text-primary" />
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                                            {usp.title}
                                        </h3>
                                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-primary/10 text-primary rounded-full">
                                            {usp.highlight}
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                                        {usp.description}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
