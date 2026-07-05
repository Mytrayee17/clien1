import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StickyMobileBar from "@/components/StickyMobileBar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, GraduationCap, CheckCircle } from "lucide-react";

import img from "@/assets/img.jpg";
import doctor12 from "@/assets/doctor-12.jpeg";
import doctor22 from "@/assets/doctor-22.jpeg";
import doctor21 from "@/assets/doctor-21.jpg";
import dumImg from "@/assets/dum.jpeg";
import sucharithaImg from "@/assets/Generated Image September 03, 2025 - 10_24PM.jpeg";

export default function OurDoctors() {
  const doctors = [
    {
      name: "Prof. Dr. T. Kishore Babu",
      title: "Managing Director & Maxillofacial Surgeon",
      degrees: "M.D.S.",
      regNo: "DCI-A-11002",
      experience: "25+ Years Experience",
      specialization: "Oral & Maxillofacial Surgery, Dental Implants",
      bio: "Prof. Dr. T. Kishore Babu is a veteran oral surgeon and leading implantologist in Guntur, dedicating his career to reconstructive surgeries and complex dental rehabilitations.",
      image: img
    },
    {
      name: "Dr. T. Nalini Kishore",
      title: "Director & Anesthesiologist",
      degrees: "M.B.B.S, D.A",
      regNo: "APMC-A-32104",
      experience: "20+ Years Experience",
      specialization: "General Anesthesia & Sedation Dentistry",
      bio: "Dr. Nalini Kishore oversees anesthesiology at Navya's, ensuring safe, stress-free, and pain-free treatments for dental surgery patients.",
      image: doctor12
    },
    {
      name: "Dr. M. Naresh Chandra",
      title: "Superintendent & Cosmetic Dental Surgeon",
      degrees: "B.D.S.",
      regNo: "DCI-A-23456",
      experience: "15+ Years Experience",
      specialization: "General Dentistry, Cosmetic Smile Designing",
      bio: "Dr. Naresh Chandra is an expert cosmetic dental surgeon, specializing in dental veneers, teeth bleaching, and aesthetic restoration therapies.",
      image: doctor21
    },
    {
      name: "Prof. Dr. Ajay Reginald",
      title: "Oral Pathologist",
      degrees: "M.D.S.",
      regNo: "DCI-A-15498",
      experience: "20+ Years Experience",
      specialization: "Oral Pathology & Diagnostics",
      bio: "Prof. Dr. Ajay Reginald handles deep histopathological diagnostics and oral tissue pathology, guaranteeing scientific precision.",
      image: dumImg
    },
    {
      name: "Dr. M. Raja Sekar",
      title: "Senior Orthodontist",
      degrees: "M.D.S.",
      regNo: "DCI-A-87654",
      experience: "15+ Years Experience",
      specialization: "Orthodontics & Dentofacial Correction",
      bio: "Dr. Raja Sekar leads the teeth alignment and orthodontic corrections department, utilizing advanced invisible aligners and braces systems.",
      image: doctor22
    },
    {
      name: "Dr. Y. Sucharitha",
      title: "Root Canal Specialist",
      degrees: "B.D.S., P.G.C.E.",
      regNo: "DCI-A-41203",
      experience: "10+ Years Experience",
      specialization: "Advanced Rotary Root Canal Treatment (RCT)",
      bio: "Dr. Sucharitha is dedicated to single-sitting and micro-endodontic root canal treatments, providing quick and painless nerve relief.",
      image: sucharithaImg
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Best Dental Doctors in Guntur | Meet Our Specialists"
        description="Meet the top dental specialists and surgeons at Navya's International Dental Hospital, Guntur. Experts in Implants, Orthodontics, and Root Canals."
        schema={{
          "@context": "https://schema.org",
          "@type": "MedicalOrganization",
          "name": "Navya's International Dental Hospital - Specialists",
          "employee": doctors.map(d => ({
            "@type": "Dentist",
            "name": d.name,
            "jobTitle": d.title,
            "medicalSpecialty": d.specialization,
            "credentials": d.degrees
          }))
        }}
      />
      <Header />

      <main className="pb-24">
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-4">E-E-A-T Certified</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Meet Guntur's Leading <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Dental Specialists</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our dental surgeons hold advanced master's degrees (MDS) and are registered with the Dental Council of India (DCI), guaranteeing clinical excellence.
            </p>
          </div>
        </section>

        {/* Doctor Grid */}
        <section className="py-16 container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-elevated transition-all border-border/50 bg-card/85 backdrop-blur-sm flex flex-col justify-between">
                <div>
                  <div className="h-64 bg-secondary/30 flex items-center justify-center border-b border-border/30 overflow-hidden">
                    <img 
                      src={doctor.image} 
                      alt="Dental Doctor Profile" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start gap-4 mb-4">
                      <div>
                        <h2 className="text-xl font-bold text-primary">{doctor.name}</h2>
                        <p className="text-xs font-semibold text-accent mt-0.5">{doctor.title}</p>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4 text-xs">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <GraduationCap className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{doctor.degrees}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Award className="h-4 w-4 text-accent flex-shrink-0" />
                        <span>{doctor.specialization}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>Reg. No: <strong>{doctor.regNo}</strong></span>
                      </div>
                    </div>

                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                      {doctor.bio}
                    </p>
                  </CardContent>
                </div>
                <div className="p-6 pt-0">
                  <Link to="/book-appointment">
                    <Button variant="gradient" className="w-full text-xs">
                      Request Consultation with {doctor.name.split(" ").slice(-1)[0]}
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileBar />
    </div>
  );
}
