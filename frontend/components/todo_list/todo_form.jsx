import React, { Component } from 'react';
import { receiveTodo } from '../../actions/todo_actions';
import { allTodos } from '../../reducers/selectors';
import { uniqueId } from '../../util/unique_id';

class TodoForm extends Component{
  constructor(){
    super();
    this.state = {
      title: "",
      body: "",
      done: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleClick(ev){
    ev.preventDefault();
    
    const dispatchReceiveTodo = () => {
      window.store.dispatch(receiveTodo(this.state));
    };

    this.setState({
      id: uniqueId()
    }, dispatchReceiveTodo);

  }

  handleInputChange(ev){
    ev.preventDefault();
    let target = ev.target.id;
    let targetValue = ev.target.value;
    this.setState({
      [target]: targetValue
    });
  }

  render(){
    return (
      <form>New Todo<br/>
        <label>Title
          <input id='title' onChange={this.handleInputChange} type="text"></input>
        </label><br/>
        <label>Body
          <input id='body' onChange={this.handleInputChange} type="text"></input>
        </label><br/>
      <button onClick={this.handleClick}>Submit</button>
      </form>
    );
  }
}

export default TodoForm;
