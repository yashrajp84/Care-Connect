import { EmergencyButton } from '@/components/EmergencyButton'
import { ScenarioCard } from '@/components/ScenarioCard'

export default function Home() {
  const scenarios = [] // fetch from Supabase later
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Care Connect</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        {scenarios.map((s) => (
          <ScenarioCard key={s.id} scenario={s} />
        ))}
      </div>
      <EmergencyButton />
    </main>
  )
}
