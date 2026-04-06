import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Search, PenTool, Rocket, BarChart3 } from "lucide-react";

const phases = [
  {
    step: "01",
    icon: Search,
    title: "Discovery & Assessment",
    duration: "2 weeks",
    description: "We map your AI readiness, data infrastructure, compliance gaps, and organizational priorities. You get a clear picture of where you stand.",
    outcome: "AI Readiness Report with prioritized roadmap"
  },
  {
    step: "02",
    icon: PenTool,
    title: "Governance Architecture",
    duration: "3-4 weeks",
    description: "I design your compliance framework, data governance model, and AI deployment architecture — HIPAA/HHS-compliant from the ground up.",
    outcome: "Production-ready architecture & compliance framework"
  },
  {
    step: "03",
    icon: Rocket,
    title: "Pilot Deployment",
    duration: "6-8 weeks",
    description: "We build and deploy your first governed AI solution with human-in-the-loop safeguards, monitoring, and audit trails.",
    outcome: "Live AI system passing compliance validation"
  },
  {
    step: "04",
    icon: BarChart3,
    title: "Scale & Monitor",
    duration: "Ongoing",
    description: "Expand to additional use cases with model monitoring, drift detection, bias auditing, and continuous governance.",
    outcome: "Scalable AI operations with full observability"
  }
];

export function HowIWorkSection() {
  return (
    <SectionWrapper id="process" className="section-alt">
      <div className="text-center mb-14">
        <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">The Process</p>
        <h2 className="text-display font-serif mb-4">How We Get You to Production</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A proven 4-phase approach that takes you from AI uncertainty to governed production — typically in 90 days.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-1">
          {phases.map((phase, i) => (
            <div key={i} className="relative grid md:grid-cols-[80px_1fr] gap-6 p-6 rounded-xl hover:bg-card transition-colors group">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <phase.icon size={24} className="text-primary" />
                </div>
                {i < phases.length - 1 && (
                  <div className="w-px h-full bg-border mt-2 hidden md:block" />
                )}
              </div>
              <div className="space-y-2">
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="text-xs font-bold text-accent uppercase tracking-widest">{phase.step}</span>
                  <h3 className="text-xl font-bold font-serif">{phase.title}</h3>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">{phase.duration}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
                <p className="text-sm font-medium text-primary">Deliverable: {phase.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
