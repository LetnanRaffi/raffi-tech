import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Terminal, Shield, Zap } from "lucide-react"

const skills = [
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Mampu mendiagnosa error sistem operasi yang rumit yang tidak bisa diselesaikan teknisi biasa. Dari bluescreen misterius sampai virus membandel, kami pecahkan dengan logika.",
    highlight: "Analytical Thinking",
  },
  {
    icon: Terminal,
    title: "Scripting & CLI",
    description:
      "Terbiasa menggunakan Script Mikrotik dan Command Line (Terminal/Linux) untuk efisiensi. Automasi tugas repetitif? Serahkan ke script!",
    highlight: "Automation Expert",
  },
  {
    icon: Zap,
    title: "Web Optimization",
    description:
      "Tidak hanya membuat web, tapi memastikan loading cepat (SEO Friendly), responsive di semua perangkat, dan aman dari serangan hacker.",
    highlight: "Performance Focused",
  },
  {
    icon: Shield,
    title: "Security Mindset",
    description:
      "Menerapkan best practice keamanan: password management, firewall setup, backup strategy, dan proteksi dari malware/ransomware.",
    highlight: "Cyber Aware",
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tl from-accent/5 via-transparent to-primary/5"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent pulse-neon"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Software & Network Engineer</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 mt-2">
            Keahlian Teknis
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Bukan cuma bisa install ulang — tapi memecahkan masalah dengan <span className="text-foreground font-medium">logika dan kode</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 border border-white/10 bg-card hover:border-primary/50 group"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <skill.icon className="h-6 w-6 text-primary transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <CardTitle className="text-lg text-card-foreground group-hover:text-primary transition-colors duration-300">
                        {skill.title}
                      </CardTitle>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-primary/10 text-primary rounded-full">
                        {skill.highlight}
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-pretty group-hover:text-foreground/80 transition-colors duration-300">
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
