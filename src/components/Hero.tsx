import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Clock, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import newHeroImg from "@/assets/1745253031953.png";
// Auto-rotating carousel used in the hero section
const AutoCarousel = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!api) return;
    const id = setInterval(() => {
      api.scrollNext();
    }, 2000); // 2 seconds
    return () => clearInterval(id);
  }, [api]);

  const images = [
    "/lovable-uploads/06504c0d-28dc-4e9a-8471-4e56de6b1624.png",
    newHeroImg,
    "/lovable-uploads/up2.jpg",
  ];

  return (
    <Carousel opts={{ loop: true }} setApi={setApi} className="overflow-hidden rounded-lg shadow-hero bg-white">
      <CarouselContent>
        {images.map((src, i) => (
          <CarouselItem key={i}>
            <div className="w-full h-64 sm:h-80 md:h-[420px] flex items-center justify-center bg-white">
              <img
                src={src}
                alt={`NAVYA'S International Dental Hospital ${i + 1}`}
                className="max-w-full max-h-full object-contain animate-float will-change-transform"
                loading="eager"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-secondary/30 to-background pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-primary font-medium">Kondaiah Chowdary Memorial</Badge>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-foreground/90">
                <span className="block">NAVYA'S</span>
                <span className="block"><span className="text-primary">International</span> Dental Hospital</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl font-semibold leading-7 text-foreground/90 whitespace-nowrap">
                World class dental &
                <span className="bg-gradient-primary bg-clip-text text-transparent"> facial care</span>
                , gentle, modern, human.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                From routine dentistry to complex facial surgery—expert care in Guntur, 
                welcoming patients from India and abroad.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => scrollToSection('appointment')} size="lg" variant="gradient" className="shadow-hero text-lg px-8 py-6">
                Book a caring consultation
              </Button>
              
            </div>

            {/* Trust Microcopy */}
            <div className="text-sm text-muted-foreground flex flex-wrap items-center gap-4">
              <span className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                Advanced sterilization
              </span>
              <span className="flex items-center gap-2">
                <Award className="h-4 w-4 text-primary" />
                In-house X-ray
              </span>
              <span className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                Oxygen facility
              </span>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10000+</div>
                <div className="text-sm text-muted-foreground">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Specialists</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Emergency Care</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image Carousel */}
          <div className="relative">
            <AutoCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;