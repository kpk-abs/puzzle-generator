/* eslint-disable max-lines-per-function */
import React from 'react';
import { useDrag } from 'react-dnd';

const Drag = ({ children, item }) => {
	const [{ isDragging }, drag] = useDrag({
		type: 'tile',
		item: item,
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
		end: (i, monitor) => {
			monitor.didDrop();
		},
	});

	return (
		<div
			ref={ drag }
			className="tile"
			style={ {
				cursor: 'move',
				opacity: isDragging ? 0 : 1,
			} }
		>
			{children}
		</div>
	);
};

export default Drag;
