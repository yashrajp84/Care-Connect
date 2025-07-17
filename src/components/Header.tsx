import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.title}>CareConnect</h1>
        <p className={styles.subtitle}>Care for yourself. Care for others.</p>
      </div>
      <button className={styles.langButton} aria-label="Change language">EN</button>
    </header>
  )
}
