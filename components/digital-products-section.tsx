import { Card, CardContent } from "@/components/ui/card"
import { FileCode, Heart, BookOpen, Download, ExternalLink } from "lucide-react"

const products = [
    {
        icon: FileCode,
        name: "Script Mikrotik Anti-Lag",
        description: "Script siap pakai untuk membagi bandwidth game & sosmed secara otomatis. Tinggal copy-paste ke terminal Mikrotik, langsung jalan!",
        price: "Rp 50.000",
        type: "Script",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
    },
    {
        icon: Heart,
        name: "Template Undangan Digital",
        description: "Website undangan nikah/acara siap edit dengan desain elegant. Tinggal ganti nama, tanggal, foto — langsung bisa share!",
        price: "Rp 75.000",
        type: "Template",
        color: "text-pink-500",
        bgColor: "bg-pink-500/10",
    },
    {
        icon: BookOpen,
        name: "E-book: Tips Laptop Awet Muda",
        description: "PDF singkat berisi tips merawat laptop agar tahan 5+ tahun. Cocok jadi lead magnet atau panduan dasar perawatan.",
        price: "GRATIS",
        type: "E-book",
        color: "text-green-500",
        bgColor: "bg-green-500/10",
        free: true,
    },
]

export default function DigitalProductsSection() {
    return (
        <section id="store" className="py-20 bg-muted/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/5 to-transparent"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <span className="text-primary font-medium text-sm uppercase tracking-wider">RaffiTech Store</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 mt-2">
                        Produk Digital
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                        Hasil racikan pengalaman RaffiTech. Langsung pakai, tanpa perlu belajar dari nol.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {products.map((product, index) => (
                        <Card
                            key={index}
                            className="group hover:shadow-xl transition-all duration-300 border border-white/10 bg-card hover:border-primary/30 overflow-hidden"
                        >
                            <CardContent className="p-6">
                                {/* Type badge */}
                                <div className="flex items-center justify-between mb-4">
                                    <span className={`text-xs font-medium ${product.color} ${product.bgColor} px-2 py-1 rounded-full`}>
                                        {product.type}
                                    </span>
                                    {product.free && (
                                        <span className="text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-full">
                                            ✨ GRATIS
                                        </span>
                                    )}
                                </div>

                                {/* Icon */}
                                <div className={`w-14 h-14 ${product.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <product.icon className={`w-7 h-7 ${product.color}`} />
                                </div>

                                {/* Content */}
                                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                    {product.description}
                                </p>

                                {/* Price & CTA */}
                                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                    <span className={`text-lg font-bold ${product.free ? 'text-green-500' : 'text-foreground'}`}>
                                        {product.price}
                                    </span>
                                    {product.href ? (
                                        <Link
                                            href={product.href}
                                            className="inline-flex items-center gap-1 text-sm text-primary hover:underline font-medium"
                                        >
                                            <Download className="w-4 h-4" />
                                            Lihat Detail
                                        </Link>
                                    ) : (
                                        <a
                                            href={`https://wa.me/62895328949434?text=Halo%20RaffiTech,%20saya%20mau%20beli%20${encodeURIComponent(product.name)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 text-sm text-primary hover:underline font-medium"
                                        >
                                            {product.free ? <Download className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                                            {product.free ? 'Download' : 'Beli'}
                                        </a>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
