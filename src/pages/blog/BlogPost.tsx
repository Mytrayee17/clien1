import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StickyMobileBar from "@/components/StickyMobileBar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { blogPosts } from "./blogData";
import NotFound from "../NotFound";
import { ArrowLeft, Calendar, User, MessageCircle, Phone } from "lucide-react";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={`${post.title} | Navya's Dental Blog`}
        description={post.metaDesc}
        schema={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.metaDesc,
          "datePublished": "2026-06-25",
          "author": {
            "@type": "Person",
            "name": "Dr. Navya Chowdary"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Navya's International Dental Hospital"
          }
        }}
      />
      <Header />

      <main className="pb-24">
        {/* Container */}
        <div className="container mx-auto px-4 max-w-4xl pt-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-primary hover:underline mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Blog Index
          </Link>

          <article className="space-y-6">
            <div className="flex gap-2 items-center">
              <Badge variant="secondary">{post.category}</Badge>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Calendar className="h-3 w-3" /> {post.date}
              </span>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <User className="h-3 w-3" /> By Dr. Navya Chowdary
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
              {post.title}
            </h1>

            {/* Top Callout Box CTA */}
            <Card className="border-l-4 border-l-primary bg-secondary/20 border border-border/50">
              <CardContent className="p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-primary">Need Professional Dental Help?</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Consult Navya's MDS specialists for custom treatment plans in Guntur.</p>
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                  <Link to="/book-appointment" className="flex-1 sm:flex-initial">
                    <Button variant="gradient" size="sm" className="w-full">Book Free Appointment</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <div className="h-64 bg-secondary/20 rounded-2xl flex items-center justify-center border border-border/50 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="h-32 w-32 object-contain opacity-30"
              />
            </div>

            {/* Main Article Content */}
            <div 
              className="prose prose-blue dark:prose-invert max-w-none text-muted-foreground leading-relaxed space-y-6 pt-4"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            {/* Internal link prompt */}
            <div className="p-5 bg-primary/5 rounded-xl border border-primary/10 mt-8">
              <p className="text-sm font-semibold text-primary">
                🔗 Related Resource:{" "}
                <Link to={post.internalLink} className="underline hover:text-accent transition-colors">
                  {post.internalLinkText}
                </Link>
              </p>
            </div>

            {/* Bottom Form / CTA */}
            <Card className="border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-8 text-center rounded-2xl mt-12">
              <h3 className="text-2xl font-bold mb-2">Speak to a Senior Dentist in Guntur</h3>
              <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
                Schedule a consultation to evaluate your teeth alignment, dental implants, or cosmetic concerns.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/book-appointment">
                  <Button variant="gradient" size="lg">Book Free Consultation</Button>
                </Link>
                <a 
                  href="tel:9100831618" 
                  className="flex items-center gap-2 border border-border bg-background px-6 py-2 rounded-lg text-foreground hover:bg-secondary/40 transition-colors font-semibold"
                >
                  <Phone className="h-4 w-4" /> Call 9100831618
                </a>
              </div>
            </Card>
          </article>
        </div>
      </main>

      <Footer />
      <StickyMobileBar />
    </div>
  );
}
