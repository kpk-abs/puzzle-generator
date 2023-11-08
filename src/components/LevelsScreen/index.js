import { map, values } from '@laufire/utils/collection';
import React from 'react';
import Level from './Level';
import generateLevel from '../../services/generateLevel';
import levels from '../../data/levels';

const LevelsScreen = (context) => {
	const { state: { currentLevel }, actions } = context;
	const { data = [] } = currentLevel && generateLevel(currentLevel);

	const levelElements = values(map(levels, ({ name }, key) =>
		<div
			key={ key }
			onClick={ () => { actions.setCurrentLevel(key); } }
		>
			{ name }
		</div>));

	const levelProps = { ...context, data };

	const levelComponent = <Level { ...levelProps }/>;

	return currentLevel ? levelComponent : levelElements;
};

export default LevelsScreen;
