'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import styles from './CTAButton.module.css'

export interface CTAButtonProps {
  label: string
  href: string
  variant?: 'primary' | 'danger' | 'secondary' | 'link'
  icon?: React.ReactNode
  fullWidth?: boolean
}

const variants: Record<Required<CTAButtonProps>['variant'], string> = {
  primary: styles.primary,
  secondary: styles.secondary,
  danger: styles.danger,
  link: styles.link
}

export function CTAButton({ label, variant = 'primary', icon, href, fullWidth }: CTAButtonProps) {
  const className = cn(
    styles.button,
    variants[variant],
    fullWidth && styles.fullWidth,
  )

  // Determine if the link is external (e.g. tel: or http)
  const isExternal = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')

  /*
    Pseudocode:
    if isExternal:
      render <a href> so the browser performs a normal navigation or phone call
    else:
      use <Link> for internal application routes
    end
  */

  const content = (
    <motion.span whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className={styles.iconLabel}>
      {icon}
      {label}
    </motion.span>
  )

  if (isExternal) {
    return (
      <a href={href} className={className} aria-label={label}>
        {content}
      </a>
    )
  }

  return (
    <Link href={href} className={className} aria-label={label}>
      {content}
    </Link>
  )
}
