import { notFound } from 'next/navigation'
import { getScenarioData } from '@/lib/loadCSV'
import Link from 'next/link'

interface Params {
  scenarioId: string
  subScenarioId: string
}

export default function SelfCarePage({ params }: { params: Params }) {
  const row = getScenarioData().find(
    (r) =>
      r.scenario_id === params.scenarioId &&
      r.subscenario_id === params.subScenarioId
  )
  if (!row) notFound()

  return (
    <main className="p-4 space-y-4">
      <h1 className="text-xl font-semibold">Self Care Tips</h1>
      <p>{row.selfcare_text}</p>
      <Link href=".." className="text-blue-600 underline">
        Back
      </Link>
    </main>
  )
}
