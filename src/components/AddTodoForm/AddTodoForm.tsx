import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useTodo } from '../../context/todo.context';

import AddTodoFormStyles from './AddTodoForm.module.css';

export default function AddTodoForm(): JSX.Element {
  const [title, setTitle] = useState('');
  const { addTodo } = useTodo();

  const resetForm = () => {
    setTitle('');
  };

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();

    // do not add empty todos.
    if (!title) {
      return;
    }
    // add valid todo
    addTodo(title);
    // reset form
    resetForm();
  };

  return (
    <div className={AddTodoFormStyles.addTodoFormWrapper}>
      <form className={AddTodoFormStyles.addTodoForm} onSubmit={handleSubmit}>
        <input
          autoComplete="off"
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
