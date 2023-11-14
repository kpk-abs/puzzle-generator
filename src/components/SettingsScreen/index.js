import React from 'react';
import Themes from './Themes';
import BackButton from '../BackButton';
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
	];
};

const SettingsScreen = (context) => <div>
	{getButtonData(context).map((data, i) =>
		<Button
			key={ i }
			{ ...{ ...context, data } }
		/>)}
	<Themes { ...context }/>
	<BackButton { ...context }/>
</div>;

export default SettingsScreen;
