import Link from 'next/link'
import { notFound } from 'next/navigation'
import { loadScenariosFromCSV } from '@/lib/loadCSV'

interface Params { id: string }

export default function Scenario({ params }: { params: Params }) {
  const data = loadScenariosFromCSV().filter((r) => r.scenario_id === params.id)
  if (data.length === 0) notFound()

  return (
    <main className="p-4 space-y-4">
      <h1 className="text-xl font-semibold">{data[0].scenario_title}</h1>
      <ul className="space-y-2">
        {data.map((sub) => (
          <li key={sub.subscenario_id}>
            <Link
              href={`/scenarios/${sub.scenario_id}/${sub.subscenario_id}`}
              className="block p-4 rounded shadow bg-white"
            >
              {sub.subscenario_title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
