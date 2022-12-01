import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

// ↓↓↓ Smoke test ↓↓↓

it('should render without exploding', function() {
	render(<BoxList />);
});

// ↓↓↓ Snapshot test ↓↓↓

it('should match snapshot', function() {
	const { asFragment } = render(<BoxList />);
	expect(asFragment).toMatchSnapshot();
});

// ↓↓↓ Critical functionality tests ↓↓↓

function addBox(boxList, height = '25', width = '25', color = 'teal') {
	const heightInput = boxList.getByLabelText('Height (in px)');
	const widthInput = boxList.getByLabelText('Width (in px)');
	const backgroundColorInput = boxList.getByLabelText('Background Color');
	fireEvent.change(backgroundColorInput, { target: { value: color } });
	fireEvent.change(widthInput, { target: { value: width } });
	fireEvent.change(heightInput, { target: { value: height } });
	const button = boxList.getByText('Add a new box!');
	fireEvent.click(button);
}

it('can add a new box to the page', function() {
	const boxList = render(<BoxList />);
	expect(boxList.queryByText('Remove Above Box')).not.toBeInTheDocument();
	addBox(boxList);

	const button = boxList.getByText('Remove Above Box');
	expect(button).toBeInTheDocument();
});
