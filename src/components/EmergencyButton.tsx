'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'

export function EmergencyButton() {
  return (
    <motion.div
      className="fixed bottom-4 right-4"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
    >
      <Link
        href="/emergency"
        className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full shadow-lg"
      >
        <Phone size={16} /> Emergency
      </Link>
    </motion.div>
  )
}
