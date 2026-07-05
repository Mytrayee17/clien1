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

export default function BracesAligners() {
  const faqs = [
    {
      q: "What is the cost of clear aligners in Guntur?",
      a: "The cost of clear aligners in Guntur ranges from ₹45,000 to ₹1,20,000 depending on the severity of alignment required and the brand (e.g. Invisalign vs. domestic brand)."
    },
    {
      q: "How long does braces treatment take?",
      a: "Typical orthodontic treatment lasts between 12 to 24 months. Self-ligating braces can reduce treatment duration by 4 to 6 months compared to traditional metal brackets."
    },
    {
      q: "Am I too old for orthodontic treatment?",
      a: "No, teeth alignment can be corrected at any age. Adult orthodontics is highly popular with invisible ceramic braces and clear aligner systems."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Braces & Aligners in Guntur | Navya's International Dental Hospital"
        description="Looking for braces or invisible aligners in Guntur? Navya's Dental Hospital provides high-quality alignment treatments. Book your consultation today."
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "MedicalClinic",
              "name": "Navya's Orthodontic Aligners Center",
              "description": "Premium self-ligating braces, ceramic brackets, and custom invisible clear aligners in Guntur.",
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
            <Badge variant="secondary" className="mb-4">Advanced Orthodontics</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Braces and Aligners in Guntur
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get perfectly aligned teeth with ceramic braces, self-ligating brackets, or premium invisible aligners. Consult Guntur's leading senior orthodontist.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 container mx-auto px-4 max-w-4xl space-y-12">
          {/* H2: What is it */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-primary">What is Orthodontic Treatment?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Orthodontic treatment focuses on correcting misaligned teeth and jaw alignments. Over time, braces or clear aligners apply continuous light pressure to teeth, gently moving them into optimal, straight positions. This improves your smile, facial profiles, and makes chewing more functional.
            </p>
          </div>

          {/* H2: Who needs it */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-primary">Who Needs Braces or Aligners?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Orthodontics corrects malocclusions and aesthetic concerns, including:
            </p>
            <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" /> Overbite and Underbite profiles
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" /> Crooked or crowded teeth
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" /> Open bite or crossbite gaps
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" /> Wide gaps and spacing between teeth
              </li>
            </ul>
          </div>

          {/* Doctor Intro */}
          <Card className="border border-primary/20 bg-secondary/10 p-6 rounded-2xl">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary text-xl">RS</div>
              <div className="text-center md:text-left">
                <h4 className="font-bold text-lg">Senior Orthodontist: Dr. M. Raja Sekar (MDS)</h4>
                <p className="text-xs text-muted-foreground mt-1">DCI Reg. No: DCI-A-87654 | 15+ Years Experience</p>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  Specialized in modern orthodontics and dentofacial orthopedics, Dr. Raja Sekar leads the teeth alignment and invisible aligner treatments.
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
                  <h4 className="font-bold">Digital Intraoral Scan & Imaging</h4>
                  <p className="text-sm text-muted-foreground">We capture precise 3D scans of your jaw to simulate your final smile alignment before starting.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h4 className="font-bold">Brackets Placement or Custom Aligner Printing</h4>
                  <p className="text-sm text-muted-foreground">Brackets are bonded to your teeth, or your customized transparent aligner trays are fabricated.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h4 className="font-bold">Monthly Adjustments or Tray Changes</h4>
                  <p className="text-sm text-muted-foreground">Periodic dental checkups are scheduled every 4 to 6 weeks to swap aligner trays or adjust archwires.</p>
                </div>
              </div>
            </div>
          </div>

          {/* H2: Cost table */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-primary">Cost of Braces & Aligners in Guntur</h2>
            <div className="mb-4 p-4 rounded-lg bg-green-50 border border-green-200 text-green-800 text-sm">
              ✨ <strong>Government Regulated Pricing</strong>: Our alignment and braces prices are aligned with standard government-subsidized guidelines (e.g. CGHS/state approved tariffs) to ensure high-performance orthodontic care is affordable for all families.
            </div>
            <div className="border border-border rounded-lg overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-secondary/40 border-b border-border">
                    <th className="p-3 font-bold">Treatment Category</th>
                    <th className="p-3 font-bold">Estimated Cost (INR)</th>
                    <th className="p-3 font-bold">Aesthetic Level</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-3">Traditional Metal Braces</td>
                    <td className="p-3">₹25,000 - ₹35,000</td>
                    <td className="p-3">Basic (Visible brackets)</td>
                  </tr>
                  <tr>
                    <td className="p-3">Ceramic Self-Ligating Braces</td>
                    <td className="p-3">₹45,000 - ₹60,000</td>
                    <td className="p-3">High (Tooth colored brackets)</td>
                  </tr>
                  <tr>
                    <td className="p-3">Invisible Clear Aligners</td>
                    <td className="p-3">₹65,000 - ₹1,20,000</td>
                    <td className="p-3">Maximum (100% Transparent)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* H2: Benefits */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-primary">Benefits of Alignment Treatments</h2>
            <div className="grid md:grid-cols-2 gap-4 text-muted-foreground text-sm">
              <div className="p-4 border border-border/50 rounded-xl bg-card">
                <h4 className="font-bold text-foreground mb-1">Aesthetic Smile Value</h4>
                <p>Straight teeth boost personal confidence and enhance overall facial symmetry.</p>
              </div>
              <div className="p-4 border border-border/50 rounded-xl bg-card">
                <h4 className="font-bold text-foreground mb-1">Easier Tooth Cleaning</h4>
                <p>Aligned teeth are easier to brush and floss, reducing risk of gum disease.</p>
              </div>
              <div className="p-4 border border-border/50 rounded-xl bg-card">
                <h4 className="font-bold text-foreground mb-1">Improved Speech & Bite</h4>
                <p>Corrects jaw strain, improves pronunciation, and promotes proper digestion.</p>
              </div>
              <div className="p-4 border border-border/50 rounded-xl bg-card">
                <h4 className="font-bold text-foreground mb-1">Invisible Alignment Options</h4>
                <p>Clear aligners are removable, allowing you to eat your favorite foods easily.</p>
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
            <h2 className="text-2xl font-bold mb-4">Book Your Alignment Consultation</h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">Receive a complete orthodontic analysis and 3D simulation from Dr. M. Raja Sekar.</p>
            <Link to="/book-appointment">
              <Button size="lg" variant="gradient">Request Appointment Now</Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileBar />
    </div>
  );
}
