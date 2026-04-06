import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Shield, Cloud, Workflow, BarChart3, Users, ExternalLink } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Strategy & Readiness",
    description: "AI readiness assessments, governance gap analysis, and strategic roadmaps for organizations entering the AI space."
  },
  {
    icon: Workflow,
    title: "Agentic AI Implementation",
    description: "End-to-end agentic AI platforms with human-in-the-loop safeguards, from pilot to production in 90 days."
  },
  {
    icon: Shield,
    title: "AI Governance & Compliance",
    description: "HIPAA-compliant AI frameworks, EU AI Act compliance programs, and Governance-as-a-Service (GaaS)."
  },
  {
    icon: Cloud,
    title: "Cloud & Data Platforms",
    description: "Databricks, Azure, and AWS implementations — data lakehouses, MLOps pipelines, and multi-cloud architectures."
  },
  {
    icon: BarChart3,
    title: "MLOps & Monitoring",
    description: "Regulated CI/CD pipelines, model monitoring, drift detection, bias auditing, and explainability dashboards."
  },
  {
    icon: Users,
    title: "Fractional CTO/CIO",
    description: "Strategic technology leadership for organizations that need senior AI expertise without full-time overhead."
  }
];

export function ServicesSection() {
  return (
    <SectionWrapper id="services">
      <div className="text-center mb-16">
        <h2 className="text-display mb-4">What I Do</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Through Kriv AI, I help healthcare and regulated industry organizations deploy AI that passes compliance from day one.
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <Card key={i} className="hover-lift group">
            <CardContent className="p-6 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <service.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button variant="outline" size="lg" asChild>
          <a href="https://kriv.ai" target="_blank" rel="noopener noreferrer">
            Learn more at Kriv AI <ExternalLink size={16} />
          </a>
        </Button>
      </div>
    </SectionWrapper>
  );
}
