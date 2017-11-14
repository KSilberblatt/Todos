import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
// REMOVE before production
import { receiveTodo, receiveTodos } from './actions/todo_actions';
// REMOVE before production

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  
  // REMOVE before production
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  // REMOVE before production

  const rootEl = document.getElementById('root');
  ReactDOM.render(<h1>HI</h1>, rootEl);
});
