import { Eye, Zap, Headphones, Wallet, ArrowRight } from "lucide-react"

const usps = [
    {
        icon: Eye,
        title: "Transparansi Total",
        description: "Harga yang disepakati = harga yang dibayar. Tidak ada biaya siluman atau drama mendadak.",
        highlight: "No Hidden Fee",
        gradient: "from-blue-500 to-cyan-500",
        shadowColor: "shadow-blue-500/20",
    },
    {
        icon: Zap,
        title: "Tech-Savvy & Update",
        description: "Paham teknologi terbaru: Cloud, Mikrotik modern, Web App, AI. Solusi cepat dengan metode kekinian.",
        highlight: "Modern Stack",
        gradient: "from-purple-500 to-pink-500",
        shadowColor: "shadow-purple-500/20",
    },
    {
        icon: Headphones,
        title: "Fast Response",
        description: "Chat masuk? Langsung dibalas! AI RaffiBot 24 jam + admin manusia yang responsif.",
        highlight: "< 5 Menit",
        gradient: "from-green-500 to-emerald-500",
        shadowColor: "shadow-green-500/20",
    },
    {
        icon: Wallet,
        title: "Harga Bersahabat",
        description: "Kualitas premium dengan harga yang masuk akal. Cocok untuk UMKM dan mahasiswa.",
        highlight: "Win-Win",
        gradient: "from-orange-500 to-amber-500",
        shadowColor: "shadow-orange-500/20",
    },
]

export default function WhyChooseUsSection() {
    return (
        <section id="why-us" className="py-24 relative overflow-hidden">
            {/* Premium gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.02] to-background"></div>

            {/* Subtle animated glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                        Why RaffiTech?
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
                        Kenapa Pilih <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">RaffiTech?</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                        Bukan tukang service biasa. Kami adalah partner IT yang Anda butuhkan.
                    </p>
                </div>

                {/* Cards Grid - 2x2 Premium Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {usps.map((usp, index) => (
                        <div
                            key={index}
                            className={`group relative bg-card/50 backdrop-blur-sm rounded-2xl p-8 
                         transition-all duration-500 ease-out
                         hover:-translate-y-2 hover:shadow-2xl ${usp.shadowColor}
                         border border-white/5 hover:border-white/10`}
                        >
                            {/* Subtle gradient overlay on hover */}
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${usp.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}></div>

                            <div className="relative flex gap-6">
                                {/* Icon with gradient background */}
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${usp.gradient} p-[1px] shrink-0
                               group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                                    <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                                        <usp.icon className={`w-7 h-7 bg-gradient-to-br ${usp.gradient} text-transparent bg-clip-text`}
                                            style={{ stroke: `url(#gradient-${index})` }} />
                                        {/* Fallback solid color for icon */}
                                        <usp.icon className={`w-7 h-7 absolute text-primary opacity-100`} />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                                            {usp.title}
                                        </h3>
                                        <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full
                                    bg-gradient-to-r ${usp.gradient} text-white shadow-lg ${usp.shadowColor}`}>
                                            {usp.highlight}
                                        </span>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/70 transition-colors duration-300">
                                        {usp.description}
                                    </p>
                                </div>
                            </div>

                            {/* Corner accent */}
                            <div className={`absolute bottom-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br ${usp.gradient} opacity-10 
                             group-hover:opacity-30 group-hover:scale-150 transition-all duration-500`}></div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <a
                        href="#services"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group"
                    >
                        <span>Lihat layanan lengkap</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    )
}
