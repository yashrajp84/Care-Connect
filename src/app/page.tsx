import { ScenarioCard } from '@/components/ScenarioCard'
import { FooterNav } from '@/components/FooterNav'
import { loadScenariosFromCSV } from '@/lib/loadCSV'
import { scenarios as iconScenarios } from '@/constants/scenarios'
import type { Scenario } from '@/types/scenario'

export default function Home() {
  const data = loadScenariosFromCSV()
  const unique = Array.from(
    data.reduce((map, row) => {
      if (!map.has(row.scenario_id)) map.set(row.scenario_id, row)
      return map
    }, new Map<string, typeof data[number]>())
  ).map(([_, row]) => row)
  const list: Scenario[] = unique.map((row) => ({
    id: row.scenario_id,
    title: row.scenario_title,
    icon: iconScenarios[row.scenario_id]?.icon ?? iconScenarios['overdose'].icon,
    subScenarios: {}
  }))

  return (
    <main className="p-4 pb-32 space-y-6">
      <h1 className="text-center text-lg font-semibold mt-2">
        Tell us what you are witnessing, and we help you connect
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {list.map((s) => (
          <ScenarioCard key={s.id} scenario={s} />
        ))}
      </div>
      <div className="text-center space-y-3">
        <p className="font-medium">If Inside NRCH Premises</p>
        <a
          href="tel:0394289725"
          aria-label="Call 03 9428 9725"
          className="block mx-auto w-full max-w-xs bg-[var(--color-accent)] text-white py-3 rounded-full shadow"
        >
          Call 03 9428 9725
        </a>
        <p>Dial 000 in case of emergency</p>
        <a
          href="tel:000"
          aria-label="Call 000"
          className="block mx-auto w-full max-w-xs border border-[var(--color-danger)] text-[var(--color-danger)] py-3 rounded-full"
        >
          Call 000
        </a>
      </div>
      <FooterNav />
    </main>
  )
}
