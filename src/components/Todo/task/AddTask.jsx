import React, { useState } from "react"
import './task.css'

const AddTodo = ({ addTask }) => {
   const [title, setTitle] = useState('')

   return (
      <div className="add-task">
         <input 
            value={title}
            className="add-task__input"
            placeholder="Введите название вашего дела"
            onChange={(e) => setTitle(e.target.value)}
            onKeyPress={e => e.key === 'Enter' && addTask(title)}
         />
         <button 
            className="add-task__btn"
            onClick={() => {
               if (title.trim() !== '') {
                  setTitle('')
                  addTask(title)
               } else {
                  alert('Вы ввели пустое значение или только пробелы.')
               }
            }}>
            Добавить
         </button>
      </div>
   )
}

export default AddTodo