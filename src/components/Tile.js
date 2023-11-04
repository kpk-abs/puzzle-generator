import React from 'react';
import { range } from '@laufire/utils/collection';

const hundred = 100;

const getBackgroundPosition = (context) => {
	const { data: { name },
		config: { columns, size, imageDetails }} = context;

	const itemIndex = imageDetails.find((ele) => ele.name === name).index;
	const x = (itemIndex % columns) * size;
	const y = Math.floor(itemIndex / columns) * size;

	return `${ -x }vmin ${ -y }vmin`;
};

const getTileStyle = (context) => {
	const { config: { size, columns }} = context;

	return {
		width: `${ size }vmin`,
		height: `${ size }vmin`,
		backgroundSize: `${ columns * hundred }%`,
		backgroundPosition: getBackgroundPosition(context),
	};
};

const Tile = (context) => {
	const { data: { value }} = context;

	return range(0, value).map((dummy, i) =>
		<div
			key={ i }
			className="tile"
			style={ getTileStyle(context) }
		/>);
};

export default Tile;
