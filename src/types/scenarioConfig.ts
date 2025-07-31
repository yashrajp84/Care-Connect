export interface ScenarioConfig {
  title: string
  intro: string
  steps: string[]
  phoneNumbers?: string[]
  breadcrumbs?: { label: string; href: string }[]
}
