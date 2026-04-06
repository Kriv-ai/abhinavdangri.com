import { useState } from "react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects, industries } from "@/data/projects";
import { Layers } from "lucide-react";

export function ProjectsSection() {
  const [activeIndustry, setActiveIndustry] = useState("All");

  const filteredProjects = activeIndustry === "All"
    ? projects
    : projects.filter((p) => p.industry === activeIndustry);

  return (
    <SectionWrapper id="projects">
      <div className="text-center mb-16">
        <h2 className="text-display mb-4">Projects & Solutions</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Production-grade AI solutions deployed across healthcare, insurance, life sciences, and finance.
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
      </div>

      {/* Industry filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {industries.map((ind) => (
          <button
            key={ind}
            onClick={() => setActiveIndustry(ind)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
              activeIndustry === ind
                ? "bg-primary text-primary-foreground shadow-glow-sm"
                : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
            }`}
          >
            {ind}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, i) => (
          <Card key={i} className="hover-lift group">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Layers size={20} className="text-primary" />
                </div>
                <Badge variant="outline" className="text-xs">{project.industry}</Badge>
              </div>
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-[10px]">{tech}</Badge>
                ))}
              </div>
              <div className="pt-2 border-t border-border">
                <p className="text-xs text-accent font-medium">{project.outcome}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
