import { receiveTodos } from '../actions/todo_actions';

export const getTodos = () => {
  $.ajax({
    method: 'GET',
    url: 'api/todos'
  }).then(
    todos => window.store.dispatch(receiveTodos(todos)),
    error => alert("Nah.")
  );
};
