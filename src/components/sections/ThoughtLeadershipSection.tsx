import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Mic, ExternalLink } from "lucide-react";
import { LinkedinIcon } from "@/components/ui/icons";

const content = [
  {
    type: "Featured Article",
    icon: FileText,
    title: "Why 79% of Healthcare AI Pilots Never Reach Production",
    description: "An analysis of the three critical gaps preventing healthcare AI from reaching production, with an actionable framework for CIOs.",
    tags: ["Healthcare AI", "Governance", "CIO Strategy"],
    cta: "Read the Article"
  },
  {
    type: "Speaking",
    icon: Mic,
    title: "Conference Speaking",
    description: "Speaking on AI governance, HIPAA-compliant deployments, and the future of regulated AI at HIMSS, ViVE, and industry events.",
    tags: ["HIMSS", "ViVE", "AI Governance"],
    cta: "Invite to Speak"
  },
  {
    type: "LinkedIn",
    icon: LinkedinIcon,
    title: "Weekly AI Insights",
    description: "Regular insights on governed AI, healthcare compliance, and lessons from production deployments. 2,000+ followers.",
    tags: ["Weekly Posts", "AI Strategy", "Healthcare"],
    cta: "Follow on LinkedIn"
  },
];

export function ThoughtLeadershipSection() {
  return (
    <SectionWrapper id="insights" className="section-alt">
      <div className="text-center mb-14">
        <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Insights</p>
        <h2 className="text-display font-serif mb-4">Thought Leadership</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          I share what I learn from deploying AI in regulated industries — the wins, the failures, and the frameworks that work.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {content.map((item, i) => (
          <Card key={i} className="hover-lift border-border/50">
            <CardContent className="p-7 space-y-4 flex flex-col h-full">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon size={20} className="text-primary" />
                </div>
                <Badge variant="secondary" className="text-xs">{item.type}</Badge>
              </div>
              <h3 className="font-bold leading-snug">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{item.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-[10px]">{tag}</Badge>
                ))}
              </div>
              <Button variant="ghost" size="sm" className="w-fit text-primary hover:text-primary/80 p-0 h-auto font-medium">
                {item.cta} <ExternalLink size={12} className="ml-1" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
