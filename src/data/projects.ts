import type { Project } from "../types/portfolio";

export const projects: Project[] = [
  {
    id: 1,
    number: "01",
    type: "Testing project · 2025–2026",
    title: "E-Commerce Web Application Testing",
    description:
      "A self-directed testing project covering the main customer journey from login to order completion.",
    categories: ["manual", "api"],
    metrics: [
      "60+ test cases",
      "Postman API checks",
      "Cross-browser coverage",
    ],
    tools: ["Manual Testing", "Postman", "Chrome DevTools", "Excel"],
    details: {
      scope:
        "Login, product search, product details, cart, checkout and order flows.",
      approach:
        "Created functional, UI, negative, regression, smoke and cross-browser test scenarios.",
      result:
        "Documented test coverage and validated REST API request and response data in Postman.",
    },
  },
  {
    id: 2,
    number: "02",
    type: "Generalised case study",
    title: "Bank Statement Extraction Accuracy",
    description:
      "Field-by-field validation of OCR- and LLM-extracted financial data against original source documents.",
    categories: ["data", "fintech", "manual"],
    metrics: ["50–60 formats", "4 markets", "Jira evidence"],
    tools: ["OCR", "LLM Validation", "PDF Testing", "Jira"],
    details: {
      scope:
        "Bank statement data from Singapore, Malaysia, Indonesia and the Philippines.",
      approach:
        "Compared dates, descriptions, amounts, debit or credit direction, balances, currencies and account information.",
      result:
        "Reported extraction and data-mapping discrepancies and retested fixes through closure.",
    },
  },
  {
    id: 3,
    number: "03",
    type: "Generalised case study",
    title: "API Checks Behind the Dashboard",
    description:
      "Validating whether backend responses and visible UI values remain consistent throughout dashboard workflows.",
    categories: ["api", "fintech"],
    metrics: ["Auth tokens", "Negative cases", "UI-to-API comparison"],
    tools: ["Postman", "JSON", "REST API", "Chrome DevTools"],
    details: {
      scope:
        "Dashboard requests, authenticated endpoints, response structures and displayed UI values.",
      approach:
        "Tested status codes, request and response data, authentication, negative cases and chained requests.",
      result:
        "Reported mismatches between API responses and values displayed in the UI.",
    },
  },
  {
    id: 4,
    number: "04",
    type: "Generalised case study",
    title: "IDP and KYC/eKYC Workflows",
    description:
      "End-to-end testing of document workflows, access permissions and state-based user journeys.",
    categories: ["manual", "data", "fintech"],
    metrics: ["Role permissions", "Pagination", "Session handling"],
    tools: ["Manual QA", "IDP", "KYC", "eKYC"],
    details: {
      scope:
        "Authentication, document uploads, search, filters, pagination and role-based access.",
      approach:
        "Designed positive, negative, boundary, edge-case and regression test scenarios from requirements.",
      result:
        "Documented workflow and access-control defects with clear reproduction evidence.",
    },
  },
  {
    id: 5,
    number: "05",
    type: "QA scripting project",
    title: "PDF Validation Utility",
    description:
      "A Python utility created to reduce repetitive PDF test-data preparation and improve OCR validation setup.",
    categories: ["automation", "data", "fintech"],
    metrics: ["Batch processing", "Session references", "Less repetition"],
    tools: ["Python", "PDF Processing", "Test Data"],
    details: {
      scope:
        "Repeated PDF processing and session-reference generation across testing environments.",
      approach:
        "Automated repetitive preparation steps used before document extraction validation.",
      result:
        "Made test-data setup more consistent and reduced manual preparation work.",
    },
  },
];