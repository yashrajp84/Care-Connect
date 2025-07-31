'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import styles from './StepAccordion.module.css'

export function StepAccordion({
  title,
  content,
}: {
  title: string
  content: string
}) {
  const [open, setOpen] = useState(false)
  return (
    <div className={styles.accordion}>
      <button onClick={() => setOpen(!open)} className={styles.header}>
        <span>{title}</span>
        <ChevronDown className={open ? styles.iconOpen : styles.icon} size={16} />
      </button>
      {open && <div className={styles.body}>{content}</div>}
    </div>
  )
}
