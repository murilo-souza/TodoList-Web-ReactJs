import { Header } from './components/Header'
import { Input } from './components/Input'
import styles from './app.module.css'
import { Tasklist } from './components/TaskList'
import { useState } from 'react'

export interface TaskProps {
  id: string
  title: string
  isCompleted: boolean
}

export function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([
    {
      id: '1',
      title: 'Lavar roupa',
      isCompleted: true,
    },
    {
      id: '2',
      title: 'Fazer compras',
      isCompleted: false,
    },
  ])

  function handleNewTask(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: String(Math.random()), // ou usar crypto.randomUUiD()
        title: taskTitle,
        isCompleted: false,
      },
    ])
  }

  function handleDeleteTask(id: string) {
    const filteredTask = tasks.filter((task) => task.id !== id)
    setTasks(filteredTask)
  }

  function handleCompleteTask(id: string) {
    const changeStatusTask = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        }
      }
      return task
    })

    setTasks(changeStatusTask)
  }

  return (
    <>
      <Header />
      <main className={styles.container}>
        <Input onNewTask={handleNewTask} />
        <Tasklist
          tasks={tasks}
          onDeleteTask={handleDeleteTask}
          onCompleteTask={handleCompleteTask}
        />
      </main>
    </>
  )
}
