import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "RaffiTech Solutions - Jasa IT, Web & Jaringan Bekasi | IT Consultant",
  description:
    "IT Consultant & Software Specialist Bekasi. Jasa Install Ulang, Web Development, Setting Mikrotik & Desain Grafis. Remote Support 24 jam, konsultasi GRATIS!",
  generator: "RaffiTech Solutions",
  keywords: [
    "jasa website bekasi",
    "jasa desain grafis",
    "install ulang laptop",
    "perbaikan komputer bekasi",
    "jasa IT bekasi",
    "web developer bekasi",
    "setting jaringan",
    "laporan PKL"
  ],
  authors: [{ name: "Muhamad Raffi Pasha", url: "https://muhamadraffipasha.vercel.app" }],
  creator: "RaffiTech Solutions",
  publisher: "RaffiTech Solutions",
  verification: {
    google: "Y0lRT8f8Gggxpryg3UanhCDm7UizQMYcpqmLLyTqmqM",
  },
  openGraph: {
    title: "RaffiTech Solutions - Jasa IT & Web Development Profesional",
    description: "Solusi teknologi terpercaya untuk kebutuhan digital Anda. Pembuatan Website, Desain, IT Support & lebih banyak lagi!",
    url: "https://raffitech.vercel.app",
    siteName: "RaffiTech Solutions",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/logo/photo_6246947705343118562_y.jpg",
        width: 800,
        height: 600,
        alt: "RaffiTech Solutions Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RaffiTech Solutions - Jasa IT Profesional",
    description: "Solusi teknologi terpercaya di Bekasi",
    images: ["/logo/photo_6246947705343118562_y.jpg"],
  },
  icons: {
    icon: "/logo/photo_6246947705343118562_y.jpg",
    apple: "/logo/photo_6246947705343118562_y.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
