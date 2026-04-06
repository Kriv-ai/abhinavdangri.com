import { useState } from "react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  { q: "How are you different from Deloitte, Accenture, or the Big 4?", a: "I combine hands-on AI engineering with deep compliance expertise — a rare combination. Big 4 firms assign junior consultants to your project. I'm personally involved in every engagement, and my team of 20+ engineers delivers at a fraction of enterprise firm pricing with 70%+ margins through our managed global delivery model." },
  { q: "What does a typical engagement cost?", a: "AI Readiness Assessments start at $15K. Agentic AI implementations range from $50K-$300K depending on scope. Fractional CTO/CIO advisory starts at $8K/month. I'll give you an honest range after our strategy call — no surprises." },
  { q: "How do you ensure HIPAA compliance?", a: "Compliance is built into the architecture from day one — not bolted on after. Every solution includes encryption at rest and in transit, audit trails, role-based access controls, data residency requirements, and documentation ready for HHS/OCR audits." },
  { q: "What if we're audited after deployment?", a: "You'll be ready. I deliver comprehensive compliance documentation, audit trail configurations, and governance frameworks specifically designed to satisfy HIPAA, HHS AI governance mandates, and SOC 2 requirements." },
  { q: "How long does a typical engagement take?", a: "Most clients go from kickoff to governed production in 90 days. Discovery takes 2 weeks, architecture 3-4 weeks, and pilot deployment 6-8 weeks. Complex enterprise deployments may take 4-6 months." },
  { q: "Can you work with our existing vendors and platforms?", a: "Absolutely. I'm platform-agnostic but specialize in Azure, Databricks, and AWS. I integrate with your existing EHR systems (Epic, Cerner), data infrastructure, and compliance tooling." },
  { q: "What's your track record in healthcare specifically?", a: "16 production-grade AI solutions deployed across healthcare, insurance, and life sciences. Active Databricks C&SI Partner. Our systems process 50,000+ claims monthly. Zero compliance findings in client audits." },
  { q: "Do you do the technical work yourself or just advise?", a: "Both. I personally design system architecture and governance frameworks. My team of 20+ engineers handles implementation. I stay involved throughout — this isn't a hand-off to junior staff." },
  { q: "What happens after the engagement ends?", a: "You own everything we build. I provide thorough documentation, team training, and optional ongoing Governance-as-a-Service ($10K-$25K/month) for continuous monitoring, model maintenance, and compliance updates." },
  { q: "How much of your time will we get?", a: "For advisory/fractional CTO engagements, I'm directly available 10-20 hours/month. For implementation projects, I lead architecture and governance while my engineering team handles day-to-day development. You always have direct access to me." }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionWrapper id="faq" className="section-alt">
      <div className="text-center mb-14">
        <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Common Questions</p>
        <h2 className="text-display font-serif mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Answers to the questions enterprise leaders ask before working together.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-2">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-card rounded-lg border border-border/60 overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/30 transition-colors"
            >
              <span className="font-semibold text-sm pr-4">{faq.q}</span>
              <ChevronDown size={18} className={cn("shrink-0 text-muted-foreground transition-transform duration-200", openIndex === i && "rotate-180")} />
            </button>
            {openIndex === i && (
              <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border/40 pt-4">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <p className="text-muted-foreground mb-4">Still have questions?</p>
        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
          Book a 20-Minute Conversation <ArrowRight size={14} />
        </Button>
      </div>
    </SectionWrapper>
  );
}
