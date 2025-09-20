import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Mail, Facebook, Instagram, Youtube, Award } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <footer className="bg-dark-accent text-dark-accent-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 md:gap-8">
          {/* Hospital Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/lovable-uploads/logo.png" alt="NAVYA'S Dental Hospital" className="h-10 md:h-12 w-auto" loading="lazy" />
            </div>
            
            <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
              Kondaiah Chowdary Memorial - NAVYA'S INTERNATIONAL DENTAL HOSPITAL has been 
              serving the Guntur community for over 25 years with world-class dental care, 
              advanced technology, and compassionate service.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <strong>Branch :</strong> A.C. College Main Road, Between Canara Bank & Suzuki Show Room, 
                  Guntur - 522002
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <div className="text-sm text-gray-300 whitespace-normal break-words">
                  <a href="tel:08632337777" className="hover:text-white transition-colors">0863-2235113/12</a>
                  <span className="mx-1">|</span>
                  <a href="tel:9100078787" className="hover:text-white transition-colors">9100831618</a>
                </div>
              </div>

              
              
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-accent" />
                <div className="text-sm text-gray-300">
                  Monday - Saturday: 10:30 AM - 7:30 PM | Sunday Holiday
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <div className="space-y-3">
              <button onClick={() => scrollToSection('home')} className="block text-gray-300 hover:text-white transition-colors text-sm">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="block text-gray-300 hover:text-white transition-colors text-sm">
                Our Services
              </button>
              <button onClick={() => scrollToSection('team')} className="block text-gray-300 hover:text-white transition-colors text-sm">
                Our Team
              </button>
              <button onClick={() => scrollToSection('gallery')} className="block text-gray-300 hover:text-white transition-colors text-sm">
                Gallery
              </button>
              <button onClick={() => scrollToSection('appointment')} className="block text-gray-300 hover:text-white transition-colors text-sm">
                Book Appointment
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Our Services</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div>General Dentistry</div>
              <div>Cosmetic Dentistry</div>
              <div>Root Canal Treatment</div>
              <div>Dental Implants</div>
              <div>Orthodontics</div>
              <div>Maxillofacial Surgery</div>
              <div>Pediatric Dentistry</div>
              <div>Periodontics</div>
            </div>
          </div>
        </div>

        {/* Accreditations & Emergency Contact */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            {/* Emergency Contact */}
            <Card id="emergency-contact" className="bg-red-600/20 border-red-500/30 px-4 py-2">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-red-400" />
                <span className="text-red-100">Emergency: </span>
                <a href="tel:9100831618" className="text-white font-medium hover:text-red-200">
                  9100831618
                </a>
              </div>
            </Card>

            {/* Accreditations */}
            <div className="flex items-center gap-3">
              <Award className="h-5 w-5 text-accent" />
              <div className="text-xs text-gray-300">
                <div>Certified by</div>
                <div>Dental Council of India</div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <div>
              {currentYear} Kondaiah Chowdary Memorial - NAVYA'S International Dental Hospital. 
              All rights reserved.
            </div>
            <div className="flex gap-6">
              <button className="hover:text-white transition-colors">Privacy Policy</button>
              <button className="hover:text-white transition-colors">Terms of Service</button>
              <button className="hover:text-white transition-colors">Disclaimer</button>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-800 text-xs text-gray-500">
            <p>
              NAVYA'S International Dental Hospital is committed to providing exceptional dental care 
              with the highest standards of safety, sterilization, and patient comfort.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;