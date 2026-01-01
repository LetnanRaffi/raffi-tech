import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wrench, Wifi } from "lucide-react"

const skills = [
  {
    icon: Wrench,
    title: "Perbaikan Hardware Komputer/Laptop",
    description:
      "Diagnosa dan perbaikan komponen hardware seperti motherboard, RAM, SSD, dan komponen lainnya dengan teknologi diagnostik terdepan.",
  },
  {
    icon: Wifi,
    title: "Setting Jaringan",
    description:
      "Konfigurasi jaringan LAN, WiFi, router, dan troubleshooting masalah konektivitas internet dengan protokol keamanan tingkat enterprise.",
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tl from-accent/5 via-transparent to-primary/5"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent pulse-neon"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Keahlian Teknis
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Skill teknis advanced yang kami kuasai untuk mendukung infrastruktur IT perusahaan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 border border-white/10 bg-card hover:border-primary/50 hover:scale-105 group"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                  <skill.icon className="h-6 w-6 text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl text-card-foreground group-hover:text-primary transition-colors duration-300">
                  {skill.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-pretty group-hover:text-foreground transition-colors duration-300">
                  {skill.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
