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

export default function KidsDentistry() {
  const faqs = [
    {
      q: "At what age should a child first visit the dentist?",
      a: "The American Academy of Pediatric Dentistry recommends scheduling a child's first dental screening by their first birthday or when their first baby tooth emerges."
    },
    {
      q: "What is fluoride therapy?",
      a: "Fluoride therapy is a safe, painless topical application of fluoride varnish onto baby teeth. It strengthens enamel and provides active protection against cavities."
    },
    {
      q: "What is the cost of pediatric dental care in Guntur?",
      a: "Standard pediatric services start from ₹800 for consultations, with fluoride treatments costing ₹1,500 to ₹2,500 and tooth sealants priced around ₹1,200 per tooth."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Kids Dentistry in Guntur | Friendly Pediatric Dentist"
        description="Looking for a pediatric dentist in Guntur? Navya's Dental Hospital offers gentle, child-friendly dental care, sealants, and fluoride therapy. Book now."
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "MedicalClinic",
              "name": "Navya's Kids Dentistry Center",
              "description": "Child-friendly dental care, cavity prevention, sealants, and pain-free treatments in Guntur.",
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
            <Badge variant="secondary" className="mb-4">Pediatric Dentistry</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Kids Dentistry in Guntur
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Gentle, friendly, and painless dental care for children in a welcoming environment. Prevent cavities and establish healthy dental habits early.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 container mx-auto px-4 max-w-4xl space-y-12">
          {/* H2: What is it */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-primary">What is Pediatric Dentistry?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Pediatric dentistry focuses on the oral health of children from infancy through their teenage years. Because children's teeth are still growing, they require a gentle, specialized clinical approach. We emphasize preventative treatments like tooth sealants, fluoride therapy, and early orthodontic guidance to prevent cavities and align emerging teeth.
            </p>
          </div>

          {/* H2: Who needs it */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-primary">When Should Children Visit the Dentist?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Regular pediatric screenings are vital for kids who experience:
            </p>
            <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" /> Tooth sensitivity or visible signs of cavities
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" /> Crooked or misaligned emerging adult teeth
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" /> Premature loss of primary baby teeth
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" /> Habitual thumb-sucking or tongue-thrusting
              </li>
            </ul>
          </div>

          {/* Doctor Intro */}
          <Card className="border border-primary/20 bg-secondary/10 p-6 rounded-2xl">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary text-xl">NC</div>
              <div className="text-center md:text-left">
                <h4 className="font-bold text-lg">Lead Pediatric Dentist: Dr. M. Naresh Chandra (BDS)</h4>
                <p className="text-xs text-muted-foreground mt-1">DCI Reg. No: DCI-A-23456 | 15+ Years Experience</p>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  Dr. Naresh Chandra is an expert in gentle pediatric treatments, behavior management, and interceptive dental alignment correction for children.
                </p>
              </div>
            </div>
          </Card>

          {/* H2: Procedure steps */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-primary">Our Pediatric Services</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h4 className="font-bold">Cavity Risk Evaluation & Cleanings</h4>
                  <p className="text-sm text-muted-foreground">We gently clean baby teeth, polish margins, and evaluate active cavity risk profiles.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h4 className="font-bold">Fluoride Varnishing & Pit Sealants</h4>
                  <p className="text-sm text-muted-foreground">Apply thin flowable plastic sealants over deep grooves in molar teeth to lock out bacterial decay.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h4 className="font-bold">Habit Breaking Appliances</h4>
                  <p className="text-sm text-muted-foreground">Custom mouthguards or orthodontic appliances are fitted to stop thumb-sucking and guide jaw development.</p>
                </div>
              </div>
            </div>
          </div>

          {/* H2: Cost table */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-primary">Kids Dentistry Costs in Guntur</h2>
            <div className="mb-4 p-4 rounded-lg bg-green-50 border border-green-200 text-green-800 text-sm">
              ✨ <strong>Government Regulated Subsidies</strong>: Pediatric preventive services, fluoride therapies, and pit sealants are offered at government-regulated rates to support childhood dental health affordably.
            </div>
            <div className="border border-border rounded-lg overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-secondary/40 border-b border-border">
                    <th className="p-3 font-bold">Treatment Option</th>
                    <th className="p-3 font-bold">Estimated Cost (INR)</th>
                    <th className="p-3 font-bold">Procedure Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-3">Comprehensive Dental Screening</td>
                    <td className="p-3">₹500 - ₹800</td>
                    <td className="p-3">Clinical exam + diet analysis</td>
                  </tr>
                  <tr>
                    <td className="p-3">Dental Pit and Fissure Sealant</td>
                    <td className="p-3">₹1,000 - ₹1,500 / tooth</td>
                    <td className="p-3">Prevents food trapping in permanent molars</td>
                  </tr>
                  <tr>
                    <td className="p-3">Topical Fluoride Therapy</td>
                    <td className="p-3">₹1,500 - ₹2,500</td>
                    <td className="p-3">Full mouth acid-resistance varnishing</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* H2: Benefits */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-primary">Benefits of Pediatric Interventions</h2>
            <div className="grid md:grid-cols-2 gap-4 text-muted-foreground text-sm">
              <div className="p-4 border border-border/50 rounded-xl bg-card">
                <h4 className="font-bold text-foreground mb-1">Guarantees Cavity Protection</h4>
                <p>Pit sealants have been clinically proven to reduce molar cavities by up to 80%.</p>
              </div>
              <div className="p-4 border border-border/50 rounded-xl bg-card">
                <h4 className="font-bold text-foreground mb-1">Guides Straight Teeth</h4>
                <p>Early space maintainers ensure adult teeth emerge in correct, aligned spacing.</p>
              </div>
              <div className="p-4 border border-border/50 rounded-xl bg-card">
                <h4 className="font-bold text-foreground mb-1">Builds Positive Habits</h4>
                <p>A fun, stress-free clinical visit eliminates dental anxiety for future years.</p>
              </div>
              <div className="p-4 border border-border/50 rounded-xl bg-card">
                <h4 className="font-bold text-foreground mb-1">Painless Treatments</h4>
                <p>We use topical numbing gels so children feel absolutely zero needle discomfort.</p>
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
            <h2 className="text-2xl font-bold mb-4">Book a Pediatric Dental Consultation</h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">Help your child achieve a healthy, decay-free smile. Consult Dr. M. Naresh Chandra today.</p>
            <Link to="/book-appointment">
              <Button size="lg" variant="gradient">Book Appointment Now</Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileBar />
    </div>
  );
}
