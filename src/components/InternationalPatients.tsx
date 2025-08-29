import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe, Plane, Hotel, FileText, Phone, Clock, Download } from "lucide-react";
const InternationalPatients = () => {
  const packages = [{
    name: "Standard Package",
    price: "₹25,000 - ₹50,000",
    usd: "$300 - $600",
    features: ["Consultation & Diagnosis", "Basic dental procedures", "Airport pickup", "3-star hotel recommendations", "Basic translation support"]
  }, {
    name: "Premium Package",
    price: "₹50,000 - ₹1,00,000",
    usd: "$600 - $1,200",
    features: ["Advanced procedures", "Multiple speciality consultation", "Luxury transportation", "4-star hotel partnerships", "Dedicated patient coordinator", "Post-treatment follow-up"],
    popular: true
  }, {
    name: "VIP Package",
    price: "₹1,00,000+",
    usd: "$1,200+",
    features: ["Complex surgeries & implants", "Private suite accommodation", "5-star hotel partnerships", "24/7 concierge service", "Family accommodation", "Extended recovery support"]
  }];
  const timeline = [{
    step: 1,
    title: "Initial Consultation",
    desc: "Video call assessment & treatment planning",
    duration: "1-2 days"
  }, {
    step: 2,
    title: "Visa & Travel",
    desc: "Medical visa assistance & travel arrangements",
    duration: "2-3 weeks"
  }, {
    step: 3,
    title: "Arrival & Setup",
    desc: "Airport pickup, hotel check-in, clinic orientation",
    duration: "1 day"
  }, {
    step: 4,
    title: "Treatment Phase",
    desc: "Comprehensive dental care & procedures",
    duration: "3-14 days"
  }, {
    step: 5,
    title: "Recovery & Follow-up",
    desc: "Healing period with regular check-ups",
    duration: "1-7 days"
  }];

  return (
    <section id="international-patients" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">International Patients</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience world-class dental care in India with our comprehensive international patient packages
          </p>
        </div>

        {/* Treatment Packages */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <Card key={index} className={`p-6 relative ${pkg.popular ? 'ring-2 ring-primary' : ''}`}>
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                  Most Popular
                </Badge>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                <div className="text-primary text-xl font-semibold">{pkg.price}</div>
                <div className="text-muted-foreground">{pkg.usd}</div>
              </div>
              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full">Choose Package</Button>
            </Card>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Your Journey With Us</h3>
          <div className="grid md:grid-cols-5 gap-6">
            {timeline.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
                <div className="text-primary text-sm font-medium mt-2">{item.duration}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="p-6 text-center">
            <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
            <h4 className="font-semibold text-foreground mb-2">Global Standards</h4>
            <p className="text-muted-foreground text-sm">International quality protocols and certifications</p>
          </Card>
          <Card className="p-6 text-center">
            <Plane className="w-12 h-12 text-primary mx-auto mb-4" />
            <h4 className="font-semibold text-foreground mb-2">Travel Support</h4>
            <p className="text-muted-foreground text-sm">Complete visa and travel assistance</p>
          </Card>
          <Card className="p-6 text-center">
            <Hotel className="w-12 h-12 text-primary mx-auto mb-4" />
            <h4 className="font-semibold text-foreground mb-2">Accommodation</h4>
            <p className="text-muted-foreground text-sm">Partner hotels with special rates</p>
          </Card>
          <Card className="p-6 text-center">
            <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
            <h4 className="font-semibold text-foreground mb-2">24/7 Support</h4>
            <p className="text-muted-foreground text-sm">Round-the-clock patient assistance</p>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default InternationalPatients;