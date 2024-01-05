import React from "react";
import Check from "./Check";

import '../../../styles/common.css'
import '../../../styles/reset.css'
import './task.css'

import { FaPencil } from "react-icons/fa6";
import { MdOutlineDeleteOutline } from "react-icons/md";


const Task = ({ task, Completed, removeTask }) => {

   return (
      <div className="task-wrapper">
         <div className="task" onClick={() => Completed(task.id)}>
            <Check isCompleted={task.isCompleted} />
            {task.isCompleted ? <s>{task.title}</s> : task.title}
         </div>
         <div className="task-userActions">
            <button>
               <FaPencil size={20} className="edit-task" />
            </button>
            <button onClick={() => removeTask(task.id)}>
               <MdOutlineDeleteOutline size={24} className="remove-task" />
            </button>
         </div>
      </div>
   )
}

export default Task