import { EmergencyButton } from '@/components/EmergencyButton'
import { Button } from '@/components/ui/button'

export default function Emergency() {
  return (
    <main className="p-4 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Emergency Help</h1>
      <p>If you or someone else is in immediate danger, call emergency services.</p>
      <Button variant="destructive">Call 911</Button>
      <EmergencyButton />
    </main>
  )
}
