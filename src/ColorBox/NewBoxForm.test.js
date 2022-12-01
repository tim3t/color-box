import React from 'react';
import { render } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

it('should render without exploding', function() {
	render(<NewBoxForm />);
});

it('should match snapshot', function() {
	const { asFragment } = render(<NewBoxForm />);
	expect(asFragment).toMatchSnapshot();
});
