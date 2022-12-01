import React from 'react';
import { render } from '@testing-library/react';
import TodoList from './TodoList';

it('should render without exploding the app', function() {
	render(<TodoList />);
});

it('should match the snapshot test', function() {
	const { asFragment } = render(<TodoList />);
	expect(asFragment).toMatchSnapshot();
});
