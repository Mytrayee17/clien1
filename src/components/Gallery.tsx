import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, ArrowRight } from "lucide-react";
import BeforeAfterSlider from "./BeforeAfterSlider";

// Import real treatment images with clear before/after labeling

const Gallery = () => {
  // Real patient before/after treatment photos with clear labeling
  const galleryItems = [
    {
      id: 1,
      title: "Smile Makeover",
      category: "Cosmetic Dentistry", 
      description: "Complete smile transformation with porcelain veneers showing dramatic improvement",
      beforeImage: "/lovable-uploads/28b405f8-7a3b-4d32-b382-99db6a21e960.png",
      afterImage: "/lovable-uploads/28b405f8-7a3b-4d32-b382-99db6a21e960.png"
    },
    {
      id: 2,
      title: "Dental Implant",
      category: "Implants",
      description: "Single tooth replacement with titanium implant including X-ray documentation",
      beforeImage: "/lovable-uploads/be251724-f14a-4dfe-8fb8-0c3c4c30fb6d.png",
      afterImage: "/lovable-uploads/be251724-f14a-4dfe-8fb8-0c3c4c30fb6d.png"
    },
    {
      id: 3,
      title: "Orthodontic Treatment", 
      category: "Orthodontics",
      description: "Teeth alignment with braces showing excellent results in young patients",
      beforeImage: "/lovable-uploads/d82e0123-d9cc-4224-aadf-ec28b275012e.png",
      afterImage: "/lovable-uploads/d82e0123-d9cc-4224-aadf-ec28b275012e.png"
    },
    {
      id: 4,
      title: "Teeth Whitening",
      category: "Cosmetic Dentistry",
      description: "Professional whitening treatment results with noticeable shade improvement",
      beforeImage: "/lovable-uploads/16d4a1ae-5721-4a0c-9176-42861e36d0ff.png",
      afterImage: "/lovable-uploads/16d4a1ae-5721-4a0c-9176-42861e36d0ff.png"
    },
    {
      id: 5,
      title: "Gum Surgery",
      category: "Periodontics", 
      description: "Periodontal treatment and gum reshaping for improved oral health",
      beforeImage: "/lovable-uploads/fb4cb3f1-4287-4e02-b154-9279dbc246e2.png",
      afterImage: "/lovable-uploads/fb4cb3f1-4287-4e02-b154-9279dbc246e2.png"
    },
    {
      id: 6,
      title: "Full Mouth Rehabilitation",
      category: "Prosthetics",
      description: "Complete oral health restoration with comprehensive treatment plan", 
      beforeImage: "/lovable-uploads/afeeccee-b223-4ec7-842e-6d5c08552b20.png",
      afterImage: "/lovable-uploads/afeeccee-b223-4ec7-842e-6d5c08552b20.png"
    }
  ];

  const facilityImages = [
    {
      title: "Reception Area",
      image: "/lovable-uploads/2e70fa0e-7bfd-413e-bb20-3a56d7b75929.png",
      description: "Welcoming and comfortable waiting area with modern amenities"
    },
    {
      title: "Treatment Room",
      image: "/lovable-uploads/d816c11d-268d-4492-bf92-81bc05ae5639.png",
      description: "Advanced treatment room with modern dental equipment and monitoring systems"
    },
    {
      title: "Surgery Suite",
      image: "/lovable-uploads/a5d881c9-4368-4e2e-9442-f731981ef5bc.png",
      description: "State-of-the-art surgical facility with advanced equipment"
    },
    {
      title: "Sterilization Center",
      image: "/lovable-uploads/7476e918-c4b7-42ef-8b81-81de426c0d22.png",
      description: "Professional sterilization equipment ensuring 100% sterile environment"
    }
  ];

  return (
    <section id="gallery" className="py-24">
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

        {/* Before/After Results */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Treatment Results</h3>
            <p className="text-muted-foreground">See the remarkable transformations achieved by our expert team</p>
          </div>
          <BeforeAfterSlider />
        </div>

        {/* Before/After Gallery */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Before & After Transformations</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map(item => (
              <Card key={item.id} className="group overflow-hidden hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border-0 bg-card/80 backdrop-blur-sm">
                <div className="relative">
                  <div className="relative">
                    <img src={item.beforeImage} alt={`${item.title} - Before and After Indian Patient`} className="w-full h-48 object-cover" />
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-primary text-white font-semibold">
                        BEFORE & AFTER
                      </Badge>
                    </div>
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
              </Card>
            ))}
          </div>
        </div>

        {/* Facility Gallery */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Our Modern Facility</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilityImages.map((facility, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border-0 bg-card/80 backdrop-blur-sm">
                <div className="relative">
                  <img src={facility.image} alt={facility.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="font-bold mb-1 text-sky-500">{facility.title}</h4>
                    <p className="text-xs text-white/80">{facility.description}</p>
                  </div>
                </div>
              </Card>
            ))}
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
    </section>
  );
};

export default Gallery;