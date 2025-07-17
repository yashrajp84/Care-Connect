'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { createElement } from 'react'

interface Scenario {
  id: string
  title: string
  icon: LucideIcon
}

export function ScenarioCard({ scenario }: { scenario: Scenario }) {
  return (
    <Link href={`/scenarios/${scenario.id}`}> 
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="bg-white rounded-lg shadow flex items-center justify-between p-4"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl" aria-hidden="true">
            {createElement(scenario.icon)}
          </span>
          <span className="font-medium">{scenario.title}</span>
        </div>
        <ChevronRight className="text-gray-400" size={20} />
      </motion.div>
    </Link>
  )
}
