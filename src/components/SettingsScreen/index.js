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
	const { state: { audio, music }} = context;

	return [
		{
			type: audio,
			action: 'setAudio',
			name: audioIcon,
		},
		{
			type: music,
			action: 'setMusic',
			name: musicIcon,
		},
	];
};

const SettingsScreen = (context) => <div>
	{getButtonData(context).map((ele, i) =>
		<Button
			key={ i }
			{ ...{ ...context, data: ele } }
		/>)}
	<Themes { ...context }/>
	<BackButton { ...context }/>
</div>;

export default SettingsScreen;
