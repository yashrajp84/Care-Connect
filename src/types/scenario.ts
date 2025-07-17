export type CTAButtonVariant = "primary" | "secondary" | "danger" | "link";


import type { ReactNode } from 'react'

export interface CTADetails {
  label: string;
  href: string;
  variant: CTAButtonVariant;
  icon?: ReactNode;
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
  icon: ReactNode;
  subScenarios: Record<string, SubScenario>;
}
