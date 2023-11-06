import React from 'react';
import TextToSpeech from 'react-web-components/TextToSpeech';
import AudioImage from '../../Images/Audio.png';

const getAudioStyle = (size) => ({
	width: `${ size }vMin`,
	height: `${ size }vMin`,
	backgroundSize: 'cover',
	borderRadius: '50%',
	backgroundImage: `url(${ AudioImage })`,
});

const Audio = (context) => {
	const { data: { value }, config: { size }} = context;

	return (
		<TextToSpeech { ...{
			value: value,
			style: { ...getAudioStyle(size) },
		} }
		/>);
};

export default Audio;
