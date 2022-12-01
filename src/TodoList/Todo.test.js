import React from 'react';
import { render } from '@testing-library/react';
import Todo from './Todo';

it('should render without exploding the app', function() {
	render(<Todo />);
});

it('should match the snapshot test', function() {
	const { asFragment } = render(<Todo />);
	expect(asFragment).toMatchSnapshot();
});
