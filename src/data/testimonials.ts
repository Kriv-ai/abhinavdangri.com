export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  industry: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "Abhinav's team took us from an AI pilot that had been stalled for 6 months to a fully governed production deployment in under 90 days. The compliance framework they built gave our board the confidence to approve the rollout.",
    name: "Healthcare CIO",
    title: "Chief Information Officer",
    company: "Multi-Hospital Health System",
    industry: "Healthcare"
  },
  {
    quote: "What sets Abhinav apart is that he actually understands both the AI and the compliance side. Most consultants know one or the other — he bridges both, which is exactly what we needed.",
    name: "Insurance VP",
    title: "VP of Technology",
    company: "Regional Insurance Carrier",
    industry: "Insurance"
  },
  {
    quote: "The workflow automation platform Kriv AI built eliminated 60% of our manual processes. The ROI was clear within the first quarter, and the system has been running reliably ever since.",
    name: "Enterprise COO",
    title: "Chief Operating Officer",
    company: "Mid-Market Enterprise ($200M Revenue)",
    industry: "Enterprise"
  }
];
