import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import sitemap from 'vite-plugin-sitemap';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    sitemap({
      hostname: 'https://www.navyasinternationaldentalhospital.in',
      dynamicRoutes: [
        '/about-us',
        '/our-doctors',
        '/services',
        '/services/dental-implants-in-guntur',
        '/services/braces-and-aligners-in-guntur',
        '/services/root-canal-treatment-in-guntur',
        '/services/cosmetic-dentistry-in-guntur',
        '/services/wisdom-tooth-removal-in-guntur',
        '/services/kids-dentistry-in-guntur',
        '/services/full-mouth-rehabilitation-in-guntur',
        '/safety-and-sterilization',
        '/gallery',
        '/testimonials',
        '/contact-us',
        '/book-appointment',
        '/appointment',
        '/blog',
        '/blog/self-ligating-teeth-braces',
        '/blog/metal-braces-guide',
        '/blog/invisible-braces-cost-india',
        '/blog/clear-aligners-vs-braces',
        '/blog/straumann-implants-india',
        '/blog/best-dental-implants-india',
        '/blog/invisalign-cost-india',
        '/blog/tooth-decay-treatment',
        '/blog/teeth-pain-relief',
        '/blog/tooth-sensitivity-treatment',
        '/thank-you'
      ]
    }),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
