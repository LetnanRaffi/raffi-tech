import { ArrowRight, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function ClosingCTASection() {
    return (
        <section className="py-24 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                {/* Punchline */}
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                    Biar Teknologi <span className="text-primary">Kerja Untuk Anda</span>,<br />
                    Bukan Sebaliknya.
                </h2>

                <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                    Anda fokus ke bisnis dan kehidupan Anda. Urusan IT yang bikin pusing?
                    <span className="text-foreground font-medium"> Serahkan ke RaffiTech</span>.
                    Kami yang urus teknisnya.
                </p>

                {/* Alternative taglines */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    <span className="px-4 py-2 bg-card border border-white/10 rounded-full text-sm text-muted-foreground">
                        💡 "IT ribet? RaffiTech beresin."
                    </span>
                    <span className="px-4 py-2 bg-card border border-white/10 rounded-full text-sm text-muted-foreground">
                        🚀 "Solusi digital, tanpa drama."
                    </span>
                    <span className="px-4 py-2 bg-card border border-white/10 rounded-full text-sm text-muted-foreground">
                        ⚡ "Cepat, Jujur, Tuntas."
                    </span>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="https://wa.me/62895328949434"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-green-600/20 hover:scale-105"
                    >
                        <MessageSquare className="w-5 h-5" />
                        <span>Chat Sekarang</span>
                    </a>
                    <Link
                        href="#services"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-card border border-white/10 hover:border-primary/50 text-foreground font-medium rounded-xl transition-all hover:scale-105"
                    >
                        <span>Lihat Layanan</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
