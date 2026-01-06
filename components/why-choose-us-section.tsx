import { Eye, Zap, Headphones, Wallet } from "lucide-react"

const usps = [
    {
        icon: Eye,
        title: "Transparansi Total",
        description: "Harga yang disepakati = harga yang dibayar. Tidak ada biaya siluman, tidak ada drama mendadak.",
    },
    {
        icon: Zap,
        title: "Tech-Savvy & Update",
        description: "Paham Cloud, Mikrotik modern, Web App, dan AI. Solusi cepat dengan metode kekinian.",
    },
    {
        icon: Headphones,
        title: "Fast Response 24/7",
        description: "Chat masuk? Langsung dibalas! AI RaffiBot 24 jam + admin manusia yang responsif.",
    },
    {
        icon: Wallet,
        title: "Harga Bersahabat",
        description: "Kualitas premium dengan harga yang masuk akal. Cocok untuk UMKM dan mahasiswa.",
    },
]

export default function WhyChooseUsSection() {
    return (
        <section id="why-us" className="py-28 bg-[#0B1120] relative overflow-hidden">
            {/* Glowing orbs in background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-purple-600/15 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 left-1/4 w-[250px] h-[250px] bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Kenapa Memilih{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                            RaffiTech?
                        </span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Partner IT yang Anda butuhkan untuk era digital
                    </p>
                </div>

                {/* Grid Panel - Connected look */}
                <div className="relative">
                    {/* Outer glow border */}
                    <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500/50 via-blue-500/50 to-purple-500/50 rounded-3xl blur-sm opacity-50"></div>

                    {/* Main container with gradient border */}
                    <div className="relative bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 p-[1px] rounded-3xl">
                        <div className="bg-[#0B1120]/90 backdrop-blur-xl rounded-3xl overflow-hidden">
                            {/* Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                {usps.map((usp, index) => (
                                    <div
                                        key={index}
                                        className={`group relative p-10 
                               transition-all duration-500 ease-out
                               hover:bg-white/[0.03]
                               ${index === 0 ? 'md:border-r md:border-b border-white/5' : ''}
                               ${index === 1 ? 'md:border-b border-white/5' : ''}
                               ${index === 2 ? 'md:border-r border-white/5' : ''}
                               `}
                                    >
                                        {/* Hover glow effect */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        {/* Hover border glow */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                            <div className="absolute inset-0 rounded-lg shadow-[inset_0_0_30px_rgba(34,211,238,0.1)]"></div>
                                        </div>

                                        <div className="relative flex flex-col items-start gap-6">
                                            {/* Large Glowing Icon */}
                                            <div className="relative">
                                                {/* Icon glow */}
                                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 scale-150"></div>

                                                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10
                                       flex items-center justify-center
                                       group-hover:border-cyan-400/50 group-hover:scale-110
                                       transition-all duration-500">
                                                    <usp.icon className="w-8 h-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
                                                        style={{ stroke: 'url(#icon-gradient)', strokeWidth: 1.5 }} />
                                                    {/* Fallback visible icon */}
                                                    <usp.icon className="w-8 h-8 absolute text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                                                    {usp.title}
                                                </h3>
                                                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                                                    {usp.description}
                                                </p>
                                            </div>

                                            {/* Decorative line */}
                                            <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-transparent opacity-50 group-hover:opacity-100 group-hover:w-20 transition-all duration-500"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom tagline */}
                <div className="text-center mt-16">
                    <p className="text-slate-500 text-sm uppercase tracking-widest">
                        Trusted by <span className="text-cyan-400">UMKM</span> & <span className="text-purple-400">Mahasiswa</span> di Bekasi
                    </p>
                </div>
            </div>

            {/* SVG Gradient Definition for icons (hidden) */}
            <svg width="0" height="0" className="absolute">
                <defs>
                    <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#22d3ee" />
                        <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                </defs>
            </svg>
        </section>
    )
}
