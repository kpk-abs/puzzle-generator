import React from 'react';
import LevelsScreen from '../LevelsScreen/index.js';
import HomeScreen from '../HomeScreen/index.js';

const screens = {
	LevelsScreen,
	HomeScreen,
};

const GameScreen = (context) => {
	const { state: { screen }} = context;
	const Screen = screens[screen];

	return <div><Screen { ...context }/></div>;
};

export default GameScreen;
