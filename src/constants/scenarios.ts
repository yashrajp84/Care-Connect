import { Phone, ArrowRight, Pill, AlertTriangle, Brain, Package } from 'lucide-react'
import type { Scenario } from '@/types/scenario'

export const scenarios: Record<string, Scenario> = {
  overdose: {
    id: 'overdose',
    title: 'A Drug Overdose',
    icon: Pill,
    subScenarios: {
      witness: {
        id: 'witness',
        title: 'Witnessing an overdose',
        description: 'If someone has overdosed you should immediately call emergency services.',
        cta: { label: 'Call 000', href: 'tel:000', variant: 'danger', icon: Phone }
      },
      selfcare: {
        id: 'selfcare',
        title: 'Need self care advice',
        description: 'View helpful resources to support the person.',
        cta: { label: 'View self care tips', href: '/self-care', variant: 'primary', icon: ArrowRight }
      }
    }
  },
  aggressive: {
    id: 'aggressive',
    title: 'Someone Is Acting Aggressively',
    icon: AlertTriangle,
    subScenarios: {
      default: {
        id: 'default',
        title: 'Aggressive behaviour',
        description: 'Stay safe and consider calling for help.',
        cta: { label: 'Call 000', href: 'tel:000', variant: 'danger', icon: Phone }
      }
    }
  },
  'mental-health': {
    id: 'mental-health',
    title: 'A Mental Health Crisis',
    icon: Brain,
    subScenarios: {
      default: {
        id: 'default',
        title: 'Need mental health support',
        description: 'Connect with mental health services.',
        cta: { label: 'Call support', href: 'tel:000', variant: 'primary', icon: Phone }
      }
    }
  },
  supplies: {
    id: 'supplies',
    title: 'Need Harm Reduction Supplies',
    icon: Package,
    subScenarios: {
      default: {
        id: 'default',
        title: 'Find supplies',
        description: 'Locate nearby harm reduction supplies.',
        cta: { label: 'View locations', href: '/locations', variant: 'primary', icon: ArrowRight }
      }
    }
  }
}
