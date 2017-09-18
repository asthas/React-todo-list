import React, {Component} from 'react'
import Todo from './todo'

class TodoList extends Component {
	render(){
		const {
			onTodoEdit,
			onTodoDelete,
			onInput
		} = this.props

		return(
			<ul>
				{this.props.todos.map((todo, index) => 
					<Todo 
						key={index}
						todo={todo}
						onEdit={() => onTodoEdit(todo)}
						onDelete={() => onTodoDelete(todo)}
					/>
				)}
			</ul>
		)
	}
	
}

export default TodoList