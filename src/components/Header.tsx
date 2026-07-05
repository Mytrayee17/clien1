import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();

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
          <Link to="/" className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full overflow-hidden bg-white p-1 shadow-lg">
              <img src="/lovable-uploads/logo.png" alt="NAVYA'S Dental Hospital" className="h-full w-full object-contain" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">NAVYA'S</h1>
              <p className="text-sm text-muted-foreground">International Dental Hospital</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors text-sm font-medium">Home</Link>
            <Link to="/about-us" className="text-foreground hover:text-primary transition-colors text-sm font-medium">About</Link>
            <Link to="/services" className="text-foreground hover:text-primary transition-colors text-sm font-medium">Services</Link>
            <Link to="/our-doctors" className="text-foreground hover:text-primary transition-colors text-sm font-medium">Doctors</Link>
            <Link to="/safety-and-sterilization" className="text-foreground hover:text-primary transition-colors text-sm font-medium">Safety</Link>
            <Link to="/gallery" className="text-foreground hover:text-primary transition-colors text-sm font-medium">Gallery</Link>
            <Link to="/testimonials" className="text-foreground hover:text-primary transition-colors text-sm font-medium">Testimonials</Link>
            <Link to="/blog" className="text-foreground hover:text-primary transition-colors text-sm font-medium">Blog</Link>
            <Link to="/contact-us" className="text-foreground hover:text-primary transition-colors text-sm font-medium">Contact</Link>
          </nav>

          <Button onClick={() => navigate('/book-appointment')} variant="gradient" className="shadow-hero">
            Book Appointment
          </Button>
        </div>
      </div>
    </header>;
};
export default Header;