import { Eye, Zap, Headphones, Wallet } from "lucide-react"

const usps = [
    {
        icon: Eye,
        title: "Transparansi Total",
        description: "Harga yang disepakati = harga yang dibayar. Tidak ada biaya siluman, tidak ada drama mendadak. Anda tahu persis apa yang Anda bayar.",
        span: "md:col-span-2", // Wide card
    },
    {
        icon: Zap,
        title: "Tech-Savvy",
        description: "Paham Cloud, Mikrotik modern, Web App, dan AI. Solusi cepat dengan metode kekinian.",
        span: "md:col-span-1",
    },
    {
        icon: Headphones,
        title: "Fast Response",
        description: "Chat masuk? Langsung dibalas! AI RaffiBot 24/7 + admin manusia responsif.",
        span: "md:col-span-1",
    },
    {
        icon: Wallet,
        title: "Harga Bersahabat",
        description: "Kualitas premium dengan harga yang masuk akal. Cocok untuk UMKM dan mahasiswa. Tidak perlu merogoh kocek dalam-dalam untuk dapat layanan IT profesional.",
        span: "md:col-span-2", // Wide card
    },
]

export default function WhyChooseUsSection() {
    return (
        <section id="why-us" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-transparent to-purple-950/30"></div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 bg-blue-500/10 text-blue-400 text-sm font-medium rounded-full border border-blue-500/20 mb-4">
                        Why RaffiTech?
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Kenapa Pilih <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Kami?</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-xl mx-auto">
                        Bukan tukang service biasa. Kami adalah partner IT yang Anda butuhkan.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {usps.map((usp, index) => (
                        <div
                            key={index}
                            className={`${usp.span} group relative rounded-2xl p-8
                         bg-white/[0.03] backdrop-blur-sm
                         border border-white/10
                         hover:border-blue-500/50 hover:bg-white/[0.05]
                         hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)]
                         transition-all duration-500 ease-out`}
                        >
                            {/* Icon in corner */}
                            <div className="absolute top-6 right-6">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 
                               flex items-center justify-center
                               group-hover:from-blue-500/30 group-hover:to-cyan-500/30
                               group-hover:scale-110 group-hover:rotate-6
                               transition-all duration-500">
                                    <usp.icon className="w-6 h-6 text-blue-400" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="pr-16">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                                    {usp.title}
                                </h3>
                                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                                    {usp.description}
                                </p>
                            </div>

                            {/* Hover glow effect */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        </div>
                    ))}
                </div>

                {/* Bottom accent line */}
                <div className="mt-16 flex justify-center">
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                </div>
            </div>
        </section>
    )
}
