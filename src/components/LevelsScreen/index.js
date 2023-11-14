import React from 'react';
import LevelElements from './Level/LevelElements';
import Board from './Board';

const LevelsScreen = (context) => {
	const { state: { level }} = context;

	return level.name
		?	<Board { ...context }/>
		: <LevelElements { ...context }/>;
};

export default LevelsScreen;
