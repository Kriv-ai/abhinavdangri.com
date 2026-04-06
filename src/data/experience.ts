export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  description: string;
  highlights: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "Kriv AI Inc.",
    role: "Founder & CEO",
    period: "May 2025 — Present",
    current: true,
    description: "AI consulting firm purpose-built for regulated industries — healthcare, life sciences, insurance, and finance.",
    highlights: [
      "Delivered 16 production-grade AI solutions across healthcare, life sciences, insurance, and finance",
      "Active Databricks Consulting & System Integration (C&SI) Partner",
      "Managing distributed delivery network of 20+ engineers across US and India",
      "Achieving 70%+ margins through managed global delivery model",
      "Serving organizations from $10M to $500M in revenue"
    ]
  },
  {
    company: "Alankrat Productions",
    role: "Founder & Managing Director",
    period: "April 2020 — April 2025",
    description: "Built and scaled a 15-person digital services agency serving 500+ clients across 4 verticals.",
    highlights: [
      "Managed end-to-end operations: client delivery, team hiring, P&L, vendor relationships",
      "Pioneered AI integration — ML-powered content automation, AI-assisted video editing",
      "Reduced production timelines by 40% through AI integration",
      "Revenue: $50,000+ annually with 500+ concurrent client relationships"
    ]
  },
  {
    company: "Independent Consultant",
    role: "AI & Cloud Consultant",
    period: "Jan 2024 — May 2025",
    description: "Delivered AI strategy, cloud architecture, and workflow automation for healthcare organizations and mid-market CTOs.",
    highlights: [
      "AI readiness evaluations for healthcare organizations",
      "Azure cloud migrations with IAM, networking, and compliance",
      "Workflow automation achieving 40-60% process reduction per client",
      "Fractional technology advisor for 3 mid-market CTOs simultaneously"
    ]
  },
  {
    company: "New York University",
    role: "AI & ML Ops Engineer",
    period: "Part-time",
    description: "Designed and deployed AI/ML infrastructure for university research and administrative operations.",
    highlights: [
      "Built production ML pipelines for multimedia automation",
      "Data engineering workflows increasing operational efficiency by 35%",
      "Model lifecycle management: training, versioning, evaluation, automated retraining"
    ]
  },
  {
    company: "India Heritage Foundation NJ/NY",
    role: "Technical Operations Lead & Volunteer",
    period: "Oct 2017 — Present",
    current: true,
    description: "Leading technical operations and community engagement for cultural non-profit serving Indian-American community.",
    highlights: [
      "Supporting 50+ annual events with digital infrastructure",
      "Coordinated fundraising campaigns raising $120,000+ for community projects",
      "Managed digital infrastructure: website, social media, analytics"
    ]
  }
];
