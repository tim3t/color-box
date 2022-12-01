import React from 'react';

const Box = ({ backgroundColor, width, height }) => {
	const boxStyling = {
		backgroundColor: backgroundColor,
		width: width,
		height: height,
		margin: '20px',
		border: '2px solid black'
	};
	return <div className='Box' style={boxStyling} />;
};

export default Box;
