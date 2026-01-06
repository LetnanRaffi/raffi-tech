import { MessageSquare, Search, Wrench, CheckCircle } from "lucide-react"

const steps = [
    {
        step: 1,
        icon: MessageSquare,
        title: "Konsultasi Gratis",
        description: "Chat via WhatsApp, ceritakan masalah atau kebutuhan kamu. Tim kami siap mendengarkan 24 jam!",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
    },
    {
        step: 2,
        icon: Search,
        title: "Diagnosa & Deal",
        description: "Kami cek kondisi unit atau diskusi kebutuhan web. Harga disepakati di awal — no surprise!",
        color: "text-yellow-500",
        bgColor: "bg-yellow-500/10",
    },
    {
        step: 3,
        icon: Wrench,
        title: "Proses Pengerjaan",
        description: "Tim mulai bekerja dengan update progress berkala. Kamu bisa pantau via WhatsApp.",
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
    },
    {
        step: 4,
        icon: CheckCircle,
        title: "Selesai & Bayar",
        description: "Pekerjaan selesai, kamu cek dulu hasilnya. Puas? Baru bayar. Fair kan?",
        color: "text-green-500",
        bgColor: "bg-green-500/10",
    },
]

export default function HowItWorksSection() {
    return (
        <section id="how-it-works" className="py-20 bg-muted/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Cara Pesan Jasa Kami
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                        Prosesnya gampang banget, gak ribet. Cuma 4 langkah dan masalah IT kamu beres!
                    </p>
                </div>

                {/* Step Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((item, index) => (
                        <div key={index} className="relative">
                            {/* Connector line (hidden on mobile) */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent"></div>
                            )}

                            <div className="bg-card border border-white/10 rounded-2xl p-6 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group relative">
                                {/* Step number */}
                                <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground shadow-lg">
                                    {item.step}
                                </div>

                                {/* Icon */}
                                <div className={`w-14 h-14 ${item.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <item.icon className={`w-7 h-7 ${item.color}`} />
                                </div>

                                {/* Content */}
                                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <a
                        href="https://wa.me/62895328949434"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-green-600/20"
                    >
                        <MessageSquare className="w-5 h-5" />
                        <span>Mulai Konsultasi Sekarang</span>
                    </a>
                </div>
            </div>
        </section>
    )
}
