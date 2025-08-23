import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, Phone, MapPin } from "lucide-react";
const AppointmentForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
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
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get('email') as string || '';

    // Set hidden fields
    const replytoField = form.querySelector('input[name="_replyto"]') as HTMLInputElement;
    const timestampField = form.querySelector('input[name="submission_time"]') as HTMLInputElement;
    if (replytoField) replytoField.value = email;
    if (timestampField) timestampField.value = getISTTimestamp();
    setIsSubmitting(true);
    setStatusMessage("Sending your appointment request...");

    // Allow native form submission to Formspree
  };
  return <section id="appointment" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Book Your
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Consultation
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Schedule your appointment with our expert dental team. We're here to help you 
            achieve optimal oral health with personalized care.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-card bg-card/80 backdrop-blur-sm border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Branch 1
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  A.C. College Main Road<br />
                  Between Canara Bank & Srichakra Show Room<br />
                  Guntur - 522002
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href="tel:08632337777" className="text-primary hover:text-accent">0863-2235113</a>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href="tel:9100078787" className="text-primary hover:text-accent">9100831618</a>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card bg-card/80 backdrop-blur-sm border-0">
              
              
            </Card>

            <Card className="shadow-card bg-card/80 backdrop-blur-sm border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Timings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Monday - Saturday<br />
                  10:00 AM - 2:00 PM<br />
                  <span className="text-red-500">Sunday Holiday</span>
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Appointment Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-hero bg-gradient-card backdrop-blur-sm border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Schedule Your Appointment</CardTitle>
              </CardHeader>
              <CardContent>
                <form ref={formRef} action="https://formspree.io/f/xwpqgbja" method="POST" onSubmit={handleSubmit} className="space-y-6" autoComplete="on" noValidate>
                  {/* Honeypot */}
                  <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" style={{
                  display: 'none'
                }} />
                  
                  {/* Hidden fields */}
                  <input type="hidden" name="_subject" value="New Appointment Request — NAVYA'S DENTAL HOSPITAL" />
                  <input type="hidden" name="_language" value="en" />
                  <input type="hidden" name="_next" value="/thank-you.html" />
                  <input type="hidden" name="_replyto" value="" />
                  <input type="hidden" name="submission_time" value="" />

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" name="name" required className="bg-background/50" placeholder="Enter your full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" name="phone" type="tel" required className="bg-background/50" placeholder="Enter your phone number" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" name="email" type="email" required className="bg-background/50" placeholder="Enter your email address" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="preferred_date">Preferred Date</Label>
                      <Input id="preferred_date" name="preferred_date" type="date" className="bg-background/50" />
                    </div>
                    
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Required</Label>
                    <select id="service" name="service" className="w-full px-3 py-2 bg-background/50 border border-input rounded-md text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                      <option value="">Select Service</option>
                      <option value="General Dentistry">General Dentistry</option>
                      <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                      <option value="Root Canal Treatment">Root Canal Treatment</option>
                      <option value="Dental Implants">Dental Implants</option>
                      <option value="Orthodontics">Orthodontics</option>
                      <option value="Maxillofacial Surgery">Maxillofacial Surgery</option>
                      <option value="Pediatric Dentistry">Pediatric Dentistry</option>
                      <option value="Periodontics">Periodontics</option>
                      <option value="General Consultation">General Consultation</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Message</Label>
                    <Textarea id="message" name="message" placeholder="Please describe your concerns or any specific requirements..." className="bg-background/50 min-h-[100px]" rows={4} />
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    <Button type="submit" disabled={isSubmitting} variant="gradient" className="shadow-hero text-lg py-6 px-8 flex-1 mr-4">
                      {isSubmitting ? <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </> : <>
                          <Calendar className="h-5 w-5 mr-2" />
                          Send Appointment Request
                        </>}
                    </Button>
                    {statusMessage && <div className="text-sm text-green-600" role="status" aria-live="polite">
                        {statusMessage}
                      </div>}
                  </div>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy. 
                    We'll contact you within 24 hours to confirm your appointment.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default AppointmentForm;