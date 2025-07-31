import type { ScenarioConfig } from '@/types/scenarioConfig'
import { notFound } from 'next/navigation'
import dynamic from 'next/dynamic'

interface Params { scenario: string }

export default async function ScenarioWrapper({ params }: { params: Params }) {
  try {
    const mod: { default: ScenarioConfig } = await import(`../${params.scenario}/config`)
    const ScenarioPage = (await import(`../${params.scenario}/page`)).default
    return <ScenarioPage />
  } catch (e) {
    return <main className="p-4">Coming soon...</main>
  }
}
