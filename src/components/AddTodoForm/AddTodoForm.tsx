import React, { FormEvent } from 'react';

import AddTodoFormStyles from './AddTodoForm.module.css';

export default function AddTodoForm(): JSX.Element {
  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className={AddTodoFormStyles.addTodoFormWrapper}>
        <input
          type="text"
          id="add-todo-form-input"
          placeholder="Add a todo"
          className={AddTodoFormStyles.addTodoFormInput}
        />
      </div>
    </form>
  );
}
