import { Check, Trash } from 'phosphor-react'
import styles from './styles.module.css'
import { TaskProps } from '../../App'

interface Props {
  task: TaskProps
  onDelete: (id: string) => void
  onCompleteTask: (id: string) => void
}

export function TaskCard({ task, onDelete, onCompleteTask }: Props) {
  return (
    <div className={task.isCompleted ? styles.cardCompleted : styles.card}>
      <div>
        <button
          className={styles.checkboxContainer}
          onClick={() => onCompleteTask(task.id)}
        >
          {task.isCompleted ? (
            <div className={styles.checkboxSelected}>
              <Check size={12} color="#F2F2F2" />
            </div>
          ) : (
            <div className={styles.checkboxUnSelected} />
          )}
        </button>
        <p className={task.isCompleted ? styles.completed : ''}>{task.title}</p>
      </div>
      <button className={styles.deleteTask} onClick={() => onDelete(task.id)}>
        <Trash size={20} />
      </button>
    </div>
  )
}
