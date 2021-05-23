import { Todo } from '../interfaces';
import { TodoActionTypes } from './todo-action-types.enum';

export type TodoActions =
  | { type: TodoActionTypes.ADD_TODO; todo: Todo }
  | { type: TodoActionTypes.DELETE_TODO; id: string }
  | { type: TodoActionTypes.UPDATE_TODO; todo: Todo };
