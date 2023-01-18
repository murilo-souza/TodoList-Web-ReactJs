import styles from './styles.module.css'

export function Tasklist() {
  return (
    <header className={styles.header}>
      <h2>
        Tarefas criadas{' '}
        <div>
          <p>0</p>
        </div>
      </h2>

      <h2>
        Concluidos{' '}
        <div>
          <p>0</p>
        </div>
      </h2>
    </header>
  )
}
