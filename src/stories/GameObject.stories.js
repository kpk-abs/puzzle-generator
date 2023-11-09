import React from 'react';
import GameObjectComp from '../components/GameObject';
import normalizeConfig from '../services/normalizeConfig';
import context from '../core/context';
import '../App.scss';

const normalizedConfig = normalizeConfig.normalizeSprite(context);

const component = {
	title: 'Components/GameObject',
	component: GameObjectComp,
};

export default component;

const Template = (args) => {
	const { data } = args;

	return (
		data.map((item) =>
			<GameObjectComp
				key={ item.type }
				{ ...{
					...context,
					data: item,
					config: normalizedConfig,
				} }
			/>));
};

export const GameObject = Template.bind({});

GameObject.args = {
	data: [
		{
			image: 'carrot',
			variation: 'image',
			group: 'b',
			type: 'tile',
			value: 1,
		},
		{
			image: 'carrot',
			variation: 'image',
			group: 'b',
			type: 'tile',
			value: 1,
		},
		{ type: 'box', value: 2 },
	],
};
