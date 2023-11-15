import React from 'react';
import Item from '../components/Tile';
import context from './helper/context';

const component = {
	title: 'Components/Tile',
	component: Item,
	argTypes: {
		variation: {
			type: 'select', options: [
				'image', 'audio', 'dice', 'number', 'line', 'numberAndImage',
			],
		},
	},
};

export default component;

const Template = (args) => {
	const { variation, data } = args;
	const tile = { ...data, variation };

	return (
		<Item { ...{
			...context, data: tile,
		} }
		/>);
};

export const Tile = Template.bind({});

Tile.args = {
	data: {
		value: 1,
		image: 'greenCapsicum',
		group: 'a',
	},
};
