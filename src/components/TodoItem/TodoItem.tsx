import React from 'react';
import { Todo } from '../../interfaces';

import TodoStyles from './TodoItem.module.css';

interface TodoProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoProps): JSX.Element {
  const { id, title, isDone } = todo;
  return (
    <div className={TodoStyles.todoItemWrapper}>
      <div className={TodoStyles.todoItemCheckboxWrapper}>
        <input
          type="checkbox"
          id={id}
          className={TodoStyles.todoItemCheckbox}
          checked={isDone}
        />
      </div>
      <div
        className={`${TodoStyles.todoItemTitle} ${
          isDone ? TodoStyles.done : ''
        }`}
      >
        {title}
      </div>
    </div>
  );
}
