import { notFound } from 'next/navigation'
import { CTAButton } from '@/components/CTAButton'
import { loadScenariosFromCSV } from '@/lib/loadCSV'
import Link from 'next/link'

interface Params {
  scenarioId: string
  subScenarioId: string
}

export default function CTAPage({ params }: { params: Params }) {
  const row = loadScenariosFromCSV().find(
    (r) =>
      r.scenario_id === params.scenarioId &&
      r.subscenario_id === params.subScenarioId
  )

  if (!row) notFound()

  return (
    <main className="p-4 space-y-4">
      <h1 className="text-xl font-semibold">{row.subscenario_title}</h1>
      <p>{row.body_text}</p>
      <CTAButton label={row.cta_text} href={row.cta_link} fullWidth />
      <Link href={`./self-care`} className="text-blue-600 underline">
        Need self care tips?
      </Link>
    </main>
  )
}
