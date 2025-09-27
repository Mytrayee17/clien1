import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, Phone, MapPin, Star, Shield, Award, Users, CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

// Declare global tracking functions
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
  }
}

const AppointmentPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);

  const getISTTimestamp = () => {
    try {
      const locale = new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Kolkata'
      });
      return new Date(locale).toLocaleString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }) + ' IST';
    } catch (e) {
      return new Date().toISOString();
    }
  };

  const validateForm = (formData: FormData) => {
    const errors: Record<string, string> = {};
    const requiredFields = ['name', 'phone', 'preferred_date', 'service'];

    requiredFields.forEach(field => {
      if (!formData.get(field)?.toString().trim()) {
        errors[field] = 'This field is required';
      }
    });

    // Validate phone number format (minimum 10 digits)
    const phone = formData.get('phone')?.toString().trim();
    if (phone && !/^\d{10,}$/.test(phone)) {
      errors.phone = 'Please enter a valid phone number';
    }

    // Validate date is not in the past
    const date = formData.get('preferred_date')?.toString();
    if (date) {
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        errors.preferred_date = 'Please select a future date';
      }
    }

    return errors;
  };

  const handlePhoneClick = (phoneNumber: string) => {
    // Track phone call conversion
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-XXXXXXXXX/XXXXXXXXXX',
        'event_category': 'contact',
        'event_label': 'phone_click',
        'value': phoneNumber
      });
    }
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Contact', { content_name: 'Phone Click' });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Track form start conversion
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-XXXXXXXXX/XXXXXXXXXX',
        'event_category': 'form',
        'event_label': 'form_start'
      });
    }
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead', { content_name: 'Appointment Form Started' });
    }

    // Validate form
    const errors = validateForm(formData);
    setFormErrors(errors);

    // If there are errors, don't submit
    if (Object.keys(errors).length > 0) {
      setStatusMessage('Please fill in all required fields correctly');
      return;
    }

    const email = formData.get('email') as string || '';

    // Set hidden fields
    const replytoField = form.querySelector('input[name="_replyto"]') as HTMLInputElement;
    const timestampField = form.querySelector('input[name="submission_time"]') as HTMLInputElement;

    if (replytoField) replytoField.value = email;
    if (timestampField) timestampField.value = getISTTimestamp();

    setIsSubmitting(true);
    setStatusMessage("Sending your appointment request...");

    // Track successful form submission
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-XXXXXXXXX/XXXXXXXXXX',
        'event_category': 'appointment',
        'event_label': 'appointment_booked',
        'value': 1
      });
    }
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead', { content_name: 'Appointment Booked' });
    }

    // Submit the form
    form.submit();
  };

  const benefits = [
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Expert Care",
      description: "World-class dental treatment with modern technology"
    },
    {
      icon: <Award className="h-6 w-6 text-accent" />,
      title: "Premium Service",
      description: "Personalized consultation and treatment plans"
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Trusted by 1000+ Patients",
      description: "Join our satisfied patient community"
    }
  ];

  const services = [
    "General Dentistry",
    "Cosmetic Dentistry",
    "Root Canal Treatment",
    "Dental Implants",
    "Orthodontics",
    "Maxillofacial Surgery",
    "Pediatric Dentistry",
    "General Consultation"
  ];

  // Gallery items for the appointment page
  const galleryItems = [
    {
      id: 1,
      title: "Smile Makeover",
      category: "Cosmetic Dentistry",
      description: "Complete smile transformation with porcelain veneers",
      beforeImage: "/lovable-uploads/28b405f8-7a3b-4d32-b382-99db6a21e960.png",
      afterImage: "/lovable-uploads/28b405f8-7a3b-4d32-b382-99db6a21e960.png"
    },
    {
      id: 2,
      title: "Dental Implant",
      category: "Implants",
      description: "Single tooth replacement with titanium implant",
      beforeImage: "/lovable-uploads/be251724-f14a-4dfe-8fb8-0c3c4c30fb6d.png",
      afterImage: "/lovable-uploads/be251724-f14a-4dfe-8fb8-0c3c4c30fb6d.png"
    },
    {
      id: 3,
      title: "Teeth Whitening",
      category: "Cosmetic Dentistry",
      description: "Professional whitening treatment results",
      beforeImage: "/lovable-uploads/16d4a1ae-5721-4a0c-9176-42861e36d0ff.png",
      afterImage: "/lovable-uploads/16d4a1ae-5721-4a0c-9176-42861e36d0ff.png"
    }
  ];

  const facilityImages = [
    {
      title: "Treatment Room",
      image: "/lovable-uploads/d816c11d-268d-4492-bf92-81bc05ae5639.png",
      description: "Advanced treatment room with modern dental equipment"
    },
    {
      title: "Surgery Suite",
      image: "/lovable-uploads/a5d881c9-4368-4e2e-9442-f731981ef5bc.png",
      description: "State-of-the-art surgical facility"
    },
    {
      title: "Reception Area",
      image: "/lovable-uploads/2e70fa0e-7bfd-413e-bb20-3a56d7b75929.png",
      description: "Welcoming and comfortable waiting area"
    },
    {
      title: "Sterilization Center",
      image: "/lovable-uploads/7476e918-c4b7-42ef-8b81-81de426c0d22.png",
      description: "Professional sterilization equipment"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      {/* Google Ads Conversion Tracking */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            gtag('event', 'conversion', {
              'send_to': 'AW-XXXXXXXXX/XXXXXXXXXX',
              'event_category': 'appointment',
              'event_label': 'appointment_booking'
            });
          `
        }}
      />

      {/* Google Analytics 4 and Google Ads Global Site Tag */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
            gtag('config', 'AW-XXXXXXXXX');
          `
        }}
      />

      {/* Meta Pixel Code for Facebook/Instagram Ads */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'YOUR_PIXEL_ID');
            fbq('track', 'PageView');
            fbq('track', 'Lead');
          `
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
          alt="Facebook Pixel"
        />
      </noscript>

      {/* Header Section - Optimized for Ads */}
      <section className="py-8 md:py-12 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-b border-primary/20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 text-primary font-semibold text-sm mb-6 animate-pulse">
            ⚡ Limited Time: Free Consultation Available
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Book Your
            <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              Dream Smile
            </span>
            <span className="block text-xl sm:text-2xl md:text-3xl text-muted-foreground font-normal mt-3">
              Consultation Today
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Transform your smile with world-class dental care. Get your personalized treatment plan from our expert team.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <div className="flex -space-x-1">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-semibold text-foreground">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <Users className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">1000+ Happy Patients</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="font-semibold text-foreground">Expert Dentists</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">

          {/* Appointment Form */}
          <div className="mb-20">
            <Card className="shadow-hero bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-xl border border-white/20 relative overflow-hidden">
              {/* Animated Background Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-xl" />

              <CardHeader className="pb-6 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-primary to-accent">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                      Book Your Appointment
                    </CardTitle>
                    <p className="text-muted-foreground mt-1">Start your journey to a perfect smile</p>
                  </div>
                </div>
                <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-primary rounded-full opacity-20" />
              </CardHeader>

              <CardContent className="relative z-10">
                <form ref={formRef} action="https://formspree.io/f/xwpqgbja" method="POST" onSubmit={handleSubmit} className="space-y-6" autoComplete="on" noValidate>
                  {/* Honeypot */}
                  <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" style={{display: 'none'}} />

                  {/* Hidden fields for Google Ads tracking */}
                  <input type="hidden" name="_subject" value="New Appointment Request — Google Ads Campaign — NAVYA'S DENTAL HOSPITAL" />
                  <input type="hidden" name="_language" value="en" />
                  <input type="hidden" name="_next" value="/thank-you" />
                  <input type="hidden" name="_replyto" value="" />
                  <input type="hidden" name="submission_time" value="" />
                  <input type="hidden" name="campaign_source" value="google_ads" />

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        className={`bg-background/80 backdrop-blur-sm border-primary/20 focus:border-primary/50 focus:ring-primary/20 h-12 text-base hover:border-primary/30 transition-all duration-300 ${
                          formErrors.name ? 'border-red-500' : ''
                        }`}
                        placeholder="Enter your full name"
                      />
                      {formErrors.name && (
                        <p className="text-sm text-red-500">{formErrors.name}</p>
                      )}
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="phone" className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        className={`bg-background/80 backdrop-blur-sm border-primary/20 focus:border-primary/50 focus:ring-primary/20 h-12 text-base hover:border-primary/30 transition-all duration-300 ${
                          formErrors.phone ? 'border-red-500' : ''
                        }`}
                        placeholder="Enter your phone number"
                      />
                      {formErrors.phone && (
                        <p className="text-sm text-red-500">{formErrors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-sm font-semibold text-foreground flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      Email Address (optional)
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      className="bg-background/80 backdrop-blur-sm border-primary/20 focus:border-primary/50 focus:ring-primary/20 h-12 text-base hover:border-primary/30 transition-all duration-300"
                      placeholder="Enter your email address (optional)"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="preferred_date" className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent"></span>
                        Preferred Date *
                      </Label>
                      <Input
                        id="preferred_date"
                        name="preferred_date"
                        type="date"
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className={`bg-background/80 backdrop-blur-sm border-primary/20 focus:border-primary/50 focus:ring-primary/20 h-12 text-base hover:border-primary/30 transition-all duration-300 ${
                          formErrors.preferred_date ? 'border-red-500' : ''
                        }`}
                      />
                      {formErrors.preferred_date && (
                        <p className="text-sm text-red-500">{formErrors.preferred_date}</p>
                      )}
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="service" className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent"></span>
                        Service Required *
                      </Label>
                      <select
                        id="service"
                        name="service"
                        required
                        className={`w-full px-4 py-3 bg-background/80 backdrop-blur-sm border border-primary/20 rounded-lg text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2 focus:border-primary/50 hover:border-primary/30 transition-all duration-300 h-12 ${
                          formErrors.service ? 'border-red-500' : ''
                        }`}
                      >
                        <option value="">Select Service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                      {formErrors.service && (
                        <p className="text-sm text-red-500">{formErrors.service}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-sm font-semibold text-foreground flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent"></span>
                      Tell us about your concern
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Please describe your dental concerns or any specific requirements..."
                      className="bg-background/80 backdrop-blur-sm border-primary/20 focus:border-primary/50 focus:ring-primary/20 min-h-[100px] text-base hover:border-primary/30 transition-all duration-300 resize-none"
                      rows={4}
                    />
                  </div>

                  <div className="space-y-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-primary via-accent to-primary hover:from-primary/90 hover:via-accent/90 hover:to-primary/90 text-white font-bold text-lg py-4 px-8 rounded-xl shadow-hero hover:shadow-elevated hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 relative overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-3 relative z-10">
                          <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                          <span>Booking Your Appointment...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-3 relative z-10">
                          <Calendar className="h-6 w-6" />
                          <span>Book Your Dream Smile Consultation</span>
                          <ArrowRight className="h-5 w-5" />
                        </div>
                      )}
                    </Button>

                    {statusMessage && (
                      <div className={`p-4 rounded-lg text-center font-medium ${
                        statusMessage.includes('Please fill')
                          ? 'bg-red-500/10 border border-red-500/20 text-red-600'
                          : 'bg-green-500/10 border border-green-500/20 text-green-600'
                      }`}>
                        {statusMessage.includes('Please fill') ? '❌' : '✅'} {statusMessage}
                      </div>
                    )}
                  </div>

                  <div className="p-4 rounded-lg bg-secondary/20 border border-primary/10">
                    <p className="text-sm text-muted-foreground text-center leading-relaxed">
                      🔒 <strong>Your privacy is protected.</strong> We respect your personal information.
                      <br />
                      ⚡ <strong>Quick Response:</strong> Our team will contact you within 24 hours to confirm your appointment.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Gallery Section */}
          <div className="space-y-12">
            {/* Before/After Results */}
            <div>
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4">Our Treatment Results</h3>
                <p className="text-muted-foreground text-lg">See the amazing transformations we've achieved for our patients</p>
              </div>
              <BeforeAfterSlider />
            </div>

            {/* Before/After Gallery */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center">Before & After Transformations</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {galleryItems.map(item => (
                  <Card key={item.id} className="group overflow-hidden hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border-0 bg-card/80 backdrop-blur-sm">
                    <div className="relative">
                      <div className="relative">
                        <img src={item.beforeImage} alt={`${item.title} - Before and After`} className="w-full h-48 object-cover" />
                        <div className="absolute top-2 left-2">
                          <Badge className="bg-primary text-white font-semibold">
                            BEFORE & AFTER
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold">{item.title}</h4>
                        <Badge variant="secondary" className="text-xs">
                          {item.category}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Facility Gallery */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center">Our Modern Facility</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {facilityImages.map((facility, index) => (
                  <Card key={index} className="group overflow-hidden hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border-0 bg-card/80 backdrop-blur-sm">
                    <div className="relative">
                      <img src={facility.image} alt={facility.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h4 className="font-bold mb-1 text-white">{facility.title}</h4>
                        <p className="text-xs text-white/80">{facility.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <Card className="shadow-elevated bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-xl border border-white/20">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Need to Speak With Us?</h3>
                  <p className="text-muted-foreground">Contact us directly for immediate assistance</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-primary/5">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <a href="tel:08632235113" className="text-primary hover:text-accent font-medium text-lg" onClick={() => handlePhoneClick('08632235113')}>
                          0863-2235113/12
                        </a>
                        <p className="text-sm text-muted-foreground">Main Line</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-primary/5">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <a href="tel:9100831618" className="text-primary hover:text-accent font-medium text-lg" onClick={() => handlePhoneClick('9100831618')}>
                          9100831618
                        </a>
                        <p className="text-sm text-muted-foreground">Direct Line</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary/30">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Visit Our Clinic</h4>
                        <p className="text-sm text-muted-foreground">
                          A.C. College Main Road<br />
                          Between Canara Bank & Suzuki Show Room<br />
                          <span className="text-primary font-semibold">Guntur - 522002</span>
                        </p>
                      </div>
                    </div>
                    <div className="p-4 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="font-semibold text-primary">Working Hours</span>
                      </div>
                      <p className="text-sm text-foreground">
                        Mon-Sat: 10:30 AM - 7:30 PM<br />
                        <span className="text-red-500 font-semibold">Sunday: Closed</span>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;
