import React from 'react';
import { render } from '@testing-library/react';
import BoxList from './BoxList';

it('should render without exploding', function() {
	render(<BoxList />);
});

it('should match snapshot', function() {
	const { asFragment } = render(<BoxList />);
	expect(asFragment).toMatchSnapshot();
});
