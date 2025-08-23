import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";
const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <header className="bg-background/95 backdrop-blur-md border-b border-border/50 sticky top-0 z-50 shadow-card">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm border-b border-border/30">
          <div className="flex items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>A.C. College Main Road, Guntur - 522002</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>10:30 AM - 7:30 PM (Sunday Holiday)</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:08632235113" className="flex items-center gap-2 text-primary hover:text-accent transition-colors">
              <Phone className="h-4 w-4" />
              <span>0863-2235113</span>
            </a>
            <a href="tel:9100831618" className="flex items-center gap-2 text-primary hover:text-accent transition-colors">
              <Phone className="h-4 w-4" />
              <span>9100831618</span>
            </a>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full overflow-hidden bg-white p-1 shadow-lg">
              <img src="/lovable-uploads/7c51b673-6ade-4291-a971-9fdbf9406b70.png" alt="NAVYA'S Dental Hospital" className="h-full w-full object-contain" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">NAVYA'S</h1>
              <p className="text-sm text-muted-foreground">International Dental Hospital</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">Home</button>
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">Services</button>
            <button onClick={() => scrollToSection('team')} className="text-foreground hover:text-primary transition-colors">Our Team</button>
            <button onClick={() => scrollToSection('gallery')} className="text-foreground hover:text-primary transition-colors">Gallery</button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">Contact</button>
          </nav>

          <Button onClick={() => scrollToSection('appointment')} variant="gradient" className="shadow-hero">
            Book Appointment
          </Button>
        </div>
      </div>
    </header>;
};
export default Header;