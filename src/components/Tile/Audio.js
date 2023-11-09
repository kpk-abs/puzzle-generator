import React from 'react';
import TextToSpeech from 'react-web-components/TextToSpeech';
import getAudioStyle from '../../helpers/tile/getAudioStyle';
import { rndBetween } from '@laufire/utils/random';

const limit = 100;

const Audio = (context) => {
	const { data: { value }, config: { size }} = context;

	return (
		<TextToSpeech { ...{
			value: value,
			style: { ...getAudioStyle(size) },
			voice: rndBetween(0, limit),
		} }
		/>);
};

export default Audio;
