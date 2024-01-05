import React from "react";

import { FaCheck } from "react-icons/fa6";
import './check.css'

const Check = ({ isCompleted }) => {
   return (
      <div className="task__checkBlock">
         { isCompleted && <FaCheck size={20} className="task__check" /> }
      </div>
   )
}

export default Check