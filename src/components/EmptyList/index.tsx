import styles from './styles.module.css'
import Clipboard from '../../assets/Clipboard.svg'

export function EmptyList() {
  return (
    <div className={styles.container}>
      <img src={Clipboard} alt="" />
      <h3>
        Você ainda não tem tarefas cadastradas
        <br />
        <span>Crie tarefas e organize seus itens a fazer</span>
      </h3>
    </div>
  )
}
