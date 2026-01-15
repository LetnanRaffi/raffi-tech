import { RaffiTechHero } from "@/components/raffitech-hero"
import PromoBanner from "@/components/promo-banner"
import ServicesSection from "@/components/services-section"
import HowItWorksSection from "@/components/how-it-works-section"
import RemoteSupportSection from "@/components/remote-support-section"
import MaintenancePackagesSection from "@/components/maintenance-packages-section"
import TestimonialsSection from "@/components/testimonials-section"
import WhyChooseUsSection from "@/components/why-choose-us-section"
import PortfolioSection from "@/components/portfolio-section"
import TechStackSection from "@/components/tech-stack-section"
import DigitalProductsSection from "@/components/digital-products-section"
import AboutFounderSection from "@/components/about-founder-section"
import SkillsSection from "@/components/skills-section"
import FAQSection from "@/components/faq-section"
import CommitmentSection from "@/components/commitment-section"
import ClosingCTASection from "@/components/closing-cta-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import ChatWidget from "@/components/chat-widget"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      <PromoBanner />
      <RaffiTechHero />

      {/* Software Buatan Kami Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider mb-4">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Software Buatan Kami
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Kumpulan software gratis yang dibuat untuk membantu produktivitas kamu sehari-hari.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* RaffiTech OS */}
          <Link href="/raffitechos" className="group">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 p-6 rounded-2xl relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-cyan-500/20 transition-all"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/20">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8M12 17v4" />
                  </svg>
                </div>
                <span className="inline-block bg-cyan-500/20 text-cyan-400 text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider mb-3">Operating System</span>
                <h3 className="text-xl font-bold text-white mb-2">RaffiTech OS</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">Linux distro untuk Network Engineer. Winbox & dev tools sudah siap pakai.</p>
                <span className="inline-flex items-center text-cyan-400 font-semibold text-sm group-hover:text-cyan-300 transition-colors">
                  Download ISO <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </Link>

          {/* RaffiBurn */}
          <Link href="/raffitechos#raffiburn" className="group">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 p-6 rounded-2xl relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-orange-500/20 transition-all"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-orange-500/20">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 2v6m0 12v2M4.93 4.93l4.24 4.24m5.66 5.66l4.24 4.24M2 12h6m8 0h6M4.93 19.07l4.24-4.24m5.66-5.66l4.24-4.24" />
                  </svg>
                </div>
                <span className="inline-block bg-orange-500/20 text-orange-400 text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider mb-3">USB Tool</span>
                <h3 className="text-xl font-bold text-white mb-2">RaffiBurn</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">Tool untuk burning ISO ke flashdisk. Cross-platform, simple, dan cepat.</p>
                <span className="inline-flex items-center text-orange-400 font-semibold text-sm group-hover:text-orange-300 transition-colors">
                  Download <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </Link>

          {/* RafIMG */}
          <Link href="/rafimg" className="group">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 p-6 rounded-2xl relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-rose-500/10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-rose-500/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-rose-500/20 transition-all"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-rose-500/20">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                </div>
                <span className="inline-block bg-rose-500/20 text-rose-400 text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider mb-3">Image Tool</span>
                <h3 className="text-xl font-bold text-white mb-2">RafIMG</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">Compress & upscale gambar dengan mudah. Gratis, cepat, tanpa watermark.</p>
                <span className="inline-flex items-center text-rose-400 font-semibold text-sm group-hover:text-rose-300 transition-colors">
                  Buka Tools <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <WhyChooseUsSection />
      <ServicesSection />
      <HowItWorksSection />
      <RemoteSupportSection />
      <MaintenancePackagesSection />
      <TestimonialsSection />
      <PortfolioSection />
      <TechStackSection />
      <DigitalProductsSection />
      <AboutFounderSection />
      <SkillsSection />
      <FAQSection />
      <CommitmentSection />
      <ClosingCTASection />
      <ContactSection />
      <Footer />
      <ChatWidget />
    </main>
  )
}
