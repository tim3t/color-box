import React from 'react';
import { render } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

it('should render without exploding', function() {
	render(<NewTodoForm />);
});

it('should match snapshot', function() {
	const { asFragment } = render(<NewTodoForm />);
	expect(asFragment).toMatchSnapshot();
});
