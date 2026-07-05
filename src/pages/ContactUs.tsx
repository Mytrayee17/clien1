import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StickyMobileBar from "@/components/StickyMobileBar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, MessageSquare } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Contact Navya's Dental Hospital Guntur | Phone, Map & Address"
        description="Contact Navya's International Dental Hospital in Guntur. Find our location address, clinic opening hours, call numbers, and Google Map directions."
        schema={{
          "@context": "https://schema.org",
          "@type": "Dentist",
          "name": "Navya's International Dental Hospital",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "A.C. College Main Road",
            "addressLocality": "Guntur",
            "postalCode": "522002",
            "addressRegion": "Andhra Pradesh",
            "addressCountry": "IN"
          },
          "telephone": "9100831618"
        }}
      />
      <Header />

      <main className="pb-24">
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-4">Get In Touch</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Contact Navya's Dental Hospital <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">We are here to help</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about orthodontic cost, implants, or emergency tooth pain? Reach out to our front desk team in Guntur.
            </p>
          </div>
        </section>

        {/* Contact info + Map */}
        <section className="py-16 container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Details */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Clinic Details</h2>
              
              <div className="flex gap-4 p-5 rounded-xl border border-border/50 bg-card">
                <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Our Address</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A.C. College Main Road,<br />
                    Between Canara Bank & Suzuki Show Room,<br />
                    Guntur, Andhra Pradesh - 522002
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-xl border border-border/50 bg-card">
                <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Phone Numbers</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>Main Line: <a href="tel:08632235113" className="text-primary hover:underline font-semibold">0863-2235113</a></p>
                    <p>Direct Line: <a href="tel:9100831618" className="text-primary hover:underline font-semibold">9100831618</a></p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-xl border border-border/50 bg-card">
                <Clock className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Clinic Timings</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Monday - Saturday: 10:30 AM - 7:30 PM <br />
                    <span className="text-red-500 font-bold">Sunday Holiday</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Link to="/book-appointment" className="flex-1">
                  <Button variant="gradient" className="w-full py-6 text-md font-semibold">
                    Book Free Consultation
                  </Button>
                </Link>
                <a 
                  href="https://wa.me/919100831618?text=Hi,%20I'd%20like%20to%20enquire%20about%20dental%20treatments." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button variant="outline" className="w-full py-6 text-md font-semibold border-green-500 text-green-600 hover:bg-green-50">
                    <MessageSquare className="h-4 w-4 mr-2" /> WhatsApp Us
                  </Button>
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-border shadow-lg bg-secondary/20 h-[450px]">
              <iframe
                title="Navya's Dental Hospital Guntur Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x3a4a75363ec94821%3A0xe510f2df95e4e7e6!2sNavya&#39;s%20Dental%20Hospital!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileBar />
    </div>
  );
}
