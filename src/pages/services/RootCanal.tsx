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

export default function RootCanal() {
  const faqs = [
    {
      q: "Is root canal treatment painful?",
      a: "No, root canal treatment is highly painless when performed using modern rotary endodontics and local anesthesia. It immediately resolves the active toothache."
    },
    {
      q: "What is a single-sitting root canal?",
      a: "In a single-sitting root canal, the entire infection cleaning, canal shaping, and filling are completed in one clinical visit of 45-60 minutes using advanced rotary tools."
    },
    {
      q: "What is the cost of root canal treatment in Guntur?",
      a: "Root canal treatment cost in Guntur starts from ₹3,500 to ₹7,000 depending on single/multi-sitting, laser disinfection usage, and crown requirements."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Root Canal Treatment in Guntur | Painless Laser RCT"
        description="Get painless root canal treatment in Guntur. Navya's Dental Hospital offers advanced single-sitting and laser RCT. Book your consultation today."
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "MedicalClinic",
              "name": "Navya's Root Canal Treatment Center",
              "description": "State-of-the-art painless single-sitting root canals using rotary endodontics in Guntur.",
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
            <Badge variant="secondary" className="mb-4">Endodontics</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Root Canal Treatment in Guntur
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Save your natural tooth with painless, single-sitting rotary and laser root canal treatments. Completed in under 60 minutes.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 container mx-auto px-4 max-w-4xl space-y-12">
          {/* H2: What is it */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-primary">What is Root Canal Treatment?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Root Canal Treatment (RCT) is an endodontic procedure used to save a tooth that is decayed, cracked, or infected. When the inner pulp of the tooth containing nerves and blood vessels becomes diseased, it must be removed. The pulp chamber is cleaned, disinfected using lasers, shaped, and hermetically sealed.
            </p>
          </div>

          {/* H2: Who needs it */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-primary">Who Needs Root Canal Treatment?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You may require an endodontic intervention if you notice:
            </p>
            <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" /> Severe toothache when chewing or biting
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" /> Extreme hot/cold temperature sensitivity
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" /> Dark discoloration of the tooth
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" /> Swelling and tenderness in nearby gums
              </li>
            </ul>
          </div>

          {/* Doctor Intro */}
          <Card className="border border-primary/20 bg-secondary/10 p-6 rounded-2xl">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary text-xl">YS</div>
              <div className="text-center md:text-left">
                <h3 className="font-bold text-lg">Lead Endodontist: Dr. Y. Sucharitha (BDS, P.G.C.E)</h3>
                <p className="text-xs text-muted-foreground mt-1">DCI Reg. No: DCI-A-41203 | 10+ Years Experience</p>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  Specializing in painless single-sitting rotary and laser-assisted root canals, Dr. Sucharitha has saved thousands of teeth with high success rates.
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
                  <h3 className="font-bold">Anesthetic Numbs & Access Opening</h3>
                  <p className="text-sm text-muted-foreground">Local anesthesia is administered for absolute pain relief. A tiny access opening is created in the tooth crown.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="font-bold">Rotary Cleaning & Laser Disinfection</h3>
                  <p className="text-sm text-muted-foreground">Rotary files clean out the infected tissue. An advanced dental laser disinfects root canals targeting hidden pathogens.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="font-bold">Sealing & Dental Crown Placement</h3>
                  <p className="text-sm text-muted-foreground">Canals are packed with gutta-percha sealant. The tooth is built up and capped with a zirconium or ceramic crown to restore strength.</p>
                </div>
              </div>
            </div>
          </div>

          {/* H2: Cost table */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-primary">Root Canal Treatment Costs in Guntur</h2>
            <div className="mb-4 p-4 rounded-lg bg-green-50 border border-green-200 text-green-800 text-sm">
              ✨ <strong>Government Regulated Rates</strong>: At Navya's Dental Hospital, root canal procedures are performed in compliance with government-subsidized price standards, offering patients high-performance treatment at highly affordable government prices.
            </div>
            <div className="border border-border rounded-lg overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-secondary/40 border-b border-border">
                    <th className="p-3 font-bold">Procedure Type</th>
                    <th className="p-3 font-bold">Estimated Cost (INR)</th>
                    <th className="p-3 font-bold">Recommended For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-3">Multi-Sitting RCT</td>
                    <td className="p-3">₹3,500 - ₹4,500</td>
                    <td className="p-3">Severe active infection / swelling</td>
                  </tr>
                  <tr>
                    <td className="p-3">Advanced Single-Sitting RCT</td>
                    <td className="p-3">₹5,000 - ₹6,000</td>
                    <td className="p-3">General tooth decay, quick relief</td>
                  </tr>
                  <tr>
                    <td className="p-3">Laser Sterilized RCT</td>
                    <td className="p-3">₹6,500 - ₹7,500</td>
                    <td className="p-3">Completely sterilized root canal sealing</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* H2: Benefits */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-primary">Benefits of Root Canal Treatments</h2>
            <div className="grid md:grid-cols-2 gap-4 text-muted-foreground text-sm">
              <div className="p-4 border border-border/50 rounded-xl bg-card">
                <h3 className="font-bold text-foreground mb-1">Immediate Pain Relief</h3>
                <p>Removes infected nerves and biological toxins, providing immediate relief.</p>
              </div>
              <div className="p-4 border border-border/50 rounded-xl bg-card">
                <h3 className="font-bold text-foreground mb-1">Preserves Natural Tooth</h3>
                <p>Avoids extraction, preventing neighboring teeth shifting and jawbone degeneration.</p>
              </div>
              <div className="p-4 border border-border/50 rounded-xl bg-card">
                <h3 className="font-bold text-foreground mb-1">Aesthetic Crown Integration</h3>
                <p>Capping restores original tooth color, morphology, and high-performance chewing.</p>
              </div>
              <div className="p-4 border border-border/50 rounded-xl bg-card">
                <h3 className="font-bold text-foreground mb-1">Cost-Effective</h3>
                <p>Much less expensive than extracting the tooth and replacing it with an artificial bridge or implant.</p>
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
            <h2 className="text-2xl font-bold mb-4">Book Your Pain-Free RCT Consultation</h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">Get immediate relief and save your tooth. Consult Dr. Y. Sucharitha today.</p>
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
