import React from 'react';
import TextToSpeech from 'react-web-components/TextToSpeech';
import { rndBetween } from '@laufire/utils/random';
import getStyle from '../../helpers/getStyle';
import { convertNumberToWords } from '../../helpers/numToWords';

const limit = 100;

const Audio = (context) => {
	const { data: { value }} = context;
	const text = convertNumberToWords({ number: value, type: 'IN' });

	return (
		<TextToSpeech { ...{
			value: text,
			className: 'gameButton',
			style: { ...getStyle({ ...context, data: { value: 'audioOn' }}) },
			voice: rndBetween(0, limit),
		} }
		/>);
};

export default Audio;
