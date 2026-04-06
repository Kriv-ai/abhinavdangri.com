export interface Project {
  title: string;
  industry: string;
  description: string;
  technologies: string[];
  outcome: string;
}

export const projects: Project[] = [
  {
    title: "Healthcare AI Governance Platform",
    industry: "Healthcare",
    description: "HIPAA-compliant AI deployment framework on Azure, enabling healthcare organizations to deploy governed AI at scale.",
    technologies: ["Azure AI Foundry", "HIPAA", "MLOps", "Governance"],
    outcome: "Production-ready compliance framework for healthcare AI"
  },
  {
    title: "Insurance Claims Intelligence System",
    industry: "Insurance",
    description: "Agentic AI system for automated claims processing with human-in-the-loop safeguards and fraud detection.",
    technologies: ["Agentic AI", "Databricks", "NLP", "Automation"],
    outcome: "Processing 50K+ claims/month with AI-assisted triage"
  },
  {
    title: "Clinical NLP Pipeline",
    industry: "Healthcare",
    description: "HIPAA-compliant entity extraction pipeline for Epic/Cerner EHR integrations with clinical decision support.",
    technologies: ["NLP", "EHR Integration", "HIPAA", "Azure"],
    outcome: "Automated clinical data extraction for healthcare systems"
  },
  {
    title: "Pharmaceutical Safety Monitoring",
    industry: "Life Sciences",
    description: "Adverse event detection system with FDA FAERS integration for pharmaceutical safety surveillance.",
    technologies: ["NLP", "FDA FAERS", "Safety Monitoring", "ML"],
    outcome: "Real-time adverse event detection and reporting"
  },
  {
    title: "Enterprise Workflow Automation Suite",
    industry: "Enterprise",
    description: "End-to-end workflow automation platform reducing manual operations by 60% across multiple client organizations.",
    technologies: ["n8n", "Power Automate", "Python", "Azure"],
    outcome: "40-60% process reduction per client engagement"
  },
  {
    title: "Data Lakehouse Implementation",
    industry: "Finance",
    description: "Databricks-powered data lakehouse with Unity Catalog for enterprise data governance and analytics.",
    technologies: ["Databricks", "Unity Catalog", "Data Engineering", "Spark"],
    outcome: "Unified data platform with governed access controls"
  }
];

export const industries = ["All", "Healthcare", "Insurance", "Life Sciences", "Enterprise", "Finance"];
