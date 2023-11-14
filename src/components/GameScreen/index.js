import React from 'react';
import LevelsScreen from '../LevelsScreen';
import HomeScreen from '../HomeScreen';
import SettingsScreen from '../SettingsScreen';

const screens = {
	levels: LevelsScreen,
	home: HomeScreen,
	setting: SettingsScreen,
};

const GameScreen = (context) => {
	const { state: { screen }} = context;
	const Screen = screens[screen];

	return (
		<div className="gameScreen">
			<Screen { ...context }/>
		</div>);
};

export default GameScreen;
