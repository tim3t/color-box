import React from 'react';
import './App.css';
import BoxList from './ColorBox/BoxList';
import TodoList from './TodoList/TodoList';

function App() {
	return (
		<React.Fragment>
			<BoxList />
			<TodoList />
		</React.Fragment>
	);
}

export default App;
