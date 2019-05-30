import React, {Component} from 'react';
import Todo from './Todo'
import NewTodoForm from './NewTodoForm';

class TodoList extends  Component{
	constructor(props) {
		super(props);

		this.state = {
			todos: []
		}
	}

	create = (todo) => {
		this.setState({
			todos: [...this.state.todos, todo]
		});
	}

	remove = (id) => {
		this.setState({
			todos: this.state.todos.filter(todo => todo.id !== id)
		});
	}

	update = (updTodo) => {
		let idx = this.state.todos.findIndex(todo => todo.id === updTodo.id)
		let todos = [...this.state.todos.slice(0, idx), updTodo, ...this.state.todos.slice(idx + 1, this.state.todos.length)];

		this.setState({ todos });
	}

	render() {
		let todos = this.state.todos.map(todo => (
			<Todo
				key={todo.id}
				id={todo.id}
				task={todo.task}
				removeTodo={this.remove}
				updateTodo={this.update}
			/>
		));

		return (
			<div>
				<h1>Todo List!</h1>
				<p>A simple React Todo List App</p>
				<ul>{todos}</ul>
				<NewTodoForm createTodo={this.create}/>
			</div>
		);
	}
}

export default TodoList;