export interface CaseStudy {
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  outcome: string;
  metrics: string[];
  technologies: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    title: "Healthcare AI Governance Platform",
    industry: "Healthcare",
    challenge: "A mid-size health system needed to deploy AI for clinical decision support but couldn't meet HIPAA requirements with off-the-shelf solutions.",
    solution: "Built a governed AI deployment framework on Azure with end-to-end encryption, audit trails, and role-based access controls meeting HHS AI governance mandates.",
    outcome: "Production-ready in 78 days with zero compliance findings during their first audit.",
    metrics: ["78-day deployment", "Zero compliance findings", "HIPAA-compliant from day one"],
    technologies: ["Azure AI Foundry", "HIPAA Framework", "MLOps"]
  },
  {
    title: "Insurance Claims Intelligence",
    industry: "Insurance",
    challenge: "Manual claims triage was creating 14-day processing backlogs, increasing customer complaints and operational costs.",
    solution: "Deployed an agentic AI system with human-in-the-loop safeguards that auto-triages, validates, and routes claims based on complexity and risk.",
    outcome: "Processing 50,000+ claims/month with 73% reduction in average triage time.",
    metrics: ["50K+ claims/month", "73% faster triage", "Human-in-the-loop safeguards"],
    technologies: ["Agentic AI", "Databricks", "NLP"]
  },
  {
    title: "Clinical NLP Pipeline",
    industry: "Healthcare",
    challenge: "Clinicians were spending 3+ hours daily on documentation extraction from EHR systems, pulling them away from patient care.",
    solution: "HIPAA-compliant entity extraction pipeline integrated with Epic/Cerner EHR systems for automated clinical data extraction.",
    outcome: "Reduced documentation time by 65%, freeing clinicians for 2+ additional patient hours daily.",
    metrics: ["65% time reduction", "2+ hours freed daily", "Epic/Cerner integrated"],
    technologies: ["NLP", "EHR Integration", "HIPAA", "Azure"]
  },
  {
    title: "Enterprise Workflow Automation",
    industry: "Enterprise",
    challenge: "A $200M organization had 40+ manual processes across departments, creating bottlenecks and data inconsistencies.",
    solution: "End-to-end workflow automation platform using n8n, Power Automate, and custom Python integrations across finance, HR, and operations.",
    outcome: "Eliminated 60% of manual operations, saving 2,000+ person-hours per quarter.",
    metrics: ["60% manual ops eliminated", "2,000+ hours saved/quarter", "40+ processes automated"],
    technologies: ["n8n", "Power Automate", "Python", "Azure"]
  }
];
