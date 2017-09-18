import React, {Component} from 'react'
import Todo from './todo'

class TodoList extends Component {

	constructor(props){
		super(props)
	}

	toggle = (todoToToggle) => {
		this.props.model.toggle(todoToToggle)
	}

	destroy = (todo) => {
		this.props.model.destroy(todo)
	}

	edit = (todo) => {
		this.setState({editing: todo.id})
	}

	save = (todoToSave, text) => {
		this.props.model.save(todoToSave, text)
		this.setState({editing: null})
	}

	cancel = () => {
		this.setState({editing: null})
	}

	render(){

		const {
			onTodoEdit,
			onTodoDelete,
		} = this.props

		return(
			<ul>
				{this.props.todos.map((todo, index) => 
					<Todo 
						key={index}
						todo={todo}
						onEdit={() => onTodoEdit(todo)}
						onDelete={() => onTodoDelete(todo)}
						// onToggle={this.toggle(todo)}
						// onDestroy={this.destroy(todo)}
						// onEdit={this.edit(todo)}
						// editing={this.state.editing === todo.id}
						// onSave={this.save(todo)}
						// onCancel={this.cancel()} 
					/>
				)}
			</ul>
		)
	}
	
}

export default TodoList