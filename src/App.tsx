import { Header } from './components/Header'
import { Input } from './components/Input'
import styles from './app.module.css'
import { Tasklist } from './components/TaskList'

export function App() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <Input />
        <Tasklist />
      </main>
    </>
  )
}
