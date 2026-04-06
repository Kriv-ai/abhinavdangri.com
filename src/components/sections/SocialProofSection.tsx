import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { profile } from "@/data/profile";
import { Award, Shield, Cpu, Clock } from "lucide-react";

const metrics = [
  { icon: Cpu, value: "16+", label: "Production AI Solutions Deployed", color: "text-primary" },
  { icon: Shield, value: "100%", label: "HIPAA Compliant From Day One", color: "text-green-600" },
  { icon: Clock, value: "90 Days", label: "Average Pilot to Production", color: "text-accent" },
  { icon: Award, value: "50+", label: "Professional Certifications", color: "text-primary" },
];

export function SocialProofSection() {
  return (
    <section className="py-12 border-b border-border bg-card/50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Partner logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mb-10 opacity-70">
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">D</div>
            <span className="text-sm font-medium">Databricks Partner</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="w-8 h-8 rounded bg-blue-500/10 flex items-center justify-center text-xs font-bold text-blue-600">A</div>
            <span className="text-sm font-medium">Microsoft Azure</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="w-8 h-8 rounded bg-purple-500/10 flex items-center justify-center text-xs font-bold text-purple-600">N</div>
            <span className="text-sm font-medium">NYU Alumni</span>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((metric, i) => (
            <div key={i} className="text-center">
              <metric.icon size={24} className={`mx-auto mb-2 ${metric.color}`} />
              <div className="text-2xl md:text-3xl font-bold text-foreground">{metric.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
