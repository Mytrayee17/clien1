import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smile, Heart, Zap, Baby, Shield, Scissors, Crown, Sparkles } from "lucide-react";
const Services = () => {
  const services = [{
    icon: Heart,
    title: "Root Canal Treatment",
    description: "Pain-free single sitting and multi-sitting root canal therapy using advanced endodontic techniques.",
    features: ["Single Sitting RCT", "Multi Sitting RCT", "Pain-free Treatment", "Advanced Technology"]
  }, {
    icon: Crown,
    title: "Dental Implantology",
    description: "World-class implants in association with Indian Dental Education Academy, Chennai.",
    features: ["Wide Range of Implants", "Expert Consultation", "Permanent Solution", "Natural Looking"]
  }, {
    icon: Scissors,
    title: "Maxillofacial Surgeries",
    description: "Advanced facial surgeries including TMJ, orthognathic surgeries, and trauma management.",
    features: ["T.M.J Ankylosis", "Orthognathic Surgery", "Lefort Fractures", "Pan-facial Fractures"]
  }, {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    description: "Complete smile designing and aesthetic treatments for a perfect smile transformation.",
    features: ["Smile Designing", "Lip Contouring", "Dimple Creation", "Dental Jewellery"]
  }, {
    icon: Zap,
    title: "Orthodontics",
    description: "Orthodontic and dento-facial correction of malocclusions for proper teeth alignment.",
    features: ["Braces Treatment", "Dento-facial Correction", "Malocclusion Treatment", "Smile Alignment"]
  }, {
    icon: Baby,
    title: "Pediatric Dentistry",
    description: "Specialized dental care for children with gentle approach and child-friendly environment.",
    features: ["Child-friendly Care", "Preventive Treatments", "Behavior Management", "Early Intervention"]
  }, {
    icon: Smile,
    title: "Complete Oral Care",
    description: "Comprehensive dental services including prophylaxis, dentures, and bleaching treatments.",
    features: ["Oral Prophylaxis", "Complete Dentures", "Teeth Bleaching", "Fixed & Removable Teeth"]
  }, {
    icon: Shield,
    title: "Laser Dentistry",
    description: "Advanced laser treatments for precise and minimally invasive dental procedures.",
    features: ["Laser Surgery", "Flap Surgeries", "Minimally Invasive", "Faster Healing"]
  }, {
    icon: Heart,
    title: "Sedation Dentistry",
    description: "Comfortable dental treatments with sedation options for anxious patients.",
    features: ["Anxiety Management", "Comfortable Treatment", "Safe Sedation", "Relaxed Experience"]
  }];
  const scrollToAppointment = () => {
    const element = document.getElementById('appointment');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Comprehensive
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Dental Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From routine care to complex procedures, we offer a full range of dental services 
            with the latest technology and expert specialists.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
          const Icon = service.icon;
          return <Card key={index} className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border-0 bg-card/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => <li key={idx} className="text-xs text-muted-foreground flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>)}
                  </ul>
                  <Button variant="ghost" size="sm" onClick={scrollToAppointment} className="text-primary font-medium bg-sky-400 hover:bg-sky-300">
                    Book Consultation
                  </Button>
                </CardContent>
              </Card>;
        })}
        </div>

        <div className="text-center mt-16">
          <Button onClick={scrollToAppointment} size="lg" variant="gradient" className="shadow-hero">
            Schedule Your Consultation Today
          </Button>
        </div>
      </div>
    </section>;
};
export default Services;