import React from 'react';

function Todo({ id, task = 'wash the dog' }) {
	return <div>{task}</div>;
}

export default Todo;
