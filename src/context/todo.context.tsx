import React, { createContext, FC, useContext, useReducer } from 'react';
import { Todo, TodoState } from '../interfaces';
import { generateUUID } from '../utils/uuid';
import { TodoActionTypes } from './todo-action-types.enum';
import { TodoReducer } from './todo.reducer';

// todo context type
export interface TodoContextType extends TodoState {
  addTodo: (title: string) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (todo: Todo) => void;
}

// create context
export const TodoContext = createContext<TodoContextType>({
  todos: [],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addTodo: (title: string) => {
    // do nothing;
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  deleteTodo: (id: string) => {
    // do nothing;
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateTodo: (todo: Todo) => {
    // do nothing;
  },
});

export const useTodo = (): TodoContextType => useContext(TodoContext);

export const TodoProvider: FC = ({ children }): JSX.Element => {
  const initialState: TodoState = {
    todos: [],
  };

  const [{ todos }, dispatch] = useReducer(TodoReducer, initialState);

  const addTodo = (title: string): void => {
    const id = generateUUID();
    const newTodo: Todo = { id, title, isDone: false };

    dispatch({ type: TodoActionTypes.ADD_TODO, todo: newTodo });
  };

  const deleteTodo = (id: string): void => {
    dispatch({ type: TodoActionTypes.DELETE_TODO, id });
  };

  const updateTodo = (todo: Todo): void => {
    dispatch({ type: TodoActionTypes.UPDATE_TODO, todo });
  };
  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
