import React from 'react';
import Item from './Item';

const tiles = {
	image: Item,
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
