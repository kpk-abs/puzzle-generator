import React from 'react';
import Levels from '../Levels/index.js';
import HomeScreen from '../HomeScreen/index.js';

const screens = {
	LevelsScreen: Levels,
	HomeScreen: HomeScreen,
};

const GameScreen = (context) => {
	const { state: { screen }} = context;
	const Screen = screens[screen];

	return <div><Screen { ...context }/></div>;
};

export default GameScreen;
