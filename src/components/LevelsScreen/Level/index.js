import React from 'react';
import Tile from '../../Tile';
import Box from '../../Box';

const types = {
	tile: Tile,
	box: Box,
};

const Level = ({ data, ...context }) =>
	data.map((prop, key) => {
		const Component = types[prop.type];

		return <Component key={ key } { ...{ data: prop, ...context } }/>;
	});

export default Level;
