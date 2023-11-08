import React from 'react';
import PlayButton from '../PlayButton/index.js';
import SettingButton from '../SettingButton/index.js';

const HomeScreen = (context) =>
	<div>
		<PlayButton { ...context }/>
		<SettingButton { ...context }/>
	</div>;

export default HomeScreen;
