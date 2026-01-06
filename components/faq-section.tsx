"use client"

import { useState } from "react"
import { ChevronDown, MapPin, Shield, Clock, CreditCard, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
    {
        icon: MapPin,
        question: "Apakah RaffiTech bisa dipanggil ke rumah atau harus antar barang?",
        answer:
            "Tenang, kita fleksibel! Untuk wilayah Bekasi, kami melayani panggilan langsung ke rumah atau kantor. Untuk perbaikan software/remote support, bisa ditangani dari jarak jauh. Tinggal bilang aja lokasinya dimana, kita atur jadwalnya! 🏠",
    },
    {
        icon: Shield,
        question: "Data saya aman gak kalau laptop di-install ulang?",
        answer:
            "100% aman! Kami paham data pribadi itu penting banget. Sebelum install ulang, kami pasti backup dulu semua data penting kamu. Folder pribadi? Kami gak akan buka tanpa izin. Privasi kamu adalah prioritas kami. 🔒",
    },
    {
        icon: HelpCircle,
        question: "Ada garansi setelah service gak?",
        answer:
            "Ada dong! Kami kasih garansi personal 7 hari. Kalau masalah yang sama muncul lagi dalam waktu itu, langsung hubungi kami dan kami perbaiki GRATIS. No drama, no ribet! ✅",
    },
    {
        icon: Clock,
        question: "Berapa lama estimasi pengerjaannya?",
        answer:
            "Tergantung jenis pekerjaannya ya:\n• Install ulang & service ringan: 1-3 jam (bisa ditunggu)\n• Service hardware: 1-2 hari kerja\n• Pembuatan website: 3-7 hari kerja\n• Setting jaringan Mikrotik: 2-4 jam\n\nKami selalu kasih update progress kok! 📱",
    },
    {
        icon: CreditCard,
        question: "Metode pembayarannya gimana?",
        answer:
            "Bebas pilih yang paling nyaman! Kami terima:\n• Cash (bayar di tempat)\n• Transfer Bank (BCA, Mandiri, BRI)\n• E-Wallet (GoPay, OVO, Dana, ShopeePay)\n\nPembayaran dilakukan setelah pekerjaan selesai dan kamu puas. Fair kan? 💳",
    },
]

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section id="faq" className="py-20 bg-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Pertanyaan yang Sering Ditanyakan
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                        Jawaban cepat untuk pertanyaan yang paling sering masuk. Kalau belum ketemu, langsung chat RaffiBot aja!
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={cn(
                                "border rounded-2xl overflow-hidden transition-all duration-300",
                                openIndex === index
                                    ? "border-primary/50 bg-card shadow-lg shadow-primary/5"
                                    : "border-white/10 bg-card/50 hover:border-primary/30"
                            )}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center gap-4 p-5 text-left"
                            >
                                <div
                                    className={cn(
                                        "w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors",
                                        openIndex === index ? "bg-primary/20" : "bg-muted"
                                    )}
                                >
                                    <faq.icon
                                        className={cn(
                                            "w-5 h-5 transition-colors",
                                            openIndex === index ? "text-primary" : "text-muted-foreground"
                                        )}
                                    />
                                </div>
                                <span
                                    className={cn(
                                        "flex-1 font-medium transition-colors",
                                        openIndex === index ? "text-foreground" : "text-muted-foreground"
                                    )}
                                >
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={cn(
                                        "w-5 h-5 text-muted-foreground transition-transform duration-300",
                                        openIndex === index && "rotate-180 text-primary"
                                    )}
                                />
                            </button>

                            <div
                                className={cn(
                                    "overflow-hidden transition-all duration-300",
                                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                )}
                            >
                                <div className="px-5 pb-5 pl-[4.5rem]">
                                    <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
