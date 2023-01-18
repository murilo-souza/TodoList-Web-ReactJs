import { EmptyList } from '../EmptyList'
import { TaskProps } from '../../App'
import { TaskCard } from '../TaskCard'
import styles from './styles.module.css'

interface TaskListProps {
  tasks: TaskProps[]
  onDeleteTask: (id: string) => void
  onCompleteTask: (id: string) => void
}

export function Tasklist({
  tasks,
  onDeleteTask,
  onCompleteTask,
}: TaskListProps) {
  const tasksQuantity = tasks.length
  const tasksCompleted = tasks.filter((task) => task.isCompleted).length

  return (
    <section>
      <header className={styles.header}>
        <h2>
          Tarefas criadas{' '}
          <div>
            <p>{tasksQuantity}</p>
          </div>
        </h2>

        <h2 className={styles.finished}>
          Concluidos{' '}
          <div>
            <p>
              {tasks.length === 0
                ? tasksQuantity
                : `${tasksQuantity} de ${tasksCompleted}`}
            </p>
          </div>
        </h2>
      </header>
      {tasks.length !== 0 ? (
        tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={onDeleteTask}
            onCompleteTask={onCompleteTask}
          />
        ))
      ) : (
        <EmptyList />
      )}
    </section>
  )
}
