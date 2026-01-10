"use client"

import Link from "next/link"
import Image from "next/image"
import {
    Download,
    Terminal,
    Cpu,
    HardDrive,
    Monitor,
    CheckCircle2,
    ExternalLink,
    Heart,
    Box,
    Layers,
    Server,
    ShieldCheck,
    Globe,
    BookOpen,
    Zap,
    Layout,
    Command,
    Settings,
    Usb,
    Disc,
    MonitorPlay,
    CheckSquare,
    Moon,
    Sun,
    XCircle,
    CheckCircle,
    HelpCircle,
    AlertCircle,
    Coffee
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import Footer from "@/components/footer"

const keyFeatures = [
    {
        icon: Layout,
        title: "Visual Kelas Atas",
        description: "Bosen sama tampilan Linux yang kaku? RaffiTech OS bawa pengalaman desktop rasa Mac dengan Global Menu dan Dock dinamis. Mata nyaman, kerja makin produktif.",
        color: "text-slate-900 dark:text-white",
        bgGlow: "bg-blue-500/20"
    },
    {
        icon: Box,
        title: "Siap Kerja (Zero Setup)",
        description: "Baru install langsung gass. Winbox buat setting Mikrotik? Ada. VS Code buat ngoding? Ada. Terminal keren? Udah disettingin. Gak perlu mikir, tinggal pake.",
        color: "text-slate-900 dark:text-white",
        bgGlow: "bg-purple-500/20"
    },
    {
        icon: Settings,
        title: "Ringan & Stabil",
        description: "Dibuat dari basis Debian-Ubuntu yang 'di-diet-kan'. Hemat RAM, booting ngebut, dan support jutaan aplikasi Linux tanpa ribet.",
        color: "text-slate-900 dark:text-white",
        bgGlow: "bg-emerald-500/20"
    }
]

const systemRequirements = [
    { icon: Cpu, label: "Prosesor 64-bit (Universal)", value: "Support Intel (Core i3/i5/i7) & AMD", subtext: "Ryzen / Athlon Compatible" },
    { icon: Layers, label: "RAM Hemat", value: "Minimal 2GB", subtext: "4GB Disarankan biar ngebut" },
    { icon: HardDrive, label: "Penyimpanan", value: "20GB Kosong", subtext: "SSD lebih mantap" },
    { icon: Monitor, label: "Grafis Ringan", value: "Support Multi-Vendor", subtext: "Intel HD / NVIDIA / AMD Radeon" }
]

const faqs = [
    {
        q: "Apakah data saya aman?",
        a: "100% Aman. RaffiTech OS dibangun di atas basis Debian/Ubuntu LTS yang terkenal keamanan kelas dunia. Tidak ada telemetry atau tracker tersembunyi."
    },
    {
        q: "Laptop saya Intel/AMD, bisa pakai?",
        a: "Bisa banget! OS ini mendukung arsitektur 64-bit (x86_64) yang mencakup hampir semua laptop Intel (Core i3 ke atas) dan AMD (Ryzen/A-Series) keluaran 2011 sampai sekarang."
    },
    {
        q: "Driver Wi-Fi dan VGA gimana?",
        a: "Otomatis terdeteksi. Kernel Linux modern yang kami pakai sudah mencakup ribuan driver hardware secara default. Tinggal colok, nyala."
    },
    {
        q: "Bisa buat nugas sekolah/kuliah?",
        a: "Sangat bisa. Kamu tinggal install WPS Office atau Google Docs lewat browser Brave yang sudah tersedia."
    }
]

export default function RaffiTechOSPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 selection:bg-cyan-500/30 transition-colors duration-300">
            {/* Header */}
            <header className="fixed z-50 w-full px-4 border-b border-slate-200 dark:border-white/5 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md transition-colors duration-300">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <Link href="/" className="flex items-center gap-3">
                            <span className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">RaffiTech<span className="text-cyan-600 dark:text-cyan-500">OS</span></span>
                        </Link>

                        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                            <Link href="/" className="text-slate-600 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-white transition-colors">
                                Home
                            </Link>
                            <a href="#features" className="text-slate-600 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-white transition-colors">
                                Fitur
                            </a>
                            <a href="#comparison" className="text-slate-600 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-white transition-colors">
                                Bandingkan
                            </a>
                            <a href="#faq" className="text-slate-600 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-white transition-colors">
                                FAQ
                            </a>
                            <a href="#download" className="text-slate-600 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-white transition-colors">
                                Download
                            </a>
                        </nav>

                        <div className="flex items-center gap-4">
                            <ThemeToggle />
                            <Button asChild size="sm" className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 font-medium rounded-md hidden sm:flex border-0 shadow-lg shadow-slate-900/10 transition-all">
                                <a href="#download">
                                    <Download className="w-4 h-4 mr-2" />
                                    Get ISO
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-slate-200 dark:border-white/5">
                {/* Technical Grid Background */}
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-30"></div>
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-slate-50/50 to-slate-50 dark:via-slate-950/50 dark:to-slate-950"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="max-w-4xl">
                        {/* Version Badge */}
                        <div className="flex flex-wrap items-center gap-3 mb-8">
                            <div className="inline-flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-cyan-600 dark:text-cyan-500 px-3 py-1 rounded text-xs font-mono font-medium tracking-wide shadow-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-500 animate-pulse"></div>
                                v1.0 Ultimate • Stable Release
                            </div>
                            <span className="text-xs font-mono text-slate-500">Build Date: 10 Jan 2026 - Latest Patch</span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                            RaffiTech OS <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500 animate-gradient">
                                v1.0 Ultimate
                            </span>
                        </h1>
                        <p className="text-2xl font-semibold text-slate-700 dark:text-slate-200 mb-6">"Tampilan Sultan. Performa Jagoan."</p>

                        {/* Sub-headline */}
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-3xl leading-relaxed font-light">
                            Stop buang waktu install driver dan setting tampilan dari nol. <strong className="text-slate-900 dark:text-white">RaffiTech OS</strong> hadir siap tempur dengan Winbox, VS Code, dan Brave Browser yang sudah tertanam. Dibalut tampilan MacOS WhiteSur yang elegan, ringan, dan stabil di laptop kentang sekalipun.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 h-14 text-base font-semibold rounded-lg shadow-xl shadow-cyan-600/20 dark:shadow-cyan-900/20 transition-all border border-cyan-500/50 hover:scale-105">
                                <a href="#download">
                                    <Download className="w-5 h-5 mr-2" />
                                    Download ISO Image
                                </a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="px-8 h-14 text-base rounded-lg border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-transparent text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all hover:scale-105">
                                <a href="#doc-install">
                                    <BookOpen className="w-5 h-5 mr-2" />
                                    View Documentation
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-24 border-b border-slate-200 dark:border-white/5 bg-slate-100/50 dark:bg-slate-900/20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                            <Terminal className="w-6 h-6 text-cyan-600 dark:text-cyan-500" />
                            System Architecture
                        </h2>
                        <div className="h-1 w-20 bg-cyan-600/50 dark:bg-cyan-500/50 rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {keyFeatures.map((feature, index) => (
                            <div key={index} className="group p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-cyan-500/50 dark:hover:border-slate-600 transition-all duration-500 relative overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1">
                                <div className={`absolute top-0 right-0 w-32 h-32 ${feature.bgGlow} rounded-bl-full opacity-20 transition-opacity`} />

                                <div className="mb-6 inline-flex p-3 rounded-lg bg-slate-50 dark:bg-slate-800 text-cyan-600 dark:text-white border border-slate-100 dark:border-slate-700">
                                    <feature.icon className="w-6 h-6" />
                                </div>

                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 font-mono">{feature.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* HEAD-TO-HEAD VS SECTION */}
            <section id="comparison" className="py-24 border-b border-slate-200 dark:border-white/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Head-to-Head: Kenapa Harus Pindah?</h2>
                        <p className="text-slate-600 dark:text-slate-400">Jangan buang waktu setup manual. Lihat bedanya.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Linux Biasa */}
                        <div className="bg-slate-100 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 opacity-90 grayscale-[0.5] hover:grayscale-0 transition-all">
                            <h3 className="text-xl font-bold text-slate-700 dark:text-slate-400 mb-6 flex items-center gap-2">
                                <XCircle className="w-6 h-6" /> Distro Linux Biasa (Polosan)
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3 text-slate-600 dark:text-slate-500">
                                    <XCircle className="w-5 h-5 flex-shrink-0" />
                                    <span><strong>Setup Awal:</strong> Kosong melompong, butuh 2 jam install tools.</span>
                                </li>
                                <li className="flex gap-3 text-slate-600 dark:text-slate-500">
                                    <XCircle className="w-5 h-5 flex-shrink-0" />
                                    <span><strong>Tampilan:</strong> Kaku, jadul, ngebosenin.</span>
                                </li>
                                <li className="flex gap-3 text-slate-600 dark:text-slate-500">
                                    <XCircle className="w-5 h-5 flex-shrink-0" />
                                    <span><strong>Mikrotik:</strong> Harus install Wine & config manual (sering error).</span>
                                </li>
                                <li className="flex gap-3 text-slate-600 dark:text-slate-500">
                                    <XCircle className="w-5 h-5 flex-shrink-0" />
                                    <span><strong>Multimedia:</strong> Codec sering belum lengkap.</span>
                                </li>
                                <li className="flex gap-3 text-slate-600 dark:text-slate-500">
                                    <XCircle className="w-5 h-5 flex-shrink-0" />
                                    <span><strong>Optimasi:</strong> Settingan standar pabrik (kadang berat).</span>
                                </li>
                            </ul>
                        </div>

                        {/* RaffiTech OS */}
                        <div className="bg-white dark:bg-slate-900 rings-2 ring-cyan-500/50 p-8 rounded-2xl border-2 border-cyan-500 shadow-2xl shadow-cyan-500/10 relative overflow-hidden transform md:-translate-y-4">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2 relative z-10">
                                <CheckCircle className="w-6 h-6 text-cyan-500" /> RaffiTech OS v1.0
                            </h3>
                            <ul className="space-y-4 relative z-10">
                                <li className="flex gap-3 text-slate-700 dark:text-slate-200">
                                    <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                                    <span><strong>Setup Awal:</strong> Siap Pakai, tools Network Engineer sudah ada.</span>
                                </li>
                                <li className="flex gap-3 text-slate-700 dark:text-slate-200">
                                    <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                                    <span><strong>Tampilan:</strong> Premium, ala MacOS WhiteSur yang elegan.</span>
                                </li>
                                <li className="flex gap-3 text-slate-700 dark:text-slate-200">
                                    <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                                    <span><strong>Mikrotik:</strong> Winbox Native-Feel, tinggal klik langsung jalan.</span>
                                </li>
                                <li className="flex gap-3 text-slate-700 dark:text-slate-200">
                                    <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                                    <span><strong>Multimedia:</strong> Full Multimedia Support (MP4, MKV ready).</span>
                                </li>
                                <li className="flex gap-3 text-slate-700 dark:text-slate-200">
                                    <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                                    <span><strong>Optimasi:</strong> Tuned Kernel, bloatware dibuang, RAM lega.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* UNDER THE HOOD OPTIMIZATION */}
            <section className="py-24 border-b border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-950/50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
                            <Settings className="w-3 h-3" /> Tuning Manual
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Optimasi di Balik Layar</h2>
                        <p className="text-slate-600 dark:text-slate-400 mt-2">Kami melakukan tuning manual agar laptop lama rasa baru.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-cyan-500/50 transition-colors">
                            <Zap className="w-8 h-8 text-cyan-500 mb-4" />
                            <h4 className="font-bold text-slate-900 dark:text-white mb-2">ZRAM Memory Compression</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Teknologi kompresi RAM otomatis. Laptop RAM 2GB bakal terasa kayak pake 3GB-4GB. Multitasking lancar.</p>
                        </div>
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-cyan-500/50 transition-colors">
                            <Layout className="w-8 h-8 text-purple-500 mb-4" />
                            <h4 className="font-bold text-slate-900 dark:text-white mb-2">Wine Protocol Handler</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Konfigurasi khusus agar bisa menjalankan file .exe ringan dengan kompatibilitas lebih baik.</p>
                        </div>
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-cyan-500/50 transition-colors">
                            <Monitor className="w-8 h-8 text-blue-500 mb-4" />
                            <h4 className="font-bold text-slate-900 dark:text-white mb-2">Font Rendering Patch</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Tulisan di layar lebih tajam dan enak dibaca (Anti-Aliasing). Mata gak cepet lelah buat ngoding.</p>
                        </div>
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-cyan-500/50 transition-colors">
                            <CheckCircle2 className="w-8 h-8 text-green-500 mb-4" />
                            <h4 className="font-bold text-slate-900 dark:text-white mb-2">Aggressive Bloatware Removal</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Membuang aplikasi sampah. ISO lebih ramping, Storage lebih lega.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* System Requirements Section */}
            <section id="specs" className="py-24 border-b border-slate-200 dark:border-white/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <div className="mb-10">
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                                    <Server className="w-6 h-6 text-cyan-600 dark:text-cyan-500" />
                                    System Requirements
                                </h2>
                                <div className="h-1 w-20 bg-cyan-600/50 dark:bg-cyan-500/50 rounded-full"></div>
                            </div>

                            <div className="space-y-4">
                                {systemRequirements.map((spec, index) => (
                                    <div key={index} className="flex items-center gap-5 p-4 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/50 rounded-lg group hover:border-cyan-500/30 dark:hover:border-slate-600 transition-all shadow-sm hover:shadow-md">
                                        <div className="text-slate-500 group-hover:text-cyan-600 dark:group-hover:text-cyan-500 transition-colors">
                                            <spec.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-slate-900 dark:text-white font-bold text-base mb-1">{spec.label}</div>
                                            <div className="font-mono text-cyan-600 dark:text-cyan-500 text-sm mb-0.5">{spec.value}</div>
                                            <div className="text-xs text-slate-500">{spec.subtext}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-slate-900/95 border border-slate-800 p-8 rounded-xl font-mono text-sm shadow-2xl relative overflow-hidden">
                            {/* Glass reflection */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

                            <div className="flex items-center gap-2 mb-6 text-slate-400 border-b border-slate-800 pb-4">
                                <Settings className="w-4 h-4" />
                                <span className="text-slate-200">kernel_config.conf</span>
                            </div>
                            <div className="text-slate-500 mb-4 text-xs"># KONFIGURASI KERNEL RAFFITECH</div>
                            <ul className="space-y-4 text-slate-300">
                                <li className="flex gap-3">
                                    <span className="text-cyan-500">➜</span>
                                    <span>Kernel: Dioptimalkan untuk responsivitas tinggi</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-cyan-500">➜</span>
                                    <span>I/O Scheduler: BFQ (Bikin SSD makin awet & kenceng)</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-cyan-500">➜</span>
                                    <span>Network Stack: TCP BBR (Koneksi internet lebih stabil)</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-cyan-500">➜</span>
                                    <span>Security: Firewall UFW aktif & AppArmor diperketat</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Screenshots Section */}
            <section className="py-24 border-b border-slate-200 dark:border-white/5 bg-slate-100/50 dark:bg-slate-900/20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <span className="text-cyan-600 dark:text-cyan-500 font-mono text-xs uppercase tracking-widest">Visual Interface</span>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-3">Desktop Environment</h2>
                    </div>

                    <div className="grid md:grid-cols-1 gap-6 max-w-4xl mx-auto">
                        <div className="aspect-[16/9] bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center group hover:border-cyan-500/50 dark:hover:border-slate-600 transition-all p-2 shadow-sm hover:shadow-xl overflow-hidden relative">
                            <Image
                                src="/screenshots/desktop_v1.png"
                                alt="RaffiTech OS Desktop"
                                width={1280}
                                height={720}
                                className="rounded object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section id="faq" className="py-24 border-b border-slate-200 dark:border-white/5">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center justify-center gap-3">
                            <HelpCircle className="w-8 h-8 text-cyan-500" /> Sering Ditanyakan (FAQ)
                        </h2>
                    </div>

                    <div className="grid gap-6">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-cyan-500/30 transition-all">
                                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex gap-3">
                                    <span className="text-cyan-500">Q:</span> {faq.q}
                                </h4>
                                <p className="text-slate-600 dark:text-slate-400 pl-8 border-l-2 border-slate-100 dark:border-slate-800">
                                    <span className="font-bold text-slate-700 dark:text-slate-300">A:</span> {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Download Section */}
            <section id="download" className="py-24 border-b border-slate-200 dark:border-white/5">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Download className="w-64 h-64 text-cyan-500" />
                        </div>

                        {/* Animated gradient mesh background for download card */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-slate-900 to-purple-900/20"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Get RaffiTech OS
                            </h2>
                            <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
                                Stable release v1.0. Direct ISO download. No account required.
                            </p>

                            <div className="flex flex-col items-center gap-6">
                                <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-500 text-white px-12 h-16 text-lg font-bold rounded-xl shadow-xl shadow-cyan-900/40 transition-all w-full md:w-auto hover:scale-105 hover:shadow-cyan-500/30">
                                    <a href="https://drive.google.com/file/d/1Af16IXjMkCs5OKsT8wIiHMBF1iSb55du/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                        <Download className="w-6 h-6 mr-3" />
                                        Download ISO Image
                                    </a>
                                </Button>

                                {/* Verified Badge */}
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs font-bold">
                                    <ShieldCheck className="w-4 h-4" />
                                    MD5 Verified & Malware Free
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl mt-4">
                                    <div className="bg-black/30 backdrop-blur border border-white/10 p-4 rounded-lg flex items-center justify-center gap-2 text-sm text-slate-300">
                                        <Globe className="w-4 h-4 text-slate-500" />
                                        <span>Mirror: Google Drive</span>
                                    </div>
                                    <div className="bg-black/30 backdrop-blur border border-white/10 p-4 rounded-lg flex items-center justify-center gap-2 text-sm text-slate-300">
                                        <HardDrive className="w-4 h-4 text-slate-500" />
                                        <span>Size: 3.6 GB</span>
                                    </div>
                                    <div className="bg-black/30 backdrop-blur border border-white/10 p-4 rounded-lg flex items-center justify-center gap-2 text-sm text-slate-300">
                                        <Box className="w-4 h-4 text-slate-500" />
                                        <span>Format: .ISO</span>
                                    </div>
                                </div>

                                <div className="mt-6 w-full max-w-xl">
                                    <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-2 text-center">MD5 Checksum</div>
                                    <div className="bg-black rounded-lg border border-slate-800 p-3 font-mono text-xs text-cyan-500 break-all text-center select-all cursor-pointer hover:bg-slate-950 transition-colors" title="Click to select">
                                        9b8c3f4054e2910748dc81c097a54fa6
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Documentation / Install Guide */}
            <section id="doc-install" className="py-24 bg-slate-100/50 dark:bg-slate-900/20">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center justify-center gap-3">
                            <BookOpen className="w-6 h-6 text-cyan-600 dark:text-cyan-500" />
                            Panduan Instalasi
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400">Step-by-step cara install RaffiTech OS di PC/Laptop kamu.</p>
                    </div>

                    <div className="space-y-8">
                        {/* Step 1 */}
                        <div className="flex gap-6 relative">
                            <div className="flex-shrink-0 w-12 h-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full flex items-center justify-center text-cyan-600 dark:text-cyan-500 font-bold text-xl z-10 shadow-sm">1</div>
                            <div className="absolute left-6 top-12 bottom-[-40px] w-px bg-slate-200 dark:bg-slate-800"></div>
                            <div className="pt-2 pb-6">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Siapkan Alat Tempur</h3>
                                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                                    <li className="flex items-center gap-2"><Usb className="w-4 h-4" /> Flashdisk minimal 8GB</li>
                                    <li className="flex items-center gap-2"><Download className="w-4 h-4" /> Download file ISO RaffiTech OS</li>
                                    <li className="flex items-center gap-2"><Disc className="w-4 h-4" /> Aplikasi Rufus (Windows) atau Ventoy (Paling Gampang)</li>
                                </ul>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex gap-6 relative">
                            <div className="flex-shrink-0 w-12 h-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full flex items-center justify-center text-cyan-600 dark:text-cyan-500 font-bold text-xl z-10 shadow-sm">2</div>
                            <div className="absolute left-6 top-12 bottom-[-40px] w-px bg-slate-200 dark:bg-slate-800"></div>
                            <div className="pt-2 pb-6">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Bikin Bootable USB</h3>
                                <ul className="space-y-2 text-slate-600 dark:text-slate-400 list-disc list-inside marker:text-cyan-500">
                                    <li>Colok Flashdisk</li>
                                    <li>Buka Ventoy/Rufus</li>
                                    <li>Pilih ISO RaffiTech OS</li>
                                    <li>Klik Start <span className="text-red-500 dark:text-red-400 text-sm ml-2">(Backup data dulu, flashdisk bakal diformat!)</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex gap-6 relative">
                            <div className="flex-shrink-0 w-12 h-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full flex items-center justify-center text-cyan-600 dark:text-cyan-500 font-bold text-xl z-10 shadow-sm">3</div>
                            <div className="absolute left-6 top-12 bottom-[-40px] w-px bg-slate-200 dark:bg-slate-800"></div>
                            <div className="pt-2 pb-6">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Masuk ke BIOS/Boot Menu</h3>
                                <div className="space-y-4 text-slate-600 dark:text-slate-400">
                                    <p>Matikan PC, colok Flashdisk, nyalakan lagi dan tekan tombol Boot Menu berkali-kali:</p>
                                    <div className="grid grid-cols-2 gap-4 text-sm font-mono bg-slate-200 dark:bg-slate-950 p-4 rounded-lg border border-slate-300 dark:border-slate-800">
                                        <div>Asus/Acer/Toshiba</div><div className="text-cyan-600 dark:text-cyan-400">F2 atau ESC</div>
                                        <div>HP</div><div className="text-cyan-600 dark:text-cyan-400">F9 atau F10</div>
                                        <div>Lenovo</div><div className="text-cyan-600 dark:text-cyan-400">F12 atau Fn+F12</div>
                                        <div>Dell</div><div className="text-cyan-600 dark:text-cyan-400">F12</div>
                                    </div>
                                    <p>Pilih nama Flashdisk kamu (pilih opsi <strong>UEFI</strong> jika ada).</p>
                                </div>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="flex gap-6 relative">
                            <div className="flex-shrink-0 w-12 h-12 bg-cyan-600 border border-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl z-10 shadow-lg">4</div>
                            <div className="pt-2 pb-6">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Instalasi & Finishing</h3>
                                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                                    <li className="flex items-center gap-2"><MonitorPlay className="w-4 h-4" /> Pilih "Start RaffiTech OS Ultimate"</li>
                                    <li className="flex items-center gap-2"><CheckSquare className="w-4 h-4" /> Klik icon "Install RaffiTech OS" di desktop</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Ikuti petunjuk (Bahasa, Lokasi, User)</li>
                                    <li className="mt-4 p-3 bg-cyan-100 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-900/50 rounded text-cyan-800 dark:text-cyan-200 text-sm">
                                        Tunggu selesai, cabut flashdisk, restart. Selamat datang di RaffiTech OS!
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Quote */}
            <div className="py-8 bg-white dark:bg-slate-950 text-center border-t border-slate-200 dark:border-white/5">
                <p className="text-slate-500 dark:text-slate-600 font-mono text-sm flex items-center justify-center gap-2">
                    <Coffee className="w-4 h-4" />
                    Made with ❤️ and plenty of coffee by RaffiTech.
                </p>
            </div>

            <Footer />
        </main>
    )
}
