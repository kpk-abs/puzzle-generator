import React from 'react';
import Item from './Item';
import Number from './Number';
import Audio from './Audio';
import Dice from './Dice';

const tiles = {
	image: Item,
	number: Number,
	audio: Audio,
	dice: Dice,
};

const Tile = (context) => {
	const { data: { variation = 'number' }} = context;
	const Component = tiles[variation];

	return (
		<div className="tile">
			<Component { ...context }/>
		</div>);
};

export default Tile;
