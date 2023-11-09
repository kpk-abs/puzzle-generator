import { peek } from '@laufire/utils/debug';
import React from 'react';
import { useDrop } from 'react-dnd';

const Drop = ({ children, acceptType, item: drop }) => {
	const [{ isOver }, dropRef] = useDrop({
		accept: acceptType,
		drop: (drag) => {
			peek({ drag, drop });
		},
		collect: (monitor) => ({
			isOver: !!monitor.isOver(),
		}),
	});

	return <div ref={ dropRef }>{children}</div>;
};

export default Drop;
