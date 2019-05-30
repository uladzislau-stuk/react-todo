import React, {Component} from "react";
import uuid from 'uuid/v4';

class NewTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = { task: "" };
	}

	handleChange = (evt) => {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}
	handleSubmit = (evt) => {
		evt.preventDefault();

		if(!this.state.task) return;

		this.props.createTodo({...this.state, id: uuid()});
		this.setState({ task: "" })
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit} className='NewTodoForm'>
				<label htmlFor='task'>New Todo</label>
				<input
					id='task'
					name='task'
					placeholder='New todo'
					type='text'
					value={this.state.task}
					onChange={this.handleChange}
				/>
				<button type='submit'>Add todo</button>
			</form>
		);
	}
}

export default NewTodoForm;