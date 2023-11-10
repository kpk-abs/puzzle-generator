import { map } from '@laufire/utils/collection';
import React from 'react';
import GameObject from '../GameObject';

const Box = (context) => {
	const { data: { items, rotation = 0 }} = context;

	return <div className="box" style={ { transform: `rotate(${ rotation }deg)` } }>
		{map(items, (item, key) =>
			<GameObject key={ key } { ...{ ...context, data: item } }/>)}
	</div>;
};

export default Box;
