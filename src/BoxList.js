import React from 'react';
import Box from './Box';

const BoxList = () => {
	const [ boxes, setBoxes ] = useState([]);
	function addBox(newBox) {
		setBoxes((boxes) => [ ...boxes, newBox ]);
	}
	return (
		<div>
			<h1>Color Boxes</h1>
			{boxes.map((boxes) => <Box backgroundColor={backgroundColor} height={height} width={width} />)}
		</div>
	);
};

export default BoxList;
