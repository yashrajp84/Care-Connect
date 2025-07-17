import { CTAButton } from '@/components/CTAButton'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getScenarioData } from '@/lib/loadCSV'

interface Params {
  scenarioId: string
  subscenarioId: string
}

export default function SubScenarioPage({ params }: { params: Params }) {
  const row = getScenarioData().find(
    (r) =>
      r.scenario_id === params.scenarioId &&
      r.subscenario_id === params.subscenarioId
  )
  if (!row) notFound()

  return (
    <main className="p-4 space-y-4">
      <h1 className="text-xl font-semibold">{row.subscenario_title}</h1>
      <p>{row.body_text}</p>
      <CTAButton label={row.cta_text} href={`/scenario/${row.scenario_id}/${row.subscenario_id}/cta`} fullWidth />
      <Link href={`/scenario/${row.scenario_id}`}>Back</Link>
    </main>
  )
}
