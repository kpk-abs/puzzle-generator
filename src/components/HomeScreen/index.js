import React from 'react';
import PlayButton from './PlayButton';
import SettingButton from './SettingButton';

const HomeScreen = (context) =>
	<div>
		<PlayButton { ...context }/>
		<SettingButton { ...context }/>
	</div>;

export default HomeScreen;
