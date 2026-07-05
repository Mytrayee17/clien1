import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StickyMobileBar from "@/components/StickyMobileBar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Shield, Award, Users, Heart } from "lucide-react";

export default function AboutUs() {
  const highlights = [
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "25+ Years of Excellence",
      description: "Serving the Guntur community with dedication, trust, and exceptional clinical expertise."
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: "DCI Standard Quality",
      description: "Operating strictly under the guidelines of the Dental Council of India (DCI) and state councils."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "10,000+ Happy Smiles",
      description: "Transforming lives and smiles with advanced cosmetic and restorative procedures."
    },
    {
      icon: <Heart className="h-8 w-8 text-accent" />,
      title: "Patient-Centric Care",
      description: "Designed for ultimate patient comfort, offering painless laser and rotary treatments."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="About Us | Navya's International Dental Hospital Guntur"
        description="Learn more about Navya's International Dental Hospital, the leading dental clinic in Guntur with 25+ years of experience. Read about our mission and doctors."
        schema={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About Navya's Dental Hospital Guntur",
          "description": "25+ years of clinical excellence in dental implants, orthodontics, and root canal therapy in Guntur."
        }}
      />
      <Header />

      <main className="pb-24">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-4">Our Legacy</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Restoring Health and Confidence, <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">One Smile at a Time</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Welcome to Kondaiah Chowdary Memorial - NAVYA'S International Dental Hospital. We have been the standard of modern dentistry in Guntur for over 25 years.
            </p>
          </div>
        </section>

        {/* Detailed Legacy Description */}
        <section className="py-16 container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Our Mission & Philosophy</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                At Navya's Dental Hospital, we believe that world-class dental care should be accessible, comfortable, and tailored to each patient. Our facility is equipped with state-of-the-art diagnostic and clinical equipment, ensuring precision and safety.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Whether you visit us for a routine dental screening, emergency pain relief, or complex full-mouth rehabilitation, our dental experts ensure a warm and compassionate environment.
              </p>
              <div className="flex gap-4">
                <Link to="/book-appointment">
                  <Button variant="gradient" size="lg">Book Consultation</Button>
                </Link>
                <Link to="/our-doctors">
                  <Button variant="outline" size="lg">Meet Our Team</Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl blur-3xl -z-10" />
              <img 
                src="/lovable-uploads/logo.png" 
                alt="Navya's Dental Hospital Building Logo" 
                className="mx-auto max-h-80 w-auto object-contain rounded-2xl p-6 bg-white shadow-xl border border-border"
              />
            </div>
          </div>
        </section>

        {/* Legacy Highlights */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Why Choose Navya's Dental Hospital?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-border/50">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileBar />
    </div>
  );
}
