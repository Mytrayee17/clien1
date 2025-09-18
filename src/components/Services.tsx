import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ReviewsCarousel } from "./ReviewsCarousel";

// Import professional medical icons
import rootCanalIcon from "@/assets/icons/root-canal-icon.png";
import dentalImplantIcon from "@/assets/icons/dental-implant-icon.png";
import surgeryIcon from "@/assets/icons/surgery-icon.png";
import cosmeticIcon from "@/assets/icons/cosmetic-icon.png";
import orthodonticsIcon from "@/assets/icons/orthodontics-icon.png";
import pediatricIcon from "@/assets/icons/pediatric-icon.png";
import oralCareIcon from "@/assets/icons/oral-care-icon.png";
import laserIcon from "@/assets/icons/laser-icon.png";
import sedationIcon from "@/assets/icons/sedation-icon.png";
const Services = () => {
  const services = [{
    icon: surgeryIcon,
    title: "Maxillofacial Surgeries",
    description: "Advanced facial surgeries including TMJ, orthognathic surgeries, and trauma management.",
    features: ["T.M.J Ankylosis", "Orthognathic Surgery", "Lefort Fractures", "Pan-facial Fractures"]
  },{
    icon: dentalImplantIcon,
    title: "Dental Implantology",
    description: "World-class implants in association with Indian Dental Education Academy, Chennai.",
    features: ["Wide Range of Implants", "Expert Consultation", "Permanent Solution", "Natural Looking"]
  },{
    icon: rootCanalIcon,
    title: "Root Canal Treatment",
    description: "Pain-free single sitting and multi-sitting root canal therapy using advanced endodontic techniques.",
    features: ["Single Sitting RCT", "Multi Sitting RCT", "Pain-free Treatment", "Advanced Technology"]
  },{
    icon: oralCareIcon,
    title: "Prosthodontics",
    description: "Prosthodontics is the dental specialty focused on restoring and replacing teeth and other oral structures to improve your smile's appearance, function, and overall health.",
    features: ["Dentures", "Crowns and Bridges", "Full-Mouth Rehabilitation", "Advanced Technology"]
  },{
    icon: orthodonticsIcon,
    title: "Orthodontics",
    description: "Orthodontic and dento-facial correction of malocclusions for proper teeth alignment.",
    features: ["Braces Treatment", "Dento-facial Correction", "Malocclusion Treatment", "Smile Alignment"]
  },{
    icon: pediatricIcon,
    title: "Pediatric Dentistry",
    description: "Specialized dental care for children with gentle approach and child-friendly environment.",
    features: ["Child-friendly Care", "Preventive Treatments", "Behavior Management", "Early Intervention"]
  }, {
    icon: laserIcon,
    title: "Laser Dentistry",
    description: "Advanced laser treatments for precise and minimally invasive dental procedures.",
    features: ["Laser Surgery", "Flap Surgeries", "Minimally Invasive", "Faster Healing"]
  },{
    icon: cosmeticIcon,
    title: "Cosmetic Dentistry",
    description: "Complete smile designing and aesthetic treatments for a perfect smile transformation.",
    features: ["Smile Designing", "Lip Contouring", "Dimple Creation", "Dental Jewellery"]
  },{
    icon: oralCareIcon,
    title: "Complete Oral Care",
    description: "Comprehensive dental services including prophylaxis, dentures, and bleaching treatments.",
    features: ["Oral Prophylaxis", "Complete Dentures", "Teeth Bleaching", "Fixed & Removable Teeth"]
  },{
    icon: sedationIcon,
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
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              Dental Specialties
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Through our comprehensive dental specialties, we provide in-depth expertise in the spectrum of advanced dental and surgical interventions. Our specialties are integrated to provide a seamless experience.
            </p>
          </div>
          <Button variant="ghost" className="text-primary font-semibold hidden md:flex items-center gap-2">
            VIEW ALL
            <span className="text-lg">→</span>
          </Button>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-6">
          {/* All Service Cards */}
          {services.slice(0, 8).map((service, index) => {
            return (
              <Card key={index} className="group hover:shadow-elevated hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 hover:scale-105 bg-card/80 backdrop-blur-sm cursor-pointer hover:bg-blue-600 hover:border-blue-600" onClick={scrollToAppointment}>
                <CardContent className="p-6 text-center h-full flex flex-col relative overflow-hidden">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white group-hover:scale-110 transition-all duration-300 p-2">
                    <img 
                      src={service.icon} 
                      alt={`${service.title} icon`}
                      className="w-full h-full object-contain transition-all duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-primary group-hover:text-white transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow group-hover:text-white transition-colors">
                    {service.description.length > 100 
                      ? service.description.substring(0, 100) + "..." 
                      : service.description}
                  </p>
                  <div className="mt-4 flex items-center justify-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:gap-3 group-hover:text-white">
                    <span className="text-sm">KNOW MORE</span>
                    <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Reviews Section */}
        <div className="mt-24 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">What Our Patients Say</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our patients have to say about their experience at Navya's Dental Hospital.
            </p>
          </div>
          <ReviewsCarousel />
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