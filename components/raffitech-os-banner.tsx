"use client"

import Link from "next/link"
import Image from "next/image"
import { Download, Network, Zap, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function RaffiTechOSBanner() {
    return (
        <section className="py-12 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMHYySDI0di0yaDEyek0zNiAyNnYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    {/* Left - Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                            <Network className="w-4 h-4" />
                            <span>NEW! Debian + XFCE for Network Engineers</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            RaffiTech OS
                        </h2>

                        <p className="text-blue-100 mb-6 max-w-lg mx-auto lg:mx-0">
                            Distro Linux berbasis Debian dengan desktop XFCE. Tools networking pre-installed, RAM idle cuma <strong className="text-white">500-600MB</strong>!
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                            <Button asChild size="lg" className="bg-white hover:bg-blue-50 text-blue-600 font-semibold rounded-xl shadow-lg">
                                <Link href="/raffitechos">
                                    <Download className="w-5 h-5 mr-2" />
                                    Download Gratis
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="ghost" className="text-white hover:bg-white/10 rounded-xl">
                                <Link href="/raffitechos">
                                    Lihat Detail
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Right - Visual */}
                    <div className="flex items-center gap-6">
                        <div className="relative">
                            <div className="absolute inset-0 bg-white/20 rounded-3xl blur-2xl scale-125" />
                            <Image
                                src="/logo/raffitech-logo.png"
                                alt="RaffiTech OS"
                                width={100}
                                height={100}
                                className="relative rounded-2xl shadow-2xl"
                            />
                        </div>

                        {/* Stats */}
                        <div className="hidden sm:flex flex-col gap-3">
                            <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl text-white">
                                <div className="flex items-center gap-2">
                                    <Zap className="w-4 h-4 text-yellow-300" />
                                    <span className="text-sm font-medium">RAM: 500-600MB</span>
                                </div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl text-white">
                                <div className="flex items-center gap-2">
                                    <Download className="w-4 h-4 text-green-300" />
                                    <span className="text-sm font-medium">Size: ~3GB ISO</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
