import { Trash } from 'phosphor-react'

import styles from './Task.module.css'

export type TaskType = {
  msg: string
  completed: boolean
}

type TaskProps = {
  task: TaskType
  updateTask: React.Dispatch<React.SetStateAction<TaskType[]>>
}

export function Task({ task, updateTask }: TaskProps) {
  function onChangeStatusTask() {
    updateTask(prevState =>
      prevState.map(element => {
        if (element.msg === task.msg) {
          return { ...element, completed: !element.completed }
        }
        return element
      })
    )
  }
  function onDeleteTask() {
    updateTask(prevState =>
      prevState.filter(element => element.msg !== task.msg)
    )
  }

  return (
    <div
      className={`${styles.task} ${
        task.completed ? styles['task-checked'] : ''
      }`}
    >
      <button onClick={onChangeStatusTask}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="192"
          height="192"
          fill="transparent"
          viewBox="0 0 256 256"
        >
          <rect width="256" height="256" fill="none"></rect>
          <circle
            cx="128"
            cy="128"
            r="96"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></circle>
          {task.completed && (
            <polyline
              points="172 104 113.3 160 84 132"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></polyline>
          )}
        </svg>
      </button>
      <div>
        <p>{task.msg}</p>
      </div>
      <button onClick={onDeleteTask}>
        <Trash />
      </button>
    </div>
  )
}
