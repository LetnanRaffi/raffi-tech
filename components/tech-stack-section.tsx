import { Code, Palette, Server, Terminal } from "lucide-react"

const techStacks = [
    {
        category: "Network & Infrastructure",
        icon: Server,
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        techs: ["Mikrotik RouterOS", "Cisco Basics", "UniFi System", "VLAN & QoS"],
    },
    {
        category: "Web Development",
        icon: Code,
        color: "text-green-500",
        bgColor: "bg-green-500/10",
        techs: ["React JS", "Next.js", "Tailwind CSS", "TypeScript"],
    },
    {
        category: "Design Tools",
        icon: Palette,
        color: "text-pink-500",
        bgColor: "bg-pink-500/10",
        techs: ["Canva Pro", "Adobe Photoshop", "Figma", "Illustrator"],
    },
    {
        category: "System & Scripting",
        icon: Terminal,
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
        techs: ["Windows & Linux", "PowerShell", "Bash Script", "Mikrotik Script"],
    },
]

export default function TechStackSection() {
    return (
        <section id="tech-stack" className="py-20 bg-background relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Teknologi yang Kami Gunakan
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
                        Kami menggunakan <span className="text-primary font-semibold">tools standar industri terbaik</span> untuk hasil maksimal.
                        Bukan tools bajakan — software berlisensi dan teknologi terkini.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {techStacks.map((stack, index) => (
                        <div
                            key={index}
                            className="bg-card border border-white/10 rounded-2xl p-6 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group"
                        >
                            {/* Icon */}
                            <div className={`w-12 h-12 ${stack.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                <stack.icon className={`w-6 h-6 ${stack.color}`} />
                            </div>

                            {/* Category */}
                            <h3 className="text-base font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                {stack.category}
                            </h3>

                            {/* Tech list */}
                            <ul className="space-y-2">
                                {stack.techs.map((tech, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <div className={`w-1.5 h-1.5 rounded-full ${stack.color.replace('text-', 'bg-')}`}></div>
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
