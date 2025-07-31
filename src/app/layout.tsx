import '@/styles/globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { inter } from '@/lib/fonts'

export const metadata: Metadata = {
  title: 'Care Connect',
  description: 'Trauma-informed care resources'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={cn(inter.className)}>
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
