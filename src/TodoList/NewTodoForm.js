import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

function NewTodoForm({ createTodo }) {
	const [ formData, setFormData ] = useState({
		task: ''
	});

	const handleChange = (evt) => {
		const { name, value } = evt.target;
		setFormData((formData) => ({
			...formData,
			[name]: value
		}));
	};

	const gatherInput = (evt) => {
		evt.preventDefault();
		createTodo({ ...formData, id: uuid() });
		setFormData({ task: '' });
	};

	return (
		<div>
			<form onSubmit={gatherInput}>
				<div>
					<label htmlFor='task'>Task</label>
					<input onChange={handleChange} type='text' name='height' value={formData.task} id='task' />
				</div>
				<button id='newTodoButton'>Add a new task!</button>
			</form>
		</div>
	);
}

export default NewTodoForm;
