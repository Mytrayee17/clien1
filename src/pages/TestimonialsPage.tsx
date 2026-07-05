import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StickyMobileBar from "@/components/StickyMobileBar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, MessageSquare } from "lucide-react";

export default function TestimonialsPage() {
  const reviews = [
    {
      name: "Ravi Kumar Guntur",
      rating: 5,
      date: "1 week ago",
      text: "Navya's Dental Hospital is definitely the best in Guntur. I had my root canal done here and it was completely pain-free. Dr. Chowdary and the team are very professional."
    },
    {
      name: "M. Anuradha",
      rating: 5,
      date: "2 weeks ago",
      text: "The dental implant procedure was extremely clean, professional, and well-explained. High quality sterilization standards, I saw them open sterilized pouches directly in front of me."
    },
    {
      name: "Suresh Babu",
      rating: 5,
      date: "1 month ago",
      text: "Very satisfied with the orthodontic correction for my daughter. Dr. Navya explained the self-ligating braces and clear aligner options very patiently. Excellent outcome!"
    },
    {
      name: "Lakshmi Prasanna",
      rating: 5,
      date: "2 months ago",
      text: "Highly recommended for kids dentistry. The doctors are very friendly and patient. The clinic environment is clean and child-friendly. Outstanding service!"
    },
    {
      name: "J. Srinivasa Rao",
      rating: 5,
      date: "3 months ago",
      text: "Completed my full mouth rehabilitation here. Outstanding results. Excellent cosmetic dentistry specialist in Guntur."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Patient Reviews & Testimonials | Navya's Dental Hospital Guntur"
        description="Read what our satisfied patients say about their smile transformations, dental implants, and painless root canals at Navya's Dental Hospital in Guntur."
        schema={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Navya's Dental Hospital Patient Services",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "125"
          },
          "review": reviews.map(r => ({
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": r.name
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": r.rating.toString()
            },
            "reviewBody": r.text
          }))
        }}
      />
      <Header />

      <main className="pb-24">
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-4">Real Patient Stories</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              What Our Patients Say About <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Navya's Dental Care</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              With over 4.9/5 stars across Google Business Profile, we are trusted by thousands of families in Guntur for standard dental interventions.
            </p>
          </div>
        </section>

        {/* Aggregated Rating Stats */}
        <section className="py-12 container mx-auto px-4 max-w-lg text-center">
          <Card className="border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 shadow-md">
            <CardContent className="p-8">
              <div className="flex justify-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <h2 className="text-4xl font-black text-foreground">4.9 / 5.0</h2>
              <p className="text-muted-foreground text-sm mt-1">Average rating based on 120+ verified Google Reviews</p>
            </CardContent>
          </Card>
        </section>

        {/* Testimonials List */}
        <section className="py-12 container mx-auto px-4 max-w-4xl">
          <div className="space-y-6">
            {reviews.map((rev, index) => (
              <Card key={index} className="border-border/50 bg-card hover:border-primary/20 transition-colors shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {rev.name[0]}
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground text-sm">{rev.name}</h3>
                        <div className="flex items-center gap-1 mt-0.5">
                          {[1, 2, 3, 4, 5].map(i => (
                            <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">{rev.date}</span>
                  </div>
                  <p className="text-muted-foreground text-sm italic leading-relaxed">
                    "{rev.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold mb-4">Ready to Schedule Your Appointment?</h3>
            <p className="text-muted-foreground mb-6">Experience pain-free dentistry at Guntur's trusted clinic.</p>
            <Link to="/book-appointment">
              <Button variant="gradient" size="lg">Book a Free Consultation</Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileBar />
    </div>
  );
}
