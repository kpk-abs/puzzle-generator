import React from 'react';
import getTileStyle from '../../helpers/tile/getTileStyle';
import { map, range } from '@laufire/utils/collection';

const Item = (context) => {
	const { data: { value, name }} = context;

	return map(range(0, value), (dummy, i) =>
		<div
			key={ i }
			className="image"
			style={ getTileStyle({ ...context, data: name }) }
		/>);
};

export default Item;
