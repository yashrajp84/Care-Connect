import { ScenarioCard } from '@/components/ScenarioCard'
import { FooterNav } from '@/components/FooterNav'
import SplashScreen from '@/components/SplashScreen'
import { useEffect, useState, type ReactNode } from 'react'

interface Scenario {
  id: string
  title: string
  icon: ReactNode
}

export default function Home() {
  const scenarios: Scenario[] = [
    { id: 'overdose', title: 'A Drug Overdose', icon: '💊' },
    { id: 'aggressive', title: 'Someone Is Acting Aggressively', icon: '😡' },
    { id: 'mental-health', title: 'A Mental Health Crisis', icon: '😔' },
    { id: 'supplies', title: 'Need Harm Reduction Supplies', icon: '🧰' },
  ]
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <SplashScreen />
  }

  return (
    <main className="p-4 pb-32 space-y-6">
      <h1 className="text-center text-lg font-semibold mt-2">
        Tell us what you are witnessing, and we help you connect
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {scenarios.map((s) => (
          <ScenarioCard key={s.id} scenario={s} />
        ))}
      </div>
      <div className="text-center space-y-3">
        <p className="font-medium">If Inside NRCH Premises</p>
        <a
          href="tel:0394289725"
          className="block mx-auto w-full max-w-xs bg-green-600 text-white py-3 rounded-full shadow"
        >
          Call 03 9428 9725
        </a>
        <p>Dial 000 in case of emergency</p>
        <a
          href="tel:000"
          className="block mx-auto w-full max-w-xs border border-red-600 text-red-600 py-3 rounded-full"
        >
          Call 000
        </a>
      </div>
      <FooterNav />
    </main>
  )
}
