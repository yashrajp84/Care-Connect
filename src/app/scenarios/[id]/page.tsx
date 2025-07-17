import { EmergencyButton } from '@/components/EmergencyButton'
import { supabase } from '@/lib/supabaseClient'
import { notFound } from 'next/navigation'

interface Params { id: string }

export default async function Scenario({ params }: { params: Params }) {
  const { data } = await supabase
    .from('scenarios')
    .select('*')
    .eq('id', params.id)
    .single()

  if (!data) notFound()

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-2">{data.title}</h1>
      <p className="mb-4">{data.body}</p>
      <EmergencyButton />
    </main>
  )
}
