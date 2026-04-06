import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { Mail, ChevronDown, ArrowRight } from "lucide-react";
import { LinkedinIcon, YoutubeIcon } from "@/components/ui/icons";

export function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-5xl animate-pulse-soft" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/15 rounded-full blur-5xl animate-pulse-soft" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-5xl animate-float" />

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Available for strategic engagements
          </div>

          {/* Name */}
          <h1 className="text-display-lg md:text-display-xl gradient-text animate-fade-in" style={{ animationDelay: "0.1s" }}>
            {profile.name}
          </h1>

          {/* Title */}
          <p className="text-xl md:text-2xl text-muted-foreground font-medium animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {profile.title}
          </p>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {profile.tagline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" onClick={() => scrollTo("projects")}>
              View My Work <ArrowRight size={18} />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollTo("contact")}>
              Get in Touch
            </Button>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-5 pt-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
              <LinkedinIcon size={22} />
            </a>
            <a href={`mailto:${profile.email}`} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
              <Mail size={22} />
            </a>
            <a href={profile.youtube} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="YouTube">
              <YoutubeIcon size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
