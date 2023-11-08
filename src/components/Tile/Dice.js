import React from 'react';
import getTileStyle from '../../helpers/tile/getTileStyle';

const Dice = (context) => {
	const { data: { value, group }} = context;

	return (
		<div
			style={ getTileStyle({ ...context, data: { value, group }}) }
		/>);
};

export default Dice;
