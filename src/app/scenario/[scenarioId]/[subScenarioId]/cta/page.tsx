import { notFound } from 'next/navigation'
import { scenarios } from '@/constants/scenarios'
import { CTAButton } from '@/components/CTAButton'

interface Params {
  scenarioId: string
  subScenarioId: string
}

export default function CTAPage({ params }: { params: Params }) {
  const scenario = scenarios[params.scenarioId]
  const sub = scenario?.subScenarios[params.subScenarioId]

  if (!scenario || !sub) notFound()

  return (
    <main className="p-4 space-y-4">
      <h1 className="text-xl font-semibold">{sub.title}</h1>
      <p>{sub.description}</p>
      <CTAButton {...sub.cta} fullWidth />
    </main>
  )
}
