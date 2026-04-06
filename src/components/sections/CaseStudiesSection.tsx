import { SectionWrapper } from "@/components/layout/SectionWrapper";

export function CaseStudiesSection() {
  return (
    <SectionWrapper id="results" className="section-alt">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
          What this looks like in practice.
        </h2>
        <p className="text-muted-foreground mb-12">
          A few examples from recent work — names generalized for confidentiality.
        </p>

        <div className="space-y-12">
          {/* Case Study 1 */}
          <article>
            <h3 className="text-lg font-serif font-semibold mb-3">Healthcare AI Governance Platform</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              A mid-size health system needed AI for clinical decision support but couldn't get past compliance. Off-the-shelf solutions didn't meet HIPAA requirements, and their internal team lacked governance expertise. I designed a governed deployment framework on Azure with end-to-end encryption, audit trails, and role-based access controls aligned to HHS AI mandates.
            </p>
            <p className="text-foreground font-medium text-sm">
              Production-ready in 78 days. Zero compliance findings in their first external audit.
            </p>
          </article>

          {/* Testimonial */}
          <blockquote className="border-l-2 border-accent pl-6 py-2">
            <p className="text-foreground italic leading-relaxed">
              "Abhinav's team took us from an AI pilot that had been stalled for 6 months to a fully governed production deployment in under 90 days. The compliance framework gave our board the confidence to approve the rollout."
            </p>
            <footer className="mt-3 text-sm text-muted-foreground">
              — CIO, Multi-Hospital Health System
            </footer>
          </blockquote>

          {/* Case Study 2 */}
          <article>
            <h3 className="text-lg font-serif font-semibold mb-3">Insurance Claims Intelligence</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Manual claims triage was creating 14-day processing backlogs at a regional carrier. I deployed an agentic AI system with human-in-the-loop safeguards that auto-triages, validates, and routes claims by complexity and risk.
            </p>
            <p className="text-foreground font-medium text-sm">
              Now processing 50,000+ claims/month. 73% reduction in average triage time.
            </p>
          </article>

          {/* Case Study 3 */}
          <article>
            <h3 className="text-lg font-serif font-semibold mb-3">Enterprise Workflow Automation</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              A $200M organization had 40+ manual processes across departments creating bottlenecks and data inconsistencies. I built an end-to-end automation platform using n8n, Power Automate, and custom Python integrations across finance, HR, and operations.
            </p>
            <p className="text-foreground font-medium text-sm">
              Eliminated 60% of manual operations. 2,000+ person-hours saved per quarter.
            </p>
          </article>

          {/* Testimonial */}
          <blockquote className="border-l-2 border-accent pl-6 py-2">
            <p className="text-foreground italic leading-relaxed">
              "What sets Abhinav apart is that he actually understands both the AI and the compliance side. Most consultants know one or the other — he bridges both."
            </p>
            <footer className="mt-3 text-sm text-muted-foreground">
              — VP of Technology, Regional Insurance Carrier
            </footer>
          </blockquote>

          {/* CTA */}
          <div className="pt-8 border-t border-border">
            <p className="text-foreground font-serif font-medium mb-4">Facing a similar challenge?</p>
            <button
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-sm transition-colors"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book a Strategy Call →
            </button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
