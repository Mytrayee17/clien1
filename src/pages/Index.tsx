import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Gallery from "@/components/Gallery";
import AppointmentForm from "@/components/AppointmentForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Best Dental Doctors in Guntur | Painless Root Canal Treatments | NAVYA'S Dental"
        description="Looking for the best dental clinic in Guntur? We offer expert care, painless root canals, dental implants, and cosmetic dentistry. Book your appointment today."
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Dentist",
              "name": "Kondabolu Chowdary Memorial NAVYA'S INTERNATIONAL DENTAL HOSPITAL",
              "description": "World-class dental care in Guntur.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "A.C. College Main Road",
                "addressLocality": "Guntur",
                "postalCode": "522002",
                "addressRegion": "Andhra Pradesh",
                "addressCountry": "IN"
              },
              "telephone": ["0863-2235113", "9100831618"],
              "url": "https://www.navyasinternationaldentalhospital.in"
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Who are the best dental doctors in Guntur?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "NAVYA'S International Dental Hospital in Guntur houses top specialists with over 25 years of experience in advanced dentistry, implants, and painless root canal treatments."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Where can I get painless root canal treatment in Guntur?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "NAVYA'S Dental Hospital uses advanced rotary endodontics and laser technology to perform single-sitting, pain-free root canals in Guntur."
                  }
                }
              ]
            }
          ]
        }}
      />
      <Header />
      <Hero />
      <TrustBadges />
      <Services />
      <Team />
      <Gallery />
      <AppointmentForm />
      <Footer />
    </div>
  );
};

export default Index;
