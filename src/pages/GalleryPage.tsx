import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StickyMobileBar from "@/components/StickyMobileBar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function GalleryPage() {
  const categories = [
    {
      title: "Advanced Surgery Suite",
      desc: "State-of-the-art sterile environment for dental implant placement and maxillofacial surgeries.",
      image: "/lovable-uploads/a5d881c9-4368-4e2e-9442-f731981ef5bc.png"
    },
    {
      title: "Sterile Treatment Clinic",
      desc: "Autoclave sterilized equipment and advanced digital dental chair for painless root canals.",
      image: "/lovable-uploads/d816c11d-268d-4492-bf92-81bc05ae5639.png"
    },
    {
      title: "Patient Reception & Lobby",
      desc: "Our welcoming and air-conditioned reception area, organized for patient comfort and consultation.",
      image: "/lovable-uploads/2e70fa0e-7bfd-413e-bb20-3a56d7b75929.png"
    },
    {
      title: "Autoclave Sterilization Hub",
      desc: "Our sterilization center featuring Class B autoclaves, sealing systems, and chemical cycle indicators.",
      image: "/lovable-uploads/7476e918-c4b7-42ef-8b81-81de426c0d22.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Gallery & Facility Pictures | Navya's Dental Hospital Guntur"
        description="Take a visual tour of Navya's International Dental Hospital in Guntur. View pictures of our advanced surgeries, treatment rooms, and autoclaves."
        schema={{
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          "name": "Navya's Dental Hospital Facility Gallery",
          "description": "Visual tour of modern dental treatment chairs, Class B autoclave hubs, and reception layouts in Guntur."
        }}
      />
      <Header />

      <main className="pb-24">
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-4">Clinic Tour</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              A Glimpse into Our <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">World-Class Facility</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our modern dental hospital located in Guntur, designed with international standards of cleanliness, sterilization, and technology.
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((item, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-elevated transition-shadow border-border/50">
                <div className="relative h-72 overflow-hidden bg-secondary/30">
                  <img 
                    src={item.image} 
                    alt="Navya's Dental Hospital Facility View" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <Badge className="bg-primary text-white font-semibold mb-2">Facility View</Badge>
                    <h2 className="text-xl font-bold mb-1">{item.title}</h2>
                    <p className="text-xs text-white/80 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileBar />
    </div>
  );
}
