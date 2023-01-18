import { PlusCircle } from 'phosphor-react'
import styles from './styles.module.css'

export function Input() {
  return (
    <div className={styles.input}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button>
        Criar <PlusCircle size={16} />
      </button>
    </div>
  )
}
