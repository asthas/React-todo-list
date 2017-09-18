import React, { Component } from 'react'
import './App.css'
import TodoList from './components/todo-list'
import AddTodo from './components/add-todo'

class App extends Component {

	constructor(){
		super()
		this.state = {
			todos: [],
			editing: false,
			inputValue: ''
		}
	}

	handleAddTodo = (e) => {
		this.setState({inputValue : e.target.value})
		if(e.which === 13){
			this.setState({
				todos: [...this.state.todos, e.target.value]
			})
		}
	}

	handleDelete = (todo) => {
		this.setState({
			todos: this.state.todos.filter(todoItem => todoItem !== todo)
		})
	}

	handleEdit = (todo) => {
		this.setState({
			editing: todo.id
		})
	}

	render() {
		return (
			<div className="App">
				<div className="App-header">
					<h2>My Todo List</h2>
				</div>
				<div className="App-intro">
					<AddTodo
						todos={this.state.todos}
						onAddTodo={this.handleAddTodo}
						value={this.state.inputValue}
					/>
					<TodoList 
						todos={this.state.todos} 
						onTodoEdit={this.handleEdit} 
						onTodoDelete={this.handleDelete}
					/>
				</div>
			</div>
		)
	}
}

export default App
