import { RaffiTechHero } from "@/components/raffitech-hero"
import ServicesSection from "@/components/services-section"
import PortfolioSection from "@/components/portfolio-section"
import SkillsSection from "@/components/skills-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <RaffiTechHero />
      <ServicesSection />
      <PortfolioSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
