import React from 'react';
import TodoList from './components/TodoList/TodoList';
import { Todo } from './interfaces';

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
    <>
      <TodoList todos={todos} />
    </>
  );
}

export default App;
