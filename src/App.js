import React from "react";
import TodoList from "./components/Todo/TodoList";

import './styles/common.css'
import './styles/reset.css'

export default function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}