import React from 'react';
import ReactDOM from 'react-dom';
import TodoListItem from './todo_list_item';

const TodoList = (props) => {
  const todos = props.todos.map(todo => (
    <TodoListItem todo={todo} key={todo.id}/>
  ));
  return (
  <ul>
    {todos}
  </ul>);
};

export default TodoList;
