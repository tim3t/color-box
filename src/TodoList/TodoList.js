import React, { useState } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

function TodoList() {
	const [ todos, setTodos ] = useState([]);
	const add = (todo) => {
		setTodos((todos) => [ ...todos, todo ]);
	};

	const todoItems = todos.map((todo) => <Todo key={todo.id} id={todo.id} task={todo.task} />);

	return (
		<div>
			<NewTodoForm createTodo={add} />
			{todoItems}
		</div>
	);
}

export default TodoList;
