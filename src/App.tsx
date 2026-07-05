import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AppointmentPage from "./pages/AppointmentPage";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import OurDoctors from "./pages/OurDoctors";
import ServicesPage from "./pages/ServicesPage";
import SafetySterilization from "./pages/SafetySterilization";
import GalleryPage from "./pages/GalleryPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ContactUs from "./pages/ContactUs";
import DentalImplants from "./pages/services/DentalImplants";
import BracesAligners from "./pages/services/BracesAligners";
import RootCanal from "./pages/services/RootCanal";
import CosmeticDentistry from "./pages/services/CosmeticDentistry";
import WisdomTooth from "./pages/services/WisdomTooth";
import KidsDentistry from "./pages/services/KidsDentistry";
import FullMouthRehab from "./pages/services/FullMouthRehab";
import BlogIndex from "./pages/blog/BlogIndex";
import BlogPost from "./pages/blog/BlogPost";
import ScrollToTop from "@/components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-doctors" element={<OurDoctors />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/dental-implants-in-guntur" element={<DentalImplants />} />
          <Route path="/services/braces-and-aligners-in-guntur" element={<BracesAligners />} />
          <Route path="/services/root-canal-treatment-in-guntur" element={<RootCanal />} />
          <Route path="/services/cosmetic-dentistry-in-guntur" element={<CosmeticDentistry />} />
          <Route path="/services/wisdom-tooth-removal-in-guntur" element={<WisdomTooth />} />
          <Route path="/services/kids-dentistry-in-guntur" element={<KidsDentistry />} />
          <Route path="/services/full-mouth-rehabilitation-in-guntur" element={<FullMouthRehab />} />
          <Route path="/safety-and-sterilization" element={<SafetySterilization />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/book-appointment" element={<AppointmentPage />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/thank-you" element={<ThankYou />} />
          {/* CATCH-ALL ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
