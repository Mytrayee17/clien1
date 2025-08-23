import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, ArrowRight } from "lucide-react";
const Gallery = () => {
  // Placeholder images - replace with actual before/after photos
  const galleryItems = [{
    id: 1,
    title: "Smile Makeover",
    category: "Cosmetic Dentistry",
    description: "Complete smile transformation with porcelain veneers",
    beforeImage: "/api/placeholder/400/300",
    afterImage: "/api/placeholder/400/300"
  }, {
    id: 2,
    title: "Dental Implant",
    category: "Implants",
    description: "Single tooth replacement with titanium implant",
    beforeImage: "/api/placeholder/400/300",
    afterImage: "/api/placeholder/400/300"
  }, {
    id: 3,
    title: "Orthodontic Treatment",
    category: "Orthodontics",
    description: "Teeth alignment with clear braces",
    beforeImage: "/api/placeholder/400/300",
    afterImage: "/api/placeholder/400/300"
  }, {
    id: 4,
    title: "Teeth Whitening",
    category: "Cosmetic Dentistry",
    description: "Professional whitening treatment results",
    beforeImage: "/api/placeholder/400/300",
    afterImage: "/api/placeholder/400/300"
  }, {
    id: 5,
    title: "Gum Surgery",
    category: "Periodontics",
    description: "Periodontal treatment and gum reshaping",
    beforeImage: "/api/placeholder/400/300",
    afterImage: "/api/placeholder/400/300"
  }, {
    id: 6,
    title: "Full Mouth Rehabilitation",
    category: "Prosthetics",
    description: "Complete oral health restoration",
    beforeImage: "/api/placeholder/400/300",
    afterImage: "/api/placeholder/400/300"
  }];
  const facilityImages = [{
    title: "Reception Area",
    image: "/api/placeholder/600/400",
    description: "Welcoming and comfortable waiting area"
  }, {
    title: "Treatment Room",
    image: "/api/placeholder/600/400",
    description: "State-of-the-art dental equipment"
  }, {
    title: "Surgery Suite",
    image: "/api/placeholder/600/400",
    description: "Advanced surgical facility"
  }, {
    title: "Sterilization Center",
    image: "/api/placeholder/600/400",
    description: "100% sterile environment maintenance"
  }];
  return <section id="gallery" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Success
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Stories & Facility
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the amazing transformations we've achieved and explore our 
            world-class dental facility equipped with the latest technology.
          </p>
        </div>

        {/* Before/After Gallery */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Before & After Transformations</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map(item => <Card key={item.id} className="group overflow-hidden hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border-0 bg-card/80 backdrop-blur-sm">
                <div className="relative">
                  <div className="grid grid-cols-2">
                    <div className="relative">
                      <img src={item.beforeImage} alt={`${item.title} - Before`} className="w-full h-48 object-cover" />
                      <Badge className="absolute top-2 left-2 bg-red-500 text-white">
                        Before
                      </Badge>
                    </div>
                    <div className="relative">
                      <img src={item.afterImage} alt={`${item.title} - After`} className="w-full h-48 object-cover" />
                      <Badge className="absolute top-2 right-2 bg-green-500 text-white">
                        After
                      </Badge>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/90 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Button variant="ghost" size="sm" className="text-primary">
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold">{item.title}</h4>
                    <Badge variant="secondary" className="text-xs">
                      {item.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </Card>)}
          </div>
        </div>

        {/* Facility Gallery */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Our Modern Facility</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilityImages.map((facility, index) => <Card key={index} className="group overflow-hidden hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border-0 bg-card/80 backdrop-blur-sm">
                <div className="relative">
                  <img src={facility.image} alt={facility.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="font-bold mb-1 text-sky-500">{facility.title}</h4>
                    <p className="text-xs text-white/80">{facility.description}</p>
                  </div>
                </div>
              </Card>)}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-4xl mx-auto shadow-card">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready for Your Transformation?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied patients who have transformed their smiles 
              with our expert care and advanced treatments.
            </p>
            <Button size="lg" variant="gradient" className="shadow-hero" onClick={() => {
            const element = document.getElementById('appointment');
            if (element) {
              element.scrollIntoView({
                behavior: 'smooth'
              });
            }
          }}>
              Start Your Journey
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Gallery;