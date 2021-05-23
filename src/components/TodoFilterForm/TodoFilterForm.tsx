import React, { ChangeEvent, FC } from 'react';
import { useTodo } from '../../context/todo.context';
import { TodoFilterType } from '../../interfaces';
import styles from './TodoFilterForm.module.css';

interface TodoFilterFormProps {
  filter: TodoFilterType;
}

const TodoFilterForm: FC<TodoFilterFormProps> = ({ filter }): JSX.Element => {
  const { updateTodosFilter } = useTodo();

  const handleFilterChange = (event: ChangeEvent): void => {
    updateTodosFilter(
      (event.target as HTMLInputElement).value as TodoFilterType,
    );
  };
  return (
    <form className={styles.form}>
      <span className={styles.formText}>Show </span>
      <div className={styles.formItem}>
        <label htmlFor="todo-filter-all">
          <input
            type="radio"
            id="todo-filter-all"
            name="todo-filter"
            value="all"
            checked={filter === 'all'}
            onChange={handleFilterChange}
          />
          <span>All</span>
        </label>
      </div>
      <div className={styles.formItem}>
        <label htmlFor="todo-filter-done">
          <input
            type="radio"
            id="todo-filter-done"
            name="todo-filter"
            value="done"
            checked={filter === 'done'}
            onChange={handleFilterChange}
          />
          <span>Done</span>
        </label>
      </div>
      <div className={styles.formItem}>
        <label htmlFor="todo-filter-not-done">
          <input
            type="radio"
            id="todo-filter-not-done"
            name="todo-filter"
            value="notDone"
            checked={filter === 'notDone'}
            onChange={handleFilterChange}
          />
          <span>Not Done</span>
        </label>
      </div>
    </form>
  );
};

export default TodoFilterForm;
