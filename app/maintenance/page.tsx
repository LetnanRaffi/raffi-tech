import Link from "next/link"
import { Wrench, Clock, MessageSquare, Cpu } from "lucide-react"

export default function MaintenancePage() {
    return (
        <main className="min-h-screen bg-background flex items-center justify-center p-6">
            <div className="text-center max-w-md">
                {/* Animated icon */}
                <div className="relative mb-8">
                    <div className="w-32 h-32 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                        <Wrench className="w-16 h-16 text-primary animate-spin" style={{ animationDuration: '3s' }} />
                    </div>
                    {/* Decorative */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-primary/20 rounded-full blur-2xl -z-10 animate-pulse"></div>
                </div>

                {/* Title */}
                <h1 className="text-3xl font-bold text-foreground mb-2">
                    Sedang Install Ulang Sistem 🔧
                </h1>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                    Website kami sedang di-<span className="text-primary font-medium">upgrade</span> agar lebih ngebut dan stabil.
                    Proses ini tidak akan lama — kami sedang <code className="text-primary">compile code</code> dan <code className="text-primary">crimping kabel</code>!
                </p>

                {/* Status indicator */}
                <div className="bg-card border border-white/10 rounded-xl p-4 mb-8">
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <Cpu className="w-5 h-5 text-primary animate-pulse" />
                        <span className="text-foreground font-medium">Status: Upgrade in Progress</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div className="bg-primary h-full rounded-full animate-pulse" style={{ width: '75%' }}></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Estimasi selesai: Sebentar lagi...</p>
                </div>

                {/* Emergency contact */}
                <div className="bg-green-600/10 border border-green-600/30 rounded-xl p-4">
                    <p className="text-sm text-foreground mb-3">
                        <strong>Butuh service darurat?</strong> Kami tetap online via WhatsApp!
                    </p>
                    <a
                        href="https://wa.me/62895328949434"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl transition-colors"
                    >
                        <MessageSquare className="w-4 h-4" />
                        Chat Admin Sekarang
                    </a>
                </div>

                {/* Footer */}
                <p className="text-xs text-muted-foreground mt-8">
                    © 2025 RaffiTech Solutions • Sedang upgrade untuk melayani Anda lebih baik
                </p>
            </div>
        </main>
    )
}
