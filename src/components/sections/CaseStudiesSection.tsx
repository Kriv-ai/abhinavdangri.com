import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/data/caseStudies";
import { ArrowRight, CheckCircle } from "lucide-react";

export function CaseStudiesSection() {
  return (
    <SectionWrapper id="case-studies">
      <div className="text-center mb-14">
        <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Proven Results</p>
        <h2 className="text-display font-serif mb-4">Case Studies</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Real outcomes from production deployments — not proof-of-concepts.</p>
      </div>
      <div className="space-y-6 max-w-4xl mx-auto">
        {caseStudies.map((cs, i) => (
          <Card key={i} className="shadow-card hover-lift border-border/60 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-3">
                <div className="p-8 bg-primary/[0.03] border-r border-border/40 flex flex-col justify-center">
                  <Badge className="w-fit mb-3 bg-primary/10 text-primary border-0">{cs.industry}</Badge>
                  <h3 className="text-xl font-bold font-serif">{cs.title}</h3>
                  <div className="flex flex-wrap gap-1.5 mt-3">{cs.technologies.map(t => (<Badge key={t} variant="secondary" className="text-[10px]">{t}</Badge>))}</div>
                </div>
                <div className="p-8 md:col-span-2 space-y-4">
                  <div><p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">The Challenge</p><p className="text-sm text-foreground leading-relaxed">{cs.challenge}</p></div>
                  <div><p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">What We Built</p><p className="text-sm text-foreground leading-relaxed">{cs.solution}</p></div>
                  <div className="pt-3 border-t border-border/40">
                    <p className="text-xs font-bold text-accent uppercase tracking-wider mb-2">Results</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-2">{cs.metrics.map((m, j) => (<div key={j} className="flex items-center gap-1.5 text-sm"><CheckCircle size={14} className="text-green-600 shrink-0" /><span className="font-medium">{m}</span></div>))}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-10">
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
          Discuss Your Challenge <ArrowRight size={16} />
        </Button>
      </div>
    </SectionWrapper>
  );
}
