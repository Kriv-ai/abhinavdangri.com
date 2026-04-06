import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Shield, Cloud, Workflow, BarChart3, Users, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Strategy & Readiness",
    problem: "Unsure if your organization is ready for AI?",
    outcome: "Get a clear roadmap with an AI readiness assessment, governance gap analysis, and 90-day action plan.",
    typical: "Engagements from $15K"
  },
  {
    icon: Workflow,
    title: "Agentic AI Implementation",
    problem: "AI pilot stuck in the lab?",
    outcome: "Go from pilot to governed production in 90 days with human-in-the-loop safeguards and compliance built in.",
    typical: "Engagements from $50K"
  },
  {
    icon: Shield,
    title: "AI Governance & Compliance",
    problem: "Board won't approve AI due to regulatory risk?",
    outcome: "HIPAA-compliant AI framework, EU AI Act readiness, and Governance-as-a-Service that satisfies auditors.",
    typical: "Engagements from $50K"
  },
  {
    icon: Cloud,
    title: "Cloud & Data Platforms",
    problem: "Data scattered across systems with no governance?",
    outcome: "Databricks/Azure data lakehouse with Unity Catalog, governed pipelines, and analytics-ready infrastructure.",
    typical: "Engagements from $75K"
  },
  {
    icon: BarChart3,
    title: "MLOps & Monitoring",
    problem: "Models drifting in production with no visibility?",
    outcome: "Regulated CI/CD pipelines with model monitoring, drift detection, bias auditing, and explainability dashboards.",
    typical: "Included in implementation"
  },
  {
    icon: Users,
    title: "Fractional CTO / CIO",
    problem: "Need senior AI leadership without full-time overhead?",
    outcome: "Strategic technology guidance, team mentoring, and vendor evaluation from an experienced AI leader.",
    typical: "From $8K/month"
  }
];

export function ServicesSection() {
  return (
    <SectionWrapper id="services">
      <div className="text-center mb-14">
        <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">How I Help</p>
        <h2 className="text-display mb-4">From AI Uncertainty to Governed Production</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Every engagement starts with your specific challenge. No cookie-cutter solutions — just production-grade AI that passes compliance.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((service, i) => (
          <Card key={i} className="hover-lift border-border/50 group">
            <CardContent className="p-7 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                <service.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold">{service.title}</h3>
              <p className="text-sm text-accent font-medium italic">{service.problem}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.outcome}</p>
              <p className="text-xs text-muted-foreground pt-2 border-t border-border">{service.typical}</p>
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
