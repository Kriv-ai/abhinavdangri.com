import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { LinkedinIcon } from "@/components/ui/icons";
import { profile } from "@/data/profile";

export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8">
          About me.
        </h2>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            I'm Abhinav Dangri — the founder and CEO of <a href="https://kriv.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Kriv AI</a>, an AI consulting firm built specifically for regulated industries. We help healthcare, insurance, and life sciences organizations deploy production-grade AI that passes compliance from day one.
          </p>

          <p>
            Before Kriv AI, I built and ran Alankrat Productions — a 15-person digital services agency serving 500+ clients across four verticals. I closed it to focus entirely on the problem I kept encountering: organizations investing in AI but unable to get it past compliance and into production. That gap became my company's entire focus.
          </p>

          <p>
            I studied Computer Engineering at NYU, graduated with a 3.91 GPA, and was inducted into Tau Beta Pi (the top 12.5% of engineering students). I hold 50+ professional certifications across Azure, AWS, and Databricks — including the Databricks Certified Machine Learning Professional and Microsoft Power BI Associate. Kriv AI is an active Databricks Consulting & System Integration Partner.
          </p>

          <p>
            Outside of work, I volunteer with the India Heritage Foundation NJ/NY, where I lead technical operations and have helped coordinate fundraising campaigns raising $120,000+ for community projects. I've been involved since 2017.
          </p>

          <p>
            I'm based in East Brunswick, New Jersey.
          </p>
        </div>

        <div className="flex items-center gap-4 mt-8 pt-6 border-t border-border text-sm text-muted-foreground">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
            <LinkedinIcon size={16} /> LinkedIn
          </a>
          <span>|</span>
          <a href={`mailto:${profile.email}`} className="hover:text-primary transition-colors">{profile.email}</a>
          <span>|</span>
          <span>{profile.location}</span>
        </div>
      </div>
    </SectionWrapper>
  );
}
