import { Todo } from './todo.interface';

export type TodoFilterType = 'all' | 'done' | 'notDone';

export interface TodoState {
  todos: Todo[];
  filter: TodoFilterType;
}
