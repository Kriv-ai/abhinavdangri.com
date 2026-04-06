import { SectionWrapper } from "@/components/layout/SectionWrapper";

export function ProblemSection() {
  return (
    <SectionWrapper id="problem">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8">
          Here's what I keep seeing.
        </h2>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Healthcare organizations invest heavily in AI — hiring data science teams, running pilots, building proofs of concept. Then the pilot works in the lab, and everything stalls. The compliance team has concerns. Legal wants more review. The board asks about risk. Eighteen months later, the pilot is still "in progress."
          </p>

          <p>
            I've seen this pattern at over a dozen organizations. The technology isn't the problem. The problem is that governance, compliance, and operational readiness are treated as things you figure out later. By the time "later" arrives, the project has lost momentum, the champion has moved on, and the investment is written off.
          </p>

          <p>
            <strong className="text-foreground">79% of healthcare AI pilots never reach production.</strong> Not because the AI doesn't work — because the organization wasn't ready to deploy it responsibly.
          </p>

          <p>
            I solve this by building compliance into the architecture from day one. HIPAA, HHS mandates, audit trails, data governance — all designed in, not bolted on. That's what gets AI from the lab to production in 90 days instead of 18 months.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
