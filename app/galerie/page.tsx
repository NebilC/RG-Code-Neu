import { Card } from "@/components/ui/card"

export default function GaleriePage() {
  const images = [
    {
      src: "/professional-auto-repair-shop-exterior-building.jpg",
      alt: "Werkstatt Außenansicht",
      title: "Unsere Werkstatt",
    },
    {
      src: "/modern-car-workshop-interior-with-lifts-and-tools.jpg",
      alt: "Werkstatt Innenbereich",
      title: "Moderne Ausstattung",
    },
    {
      src: "/professional-mechanics-team-working-on-car.jpg",
      alt: "Unser Team bei der Arbeit",
      title: "Unser Team",
    },
    {
      src: "/car-diagnostic-equipment-and-computer.jpg",
      alt: "Diagnosetechnik",
      title: "Moderne Diagnose",
    },
    {
      src: "/car-engine-repair-close-up-professional.jpg",
      alt: "Motorreparatur",
      title: "Präzise Arbeit",
    },
    {
      src: "/clean-organized-auto-workshop-tools.jpg",
      alt: "Werkzeuge und Ausstattung",
      title: "Professionelle Werkzeuge",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Unsere <span className="text-primary">Galerie</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Werfen Sie einen Blick in unsere moderne Werkstatt und lernen Sie unser Team kennen. Transparenz und
              Vertrauen sind uns wichtig.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card border-border hover:border-primary/50 transition-colors group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-foreground font-semibold p-4">{image.title}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-card border-y border-border">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Überzeugen Sie sich selbst
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Besuchen Sie uns gerne persönlich und machen Sie sich ein Bild von unserer Werkstatt. Wir freuen uns auf
              Ihren Besuch!
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
