import {
  Braces,
  Bug,
  FileCheck2,
  Gauge,
  GitBranch,
  Laptop2,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export type SkillAccent =
  | "blue"
  | "cyan"
  | "purple"
  | "green"
  | "orange"
  | "pink";

export type SkillGroup = {
  icon: LucideIcon;
  title: string;
  description: string;
  tools: string[];
  accent: SkillAccent;
};

export type LearningItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const skillGroups: SkillGroup[] = [
  {
    icon: Bug,
    title: "Testing",
    description:
      "Manual, functional, regression, smoke, sanity, UI, end-to-end, negative, boundary and exploratory testing.",
    tools: ["Manual QA", "Regression", "Smoke", "Boundary"],
    accent: "blue",
  },
  {
    icon: Braces,
    title: "API & Data",
    description:
      "REST API validation, request and response checks, status codes, authentication, JSON and UI-to-API comparison.",
    tools: ["Postman", "JSON", "Excel", "SQL"],
    accent: "cyan",
  },
  {
    icon: FileCheck2,
    title: "Document Validation",
    description:
      "Field-level comparison of OCR- and LLM-extracted financial data against original source documents.",
    tools: ["OCR", "LLM Output", "PDF Testing", "Data Mapping"],
    accent: "purple",
  },
  {
    icon: ShieldCheck,
    title: "FinTech & KYC",
    description:
      "Testing financial workflows, IDP dashboards, KYC/eKYC journeys, permissions and session handling.",
    tools: ["FinTech", "IDP", "KYC", "eKYC"],
    accent: "green",
  },
  {
    icon: GitBranch,
    title: "Defect Management",
    description:
      "Clear defect documentation with reproduction steps, evidence, impact and expected versus actual results.",
    tools: ["Jira", "Retesting", "Evidence", "Triage"],
    accent: "orange",
  },
  {
    icon: Gauge,
    title: "QA Scripting",
    description:
      "Python scripting for repetitive test-data preparation, PDF processing and session-reference generation.",
    tools: ["Python", "Automation mindset", "Data setup"],
    accent: "pink",
  },
];

export const learningItems: LearningItem[] = [
  {
    icon: Laptop2,
    title: "Playwright",
    description: "Browser automation and end-to-end testing",
  },
  {
    icon: Braces,
    title: "TypeScript",
    description: "Reliable and maintainable test automation code",
  },
  {
    icon: GitBranch,
    title: "CI/CD",
    description: "Running automated checks during delivery",
  },
];