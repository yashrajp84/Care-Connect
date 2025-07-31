import config from './config'
import { CTAButton } from '@/components/ui/CTAButton'
import { StepAccordion } from '@/components/ui/StepAccordion'

export default function DrugOverdosePage() {
  if (!config) return <main className="p-4">Coming soon</main>
  return (
    <main className="p-4 space-y-4">
      <h1 className="text-xl font-semibold">{config.title}</h1>
      <p>{config.intro}</p>
      <div className="space-y-2">
        {config.steps.map((step, idx) => (
          <StepAccordion key={idx} title={`Step ${idx + 1}`} content={step} />
        ))}
      </div>
      <CTAButton label="Call 000" href="tel:000" fullWidth />
    </main>
  )
}
