import React, { useContext } from 'react';
import { TodoContext } from '../../context/todo.context';
import TodoItem from '../TodoItem/TodoItem';
import TodoListStyles from './TodoList.module.css';

export default function TodoList(): JSX.Element {
  const { todos } = useContext(TodoContext);
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
