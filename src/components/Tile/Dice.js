import React from 'react';
import getTileStyle from '../../helpers/tile/getTileStyle';

const face = 6;

const defaultDice = (value) => (value < face
	? {}
	: { backgroundPosition: '-33vMin -55vMin' });

const Dice = (context) => {
	const { data: { value, group }} = context;

	return (
		<div
			style={ { ...getTileStyle({ ...context, data: { value, group }}),
				...defaultDice(value) } }
		/>);
};

export default Dice;
