import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { LinkedinIcon } from "@/components/ui/icons";

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            {/* Photo placeholder */}
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <span className="text-xl font-bold font-serif text-primary">AD</span>
            </div>
            <div>
              <p className="font-serif font-bold text-lg text-foreground">{profile.name}</p>
              <p className="text-sm text-muted-foreground">{profile.title}</p>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-serif font-bold text-foreground leading-[1.2] mb-6">
            I help healthcare CIOs deploy compliant AI in 90 days — not 18 months.
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Most AI pilots in regulated industries stall because compliance is treated as an afterthought. I build it in from day one. Through <a href="https://kriv.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Kriv AI</a>, I've deployed 16 production AI solutions across healthcare, insurance, and life sciences — each one HIPAA-compliant from the start.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book a Strategy Call <ArrowRight size={16} />
            </Button>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <LinkedinIcon size={18} />
              </a>
              <span>{profile.email}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted-foreground border-t border-border pt-6">
            <span>16+ production AI solutions</span>
            <span>Databricks C&SI Partner</span>
            <span>50+ certifications</span>
            <span>NYU Computer Engineering</span>
          </div>
        </div>
      </div>
    </section>
  );
}
