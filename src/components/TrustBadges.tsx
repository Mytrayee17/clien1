import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Shield, Award, Users, Clock, Star, CheckCircle } from "lucide-react";

const TrustBadges = () => {
  const accreditations = [
    { name: "Medical Board", icon: Award },
    { name: "Quality Assured", icon: CheckCircle },
    { name: "Patient Safety", icon: Users }
  ];

  const stats = [
    { number: "25+", label: "Years Experience", icon: Clock },
    { number: "10,000+", label: "Happy Patients", icon: Users },
    { number: "15+", label: "Expert Specialists", icon: Award },
    { number: "4.8", label: "Patient Rating", icon: Star }
  ];

  return (
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Accreditation Strip */}
        <div className="text-center mb-12">
          <h3 className="text-lg font-semibold mb-6 text-muted-foreground">
            Trusted & Accredited Healthcare Provider
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {accreditations.map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-primary">
                <item.icon className="h-6 w-6" />
                <span className="font-medium">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center bg-gradient-card border-0 shadow-card">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-primary/10 rounded-full">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
            <Badge variant="secondary" className="text-primary">
              100% Sterile Environment
            </Badge>
            <Badge variant="secondary" className="text-primary">
              Latest Technology
            </Badge>
            <Badge variant="secondary" className="text-primary">
              Single Sitting RCT
            </Badge>
            <Badge variant="secondary" className="text-primary">
              24/7 Emergency Care
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;