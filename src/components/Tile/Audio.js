import React from 'react';
import TextToSpeech from 'react-web-components/TextToSpeech';
import { rndBetween } from '@laufire/utils/random';
import getStyle from '../../helpers/getStyle';

const limit = 100;

const Audio = (context) => {
	const { data: { value }} = context;

	return (
		<TextToSpeech { ...{
			value: value,
			className: 'gameButton',
			style: { ...getStyle({ ...context, data: { value: 'audioOn' }}) },
			voice: rndBetween(0, limit),
		} }
		/>);
};

export default Audio;
