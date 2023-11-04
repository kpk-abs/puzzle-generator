import React from 'react';
import getTileStyle from './getTileStyle';

const Tile = (context) =>
	<div
		className="tile"
		style={ getTileStyle(context) }
	/>;

export default Tile;
