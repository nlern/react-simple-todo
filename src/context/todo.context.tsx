import React, { createContext, FC, useContext, useReducer } from 'react';
import { Todo, TodoFilterType, TodoState } from '../interfaces';
import { generateUUID } from '../utils/uuid';
import { TodoActionTypes } from './todo-action-types.enum';
import { TodoReducer } from './todo.reducer';

// todo context type
export interface TodoContextType extends TodoState {
  addTodo: (title: string) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (todo: Todo) => void;
  updateTodosFilter: (newFilter: TodoFilterType) => void;
}

const initialState: TodoState = {
  todos: [],
  filter: 'all',
};

// create context
export const TodoContext = createContext<TodoContextType>({
  ...initialState,
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateTodosFilter: (ewFilter: TodoFilterType) => {
    // do nothing;
  },
});

export const useTodo = (): TodoContextType => useContext(TodoContext);

export const TodoProvider: FC = ({ children }): JSX.Element => {
  const [{ todos, filter }, dispatch] = useReducer(TodoReducer, initialState);

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
  const updateTodosFilter = (newFilter: TodoFilterType): void => {
    dispatch({ type: TodoActionTypes.UPDATE_TODOS_FILTER, filter: newFilter });
  };
  return (
    <TodoContext.Provider
      value={{
        todos,
        filter,
        addTodo,
        deleteTodo,
        updateTodo,
        updateTodosFilter,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
