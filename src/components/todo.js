import React from 'react'

const Todo = ({
	todo,
	onEdit,
	onDelete
}) => {
	return(
		<li>
			{todo} 
			<i className="material-icons" onClick={()=>onEdit()}>mode_edit</i>
			<i className="material-icons" onClick={()=>onDelete()}>delete</i>
		</li>
	)
}

export default Todo