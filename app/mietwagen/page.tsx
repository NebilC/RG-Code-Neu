"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Clock, Users, Shield } from 'lucide-react'
import { useState } from "react"

export default function MietwagenPage() {
  const [selectedCar, setSelectedCar] = useState<string | null>(null)

  const cars = [
    {
      name: "Porsche 911 Turbo",
      image: "/porsche-911-turbo-luxury-sports-car.jpg",
      specs: "Leistung: 580 PS • 0-100 km/h: 2.7s • Höchstgeschwindigkeit: 320 km/h",
    },
    {
      name: "Ford Mustang",
      image: "/ford-mustang-gt-muscle-car.jpg",
      specs: "Leistung: 450 PS • 0-100 km/h: 4.3s • Höchstgeschwindigkeit: 250 km/h",
    },
    {
      name: "Ferrari",
      image: "/ferrari-f8-tributo-red.png",
      specs: "Leistung: 720 PS • 0-100 km/h: 2.9s • Höchstgeschwindigkeit: 340 km/h",
    },
    {
      name: "BMW M5",
      image: "/bmw-m5-luxury-sedan.jpg",
      specs: "Leistung: 625 PS • 0-100 km/h: 3.4s • Höchstgeschwindigkeit: 305 km/h",
    },
    {
      name: "McLaren 720S",
      image: "/mclaren-720s-supercar.jpg",
      specs: "Leistung: 720 PS • 0-100 km/h: 2.8s • Höchstgeschwindigkeit: 341 km/h",
    },
    {
      name: "Mazda MX-5",
      image: "/mazda-mx-5-miata-convertible.jpg",
      specs: "Leistung: 184 PS • 0-100 km/h: 6.5s • Höchstgeschwindigkeit: 219 km/h",
    },
    {
      name: "Maserati GranTurismo",
      image: "/maserati-granturismo-luxury-sports-coupe.jpg",
      specs: "Leistung: 460 PS • 0-100 km/h: 4.7s • Höchstgeschwindigkeit: 299 km/h",
    },
    {
      name: "Corvette C8",
      image: "/corvette-c8-american-mid-engine-sports-car.jpg",
      specs: "Leistung: 495 PS • 0-100 km/h: 2.9s • Höchstgeschwindigkeit: 312 km/h",
    },
  ]

  const features = [
    {
      icon: Clock,
      title: "24-Stunden-Service",
      description:
        "Unser Team ist täglich rund um die Uhr für Sie erreichbar und stellt sicher, dass Sie jederzeit den besten Service erhalten.",
    },
    {
      icon: Users,
      title: "Engagiertes Team",
      description:
        "Wir bearbeiten Ihren Auftrag umgehend. Wir liefern Ihr Fahrzeug bis zu Ihrer Haustür und holen es dort zum festgelegten Termin wieder ab.",
    },
    {
      icon: Shield,
      title: "Zuverlässig",
      description:
        "In über 24 Jahren haben wir uns branchenweit einen hervorragenden Ruf erarbeitet. Unsere Fahrzeuge befinden sich stets in bestem Zustand.",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Vielen Dank für Ihre Anfrage! Wir melden uns schnellstmöglich bei Ihnen.")
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              <span className="text-primary">Mietwagen</span> – Ihr Traumauto
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Für einen stilsicheren, unvergesslichen Auftritt. Unsere Flotte umfasst eine Auswahl weltberühmter
              Fahrzeuge. Fahren Sie Ihr Traumauto!
            </p>
          </div>
        </div>
      </section>

      {/* Car Gallery */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">Unsere Flotte</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-secondary/50 transition-all cursor-pointer group overflow-hidden"
              onClick={() => setSelectedCar(car.name)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={car.image || "/placeholder.svg"}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-2">{car.name}</h3>
                <p className="text-sm text-muted-foreground">{car.specs}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-card border-y border-border">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">Unsere Vorteile</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-background border-border text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rental Form */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Kostenloses Angebot anfordern
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Teilen Sie uns mit, wonach Sie suchen. Wir melden uns so schnell wie möglich bei Ihnen.
            </p>
          </div>

          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    required
                    className="bg-background border-border text-foreground mt-2"
                    placeholder="Ihr vollständiger Name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground">
                    E-Mail *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="bg-background border-border text-foreground mt-2"
                    placeholder="ihre@email.de"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-foreground">
                    Telefon *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    className="bg-background border-border text-foreground mt-2"
                    placeholder="0123 456789"
                  />
                </div>

                <div>
                  <Label htmlFor="car" className="text-foreground">
                    Gewünschte Marke
                  </Label>
                  <Input
                    id="car"
                    className="bg-background border-border text-foreground mt-2"
                    placeholder="z.B. Porsche 911 Turbo"
                    defaultValue={selectedCar || ""}
                  />
                </div>

                <div>
                  <Label htmlFor="destination" className="text-foreground">
                    Ziel
                  </Label>
                  <Input
                    id="destination"
                    className="bg-background border-border text-foreground mt-2"
                    placeholder="Wohin geht die Reise?"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="startDate" className="text-foreground">
                      Beginn des Mietzeitraums
                    </Label>
                    <Input
                      id="startDate"
                      type="date"
                      className="bg-background border-border text-foreground mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="endDate" className="text-foreground">
                      Ende des Mietzeitraums
                    </Label>
                    <Input
                      id="endDate"
                      type="date"
                      className="bg-background border-border text-foreground mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground">
                    Nachricht
                  </Label>
                  <Textarea
                    id="message"
                    rows={4}
                    className="bg-background border-border text-foreground mt-2"
                    placeholder="Weitere Wünsche oder Anmerkungen..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors"
                >
                  Anfrage senden
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
