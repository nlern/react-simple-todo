import React from 'react';
import AddTodoForm from './components/AddTodoForm/AddTodoForm';
import TodoList from './components/TodoList/TodoList';
import { Todo } from './interfaces';

import './index.css';

function App(): JSX.Element {
  const todos: Todo[] = [
    {
      id: '1',
      title: 'Learn React',
      isDone: true,
    },
    {
      id: '2',
      title: 'Learn GraphQL',
      isDone: false,
    },
  ];
  return (
    <div className="App">
      <AddTodoForm />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
