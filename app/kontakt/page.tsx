import { AppointmentForm } from "@/components/appointment-form"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin, Clock } from "lucide-react"

export default function KontaktPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              <span className="text-primary">Kontakt</span> & Anfahrt
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nehmen Sie Kontakt mit uns auf oder vereinbaren Sie direkt einen Termin. Wir sind für Sie da!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-secondary mb-6">Kontaktinformationen</h2>
              <div className="space-y-4">
                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-secondary mb-1">Telefon / WhatsApp</h3>
                        <div className="flex items-center gap-3">
                          <a
                            href="tel:061423306222"
                            className="text-muted-foreground hover:text-secondary transition-colors"
                          >
                            06142 3306222
                          </a>
                          <a
                            href="https://wa.me/4961423306222"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors"
                            aria-label="WhatsApp kontaktieren"
                          >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-primary">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-secondary mb-1">Adresse</h3>
                        <p className="text-muted-foreground">
                          Alexander-Fleming-Ring 19A
                          <br />
                          65428 Rüsselsheim am Main
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-secondary mb-2">Öffnungszeiten</h3>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <div className="flex justify-between gap-4">
                            <span>Montag - Freitag:</span>
                            <span>08:00-12:00, 13:00-17:30</span>
                          </div>
                          <div className="flex justify-between gap-4">
                            <span>Samstag - Sonntag:</span>
                            <span>Geschlossen</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-2xl font-bold text-secondary mb-6">Anfahrt</h2>
              <div className="rounded-lg overflow-hidden border border-border h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.7777777777777!2d8.567777777777778!3d49.99097222222222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd707dbb0e7d31%3A0x5a8f8c8c8c8c8c8c!2sAlexander-Fleming-Ring%2019A%2C%2065428%20R%C3%BCsselsheim%20am%20Main!5e0!3m2!1sde!2sde!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Standort RG Rüsselsheimer Garage"
                />
              </div>
            </div>
          </div>

          {/* Appointment Form */}
          <div>
            <h2 className="text-2xl font-bold text-secondary mb-6">Termin anfragen</h2>
            <AppointmentForm />
          </div>
        </div>
      </section>
    </div>
  )
}
