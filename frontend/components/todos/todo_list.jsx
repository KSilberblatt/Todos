import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from '../todo_list/todo_form';

const TodoList = (props) => {
  const todos = props.todos.map(todo => (
    <TodoListItem todo={todo} key={todo.id}/>
  ));
  return (
    <div>
      <ul>
        {todos}
      </ul>

      <TodoForm />
    </div>

  );
};

export default TodoList;
