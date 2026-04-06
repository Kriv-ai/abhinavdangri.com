import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "AI Strategy & Readiness Assessment",
    description: "I evaluate your data infrastructure, compliance posture, and organizational readiness — then deliver an honest assessment with a prioritized 90-day roadmap. Deliverables: AI readiness scorecard, data governance gap analysis, compliance risk assessment, and 90-day action plan. Typically 2–3 weeks. Engagements start at $15K."
  },
  {
    title: "Governed AI Implementation",
    description: "End-to-end agentic AI deployment with HIPAA compliance, human-in-the-loop safeguards, and audit trails built in from day one. Most clients go from kickoff to production in 90 days. Implementations range from $50K–$300K."
  },
  {
    title: "AI Governance & Compliance Frameworks",
    description: "For organizations deploying AI but lacking governance infrastructure. I build HIPAA-compliant frameworks, EU AI Act readiness programs, and ongoing Governance-as-a-Service. This is what keeps you audit-ready."
  },
  {
    title: "Fractional CTO / Strategic Advisory",
    description: "Senior AI leadership without full-time overhead. I advise on technology strategy, vendor evaluation, and team development. Available 10–20 hours/month starting at $8K/month."
  }
];

export function ServicesSection() {
  return (
    <SectionWrapper id="services">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
          How I help.
        </h2>
        <p className="text-muted-foreground mb-10">
          Every engagement is structured around your specific challenge. No cookie-cutter deliverables.
        </p>

        <div className="bg-primary/[0.03] border border-border/60 rounded-xl p-6 mb-12">
          <h3 className="text-lg font-serif font-bold text-foreground mb-2">The 90-Day AI Governance Sprint</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            My structured approach to taking healthcare AI from pilot to governed production. Four phases — Discovery, Architecture, Deployment, Scale — each with clear deliverables, compliance checkpoints, and a defined timeline. No open-ended engagements.
          </p>
        </div>

        <div className="space-y-8">
          {services.map((service, i) => (
            <div key={i} className="border-l-2 border-border hover:border-primary transition-colors pl-6">
              <h3 className="text-lg font-semibold font-serif mb-2">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Button
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Discuss your situation <ArrowRight size={14} />
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
