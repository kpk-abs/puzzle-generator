import React from 'react';
import { useDrop } from 'react-dnd';
import context from '../../core/context';

const Drop = ({ children, acceptType, item: drop = {}}) => {
	const [, dropRef] = useDrop({
		accept: acceptType,
		drop: (drag) => {
			context.actions.handleDrop({ drag, drop });
		},
	});

	return <div ref={ dropRef } className="gameObject">{children}</div>;
};

export default Drop;
