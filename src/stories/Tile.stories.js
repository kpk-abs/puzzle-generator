import React from 'react';
import Item from '../components/Tile';
import normalizeConfig from '../services/normalizeConfig';
import context from '../core/context';
import '../App.scss';

const normalizedConfig = normalizeConfig.normalizeSprite(context);

const component = {
	title: 'Components/Tile',
	component: Item,
	argTypes: {
		variation: {
			type: 'select', options: [
				'image', 'audio', 'dice', 'number',
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
			...context, config: normalizedConfig,
			state: context.seed, data: tile,
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
