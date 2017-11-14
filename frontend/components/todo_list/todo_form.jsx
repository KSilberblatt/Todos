import React, { Component } from 'react';
import receiveTodo from '../../actions/todo_actions';

class TodoForm extends Component{
  // constructor(){
  //
  // }

  // handleClick(ev){
  //   ev.preventDefault();
  // }

  render(){
    return (
      <form>New Todo<br/>
        <label>Title
          <input type="text"></input>
        </label><br/>
        <label>Body
          <input type="text"></input>
        </label><br/>
      <button onClick={receiveTodo}>Submit</button>
      </form>
    );
  }
}

export default TodoForm;
