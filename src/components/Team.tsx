import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import doctor1 from "@/assets/doctor-1.jpg";
import img from "@/assets/img.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor21 from "@/assets/doctor-21.jpg";
const Team = () => {
  const doctors = [{
    name: "Prof. Dr. Y. Kishore Babu",
    role: "Managing Director & Maxillofacial Surgeon",
    image: img,
    specialties: ["Maxillofacial Surgery", "Implantology"],
    education: "M.D.S."
  }, {
    name: "Dr M Naresh Chandra",
    role: "Cosmetic Dental Surgeon",
    image: doctor21,
    specialties: ["General Dentistry", "Cosmetic Dentistry"],
    education: "B.D.S"
  }, {
    name: "Dr. Sunil Surapaneni",
    role: "Periodontist",
    image: doctor1,
    specialties: ["Periodontics", "Gum Surgery"],
    education: "M.D.S."
  }, {
    name: "Prof. Dr. A. Ravi Kiran",
    role: "Oral Medicine & Radiology",
    image: doctor2,
    specialties: ["Oral Medicine", "Radiology"],
    education: "M.D.S."
  }, {
    name: "Prof. Dr. Ajay Reginald",
    role: "Oral Pathologist",
    image: doctor1,
    specialties: ["Oral Pathology", "Diagnostics"],
    education: "M.D.S."
  }, {
    name: "Dr. M. Raja Sekar",
    role: "Orthodontist",
    image: doctor2,
    specialties: ["Orthodontics", "Dento Facial Correction"],
    education: "M.D.S."
  }, {
    name: "Dr. Srikanth",
    role: "Cleft Lip & Palate Surgeon",
    image: doctor1,
    specialties: ["Cleft Surgery", "Reconstructive Surgery"],
    education: "M.D.S."
  }, {
    name: "Ass. Prof. Dr. Ch. Mahesh",
    role: "Pediatric Dentist",
    image: doctor2,
    specialties: ["Pediatric Dentistry", "Child Care"],
    education: "M.S."
  }];
  const scrollToAppointment = () => {
    const element = document.getElementById('appointment');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="team" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Meet Our Expert
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Dental Team
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Our highly qualified specialists bring decades of combined experience 
            and cutting-edge expertise to provide you with the best dental care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {doctors.map((doctor, index) => <Card key={index} className="group overflow-hidden hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border-0 bg-card/80 backdrop-blur-sm">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative overflow-hidden bg-white h-56 sm:h-64 md:h-72 cursor-zoom-in">
                    <img src={doctor.image} alt={doctor.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-[90vw] sm:max-w-2xl md:max-w-4xl p-2 sm:p-4">
                  <img src={doctor.image} alt={doctor.name} className="w-full h-auto max-h-[80vh] object-contain" />
                </DialogContent>
              </Dialog>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{doctor.name}</h3>
                <p className="text-primary font-medium mb-4">{doctor.role}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <GraduationCap className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{doctor.education}</span>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Award className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div className="flex flex-wrap gap-1">
                      {doctor.specialties.map((specialty, idx) => <Badge key={idx} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>)}
                    </div>
                  </div>
                </div>

                <Button onClick={scrollToAppointment} variant="outline" size="sm" className="w-full border-primary bg-sky-600 hover:bg-sky-500 text-slate-50">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Consultation
                </Button>
              </CardContent>
            </Card>)}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-4xl mx-auto shadow-card">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Why Choose Our Team?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-muted-foreground">Years Combined Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Surgeries Performed Monthly</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Patient Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Team;