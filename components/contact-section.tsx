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
            <CardHeader className="pb-2">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-2xl flex items-center justify-center mb-2 mx-auto">
                <MessageCircle className="h-8 w-8 text-green-600 dark:text-green-500" />
              </div>
              <CardTitle className="text-center text-xl hidden">WhatsApp</CardTitle>
            </CardHeader>
            <CardContent>
              <Button
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-6 text-lg"
                onClick={() => window.open("https://wa.me/62895328949434", "_blank")}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Hubungi via WhatsApp
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
        {/* Additional Contact Info - Integrated into a card */}
        <Card className="border-border md:col-span-2 bg-muted/30">
          <CardContent className="flex flex-col sm:flex-row justify-center items-center gap-8 py-6 text-muted-foreground">
            <div className="flex items-center gap-3">
              <div className="bg-background p-2 rounded-full border">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <span className="font-medium text-foreground">+62 895-3289-49434</span>
            </div>
            <div className="hidden sm:block h-8 w-px bg-border"></div>
            <div className="flex items-center gap-3">
              <div className="bg-background p-2 rounded-full border">
                <MapPin className="h-5 w-5 text-accent" />
              </div>
              <span className="font-medium text-foreground">Melayani wilayah Bekasi</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
