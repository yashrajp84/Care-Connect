'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import styles from './EmergencyButton.module.css'

export function EmergencyButton() {
  return (
    <motion.div
      className={styles.container}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
    >
      <Link href="/emergency" className={styles.button} aria-label="Emergency">
        <Phone size={16} /> Emergency
      </Link>
    </motion.div>
  )
}
