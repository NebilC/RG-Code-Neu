import { MapPin, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">RG Rüsselsheimer Garage GmbH</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Ihre zuverlässige Meisterwerkstatt in Rüsselsheim.
              <br />
              Qualität und ehrliche Beratung seit Jahren.
            </p>
            <div className="flex items-center gap-4">
              <Image
                src="/images/logo-shield.png"
                alt="RG Logo"
                width={50}
                height={50}
                className="h-12 w-auto opacity-90"
              />
              <Image
                src="/images/logo-text.png"
                alt="Rüsselsheimer Garage"
                width={120}
                height={40}
                className="h-8 w-auto opacity-90"
              />
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-secondary mb-4">Kontakt</h3>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground mb-2">Telefon / WhatsApp</p>
              <div className="flex items-center gap-2 mb-4">
                <a
                  href="tel:061423306222"
                  className="text-sm text-muted-foreground hover:text-secondary transition-colors"
                >
                  06142 3306222
                </a>
                <a
                  href="https://wa.me/4961423306222"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors flex-shrink-0"
                  aria-label="WhatsApp kontaktieren"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-primary">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>
                Alexander-Fleming-Ring 19A
                <br />
                65428 Rüsselsheim am Main
              </span>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-bold text-secondary mb-4">Öffnungszeiten</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span>Mo - Fr: 08:00-12:00, 13:00-17:30</span>
              </div>
              <div className="pl-6">Sa - So: Geschlossen</div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} RG Rüsselsheimer Garage GmbH.
              <br />
              Alle Rechte vorbehalten.
            </p>

            <div className="flex items-center gap-2 text-xs">
              <span>Designed by</span>
              <a
                href="https://www.nebilus.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-opacity hover:opacity-80"
              >
                <Image
                  src="/images/icon-20hintergrund.png"
                  alt="Nebilus Studios Logo"
                  width={24}
                  height={24}
                  className="w-6 h-6 rounded-full border-2 border-black"
                />
                <span style={{ color: "#e5237b" }} className="font-medium">
                  Nebilus Studios
                </span>
              </a>
            </div>

            <div className="flex gap-6">
              <Link href="/impressum" className="hover:text-secondary transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:text-secondary transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>

          {/* Mobile: Show Nebilus credit on separate line */}
          <div className="sm:hidden flex justify-center items-center gap-2 text-xs text-muted-foreground mt-4">
            <span>Designed by</span>
            <a
              href="https://www.nebilus.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-opacity hover:opacity-80"
            >
              <Image
                src="/images/icon-20hintergrund.png"
                alt="Nebilus Studios Logo"
                width={24}
                height={24}
                className="w-6 h-6 rounded-full border-2 border-black"
              />
              <span style={{ color: "#e5237b" }} className="font-medium">
                Nebilus Studios
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
