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

      {/* RaffiTech OS Promo Banner */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl my-8 text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity group-hover:opacity-100 opacity-50"></div>

          <span className="inline-block bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider mb-3">New Release</span>

          <h3 className="text-xl md:text-2xl font-bold text-slate-50 mb-2">
            Introducing RaffiTech OS v1.0
          </h3>
          <p className="text-slate-400 text-sm md:text-base mb-4 max-w-2xl mx-auto">
            The operating system designed for Network Engineers. Winbox & Dev tools ready.
          </p>

          <Link href="/raffitechos" className="inline-flex items-center text-sky-400 font-semibold text-sm hover:text-sky-300 transition-colors">
            Get the ISO <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>

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
