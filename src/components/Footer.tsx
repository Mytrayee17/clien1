import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Mail, Facebook, Instagram, Youtube, Award } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
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
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">Home</Link>
              <Link to="/about-us" className="text-gray-300 hover:text-white transition-colors text-sm">About Us</Link>
              <Link to="/services" className="text-gray-300 hover:text-white transition-colors text-sm">Our Services</Link>
              <Link to="/our-doctors" className="text-gray-300 hover:text-white transition-colors text-sm">Our Doctors</Link>
              <Link to="/safety-and-sterilization" className="text-gray-300 hover:text-white transition-colors text-sm">Safety & Sterilization</Link>
              <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors text-sm">Gallery</Link>
              <Link to="/testimonials" className="text-gray-300 hover:text-white transition-colors text-sm">Testimonials</Link>
              <Link to="/blog" className="text-gray-300 hover:text-white transition-colors text-sm">Blog & News</Link>
              <Link to="/contact-us" className="text-gray-300 hover:text-white transition-colors text-sm">Contact Us</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Specialties</h4>
            <div className="flex flex-col space-y-3 text-sm">
              <Link to="/services/dental-implants-in-guntur" className="text-gray-300 hover:text-white transition-colors">Dental Implants</Link>
              <Link to="/services/braces-and-aligners-in-guntur" className="text-gray-300 hover:text-white transition-colors">Braces & Aligners</Link>
              <Link to="/services/root-canal-treatment-in-guntur" className="text-gray-300 hover:text-white transition-colors">Root Canal Treatment</Link>
              <Link to="/services/cosmetic-dentistry-in-guntur" className="text-gray-300 hover:text-white transition-colors">Cosmetic Dentistry</Link>
              <Link to="/services/wisdom-tooth-removal-in-guntur" className="text-gray-300 hover:text-white transition-colors">Wisdom Tooth Removal</Link>
              <Link to="/services/kids-dentistry-in-guntur" className="text-gray-300 hover:text-white transition-colors">Kids Dentistry</Link>
              <Link to="/services/full-mouth-rehabilitation-in-guntur" className="text-gray-300 hover:text-white transition-colors">Full Mouth Rehabilitation</Link>
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