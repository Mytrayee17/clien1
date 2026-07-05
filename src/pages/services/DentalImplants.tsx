import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StickyMobileBar from "@/components/StickyMobileBar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle2, Award, Calendar, DollarSign } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function DentalImplants() {
  const faqs = [
    {
      q: "How long do dental implants last?",
      a: "With good oral hygiene and regular dental checkups, titanium dental implants can last a lifetime. The crown placed on top typically lasts 10 to 15 years before minor wear might require replacement."
    },
    {
      q: "Is dental implant surgery painful?",
      a: "No, dental implant surgery is performed under local anesthesia, making it virtually painless. Post-procedure discomfort is minimal and easily managed with prescribed over-the-counter pain medication."
    },
    {
      q: "What is the cost of dental implants in Guntur?",
      a: "The cost of dental implants in Guntur starts from ₹20,000 to ₹45,000 per implant depending on the manufacturer brand (e.g. Straumann, Osstem) and crown type (ceramic, zirconia)."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Dental Implants in Guntur | Navya's International Dental Hospital"
        description="Looking for dental implants in Guntur? Navya's Dental Hospital offers permanent, painless implants at affordable costs. Book your consultation today."
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "MedicalClinic",
              "name": "Navya's Dental Implants Guntur Center",
              "description": "World-class single tooth implants and full mouth rehabilitation with titanium implants in Guntur.",
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
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-4">Specialized Prosthodontics</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Dental Implants in Guntur
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Restore your smile and bite with high-quality titanium dental implants. Trusted by over 1,000 patients in Guntur for permanent teeth replacement.
            </p>
          </div>
        </section>

        {/* Content Flow */}
        <section className="py-16 container mx-auto px-4 max-w-4xl space-y-12">
          {/* H2: What is it */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-primary">What is a Dental Implant?</h2>
            <p className="text-muted-foreground leading-relaxed">
              A dental implant is a titanium post surgically positioned into the jawbone beneath your gums. Once in place, it allows your dentist to mount replacement teeth or a bridge into that area. Because implants fuse to your jawbone, they provide stable support for artificial teeth, making eating and speaking feel natural.
            </p>
          </div>

          {/* H2: Who needs it */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-primary">Who Needs Dental Implants?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have lost one or multiple teeth due to decay, root fracture, injury, or periodontal disease, dental implants are the most natural-looking and durable option to restore oral health. You are a candidate if you have:
            </p>
            <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" /> One or more missing teeth
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" /> Adequate jawbone density for fusion
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" /> Healthy oral tissues and gums
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" /> Dislike of wearing dentures
              </li>
            </ul>
          </div>

          {/* Doctor Intro Block */}
          <Card className="border border-primary/20 bg-secondary/10 p-6 rounded-2xl">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary text-xl">KB</div>
              <div className="text-center md:text-left">
                <h3 className="font-bold text-lg">Lead Surgeon: Prof. Dr. T. Kishore Babu (MDS)</h3>
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
                  <h3 className="font-bold">Comprehensive Evaluation</h3>
                  <p className="text-sm text-muted-foreground">We conduct a full CBCT scan and 3D dental mapping to analyze bone volume and plan optimal placement angles.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="font-bold">Implant Placement</h3>
                  <p className="text-sm text-muted-foreground">Under local anesthesia, the titanium post is inserted into the bone. The gum is closed and allowed to heal for 3-4 months.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="font-bold">Abutment & Crown Fitting</h3>
                  <p className="text-sm text-muted-foreground">Once bone integration (osseointegration) is complete, an abutment is placed, followed by a custom ceramic or zirconia crown.</p>
                </div>
              </div>
            </div>
          </div>

          {/* H2: Cost in Guntur/India */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-primary">Cost of Dental Implants in Guntur</h2>
            <div className="mb-4 p-4 rounded-lg bg-green-50 border border-green-200 text-green-800 text-sm">
              ✨ <strong>Government Regulated Prices</strong>: At Navya's Dental Hospital, our treatment costs are aligned with standard government-regulated price models (e.g. CGHS/state approved tariffs) to ensure high-quality care is accessible at affordable government rates.
            </div>
            <p className="text-muted-foreground mb-4 text-sm">
              Below is a cost table of standard implants available at Navya's Dental Hospital (regulated government prices):
            </p>
            <div className="border border-border rounded-lg overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-secondary/40 border-b border-border">
                    <th className="p-3 font-bold">Implant Type / Brand</th>
                    <th className="p-3 font-bold">Estimated Cost (INR)</th>
                    <th className="p-3 font-bold">Warranty Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-3">Standard Korean Implant (Osstem)</td>
                    <td className="p-3">₹20,000 - ₹28,000</td>
                    <td className="p-3">10 Years Warranty</td>
                  </tr>
                  <tr>
                    <td className="p-3">Premium Swedish Implant (Nobel Biocare)</td>
                    <td className="p-3">₹32,000 - ₹40,000</td>
                    <td className="p-3">Lifetime Warranty</td>
                  </tr>
                  <tr>
                    <td className="p-3">Elite Swiss Implant (Straumann)</td>
                    <td className="p-3">₹42,000 - ₹50,000</td>
                    <td className="p-3">Lifetime Warranty</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* H2: Benefits */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-primary">Benefits of Dental Implants</h2>
            <div className="grid md:grid-cols-2 gap-4 text-muted-foreground text-sm">
              <div className="p-4 border border-border/50 rounded-xl bg-card">
                <h3 className="font-bold text-foreground mb-1">Looks and Feels Natural</h3>
                <p>Designed to fuse with bone, implants look and behave like your natural teeth.</p>
              </div>
              <div className="p-4 border border-border/50 rounded-xl bg-card">
                <h3 className="font-bold text-foreground mb-1">Prevents Bone Loss</h3>
                <p>Stimulates the jawbone structure, preventing typical facial sagging from tooth loss.</p>
              </div>
              <div className="p-4 border border-border/50 rounded-xl bg-card">
                <h3 className="font-bold text-foreground mb-1">No Damage to Adjacent Teeth</h3>
                <p>Unlike dental bridges, implants do not require grinding down neighboring healthy teeth.</p>
              </div>
              <div className="p-4 border border-border/50 rounded-xl bg-card">
                <h3 className="font-bold text-foreground mb-1">Durable & Long-lasting</h3>
                <p>Implants are constructed with bio-compatible titanium and boast a 98% success rate.</p>
              </div>
            </div>
          </div>

          {/* H2: FAQs (Accordion) */}
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
            <h2 className="text-2xl font-bold mb-4">Book a Dental Implant Consultation</h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">Get mapped for a digital scan and receive a customized treatment plan from Prof. Dr. T. Kishore Babu.</p>
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
