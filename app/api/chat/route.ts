import { NextRequest, NextResponse } from "next/server"

const SYSTEM_PROMPT = `Kamu adalah customer support RaffiTech Solutions, penyedia jasa IT profesional di Bekasi.

INFO KONTAK:
WhatsApp: +62 895-3289-49434
Website: raffitech.vercel.app

LAYANAN:
- Jasa Desain (logo, branding, materi promosi)
- Pembuatan Website (bisnis, portfolio, toko online)
- Install Ulang PC/Laptop
- Jasa Pengetikan dokumen
- Pembuatan Laporan PKL
- Perbaikan Hardware
- Setting Jaringan & WiFi

CARA JAWAB:
- Jawab singkat, jelas, dan ramah dalam Bahasa Indonesia
- JANGAN gunakan format markdown seperti ** atau ## atau bullet points panjang
- Jawab seperti chat WhatsApp biasa, natural dan conversational
- Untuk pertanyaan harga, arahkan ke WhatsApp untuk penawaran
- Gunakan emoji sesekali tapi jangan berlebihan
- Maksimal 2-3 kalimat per jawaban kecuali diminta detail`

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
        model: "meta-llama/llama-3.3-70b-instruct:free",
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
