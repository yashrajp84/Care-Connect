import Link from 'next/link'

export function Header() {
  return (
    <header className="p-4 flex justify-between items-center bg-primary text-primary-foreground">
      <Link href="/" className="font-bold">Care Connect</Link>
      <nav className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/emergency">Emergency</Link>
      </nav>
    </header>
  )
}
