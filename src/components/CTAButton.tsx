'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'
import { designTokens } from '@/constants/designTokens'

export interface CTAButtonProps {
  label: string
  variant?: 'primary' | 'secondary' | 'danger' | 'link'
  icon?: ReactNode
  href: string
  fullWidth?: boolean
}

const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition'

const variants: Record<Required<CTAButtonProps>['variant'], string> = {
  primary: `bg-[${designTokens.colors.primary}] text-white hover:bg-[${designTokens.colors.primary}]/90`,
  secondary: `bg-[${designTokens.colors.accent}] text-white hover:bg-[${designTokens.colors.accent}]/90`,
  danger: 'bg-red-600 text-white hover:bg-red-700',
  link: `underline text-[${designTokens.colors.primary}] hover:text-[${designTokens.colors.primary}]/80`
}

export function CTAButton({ label, variant = 'primary', icon, href, fullWidth }: CTAButtonProps) {
  const className = cn(baseStyles, variants[variant], fullWidth && 'w-full', 'px-4 py-3 shadow', 'rounded',)

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
    <motion.span whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="flex items-center gap-2">
      {icon && <span aria-hidden="true">{icon}</span>}
      {label}
    </motion.span>
  )

  if (isExternal) {
    return (
      <a href={href} className={className} style={{ transition: designTokens.transitions.default }}>
        {content}
      </a>
    )
  }

  return (
    <Link href={href} className={className} style={{ transition: designTokens.transitions.default }}>
      {content}
    </Link>
  )
}
