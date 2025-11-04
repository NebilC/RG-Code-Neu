import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Wrench, Shield, Clock, Award, Phone, ArrowRight } from "lucide-react"

export default function HomePage() {
  const services = [
    {
      icon: Wrench,
      title: "Inspektion & Wartung",
      description: "Regelmäßige Wartung für die Langlebigkeit Ihres Fahrzeugs",
    },
    {
      icon: Shield,
      title: "TÜV & AU Service",
      description: "Professionelle Vorbereitung und Durchführung aller Prüfungen",
    },
    {
      icon: Clock,
      title: "Schneller Service",
      description: "Zuverlässige Terminplanung und pünktliche Fertigstellung",
    },
    {
      icon: Award,
      title: "Meisterbetrieb",
      description: "Qualität und Expertise durch qualifizierte Fachkräfte",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-card border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent" />
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Ihre zuverlässige <span className="text-primary">Meisterwerkstatt</span> in Rüsselsheim
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Professionelle Autoreparatur und Wartung für alle Fabrikate. Wir kümmern uns um Ihr Fahrzeug mit Expertise
              und Leidenschaft.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/kontakt">
                  <Phone className="w-5 h-5 mr-2" />
                  Jetzt Termin anfragen
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border hover:bg-muted bg-transparent">
                <Link href="/leistungen">
                  Unsere Leistungen
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Unsere Leistungen</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Von der Inspektion bis zur Reparatur – wir bieten Ihnen umfassenden Service für Ihr Fahrzeug
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="border-border hover:bg-muted bg-transparent">
            <Link href="/leistungen">
              Alle Leistungen ansehen
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-card border-y border-border">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Bereit für Ihren nächsten Service?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Vereinbaren Sie noch heute einen Termin und erleben Sie professionellen Service in unserer
              Meisterwerkstatt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/kontakt">
                  <Phone className="w-5 h-5 mr-2" />
                  Termin anfragen
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border hover:bg-muted bg-transparent">
                <a href="tel:061423306222">
                  <Phone className="w-5 h-5 mr-2" />
                  06142 3306222
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Warum RG Rüsselsheimer Garage?</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Meisterbetrieb mit Erfahrung</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Qualifizierte Fachkräfte mit langjähriger Expertise
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Faire Preise & ehrliche Beratung</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Transparente Kostenvoranschläge ohne versteckte Gebühren
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Alle Fabrikate willkommen</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Wir reparieren und warten alle Automarken professionell
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Moderne Ausstattung</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Neueste Diagnosetechnik für präzise Fehleranalyse
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden bg-muted">
            <img src="/modern-auto-repair-shop-interior-with-professional.jpg" alt="Werkstatt Innenansicht" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </div>
  )
}
