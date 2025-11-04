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
                        <h3 className="font-semibold text-secondary mb-1">Telefon</h3>
                        <a
                          href="tel:061423306222"
                          className="text-muted-foreground hover:text-secondary transition-colors"
                        >
                          06142 3306222
                        </a>
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2567.8!2d8.4!3d49.99!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDU5JzI0LjQiTiA4wrAyNCcwMC4wIkU!5e0!3m2!1sde!2sde!4v1234567890"
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
