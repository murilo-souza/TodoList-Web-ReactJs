import { PlusCircle } from 'phosphor-react'
import styles from './styles.module.css'
import { FormEvent, useState } from 'react'

interface InputProps {
  onNewTask: (taskTitle: string) => void
}

export function Input({ onNewTask }: InputProps) {
  const [title, setTitle] = useState('')

  function handleNewTask(event: FormEvent) {
    event.preventDefault()
    onNewTask(title)

    setTitle('')
  }

  return (
    <form className={styles.input} onSubmit={handleNewTask}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <button type="submit">
        Criar <PlusCircle size={16} />
      </button>
    </form>
  )
}
