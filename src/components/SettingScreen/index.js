import React from 'react';
import IconButton from 'react-web-components/IconButton';
import Themes from './Themes';
import BackButton from '../BackButton';

const SettingScreen = (context) => {
	const { actions, state: { audio, music }} = context;

	return <div>
		<IconButton { ...{
			icon: audio ? 'VolumeUp' : 'VolumeOff',
			onClick: () => { actions.setAudio(!audio); },
		} }
		/>
		<IconButton { ...{
			icon: music ? 'MusicNote' : 'MusicOff',
			onClick: () => { actions.setMusic(!music); },
		} }
		/>
		<Themes { ...context }/>
		<BackButton { ...context }/>
	</div>;
};

export default SettingScreen;
