import type { ScenarioConfig } from '@/types/scenarioConfig'

const config: ScenarioConfig = {
  title: 'A Drug Overdose',
  intro: 'If someone has overdosed, act quickly and follow these steps.',
  steps: [
    'Call emergency services immediately on 000.',
    'Check for responsiveness and breathing.',
    'Stay with the person until help arrives.'
  ],
  phoneNumbers: ['000'],
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Scenarios', href: '/scenarios' }
  ]
}

export default config
