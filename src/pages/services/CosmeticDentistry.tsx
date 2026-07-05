import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StickyMobileBar from "@/components/StickyMobileBar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function CosmeticDentistry() {
  const faqs = [
    {
      q: "What is the cost of dental veneers in Guntur?",
      a: "The cost of dental veneers in Guntur starts from ₹8,000 to ₹18,000 per tooth depending on the material (composite vs. imported E-Max porcelain veneers)."
    },
    {
      q: "How long do porcelain veneers last?",
      a: "Porcelain veneers are highly durable and can last between 10 to 15 years with proper oral care and avoiding biting down on hard objects like ice or bottle caps."
    },
    {
      q: "Is cosmetic dentistry covered by insurance?",
      a: "Generally, purely cosmetic procedures (like teeth bleaching or porcelain veneers) are not covered by insurance. However, restorative crown procedures might be partially covered."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Cosmetic Dentistry in Guntur | Smile Designing & Veneers"
        description="Looking for cosmetic dentistry in Guntur? Navya's Dental Hospital offers porcelain veneers, smile designing, and teeth whitening. Book your consult."
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "MedicalClinic",
              "name": "Navya's Cosmetic Dentistry Center",
              "description": "Premium cosmetic smile designing and E-Max porcelain veneers in Guntur.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "A.C. College Main Road",
                "addressLocality": "Guntur",
                "postalCode": "522002",
                "addressRegion": "Andhra Pradesh",
                "addressCountry": "IN"
              }
            },
            {
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.a
                }
              }))
            }
          ]
        }}
      />
      <Header />

      <main className="pb-24">
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-4">Smile Designing</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Cosmetic Dentistry in Guntur
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform your smile and confidence with advanced porcelain veneers, tooth bleaching, and custom smile designing by Guntur's leading specialists.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 container mx-auto px-4 max-w-4xl space-y-12">
          {/* H2: What is it */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-primary">What is Cosmetic Dentistry?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cosmetic dentistry refers to dental treatments that focus on improving the appearance of your teeth, gums, and overall smile. It covers procedures ranging from simple tooth whitening to complex smile design using ultra-thin porcelain veneers, laser gum contouring, and dental jewelry.
            </p>
          </div>

          {/* H2: Who needs it */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-primary">Who Can Benefit from Cosmetic Smile Designing?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our smile designing treatments are designed to correct:
            </p>
            <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" /> Discolored or stained teeth (bleaching resistant)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" /> Chapped, cracked, or chipped teeth
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" /> Gaps or minor alignment irregularities
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" /> Gummy smiles requiring gum contouring
              </li>
            </ul>
          </div>

          {/* Doctor Intro */}
          <Card className="border border-primary/20 bg-secondary/10 p-6 rounded-2xl">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary text-xl">NC</div>
              <div className="text-center md:text-left">
                <h4 className="font-bold text-lg">Lead Cosmetic Surgeon: Dr. M. Naresh Chandra (BDS)</h4>
                <p className="text-xs text-muted-foreground mt-1">DCI Reg. No: DCI-A-23456 | 15+ Years Experience</p>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  Dr. Naresh Chandra is an expert in cosmetic dental restoration, smile makeovers, and dental veneers, focused on restoring aesthetic confidence.
                </p>
              </div>
            </div>
          </Card>

          {/* H2: Procedure steps */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-primary">Procedure Steps</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h4 className="font-bold">Consultation & Digital Mockup</h4>
                  <p className="text-sm text-muted-foreground">We analyze your facial structure and create a temporary wax-up mockup so you can test and see your proposed smile beforehand.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h4 className="font-bold">Minimal Enamel Prep & Impressions</h4>
                  <p className="text-sm text-muted-foreground">An ultra-thin layer of enamel (approx. 0.3mm) is polished, and digital impressions are sent to the lab to mill porcelain veneers.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h4 className="font-bold">Bonding & Finishing</h4>
                  <p className="text-sm text-muted-foreground">Veneers are bonded to teeth using high-strength light-cured resin cement. Bite margins are polished to perfection.</p>
                </div>
              </div>
            </div>
          </div>

          {/* H2: Cost table */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-primary">Cosmetic Dentistry Costs in Guntur</h2>
            <div className="mb-4 p-4 rounded-lg bg-green-50 border border-green-200 text-green-800 text-sm">
              ✨ <strong>Government Regulated Pricing Standards</strong>: At Navya's Dental Hospital, cosmetic smile designing and dental veneers are priced in line with standard government tariffs (e.g. CGHS/state approved pricing models) to keep advanced aesthetic dentistry affordable.
            </div>
            <div className="border border-border rounded-lg overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-secondary/40 border-b border-border">
                    <th className="p-3 font-bold">Treatment Option</th>
                    <th className="p-3 font-bold">Estimated Cost (INR)</th>
                    <th className="p-3 font-bold">Longevity Expectancy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-3">Professional Teeth Whitening (Bleaching)</td>
                    <td className="p-3">₹7,000 - ₹12,000</td>
                    <td className="p-3">1 to 2 Years</td>
                  </tr>
                  <tr>
                    <td className="p-3">Composite Direct Veneers</td>
                    <td className="p-3">₹3,500 - ₹5,000 / tooth</td>
                    <td className="p-3">3 to 5 Years</td>
                  </tr>
                  <tr>
                    <td className="p-3">Premium E-Max Porcelain Veneers</td>
                    <td className="p-3">₹9,000 - ₹15,000 / tooth</td>
                    <td className="p-3">10 to 15 Years</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* H2: Benefits */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-primary">Benefits of Smile Makeovers</h2>
            <div className="grid md:grid-cols-2 gap-4 text-muted-foreground text-sm">
              <div className="p-4 border border-border/50 rounded-xl bg-card">
                <h4 className="font-bold text-foreground mb-1">Instant Confidence Boost</h4>
                <p>A straight, bright smile dramatically improves self-esteem and social confidence.</p>
              </div>
              <div className="p-4 border border-border/50 rounded-xl bg-card">
                <h4 className="font-bold text-foreground mb-1">Stain and Decay Resistant</h4>
                <p>Porcelain materials are highly resistant to typical coffee, tea, and smoking stains.</p>
              </div>
              <div className="p-4 border border-border/50 rounded-xl bg-card">
                <h4 className="font-bold text-foreground mb-1">Natural Translucency</h4>
                <p>Advanced ceramic options mimic the light-reflecting properties of natural enamel.</p>
              </div>
              <div className="p-4 border border-border/50 rounded-xl bg-card">
                <h4 className="font-bold text-foreground mb-1">Strengthens Damaged Teeth</h4>
                <p>Cappings and overlays reinforce structural support for slightly cracked enamel surfaces.</p>
              </div>
            </div>
          </div>

          {/* H2: FAQs */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-primary">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="font-bold text-left">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* H2: Book a consultation */}
          <div className="text-center pt-8">
            <h2 className="text-2xl font-bold mb-4">Request a Smile Design Mockup</h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">Visualize your future straight teeth. Consult Dr. M. Naresh Chandra today.</p>
            <Link to="/book-appointment">
              <Button size="lg" variant="gradient">Book Free Appointment Now</Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileBar />
    </div>
  );
}
