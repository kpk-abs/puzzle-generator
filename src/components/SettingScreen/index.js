import React from 'react';
import Themes from './Themes';
import BackButton from '../BackButton';
import getStyle from '../../helpers/getStyle';

const getBackground = (music) => (music ? 'musicOn' : 'musicOff');

const getAudio = (audio) => (audio ? 'audioOn' : 'audioOff');

const SettingScreen = (context) => {
	const { actions, state: { audio, music }} = context;

	return <div>
		<button { ...{
			className: 'gameButton',
			style: { ...getStyle({ ...context,
				data: { value: getBackground(audio) }}) },
			onClick: () => { actions.setAudio(!audio); },
		} }
		/>
		<button { ...{
			className: 'gameButton',
			style: { ...getStyle({ ...context,
				data: { value: getAudio(music) }}) },
			onClick: () => { actions.setMusic(!music); },
		} }
		/><Themes { ...context }/>
		<BackButton { ...context }/>
	</div>;
};

export default SettingScreen;
