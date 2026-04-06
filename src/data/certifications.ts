export interface Certification {
  name: string;
  issuer: string;
  category: string;
  year?: string;
  featured?: boolean;
}

export const certifications: Certification[] = [
  { name: "Certified Machine Learning Professional", issuer: "Databricks", category: "AI/ML", year: "2026", featured: true },
  { name: "Power BI Data Analyst Associate (PL-300)", issuer: "Microsoft", category: "Data", year: "2024", featured: true },
  { name: "Azure Administrator Associate (AZ-104)", issuer: "Microsoft", category: "Cloud", year: "2026" },
  { name: "Azure Solutions Architect Expert (AZ-305)", issuer: "Microsoft", category: "Cloud", year: "2026" },
  { name: "Azure AI Engineer Associate (AI-102)", issuer: "Microsoft", category: "AI/ML" },
  { name: "Azure Data Scientist Associate (DP-100)", issuer: "Microsoft", category: "AI/ML" },
  { name: "AWS Solutions Architect Associate", issuer: "AWS", category: "Cloud" },
  { name: "AWS AI Practitioner", issuer: "AWS", category: "AI/ML" },
];

export const certCategories = ["All", "AI/ML", "Cloud", "Data"];

export const skills = {
  "AI & Machine Learning": [
    "Agentic AI Architecture",
    "LLM Fine-tuning & RAG",
    "Multi-Agent Systems",
    "AI Governance (NIST AI RMF)",
    "MLOps for Regulated Industries",
    "Model Monitoring & Bias Detection"
  ],
  "Healthcare & Compliance": [
    "HIPAA Compliance",
    "HHS AI Governance",
    "EU AI Act Compliance",
    "Clinical Workflow Automation",
    "Healthcare IT Architecture"
  ],
  "Cloud & Data": [
    "Microsoft Azure (AI Foundry, Cognitive Services)",
    "Databricks (MLOps, Unity Catalog)",
    "AWS (Lambda, EC2, Data Services)",
    "Data Pipeline Architecture (ETL/ELT)",
    "Multi-Cloud Strategy"
  ],
  "Languages & Tools": [
    "Python",
    "TypeScript",
    "Azure Ecosystems",
    "Power Automate & M365",
    "n8n / Zapier / Make.com",
    "Git / GitHub",
    "Power BI"
  ]
};
