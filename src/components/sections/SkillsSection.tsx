import { useState } from "react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { skills, certifications, certCategories } from "@/data/certifications";
import { Award, CheckCircle } from "lucide-react";

export function SkillsSection() {
  const [activeCertCategory, setActiveCertCategory] = useState("All");

  const filteredCerts = activeCertCategory === "All"
    ? certifications
    : certifications.filter((c) => c.category === activeCertCategory);

  return (
    <SectionWrapper id="skills" className="gradient-mesh">
      <div className="text-center mb-16">
        <h2 className="text-display mb-4">Skills & Certifications</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          50+ professional certifications across Azure, AWS, Databricks, and AI/ML platforms.
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Technical Skills */}
        <div>
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <CheckCircle size={20} className="text-accent" />
            Technical Expertise
          </h3>
          <div className="space-y-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h4 className="text-sm font-semibold text-primary mb-3">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Award size={20} className="text-accent" />
            Certifications
          </h3>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            {certCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCertCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all ${
                  activeCertCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {filteredCerts.map((cert, i) => (
              <Card key={i} className="hover-lift">
                <CardContent className="p-4 flex items-start justify-between gap-3">
                  <div>
                    <p className="font-medium text-sm">{cert.name}</p>
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {cert.year && (
                      <span className="text-xs text-muted-foreground">{cert.year}</span>
                    )}
                    {cert.featured && (
                      <Badge variant="accent" className="text-[10px]">Featured</Badge>
                    )}
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
