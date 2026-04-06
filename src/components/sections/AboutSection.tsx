import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { profile } from "@/data/profile";

export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <div className="text-center mb-12">
        <h2 className="text-display mb-4">About Me</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Bio */}
        <div className="space-y-5">
          {profile.bio.map((paragraph, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed text-lg">
              {paragraph}
            </p>
          ))}
          <div className="pt-4">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Education:</span>
              NYU — B.S. Computer Engineering, 3.91 GPA
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground mt-2">
              <span className="font-semibold text-foreground">Honors:</span>
              Tau Beta Pi Engineering Honor Society (top 12.5%)
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4">
          {profile.stats.map((stat, i) => (
            <Card key={i} className="hover-lift text-center">
              <CardContent className="p-6">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
