import React from 'react';
import Themes from './Themes';
import Button from '../Button';

const musicIcon = {
	true: 'musicOn',
	false: 'musicOff',
};

const audioIcon = {
	true: 'audioOn',
	false: 'audioOff',
};

const getButtonData = (context) => {
	const { state: { audio, music }, actions } = context;

	return [
		{
			type: audio,
			onClick: () => actions.setAudio(!audio),
			name: audioIcon,
		},
		{
			type: music,
			onClick: () => actions.setMusic(!music),
			name: musicIcon,
		},
		{
			className: 'back',
			onClick: () => actions.setScreen('home'),
			name: 'back',
		},
	];
};

const SettingsScreen = (context) => <div>
	{getButtonData(context).map((data, i) =>
		<Button
			key={ i }
			{ ...{ ...context, data } }
		/>)}
	<Themes { ...context }/>
</div>;

export default SettingsScreen;
