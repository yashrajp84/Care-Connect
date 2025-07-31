import Link from 'next/link'

const scenarios = [
  { slug: 'a-drug-overdose', title: 'A Drug Overdose' },
  { slug: 'public-injecting', title: 'Public Injecting' },
]

export default function ScenariosIndex() {
  return (
    <main className="p-4 space-y-4">
      <h1 className="text-xl font-semibold">Scenarios</h1>
      <ul className="space-y-2">
        {scenarios.map((s) => (
          <li key={s.slug}>
            <Link href={`/scenarios/${s.slug}`} className="text-blue-600 underline">
              {s.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
