import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { LinkedinIcon } from "@/components/ui/icons";

export function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-6 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              {profile.title}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-display-lg font-bold tracking-tight text-foreground leading-tight">
              {profile.headline}
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {profile.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg" onClick={() => scrollTo("contact")}>
                Book a 30-Min Strategy Call <ArrowRight size={16} />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollTo("case-studies")}>
                View Case Studies
              </Button>
            </div>

            {/* Trust strip */}
            <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">16+</span> AI Solutions
              <span className="text-border">|</span>
              <span className="font-semibold text-foreground">50+</span> Certifications
              <span className="text-border">|</span>
              <span className="font-semibold text-foreground">Databricks</span> Partner
            </div>
          </div>

          {/* Right: Photo placeholder */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="w-80 h-96 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-border/50 flex flex-col items-center justify-center text-center p-8">
                <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                  <span className="text-5xl font-bold text-primary">AD</span>
                </div>
                <p className="text-lg font-semibold text-foreground">{profile.name}</p>
                <p className="text-sm text-muted-foreground mt-1">{profile.title}</p>
                <div className="flex items-center gap-3 mt-4">
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <LinkedinIcon size={18} />
                  </a>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary/10 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("problem")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} />
      </button>
    </section>
  );
}
