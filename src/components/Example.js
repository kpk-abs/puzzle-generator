import React from 'react';
import Tile from './Tile';
import normalizeConfig from '../services/normalizeConfig';

const Example = (context) => {
	const normalizedConfig = normalizeConfig(context);

	return (
		<Tile { ...{
			...context,
			data: {
				value: 1,
				variation: 'image',
				image: 'greenCapsicum',
				group: 'a',
			},
			config: normalizedConfig,
		} }
		/>);
};

export default Example;
