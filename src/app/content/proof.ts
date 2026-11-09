import type { CaseSlug } from "./cases";

export type ProofSource = CaseSlug | "mentoring";

export interface ProofPoint {
  value: number;
  suffix: string;
  label: string;
  source: ProofSource;
}

export const PROOF_POINTS: ProofPoint[] = [
  { value: 87, suffix: "%", label: "faster consent flow · Sonesta", source: "sonesta" },
  { value: 25, suffix: "%", label: "faster ecommerce loads · Colombiatodo", source: "colombiatodo" },
  { value: 45, suffix: "%", label: "of the Portal migrated off MUI · Bosanet", source: "bosanet" },
  { value: 100, suffix: "+", label: "hours mentoring developers · Icesi", source: "mentoring" },
];
