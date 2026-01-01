import { NextRequest, NextResponse } from "next/server"

const SYSTEM_PROMPT = `Kamu adalah RaffiTech AI Assistant, asisten virtual untuk RaffiTech Solutions - penyedia jasa IT profesional di Bekasi.

TENTANG RAFFITECH SOLUTIONS:
- Lokasi: Bekasi, Indonesia
- WhatsApp: +62 895-3289-49434
- Email: muhamadraffipasha16@gmail.com
- Website: raffitech.vercel.app

LAYANAN KAMI:
1. **Jasa Desain** - Desain grafis profesional menggunakan Canva, Photoshop untuk branding, logo, dan materi promosi.
2. **Pembuatan Website** - Website responsif dan modern untuk bisnis, portfolio, toko online dengan teknologi terkini (Next.js, React, dll).
3. **Install Ulang Komputer/Laptop** - Instalasi ulang sistem operasi, software, dan optimasi performa.
4. **Jasa Ngetik** - Pengetikan dokumen menggunakan Microsoft Word, Excel, PowerPoint, Google Workspace.
5. **Pembuatan Laporan PKL** - Bantuan penyusunan laporan Praktek Kerja Lapangan dengan format profesional.
6. **Perbaikan Hardware** - Diagnosa dan perbaikan komponen hardware seperti motherboard, RAM, SSD.
7. **Setting Jaringan** - Konfigurasi jaringan LAN, WiFi, router, dan troubleshooting masalah konektivitas.

KEUNGGULAN:
- Konsultasi GRATIS
- Harga terjangkau
- Hasil berkualitas dan profesional
- Pelayanan cepat dan responsif
- Melayani area Bekasi dan sekitarnya

INSTRUKSI:
- Jawab dengan ramah, profesional, dan helpful dalam Bahasa Indonesia
- Fokus pada layanan RaffiTech dan kebutuhan teknologi customer
- Jika ada pertanyaan harga, arahkan untuk konsultasi via WhatsApp untuk penawaran terbaik
- Selalu tawarkan solusi dan ajak customer untuk menghubungi via WhatsApp
- Gunakan emoji secukupnya untuk kesan friendly 😊
- Jangan jawab pertanyaan yang tidak relevan dengan layanan IT/teknologi`

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json()

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Messages array is required" },
        { status: 400 }
      )
    }

    const apiKey = process.env.OPENROUTER_API_KEY

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + apiKey,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://raffitech.vercel.app",
        "X-Title": "RaffiTech AI Assistant",
      },
      body: JSON.stringify({
        model: "tngtech/deepseek-r1t-chimera:free",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages
        ],
        max_tokens: 1000,
        temperature: 0.7,
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error("OpenRouter API error:", error)
      return NextResponse.json(
        { error: "Failed to get AI response" },
        { status: 500 }
      )
    }

    const data = await response.json()
    const aiMessage = data.choices?.[0]?.message?.content || "Maaf, terjadi kesalahan. Silakan coba lagi."

    return NextResponse.json({ message: aiMessage })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
