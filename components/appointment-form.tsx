"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Calendar, Send } from 'lucide-react'

export function AppointmentForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    try {
      const response = await fetch("https://getform.io/f/bpjzqwpb", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        toast({
          title: "Anfrage gesendet!",
          description: "Wir melden uns schnellstmöglich bei Ihnen.",
        })
        form.reset()
      } else {
        toast({
          title: "Fehler",
          description: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Fehler",
        description: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",
        variant: "destructive",
      })
    }

    setIsSubmitting(false)
  }

  return (
    <Card className="bg-card border-border">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
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

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            size="lg"
          >
            {isSubmitting ? (
              <>
                <Calendar className="w-5 h-5 mr-2 animate-spin" />
                Wird gesendet...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Anfrage senden
              </>
            )}
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
