import Image from "next/image"
import { MapPin, Lightbulb, Heart, Rocket } from "lucide-react"

export default function AboutFounderSection() {
    return (
        <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/5 to-transparent"></div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Photo side */}
                    <div className="relative flex justify-center lg:justify-start">
                        <div className="relative">
                            {/* Decorative circles */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl opacity-40"></div>

                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                                <Image
                                    src="/logo/founder-raffi.jpg"
                                    alt="Raffi Pasha - Founder RaffiTech"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Floating badge */}
                            <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                                Founder
                            </div>
                        </div>
                    </div>

                    {/* Content side */}
                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                            Raffi Pasha
                        </h2>
                        <p className="text-primary font-medium mb-6">Founder & Tech Enthusiast</p>

                        <p className="text-muted-foreground leading-relaxed mb-6">
                            Seorang penggiat IT muda yang passionate dengan dunia <span className="text-foreground font-medium">teknologi jaringan dan coding</span>.
                            Memulai dari hobi oprek komputer sejak SMK, sekarang saya ingin membantu lebih banyak orang mendapatkan
                            <span className="text-foreground font-medium"> solusi IT yang murah tapi tetap canggih</span>.
                        </p>

                        {/* Vision cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                            <div className="flex items-start gap-3 bg-card/50 p-4 rounded-xl border border-white/10">
                                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0">
                                    <Lightbulb className="w-5 h-5 text-blue-500" />
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground text-sm">Visi</p>
                                    <p className="text-xs text-muted-foreground">Membawa teknologi modern ke warga Bekasi tanpa ribet</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 bg-card/50 p-4 rounded-xl border border-white/10">
                                <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center shrink-0">
                                    <Heart className="w-5 h-5 text-green-500" />
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground text-sm">Passion</p>
                                    <p className="text-xs text-muted-foreground">Cloud, Smart Home, dan membantu sesama</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center lg:justify-start">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span>Berbasis di Bekasi, melayani dengan sepenuh hati</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
