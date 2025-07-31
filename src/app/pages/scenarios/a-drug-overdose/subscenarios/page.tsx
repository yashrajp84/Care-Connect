import Link from 'next/link'
import styles from '../scenario.module.css'

export default function Subscenarios() {
  return (
    <main className="p-4 space-y-4">
      <header className={styles.header}>
        <h1>What is the person's state?</h1>
      </header>
      <div className="grid grid-cols-2 gap-4">
        <Link href="../resources?type=unconscious" className="block border p-4 rounded-xl text-center">Unconscious</Link>
        <Link href="../resources?type=breathing" className="block border p-4 rounded-xl text-center">Breathing</Link>
      </div>
    </main>
  )
}
