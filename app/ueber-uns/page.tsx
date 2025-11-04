import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Award, Users, Heart, Phone } from "lucide-react"

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
              Lernen Sie die RG Rüsselsheimer Garage kennen – Ihr fairer Partner rund ums Auto.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ihre Meisterwerkstatt in Rüsselsheim
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Willkommen bei der RG Rüsselsheimer Garage GmbH – Ihrer zuverlässigen Autowerkstatt in Rüsselsheim am
                Main. Als Meisterbetrieb legen wir großen Wert auf Qualität, Präzision und ehrliche Beratung.
              </p>
              <p>
                Unser erfahrenes Team kümmert sich mit Leidenschaft und Fachwissen um alle Belange rund um Ihr Fahrzeug.
                Ob Inspektion, Reparatur oder TÜV-Service – bei uns sind Sie in guten Händen.
              </p>
              <p>
                Wir arbeiten herstellerunabhängig und betreuen alle Automarken mit der gleichen Sorgfalt und
                Professionalität. Moderne Diagnosetechnik und kontinuierliche Weiterbildung unserer Mitarbeiter
                garantieren Ihnen erstklassigen Service.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden bg-muted">
            <img src="/professional-auto-mechanics-team-portrait-in-works.jpg" alt="Unser Team" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Unsere Werte</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-card border-border text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
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
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
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
