import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StickyMobileBar from "@/components/StickyMobileBar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ShieldAlert, ShieldCheck } from "lucide-react";

export default function SafetySterilization() {
  const steps = [
    {
      title: "Decontamination & Washing",
      desc: "All instruments undergo chemical disinfection and ultrasonic cleaning to remove biological traces before autoclaving."
    },
    {
      title: "Pouch Packaging",
      desc: "Instruments are packed and sealed in medical-grade sterilization pouches with chemical indicators to guarantee sterility."
    },
    {
      title: "Class B Autoclaving",
      desc: "We use Euronda/Runyes Class B fractions vacuum autoclaves to sterilize instruments at 134°C under high pressure."
    },
    {
      title: "Sterile Storage",
      desc: "Pouches are kept in sealed UV chambers and only opened in front of the patient directly before the procedure."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="100% Sterile & Safe Dental Care Guntur | Safety Protocols"
        description="Discover our strict sterilization standards at Navya's Dental Hospital, Guntur. We use Class B autoclaves, UV storage, and single-use disposables."
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Safety & Sterilization Protocols at Navya's",
          "description": "Enterprise-grade infection control protocols utilizing Class B autoclaves and DCI compliance guidelines."
        }}
      />
      <Header />

      <main className="pb-24">
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-r from-green-500/10 via-background to-green-500/5">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-4 bg-green-100 text-green-800 hover:bg-green-100/80">
              Infection Control Protocol
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Your Safety is Our <br />
              <span className="text-green-600">Absolute Priority</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We employ a rigid 4-step sterilization system matching international guidelines to ensure 100% cross-contamination protection.
            </p>
          </div>
        </section>

        {/* Sterilization System */}
        <section className="py-16 container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our 4-Stage Sterilization Cycle</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="border-border/50 bg-card hover:shadow-md transition-all">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-green-700">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Equipment features */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <ShieldCheck className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6 text-primary">Advanced Safety Technologies</h2>
            <div className="grid md:grid-cols-3 gap-6 text-left mt-8">
              <div className="bg-card p-6 rounded-xl border border-border/50">
                <h3 className="font-bold mb-2 text-green-600 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" /> Class B Autoclave
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Medical-grade pre & post-vacuum steam sterilization targeting both wrapped and hollow instruments.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border/50">
                <h3 className="font-bold mb-2 text-green-600 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" /> Disposable Items
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Strict single-use policy for glasses, suction tips, patient drapes, injections, and gloves.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border/50">
                <h3 className="font-bold mb-2 text-green-600 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" /> Chemical Monitors
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We run daily chemical biological indicator spore tests to guarantee snoop-proof sterilizer cycles.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileBar />
    </div>
  );
}
