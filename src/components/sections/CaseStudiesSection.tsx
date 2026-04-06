import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/data/caseStudies";
import { ArrowRight, CheckCircle } from "lucide-react";
import { profile } from "@/data/profile";

export function CaseStudiesSection() {
  return (
    <SectionWrapper id="case-studies">
      <div className="text-center mb-14">
        <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Proven Results</p>
        <h2 className="text-display mb-4">Case Studies</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Production-grade AI solutions with measurable business outcomes — not experiments.
        </p>
      </div>

      <div className="space-y-6 max-w-4xl mx-auto">
        {caseStudies.map((cs, i) => (
          <Card key={i} className="hover-lift overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-3 gap-0">
                {/* Left: Industry + Title */}
                <div className="p-8 bg-primary/5 flex flex-col justify-center">
                  <Badge className="w-fit mb-3">{cs.industry}</Badge>
                  <h3 className="text-xl font-bold">{cs.title}</h3>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {cs.technologies.map(t => (
                      <Badge key={t} variant="secondary" className="text-[10px]">{t}</Badge>
                    ))}
                  </div>
                </div>
                {/* Right: Challenge + Solution + Outcome */}
                <div className="p-8 md:col-span-2 space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Challenge</p>
                    <p className="text-sm text-foreground">{cs.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Solution</p>
                    <p className="text-sm text-foreground">{cs.solution}</p>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Results</p>
                    <div className="flex flex-wrap gap-3">
                      {cs.metrics.map((m, j) => (
                        <div key={j} className="flex items-center gap-1.5 text-sm">
                          <CheckCircle size={14} className="text-green-600 shrink-0" />
                          <span className="font-medium">{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-10">
        <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
          Discuss Your Challenge <ArrowRight size={16} />
        </Button>
      </div>
    </SectionWrapper>
  );
}
