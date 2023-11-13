import React from 'react';
import LevelsScreen from '../LevelsScreen';
import HomeScreen from '../HomeScreen';
import SettingScreen from '../SettingScreen';

const screens = {
	LevelsScreen,
	HomeScreen,
	SettingScreen,
};

const GameScreen = (context) => {
	const { state: { screen }} = context;
	const Screen = screens[screen];

	return <div className="gameScreen"><Screen { ...context }/></div>;
};

export default GameScreen;
