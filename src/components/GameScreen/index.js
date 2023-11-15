import React from 'react';
import LevelsScreen from '../LevelsScreen';
import HomeScreen from '../HomeScreen';
import SettingsScreen from '../SettingsScreen';

const screens = {
	levels: LevelsScreen,
	home: HomeScreen,
	settings: SettingsScreen,
};

const GameScreen = (context) => {
	const { state: { screen, theme }, config: { background }} = context;
	const Screen = screens[screen];

	return (
		<div
			className="gameScreen"
			style={ { backgroundImage: `url(${ background[theme] })` } }
		>
			<Screen { ...context }/>
		</div>);
};

export default GameScreen;
