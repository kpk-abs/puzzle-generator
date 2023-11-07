import React from 'react';
import getTileStyle from '../../helpers/tile/getTileStyle';

const Dice = (context) => {
	const { data: { value }} = context;

	return (
		<div
			className="image"
			style={ getTileStyle({ ...context, data: value }) }
		/>);
};

export default Dice;
