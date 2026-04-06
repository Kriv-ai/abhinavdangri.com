import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";

const idealFor = [
  "CIOs and CTOs at health systems with 500+ beds",
  "Organizations with $10M-$500M revenue exploring AI",
  "Teams with an AI pilot stalled for 3+ months",
  "Leaders facing compliance pressure (HIPAA, HHS, EU AI Act)",
  "CDOs building data governance for AI readiness",
  "Organizations needing a fractional CTO for AI strategy"
];

const notFor = [
  "Startups looking for a free consultation",
  "Organizations seeking off-the-shelf SaaS tools",
  "Teams not ready to invest in production-grade AI",
  "Projects without executive sponsorship"
];

export function WhoThisIsForSection() {
  return (
    <SectionWrapper id="ideal-client">
      <div className="text-center mb-14">
        <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Is This Right For You?</p>
        <h2 className="text-display font-serif mb-4">Who I Work With</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          I work best with healthcare and regulated industry leaders who are serious about deploying AI responsibly.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card className="shadow-card">
          <CardContent className="p-8">
            <h3 className="text-lg font-bold font-serif mb-6 text-primary">This is for you if...</h3>
            <ul className="space-y-4">
              {idealFor.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-green-600 shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-card border-border/50">
          <CardContent className="p-8">
            <h3 className="text-lg font-bold font-serif mb-6 text-muted-foreground">This might not be a fit if...</h3>
            <ul className="space-y-4">
              {notFor.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XCircle size={18} className="text-muted-foreground/60 shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
