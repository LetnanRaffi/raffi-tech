import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Monitor, Settings } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="bg-primary text-primary-foreground py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">RaffiTech Solutions</h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto text-pretty">
            Solusi lengkap untuk kebutuhan teknologi Anda. Dari desain website hingga perbaikan komputer, kami siap
            membantu bisnis dan individu mencapai potensi digital terbaik.
          </p>

          {/* Service Icons */}
          <div className="flex justify-center items-center gap-8 mb-10">
            <div className="flex flex-col items-center">
              <Code className="h-12 w-12 mb-2 text-primary-foreground/80" />
              <span className="text-sm">Web Design</span>
            </div>
            <div className="flex flex-col items-center">
              <Monitor className="h-12 w-12 mb-2 text-primary-foreground/80" />
              <span className="text-sm">IT Support</span>
            </div>
            <div className="flex flex-col items-center">
              <Settings className="h-12 w-12 mb-2 text-primary-foreground/80" />
              <span className="text-sm">Tech Solutions</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Mulai Konsultasi
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Lihat Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
