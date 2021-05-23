import React, { ChangeEvent, FormEvent, useState } from 'react';

import AddTodoFormStyles from './AddTodoForm.module.css';

export default function AddTodoForm(): JSX.Element {
  const [title, setTitle] = useState('');

  const resetForm = () => {
    setTitle('');
  };

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    // TODO: Submit data
    if (!title) {
      return;
    }
    // reset form
    resetForm();
  };

  return (
    <div className={AddTodoFormStyles.addTodoFormWrapper}>
      <form className={AddTodoFormStyles.addTodoForm} onSubmit={handleSubmit}>
        <input
          type="text"
          id="add-todo-form-input"
          placeholder="Add a todo"
          className={AddTodoFormStyles.addTodoFormInput}
          value={title}
          onChange={handleTitleChange}
        />
      </form>
    </div>
  );
}
