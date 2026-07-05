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

export default function FullMouthRehab() {
  const faqs = [
    {
      q: "What is full mouth rehabilitation?",
      a: "Full mouth rehabilitation (reconstruction) is a series of restorative, cosmetic, and neuromuscular procedures designed to rebuild and restore all teeth in both the upper and lower jaws."
    },
    {
      q: "How long does full mouth reconstruction take?",
      a: "Depending on teeth conditions and bone grafting requirements, full mouth rehab can take between 2 to 6 months to complete all crown fittings and implant osseointegrations."
    },
    {
      q: "What is the cost of full mouth reconstruction in Guntur?",
      a: "Full mouth rehabilitation cost in Guntur ranges from ₹1,50,000 to ₹3,50,000 depending on crowns (ceramic/zirconia), implants count, and sinus lift requirements."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Full Mouth Rehabilitation in Guntur | Reconstructive Dentistry"
        description="Get complete full mouth rehabilitation in Guntur at Navya's Dental Hospital. Restore chew bite, aesthetics, and smile confidence. Book your consultation."
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "MedicalClinic",
              "name": "Navya's Full Mouth Rehab Center",
              "description": "Comprehensive reconstructive prosthodontic rehabilitation services in Guntur.",
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
            <Badge variant="secondary" className="mb-4">Reconstructive Prosthodontics</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Full Mouth Rehabilitation in Guntur
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Restore your complete bite function, speech clarity, and aesthetic confidence. Comprehensive dental rehabilitation by Guntur's leading senior implantologist.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 container mx-auto px-4 max-w-4xl space-y-12">
          {/* H2: What is it */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-primary">What is Full Mouth Rehabilitation?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Full mouth rehabilitation is a specialized prosthodontic reconstruction process where all teeth in the mouth are restored or replaced. It combines crowns, veneers, bridges, dental implants, and jaw correction alignment. This treatment improves smile aesthetic appeal and corrects functional issues with TMJ joints, chewing comfort, and bite force.
            </p>
          </div>

          {/* H2: Who needs it */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-primary">Who is a Candidate for Full Mouth Reconstruction?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Rehabilitation is highly recommended for patients with:
            </p>
            <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" /> Multiple missing or severely decayed teeth
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" /> Worn-down teeth due to chronic grinding (bruxism)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" /> TMJ jaw joint pain or chewing imbalance
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" /> Severe acid erosion damage to enamel surfaces
              </li>
            </ul>
          </div>

          {/* Doctor Intro */}
          <Card className="border border-primary/20 bg-secondary/10 p-6 rounded-2xl">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary text-xl">KB</div>
              <div className="text-center md:text-left">
                <h3 className="font-bold text-lg">Lead Surgeon: Prof. Dr. T. Kishore Babu (MDS)</h3>
                <p className="text-xs text-muted-foreground mt-1">DCI Reg. No: DCI-A-11002 | 25+ Years Experience</p>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  Prof. Dr. T. Kishore Babu is a veteran oral surgeon and leading implantologist in Guntur, dedicating his career to reconstructive surgeries and complex dental rehabilitations.
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
                  <h3 className="font-bold">Bite & TMJ Analysis</h3>
                  <p className="text-sm text-muted-foreground">We measure your jaw joint movement, chew pressures, and tooth alignment using advanced articulators and OPG scanning.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="font-bold">Clinical Foundation Treatments</h3>
                  <p className="text-sm text-muted-foreground">Any necessary tooth extractions, implants placements, or root canals are completed to establish a healthy oral base.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="font-bold">Restorations & Crown Bonding</h3>
                  <p className="text-sm text-muted-foreground">Custom zirconia bridges, porcelain crowns, and implants-supported dentures are built and bonded to rebuild your bite.</p>
                </div>
              </div>
            </div>
          </div>

          {/* H2: Cost table */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-primary">Full Mouth Rehab Costs in Guntur</h2>
            <div className="mb-4 p-4 rounded-lg bg-green-50 border border-green-200 text-green-800 text-sm">
              ✨ <strong>Government Price Guidelines</strong>: Full mouth reconstruction and rehabilitative implant therapies at Navya's are structured in compliance with government-subsidized price regulations (e.g. CGHS/state approved tariffs) to ensure complete bite restoration remains accessible.
            </div>
            <div className="border border-border rounded-lg overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-secondary/40 border-b border-border">
                    <th className="p-3 font-bold">Treatment Setup</th>
                    <th className="p-3 font-bold">Estimated Cost (INR)</th>
                    <th className="p-3 font-bold">Restoration Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-3">All-on-4 Implant Reconstruction</td>
                    <td className="p-3">₹1,80,000 - ₹2,40,000</td>
                    <td className="p-3">Fixed hybrid denture supported by 4 implants</td>
                  </tr>
                  <tr>
                    <td className="p-3">All-on-6 Implant Reconstruction</td>
                    <td className="p-3">₹2,50,000 - ₹3,50,000</td>
                    <td className="p-3">Fixed hybrid bridge supported by 6 implants</td>
                  </tr>
                  <tr>
                    <td className="p-3">Full Crown Reconstruction (Zirconia)</td>
                    <td className="p-3">₹1,50,000 - ₹2,20,000</td>
                    <td className="p-3">Rebuilds all worn natural teeth crowns</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* H2: Benefits */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-primary">Benefits of Complete Rehabilitation</h2>
            <div className="grid md:grid-cols-2 gap-4 text-muted-foreground text-sm">
              <div className="p-4 border border-border/50 rounded-xl bg-card">
                <h3 className="font-bold text-foreground mb-1">Restores 100% Chew Function</h3>
                <p>Eat healthy, solid foods again without any pain, discomfort, or clicking jaw joint sounds.</p>
              </div>
              <div className="p-4 border border-border/50 rounded-xl bg-card">
                <h3 className="font-bold text-foreground mb-1">Relieves Chronic TMJ Headache</h3>
                <p>Corrects jaw alignment imbalances that trigger persistent muscle soreness and headaches.</p>
              </div>
              <div className="p-4 border border-border/50 rounded-xl bg-card">
                <h3 className="font-bold text-foreground mb-1">Youthful Facial Profiles</h3>
                <p>Restores teeth height (vertical dimension) to plump up lips and smooth out cheek folds.</p>
              </div>
              <div className="p-4 border border-border/50 rounded-xl bg-card">
                <h3 className="font-bold text-foreground mb-1">Durable Zirconia Material</h3>
                <p>We use premium, high-translucent monolithic zirconia crowns for fracture-proof chew performance.</p>
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
            <h2 className="text-2xl font-bold mb-4">Book a Full Mouth Reconstruction Consultation</h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">Get a complete bite audit and personalized treatment timeline. Consult Prof. Dr. T. Kishore Babu today.</p>
            <Link to="/book-appointment">
              <Button size="lg" variant="gradient">Book Free Consultation</Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileBar />
    </div>
  );
}
