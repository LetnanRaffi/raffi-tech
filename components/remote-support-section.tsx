import { Card, CardContent } from "@/components/ui/card"
import { Monitor, Headphones, Shield, Clock, Check } from "lucide-react"

const benefits = [
    {
        icon: Clock,
        title: "Hemat Waktu",
        description: "Tidak perlu macet-macetan. Pengerjaan bisa dimulai detik ini juga dari mana saja.",
    },
    {
        icon: Shield,
        title: "100% Aman",
        description: "Pakai TeamViewer/AnyDesk resmi. Anda bisa pantau langsung cursor teknisi di layar.",
    },
    {
        icon: Monitor,
        title: "Hemat Biaya",
        description: "Tidak ada biaya transport teknisi. Bayar jasanya saja, bukan macetnya.",
    },
]

const canDo = [
    "Install & aktivasi Windows/Office",
    "Hapus virus, malware, dan adware",
    "Fix driver error & bluescreen",
    "Setting email & aplikasi kantor",
    "Konfigurasi Mikrotik via WinBox",
    "Optimasi startup & performa",
]

export default function RemoteSupportSection() {
    return (
        <section id="remote" className="py-20 bg-muted/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Content */}
                    <div>
                        <span className="text-blue-500 font-medium text-sm uppercase tracking-wider">Layanan Jarak Jauh</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 mt-2">
                            Remote Support & Troubleshooting
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            Masalah software <span className="text-foreground font-medium">bisa beres tanpa teknisi datang ke rumah</span>.
                            Cukup siapkan koneksi internet, kami yang kerjakan sisanya. Anda tinggal duduk santai sambil
                            melihat cursor kami beraksi di layar Anda sendiri!
                        </p>

                        {/* Benefits */}
                        <div className="space-y-4 mb-8">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0">
                                        <benefit.icon className="w-5 h-5 text-blue-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground">{benefit.title}</h4>
                                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <a
                            href="https://wa.me/62895328949434?text=Halo%20RaffiTech,%20saya%20mau%20minta%20Remote%20Support"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors"
                        >
                            <Headphones className="w-5 h-5" />
                            Minta Remote Support
                        </a>
                    </div>

                    {/* Right: What we can do */}
                    <Card className="border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-transparent">
                        <CardContent className="p-8">
                            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                                <Monitor className="w-5 h-5 text-blue-500" />
                                Apa yang Bisa Dikerjakan?
                            </h3>
                            <ul className="space-y-3">
                                {canDo.map((item, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                                            <Check className="w-3 h-3 text-green-500" />
                                        </div>
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 p-4 bg-card rounded-xl border border-white/10">
                                <p className="text-sm text-muted-foreground">
                                    <span className="text-foreground font-medium">💡 Cara kerjanya:</span> Anda share screen via TeamViewer/AnyDesk,
                                    kami remote dan perbaiki. Anda bisa lihat semua yang kami lakukan!
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
