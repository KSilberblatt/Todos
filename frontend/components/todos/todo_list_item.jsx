import React from 'react';
import ReactDOM from 'react-dom';

const TodoListItem = ({ todo }) => (
  <li>{todo.title}</li>
);

export default TodoListItem;
