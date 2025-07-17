import { Phone, ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'

export type CTAButtonVariant = 'primary' | 'secondary' | 'danger' | 'link'

export interface CTADetails {
  label: string
  href: string
  variant: CTAButtonVariant
  icon?: ReactNode
}

export interface SubScenario {
  id: string
  title: string
  description: string
  cta: CTADetails
}

export interface Scenario {
  id: string
  title: string
  subScenarios: Record<string, SubScenario>
}

// Simple content used by the demo screens
export const scenarios: Record<string, Scenario> = {
  overdose: {
    id: 'overdose',
    title: 'Drug Overdose',
    subScenarios: {
      witness: {
        id: 'witness',
        title: 'Witnessing an overdose',
        description:
          'If someone has overdosed you should immediately call emergency services.',
        cta: {
          label: 'Call 000',
          href: 'tel:000',
          variant: 'danger',
          icon: <Phone size={16} />
        }
      },
      selfcare: {
        id: 'selfcare',
        title: 'Need self care advice',
        description: 'View helpful resources to support the person.',
        cta: {
          label: 'View self care tips',
          href: '/self-care',
          variant: 'primary',
          icon: <ArrowRight size={16} />
        }
      }
    }
  }
}
