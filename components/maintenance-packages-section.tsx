import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Building2, Settings, Check, Star } from "lucide-react"

const packages = [
    {
        icon: User,
        name: "Basic",
        target: "Personal",
        price: "Rp 75.000",
        period: "/bulan",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        borderColor: "border-blue-500/20",
        features: [
            "Cek kesehatan laptop bulanan",
            "Update antivirus & Windows",
            "Bersihkan file sampah (via Remote)",
            "Konsultasi IT via WhatsApp",
            "Response time: 24 jam",
        ],
        popular: false,
    },
    {
        icon: Building2,
        name: "Business",
        target: "Kantor / Kafe",
        price: "Rp 250.000",
        period: "/bulan",
        color: "text-primary",
        bgColor: "bg-primary/10",
        borderColor: "border-primary/40",
        features: [
            "Semua fitur Basic",
            "Maintenance jaringan WiFi/Mikrotik",
            "Update & backup website profil",
            "Prioritas support (error langsung ditangani)",
            "Response time: < 2 jam",
            "Laporan bulanan kondisi IT",
        ],
        popular: true,
    },
    {
        icon: Settings,
        name: "Custom",
        target: "Sesuai Kebutuhan",
        price: "Hubungi Kami",
        period: "",
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
        borderColor: "border-purple-500/20",
        features: [
            "Konsultasi pengadaan alat IT",
            "Setup sistem baru dari nol",
            "Integrasi multi-lokasi",
            "Training tim IT internal",
            "Dedicated account manager",
        ],
        popular: false,
    },
]

export default function MaintenancePackagesSection() {
    return (
        <section id="maintenance" className="py-20 bg-background relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-primary font-medium text-sm uppercase tracking-wider">IT Managed Service</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 mt-2">
                        Paket Maintenance Bulanan
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                        Fokus urus bisnis Anda, biar <span className="text-foreground font-semibold">RaffiTech yang pastikan sistem IT Anda tidak pernah down</span>.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {packages.map((pkg, index) => (
                        <Card
                            key={index}
                            className={`relative hover:shadow-xl transition-all duration-300 border ${pkg.borderColor} bg-card hover:scale-[1.02] ${pkg.popular ? 'ring-2 ring-primary' : ''}`}
                        >
                            {pkg.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                                        <Star className="w-3 h-3 fill-current" />
                                        Populer
                                    </span>
                                </div>
                            )}

                            <CardHeader className="text-center pb-4 pt-8">
                                <div className={`w-14 h-14 ${pkg.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                                    <pkg.icon className={`w-7 h-7 ${pkg.color}`} />
                                </div>
                                <CardTitle className="text-xl">{pkg.name}</CardTitle>
                                <p className="text-sm text-muted-foreground">{pkg.target}</p>
                                <div className="mt-4">
                                    <span className="text-3xl font-bold text-foreground">{pkg.price}</span>
                                    <span className="text-muted-foreground">{pkg.period}</span>
                                </div>
                            </CardHeader>

                            <CardContent>
                                <ul className="space-y-3 mb-6">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm">
                                            <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                                                <Check className="w-3 h-3 text-green-500" />
                                            </div>
                                            <span className="text-muted-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={`https://wa.me/62895328949434?text=Halo%20RaffiTech,%20saya%20tertarik%20paket%20${pkg.name}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`block w-full text-center py-3 rounded-xl font-medium transition-colors ${pkg.popular
                                            ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                                            : 'bg-muted hover:bg-muted/80 text-foreground'
                                        }`}
                                >
                                    Pilih Paket
                                </a>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
