import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, Clock, MapPin, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/30 to-background flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full p-8 md:p-12 text-center shadow-hero bg-gradient-card backdrop-blur-sm">
        <div className="space-y-8">
          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
          </div>

          {/* Thank You Message */}
          <div className="space-y-4">
            <Badge variant="secondary" className="text-primary font-medium">
              Request Confirmed
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold">
              Thank You for Your 
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Appointment Request
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We've received your consultation request and our team will review it promptly.
            </p>
          </div>

          {/* Next Steps */}
          <Card className="p-6 text-left space-y-4">
            <h3 className="text-xl font-semibold text-center mb-4">What Happens Next?</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">1</div>
                <div>
                  <p className="font-medium">Review & Confirmation</p>
                  <p className="text-sm text-muted-foreground">Our team will review your request within 2-4 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">2</div>
                <div>
                  <p className="font-medium">Personal Contact</p>
                  <p className="text-sm text-muted-foreground">We will call you within 24 hours to confirm your appointment</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">3</div>
                <div>
                  <p className="font-medium">Appointment Details</p>
                  <p className="text-sm text-muted-foreground">Receive confirmation with date, time, and preparation instructions</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Emergency Contact */}
          <Card className="p-6 bg-red-50 border-red-200">
            <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Emergency Contact
            </h3>
            <p className="text-red-700 mb-3">For urgent dental emergencies, please call immediately:</p>
            <div className="space-y-2">
              <a href="tel:08632337777" className="block text-lg font-bold text-red-800 hover:text-red-900">
                0863-2337777
              </a>
              <a href="tel:08632222019" className="block text-lg font-bold text-red-800 hover:text-red-900">
                0863-2222019
              </a>
            </div>
          </Card>

          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium">Visit Us</p>
                <p className="text-muted-foreground">
                  A.C. College Main Road<br />
                  Between Canara Bank & Srichakra Show Room<br />
                  Guntur - 522002
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium">Operating Hours</p>
                <p className="text-muted-foreground">
                  Monday - Saturday<br />
                  10:00 AM - 2:00 PM<br />
                  6:00 PM - 9:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link to="/">
              <Button variant="gradient" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Return to Homepage
              </Button>
            </Link>
            <Link to="/#services">
              <Button variant="outline" className="flex items-center gap-2">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ThankYou;