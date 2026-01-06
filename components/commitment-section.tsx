import { Card, CardContent } from "@/components/ui/card"
import { ShieldCheck, Lock, Heart } from "lucide-react"

export default function CommitmentSection() {
    return (
        <section id="commitment" className="py-20 bg-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-blue-500/5"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Komitmen Layanan Kami
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                        Janji tertulis yang kami pegang teguh untuk setiap pelanggan RaffiTech.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Garansi Card */}
                    <Card className="border-green-500/30 bg-gradient-to-br from-green-500/5 to-transparent hover:border-green-500/50 transition-all duration-300">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                                    <ShieldCheck className="w-6 h-6 text-green-500" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground">Garansi Service</h3>
                            </div>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Kami memberikan <span className="text-green-500 font-semibold">garansi perbaikan gratis selama 7 hari</span>.
                                Jika masalah yang sama muncul kembali dalam periode tersebut, langsung hubungi kami — perbaikan ulang tanpa biaya tambahan.
                            </p>
                            <div className="flex items-center gap-2 text-sm text-green-500 font-medium">
                                <ShieldCheck className="w-4 h-4" />
                                <span>7 Hari Garansi Personal</span>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Privasi Card */}
                    <Card className="border-blue-500/30 bg-gradient-to-br from-blue-500/5 to-transparent hover:border-blue-500/50 transition-all duration-300">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                                    <Lock className="w-6 h-6 text-blue-500" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground">Privasi Data</h3>
                            </div>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Kami <span className="text-blue-500 font-semibold">menjamin 100% kerahasiaan</span> dokumen, foto, dan data pribadi Anda selama proses perbaikan perangkat atau pembuatan website.
                                Kami tidak akan mengakses folder pribadi tanpa izin eksplisit dari Anda.
                            </p>
                            <div className="flex items-center gap-2 text-sm text-blue-500 font-medium">
                                <Lock className="w-4 h-4" />
                                <span>Data 100% Aman & Rahasia</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Trust Statement */}
                <div className="mt-10 text-center">
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-white/10">
                        <Heart className="w-5 h-5 text-red-500" />
                        <span className="text-foreground font-medium">
                            Kepuasan dan ketenangan Anda adalah prioritas kami.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}
