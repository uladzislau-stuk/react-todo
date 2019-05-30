import React, {Component} from 'react';
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'

class TodoList extends  Component{
	constructor(props) {
		super(props);

		this.state = {
			todos: []
		}
	}

	render() {
		let todos = this.state.todos.map(todo => {
			// ...<Todo />
		});

		return (
			<div className='TodoList'>
				<ul className='TodoList-Todos'>{todos}</ul>
				<NewTodoForm />
			</div>
		);
	}
}

export default TodoList;