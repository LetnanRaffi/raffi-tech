import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const siteUrl = "https://raffitech.biz.id";
const siteDescription =
  "RaffiTech Solutions builds custom software, business automation, AI workflows, and practical technology infrastructure for modern teams in Indonesia.";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "RaffiTech Solutions | Software, Automation, AI & Technology Systems",
    template: "%s | RaffiTech Solutions",
  },
  description: siteDescription,
  applicationName: "RaffiTech Solutions",
  authors: [{ name: "RaffiTech Solutions", url: siteUrl }],
  creator: "RaffiTech Solutions",
  publisher: "RaffiTech Solutions",
  category: "technology",
  keywords: [
    "RaffiTech Solutions",
    "software studio Indonesia",
    "software development Bekasi",
    "software development",
    "business automation",
    "AI solutions",
    "AI workflow",
    "technology consulting",
    "IT infrastructure",
    "Next.js development",
    "custom web application",
    "business systems",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "RaffiTech Solutions | Software, Automation, AI & Technology Systems",
    description: siteDescription,
    url: siteUrl,
    siteName: "RaffiTech Solutions",
    locale: "en_US",
    alternateLocale: ["id_ID"],
    type: "website",
    images: [
      {
        url: "/raffitech-logo.png",
        width: 512,
        height: 512,
        alt: "RaffiTech Solutions logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "RaffiTech Solutions",
    description: siteDescription,
    images: ["/raffitech-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/raffitech-logo.png",
    apple: "/raffitech-logo.png",
  },
};

export const viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "RaffiTech Solutions",
  url: siteUrl,
  logo: `${siteUrl}/raffitech-logo.png`,
  image: `${siteUrl}/raffitech-logo.png`,
  description: siteDescription,
  areaServed: ["Indonesia", "Remote"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bekasi",
    addressCountry: "ID",
  },
  sameAs: [
    "https://github.com/LetnanRaffi",
    "https://linkedin.com/in/muhamad-raffi-pasha",
  ],
  serviceType: [
    "Software Development",
    "Business Automation",
    "AI Workflow Implementation",
    "Technology Consulting",
    "IT Infrastructure",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} scroll-smooth`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
