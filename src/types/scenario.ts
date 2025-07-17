export type CTAButtonVariant = "primary" | "secondary" | "danger" | "link";

import type { LucideIcon } from "lucide-react";

export interface CTADetails {
  label: string;
  href: string;
  variant: CTAButtonVariant;
  icon?: LucideIcon;
}

export interface SubScenario {
  id: string;
  title: string;
  description: string;
  cta: CTADetails;
}

export interface Scenario {
  id: string;
  title: string;
  icon: LucideIcon;
  subScenarios: Record<string, SubScenario>;
}
