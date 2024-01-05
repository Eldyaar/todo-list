import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoList from './components/Todo/TodoList';

import './styles/reset.css'
import './styles/common.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>
);