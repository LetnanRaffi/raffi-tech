import { RaffiTechHero } from "@/components/raffitech-hero"
import PromoBanner from "@/components/promo-banner"
import ServicesSection from "@/components/services-section"
import HowItWorksSection from "@/components/how-it-works-section"
import TestimonialsSection from "@/components/testimonials-section"
import WhyChooseUsSection from "@/components/why-choose-us-section"
import PortfolioSection from "@/components/portfolio-section"
import TechStackSection from "@/components/tech-stack-section"
import AboutFounderSection from "@/components/about-founder-section"
import SkillsSection from "@/components/skills-section"
import FAQSection from "@/components/faq-section"
import CommitmentSection from "@/components/commitment-section"
import ClosingCTASection from "@/components/closing-cta-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import ChatWidget from "@/components/chat-widget"

export default function Home() {
  return (
    <main className="min-h-screen">
      <PromoBanner />
      <RaffiTechHero />
      <ServicesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <WhyChooseUsSection />
      <PortfolioSection />
      <TechStackSection />
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
