import React from 'react';
import PlayButton from '../PlayButton.js';
import SettingButton from '../SettingButton/index.js';

const GameScreen = (context) =>
	<div>
		<PlayButton { ...context }/>
		<SettingButton { ...context }/>
	</div>;

export default GameScreen;
