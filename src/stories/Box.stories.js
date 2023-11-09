import React from 'react';
import BoxComponent from '../components/Box';
import normalizeConfig from '../services/normalizeConfig';
import context from '../core/context';

const component = {
	title: 'Components/Box',
	component: BoxComponent,
};

export default component;

const Template = (args) => {
	const normalizedConfig = normalizeConfig.normalizeSprite(context);

	return (
		<BoxComponent { ...{
			...context, config: normalizedConfig,
			state: context.seed, ...args,
		} }
		/>);
};

export const Box = Template.bind({});

Box.args = {
	data: {
		items: {
			image: 'carrot',
			variation: 'image',
			group: 'a',
			type: 'tile',
			value: 1,
			position: {
				x: 36,
				y: 79,
			},
		},
	},
};
