import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Users, CheckCircle, Phone, MapPin, Award } from "lucide-react";

const ConversionOptimizer = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const socialProof = [
    { name: "Ravi Kumar", rating: 5, text: "Excellent service! My smile transformation was amazing." },
    { name: "Priya Sharma", rating: 5, text: "Professional staff and great results. Highly recommended!" },
    { name: "Arun Reddy", rating: 5, text: "Best dental hospital in Guntur. Very satisfied with the treatment." }
  ];

  const features = [
    {
      icon: <Award className="h-5 w-5 text-primary" />,
      title: "Expert Dentists",
      description: "15+ years of experience"
    },
    {
      icon: <Users className="h-5 w-5 text-accent" />,
      title: "1000+ Happy Patients",
      description: "Trusted by the community"
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-green-500" />,
      title: "Modern Technology",
      description: "Latest dental equipment"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Urgency Timer */}
      <Card className="shadow-lg bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-500/20">
        <CardContent className="p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Clock className="h-5 w-5 text-red-500 animate-pulse" />
            <span className="font-semibold text-red-600">Limited Time Offer</span>
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">
            Free Consultation Ends Soon!
          </h3>
          <div className="flex justify-center gap-4 text-2xl font-bold text-primary">
            <div className="text-center">
              <div className="bg-primary/10 rounded-lg px-3 py-2 min-w-[60px]">
                {timeLeft.hours.toString().padStart(2, '0')}
              </div>
              <div className="text-sm text-muted-foreground mt-1">Hours</div>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-lg px-3 py-2 min-w-[60px]">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </div>
              <div className="text-sm text-muted-foreground mt-1">Minutes</div>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-lg px-3 py-2 min-w-[60px]">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </div>
              <div className="text-sm text-muted-foreground mt-1">Seconds</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            ⏰ Book now to secure your free consultation slot!
          </p>
        </CardContent>
      </Card>

      {/* Trust Signals */}
      <Card className="shadow-lg bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-xl border border-white/20">
        <CardContent className="p-6">
          <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500" />
            Why Patients Trust Us
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30">
                {feature.icon}
                <div>
                  <h4 className="font-semibold text-foreground text-sm">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Reviews */}
      <Card className="shadow-lg bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-xl border border-white/20">
        <CardContent className="p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Recent Patient Reviews</h3>
          <div className="space-y-4">
            {socialProof.map((review, index) => (
              <div key={index} className="p-4 rounded-lg bg-secondary/20 border border-primary/10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="font-semibold text-sm text-foreground">{review.name}</span>
                </div>
                <p className="text-sm text-muted-foreground italic">"{review.text}"</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Contact CTA */}
      <Card className="shadow-lg bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
        <CardContent className="p-6 text-center">
          <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
          <h3 className="text-lg font-bold text-foreground mb-2">
            Need Immediate Assistance?
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Call us directly for urgent appointments
          </p>
          <div className="space-y-2">
            <a
              href="tel:08632235113"
              className="block bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
            >
              📞 0863-2235113/12
            </a>
            <a
              href="tel:9100831618"
              className="block bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
            >
              📱 9100831618
            </a>
          </div>
        </CardContent>
      </Card>

      {/* Location Info */}
      <Card className="shadow-lg bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-xl border border-white/20">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-foreground mb-1">Visit Our Clinic</h4>
              <p className="text-sm text-muted-foreground mb-2">
                A.C. College Main Road<br />
                Between Canara Bank & Suzuki Show Room<br />
                <span className="text-primary font-semibold">Guntur - 522002</span>
              </p>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                🕒 Mon-Sat: 10:30 AM - 7:30 PM
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConversionOptimizer;
