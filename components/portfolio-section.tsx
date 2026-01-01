"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
    {
        title: "Bot Automation Monitoring ISP",
        description: "Sistem monitoring otomatis untuk infrastruktur ISP dengan fitur alert real-time, visualisasi traffic, dan uptime tracking 24/7.",
        image: "/project/29924fd6-2a3d-487a-804c-feddac45c856.png",
        tags: ["Python", "Telegram Bot", "Grafana"],
        link: "#",
    },
    {
        title: "Landing Page Portfolio",
        description: "Website portfolio personal dengan desain modern, animasi smooth, dan optimasi SEO untuk meningkatkan personal branding.",
        image: "/project/b6d8fa35-e177-4a5a-9af0-c4751f1ae454.jpeg",
        tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
        link: "#",
    },
    {
        title: "Dashboard Perusahaan",
        description: "Sistem dashboard komprehensif untuk manajemen perusahaan dengan fitur monitoring karyawan, analitik, dan laporan bisnis.",
        image: "/project/f00ec47d-53a2-4baa-8ba9-22c5cc6b7d35.png",
        tags: ["React", "Node.js", "PostgreSQL"],
        link: "#",
    },
]

export default function PortfolioSection() {
    return (
        <section id="portfolio" className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Portfolio Project</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Beberapa hasil karya terbaik kami yang telah membantu klien mencapai tujuan digital mereka.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-border/50 bg-card">
                            <div className="relative aspect-video overflow-hidden bg-muted">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between text-xl">
                                    {project.title}
                                    <Link href={project.link} className="text-muted-foreground hover:text-primary transition-colors">
                                        <ExternalLink className="h-5 w-5" />
                                    </Link>
                                </CardTitle>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <Badge key={tagIndex} variant="secondary" className="text-xs font-normal">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-muted-foreground">
                                    {project.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
