import Link from 'next/link'
import config from './config'
import { CTAButton } from '@/components/ui/CTAButton'

export default function DrugOverdosePage() {
  if (!config) return <main className="p-4">Coming soon</main>

  return (
    <main className="p-4 space-y-6">
      <h1 className="text-xl font-bold text-[#6B0F1A]">{config.title}</h1>
      <p className="text-sm text-gray-600">Scenario / Suspected overdose</p>

      <div className="space-y-2">
        {config.steps.map((text, i) => (
          <p key={i} className="text-base font-medium text-gray-800">
            Step {i + 1}: {text}
          </p>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Link href="/scenarios/drug-overdose/unconscious">
          <div className="rounded-xl border p-3 text-center shadow-md space-y-2">
            <img src="/icons/emergency-red.svg" alt="" className="w-6 h-6 mx-auto" />
            <span className="font-semibold text-blue-900">Unconscious</span>
          </div>
        </Link>

        <Link href="/scenarios/drug-overdose/breathing">
          <div className="rounded-xl border p-3 text-center shadow-md space-y-2">
            <img src="/icons/emergency-red.svg" alt="" className="w-6 h-6 mx-auto" />
            <span className="font-semibold text-blue-900">Breathing</span>
          </div>
        </Link>
      </div>

      <div className="text-sm text-center text-gray-600">
        <p><strong>Unsure?</strong> The person needs immediate professional assistance</p>
      </div>

      <CTAButton label="Call 000" href="tel:000" variant="danger" fullWidth />
    </main>
  )
}
