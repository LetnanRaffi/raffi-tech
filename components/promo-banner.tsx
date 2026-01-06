"use client"

import { X, Sparkles, GraduationCap, Building2 } from "lucide-react"
import { useState, useEffect } from "react"

export default function PromoBanner() {
    const [isVisible, setIsVisible] = useState(true)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
        const dismissed = sessionStorage.getItem("promo-dismissed")
        if (dismissed) setIsVisible(false)
    }, [])

    const handleDismiss = () => {
        setIsVisible(false)
        sessionStorage.setItem("promo-dismissed", "true")
    }

    if (!isMounted || !isVisible) return null

    return (
        <div id="promo-banner" className="sticky top-0 z-50 relative bg-gradient-to-r from-primary via-primary/90 to-accent overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjIiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 relative">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                    {/* Left: Promo text */}
                    <div className="flex items-center gap-3 text-white">
                        <Sparkles className="w-5 h-5 animate-pulse" />
                        <span className="font-bold text-sm sm:text-base">🎉 Promo Grand Opening RaffiTech!</span>
                    </div>

                    {/* Center: Offers */}
                    <div className="flex flex-wrap items-center justify-center gap-4 text-white/90 text-xs sm:text-sm">
                        <div className="flex items-center gap-1.5">
                            <GraduationCap className="w-4 h-4" />
                            <span><b>Diskon 20%</b> Install Ulang (Pelajar)</span>
                        </div>
                        <div className="hidden sm:block w-px h-4 bg-white/30"></div>
                        <div className="flex items-center gap-1.5">
                            <Building2 className="w-4 h-4" />
                            <span><b>Gratis</b> Konsultasi Jaringan UMKM</span>
                        </div>
                    </div>

                    {/* Right: CTA & Close */}
                    <div className="flex items-center gap-3">
                        <a
                            href="https://wa.me/62895328949434?text=Halo%20RaffiTech,%20saya%20mau%20ambil%20promo%20grand%20opening!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-1.5 bg-white text-primary font-bold text-xs rounded-full hover:bg-white/90 transition-colors shadow-lg"
                        >
                            Ambil Promo →
                        </a>
                        <button
                            onClick={handleDismiss}
                            className="text-white/70 hover:text-white transition-colors"
                            aria-label="Tutup promo"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Urgency text */}
                <p className="text-center text-white/80 text-xs mt-2">
                    ⏰ Slot terbatas hanya untuk <b>10 orang pertama</b> minggu ini!
                </p>
            </div>
        </div>
    )
}
