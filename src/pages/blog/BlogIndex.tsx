import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StickyMobileBar from "@/components/StickyMobileBar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { blogPosts } from "./blogData";

export default function BlogIndex() {
  const posts = Object.values(blogPosts);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Dental Blog & Oral Health Tips | Navya's Dental Hospital Guntur"
        description="Read the latest articles on oral health care, dental implant costs in India, clear aligners comparisons, and wisdom teeth extractions from Navya's specialists."
        schema={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Navya's Dental Hospital Blog",
          "description": "Educational blog posts on orthodontic braces, dental hygiene, implants, and oral care."
        }}
      />
      <Header />

      <main className="pb-24">
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-4">Dental Education Portal</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Dental Blog & <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Oral Health Insights</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay informed with patient guides written by Guntur's leading MDS dental surgeons. Explore braces types, dental implant brands, and tooth sensitivity treatments.
            </p>
          </div>
        </section>

        {/* Blog Post List */}
        <section className="py-16 container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Card key={post.slug} className="overflow-hidden bg-card hover:shadow-elevated transition-all border-border/50 flex flex-col justify-between">
                <div>
                  <div className="h-48 bg-secondary/30 flex items-center justify-center border-b border-border/30">
                    <img 
                      src={post.image} 
                      alt="Dental Blog Article Cover"
                      className="h-24 w-24 object-contain opacity-40"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex gap-2 mb-3 items-center">
                      <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-2 text-primary line-clamp-2">{post.title}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {post.summary}
                    </p>
                  </CardContent>
                </div>
                <div className="p-6 pt-0">
                  <Link to={`/blog/${post.slug}`}>
                    <Button variant="outline" className="w-full">
                      Read Full Article
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileBar />
    </div>
  );
}
