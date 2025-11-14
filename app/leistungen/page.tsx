import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Wrench, Shield, Gauge, Droplet, Wind, Car, Snowflake, Zap, Settings, PaintBucket, Cog, CheckCircle2, Phone } from 'lucide-react'

export default function LeistungenPage() {
  const serviceCategories = [
    {
      title: "Allgemeinleistungen",
      icon: Wrench,
      services: [
        "Ölwechsel und regelmäßige Wartung",
        "Professioneller Reifenwechsel",
        "Motor- und Getriebereparaturen",
        "Bremsenservice und Fahrwerksreparaturen",
        "Allgemeine Reparatur- und Instandsetzungsarbeiten",
        "Wartungsarbeiten (Inspektionen) nach Hersteller Vorgaben",
        "Diagnose Motorelektronik und Mechanik",
        "Elektrikarbeiten",
        "Diagnose der Fahrzeugelektronik",
      ],
    },
    {
      title: "Karosserieleistungen",
      icon: PaintBucket,
      services: [
        "Karosserie- und Lackierarbeiten",
        "Autoglas Sofort-Service",
        "Klima Service",
        "Motor Instandsetzungsarbeiten",
        "Getriebe Instandsetzung",
        "Bremsen, Auspuff und Stoßdämpfer Service",
        "Automatikgetriebespülung",
      ],
    },
    {
      title: "Diesel Reparatur",
      icon: Cog,
      services: [
        "Dieselpartikelfilter",
        "Reinigung und Anpassung von Dieselpartikelfilteranlagen",
        "Fahrwerksänderungen",
        "Achsvermessungen Digital",
        "Reifen und Felgen Service",
        "Reifeneinlagerung",
        "Freischaltung von Software",
        "Fuhrpark Betreuung",
        "Oldtimer Service",
        "Fahrzeugaufbereitungen",
        "Abgas- und Hauptuntersuchung (nach Terminvereinbarung, im Haus)",
      ],
    },
    {
      title: "Software",
      icon: Zap,
      services: [
        "Änderung Fahrzeugkonfigurationen (Software)",
        "Leistungssteigerung (Chip Tuning)",
        "Nachträglicher Einbau von: Standheizungen, Anhängerkupplungen, Hifi Systemen",
        "Navigationssysteme, Parktronikanlagen, Tempomatanlagen, Sitzheizungen",
        "Programmierungen von Einbauten",
        "Codierungen von Steuergeräten",
        "Software Updates Fahrzeugelektronik",
      ],
    },
  ]

  const specialServices = [
    {
      icon: CheckCircle2,
      title: "Inspektion",
      description:
        "Vertrauen ist gut, Kontrolle ist besser! Eine Inspektion sollte in regelmäßigen Abständen von Profis übernommen werden. Nur dann ist eine reibungslose und sichere Nutzung des Fahrzeugs gewährleistet.",
    },
    {
      icon: Settings,
      title: "Wartung und Pflege",
      description:
        "Mit unserem Angebot für die regelmäßige Wartung und Pflege haben Sie lange Freude an Ihrem Fahrzeug. Auf Wunsch holen wir es bei Ihnen zu Hause oder am Arbeitsplatz ab und bringen es auch wieder zurück.",
    },
    {
      icon: Car,
      title: "Sonderbestellungen",
      description:
        "In unserer Flotte fehlt Ihr Lieblingswagen? Wir vermitteln Ihnen einen Händler, der das perfekte Angebot für Sie hat. Vereinbaren Sie einen Beratungstermin mit einem unserer Experten.",
    },
    {
      icon: Shield,
      title: "Kosten",
      description:
        "Bei uns gibt es keine versteckten Kosten! Vor Reparaturbeginn erhalten Sie einen detaillierten Kostenvoranschlag, der alle Leistungen aufschlüsselt.",
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
              Fahrzeugmarken zu fairen Preisen. Wir reparieren alle Marken. Ohne Ihre Freigabe machen wir nichts.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="space-y-16">
          {serviceCategories.map((category, index) => (
            <div key={index}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-secondary" />
                </div>
                <h2 className="text-3xl font-bold text-secondary">{category.title}</h2>
              </div>
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Special Services */}
      <section className="bg-card border-y border-border">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">Weitere Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specialServices.map((service, index) => (
              <Card key={index} className="bg-background border-border">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle className="text-secondary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Haben Sie Fragen zu unseren Leistungen?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Kontaktieren Sie uns gerne telefonisch oder vereinbaren Sie direkt einen Termin online.
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
              <a href="tel:061423306222">
                <Phone className="w-5 h-5 mr-2" />
                06142 3306222
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
