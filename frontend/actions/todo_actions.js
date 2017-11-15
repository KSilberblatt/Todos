import { getTodos } from '../util/todo_api_util';

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';


// array of objects
export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos: todos
});

// object
export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo: todo
});

export const fetchTodos = () => {

};
