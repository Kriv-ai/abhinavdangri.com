import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Database, Rocket, ShieldAlert } from "lucide-react";

const gaps = [
  {
    icon: Database,
    title: "The Data Readiness Gap",
    stat: "73%",
    description: "of organizations don't have AI-ready data infrastructure. Models trained on messy, ungoverned data produce unreliable results that can't meet compliance requirements."
  },
  {
    icon: Rocket,
    title: "The Production Gap",
    stat: "79%",
    description: "of healthcare AI pilots never reach production. The gap isn't technology — it's governance, compliance frameworks, and operational readiness."
  },
  {
    icon: ShieldAlert,
    title: "The Governance Deficit",
    stat: "61%",
    description: "of enterprise leaders cite regulatory risk as their #1 barrier to AI adoption. Without built-in compliance, every AI deployment is a liability."
  }
];

export function ProblemSection() {
  return (
    <SectionWrapper id="problem">
      <div className="max-w-4xl mx-auto text-center mb-14">
        <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">The AI Paradox</p>
        <h2 className="text-display mb-4">Your AI Investment Is Stalling. Here's Why.</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Companies are spending millions on AI, but few see material impact. Three critical gaps prevent pilots from reaching production in regulated industries.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {gaps.map((gap, i) => (
          <Card key={i} className="hover-lift border-border/50">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto">
                <gap.icon size={28} className="text-accent" />
              </div>
              <div className="text-4xl font-bold text-accent">{gap.stat}</div>
              <h3 className="text-lg font-semibold">{gap.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{gap.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12 max-w-2xl mx-auto">
        <p className="text-lg text-foreground font-medium">
          I bridge these gaps — combining cutting-edge AI with built-in governance so you can deploy with confidence, not risk.
        </p>
      </div>
    </SectionWrapper>
  );
}
