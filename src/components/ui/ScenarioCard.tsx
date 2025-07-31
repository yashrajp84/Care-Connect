'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import type { ReactNode } from 'react'
import styles from './ScenarioCard.module.css'

interface Scenario {
  id: string
  title: string
  icon: ReactNode
}

export function ScenarioCard({ scenario }: { scenario: Scenario }) {
  return (
    <Link href={`/scenario/${scenario.id}`} aria-label={scenario.title}>
      <motion.div whileHover={{ scale: 1.03 }} className={styles.card}>
        <div className={styles.content}>
          <span className={styles.icon} aria-hidden="true">
            {scenario.icon}
          </span>
          <span className={styles.title}>{scenario.title}</span>
        </div>
        <ChevronRight className={styles.chevron} size={20} />
      </motion.div>
    </Link>
  )
}
