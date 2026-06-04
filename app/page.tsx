"use client";

import { useState } from "react";
import {
  ContactSection,
  CookieBanner,
  FounderSection,
  HeroIntro,
  Language,
  Navbar,
  PartnerStrip,
  ProjectShowcase,
  ServiceModules,
  ValueGrid,
} from "@/components/client";

const content = {
  en: {
    nav: [
      { label: "Services", href: "#services" },
      { label: "Projects", href: "#projects" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
    hero: {
      eyebrow: "",
      title: "Software systems for serious operations.",
      body:
        "RaffiTech builds custom software, automation, AI workflows, and infrastructure for teams that need reliable systems, clear delivery, and operational control.",
      primary: "Start a project",
      secondary: "View projects",
    },
    partners: {
      copy: {
        eyebrow: "Trusted by teams and products",
        title: "Client and product relationships",
      },
      items: [
        {
          name: "Veralex Consulting",
          context: "Law firm",
          mark: "V",
          logoSrc: "/veralex-logo.jpg",
        },
        {
          name: "SMK EKUIN Pangeran Jayakarta",
          context: "Education and infrastructure",
          mark: "EK",
          logoSrc: "/smkekuin-logo.png",
        },
        {
          name: "Westside3x3",
          context: "Sports community and events",
          mark: "W3",
          logoSrc: "/westside-logo.png",
        },
        {
          name: "RafQR",
          context: "Secure sharing product",
          mark: "RQ",
          logoSrc: "/rafqr-logo.png",
        },
      ],
    },
    services: {
      eyebrow: "Services",
      title: "Systems designed around the way the work actually happens.",
      body:
        "The focus is not decorative web work. It is building clear, useful systems that reduce friction and make operations easier to run.",
      items: [
        {
          title: "Software Development",
          description:
            "Custom web apps, internal systems, dashboards, and operational platforms.",
          mode: "software" as const,
        },
        {
          title: "Business Automation",
          description:
            "Workflow automation for forms, reports, approvals, alerts, and daily admin tasks.",
          mode: "automation" as const,
        },
        {
          title: "AI Solutions",
          description:
            "AI assistants, knowledge bases, chatbots, and practical AI workflows for teams.",
          mode: "ai" as const,
        },
        {
          title: "Technology Consulting",
          description:
            "Architecture, deployment, infrastructure, and technology planning for business needs.",
          mode: "consulting" as const,
        },
      ],
    },
    projects: {
      eyebrow: "Featured projects",
      title: "A focused look at practical builds.",
      labels: {
        selected: "Selected work",
        screenshotFallback: "Screenshot coming soon",
        tech: "Tech",
      },
      items: [
        {
          title: "RafQR",
          what: "Secure browser-based file and text sharing for quick cross-device handoff.",
          tech: "Next.js",
          tags: ["Secure transfer", "Browser-native", "Fast handoff"],
          screenshotSrc: "/rafqr-screenshot.png",
        },
        {
          title: "RestoKITA",
          what: "QR ordering flow for restaurants, cafes, kitchen teams, and cashier payment status.",
          tech: "Next.js + Supabase",
          tags: ["QR menu", "Order flow", "Cloud backend"],
        },
        {
          title: "Mikrotik Monitoring Bot",
          what: "Telegram-based monitoring and alert system for router status visibility.",
          tech: "Google Apps Script + Telegram",
          tags: ["Live alerts", "Network status", "Telegram bot"],
        },
      ],
    },
    process: {
      eyebrow: "Process",
      title: "A direct path from problem to working system.",
      body:
        "Each engagement starts with operational clarity before design or development decisions are made.",
      items: [
        {
          number: "01",
          title: "Discovery",
          description: "Map the business problem, current workflow, and expected output.",
        },
        {
          number: "02",
          title: "Planning",
          description: "Define the system structure, core features, and delivery path.",
        },
        {
          number: "03",
          title: "Development",
          description: "Build the product, automation, or infrastructure with fast review cycles.",
        },
        {
          number: "04",
          title: "Deployment",
          description: "Launch, stabilize, and refine based on how the system is used.",
        },
      ],
    },
    values: {
      eyebrow: "Why RaffiTech",
      title: "Clear execution without unnecessary theatre.",
      body:
        "The work stays focused on practical outcomes, direct communication, and systems that can keep running.",
      items: [
        "Practical Solutions",
        "Direct Communication",
        "Modern Technologies",
        "Fast Iteration",
      ],
    },
    founder: {
      eyebrow: "Meet the founder",
      title: "Muhamad Raffi Pasha",
      role: "Founder & Software Engineer",
      body:
        "Started from IT infrastructure and network engineering, now focused on building software, automation systems, and practical technology solutions for businesses and organizations.",
      stats: [
        ["Background", "IT Infrastructure"],
        ["Focus", "Software & Automation"],
        ["Output", "Practical Systems"],
      ] as Array<[string, string]>,
    },
    cta: {
      eyebrow: "Custom build",
      title: "Need a custom system?",
      body: "Let’s discuss the workflow, problem, or operation you want to improve.",
      primary: "Start a project",
      secondary: "WhatsApp",
    },
    contact: {
      eyebrow: "Start the build",
      title: "Let’s build something useful.",
      primary: "Start a project",
      secondary: "LinkedIn",
    },
    footer: {
      description:
        "Software studio based in Bekasi, Indonesia. Building software, automation, and technology systems for modern businesses.",
      links: "Links",
      contact: "Contact",
      rights: "All rights reserved.",
    },
  },
  id: {
    nav: [
      { label: "Layanan", href: "#services" },
      { label: "Proyek", href: "#projects" },
      { label: "Tentang", href: "#about" },
      { label: "Kontak", href: "#contact" },
    ],
    hero: {
      eyebrow: "",
      title: "Sistem software untuk operasional yang serius.",
      body:
        "RaffiTech membangun software custom, automation, workflow AI, dan infrastruktur untuk tim yang butuh sistem reliable, delivery jelas, dan kontrol operasional.",
      primary: "Mulai proyek",
      secondary: "Lihat proyek",
    },
    partners: {
      copy: {
        eyebrow: "Dipercaya tim dan produk",
        title: "Relasi client dan produk",
      },
      items: [
        {
          name: "Veralex Consulting",
          context: "Law firm",
          mark: "V",
          logoSrc: "/veralex-logo.jpg",
        },
        {
          name: "SMK EKUIN Pangeran Jayakarta",
          context: "Pendidikan dan infrastruktur",
          mark: "EK",
          logoSrc: "/smkekuin-logo.png",
        },
        {
          name: "Westside3x3",
          context: "Komunitas dan event olahraga",
          mark: "W3",
          logoSrc: "/westside-logo.png",
        },
        {
          name: "RafQR",
          context: "Produk secure sharing",
          mark: "RQ",
          logoSrc: "/rafqr-logo.png",
        },
      ],
    },
    services: {
      eyebrow: "Layanan",
      title: "Sistem yang dirancang mengikuti cara kerja bisnis sebenarnya.",
      body:
        "Fokusnya bukan website dekoratif. Fokusnya membangun sistem yang jelas, berguna, dan mengurangi pekerjaan manual.",
      items: [
        {
          title: "Software Development",
          description:
            "Web app custom, sistem internal, dashboard, dan platform operasional.",
          mode: "software" as const,
        },
        {
          title: "Business Automation",
          description:
            "Automation untuk form, laporan, approval, notifikasi, dan tugas admin harian.",
          mode: "automation" as const,
        },
        {
          title: "AI Solutions",
          description:
            "AI assistant, knowledge base, chatbot, dan workflow AI praktis untuk tim.",
          mode: "ai" as const,
        },
        {
          title: "Technology Consulting",
          description:
            "Arsitektur, deployment, infrastruktur, dan perencanaan teknologi sesuai kebutuhan bisnis.",
          mode: "consulting" as const,
        },
      ],
    },
    projects: {
      eyebrow: "Featured projects",
      title: "Ringkasan project yang praktis dan langsung ke output.",
      labels: {
        selected: "Karya pilihan",
        screenshotFallback: "Screenshot akan ditambahkan",
        tech: "Teknologi",
      },
      items: [
        {
          title: "RafQR",
          what: "Platform berbagi file dan teks lewat browser untuk handoff cepat antar perangkat.",
          tech: "Next.js",
          tags: ["Secure transfer", "Browser-native", "Fast handoff"],
          screenshotSrc: "/rafqr-screenshot.png",
        },
        {
          title: "RestoKITA",
          what: "Flow pemesanan QR untuk restoran, cafe, dapur, dan status pembayaran kasir.",
          tech: "Next.js + Supabase",
          tags: ["QR menu", "Order flow", "Cloud backend"],
        },
        {
          title: "Mikrotik Monitoring Bot",
          what: "Bot Telegram untuk monitoring dan alert status router secara praktis.",
          tech: "Google Apps Script + Telegram",
          tags: ["Live alerts", "Network status", "Telegram bot"],
        },
      ],
    },
    process: {
      eyebrow: "Proses",
      title: "Jalur yang jelas dari masalah ke sistem yang berjalan.",
      body:
        "Setiap pekerjaan dimulai dari memahami operasional sebelum masuk ke keputusan desain atau development.",
      items: [
        {
          number: "01",
          title: "Discovery",
          description: "Memetakan masalah bisnis, workflow saat ini, dan output yang dibutuhkan.",
        },
        {
          number: "02",
          title: "Planning",
          description: "Menentukan struktur sistem, fitur inti, dan alur pengerjaan.",
        },
        {
          number: "03",
          title: "Development",
          description: "Membangun produk, automation, atau infrastruktur dengan review cepat.",
        },
        {
          number: "04",
          title: "Deployment",
          description: "Meluncurkan, menstabilkan, dan merapikan sistem sesuai penggunaan nyata.",
        },
      ],
    },
    values: {
      eyebrow: "Kenapa RaffiTech",
      title: "Eksekusi jelas tanpa drama yang tidak perlu.",
      body:
        "Pekerjaan tetap fokus pada output praktis, komunikasi langsung, dan sistem yang bisa terus berjalan.",
      items: [
        "Solusi Praktis",
        "Komunikasi Langsung",
        "Teknologi Modern",
        "Iterasi Cepat",
      ],
    },
    founder: {
      eyebrow: "Founder",
      title: "Muhamad Raffi Pasha",
      role: "Founder & Software Engineer",
      body:
        "Berawal dari IT infrastructure dan network engineering, sekarang fokus membangun software, sistem automation, dan solusi teknologi praktis untuk bisnis dan organisasi.",
      stats: [
        ["Background", "IT Infrastructure"],
        ["Fokus", "Software & Automation"],
        ["Output", "Sistem Praktis"],
      ] as Array<[string, string]>,
    },
    cta: {
      eyebrow: "Custom build",
      title: "Butuh sistem custom?",
      body: "Diskusikan workflow, masalah, atau operasional yang ingin Anda rapikan.",
      primary: "Mulai proyek",
      secondary: "WhatsApp",
    },
    contact: {
      eyebrow: "Mulai build",
      title: "Mari bangun sesuatu yang berguna.",
      primary: "Mulai proyek",
      secondary: "LinkedIn",
    },
    footer: {
      description:
        "Software studio berbasis di Bekasi, Indonesia. Membangun software, automation, dan sistem teknologi untuk bisnis modern.",
      links: "Tautan",
      contact: "Kontak",
      rights: "Seluruh hak cipta dilindungi.",
    },
  },
} as const;

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const copy = content[language];

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-neutral-950">
      <Navbar
        navItems={[...copy.nav]}
        cta={copy.hero.primary}
        language={language}
        onLanguageChange={setLanguage}
      />

      <section id="home">
        <HeroIntro copy={copy.hero} />
      </section>

      <PartnerStrip copy={copy.partners.copy} partners={[...copy.partners.items]} />
      <ServiceModules copy={copy.services} services={[...copy.services.items]} />
      <ProjectShowcase
        copy={copy.projects}
        labels={copy.projects.labels}
        projects={[...copy.projects.items]}
      />
      <ValueGrid copy={copy.values} values={[...copy.values.items]} />
      <FounderSection copy={copy.founder} />
      <ContactSection copy={copy.contact} />

      <footer className="section-border px-5 py-12 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 text-sm text-neutral-500 lg:grid-cols-[1.2fr_0.6fr_0.6fr]">
          <div>
            <p className="font-display text-lg font-medium text-neutral-950">
              RaffiTech Solutions
            </p>
            <p className="mt-4 max-w-md leading-7">{copy.footer.description}</p>
            <p className="mt-8">© RaffiTech Solutions. {copy.footer.rights}</p>
          </div>
          <div>
            <p className="mb-4 text-xs font-medium font-mono text-neutral-950">
              {copy.footer.links}
            </p>
            <div className="flex flex-col gap-3">
              {copy.nav.map((item) => (
                <a key={item.href} href={item.href} className="hover:text-neutral-950">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-4 text-xs font-medium font-mono text-neutral-950">
              {copy.footer.contact}
            </p>
            <div className="flex flex-col gap-3">
              <a href="https://wa.me/62895328949434" className="hover:text-neutral-950">
                WhatsApp
              </a>
              <a href="https://linkedin.com/in/muhamad-raffi-pasha" className="hover:text-neutral-950">
                LinkedIn
              </a>
              <a href="https://github.com/LetnanRaffi" className="hover:text-neutral-950">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
      <CookieBanner language={language} />
    </main>
  );
}
