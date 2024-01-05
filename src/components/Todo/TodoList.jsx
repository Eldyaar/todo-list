import React from "react"
import { useState } from "react"
import Task from "./task/Task"
import AddTask from "./task/AddTask"

import '../../styles/common.css'
import '../../styles/reset.css'
import './TodoList.css'

let nextId = 1
const data = []

const TodoList = () => {
   const [tasks, setTasks] = useState(data)

   const Completed = (taskId) => {
      const copyTask = [...tasks]
      const current = copyTask.find((item) => item.id === taskId)
      current.isCompleted = !current.isCompleted
      setTasks(copyTask)
   }

   const addTask = (title) => {
      setTasks([
         {
            id: nextId++,
            title: title,
            isCompleted: false
         },
         ...tasks
      ])
   }

   const removeTask = (taskId) => {
      setTasks(tasks.filter((t) => t.id !== taskId))
   }

   return (
      <div className="container">
         <h1>Список дел</h1>
         <AddTask addTask={addTask} />
         {tasks.map((task) => (
            <Task
               key={task.id}
               task={task}
               Completed={Completed}
               removeTask={removeTask} />
         ))}
      </div>
   )
}

export default TodoList