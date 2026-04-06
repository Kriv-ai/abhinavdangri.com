import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/data/experience";
import { Briefcase } from "lucide-react";

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience" className="gradient-mesh">
      <div className="text-center mb-16">
        <h2 className="text-display mb-4">Experience</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {experience.map((item, i) => (
              <div key={i} className="relative pl-16">
                {/* Timeline dot */}
                <div className="absolute left-3.5 top-6 w-5 h-5 rounded-full border-2 border-primary bg-background flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <Card className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                          <Briefcase size={18} className="text-primary" />
                          {item.company}
                        </h3>
                        <p className="text-primary font-medium">{item.role}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground whitespace-nowrap">{item.period}</span>
                        {item.current && <Badge variant="accent">Current</Badge>}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <ul className="space-y-2">
                      {item.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-accent mt-1.5 shrink-0">&#9654;</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
