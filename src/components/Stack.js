import React from 'react';
import { map } from '@laufire/utils/collection';
import Tile from './Tile/index';

const Stack = (context) => {
	const { data } = context;

	return map(data, (ele, i) =>
		<div
			key={ i }
			className="stack"
		>
			<Tile { ...{ ...context, data: ele } }/>
		</div>);
};

export default Stack;
