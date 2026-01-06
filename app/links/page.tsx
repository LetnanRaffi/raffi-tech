import Link from "next/link"
import Image from "next/image"
import { MessageSquare, FileText, Briefcase, MapPin, Tag, Instagram, Globe } from "lucide-react"

const links = [
    {
        icon: MessageSquare,
        label: "Chat WhatsApp Admin",
        href: "https://wa.me/62895328949434",
        color: "bg-green-600 hover:bg-green-700",
        external: true,
        priority: true,
    },
    {
        icon: FileText,
        label: "Lihat Pricelist Service",
        href: "/#services",
        color: "bg-card hover:bg-card/80 border border-white/10",
        external: false,
    },
    {
        icon: Briefcase,
        label: "Portfolio Website",
        href: "/#portfolio",
        color: "bg-card hover:bg-card/80 border border-white/10",
        external: false,
    },
    {
        icon: MapPin,
        label: "Lokasi Workshop (Bekasi)",
        href: "https://maps.app.goo.gl/bekasi",
        color: "bg-card hover:bg-card/80 border border-white/10",
        external: true,
    },
    {
        icon: Tag,
        label: "Promo Bulan Ini",
        href: "/#services",
        color: "bg-primary hover:bg-primary/90",
        external: false,
    },
]

const socials = [
    { icon: Instagram, href: "https://instagram.com/raffitech", label: "Instagram" },
    { icon: Globe, href: "https://raffitech.biz.id", label: "Website" },
]

export default function LinksPage() {
    return (
        <main className="min-h-screen bg-background flex items-center justify-center p-6">
            <div className="w-full max-w-md">
                {/* Profile */}
                <div className="text-center mb-8">
                    <div className="relative w-24 h-24 mx-auto mb-4">
                        <Image
                            src="/logo/photo_6246947705343118562_y.jpg"
                            alt="RaffiTech"
                            fill
                            className="rounded-full object-cover border-2 border-primary"
                        />
                    </div>
                    <h1 className="text-xl font-bold text-foreground">RaffiTech Solutions</h1>
                    <p className="text-sm text-muted-foreground mt-1">
                        Jasa IT Bekasi • Service Laptop • Web & Jaringan
                    </p>
                </div>

                {/* Greeting */}
                <p className="text-center text-muted-foreground text-sm mb-6">
                    Halo! Pilih layanan yang kamu butuhkan di bawah ini 👇
                </p>

                {/* Links */}
                <div className="space-y-3">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            target={link.external ? "_blank" : undefined}
                            rel={link.external ? "noopener noreferrer" : undefined}
                            className={`flex items-center gap-3 w-full px-5 py-4 rounded-xl font-medium transition-all hover:scale-[1.02] ${link.color} ${link.priority ? "text-white shadow-lg shadow-green-600/20" : "text-foreground"}`}
                        >
                            <link.icon className="w-5 h-5" />
                            <span className="flex-1">{link.label}</span>
                            {link.priority && (
                                <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">Prioritas</span>
                            )}
                        </Link>
                    ))}
                </div>

                {/* Social links */}
                <div className="flex justify-center gap-4 mt-8">
                    {socials.map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-card border border-white/10 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                            aria-label={social.label}
                        >
                            <social.icon className="w-5 h-5" />
                        </a>
                    ))}
                </div>

                {/* Footer */}
                <p className="text-center text-xs text-muted-foreground mt-8">
                    © 2025 RaffiTech Solutions • Bekasi
                </p>
            </div>
        </main>
    )
}
