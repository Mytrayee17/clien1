import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StickyMobileBar from "@/components/StickyMobileBar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, ArrowRight } from "lucide-react";

export default function ServicesPage() {
  const list = [
    {
      title: "Dental Implants",
      slug: "dental-implants-in-guntur",
      desc: "Permanent titanium implants for single/multiple teeth replacements, restoring natural bite and aesthetic look."
    },
    {
      title: "Braces & Aligners",
      slug: "braces-and-aligners-in-guntur",
      desc: "Metal braces, ceramic self-ligating brackets, and premium invisible clear aligners for teeth correction."
    },
    {
      title: "Root Canal Treatment",
      slug: "root-canal-treatment-in-guntur",
      desc: "Advanced single-sitting pain-free rotary root canals to salvage damaged and infected teeth structures."
    },
    {
      title: "Cosmetic Dentistry",
      slug: "cosmetic-dentistry-in-guntur",
      desc: "Veneers, dental crowns, smile designing, lip contouring, and dimple creation by Guntur's best cosmetic surgeons."
    },
    {
      title: "Wisdom Tooth Removal",
      slug: "wisdom-tooth-removal-in-guntur",
      desc: "Painless surgical extraction of impacted wisdom teeth with advanced rotary and suture methods."
    },
    {
      title: "Kids Dentistry",
      slug: "kids-dentistry-in-guntur",
      desc: "Specialized gentle dental care, cavity prevention, scaling, and orthodontic alignment guidance for children."
    },
    {
      title: "Full Mouth Rehabilitation",
      slug: "full-mouth-rehabilitation-in-guntur",
      desc: "Complete reconstructive prosthodontic treatments for restoration of oral bite and aesthetic confidence."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Best Dental Treatments in Guntur | Our Services Index"
        description="Explore our specialized dental treatments at Navya's Dental Hospital Guntur. We offer advanced implants, braces, clear aligners, and pain-free root canals."
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Navya's International Dental Hospital - Dental Specialties",
          "description": "Comprehensive dental treatments including root canal, aligners, full mouth rehab, and implants in Guntur."
        }}
      />
      <Header />

      <main className="pb-24">
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-4">Specialty Clinic</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our Dental Specialties & <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Clinical Treatments</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Through our comprehensive dental specialties, we provide advanced surgical and cosmetic interventions. Select a specialty to learn more.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {list.map((item, index) => (
              <Card key={index} className="overflow-hidden bg-card hover:shadow-elevated transition-all border-border/50 flex flex-col justify-between">
                <CardContent className="p-8">
                  <Badge variant="secondary" className="mb-3">Dental Specialty</Badge>
                  <h2 className="text-2xl font-bold mb-3 text-primary">{item.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {item.desc}
                  </p>
                  
                  <Link to={`/services/${item.slug}`}>
                    <Button className="w-full flex items-center justify-center gap-2" variant="outline">
                      Learn More about {item.title}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
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
