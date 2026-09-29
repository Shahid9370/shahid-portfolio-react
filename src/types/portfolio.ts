export type ProjectCategory =
  | "all"
  | "manual"
  | "api"
  | "data"
  | "fintech"
  | "automation";

export type Project = {
  id: number;
  number: string;
  type: string;
  title: string;
  description: string;
  categories: Exclude<ProjectCategory, "all">[];
  metrics: string[];
  tools: string[];
  details: {
    scope: string;
    approach: string;
    result: string;
  };
};