import Link from "next/link"
import { WifiOff, Home, MessageSquare } from "lucide-react"

export default function NotFound() {
    return (
        <main className="min-h-screen bg-background flex items-center justify-center p-6">
            <div className="text-center max-w-md">
                {/* Icon */}
                <div className="relative mb-8">
                    <div className="w-32 h-32 mx-auto bg-muted/50 rounded-full flex items-center justify-center">
                        <WifiOff className="w-16 h-16 text-muted-foreground" />
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                    Oops! Kabel Putus? 🔌
                </h2>

                {/* Description */}
                <p className="text-muted-foreground mb-8 leading-relaxed">
                    Halaman yang kamu cari sepertinya sedang <span className="text-primary">offline</span>,
                    kena cut fiber optic, atau memang tidak pernah ada.
                </p>

                {/* Techy joke */}
                <div className="bg-card border border-white/10 rounded-xl p-4 mb-8 text-sm text-muted-foreground">
                    <code className="text-primary">console.log</code>(&quot;Tenang, servernya belum meledak kok... 💥&quot;)
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-xl transition-colors"
                    >
                        <Home className="w-4 h-4" />
                        Kembali ke Homepage
                    </Link>
                    <a
                        href="https://wa.me/62895328949434"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl transition-colors"
                    >
                        <MessageSquare className="w-4 h-4" />
                        Chat Admin
                    </a>
                </div>
            </div>
        </main>
    )
}
