import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Award, Users, Heart, Phone } from 'lucide-react'
import Image from "next/image"

export default function UeberUnsPage() {
  const values = [
    {
      icon: Award,
      title: "Qualität",
      description: "Als Meisterbetrieb garantieren wir höchste Qualitätsstandards bei allen Arbeiten.",
    },
    {
      icon: Users,
      title: "Expertise",
      description: "Unser erfahrenes Team bildet sich kontinuierlich weiter, um auf dem neuesten Stand zu bleiben.",
    },
    {
      icon: Heart,
      title: "Kundenservice",
      description: "Ihre Zufriedenheit steht bei uns an erster Stelle. Wir nehmen uns Zeit für Ihre Anliegen.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Über <span className="text-primary">Uns</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Herzlich Willkommen bei Ihrer RG Rüsselsheimer Garage direkt an der A60/A67 in Königstädten
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              RG Rüsselsheimer Garage – Ihre KFZ-Meisterwerkstatt
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Wir sind Ihr kompetenter und zuverlässiger Ansprechpartner in Rüsselsheim. Ob Service oder Reparaturen –
                bei uns sind Sie an der richtigen Adresse.
              </p>
              <p>
                Unsere Werkstatt steht für Kompetenz, Persönlichkeit und Vertrauen. Als fairer Partner ist jederzeit auf
                uns Verlass. Reparaturen werden bei uns mit Ersatzteilen in Erstausrüsterqualität durchgeführt.
                Persönliche Beratung steht bei uns ganz oben. Unsere Werkstatt geht auf Ihre individuellen Wünsche ein.
                Schließlich kennen wir Ihre Automarke und reparieren sie in Profiqualität. Verlassen Sie sich drauf.
              </p>
              <p className="font-semibold text-foreground">
                Wir freuen uns darauf, Ihnen weiterzuhelfen.
              </p>
              <p className="text-primary">Ihr Rüsselsheimer Garage Team</p>
            </div>
            {/* </CHANGE> */}
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="text-sm font-semibold text-muted-foreground mb-4">Vertrauen Sie auf Qualität</h3>
              <div className="flex items-center gap-6">
                <Image
                  src="/images/logo-shield.png"
                  alt="RG Qualitätssiegel"
                  width={60}
                  height={60}
                  className="h-16 w-auto"
                />
                <Image
                  src="/images/logo-text.png"
                  alt="Rüsselsheimer Garage"
                  width={140}
                  height={50}
                  className="h-10 w-auto"
                />
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden bg-muted">
            <img
              src="/professional-auto-mechanics-team-portrait-in-works.jpg"
              alt="Unser Team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">Unsere Werte</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-card border-border text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-card border-y border-border">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Lernen Sie uns persönlich kennen
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Besuchen Sie uns in unserer Werkstatt oder vereinbaren Sie einen Termin. Wir freuen uns auf Sie!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors"
              >
                <Link href="/kontakt">
                  <Phone className="w-5 h-5 mr-2" />
                  Termin anfragen
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border hover:bg-muted bg-transparent">
                <Link href="/galerie">Galerie ansehen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
