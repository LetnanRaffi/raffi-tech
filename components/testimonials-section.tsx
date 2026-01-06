"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star, Laptop, Globe, Wifi } from "lucide-react"

const testimonials = [
    {
        icon: Laptop,
        name: "Dimas",
        role: "Mahasiswa",
        location: "Bekasi Selatan",
        content:
            "Laptop gue udah kayak siput, lemotnya parah banget. Dibawa ke RaffiTech, eh besoknya udah ngebut lagi! Servicenya ramah, harganya juga masuk kantong mahasiswa. Mantap banget dah!",
        rating: 5,
        service: "Service Laptop",
    },
    {
        icon: Globe,
        name: "Bu Siti",
        role: "Pemilik Toko Kue Rumahan",
        location: "Bekasi Barat",
        content:
            "Sejak pakai desain dan website dari RaffiTech, omzet toko online saya naik signifikan. Tampilannya profesional, pelanggan jadi lebih percaya. Terima kasih banyak, RaffiTech!",
        rating: 5,
        service: "Website & Desain",
    },
    {
        icon: Wifi,
        name: "Pak Wahyu",
        role: "Karyawan Swasta",
        location: "Bekasi Timur",
        content:
            "Dulu WiFi di rumah cuma kuat di lantai bawah. Setelah diatur sama RaffiTech, sekarang sampai lantai atas sinyal tetap kencang. Anak-anak bisa belajar online tanpa buffering lagi!",
        rating: 5,
        service: "Jaringan & Mikrotik",
    },
]

export default function TestimonialsSection() {
    return (
        <section id="testimonials" className="py-20 bg-muted/30 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Apa Kata Mereka?
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                        Kepuasan pelanggan adalah prioritas utama kami. Berikut testimoni dari klien yang telah merasakan layanan RaffiTech.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={index}
                            className="relative hover:shadow-xl transition-all duration-300 border border-white/10 bg-card hover:border-primary/30 hover:-translate-y-2 group overflow-hidden"
                        >
                            {/* Service badge */}
                            <div className="absolute top-4 right-4">
                                <div className="flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                                    <testimonial.icon className="w-3 h-3" />
                                    <span>{testimonial.service}</span>
                                </div>
                            </div>

                            <CardContent className="pt-12 pb-6 px-6">
                                {/* Quote icon */}
                                <Quote className="w-8 h-8 text-primary/20 mb-4" />

                                {/* Testimonial content */}
                                <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                                    "{testimonial.content}"
                                </p>

                                {/* Rating */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>

                                {/* Author */}
                                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                                        <span className="text-primary font-bold text-sm">
                                            {testimonial.name.charAt(0)}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                                        <p className="text-xs text-muted-foreground">
                                            {testimonial.role} • {testimonial.location}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
