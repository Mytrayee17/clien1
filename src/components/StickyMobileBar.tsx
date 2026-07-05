import { Phone, MessageCircle, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

export default function StickyMobileBar() {
  const whatsappUrl = "https://wa.me/919100831618?text=Hi%20Navya's%20Dental,%20I'd%20like%20to%20book%20a%20consultation.";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-border/50 lg:hidden shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
      <div className="grid grid-cols-3 divide-x divide-border/50 h-16">
        {/* Call Now */}
        <a
          href="tel:9100831618"
          className="flex flex-col items-center justify-center text-primary active:bg-secondary/30 transition-colors"
        >
          <Phone className="h-5 w-5 mb-1" />
          <span className="text-xs font-semibold">Call Now</span>
        </a>

        {/* WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center text-green-600 active:bg-secondary/30 transition-colors"
        >
          <MessageCircle className="h-5 w-5 mb-1 fill-green-600/10" />
          <span className="text-xs font-semibold">WhatsApp</span>
        </a>

        {/* Book appointment */}
        <Link
          to="/book-appointment"
          className="flex flex-col items-center justify-center text-accent active:bg-secondary/30 transition-colors"
        >
          <Calendar className="h-5 w-5 mb-1" />
          <span className="text-xs font-semibold">Book Free</span>
        </Link>
      </div>
    </div>
  );
}
