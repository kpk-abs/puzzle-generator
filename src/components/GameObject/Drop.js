/* eslint-disable max-lines-per-function */
import { peek } from '@laufire/utils/debug';
import React from 'react';
import { useDrop } from 'react-dnd';

const Drop = ({ children, style, acceptType, item: drop }) => {
	const [{ isOver }, dropRef] = useDrop({
		accept: acceptType,
		drop: (drag) => {
			peek({ drag, drop });
		},
		collect: (monitor) => ({
			isOver: !!monitor.isOver(),
		}),
	});

	return (
		<div
			ref={ dropRef }
			style={ {
				backgroundColor: isOver ? 'lightgreen' : 'white',
				...style,
			} }
		>
			{children}
		</div>
	);
};

export default Drop;
