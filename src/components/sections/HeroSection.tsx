import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { LinkedinIcon } from "@/components/ui/icons";

export function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-3 space-y-6">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider">{profile.title}</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif tracking-tight text-foreground leading-[1.15]">
              I Help Healthcare CIOs Deploy Compliant AI in 90 Days
              <span className="text-muted-foreground"> — Not 18 Months</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">{profile.subheadline}</p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-soft-lg text-base px-8" onClick={() => scrollTo("contact")}>
                Book a Free Strategy Call <ArrowRight size={16} />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollTo("case-studies")}>
                View Case Studies
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-green-500" /><span><strong className="text-foreground">16+</strong> Production AI Solutions</span></div>
              <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-green-500" /><span><strong className="text-foreground">Databricks</strong> C&SI Partner</span></div>
              <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-green-500" /><span><strong className="text-foreground">50+</strong> Certifications</span></div>
            </div>
          </div>
          <div className="lg:col-span-2 flex justify-center">
            <div className="w-64 h-72 md:w-72 md:h-80 rounded-2xl bg-card border border-border shadow-soft flex flex-col items-center justify-center text-center p-6">
              <div className="w-28 h-28 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <span className="text-4xl font-bold font-serif text-primary">AD</span>
              </div>
              <p className="text-lg font-bold font-serif text-foreground">{profile.name}</p>
              <p className="text-sm text-muted-foreground mt-1">{profile.title}</p>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="mt-4 text-muted-foreground hover:text-primary transition-colors"><LinkedinIcon size={18} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
