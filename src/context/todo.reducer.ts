import { TodoState } from '../interfaces';
import { TodoActionTypes } from './todo-action-types.enum';
import { TodoActions } from './todo.actions';

export const TodoReducer = (
  state: TodoState,
  action: TodoActions,
): TodoState => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO: {
      return {
        ...state,
        todos: [action.todo, ...state.todos],
      };
    }
    case TodoActionTypes.DELETE_TODO: {
      return {
        ...state,
        todos: state.todos.filter(({ id }) => id !== action.id),
      };
    }
    case TodoActionTypes.UPDATE_TODO: {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.todo.id ? { ...action.todo } : todo,
        ),
      };
    }
    default:
      return state;
  }
};
