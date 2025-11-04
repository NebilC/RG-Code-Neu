import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Wrench, Shield, Gauge, Droplet, Wind, Car, Snowflake, AlertCircle, Phone } from "lucide-react"

export default function LeistungenPage() {
  const services = [
    {
      icon: Wrench,
      title: "Inspektion & Wartung",
      description:
        "Regelmäßige Inspektionen nach Herstellervorgaben, Ölwechsel, Filterwechsel und alle notwendigen Wartungsarbeiten für die Langlebigkeit Ihres Fahrzeugs.",
    },
    {
      icon: Shield,
      title: "TÜV & AU Service",
      description:
        "Professionelle Vorbereitung und Durchführung der Hauptuntersuchung (HU) und Abgasuntersuchung (AU). Wir kümmern uns um alle erforderlichen Prüfungen.",
    },
    {
      icon: Car,
      title: "Reparaturen aller Fabrikate",
      description:
        "Fachgerechte Reparaturen an Motor, Getriebe, Fahrwerk, Bremsen und allen anderen Fahrzeugkomponenten – unabhängig von der Marke.",
    },
    {
      icon: Gauge,
      title: "Reifenservice",
      description:
        "Reifenwechsel, Einlagerung, Auswuchten und Montage. Wir beraten Sie gerne bei der Auswahl der richtigen Reifen für Ihr Fahrzeug.",
    },
    {
      icon: Wind,
      title: "Klimaservice",
      description:
        "Wartung und Reparatur Ihrer Klimaanlage, Desinfektion, Befüllung mit Kältemittel und Funktionsprüfung für optimalen Komfort.",
    },
    {
      icon: AlertCircle,
      title: "Unfallinstandsetzung",
      description:
        "Professionelle Unfallreparaturen, Karosseriearbeiten und Lackierungen. Wir arbeiten mit allen Versicherungen zusammen.",
    },
    {
      icon: Droplet,
      title: "Ölwechsel & Flüssigkeiten",
      description:
        "Schneller Ölwechsel-Service, Austausch von Kühlflüssigkeit, Bremsflüssigkeit und anderen wichtigen Betriebsstoffen.",
    },
    {
      icon: Snowflake,
      title: "Elektronik & Diagnose",
      description:
        "Moderne Fahrzeugdiagnose mit professioneller Diagnosetechnik. Fehleranalyse und Reparatur elektronischer Systeme.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Unsere <span className="text-primary">Leistungen</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Von der Inspektion bis zur Unfallinstandsetzung – wir bieten Ihnen umfassenden Service für alle
              Fahrzeugmarken. Vertrauen Sie auf unsere Expertise und moderne Ausstattung.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-card border-y border-border">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Haben Sie Fragen zu unseren Leistungen?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Kontaktieren Sie uns gerne telefonisch oder vereinbaren Sie direkt einen Termin online.
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
    </div>
  )
}
