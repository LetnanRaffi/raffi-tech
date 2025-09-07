"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Hubungi Kami</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Siap membantu kebutuhan teknologi Anda. Konsultasi gratis untuk semua layanan!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* WhatsApp Contact */}
          <Card className="border-border hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle className="text-xl text-card-foreground">WhatsApp</CardTitle>
              <CardDescription className="text-muted-foreground">Chat langsung untuk konsultasi cepat</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                className="w-full bg-green-600 hover:bg-green-700 text-white"
                onClick={() => window.open("https://wa.me/6289532894943", "_blank")}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Chat di WhatsApp
              </Button>
            </CardContent>
          </Card>

          {/* Email Contact */}
          <Card className="border-border hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl text-card-foreground">Email</CardTitle>
              <CardDescription className="text-muted-foreground">Kirim detail project Anda via email</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                className="w-full bg-transparent"
                onClick={() => window.open("mailto:muhamadraffipasha16@gmail.com", "_blank")}
              >
                <Mail className="mr-2 h-4 w-4" />
                muhamadraffipasha16@gmail.com
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Contact Info */}
        <div className="mt-12 text-center">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+62 895-3289-4943</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Melayani seluruh Indonesia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
