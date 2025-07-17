import Link from 'next/link'
import { LayoutGrid, Info, BookOpen, Heart } from 'lucide-react'

export function FooterNav() {
  const items = [
    { href: '/', label: 'Scenarios', icon: LayoutGrid, active: true },
    { href: '/about', label: 'About', icon: Info },
    { href: '/learn', label: 'Learn', icon: BookOpen },
    { href: '/support', label: 'Support', icon: Heart },
  ]
  return (
    <>
      <nav className="fixed bottom-10 inset-x-0 mx-4 bg-white shadow rounded-full flex justify-around items-center py-2 text-xs">
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`flex flex-col items-center gap-1 ${
              item.active ? 'text-blue-700' : 'text-gray-500'
            }`}
          >
            <item.icon size={18} />
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="fixed bottom-0 inset-x-0 bg-black text-white text-center text-xs py-1">
        www.careconnectnrch.com.au
      </div>
    </>
  )
}
