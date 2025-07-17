import Link from 'next/link'
import { LayoutGrid, Info, BookOpen, Heart } from 'lucide-react'
import styles from './FooterNav.module.css'

export function FooterNav() {
  const items = [
    { href: '/', label: 'Scenarios', icon: LayoutGrid, active: true },
    { href: '/about', label: 'About', icon: Info },
    { href: '/learn', label: 'Learn', icon: BookOpen },
    { href: '/support', label: 'Support', icon: Heart },
  ]
  return (
    <>
      <nav role="navigation" className={styles.navContainer}>
        {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              aria-label={item.label}
              className={item.active ? styles.link : `${styles.link} ${styles.linkInactive}`}
            >
            <item.icon size={18} />
            {item.label}
          </Link>
        ))}
      </nav> as JSX.Element
    </>
  )
}
