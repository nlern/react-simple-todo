import React from 'react';

import { Todo } from '../../interfaces';

import TodoItem from '../TodoItem/TodoItem';

import TodoListStyles from './TodoList.module.css';

interface TodoListProps {
  todos: Todo[];
}

export default function TodoList({ todos }: TodoListProps): JSX.Element {
  return (
    <div className={TodoListStyles.todoListWrapper}>
      <ul className={TodoListStyles.todoList}>
        {todos.map((todo) => {
          return (
            <li className={TodoListStyles.todoListItem} key={todo.id}>
              <TodoItem todo={todo} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
