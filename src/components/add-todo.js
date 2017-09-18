import React from 'react'

const AddTodo = (props) => {
	return(
		<input type="text" 
			onKeyPress={props.onAddTodo} 
			value={props.value}
		/>
	)
}

export default AddTodo