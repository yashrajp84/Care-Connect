import type { ScenarioConfig } from '@/types/scenarioConfig'

const config: ScenarioConfig = {
  title: 'Public Injecting',
  intro: 'Someone is injecting drugs in a public space. Stay calm and follow these steps.',
  steps: [
    'Keep a safe distance and do not confront the person.',
    'Call emergency services if someone appears unwell or unconscious.',
    'If safe, provide information about nearby harm reduction services.'
  ],
  phoneNumbers: ['000', '03 9428 9725'],
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Scenarios', href: '/scenarios' }
  ]
}

export default config
