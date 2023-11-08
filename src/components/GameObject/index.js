import React from 'react';
import Tile from '../Tile';
import Drag from './Drag';
import Drop from './Drop';
import Box from '../Box';
import DragContainer from './DragContainer';

const WithDrag = (context) => {
	const { data } = context;

	return (
		<Drag item={ data }>
			<Tile { ...context }/>
		</Drag>
	);
};

const objects = {
	tile: WithDrag,
	box: Box,
};

const GameObject = (context) => {
	const {
		data,
	} = context;
	const Component = objects[data.type];

	return (
		<DragContainer>
			<Drop
				{ ...{
					acceptType: ['tile'],
					item: data,
				} }
			>
				<Component { ...context }/>
			</Drop>
		</DragContainer>
	);
};

export default GameObject;
