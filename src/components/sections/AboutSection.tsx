import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { profile } from "@/data/profile";
import { GraduationCap, Award, Users, Heart } from "lucide-react";

const milestones = [
  { icon: GraduationCap, year: "2025", title: "NYU — B.S. Computer Engineering", detail: "3.91 GPA, Tau Beta Pi Honor Society (top 12.5%)" },
  { icon: Users, year: "2020–2025", title: "Alankrat Productions — Founder", detail: "Built 15-person agency serving 500+ clients across 4 verticals" },
  { icon: Award, year: "2025–Present", title: "Kriv AI — Founder & CEO", detail: "16 production AI solutions for healthcare & regulated industries" },
  { icon: Heart, year: "2017–Present", title: "India Heritage Foundation", detail: "Technical operations lead, $120K+ raised for community projects" },
];

export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Story */}
          <div className="lg:col-span-3 space-y-5">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider">My Story</p>
            <h2 className="text-display font-serif">Why I Focus on Governed AI</h2>

            {profile.bio.map((paragraph, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="flex flex-wrap gap-2 pt-2">
              <Badge>NYU 3.91 GPA</Badge>
              <Badge>Tau Beta Pi</Badge>
              <Badge variant="accent">50+ Certifications</Badge>
              <Badge>Databricks ML Professional</Badge>
              <Badge>Power BI (PL-300)</Badge>
            </div>
          </div>

          {/* Right: Milestones */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Journey</p>
            {milestones.map((m, i) => (
              <Card key={i} className="border-border/50">
                <CardContent className="p-4 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <m.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{m.year}</p>
                    <p className="font-semibold text-sm">{m.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{m.detail}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
