import React from 'react';
import getTileStyle from '../../helpers/tile/getTileStyle';
import { map, range } from '@laufire/utils/collection';

const NumberAndItem = (context) => {
	const { data: { value, image }} = context;

	return map(range(0, value), (ele, i) =>
		<div
			key={ i }
			className="numberAndItem"
			style={ getTileStyle({ ...context, data: { value: image }}) }
		>{value}</div>);
};

export default NumberAndItem;
