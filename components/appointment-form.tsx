"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Send } from "lucide-react"

export function AppointmentForm() {
  return (
    <Card className="bg-card border-border">
      <CardContent className="p-6">
        <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
          <input type="hidden" name="access_key" value="b95fab7c-a89f-4002-b50d-d3d4cd3965e0" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground">
                Name *
              </Label>
              <Input
                id="name"
                name="name"
                required
                placeholder="Ihr Name"
                className="bg-input border-border text-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground">
                Telefon *
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="Ihre Telefonnummer"
                className="bg-input border-border text-foreground"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">
              E-Mail
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="ihre@email.de"
              className="bg-input border-border text-foreground"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="vehicle" className="text-foreground">
                Fahrzeug *
              </Label>
              <Input
                id="vehicle"
                name="vehicle"
                required
                placeholder="z.B. VW Golf, Baujahr 2018"
                className="bg-input border-border text-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date" className="text-foreground">
                Wunschtermin *
              </Label>
              <Input id="date" name="date" type="date" required className="bg-input border-border text-foreground" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground">
              Ihr Anliegen *
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              placeholder="Beschreiben Sie bitte kurz, welche Arbeiten durchgeführt werden sollen..."
              rows={5}
              className="bg-input border-border text-foreground resize-none"
            />
          </div>

          <div className="text-sm text-muted-foreground">* Pflichtfelder</div>

          <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
            <Send className="w-5 h-5 mr-2" />
            Anfrage senden
          </Button>

          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            Ihre Anfrage wird direkt an uns übermittelt. Wir melden uns schnellstmöglich bei Ihnen, um den Termin zu
            bestätigen.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
