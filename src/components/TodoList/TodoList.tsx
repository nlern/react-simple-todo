import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../../context/todo.context';
import TodoItem from '../TodoItem/TodoItem';
import TodoFilterForm from '../TodoFilterForm/TodoFilterForm';
import TodoListStyles from './TodoList.module.css';

export default function TodoList(): JSX.Element {
  const { todos, filter } = useContext(TodoContext);
  const [filteredTodos, setFilteredTodos] = useState(todos);
  useEffect(() => {
    const updatedFilteredTodos = todos.filter(({ isDone }) => {
      switch (filter) {
        case 'all':
          return true;
        case 'done':
          return isDone === true;
        case 'notDone':
          return isDone === false;
        default:
          return false;
      }
    });
    setFilteredTodos(updatedFilteredTodos);
  }, [filter, todos]);
  return (
    <div className={TodoListStyles.todoListWrapper}>
      {todos && Array.isArray(todos) && todos.length > 0 ? (
        <div className={TodoListStyles.todoActionsWrapper}>
          <span className={TodoListStyles.todoCountWrapper}>
            Count{' '}
            <strong className={TodoListStyles.todoCount}>{todos.length}</strong>
          </span>
          <TodoFilterForm filter={filter} />
        </div>
      ) : null}
      <ul className={TodoListStyles.todoList}>
        {filteredTodos.map((todo) => {
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
