import React, {Component} from 'react';

class Todo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isEditing: false
		}

		this.toggleInputDisabling = () => {
			if (this.textInput) {
				this.textInput.disabled = !this.state.isEditing;
			}
		}
	}

	componentDidMount() {
		this.toggleInputDisabling();
	}

	componentDidUpdate() {
		this.toggleInputDisabling();
	}

	componentWillUnmount() {
		delete this.textInput;
	}

	handleEdit = () => {
		this.setState({
			isEditing: !this.state.isEditing
		});
	}

	handleRemove = () => {
		this.props.removeTodo(this.props.id);
	}

	handleChange = (evt) => {
		this.props.updateTodo({
			id: this.props.id,
			task: evt.target.value
		});
	}

	render() {
		return (
			<div className='Todo'>
				<button onClick={this.handleEdit}>Edit</button>
				<button onClick={this.handleRemove}>X</button>
				<input
					onChange={this.handleChange}
					type="text"
					value={this.props.task}
					ref={element => this.textInput = element}
				/>
			</div>
		);
	}
}

export default Todo;