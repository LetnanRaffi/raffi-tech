import { RaffiTechHero } from "@/components/raffitech-hero"
import ServicesSection from "@/components/services-section"
import TestimonialsSection from "@/components/testimonials-section"
import PortfolioSection from "@/components/portfolio-section"
import SkillsSection from "@/components/skills-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import ChatWidget from "@/components/chat-widget"

export default function Home() {
  return (
    <main className="min-h-screen">
      <RaffiTechHero />
      <ServicesSection />
      <TestimonialsSection />
      <PortfolioSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
      <ChatWidget />
    </main>
  )
}
