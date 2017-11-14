import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// REMOVE before production
import { receiveTodo, receiveTodos } from './actions/todo_actions';
import { allTodos } from './reducers/selectors';
// REMOVE before production

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  // REMOVE before production
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.allTodos = allTodos(store.getState());
  // REMOVE before production

  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, rootEl);
});
