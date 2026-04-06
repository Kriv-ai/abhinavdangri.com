import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Mic, ExternalLink } from "lucide-react";
import { LinkedinIcon } from "@/components/ui/icons";

const content = [
  {
    type: "Article",
    icon: FileText,
    title: "Why 79% of Healthcare AI Pilots Never Reach Production — And What CIOs Should Do Instead",
    description: "Analyzing the three critical gaps that prevent healthcare AI from reaching production, with a framework for AI readiness assessment.",
    tags: ["Healthcare AI", "Governance", "CIO Strategy"],
  },
  {
    type: "Speaking",
    icon: Mic,
    title: "Conference Speaking & Industry Events",
    description: "Speaking on AI governance, HIPAA-compliant AI deployments, and the future of regulated AI at industry conferences including HIMSS and ViVE.",
    tags: ["HIMSS", "ViVE", "AI Governance"],
  },
  {
    type: "LinkedIn",
    icon: LinkedinIcon,
    title: "Thought Leadership on LinkedIn",
    description: "Regular insights on governed AI, healthcare technology, and building AI consulting practices. Sharing lessons learned from production deployments.",
    tags: ["AI Strategy", "Healthcare", "Consulting"],
  },
];

export function ThoughtLeadershipSection() {
  return (
    <SectionWrapper id="thought-leadership" className="gradient-mesh">
      <div className="text-center mb-16">
        <h2 className="text-display mb-4">Thought Leadership</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Sharing insights on governed AI, healthcare compliance, and building production-grade AI systems.
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {content.map((item, i) => (
          <Card key={i} className="hover-lift">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon size={20} className="text-primary" />
                </div>
                <Badge>{item.type}</Badge>
              </div>
              <h3 className="font-semibold leading-snug">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-[10px]">{tag}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-10">
        <Button variant="outline" asChild>
          <a href="https://linkedin.com/in/abhinavdangri" target="_blank" rel="noopener noreferrer">
            Follow on LinkedIn <ExternalLink size={14} />
          </a>
        </Button>
      </div>
    </SectionWrapper>
  );
}
