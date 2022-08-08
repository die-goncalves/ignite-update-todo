import { Task, TaskType } from './Task'

import styles from './WithTasks.module.css'

type WithTasksProps = {
  tasks: TaskType[]
  setAllTasks: React.Dispatch<React.SetStateAction<TaskType[]>>
}

export function WithTasks({ tasks, setAllTasks }: WithTasksProps) {
  return (
    <div className={styles['with-tasks']}>
      {tasks.map(task => (
        <Task key={task.msg} task={task} updateTask={setAllTasks} />
      ))}
    </div>
  )
}
