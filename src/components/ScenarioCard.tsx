import Link from 'next/link'
import { motion } from 'framer-motion'

interface Scenario {
  id: string
  title: string
}

export function ScenarioCard({ scenario }: { scenario: Scenario }) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="border p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-2">{scenario.title}</h2>
      <Link href={`/scenarios/${scenario.id}`} className="text-primary underline">
        View
      </Link>
    </motion.div>
  )
}
