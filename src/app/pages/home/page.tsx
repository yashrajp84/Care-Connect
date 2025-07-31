'use client'

import { FooterNav } from '@/components/ui/FooterNav'
import Link from 'next/link'
import { scenarioMeta } from '@/data/scenarios'

interface Scenario {
  id: string
  title: string
  icon: string
  variant: 'danger' | 'warning' | 'info'
}

const scenarios: Scenario[] = scenarioMeta.map((m) => ({
  id: m.slug,
  title: m.title,
  icon: m.icon,
  variant: m.slug === 'a-drug-overdose' ? 'danger' : 'warning',
}))

export default function Home() {
  return (
    <main className="p-4 pb-32 space-y-6">
      <h1 className="text-left text-[22px] sm:text-2xl font-semibold leading-snug">
        Tell us what you are witnessing, <br />
        and we help you connect
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {scenarios.map((s) => (
          <ScenarioCard key={s.id} scenario={s} />
        ))}
      </div>

      <div className="text-center space-y-3 pt-4">
        <p className="font-medium text-gray-700">If Inside NRCH Premises</p>
        <a
          href="tel:0394289725"
          aria-label="Call 03 9428 9725"
          className="block mx-auto w-full max-w-xs bg-green-700 text-white text-lg font-medium py-3 rounded-full shadow"
        >
          Call 03 9428 9725
        </a>
        <p className="text-gray-700">Dial 000 in case of emergency</p>
        <a
          href="tel:000"
          aria-label="Call 000"
          className="block mx-auto w-full max-w-xs border border-red-700 text-red-700 text-lg font-medium py-3 rounded-full"
        >
          Call 000
        </a>
      </div>

      <FooterNav />
    </main>
  )
}

// Sub-component inside the same file or import it
function ScenarioCard({ scenario }: { scenario: Scenario }) {
  const { title, icon, variant } = scenario

  const iconBgColor = {
    danger: 'text-red-700',
    warning: 'text-yellow-500',
    info: 'text-blue-600',
  }[variant]

  return (
    <Link href={`/pages/scenarios/${scenario.id}`} className="block">
      <div className="bg-white rounded-2xl p-4 shadow-md flex items-start space-x-3 border border-gray-100">
        <div className={`flex-shrink-0 w-7 h-7 ${iconBgColor}`}>
          <img src={icon} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="text-left">
          <p className="text-[17px] font-semibold text-[#003366] leading-tight">{title}</p>
        </div>
      </div>
    </Link>
  )
}
