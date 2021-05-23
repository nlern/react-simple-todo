import React, { FC } from 'react';

import AddTodoForm from './components/AddTodoForm/AddTodoForm';
import TodoList from './components/TodoList/TodoList';

import { TodoProvider } from './context/todo.context';

import './index.css';

const App: FC = (): JSX.Element => {
  return (
    <TodoProvider>
      <div className="App">
        <AddTodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;
