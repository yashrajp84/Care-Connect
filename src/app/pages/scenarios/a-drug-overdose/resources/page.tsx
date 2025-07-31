import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import styles from '../scenario.module.css'

export default function Resources() {
  const params = useSearchParams()
  const type = params.get('type')
  return (
    <main className="p-4 space-y-4">
      <header className={styles.header}>
        <h1>Support Resources</h1>
      </header>
      <p>
        {type === 'unconscious'
          ? 'Call emergency services on 000 immediately.'
          : 'Monitor breathing and reassure the person until help arrives.'}
      </p>
      <Link href="../" className="text-blue-600 underline">Back to scenario</Link>
    </main>
  )
}
