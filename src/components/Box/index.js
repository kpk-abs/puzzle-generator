import { map } from '@laufire/utils/collection';
import React from 'react';
import GameObject from '../GameObject';

const Box = (context) => {
	const { data: { items }} = context;

	return <div className="box" style={ { display: 'flex' } }>
		{map(items, (item, key) =>
			<GameObject key={ key } { ...{ ...context, data: item } }/>)}
	</div>;
};

export default Box;
