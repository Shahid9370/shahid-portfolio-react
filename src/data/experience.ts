export type ExperienceItem = {
  number: string;
  label: string;
  dates: string[];
  location: string;
  title: string;
  company: string;
  description: string;
  featured?: boolean;
  achievements: string[];
  tools: string[];
};

export const experienceItems: ExperienceItem[] = [
  {
    number: "01",
    label: "Current role",
    dates: ["Apr 2026 – Present"],
    location: "Remote",
    title: "QA Intern",
    company: "PowerCred Technologies",
    description: "AI-first B2B FinTech SaaS · OCR · IDP · KYC/eKYC",
    featured: true,
    achievements: [
      "Validated OCR- and LLM-extracted bank statement data against source PDFs across 50–60 formats from Singapore, Malaysia, Indonesia and the Philippines.",
      "Checked dates, descriptions, amounts, debit/credit direction, running balances, currencies and account information.",
      "Tested IDP dashboard and KYC/eKYC workflows including authentication, uploads, search, filters, pagination, role permissions and session handling.",
      "Designed 50+ test case sheets covering positive, negative, boundary, edge-case and regression scenarios.",
      "Documented and tracked 100+ defects in Jira with reproduction steps, evidence and expected versus actual results.",
      "Tested REST APIs in Postman, including authentication, status codes, negative cases, API chaining and UI-to-API comparison.",
      "Built a Python utility to batch-process PDF test data and generate session references for OCR validation.",
    ],
    tools: ["Jira", "Postman", "Python", "Excel", "Chrome DevTools"],
  },
  {
    number: "02",
    label: "Previous role",
    dates: ["Feb 2025 – Jun 2025", "Feb 2026 – Apr 2026"],
    location: "Remote",
    title: "Software Tester Intern",
    company: "UptoSkills",
    description: "AI interview application",
    achievements: [
      "Tested resume upload, skill parsing, automated interview flow and camera-based live-person detection.",
      "Wrote and executed 120+ manual test cases across functional, UI, validation, negative and regression testing.",
      "Logged functional defects with clear reproduction steps and supporting evidence.",
      "Validated REST API responses and status codes in Postman.",
    ],
    tools: ["Postman", "Manual Testing", "Regression"],
  },
  {
    number: "03",
    label: "Earlier role",
    dates: ["Nov 2024 – Jan 2025"],
    location: "Pune",
    title: "Web Development Intern",
    company: "Aroma Brand Solutions",
    description: "Frontend development and UI validation",
    achievements: [
      "Maintained web application UI components and improved responsive behaviour across devices.",
      "Helped test and validate frontend changes.",
    ],
    tools: ["HTML", "CSS", "JavaScript", "Responsive UI"],
  },
];