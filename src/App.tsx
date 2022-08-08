import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Header } from './Header'
import { NoTasks } from './NoTasks'
import { WithTasks } from './WithTasks'
import { TaskType } from './Task'

import styles from './App.module.css'

function App() {
  const [allTasks, setAllTasks] = useState<TaskType[]>([])
  const [newTask, setNewTask] = useState('')

  function handleSetNewTask(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value)
  }
  function submitNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setAllTasks([...allTasks, { msg: newTask, completed: false }])
    setNewTask('')
  }

  const completedTasks = allTasks.reduce(function (acumulador, task) {
    if (task.completed) return acumulador + 1
    return acumulador
  }, 0)

  return (
    <>
      <Header />
      <main className={styles['todo-area']}>
        <form onSubmit={submitNewTask} className={styles['create-todo']}>
          <input
            onChange={handleSetNewTask}
            value={newTask}
            placeholder="Adicione uma nova tarefa"
          />
          <button
            type="submit"
            disabled={newTask.length === 0}
            className={`${styles['create-button']} ${
              newTask.length === 0 ? styles['disable-create-button'] : ''
            }`}
          >
            <p>Criar</p>
            <PlusCircle weight="bold" />
          </button>
        </form>
        <div className={styles.tasks}>
          <div>
            <div>
              <p>Tarefas criadas</p>
              <span>{allTasks.length}</span>
            </div>
            <div>
              <p>Concluídas</p>
              <span>{completedTasks}</span>
            </div>
          </div>
          {allTasks.length === 0 ? (
            <NoTasks />
          ) : (
            <WithTasks tasks={allTasks} setAllTasks={setAllTasks} />
          )}
        </div>
      </main>
    </>
  )
}

export default App
