import React from 'react';
import Tile from '../Tile';
import Box from '../Box';

const types = {
	tile: Tile,
	box: Box,
};

const Level = ({ items, type }) =>
	items.map((prop, key) => {
		const Component = types[type];

		return <Component key={ key } { ...prop }/>;
	});

export default Level;
