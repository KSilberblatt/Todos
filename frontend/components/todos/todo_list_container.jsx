import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './todo_list';
import { connect } from 'react-redux';
import { receiveTodos } from '../../reducers/todos_reducer';
import { allTodos } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  // todos: state.todos
  todos: allTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
  receiveTodos: (todo) => dispatch(receiveTodos(todo))
});

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;
