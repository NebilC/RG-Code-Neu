import { Phone, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">RG Rüsselsheimer Garage GmbH</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Ihre zuverlässige Meisterwerkstatt in Rüsselsheim. Qualität und ehrliche Beratung seit Jahren.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Kontakt</h3>
            <div className="space-y-3">
              <a
                href="tel:061423306222"
                className="flex items-start gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>06142 3306222</span>
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  Alexander-Fleming-Ring 19A
                  <br />
                  65428 Rüsselsheim am Main
                </span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Öffnungszeiten</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span>Mo - Fr: 08:00-12:00, 13:00-17:30</span>
              </div>
              <div className="pl-6">Sa - So: Geschlossen</div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} RG Rüsselsheimer Garage GmbH. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}
