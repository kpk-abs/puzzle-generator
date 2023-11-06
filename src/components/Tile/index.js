import React from 'react';
import Item from './Item';
import Number from './Number';

const tiles = {
	image: Item,
	number: Number,
};

const Tile = (context) => {
	const { data: { variation }} = context;
	const Component = tiles[variation];

	return (
		<div className="tile">
			<Component { ...context }/>
		</div>);
};

export default Tile;
