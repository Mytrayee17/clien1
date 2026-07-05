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

export default function WisdomTooth() {
  const faqs = [
    {
      q: "What is the cost of wisdom tooth removal in Guntur?",
      a: "The cost of wisdom tooth extraction in Guntur ranges from ₹3,000 to ₹7,500 depending on complexity, inclination angle, and bone involvement."
    },
    {
      q: "How long is the recovery after wisdom tooth extraction?",
      a: "Initial healing takes about 3 to 5 days. Complete jawbone healing can take 3 to 4 weeks. Following post-op guidelines ensures a smooth recovery."
    },
    {
      q: "Is wisdom tooth extraction painful?",
      a: "No, the procedure is completed entirely under local anesthesia. You might feel light pressure but zero pain. Mild soreness post-extraction is managed with painkillers."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Wisdom Tooth Removal in Guntur | Painless Extractions"
        description="Looking for wisdom tooth extraction in Guntur? Navya's Dental Hospital offers expert, painless wisdom tooth removal. Book your consultation today."
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "MedicalClinic",
              "name": "Navya's Wisdom Tooth Surgical Center",
              "description": "Painless extraction of impacted wisdom teeth using advanced surgical techniques in Guntur.",
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
            <Badge variant="secondary" className="mb-4">Oral Surgery</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Wisdom Tooth Removal in Guntur
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get painless surgical extraction of impacted wisdom teeth. Rest secure with certified maxillofacial surgeons and sterile clinical setups.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 container mx-auto px-4 max-w-4xl space-y-12">
          {/* H2: What is it */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-primary">What is Wisdom Tooth Removal?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Wisdom tooth removal is a minor oral surgical procedure to extract one or more wisdom teeth—the four permanent adult teeth located at the back corners of your mouth. If a wisdom tooth doesn't have room to grow (impacted wisdom tooth), it can result in severe pain, infection, or damage to neighboring teeth, requiring extraction.
            </p>
          </div>

          {/* H2: Who needs it */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-primary">When is Wisdom Tooth Extraction Necessary?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Extraction is recommended when wisdom teeth cause clinical complications, such as:
            </p>
            <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" /> Wisdom teeth remain completely hidden under gums (impacted)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" /> Partially emerged teeth causing food traps and decay
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" /> Repeated gum infections (pericoronitis)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" /> Damage to adjacent teeth due to crowding pressure
              </li>
            </ul>
          </div>

          {/* Doctor Intro */}
          <Card className="border border-primary/20 bg-secondary/10 p-6 rounded-2xl">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary text-xl">KB</div>
              <div className="text-center md:text-left">
                <h3 className="font-bold text-lg">Lead Oral Surgeon: Prof. Dr. T. Kishore Babu (MDS)</h3>
                <p className="text-xs text-muted-foreground mt-1">DCI Reg. No: DCI-A-11002 | 25+ Years Experience</p>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  Prof. Dr. T. Kishore Babu is a highly experienced oral surgeon and leading implantologist in Guntur, dedicated to reconstructive surgeries and implants.
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
                  <h3 className="font-bold">X-Ray / OPG Mapping</h3>
                  <p className="text-sm text-muted-foreground">We capture OPG dental scans to locate the roots relative to mandibular nerves for surgical safety.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="font-bold">Local Anesthesia & Extraction</h3>
                  <p className="text-sm text-muted-foreground">The treatment site is numbed. Impacted teeth are gently sectioned and extracted with zero discomfort.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="font-bold">Suturing & Post-Op Recovery</h3>
                  <p className="text-sm text-muted-foreground">Sutures are placed to aid healing. Gauze is applied and detailed recovery guidelines are provided.</p>
                </div>
              </div>
            </div>
          </div>

          {/* H2: Cost table */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-primary">Wisdom Tooth Extraction Cost in Guntur</h2>
            <div className="mb-4 p-4 rounded-lg bg-green-50 border border-green-200 text-green-800 text-sm">
              ✨ <strong>Government Tariffs Regulated</strong>: Wisdom tooth surgical extractions are priced in compliance with standard government-subsidized price models (e.g. CGHS/state approved pricing models) to keep surgical interventions affordable.
            </div>
            <div className="border border-border rounded-lg overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-secondary/40 border-b border-border">
                    <th className="p-3 font-bold">Extraction Category</th>
                    <th className="p-3 font-bold">Estimated Cost (INR)</th>
                    <th className="p-3 font-bold">Complexity Level</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-3">Simple Extraction (Non-Impacted)</td>
                    <td className="p-3">₹2,000 - ₹3,000</td>
                    <td className="p-3">Low (Fully erupted tooth)</td>
                  </tr>
                  <tr>
                    <td className="p-3">Surgical Extraction (Impacted Tooth)</td>
                    <td className="p-3">₹4,000 - ₹5,500</td>
                    <td className="p-3">Medium (Bone covered crown)</td>
                  </tr>
                  <tr>
                    <td className="p-3">Complex Angular Impaction Extraction</td>
                    <td className="p-3">₹6,000 - ₹7,500</td>
                    <td className="p-3">High (Inclined roots / nerve proximity)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* H2: Benefits */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-primary">Benefits of Removing Impacted Wisdom Teeth</h2>
            <div className="grid md:grid-cols-2 gap-4 text-muted-foreground text-sm">
              <div className="p-4 border border-border/50 rounded-xl bg-card">
                <h3 className="font-bold text-foreground mb-1">Stops Pain & Pressure</h3>
                <p>Relieves constant pressure and swelling at the back of the jaw structure.</p>
              </div>
              <div className="p-4 border border-border/50 rounded-xl bg-card">
                <h3 className="font-bold text-foreground mb-1">Protects Neighboring Molar</h3>
                <p>Prevents food traps and cavities in adjacent second molars.</p>
              </div>
              <div className="p-4 border border-border/50 rounded-xl bg-card">
                <h3 className="font-bold text-foreground mb-1">Avoids Cyst Formations</h3>
                <p>Removes the risk of follicular cysts developing around hidden crowns.</p>
              </div>
              <div className="p-4 border border-border/50 rounded-xl bg-card">
                <h3 className="font-bold text-foreground mb-1">Prevents Gum Infection</h3>
                <p>Stops painful swelling (pericoronitis) caused by bacteria trapped under gum flaps.</p>
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
            <h2 className="text-2xl font-bold mb-4">Book Your Painless Extraction</h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">Get immediate relief from tooth pressure. Consult Prof. Dr. T. Kishore Babu today.</p>
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
