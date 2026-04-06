import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Database, Rocket, ShieldAlert } from "lucide-react";

const gaps = [
  { icon: Database, title: "The Data Readiness Gap", stat: "73%", description: "of healthcare organizations lack AI-ready data infrastructure. Models trained on ungoverned data produce unreliable results — and fail compliance reviews.", cost: "Typical cost: $500K+ in wasted pilot investment" },
  { icon: Rocket, title: "The Production Gap", stat: "79%", description: "of healthcare AI pilots never reach production. The blockers aren't technology — they're governance frameworks, compliance sign-off, and operational readiness.", cost: "Average delay: 14 months beyond initial timeline" },
  { icon: ShieldAlert, title: "The Governance Deficit", stat: "61%", description: "of enterprise leaders cite regulatory risk as their top barrier to AI. Without built-in compliance, every deployment is a legal and financial liability.", cost: "HIPAA violation fines: $100K-$1.5M per incident" }
];

export function ProblemSection() {
  return (
    <SectionWrapper id="problem" className="section-alt">
      <div className="max-w-4xl mx-auto text-center mb-14">
        <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">The Challenge</p>
        <h2 className="text-display font-serif mb-4">Why Your AI Pilot Is Stalling</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Healthcare organizations invest millions in AI, but three critical gaps prevent pilots from reaching production.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {gaps.map((gap, i) => (
          <Card key={i} className="hover-lift shadow-card border-border/60">
            <CardContent className="p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center"><gap.icon size={24} className="text-accent" /></div>
              <div className="text-4xl font-bold font-serif text-accent">{gap.stat}</div>
              <h3 className="text-lg font-bold font-serif">{gap.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{gap.description}</p>
              <p className="text-xs font-medium text-destructive/80 bg-destructive/5 rounded-lg px-3 py-2">{gap.cost}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-12 max-w-2xl mx-auto">
        <p className="text-lg text-foreground font-serif font-medium">I bridge these gaps — combining cutting-edge AI engineering with built-in governance so you deploy with confidence, not risk.</p>
      </div>
    </SectionWrapper>
  );
}
