import React from 'react';
import { useTodo } from '../../context/todo.context';
import { Todo } from '../../interfaces';

import TodoStyles from './TodoItem.module.css';

interface TodoProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoProps): JSX.Element {
  const { updateTodo, deleteTodo } = useTodo();
  const { id, title, isDone } = todo;

  const handleTodoToggle = () => {
    // toggle done state
    const toggledDone = !isDone;
    const updatedTodo: Todo = {
      ...todo,
      isDone: toggledDone,
    };
    updateTodo(updatedTodo);
  };

  const handleTodoDelete = () => {
    deleteTodo(id);
  };

  return (
    <div className={TodoStyles.todoItemWrapper}>
      <div className={TodoStyles.todoItemCheckboxWrapper}>
        <input
          type="checkbox"
          id={id}
          className={TodoStyles.todoItemCheckbox}
          checked={isDone}
          onChange={handleTodoToggle}
        />
      </div>
      <div className={TodoStyles.todoItemTitleWrapper}>
        <h1
          className={`${TodoStyles.todoItemTitle} ${
            isDone ? TodoStyles.done : ''
          }`}
        >
          {title}
        </h1>
        <div className={TodoStyles.todoItemDeleteWrapper}>
          <button
            className={TodoStyles.todoItemDeleteButton}
            type="button"
            onClick={handleTodoDelete}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}
