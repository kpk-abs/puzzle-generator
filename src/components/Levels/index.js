import { map, values } from '@laufire/utils/collection';
import React from 'react';
import Level from '../Level';

const data = [
	{
		name: 'pencil',
		display: 'image',
		group: 'a',
		type: 'tile',
		value: 1,
	},
	{
		type: 'box',
		value: 2,
	},
];

const Levels = ({ levels, ...context }) => {
	const { state: { currentLevel }} = context;

	const levelElements = values(map(levels, ({ name }, key) =>
		<div
			key={ key }
			onClick={ () => { context.actions.setCurrentLevel(key); } }
		>
			{name}
		</div>));

	const levelProps = { ...context, data };

	const levelComponent = <Level { ...levelProps }/>;

	return currentLevel ? levelComponent : levelElements;
};

export default Levels;
